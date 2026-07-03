# Mary's Makings React Site

React + TypeScript + Vite site for Mary's Makings, including the Mossypost archive migrated from the original WordPress site so the layout, copy, and routing can be customized directly in code.

## Getting Started

Install dependencies:

```sh
npm install
```

Run the local dev server:

```sh
npm run dev
```

Create a production build:

```sh
npm run build
```

Preview the production build locally:

```sh
npm run preview
```

Run linting:

```sh
npm run lint
```

## Project Structure

- `src/App.tsx` handles simple path-based routing.
- `src/pages/` contains standalone pages such as the homepage, section pages, About, and 404.
- `src/features/archive/` contains archive page rendering, post cards, and archive-specific UI.
- `src/features/articles/` contains article page rendering and article block rendering.
- `src/components/` contains shared shell components such as the layout and header.
- `src/data/posts.ts` contains copied post metadata and article body blocks.
- `src/data/about.ts` contains About page content.
- `src/lib/archives.ts` defines archive pagination and the post limit per archive page.
- `src/lib/posts.ts` contains post lookup helpers.
- `src/lib/routing.ts` normalizes URL paths.
- `src/data/site.ts` stores shared site title and route constants.
- `src/types.ts` defines article and post data shapes.
- `src/index.css` contains the WordPress-inspired theme styling.

## Routes

- `/` - fresh homepage with top-level section links.
- `/collections/`, `/shop/`, `/events/`, `/contact/` - top navigation section pages.
- `/mature/` - 18+ mature content section with birthdate age verification.
- `/mossypost/` - Mossypost archive with the first page of posts.
- `/mossypost/page/2/`, `/mossypost/page/3/`, etc. - generated older-post archive pages.
- `/about/` - About page.
- `/2026/.../` - individual article pages using WordPress-style slugs.

## Content Notes

The project currently uses copied text and remote image URLs from the original WordPress site. Article content is represented as structured data blocks so pages can be rendered consistently without embedding everything in `App.tsx`.

When adding or editing posts, update `src/data/posts.ts`. Archive pages are generated from that file using `POSTS_PER_PAGE` in `src/lib/archives.ts`, so additional archive routes appear automatically as the post list grows.
