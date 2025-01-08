/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
'use client'

import { useQuery } from '@tanstack/react-query'

import { IoIosArrowForward } from 'react-icons/io'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

import { useCurrentData, useStore } from '@/zustand-store'
import { getMyLastingRating } from '@/service/rating-service'

import { RecentPublishedBookList } from '@/components/RecentPublishedBookList'
import { RatingList } from '@/components/RatingList'
import { Sidebar } from '@/components/Sidebar'
import { HeaderPage } from '@/components/HeaderPage'
import { Container } from '@/components/Container'
import { Spinner } from '@/components/Spinner'
import { ReviewCard } from '@/components/ReviewCard'

export default function HomePage() {
  const router = useRouter()
  const { status } = useSession()

  const { data: myLastRating } = useQuery({
    queryKey: ['myLastRating'],
    queryFn: getMyLastingRating
  })

  const setCurrentPageTitle = useStore((store) => store.setCurrentPageTitle)

  const { isLoading } = useCurrentData()

  function handleRedirectToExplorePage() {
    setCurrentPageTitle('Explorer')
    router.push('/explorer')
  }

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
