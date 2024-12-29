import { Rating } from '@/interfaces'
import { formatDate } from '@/utils/format-date'
import StarRatings from 'react-star-ratings'

/* eslint-disable @next/next/no-img-element */
interface CommentItemProps {
  rating: Rating
}

export function CommentItem({ rating }: CommentItemProps) {
  return (
    <div className="flex flex-col gap-5 p-6 rounded-lg bg-gray-700">
      <div className="flex items-start gap-4">
        <img
          src={rating?.user?.avatar_url}
          alt=""
          className="w-10 h-10 rounded-full"
        />

        <div className="flex flex-col">
          <span className="text-gray-100 font-bold">{rating?.user?.name}</span>

          <span className="text-gray-400 font-normal text-sm">
            {formatDate(rating?.created_at)}
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <StarRatings
            rating={rating?.rate}
            // changeRating={handleSendRating}
            starRatedColor="#8381D9"
            starHoverColor="#8381D9"
            starEmptyColor="#dddddd"
            starDimension="16px"
            starSpacing="2px"
            name="rating"
            svgIconViewBox="0 0 50 50"
          />
        </div>
      </div>

      <p className="text-gray-300 font-normal text-sm">{rating?.description}</p>
    </div>
  )
}
