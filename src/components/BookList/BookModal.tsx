'use client'

import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { useSearchParams } from 'next/navigation'
import { MdOutlineClose, MdBookmarkBorder } from 'react-icons/md'
import { IoBookOutline } from 'react-icons/io5'
import StarRatings from 'react-star-ratings'

interface BookModalProps {
  isOpenModal: boolean
  onCloseModal: () => void
}

export function BookModal({ isOpenModal, onCloseModal }: BookModalProps) {
  const searchParams = useSearchParams()

  const book = searchParams.get('bookId')

  console.log(isOpenModal)

  function handleCloseModal() {
    onCloseModal()
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
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full min-w-[650px]">
            <DialogPanel
              transition
              className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              <div className="flex h-full w-[650px] flex-col overflow-y-scroll bg-gray-800 pt-6 px-12 shadow-xl">
                <div className="absolute right-0 top-0 -mr-44 flex pr-2 pt-4 duration-500 ease-in-out data-[closed]:opacity-0 sm:-ml-10 sm:pr-4 z-[999]">
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

                <div className="relative mt-6 w-full flex-1 flex flex-col gap-10">
                  <div className="flex flex-col gap-10 px-8 pt-6 pb-4 rounded-[10px] bg-gray-700">
                    <div className="flex gap-8">
                      <img
                        src=""
                        alt=""
                        className="w-[171px] h-[242px] ronded-[10px]"
                      />

                      <div className="flex flex-col justify-between">
                        <div className="flex flex-col gap-4">
                          <p className="text-lg leading-[140%] font-bold text-gray-100">
                            14 Hábitos de Desenvolvedores Altamente Produtivos
                          </p>

                          <p className="font-normal text-gray-300">
                            Zeno Rocha
                          </p>
                        </div>

                        <div className="flex flex-col gap-2">
                          <StarRatings
                            rating={3}
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
                            3 avaliações
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

                          <span className="text-gray-200 font-bold">160</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="flex w-full justify-between">
                      <span className="text-gray-200 font-normal text-sm">
                        Avaliações
                      </span>

                      <button className="flex gap-3 px-2 py-1 ronded-[4px] text-purple-100">
                        Avaliar
                      </button>
                    </div>

                    {/* Lista de avaliacoes aqui */}
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
