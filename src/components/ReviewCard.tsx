/* eslint-disable @next/next/no-img-element */
import StarRatings from 'react-star-ratings'

interface ReviewCardProps {}

export function ReviewCard({}: ReviewCardProps) {
  return (
    <div className="flex px-6 py-5 gap-6 items-start rounded-lg bg-gray-600 border-2 border-gray-600 hover:border-gray-500">
      <img
        // src={String(rating?.book?.cover_url).replace('public', '')}
        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
        alt="Cover book"
        className="w-[108px] h-[152px] rounded-[4px]"
      />

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-gray-400 font-normal text-sm">Ha 2 dias</span>

            <div className="flex w-[80px]">
              <StarRatings
                rating={3}
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
            <p className="font-bold text-gray-100">O Hobbit</p>

            <span className="text-gray-400 font-normal text-sm text-left">
              J. R. R. Tolkien
            </span>
          </div>
        </div>

        <p className="text-sm font-normal text-gray-300 w-[400px] line-clamp-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          quae, quos quia quidem quisquam quod quas quibusdam quia quae
        </p>
      </div>
    </div>
  )
}
