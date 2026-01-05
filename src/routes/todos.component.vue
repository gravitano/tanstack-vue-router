<script setup lang="ts">
import { ref, computed } from 'vue'

interface Todo {
  id: number
  text: string
  completed: boolean
}

const todos = ref<Todo[]>([])
const newTodoText = ref('')
const filter = ref<'all' | 'active' | 'completed'>('all')

let nextId = 1

function addTodo() {
  const text = newTodoText.value.trim()
  if (!text) return

  todos.value.push({
    id: nextId++,
    text,
    completed: false,
  })
  newTodoText.value = ''
}

function toggleTodo(id: number) {
  const todo = todos.value.find((t) => t.id === id)
  if (todo) {
    todo.completed = !todo.completed
  }
}

function removeTodo(id: number) {
  todos.value = todos.value.filter((t) => t.id !== id)
}

function clearCompleted() {
  todos.value = todos.value.filter((t) => !t.completed)
}

const filteredTodos = computed(() => {
  switch (filter.value) {
    case 'active':
      return todos.value.filter((t) => !t.completed)
    case 'completed':
      return todos.value.filter((t) => t.completed)
    default:
      return todos.value
  }
})

const activeCount = computed(() => todos.value.filter((t) => !t.completed).length)
const hasCompleted = computed(() => todos.value.some((t) => t.completed))
</script>

<template>
  <div class="p-4 max-w-lg mx-auto">
    <h1 class="text-2xl font-bold mb-4">Todos</h1>

    <form @submit.prevent="addTodo" class="flex gap-2 mb-4">
      <input
        v-model="newTodoText"
        type="text"
        placeholder="What needs to be done?"
        class="flex-1 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add
      </button>
    </form>

    <ul class="space-y-2 mb-4">
      <li
        v-for="todo in filteredTodos"
        :key="todo.id"
        class="flex items-center gap-2 p-2 border rounded"
      >
        <input
          type="checkbox"
          :checked="todo.completed"
          @change="toggleTodo(todo.id)"
          class="w-5 h-5"
        />
        <span
          :class="{ 'line-through text-gray-400': todo.completed }"
          class="flex-1"
        >
          {{ todo.text }}
        </span>
        <button
          @click="removeTodo(todo.id)"
          class="px-2 py-1 text-red-500 hover:text-red-700"
        >
          Delete
        </button>
      </li>
    </ul>

    <div v-if="todos.length > 0" class="flex items-center justify-between text-sm text-gray-600">
      <span>{{ activeCount }} item{{ activeCount !== 1 ? 's' : '' }} left</span>

      <div class="flex gap-2">
        <button
          @click="filter = 'all'"
          :class="{ 'font-bold underline': filter === 'all' }"
        >
          All
        </button>
        <button
          @click="filter = 'active'"
          :class="{ 'font-bold underline': filter === 'active' }"
        >
          Active
        </button>
        <button
          @click="filter = 'completed'"
          :class="{ 'font-bold underline': filter === 'completed' }"
        >
          Completed
        </button>
      </div>

      <button
        v-if="hasCompleted"
        @click="clearCompleted"
        class="hover:underline"
      >
        Clear completed
      </button>
    </div>

    <p v-if="todos.length === 0" class="text-gray-500 text-center py-4">
      No todos yet. Add one above!
    </p>
  </div>
</template>
