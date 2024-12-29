'use client'

import { useEffect } from 'react'
import * as ScrollArea from '@radix-ui/react-scroll-area'

import { useStore } from '@/zustand-store'

import { Filter } from '@/components/Filter'
import { BookList } from '@/components/BookList'
import { HeaderPage } from '@/components/HeaderPage'
import { Sidebar } from '@/components/Sidebar'
import { Input } from '@/components/Input'

export default function Explorer() {
  const load = useStore((store) => store.load)

  useEffect(() => {
    load()
  }, [])

  return (
    <div className="w-full flex h-[100%] gap-24">
      <Sidebar />

      <div className="flex flex-col gap-10 w-[100%]">
        <div className="flex items-center justify-between gap-3 w-full mt-8">
          <HeaderPage />

          <Input />
        </div>

        <Filter />

        <ScrollArea.Root className="h-[80%] overflow-hidden">
          <ScrollArea.Viewport className="h-[100%]">
            <div className="flex gap-14">
              <BookList />
            </div>
          </ScrollArea.Viewport>

          <ScrollArea.Scrollbar className="" orientation="vertical">
            <ScrollArea.Thumb className="w-5 bg-gray-600 border border-gray-600" />
          </ScrollArea.Scrollbar>
        </ScrollArea.Root>
      </div>
    </div>
  )
}
