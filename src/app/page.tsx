'use client'

import { SessionProvider } from 'next-auth/react'
import { login } from '@/service/server-actions/auth'

import { AutheticationButtons } from '@/components/AuthenticationButtons'

function SignIn() {
  async function handleLoginWithGoogle() {
    try {
      await login('google')
    } catch (error) {
      console.error('Login failed:', error)
    }
  }

  async function handleLoginWithGithub() {
    try {
      await login('github')
    } catch (error) {
      console.error('Login failed:', error)
    }
  }

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

          <AutheticationButtons
            onLoginWithGithub={handleLoginWithGithub}
            onLoginWithGoogle={handleLoginWithGoogle}
          />
        </div>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <SessionProvider>
      <SignIn />
    </SessionProvider>
  )
}
