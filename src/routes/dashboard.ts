import { createFileRoute } from "@tanstack/vue-router"

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      {
        title: "Dashboard",
      },
    ],
  }),
})
