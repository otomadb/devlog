import { defineCollection, z } from "astro:content";

export const collections = {
  reports: defineCollection({
    schema: z.object({
      title: z.string(),
      publishedAt: z.date(),
    }),
  }),
};
