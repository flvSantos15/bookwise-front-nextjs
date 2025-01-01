import StarRatings from 'react-star-ratings'

/* eslint-disable @next/next/no-img-element */
interface MyReviewCardProps {}

export function MyReviewCard({}: MyReviewCardProps) {
  return (
    <div className="flex flex-col gap-2.5">
      <span className="text-gray-300 font-normal text-sm">Ha 2 dias</span>

      <div className="flex flex-col gap-6 p-6 rounded-lg bg-gray-700 w-[624px]">
        <div className="flex gap-6">
          <img
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            alt=""
            className="w-[98px] h-[134px] rounded-lg border"
          />

          <div className="flex flex-col py-1 justify-between">
            <div className="flex flex-col gap-[2px]">
              <span className="text-gray-100 font-bold text-lg">
                Entendendo Algoritimos
              </span>
              <span className="text-gray-400 font-normal text-sm">Aditya</span>
            </div>

            <div className="w-[96px]">
              <StarRatings
                rating={3}
                starRatedColor="#8381D9"
                starHoverColor="#8381D9"
                starEmptyColor="#dddddd"
                starDimension="14px"
                starSpacing="2px"
                name="rating"
                svgIconViewBox="0 0 50 50"
              />
            </div>
          </div>
        </div>

        <div className="">
          <p className="text-gray-300 font-normal text-sm">
            Tristique massa sed enim lacinia odio. Congue ut faucibus nunc vitae
            non. Nam feugiat vel morbi viverra vitae mi. Vitae fringilla ut et
            suspendisse enim suspendisse vitae. Leo non eget lacus sollicitudin
            tristique pretium quam. Mollis et luctus amet sed convallis varius
            massa sagittis. Proin sed proin at leo quis ac sem. Nam donec
            accumsan curabitur amet tortor quam sit. Bibendum enim sit dui lorem
            urna amet elit rhoncus ut. Aliquet euismod vitae ut turpis. Aliquam
            amet integer pellentesque.
          </p>
        </div>
      </div>
    </div>
  )
}
