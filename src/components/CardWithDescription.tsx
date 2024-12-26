'use client'

import StarRatings from 'react-star-ratings'

export function CardWithDescription() {
  return (
    <div className="flex flex-col px-6 py-5 gap-8 items-start rounded-lg bg-gray-600 border-2 border-gray-600 hover:border-gray-500">
      <div className="flex gap-4 h-12">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/Avatar.png"
          alt=""
          className="w-10 h-10 rounded-full"
        />

        <div className="flex flex-col w-[392px]">
          <span className="text-gray-100 font-normal">Jaxson Dias</span>

          <span className="text-gray-400 font-normal text-sm">Hoje</span>
        </div>

        <div className="flex w-[108px]">
          <StarRatings
            rating={4}
            // changeRating={handleSendRating}
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
        {/* image here */}
        <div className="w-[108px] h-[152px] rounded-[4px] border border-solid border-[red]"></div>

        <div className="flex flex-col justify-between items-start gap-5 flex-1">
          <div className="flex flex-col justify-between items-center">
            <p className="font-bold text-gray-100">O Hobbit</p>

            <span className='text-gray-400 font-normal text-sm'>J.R.R. Tolkien</span>
          </div>

          <p className="text-sm font-normal text-gray-300 w-[432px] h-[88px]">
            Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed vulputate massa velit nibh
          </p>
        </div>
      </div>
    </div>
  )
}
