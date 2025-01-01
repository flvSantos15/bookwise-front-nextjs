import StarRatings from 'react-star-ratings'
import { MyReviewCard } from './ReviewCard'

/* eslint-disable @next/next/no-img-element */
interface MyReviewListProps {}

export function MyReviewList({}: MyReviewListProps) {
  return (
    <div className="flex flex-col gap-6">
      <MyReviewCard />
      <MyReviewCard />
      <MyReviewCard />
    </div>
  )
}
