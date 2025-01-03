/* eslint-disable @next/next/no-img-element */
import { formatDate } from '@/utils/format-date'
import { useCurrentData } from '@/zustand-store'
import StarRatings from 'react-star-ratings'

interface ReviewCardProps {}

export function ReviewCard({}: ReviewCardProps) {
  const { myLastRating } = useCurrentData()

  if (!myLastRating) {
    return (
      <p className="text-gray-400 text-sm">
        Você ainda não avaliou nenhum livro
      </p>
    )
  }

  return (
    <div className="flex px-6 py-5 gap-6 items-start rounded-lg bg-gray-600 border-2 border-gray-600 hover:border-gray-500">
      <img
        src={String(myLastRating?.book?.cover_url).replace('public', '')}
        alt="Cover book"
        className="w-[108px] h-[152px] rounded-[4px]"
      />

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-gray-400 font-normal text-sm">
              {formatDate(myLastRating?.created_at)}
            </span>

            <div className="flex w-[80px]">
              <StarRatings
                rating={myLastRating?.rate}
                starRatedColor="#8381D9"
                starHoverColor="#8381D9"
                starEmptyColor="#dddddd"
                starDimension="12px"
                starSpacing="2px"
                name="rating"
                svgIconViewBox="0 0 50 50"
              />
            </div>
          </div>

          <div className="flex flex-col justify-between items-start">
            <p className="font-bold text-gray-100">
              {myLastRating?.book?.name}
            </p>

            <span className="text-gray-400 font-normal text-sm text-left">
              {myLastRating.book?.author}
            </span>
          </div>
        </div>

        <p className="text-sm font-normal text-gray-300 w-[400px] line-clamp-2">
          {myLastRating?.description}
        </p>
      </div>
    </div>
  )
}
