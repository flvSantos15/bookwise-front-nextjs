/* eslint-disable @next/next/no-img-element */
'use client'

import { Rating } from '@/interfaces'
import { formatDate } from '@/utils/format-date'
import StarRatings from 'react-star-ratings'

interface PageProps {
  rating: Rating
}

export function RatingCard({ rating }: PageProps) {
  return (
    <div className="flex flex-col px-6 py-5 gap-8 items-start rounded-lg bg-gray-600 border-2 border-gray-600 hover:border-gray-500">
      <div className="flex gap-4 h-12">
        <img
          src={rating?.user?.avatar_url}
          alt=""
          className="w-10 h-10 rounded-full"
        />

        <div className="flex flex-col w-[392px]">
          <span className="text-gray-100 font-normal">
            {rating?.user?.name}
          </span>

          <span className="text-gray-400 font-normal text-sm">
            {formatDate(rating.created_at)}
          </span>
        </div>

        <div className="flex w-[110px]">
          <StarRatings
            rating={rating?.rate}
            starRatedColor="#8381D9"
            starHoverColor="#8381D9"
            starEmptyColor="#dddddd"
            starDimension="17px"
            starSpacing="2px"
            name="rating"
            svgIconViewBox="0 0 50 50"
          />
        </div>
      </div>

      <div className="flex gap-5">
        <img
          src={`/${rating?.book?.cover_url}`}
          alt="Cover book"
          className="w-[108px] h-[152px] rounded-[4px]"
        />

        <div className="flex flex-col justify-between items-start gap-5 flex-1">
          <div className="flex flex-col justify-between items-start">
            <p className="font-bold text-gray-100">{rating?.book?.name}</p>

            <span className="text-gray-400 font-normal text-sm text-left">
              {rating?.book?.author}
            </span>
          </div>

          <p className="text-sm font-normal text-gray-300 w-[406px] h-[88px]">
            {rating?.description}
          </p>
        </div>
      </div>
    </div>
  )
}
