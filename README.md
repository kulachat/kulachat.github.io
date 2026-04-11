# kulachat.github.io

บล็อกส่วนตัวของ kulachat — เขียนเรื่องแนวคิดชีวิต การเดินทาง และเทคโนโลยี

Built with **Astro** + **Tailwind CSS** · Deployed on **GitHub Pages**

## Stack

- [Astro 4](https://astro.build) — static site generation
- [Tailwind CSS 3](https://tailwindcss.com) — styling
- [TypeScript](https://www.typescriptlang.org) — type safety
- [Noto Sans Thai](https://fonts.google.com/noto/specimen/Noto+Sans+Thai) — Thai typography

## Project Structure

```
src/
├── components/
│   ├── Header.astro        # Navigation + category bar
│   └── Footer.astro        # Simple personal footer
├── content/
│   ├── config.ts           # Blog collection schema
│   └── blog/               # Markdown blog posts
├── layouts/
│   ├── BaseLayout.astro    # Root HTML layout
│   └── BlogLayout.astro    # Blog post layout (Google-style)
├── pages/
│   ├── index.astro         # Homepage
│   ├── about.astro         # About page
│   └── blog/
│       ├── index.astro     # All posts listing
│       ├── [slug].astro    # Individual post
│       └── category/
│           └── [category].astro  # Category filter page
├── styles/
│   └── global.css
└── utils/
    └── index.ts            # Category labels + helpers
```

## Blog Categories

| Slug | ชื่อ |
|------|------|
| `life` | แนวคิดชีวิต |
| `travel` | การเดินทาง |
| `tech` | เทคโนโลยี |

## Writing a Post

สร้างไฟล์ `.md` ใน `src/content/blog/` พร้อม frontmatter:

```markdown
---
title: "ชื่อบทความ"
description: "คำอธิบายสั้น"
author: kulachat
publishDate: 2024-11-01
category: life        # life | travel | tech
tags: [ชีวิต, ความคิด]
readingTime: 5
draft: false
lang: th              # th | en
---

เนื้อหาบทความ...
```

## Development

```bash
npm install
npm run dev        # localhost:4321
npm run build      # production build
npm run preview    # preview build
npm run type-check # TypeScript check
```

## License

Personal blog — all content © kulachat
