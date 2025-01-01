import { ElementType } from 'react'

interface AnaliticsItemProps {
  icon: ElementType
  title: string
  subtitle: string
}

export function AnaliticsItem({
  icon: Icon,
  title,
  subtitle
}: AnaliticsItemProps) {
  return (
    <div className="flex gap-5 rounded-lg">
      <Icon className="w-8 h-8 text-green-100" />

      <div className="flex flex-col">
        <span className="text-gray-200 font-bold">{title}</span>
        <span className="text-gray-300 font-normal text-sm">{subtitle}</span>
      </div>
    </div>
  )
}
