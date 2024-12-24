import { ReactNode } from 'react'

interface ButtonProps {
  title: string
  children?: ReactNode
}

export function Button({ title, children }: ButtonProps) {
  return (
    <button className="flex h-[72px] gap-5 px-6 py-5 rounded-lg bg-gray-600 items-center">
      {children}

      <span className="text-gray-200 font-bold text-lg leadind-base">
        {title}
      </span>
    </button>
  )
}
