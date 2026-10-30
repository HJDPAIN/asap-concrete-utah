import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const services = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    order: z.number(),
    icon: z.string(),
    summary: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    image: z.string().nullable(),
    imageAlt: z.string(),
    placeholder: z.string().optional(),
    gallery: z.array(z.string()).default([]),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
  }),
});

const articles = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    description: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    relatedService: z.string(),
    sourceUrl: z.string().url(),
  }),
});

export const collections = { services, articles };
