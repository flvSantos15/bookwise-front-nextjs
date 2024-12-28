'use client'

import * as ScrollArea from '@radix-ui/react-scroll-area'
import { useCurrentData } from '@/zustand-store'

import FilterItem from './FilterItem'

export function Filter() {
  const { categories, selectedCategory } = useCurrentData()

  return (
    <ScrollArea.Root>
      <ScrollArea.Viewport className="">
        <div className="flex items-start gap-3 max-w-[990px] min-h-[58px] py-1 px-0.5 ">
          <FilterItem title="Tudo" selected={selectedCategory === 'Tudo'} />

          {categories &&
            categories.map((category) => (
              <FilterItem
                key={category.id}
                title={category.name}
                selected={selectedCategory === category.name}
              />
            ))}
        </div>
      </ScrollArea.Viewport>

      <ScrollArea.Scrollbar className="" orientation="horizontal">
        <ScrollArea.Thumb className="h-5 bg-gray-600 border border-gray-600" />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  )
}
