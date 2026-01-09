# TanStack Vue Router Example

A comprehensive example application demonstrating [TanStack Router](https://tanstack.com/router) with Vue 3, TypeScript, and Vite. Features file-based routing, data loading patterns, and modern UI components.

## Features

- **File-Based Routing** - Auto-generated type-safe routes from directory structure
- **Data Loading** - Pre-fetch data with router loaders
- **Nested Layouts** - Composable layout system with outlets
- **Dashboard Example** - Interactive charts, data tables, and sidebar navigation
- **shadcn/ui Components** - 40+ accessible Vue components
- **TypeScript** - Full type safety across routes and components
- **Tailwind CSS v4** - Utility-first styling

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development server (port 3000)
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Project Structure

```
src/
├── routes/                 # File-based routes (auto-generates routeTree.gen.ts)
│   ├── __root.ts          # Root route configuration
│   ├── __root.component.vue
│   ├── posts.ts           # Posts route with data loader
│   ├── posts.component.vue
│   ├── posts.$postId.ts   # Dynamic route parameter
│   └── dashboard.ts       # Dashboard with sidebar layout
├── components/
│   ├── ui/                # shadcn/ui Vue components
│   ├── AppSidebar.vue     # Dashboard sidebar
│   ├── DataTable.vue      # Advanced data table
│   └── ChartAreaInteractive.vue
├── lib/                   # Utilities
├── main.ts               # App entry point
└── routeTree.gen.ts      # Auto-generated (DO NOT EDIT)
```

## Route Conventions

| Pattern | Description | Example |
|---------|-------------|---------|
| `__root.ts` | Root layout | `src/routes/__root.ts` |
| `_layout.ts` | Nested layout (no URL segment) | `src/routes/_layout.ts` |
| `$param` | Dynamic parameter | `posts.$postId.ts` → `/posts/123` |
| `(group)/` | Route grouping (no URL) | `(group)/inside.ts` → `/inside` |
| `posts_.$postId.edit.ts` | Break out of nesting | `/posts/123/edit` |

Each route consists of two files:
- `.ts` - Route configuration (loader, search params, meta)
- `.component.vue` - Vue component

## Data Loading

Routes can pre-fetch data using the `loader` pattern:

```typescript
// posts.ts
import { createFileRoute } from '@tanstack/vue-router'
import { fetchPosts } from '@/posts'

export const Route = createFileRoute('/posts')({
  loader: async () => fetchPosts(),
})
```

```vue
<!-- posts.component.vue -->
<script setup lang="ts">
import { useLoaderData } from '@tanstack/vue-router'

const posts = useLoaderData({ from: '/posts' })
</script>
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home page |
| `/posts` | Posts list with data loading |
| `/posts/:id` | Individual post (dynamic route) |
| `/articles` | Articles list |
| `/todos` | Interactive todo app |
| `/dashboard` | Full dashboard with charts and data table |

## Tech Stack

- **Vue 3.5** - Composition API with `<script setup>`
- **TanStack Router** - Type-safe file-based routing
- **TanStack Table** - Headless data table
- **Vite 7** - Build tool
- **TypeScript 5.8** - Type checking
- **Tailwind CSS v4** - Styling
- **shadcn/ui Vue** - Component library
- **Unovis** - Data visualization
- **Zod** - Schema validation

## License

MIT
