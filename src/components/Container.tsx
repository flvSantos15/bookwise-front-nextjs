import { ReactNode } from 'react'
import * as ScrollArea from '@radix-ui/react-scroll-area'

interface ContainerProps {
  children: ReactNode
}

export function Container({ children }: ContainerProps) {
  return (
    <ScrollArea.Root className="h-[82%] overflow-hidden ">
      <ScrollArea.Viewport className="h-[100%]">
        <div className="flex flex-col gap-10 w-full">{children}</div>
      </ScrollArea.Viewport>

      <ScrollArea.Scrollbar className="" orientation="vertical">
        <ScrollArea.Thumb className="w-5 bg-gray-600 border border-gray-600" />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  )
}
