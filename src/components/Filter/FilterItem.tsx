import { useStore } from '@/zustand-store'

interface FilterItemProps {
  title: string
  selected?: boolean
}

export default function FilterItem({ title, selected }: FilterItemProps) {
  const setSelectedCategory = useStore((store) => store.setSelectedCategory)

  function handleSelectCategory() {
    setSelectedCategory(title)
  }

  return (
    <button
      onClick={handleSelectCategory}
      className={`flex gap-2 px-4 py-2 rounded-full border border-purple-200 ${
        selected
          ? 'bg-purple-200 text-white'
          : 'border-purple-100 text-purple-100'
      } hover:bg-purple-200 hover:text-white outline-none focus-within:ring-1 ring-purple-100`}
    >
      {title}
    </button>
  )
}
