'use-client'

import { PiChartLineUp, PiSignIn } from 'react-icons/pi'

export function Sidebar() {
  return (
    <div className="w-[14.5rem] h-full rounded-xl gap-8 p-10">
      <div className="flex justify-center items-start gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M19 23.3L18.4 22.8C16.4 20.9 15 19.7 15 18.2C15 17 16 16 17.2 16C17.9 16 18.6 16.3 19 16.8C19.4 16.3 20.1 16 20.8 16C22 16 23 16.9 23 18.2C23 19.7 21.6 20.9 19.6 22.8L19 23.3Z"
            fill="#50B2C0"
          />
          <path
            d="M18 2C19.1 2 20 2.9 20 4V13.08L19 13L18 13.08V4H13V12L10.5 9.75L8 12V4H6V20H13.08C13.2 20.72 13.45 21.39 13.8 22H6C4.9 22 4 21.1 4 20V4C4 2.9 4.9 2 6 2H18Z"
            fill="#8381D9"
          />
        </svg>

        <p className="text-xl text-gray-100 font-bold">BookWise</p>
      </div>

      <div className="h-[90%] flex flex-col gap-4">
        <div className="flex py-2 justify-end items-center gap-3 w-full border border-solid border-[blue]">
          <div className="bg-[linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)] w-1 h-6 border border-solid border-[red] rounded-[999px]" />

          <PiChartLineUp size={32} color="#fff" />

          <p className="text-base text-gray-100 font-bold">Início</p>
        </div>
      </div>

      <a className="flex p-1 justify-center items-center gap-3 rounded-[4px]">
        <p className="text-base font-bold text-gray-100">Fazer login</p>

        <PiSignIn size={32} color="#f8f9fc" />
      </a>
    </div>
  )
}
