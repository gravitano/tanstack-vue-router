# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

TanStack Vue Router example application demonstrating file-based routing with Vue 3, TypeScript, and Vite.

## Commands

```bash
# Development server on port 3000
pnpm dev

# Build for production (includes type checking)
pnpm build

# Preview production build
pnpm preview
```

## Architecture

### File-Based Routing

Routes are auto-generated from `src/routes/` directory structure. The `src/routeTree.gen.ts` is auto-generated - never edit it manually.

**Route file conventions:**
- `__root.ts` + `__root.component.vue` - Root layout
- `_layout.ts` - Underscore prefix creates nested layout without URL segment
- `$paramName` - Dollar sign creates dynamic route parameter (e.g., `posts.$postId.ts`)
- `(groupname)/` - Parentheses group routes without affecting URL
- `posts_.$postId.edit.ts` - Underscore after segment name breaks out of nesting

**Each route has two files:**
- `.ts` file - Route configuration (loader, search params, meta)
- `.component.vue` - Vue component for the route

### Data Loading

Routes use TanStack Router's `loader` pattern:
```typescript
// In route .ts file
loader: async () => fetchPosts()

// In component
const posts = useLoaderData({ from: '/posts' })
```

### Key Dependencies

- **@tanstack/vue-router** - Routing library
- **@tanstack/router-plugin** - Vite plugin for file-based routing with auto code-splitting
- **zod** with **@tanstack/zod-adapter** - Search param validation
- **Tailwind CSS v4** - Styling
