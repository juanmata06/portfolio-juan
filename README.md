# Juan's Portfolio

Personal portfolio built with **Astro + Tailwind CSS v4**, with **Supabase** for the
contact form, developed with **Claude Code** and designed with
**[Impeccable](https://impeccable.style/)**.

## Getting started

```sh
pnpm install
pnpm dev               # http://localhost:4321
```

## Supabase

Only the initial configuration exists (`supabase init`). Use the CLI with
`pnpm supabase <command>`; local Supabase (`pnpm supabase start`) requires Docker.

## Claude Code + Impeccable

- `CLAUDE.md` (→ `AGENTS.md`) holds the project context for Claude Code.
- `.mcp.json` adds the **Astro Docs** and **Supabase** MCP servers (Supabase asks for an
  OAuth login the first time; once the project is linked you can scope it with
  `?project_ref=<ref>` in the URL).
- Impeccable is installed in `.claude/skills/impeccable`. First steps in Claude Code:
  ```
  /impeccable init        # generates PRODUCT.md (product context)
  /impeccable shape       # explores the visual direction
  /impeccable document    # generates DESIGN.md from the code
  ```
  Other useful commands: `critique`, `audit`, `polish`, `typeset`, `colorize`,
  `layout`, `animate`, `adapt`, `live`.
- If you clone the repo on another machine, reinstall the Impeccable hooks with
  `npx impeccable install --providers=claude --scope=project --yes`.

## Commands

| Command               | Action                                        |
| :-------------------- | :-------------------------------------------- |
| `pnpm dev`            | Development server at `localhost:4321`        |
| `pnpm build`          | Type checking + production build to `dist`    |
| `pnpm preview`        | Preview the build                             |
| `pnpm check`          | Type checking (`astro check`)                 |
| `pnpm format`         | Format with Prettier (sorts Tailwind classes) |
| `pnpm supabase <cmd>` | Supabase CLI                                  |

## Structure

```text
/
├── .claude/                 # Claude Code config + Impeccable skill
├── public/
├── src/
│   ├── pages/
│   └── styles/global.css    # Tailwind v4 + design tokens (@theme)
├── supabase/
│   └── config.toml          # Initial Supabase config (supabase init)
├── astro.config.mjs         # Astro + Tailwind config
└── .mcp.json                # Astro Docs and Supabase MCP servers
```
