<script setup lang="ts">
import { useLoaderData } from '@tanstack/vue-router'
import type { Article } from '../articles'

const article = useLoaderData({ from: '/articles/$articleId' }) as unknown as Article
</script>

<template>
  <div class="bg-gray-50 p-6 rounded-lg">
    <h2 class="text-xl font-bold mb-2">{{ article.title }}</h2>
    <p class="text-gray-600 mb-4">User ID: {{ article.userId }}</p>
    <p class="text-gray-800 leading-relaxed">{{ article.body }}</p>
  </div>
</template>
