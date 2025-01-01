/* eslint-disable @next/next/no-img-element */
'use client'

import { useEffect } from 'react'

import { IoIosArrowForward } from 'react-icons/io'
import { useRouter } from 'next/navigation'
import { SessionProvider, useSession } from 'next-auth/react'

import { useCurrentData, useStore } from '@/zustand-store'

import { RecentPublishedBookList } from '@/components/RecentPublishedBookList'
import { RatingList } from '@/components/RatingList'
import { Sidebar } from '@/components/Sidebar'
import { HeaderPage } from '@/components/HeaderPage'
import { Container } from '@/components/Container'
import { Spinner } from '@/components/Spinner'
import { ReviewCard } from '@/components/ReviewCard'

export function HomePage() {
  const router = useRouter()
  const { status } = useSession()

  const { load, setCurrentPageTitle } = useStore((store) => {
    return {
      load: store.load,
      setCurrentPageTitle: store.setCurrentPageTitle
    }
  })

  const { isLoading, myLastRating } = useCurrentData()

  function handleRedirectToExplorePage() {
    setCurrentPageTitle('Explorer')
    router.push('/explorer')
  }

  useEffect(() => {
    load()
  }, [])

  if (isLoading) {
    return (
      <div className="flex w-full h-[100%]">
        <Spinner />
      </div>
    )
  }

  return (
    <div className="w-full flex h-[100%] gap-24">
      <Sidebar />

      <div className="flex flex-col gap-10 w-[100%]">
        <div className="flex items-center justify-between gap-3 w-full mt-8 py-[10px]">
          <HeaderPage />
        </div>

        <Container>
          <div className="flex gap-14 w-full">
            <div className="flex flex-col gap-4">
              <>
                {status === 'authenticated' && (
                  <div className="flex flex-col gap-4 mb-4">
                    <div className="flex items-center justify-between">
                      <p className="font-normal text-sm text-gray-100">
                        Sua última leitura
                      </p>

                      {myLastRating && (
                        <button
                          onClick={handleRedirectToExplorePage}
                          className="flex items-center gap-1 text-purple-100 font-bold text-sm"
                        >
                          Ver todas
                          <IoIosArrowForward className="w-4 h-4" />
                        </button>
                      )}
                    </div>

                    <ReviewCard />
                  </div>
                )}
              </>

              <>
                <p className="font-normal text-sm text-gray-100">
                  Avaliações mais recentes
                </p>

                <RatingList />
              </>
            </div>

            <div className="flex flex-col gap-4 w-full">
              <div className="flex items-center justify-between">
                <p className="font-normal text-sm text-gray-100">
                  Livros mais recentes
                </p>

                <button
                  onClick={handleRedirectToExplorePage}
                  className="flex items-center gap-1 text-purple-100 font-bold text-sm"
                >
                  Ver todos
                  <IoIosArrowForward className="w-4 h-4" />
                </button>
              </div>

              <RecentPublishedBookList />
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <SessionProvider>
      <HomePage />
    </SessionProvider>
  )
}
