import StarRatings from 'react-star-ratings'
import { MdOutlineClose } from 'react-icons/md'
import { IoMdCheckmark } from 'react-icons/io'
import { FormEvent, useState } from 'react'

/* eslint-disable @next/next/no-img-element */
interface AvaliationFormProps {}

export function AvaliationForm({}: AvaliationFormProps) {
  const [rating, setRating] = useState(0)

  function handleSubmmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const comment = formData.get('comment')

    console.log({
      rating,
      comment
    })
  }

  return (
    <form
      onSubmit={handleSubmmit}
      className="flex flex-col gap-6 w-[564px] h-[328px] p-6 rounded-lg bg-gray-700"
    >
      <div className="flex items-center justify-between gap-4 w-full">
        <img
          // src={rating?.user?.avatar_url}
          src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          alt=""
          className="w-10 h-10 rounded-full"
        />

        <div className="flex flex-col flex-1">
          <span className="text-gray-100 font-bold">Cristofer Colombo</span>
        </div>

        <div className="flex flex-col gap-2">
          <StarRatings
            rating={rating}
            changeRating={setRating}
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

      <div className="flex flex-col gap-3 h-[216px]">
        <textarea
          name="comment"
          id=""
          cols={60}
          placeholder="Escreva sua avaliação"
          className="h-[164px] bg-gray-800 placeholder:text-gray-400 text-sm px-5 py-[14px] rounded-[4px] text-gray-400 focus:bg-gray-800 outline-none ring-0"
          style={{ resize: 'none' }}
        />

        <div className="flex items-center justify-end gap-2">
          <button
            type="button"
            className="flex gap-6 p-2 rounded-[4px] bg-gray-600"
          >
            <MdOutlineClose
              aria-hidden="true"
              className="h-6 w-6 text-gray-400"
            />
          </button>

          <button
            type="submit"
            className="flex gap-6 p-2 rounded-[4px] bg-gray-600"
          >
            <IoMdCheckmark
              aria-hidden="true"
              className="h-6 w-6 text-green-100"
            />
          </button>
        </div>
      </div>
    </form>
  )
}
