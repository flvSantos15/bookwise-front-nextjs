'use client'

import { PiChartLineUp, PiSignIn, PiBinoculars } from 'react-icons/pi'

import { Logo } from '../Logo'
import { NavItem } from './NavItem'

export function Sidebar() {
  return (
    <div className="flex flex-col w-[14.5rem] h-[100%] rounded-xl gap-10 p-10 bg-gray-700">
      <div className="flex justify-center items-start gap-2">
        <Logo />
      </div>

      <div className="h-[90%] flex flex-col gap-4">
        <NavItem title="Início" route="home" icon={PiChartLineUp} />

        <NavItem title="Explorer" route="explorer" icon={PiBinoculars} />
      </div>

      <a className="flex p-1 justify-center items-center gap-3 rounded-[4px]">
        <p className="text-base font-bold text-gray-100 whitespace-nowrap">
          Fazer login
        </p>

        <PiSignIn className="w-5 h-5 text-green-100" />
      </a>
    </div>
  )
}
