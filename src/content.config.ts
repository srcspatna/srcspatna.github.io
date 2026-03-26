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
    seo_body: z.string().optional(),
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
    seo_body: z.string().optional(),
  }),
});

const marqueeItemsCollection = defineCollection({
  loader: glob({
    base: './src/content/data/marquee_items',
    pattern: '**/*.{md,mdx}',
  }),
  schema: z.object({
    description: z.string(),
  }),
});

const showcaseCollection = defineCollection({
  loader: glob({
    base: './src/content/data/showcase',
    pattern: '**/*.{md,mdx}',
  }),
  schema: z.object({
    eyebrow: z.string(),
    title: z.string(),
    description: z.string(),
    ctaLabel: z.string(),
    ctaHref: z.string(),
    secondaryLabel: z.string(),
    secondaryHref: z.string(),
    statLabel: z.string(),
    statValue: z.string(),
    accent: z.enum(['amber', 'emerald', 'blue']),
  }),
});

const footerCollection = defineCollection({
  loader: glob({
    base: './src/content/data',
    pattern: 'footer.{md,mdx}',
  }),
  schema: z.object({
    primaryText: z.string().optional(),
    secondaryText: z.string().optional(),
  }),
});

export const collections = {
  pages: pagesCollection,
  posts: postsCollection,
  marquee_items: marqueeItemsCollection,
  showcase: showcaseCollection,
  footer: footerCollection,
};