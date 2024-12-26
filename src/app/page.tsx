'use client'

import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import { PiRocketLaunchLight } from 'react-icons/pi'

import { Button } from '@/components/Button'

export default function SignIn() {
  return (
    <div className="w-full flex h-[100%]">
      <div className="w-[650px] h-[100%]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="h-full object-cover rounded-[10px]"
          src="/images/background-login.png"
          alt="background"
        />
      </div>

      <div className="w-full h-[100%] flex items-center justify-center">
        <div className="w-[372px] h-[350px] flex flex-col gap-10">
          <div className="w-full h-[62px] flex flex-col gap-0.5">
            <span className="font-bold text-2xl leadind-[140%] text-gray-100">
              Boas vindas!
            </span>
            <span className="font-normal leadind-[160%] text-gray-200">
              Faça seu login ou acesse como visitante.
            </span>
          </div>

          <div className="w-full h-[248px] flex flex-col gap-4">
            <Button title="Entrar com Google">
              <FcGoogle className="w-8 h-8" />
            </Button>

            <Button title="Entrar com Google">
              <FaGithub className="w-8 h-8 text-zinc-100" />
            </Button>

            <Button title="Acessar como visitante">
              <PiRocketLaunchLight className="w-8 h-8 text-purple-100" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
