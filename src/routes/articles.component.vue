<script setup lang="ts">
import { Link, Outlet, useLoaderData } from '@tanstack/vue-router'
import type { Article } from '../articles'

const articles = useLoaderData({ from: '/articles' }) as unknown as Array<Article>
</script>

<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Articles</h1>
    <div class="flex gap-4">
      <ul class="list-disc pl-4 w-1/3">
        <li
          v-for="article in articles"
          :key="article.id"
          class="whitespace-nowrap"
        >
          <Link
            to="/articles/$articleId"
            :params="{ articleId: String(article.id) }"
            class="block py-1 text-blue-600 hover:opacity-75"
            :activeProps="{ class: 'font-bold underline' }"
          >
            {{ article.title.substring(0, 30) }}...
          </Link>
        </li>
      </ul>
      <div class="w-2/3">
        <Outlet />
      </div>
    </div>
  </div>
</template>
