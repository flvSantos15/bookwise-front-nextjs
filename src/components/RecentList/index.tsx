import React from 'react'
import { CardWithDescription } from '../CardWithDescription'

export function RecentList() {
  return (
    <div className="flex flex-col gap-3 w-full">
      <CardWithDescription />
      <CardWithDescription />
      <CardWithDescription />
    </div>
  )
}
