# Metamaterial Works Website

## Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [pnpm](https://pnpm.io/installation) (or enable via `corepack enable`)

## Setup

Install dependencies:

```bash
pnpm install
```

## Development

Start the local development server:

```bash
pnpm docs:dev
```

## Build

Build the site for production:

```bash
pnpm docs:build
```

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
