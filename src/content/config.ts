// src/content/config.ts Example
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    // Define schema matching .pages.yml
  }),
});

export const collections = { blog };
