import { createFileRoute } from '@tanstack/vue-router'

export const Route = createFileRoute('/todos')({
  head: () => ({
    meta: [
      {
        title: 'Todos',
      },
    ],
  }),
})
