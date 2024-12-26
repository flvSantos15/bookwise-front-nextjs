import React from 'react'
import { FaStar } from 'react-icons/fa'

interface RatingReviewProps {
  rating: number
  setRating: (item: number) => void
  activeColor?: string
  color?: string
  size?: number
}

export function RatingReview({
  rating,
  setRating,
  size = 25,
  activeColor = 'gold',
  color = 'gray'
}: RatingReviewProps) {
  return (
    <div className="flex gap-1 h-4">
      {[1, 2, 3, 4, 5].map((star, index) => {
        return (
          <span
            key={index}
            className={`flex `}
            style={{
              cursor: 'pointer'
              // color: rating >= star ? activeColor : color
              // fontSize: `${size}px`,
              // borderWidth: 1,
              // borderStyle: 'solid',
              // borderColor: activeColor
            }}
            onClick={() => {
              setRating(star)
            }}
          >
            <FaStar size={size} className={`hover:text-[#8381D9]`} />
            {/* {' '}
            ★{' '} */}
          </span>
        )
      })}
    </div>
  )
}
