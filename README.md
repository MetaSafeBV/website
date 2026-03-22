# Metamaterial Works Website

Main repository for the Metamaterial Works website.

## Development

### Setup

1. Install [Node.js](https://nodejs.org/en/download/)
2. Enable [corepack](https://nodejs.org/api/corepack.html) and install pnpm: `corepack enable && corepack prepare pnpm@latest --activate`
3. Install dependencies: `pnpm install`

### Local Development

1. Start the development server: `pnpm docs:dev`
2. Access the local server at http://localhost:5173

### Build

To build the static files for deployment, run `pnpm docs:build`. The static files will be generated in the `.vitepress/dist` directory.

### Preview

The production build of the website is minified and optimized. To preview the production build, run `pnpm docs:preview`.

## Adding Content

Content lives in the `src` directory, organized by locale. The default locale is English (`en`).

### Creating a new page

1. **Create a file** under the desired locale directory (e.g., `src/en/my-page.md`). For nested sections, create a subdirectory whose name will appear in the sidebar.
2. **Add a title** in the frontmatter — this becomes the page title and sidebar label:

```md
---
title: My Page Title
---
```

or

```md
# My Page Title
```

3. **Write your content** in Markdown below the frontmatter.

### Directory structure example

```
src/
└── en/                        ← locale directory (default: English)
    ├── index.md               ← homepage
    ├── getting-started.md     ← top-level page
    └── advanced/              ← nested section (becomes a sidebar group)
        ├── configuration.md
        └── deployment.md
```

`src/` is the root content folder. Everything inside it is documentation content or helpers to build the site.

Locale directories (e.g. `en/`, `fr/`) sit directly inside `src/`. Each one holds the full content tree for that language. If you only have one language, you'll only ever touch `en/`.

`.md` files map directly to pages on the site. The filename becomes part of the URL — so `src/en/getting-started.md` becomes `/en/getting-started`.

Subdirectories create nested sections. A folder like `advanced/` groups related pages together and typically appears as a collapsible section in the sidebar. The folder name is used as the section label.

### Adding a news article

News articles live in `src/en/news/`.

The filename becomes the URL slug — `my-article.md` → `/en/news/my-article`.

Every news file needs a frontmatter block at the top. This will be used to create a new entry for the list on the main page.

```md
---
layout: doc
title: Your Article Title
created_at: 2026-03-15
description: A short summary of the article. Supports **markdown**.
imgPath: /assets/news/your-image.png
---
```

| Field         | Required | Description                                                                                                    |
| ------------- | -------- | -------------------------------------------------------------------------------------------------------------- |
| `layout`      | yes      | Always set to `doc`.                                                                                           |
| `title`       | yes      | The article title. Shown on the news list and the article page.                                                |
| `created_at`  | yes      | Publication date in `YYYY-MM-DD` format.                                                                       |
| `description` | no       | Short summary shown in the news list. Falls back to the first paragraph.                                       |
| `imgPath`     | no       | Path to a thumbnail image. Place images in `src/public/assets/news/`. Falls back to `/assets/news/{slug}.png`. |

To scaffold a new one, run:

```bash
pnpm news:new "Your Article Title"
```

This creates a file in `src/en/news/` with the frontmatter pre-filled and today's date. The filename is derived from the title — `"Your Article Title"` → `src/en/news/your-article-title`

After the frontmatter, write the article body in regular Markdown.

The news list is generated automatically. Run `pnpm generate:news` to rebuild it — this also runs automatically on pre-commit.
