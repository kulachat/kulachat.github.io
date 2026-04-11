import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string().default('kulachat'),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    category: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }).optional(),
    readingTime: z.number().optional(),
    lang: z.enum(['th', 'en']).default('th'),
  }),
});

export const collections = {
  blog: blogCollection,
};
