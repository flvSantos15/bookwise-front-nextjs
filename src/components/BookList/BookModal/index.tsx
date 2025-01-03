/* eslint-disable @next/next/no-img-element */
'use client'

import { useState } from 'react'
import StarRatings from 'react-star-ratings'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { MdBookmarkBorder } from 'react-icons/md'
import { IoBookOutline } from 'react-icons/io5'

import { useCurrentData } from '@/zustand-store'
import { getBookMediaRating } from '@/utils/get-book-media-rating'

import { CommentList } from '../../Comment'
import { CloseButton } from './CloseButton'
import { LoginModal } from '@/components/LoginModal'
import { AvaliationForm } from './AvaliationForm'
import { useSession } from 'next-auth/react'

interface BookModalProps {
  isOpenModal: boolean
  onCloseModal: () => void
}

export function BookModal({ isOpenModal, onCloseModal }: BookModalProps) {
  const { status } = useSession()
  const { currentBook } = useCurrentData()

  const { media } = getBookMediaRating({ ratings: currentBook?.ratings! })

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  function handleCloseModal() {
    onCloseModal()
  }

  function handleAvaliate() {
    if (status === 'unauthenticated') {
      setIsLoginModalOpen(true)
    }
    onCloseModal()
  }

  return (
    <>
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
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full min-w-[650px]">
              <DialogPanel
                transition
                className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
              >
                <div className="flex h-full w-[650px] flex-col overflow-y-scroll bg-gray-800 pt-6 px-12 shadow-xl">
                  <CloseButton onClose={handleCloseModal} />

                  <div className="relative mt-6 w-full flex-1 flex flex-col gap-10">
                    <div className="flex flex-col gap-10 px-8 pt-6 pb-4 rounded-[10px] bg-gray-700">
                      <div className="flex gap-8">
                        <img
                          src={String(currentBook?.cover_url).replace(
                            'public',
                            ''
                          )}
                          alt=""
                          className="w-[171px] h-[242px] ronded-[10px]"
                        />

                        <div className="flex flex-col justify-between">
                          <div className="flex flex-col gap-4">
                            <p className="text-lg leading-[140%] font-bold text-gray-100">
                              {currentBook?.name}
                            </p>

                            <p className="font-normal text-gray-300">
                              {currentBook?.author}
                            </p>
                          </div>

                          <div className="flex flex-col gap-2">
                            <StarRatings
                              rating={media}
                              // changeRating={handleSendRating}
                              starRatedColor="#8381D9"
                              starHoverColor="#8381D9"
                              starEmptyColor="#dddddd"
                              starDimension="16px"
                              starSpacing="2px"
                              name="rating"
                              svgIconViewBox="0 0 50 50"
                            />

                            <span className="text-gray-400 text-sm font-normal">
                              {currentBook?.ratings.length} avaliações
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex py-6 gap-4">
                        <div className="flex items-center gap-4 px-1">
                          <MdBookmarkBorder className="h-6 w-6 text-green-100" />

                          <div className="flex flex-col">
                            <span className="text-gray-300 font-normal text-sm">
                              Categoria
                            </span>

                            <span className="text-gray-200 font-bold">
                              Programação, educação
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 px-1">
                          <IoBookOutline className="h-6 w-6 text-green-100" />

                          <div className="flex flex-col">
                            <span className="text-gray-300 font-normal text-sm">
                              Paginas
                            </span>

                            <span className="text-gray-200 font-bold">
                              {currentBook?.total_pages}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 pb-6">
                      <div className="flex w-full justify-between">
                        <span className="text-gray-200 font-normal text-sm">
                          Avaliações
                        </span>

                        <button
                          onClick={handleAvaliate}
                          className="flex gap-3 px-2 py-1 ronded-[4px] text-purple-100"
                        >
                          Avaliar
                        </button>
                      </div>

                      {status === 'authenticated' && (
                        <AvaliationForm onCloseModal={onCloseModal} />
                      )}

                      <CommentList />
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>

      <LoginModal
        isOpenModal={isLoginModalOpen}
        onCloseModal={() => setIsLoginModalOpen(false)}
      />
    </>
  )
}
