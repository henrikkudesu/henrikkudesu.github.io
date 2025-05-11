// 1. Import utilities from `astro:content`
import { defineCollection, reference, z } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

const dateValidator = (inputDate: Date): boolean => {
  const todayString = new Date().toISOString().split('T')[0];
  const inputDateString = inputDate.toISOString().split('T')[0];
  return inputDateString <= todayString;
};

// 3. Define your collection(s)
const blogSchema = z.object({
  title: z.string({
    required_error: 'Title is required',
    invalid_type_error: 'Title must be a string',
  }),
  date: z
    .date({
      required_error: 'Date is required',
      invalid_type_error: 'Date must be a valid date',
    })
    .refine(dateValidator, {
      message: 'Date cannot be in the future',
    }),
  description: z.string().optional(),
  pubDate: z.coerce
    .date({
      required_error: 'Publication date is required',
    })
    .refine(dateValidator, {
      message: 'Publication date cannot be in the future',
    }),
  updatedDate: z.coerce.date().optional(),
  author: reference('authors'),
  tags: z.array(z.string()).min(1, 'At least one tag is required'),
});

const authorSchema = z.object({
  name: z
    .string({
      required_error: 'Author name is required',
      invalid_type_error: 'Name must be a string',
    })
    .min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  bio: z.string().optional(),
  avatar: z
    .string()
    .min(1, 'Avatar must be a valid URL or a relative path')
    .optional(),
  socialLinks: z
    .object({
      twitter: z.string().url('Twitter link must be a valid URL').optional(),
      github: z.string().url('GitHub link must be a valid URL').optional(),
    })
    .optional(),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: blogSchema,
});

const authors = defineCollection({
  loader: file('src/content/authors/authors.json'),
  schema: authorSchema,
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { blog, authors };
