import { api } from '@/libs/axios'

import { Rating } from '@/interfaces'

export async function getMyLastingRating() {
  const response = await api.get<Rating>(`/get-my-last-rating`)

  return response.data
}

export async function getMyRatings() {
  const response = await api.get<Rating[]>(`/my-ratings`)

  return response.data
}
