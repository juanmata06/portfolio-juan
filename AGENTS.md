# Juan's Portfolio

Personal portfolio. Static site built with Astro; Supabase is initialized
(`supabase/config.toml`) for the contact form backend, which is being built
step by step.

## Stack

- **Astro 7** (static output) + **TypeScript** (strict).
- **Tailwind CSS v4** via `@tailwindcss/vite`. There is no `tailwind.config.js`:
  config and design tokens live in `src/styles/global.css` with `@theme`.
  That CSS must be imported in the root layout/page.
- **Supabase** (CLI as a devDependency, `pnpm supabase ...`). Only the initial
  `supabase init` config exists; the user creates functions, migrations and the
  browser client step by step.
- **Impeccable** (`/impeccable`) for all design/UI work. Product context lives in
  `PRODUCT.md` and the visual system in `DESIGN.md` (generated with
  `/impeccable init` and `/impeccable document`).
- **pnpm** as the package manager.

## Commands

| Command               | What it does                               |
| --------------------- | ------------------------------------------ |
| `pnpm dev`            | Development server (localhost:4321)        |
| `pnpm build`          | `astro check` + build to `dist/`           |
| `pnpm check`          | Astro/TS type checking                     |
| `pnpm format`         | Prettier (includes Tailwind class sorting) |
| `pnpm supabase <cmd>` | Supabase CLI                               |

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Conventions

- The user writes components and pages; do not create new components or pages
  unless explicitly asked.
- Style only with Tailwind utilities and `@theme` tokens; no loose CSS unless
  justified.
- The user builds the contact backend (Supabase/Deno) step by step: do not
  create Supabase functions, migrations or clients on your own initiative;
  explain and guide each step.
- Code, comments and documentation are written in English.
- Before design work, use the `impeccable` skill and respect `PRODUCT.md` /
  `DESIGN.md`.

## Documentation

Full documentation: https://docs.astro.build (also available via the `astro-docs` MCP).

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
- [Supabase Edge Functions](https://supabase.com/docs/guides/functions)
