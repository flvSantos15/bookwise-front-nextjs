/* eslint-disable @next/next/no-img-element */
'use client'

import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { logout } from '@/service/server-actions/auth'
import {
  PiChartLineUp,
  PiSignIn,
  PiBinoculars,
  PiUserLight
} from 'react-icons/pi'

import { Logo } from '../Logo'
import { NavItem } from './NavItem'
import { FooterButton } from './FooterButton'

export function Sidebar() {
  const router = useRouter()
  const { status } = useSession()

  function handleSignOut() {
    if (status === 'authenticated') {
      logout()
    } else {
      router.push('/')
    }
  }

  const isLoggedIn = status === 'authenticated'

  return (
    <div className="flex flex-col w-[14.5rem] h-[100%] rounded-xl gap-10 p-10 bg-gray-700">
      <div className="flex justify-center items-start gap-2">
        <Logo />
      </div>

      <div className="h-[90%] flex flex-col gap-4">
        <NavItem title="Início" route="home" icon={PiChartLineUp} />

        <NavItem title="Explorer" route="explorer" icon={PiBinoculars} />

        {isLoggedIn && (
          <NavItem title="Perfil" route="profile" icon={PiUserLight} />
        )}
      </div>

      <FooterButton
        onSignOut={handleSignOut}
        icon={PiSignIn}
        isLoggedIn={isLoggedIn}
      />
    </div>
  )
}
