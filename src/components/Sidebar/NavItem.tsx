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

  const isCurrentPage = pathname.split('/').pop() === route
  return (
    <div className="flex py-2 items-center gap-3 w-full cursor-pointer">
      {isCurrentPage ? (
        <div className="bg-gradient-vertical w-1 h-6 rounded-[999px]" />
      ) : (
        <div className="bg-transparent w-1 h-6 rounded-[999px]" />
      )}

      <Icon size={32} color="#fff" />

      <p className="text-base text-gray-100 font-bold leadind-[160%]">
        {title}
      </p>
    </div>
  )
}
