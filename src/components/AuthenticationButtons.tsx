'use client'

import { useRouter } from 'next/navigation'

import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import { PiRocketLaunchLight } from 'react-icons/pi'

import { Button } from './Button'

interface AutheticationButtonsProps {
  onLoginWithGoogle: () => void
  onLoginWithGithub: () => void
}

export function AutheticationButtons({
  onLoginWithGithub,
  onLoginWithGoogle
}: AutheticationButtonsProps) {
  const router = useRouter()

  function handleLoginAsGuest() {
    Promise.resolve((resolve: any) => setTimeout(resolve, 1000))
    router.push('/home')
  }

  return (
    <div className="w-full h-[248px] flex flex-col gap-4">
      <Button title="Entrar com Google" onClick={onLoginWithGoogle}>
        <FcGoogle className="w-8 h-8" />
      </Button>

      <Button title="Entrar com Github" onClick={onLoginWithGithub}>
        <FaGithub className="w-8 h-8 text-zinc-100" />
      </Button>

      <Button title="Acessar como visitante" onClick={handleLoginAsGuest}>
        <PiRocketLaunchLight className="w-8 h-8 text-purple-100" />
      </Button>
    </div>
  )
}
