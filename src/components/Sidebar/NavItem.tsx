'use client'

import { usePathname } from 'next/navigation'
import { ElementType } from 'react'

interface NavItemProps {
  title: string
  route: string
  icon: ElementType
}

export function NavItem({ title, icon: Icon, route }: NavItemProps) {
  const pathname = usePathname()

  const isCurrentItem = pathname.split('/').pop() === route
  return (
    <button
      data-active={isCurrentItem}
      // disabled={isCurrentItem}
      className="flex py-2 items-center gap-3 w-full text-gray-400 data-[active=true]:text-gray-100 enabled:hover:text-gray-100 group"
    >
      {isCurrentItem ? (
        <div className="bg-gradient-vertical w-1 h-6 rounded-[999px]" />
      ) : (
        <div className="bg-transparent w-1 h-6 rounded-[999px]" />
      )}

      <Icon className="w-6 h-6 " />

      <p className="text-base font-bold leadind-[160%]">{title}</p>
    </button>
  )
}
