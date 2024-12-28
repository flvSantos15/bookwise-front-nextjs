'use client'

import { useEffect } from 'react'

import { IoIosArrowForward } from 'react-icons/io'

import { useStore } from '@/zustand-store'

import { PopularList } from '@/components/PopularList'
import { RecentList } from '@/components/RecentList'
import { Sidebar } from '@/components/Sidebar'
import { HeaderPage } from '@/components/HeaderPage'
import { Container } from '@/components/Container'

export default function Home() {
  const { load } = useStore((store) => {
    return {
      load: store.load
    }
  })

  useEffect(() => {
    load()
  }, [])

  return (
    <div className="w-full flex h-[100%] gap-24">
      <Sidebar />

      <Container>
        <HeaderPage />

        <div className="flex gap-14 w-full">
          {/* w-[608px] belongs to below */}
          <div className="flex flex-col gap-4">
            <p className="font-normal text-sm text-gray-100">
              Avaliações mais recentes
            </p>

            <RecentList />
          </div>

          <div className="flex flex-col gap-4">
            {/* w-[324px] belongs to above */}
            <div className="flex items-center justify-between">
              <p className="font-normal text-sm text-gray-100">
                Livros mais recentes
              </p>

              <button className="flex items-center gap-2 text-purple-100 font-bold text-sm">
                Ver todos
                <IoIosArrowForward className="w-4 h-4" />
              </button>
            </div>

            <PopularList />
          </div>
        </div>
      </Container>
    </div>
  )
}
