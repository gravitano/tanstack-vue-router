# Commands

```bash
pnpm dev          # Start dev server on port 3000
pnpm build        # Build + typecheck (vue-tsc --noEmit)
pnpm preview      # Preview production build
```

# Code Style

- **Routes**: Separate `.ts` config and `.component.vue` files. Route tree (`routeTree.gen.ts`) is auto-generated.
- **Vue Components**: Use `<script setup lang="ts">`, no comments unless necessary.
- **Imports**: Group external then internal imports, one blank line between groups.
- **Types**: Define types in separate files (e.g., `posts.ts`), import with `type` keyword.
- **Route Config**: Use `createFileRoute` with loader/head/errorComponent, return Route export.
- **Components**: PascalCase component names, use `Link` and `Outlet` from `@tanstack/vue-router`.
- **Styling**: Tailwind CSS utility classes, avoid custom CSS.
- **TypeScript**: Strict mode enabled, avoid `any` (eslint warns), use proper typing.
- **Error Handling**: Use `notFoundComponent` for 404s, loaders handle async data.
