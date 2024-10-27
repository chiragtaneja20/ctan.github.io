import { defineCollection, z } from 'astro:content';

const notes = defineCollection({
  schema: z.object({
    title: z.string(),
    type: z.enum(['paper', 'book', 'article']),
    status: z.enum(['reading', 'done']),
    url: z.string().url().optional(),
    hasNotes: z.boolean().default(false),
    date: z.string(),
  }),
});

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  notes,
  blog,
};