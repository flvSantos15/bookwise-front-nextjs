/* eslint-disable @next/next/no-img-element */
'use client'

import { signIn } from 'next-auth/react'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { MdOutlineClose } from 'react-icons/md'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'

import { Button } from './Button'

interface BookModalProps {
  isOpenModal: boolean
  onCloseModal: () => void
}

export function LoginModal({ isOpenModal, onCloseModal }: BookModalProps) {
  function handleCloseModal() {
    onCloseModal()
  }

  async function handleLoginWithGoogle() {
    try {
      await signIn('google', { redirectTo: '/explorer' })
    } catch (error) {
      console.error('Login failed:', error)
    }
  }

  async function handleLoginWithGithub() {
    try {
      await signIn('github', { redirectTo: '/explorer' })
    } catch (error) {
      console.error('Login failed:', error)
    }
  }

  return (
    <Dialog
      open={isOpenModal}
      onClose={handleCloseModal}
      className="relative z-10"
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black/60 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden flex items-center justify-center">
          <div className="pointer-events-none fixed flex max-w-full w-[516px] h-[337px] rounded-lg">
            <DialogPanel
              transition
              className="pointer-events-auto duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <div className="flex h-full w-[516px] flex-col rounded-lg overflow-y-scroll bg-gray-700 py-14 px-[72px] shadow-xl">
                <div className="absolute right-0 top-0 mr-4 flex pr-2 pt-4 duration-500 ease-in-out data-[closed]:opacity-0 sm:-ml-10 sm:pr-4 z-[999]">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <span className="absolute -inset-2.5" />
                    <span className="sr-only">Close panel</span>
                    <MdOutlineClose
                      aria-hidden="true"
                      className="h-6 w-6 text-gray-400"
                    />
                  </button>
                </div>

                <div className="relative w-full flex-1 flex flex-col gap-10">
                  <span className="text-gray-200 font-bold w-full text-center">
                    Faça login para deixar sua avaliação
                  </span>

                  <div className="w-full h-[160px] flex flex-col gap-4">
                    <Button
                      title="Entrar com Google"
                      onClick={handleLoginWithGoogle}
                    >
                      <FcGoogle className="w-8 h-8" />
                    </Button>

                    <Button
                      title="Entrar com Github"
                      onClick={handleLoginWithGithub}
                    >
                      <FaGithub className="w-8 h-8 text-zinc-100" />
                    </Button>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  )
}
