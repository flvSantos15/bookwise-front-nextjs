import { ReactNode } from 'react'

interface ButtonProps {
  title: string
  children?: ReactNode
  onClick?: () => void
}

export function Button({ title, children, onClick }: ButtonProps) {
  return (
    <button
      className="flex h-[72px] gap-5 px-6 py-5 rounded-lg bg-gray-600 items-center border border-gray-600 hover:border-gray-400"
      onClick={onClick}
    >
      {children}

      <span className="text-gray-200 font-bold text-lg leadind-base">
        {title}
      </span>
    </button>
  )
}
