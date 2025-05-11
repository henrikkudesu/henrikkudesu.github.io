---
title: 'Organizing Your Content and Routes in the Astro Blog Boilerplate'
date: 2024-06-01
description: 'Learn how to structure your content files and assets within the Astro Blog Boilerplate to maintain an organized project and efficient routing.'
pubDate: 2024-06-01
updatedDate: 2024-06-01
author: 'pedro-santos'
tags: ['content', 'astro', 'organization', 'routing']
---

## Introduction

A well-organized folder structure is key for scalability and ease of maintenance. In the Astro Blog Boilerplate, content is managed via collections and dynamically routed based on your directory structure. In this post, we explain how to organize your Markdown posts and their associated assets to keep the project clean and efficient.

## Folder Structure Overview

Our blog posts are stored in `src/content/blog` with each post in its own directory. For example:

```
src/
  content/
    blog/
      first-post/
        index.md
        wrong-post-fields.png
        wrong-post-fields-output.png
      second-post/
        index.md
      third-post/
        index.md
      fourth-post/
        index.md
```

## Routing and Loader Configuration

The loader configured in `content.config.ts` uses a recursive glob, which allows Astro to automatically generate routes based on the directory structure:

```typescript
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: blogSchema,
});
```

This results in routes like `/first-post`, `/second-post`, etc. Using `index.md` as an entry point within each folder ensures clean and predictable URLs.

## Best Practices

- **Group Content by Post:**  
  Create a folder for each post containing the `index.md` and related images or other assets. This way, all post information stays concentrated and organized.

- **Use Relative Paths for Assets:**  
  When referencing images and other files within Markdown, opt for relative paths. This keeps references consistent and makes structure changes easier:

  ```markdown
  ![Example Image](./image-example.png)
  ```

- **Configuration Consistency:**  
  Ensure that the glob configuration in `content.config.ts` is correctly set to look for Markdown files recursively. This way, new posts are automatically included in your site's routes.

## Conclusion

Organizing your content and assets in a structured way not only improves project maintenance but also facilitates scalability as the site grows. By following these recommended practices, your Astro Blog Boilerplate remains clean, efficient, and easy to navigate.

Happy organizing!
