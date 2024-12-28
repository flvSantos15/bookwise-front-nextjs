import { ReactNode } from 'react'
import * as ScrollArea from '@radix-ui/react-scroll-area'

interface Container {
  children: ReactNode
}

export function Container({ children }: Container) {
  return (
    <ScrollArea.Root>
      <ScrollArea.Viewport className="border border-green-400 w-full">
        {/* h-[100%] */}
        <div className="flex flex-col gap-10 max-h-screen w-full pt-8">
          {children}
        </div>
      </ScrollArea.Viewport>

      <ScrollArea.Scrollbar className="" orientation="vertical">
        <ScrollArea.Thumb className="w-5 bg-gray-600 border border-gray-600" />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  )
}
