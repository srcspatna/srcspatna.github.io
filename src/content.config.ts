import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const pagesCollection = defineCollection({
  loader: glob({
    base: './src/content/pages',
    pattern: '**/*.{md,mdx}',
  }),
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    section: z.string().optional(),
    sourceUrl: z.string().url().optional(),
    date: z.string().optional(),
    seobody: z.string().optional(),
  }),
});

const postsCollection = defineCollection({
  loader: glob({
    base: './src/content/posts',
    pattern: '**/*.{md,mdx}',
  }),
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    section: z.string().optional(),
    sourceUrl: z.string().url().optional(),
    date: z.string().optional(),
    seobody: z.string().optional(),
  }),
});

export const collections = {
  pages: pagesCollection,
  posts: postsCollection,
};