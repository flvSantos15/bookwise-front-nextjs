/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useEffect } from 'react'
import { SessionProvider } from 'next-auth/react'

import { useStore } from '@/zustand-store'

import { Analitics } from '@/components/Analitics'
import { Container } from '@/components/Container'
import { HeaderPage } from '@/components/HeaderPage'
import { Input } from '@/components/Input'
import { MyReviewList } from '@/components/MyReview'
import { Sidebar } from '@/components/Sidebar'

export function ProfilePage() {
  const { load, books } = useStore((store) => {
    return {
      load: store.load,
      books: store.books
    }
  })

  useEffect(() => {
    if (books) return
    load()
  }, [books])

  return (
    <div className="w-full flex h-[100%] gap-24">
      <Sidebar />

      <div className="flex flex-col gap-10 w-[100%]">
        <div className="flex items-center justify-between gap-3 w-full mt-8 py-[10px]">
          <HeaderPage />
        </div>

        <Container>
          <div className="flex gap-14 w-full">
            <div className="flex flex-col gap-8">
              <Input />

              <MyReviewList />
            </div>

            <div className="flex flex-col gap-4 w-full">
              <Analitics />
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default function Profile() {
  return (
    <SessionProvider>
      <ProfilePage />
    </SessionProvider>
  )
}
