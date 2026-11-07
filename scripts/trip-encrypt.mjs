// Builds the private trip guide and encrypts it with the PIN from .env (TRIP_PIN).
//
// The plaintext source (src/pages/trip-source.astro) and the ticket image
// (public/images/wedding-weekend/) are git-ignored. Only the encrypted payload
// written to src/data/trip.enc.json is committed; src/pages/trip.astro asks for
// the PIN and decrypts it in the browser.
//
// Usage: npm run trip:encrypt   (after editing trip-source.astro or changing the PIN)

import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { webcrypto as crypto } from 'node:crypto';
import sharp from 'sharp';

const root = path.resolve(
  path.dirname(new URL(import.meta.url).pathname),
  '..'
);
const SOURCE = path.join(root, 'src/pages/trip-source.astro');
const BUILT = path.join(root, 'dist/trip-source/index.html');
const TICKET = path.join(
  root,
  'public/images/wedding-weekend/boarding-pass.png'
);
const TICKET_URL = '/images/wedding-weekend/boarding-pass.png';
const OUT = path.join(root, 'src/data/trip.enc.json');
const ITERATIONS = 600_000;

function readPin() {
  let pin = process.env.TRIP_PIN;
  const envFile = path.join(root, '.env');
  if (!pin && fs.existsSync(envFile)) {
    pin = fs.readFileSync(envFile, 'utf8').match(/^TRIP_PIN=(\S+)/m)?.[1];
  }
  if (!/^\d{4,8}$/.test(pin ?? '')) {
    throw new Error('Set TRIP_PIN (4-8 digits) in .env or the environment.');
  }
  return pin;
}

const pin = readPin();
if (!fs.existsSync(SOURCE)) throw new Error(`Missing ${SOURCE}`);

// src/pages/trip.astro imports the payload, so it must exist before the first build.
if (!fs.existsSync(OUT)) {
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, '{"v":0}\n');
}

execSync('npx astro build', { cwd: root, stdio: 'inherit' });
let html = fs.readFileSync(BUILT, 'utf8');

const ticket = await sharp(TICKET).webp({ quality: 82 }).toBuffer();
const ticketDataUrl = `data:image/webp;base64,${ticket.toString('base64')}`;
const refs = html.split(TICKET_URL).length - 1;
if (refs === 0)
  throw new Error('Ticket image reference not found in built page.');
html = html.replaceAll(TICKET_URL, ticketDataUrl);

// Never leave the plaintext build lying around in dist/.
fs.rmSync(path.dirname(BUILT), { recursive: true, force: true });

const salt = crypto.getRandomValues(new Uint8Array(16));
const iv = crypto.getRandomValues(new Uint8Array(12));
const baseKey = await crypto.subtle.importKey(
  'raw',
  new TextEncoder().encode(pin),
  'PBKDF2',
  false,
  ['deriveKey']
);
const key = await crypto.subtle.deriveKey(
  { name: 'PBKDF2', salt, iterations: ITERATIONS, hash: 'SHA-256' },
  baseKey,
  { name: 'AES-GCM', length: 256 },
  false,
  ['encrypt']
);
const data = await crypto.subtle.encrypt(
  { name: 'AES-GCM', iv },
  key,
  new TextEncoder().encode(html)
);

const b64 = (buf) => Buffer.from(buf).toString('base64');
fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(
  OUT,
  JSON.stringify({
    v: 1,
    digits: pin.length,
    kdf: 'PBKDF2-SHA256',
    iterations: ITERATIONS,
    salt: b64(salt),
    iv: b64(iv),
    data: b64(data),
  }) + '\n'
);

console.log(
  `\nEncrypted trip guide -> ${path.relative(root, OUT)} (${(fs.statSync(OUT).size / 1024).toFixed(0)} KB, ticket ${(ticket.length / 1024).toFixed(0)} KB, ${refs} image refs inlined)`
);
