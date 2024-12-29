/* eslint-disable @next/next/no-img-element */
'use client'

import {
  PiChartLineUp,
  PiSignIn,
  PiBinoculars,
  PiUserLight
} from 'react-icons/pi'

import { Logo } from '../Logo'
import { NavItem } from './NavItem'
import { useRouter } from 'next/navigation'

const User = {
  name: 'Rafael',
  avatar: 'https://github.com/rafaelgomesdev.png'
}

export function Sidebar() {
  const router = useRouter()

  function handleRedirectToSignInPage() {
    router.push('/')
  }

  const isLoggedIn = true

  return (
    <div className="flex flex-col w-[14.5rem] h-[100%] rounded-xl gap-10 p-10 bg-gray-700">
      <div className="flex justify-center items-start gap-2">
        <Logo />
      </div>

      <div className="h-[90%] flex flex-col gap-4">
        <NavItem title="Início" route="home" icon={PiChartLineUp} />

        <NavItem title="Explorer" route="explorer" icon={PiBinoculars} />

        {isLoggedIn && (
          <NavItem title="Perfil" route="perfil" icon={PiUserLight} />
        )}
      </div>

      <button
        onClick={handleRedirectToSignInPage}
        className="flex p-0 justify-center items-center gap-3 rounded-[4px]"
      >
        {isLoggedIn && (
          <img
            className="w-5 h-5 rounded-full border-2 border-green-100"
            src={User.avatar}
            alt="Rounded avatar"
          />
        )}

        <p className="font-bold text-gray-100 whitespace-nowrap">
          {isLoggedIn ? User.name : 'Fazer login'}
        </p>

        <PiSignIn
          className={`w-5 h-5 ${
            isLoggedIn ? 'text-red-500' : 'text-green-100'
          }`}
        />
      </button>
    </div>
  )
}
