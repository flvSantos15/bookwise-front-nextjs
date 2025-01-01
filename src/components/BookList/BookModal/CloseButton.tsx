import { MdOutlineClose } from 'react-icons/md'

interface CloseButtonProps {
  onClose: () => void
}

export function CloseButton({ onClose }: CloseButtonProps) {
  return (
    <div className="absolute right-0 top-0 -mr-44 flex pr-2 pt-4 duration-500 ease-in-out data-[closed]:opacity-0 sm:-ml-10 sm:pr-4 z-[999]">
      <button
        type="button"
        onClick={onClose}
        className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
      >
        <span className="absolute -inset-2.5" />
        <span className="sr-only">Close panel</span>
        <MdOutlineClose aria-hidden="true" className="h-6 w-6 text-gray-400" />
      </button>
    </div>
  )
}
