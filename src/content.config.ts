// 1. Import utilities from `astro:content`
import { defineCollection, reference, z } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Define your collection(s)
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: reference('authors'),
    // Reference an array of related posts from the `blog` collection by `slug`
    tags: z.array(z.string()),
  }),
});

const authors = defineCollection({
  loader: file('src/content/authors/authors.json'),
  schema: z.object({
    name: z.string(),
    email: z.string().email(),
    bio: z.string().optional(),
    avatar: z.string().optional(),
    socialLinks: z
      .object({
        twitter: z.string().optional(),
        github: z.string().optional(),
      })
      .optional(),
  }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { blog, authors };
