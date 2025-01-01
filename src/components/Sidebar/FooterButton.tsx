/* eslint-disable @next/next/no-img-element */

'use client'

import { ElementType } from 'react'
import { useSession } from 'next-auth/react'

interface FooterButtonProps {
  icon: ElementType
  isLoggedIn: boolean
  onSignOut?: () => void
}

export function FooterButton({
  icon: Icon,
  onSignOut,
  isLoggedIn
}: FooterButtonProps) {
  const { data: session } = useSession()

  const user = {
    ...session?.user,
    avatar_url: session?.user?.image
  }

  return (
    <button
      onClick={onSignOut}
      className="flex p-0 justify-center items-center gap-3 rounded-[4px]"
    >
      {isLoggedIn && (
        <img
          className="w-6 h-6 rounded-full border-2 border-green-100"
          src={user?.avatar_url!}
          alt="Rounded avatar"
        />
      )}

      <p className="text-sm font-bold text-gray-100 whitespace-nowrap">
        {isLoggedIn ? user?.name?.split(' ')[0] : 'Fazer login'}
      </p>

      <Icon
        className={`w-5 h-5 ${isLoggedIn ? 'text-red-500' : 'text-green-100'}`}
      />
    </button>
  )
}
