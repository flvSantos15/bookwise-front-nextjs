'use client'

import StarRatings from "react-star-ratings";

export function CardWithoutDescription() {
  return (
    <div className="flex px-5 py-4 gap-5 items-start rounded-lg bg-gray-700 border-2 border-gray-700 hover:border-gray-600">
      <div className="w-[64px] h-[94px] rounded-[4px] border"></div>

      <div className="flex flex-col items-start justify-between flex-1 py-[2px h-[100%]">
        <div className="flex flex-col items-start">
          <p className="font-bold text-gray-100">A revolução dos bichos</p>

          <p className="text-sm font-normal text-gray-400">George Orwell</p>
        </div>

        <div className="flex w-[96px]">
          <StarRatings
            rating={4}
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
    </div>
  )
}
