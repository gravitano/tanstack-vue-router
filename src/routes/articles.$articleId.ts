import { createFileRoute } from '@tanstack/vue-router'
import { fetchArticle } from '../articles'

export const Route = createFileRoute('/articles/$articleId')({
  loader: async ({ params: { articleId } }) => fetchArticle(articleId),
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData?.title || 'Article',
      },
    ],
  }),
})
