'use client'

import { FcGoogle } from 'react-icons/fc'

export default function Home() {
  return (
    <div className="w-full flex">
      <div className="w-[598px] h-screen">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="h-screen object-cover"
          src="/images/background-login.png"
          alt="background"
        />
      </div>

      <div className="w-full h-screen flex items-center justify-center">
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
            {/* TODO: componentizar esse botao com todos os states e props dele */}
            <button className="flex h-[72px] gap-5 px-6 py-5 rounded-lg bg-gray-600 items-center">
              <FcGoogle className="w-8 h-8" />

              <span className="text-gray-200 font-bold text-lg leadind-base">
                Entrar com Google
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
