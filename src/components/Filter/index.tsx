'use client'

import * as ScrollArea from '@radix-ui/react-scroll-area'
import { useCurrentData } from '@/zustand-store'

import FilterItem from './FilterItem'
import { useQuery } from '@tanstack/react-query'
import { getCategories } from '@/service/categories-service'

export function Filter() {
  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories
  })

  const { selectedCategory } = useCurrentData()

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
