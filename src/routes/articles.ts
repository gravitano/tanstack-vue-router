import { createFileRoute } from '@tanstack/vue-router'
import { fetchArticles } from '../articles'

export const Route = createFileRoute('/articles')({
  head: () => ({
    meta: [
      {
        title: 'Articles',
      },
    ],
  }),
  loader: fetchArticles,
})
