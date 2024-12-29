'use client'

import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import StarRatings from 'react-star-ratings'

import { useStore } from '@/zustand-store'

import { Book } from '@/interfaces'

import { BookModal } from './BookList/BookModal'

interface PageProps {
  book: Book
}

export function BookCard({ book }: PageProps) {
  const path = usePathname()

  const setCurrentBookId = useStore((store) => store.setCurrentBookId)

  const [isModalOpen, setIsModalOpen] = useState(false)

  function handleSendRating(rating: number) {
    console.log('handleSendRating', rating, book?.id)
  }

  function handleOpenBookModal() {
    if (path === '/home') return

    setIsModalOpen(true)
    setCurrentBookId(book?.id)
  }

  return (
    <>
      <button
        onClick={handleOpenBookModal}
        className="flex px-5 py-4 gap-5 items-start rounded-lg bg-gray-700 border-2 border-gray-700 hover:border-gray-600 cursor-pointer"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={String(book?.cover_url).replace('public', '')}
          alt={book?.name}
          className="w-[64px] h-[94px] rounded-[4px]"
        />

        <div className="flex flex-col items-start justify-between flex-1 py-[2px h-[100%]">
          <div className="flex flex-col items-start">
            <p className="font-bold text-gray-100 text-left">{book?.name}</p>

            <p className="text-sm font-normal text-gray-400">{book?.author}</p>
          </div>

          <div className="flex w-[96px]">
            <StarRatings
              rating={book?.ratings.length}
              changeRating={handleSendRating}
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
      </button>

      <BookModal
        isOpenModal={isModalOpen}
        onCloseModal={() => setIsModalOpen(false)}
      />
    </>
  )
}
