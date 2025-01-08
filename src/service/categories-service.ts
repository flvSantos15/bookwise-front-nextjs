import { api } from '@/libs/axios'

import { Category } from '@/interfaces'

export async function getCategories() {
  const response = await api.get<Category[]>('/categories')

  return response.data
}
