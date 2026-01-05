export type Article = {
  id: number
  userId: number
  title: string
  body: string
}

export async function fetchArticles(): Promise<Array<Article>> {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  return response.json()
}

export async function fetchArticle(id: string): Promise<Article> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  return response.json()
}
