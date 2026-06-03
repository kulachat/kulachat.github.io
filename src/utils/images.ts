import type { ImageMetadata } from 'astro';

type ContentImage = {
  src: string;
  alt: string;
};

type BlogImageModule = {
  default: ImageMetadata;
};

const blogImages = import.meta.glob<BlogImageModule>('../assets/blog/*.{avif,jpeg,jpg,png,webp}', {
  eager: true,
});

export type ResolvedContentImage = {
  src: ImageMetadata | string;
  alt: string;
  publicSrc: string;
};

export function resolveContentImage(image?: ContentImage): ResolvedContentImage | undefined {
  if (!image) {
    return undefined;
  }

  if (image.src.startsWith('/images/blog/')) {
    const filename = image.src.split('/').pop();
    const asset = filename ? blogImages[`../assets/blog/${filename}`]?.default : undefined;

    if (asset) {
      return {
        src: asset,
        alt: image.alt,
        publicSrc: image.src,
      };
    }
  }

  return {
    src: image.src,
    alt: image.alt,
    publicSrc: image.src,
  };
}
