import React from 'react'
import { CardWithoutDescription } from '../CardWithoutDescription'

export function PopularList() {
  return (
    <div className="flex flex-col gap-3 w-full">
      <CardWithoutDescription />
      <CardWithoutDescription />
      <CardWithoutDescription />
    </div>
  )
}
