'use client'

import { ChangeEvent } from 'react'
import { LuSearch } from 'react-icons/lu'

import { useStore } from '@/zustand-store'

interface Input {}

export function Input() {
  const { handleSearch } = useStore()

  function handleSearchData(e: ChangeEvent<HTMLInputElement>) {
    handleSearch(e.target.value)
  }

  return (
    <label
      id="input"
      className="flex items-center border border-gray-500 bg-gray-800 rounded-[4px] gap-2 px-5 py-[14px] w-full hover:border-gray-400 focus-within:border-gray-400"
    >
      <input
        type="text"
        id="input"
        onChange={handleSearchData}
        placeholder="Buscar livro"
        className="flex-1 font-normal text-sm text-gray-400 bg-gray-800 autofill:bg-gray-800 outline-none ring-0 border-none"
      />
      {/*  */}

      <LuSearch className="w-6 h-6 text-gray-400" />
    </label>
  )
}
