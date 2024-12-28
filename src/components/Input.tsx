import { LuSearch } from 'react-icons/lu'

interface Input {}

export function Input() {
  return (
    <label
      id="input"
      className="flex items-center border border-gray-500 bg-gray-800 rounded-[4px] gap-2 px-5 py-[14px] w-[433px] hover:border-gray-400 focus-within:border-gray-400"
    >
      <input
        type="text"
        id="input"
        placeholder="Buscar livro ou autor"
        className="flex-1 font-normal text-sm text-gray-400 bg-gray-800 autofill:bg-gray-800 outline-none ring-0 border-none"
      />
      {/*  */}

      <LuSearch className="w-6 h-6 text-gray-400" />
    </label>
  )
}
