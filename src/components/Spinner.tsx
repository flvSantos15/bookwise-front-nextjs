import { GridLoader } from 'react-spinners'

interface SpinnerProps {
  className?: string
}

export function Spinner({ className }: SpinnerProps) {
  return (
    <div className="flex items-center justify-center h-[100%] w-full">
      <GridLoader size={20} color="#8381D9" />
    </div>
  )
}
