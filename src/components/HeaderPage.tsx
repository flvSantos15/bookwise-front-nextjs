'use client'

import { useCurrentData } from '@/zustand-store'

import { titleIcons } from '@/utils/icons'

export function HeaderPage() {
  const { currentPageTitle } = useCurrentData()

  const Icon = titleIcons[currentPageTitle]

  return (
    <div className="flex items-center justify-start gap-3">
      <Icon className="w-8 h-8 text-green-100" />

      <p className="text-2xl font-bold leadind-[160%] text-gray-100">
        {currentPageTitle}
      </p>
    </div>
  )
}
