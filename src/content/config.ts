import { z, defineCollection } from 'astro:content';

const materiCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    topic: z.string(),
    difficulty: z.string(),
    needInteractive: z.boolean().default(false),
  }),
});

export const collections = {
  'materi': materiCollection,
};
