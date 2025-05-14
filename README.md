# Astro Portfolio with blog features

A clean and modern portfolio template built with [Astro](https://astro.build/), ready to showcase your work and blog posts.

## 🚀 Original Project

This project is based on:

- Original Repository: [henrikkudesu.github.io](https://github.com/henrikkudesu/henrikkudesu.github.io)
- Base Template: [Astro-blog-boilerplate](https://github.com/henrikkudesu/Astro-blog-boilerplate)

## 🎯 Features

- Minimalist design
- Blog functionality
- Portfolio showcase
- Tag support
- Fast performance
- SEO friendly
- Easy to customize

## 🛠️ Getting Started

1. Fork or clone this repository
2. Install dependencies:

```bash
npm install
```

4. Start development server:

```bash
npm run dev
```

## 📝 Customization

1. Update `src/content.config.ts` with your information
2. Replace content in `src/content/` with your posts and projects
3. Modify styles in `src/styles/` to match your preferences

# How content.config.ts Works

The content.config.ts file is the heart of the project's content management. It defines three main collections: blog, authors, and projects.

## For the Blog

- Posts must be written in Markdown (.md).
- Each post requires: title, date, publication date, author, and at least one tag.
- Dates are validated to prevent future dates.
- You can optionally add a description and an image.
- Posts are located in `src/content/blog/`.

## For the Authors

- Author data is stored in a JSON file (`src/content/authors/authors.json`).
- Each author must have: a name (at least 2 characters) and a valid email.
- Optionally, authors can have: a biography, avatar, and social links (Twitter/GitHub/Linkedin and so on, you can add more by changing `SocialIcons.astro` component).

## For the Projects

- Projects are defined in a JSON file (`src/content/projects/projects.json`).
- Each project requires: title, description, icon class, and at least one tag.
- Optionally, projects can include: a GitHub link and a demo link.
- A project image is mandatory but you can change these kind of rules by adding or removing `.optional()` in `content.config.ts`.

## How to Use

- To create a new post: add a `.md` file in `src/content/blog/`.
- To add an author: edit the `authors.json` file.
- To add a project: edit the `projects.json` file.

## Example of a Markdown Post

```markdown
---
title: 'My Post'
date: 2024-01-01
pubDate: '2024-01-01'
author: 'your-name'
tags: ['technology', 'development']
description: 'Optional description'
image: '/images/blog/your-image.jpg'
---

Post content goes here...
```

Store your images at `./public/images/` and the components will do the rest (Like displaying the image on the cards (BlogList.astro)). The same goes to your project images.

If something is configured incorrectly, Astro will display clear errors during development, helping to maintain content consistency.

## Example of an Author in `authors.json`

```json
{
  "john-doe": {
    "name": "John Doe",
    "email": "john@example.com",
    "bio": "Web developer and technology enthusiast",
    "avatar": "/images/authors/john-doe.png",
    "socialLinks": {
      "twitter": "https://twitter.com/johndoe",
      "github": "https://github.com/johndoe"
    }
  }
}
```

Each author entry must include a slug field. In this example, the slug is set as `john-doe`.

`projects.json` its similar. Just follow the rules from the schemas in `content.config.json` and you will be good.

## How to style the markdown posts

Just edit the `src/components/Prose.astro`. In additional you can change the styling of some parts of the post page by editing `src/pages/blogarticle/[slug].astro` file.

## Component Explanation

This section outlines the functionality for three key components that combine JavaScript logic with HTML and Tailwind styling.

### Projects.astro

- Imports Astro's getCollection to fetch data from the "projects" collection (projects.json).
- Displays a responsive grid layout.
- For each project, a card is rendered with:
  - An image featuring hover effects.
  - Title, description, and tags as badges.
  - Conditional links to GitHub and demo when available.

### BlogList.astro

- Retrieves blog posts using getCollection.
- Maps posts to include author details via getEntry.
- Limits the display to the 6 most recent posts (using slice(0, 6)).
- Defines a Props interface for handling images efficiently.

### SocialIcons

- Accepts a socialLinks object with optional URLs for GitHub, Twitter, and LinkedIn.
- Optionally takes a className for styling and collects additional props with the rest parameter.
- Uses conditional rendering to display each social icon only if its URL is provided.

## 📄 License

This project is free to use. Feel free to fork and create your own portfolio!

## 🙏 Credits

Created by [henrikkudesu](https://github.com/henrikkudesu)

# Read the Docs

Astro Docs [here](https://docs.astro.build/en/getting-started/).
