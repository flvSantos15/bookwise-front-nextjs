import type { Metadata } from 'next'

import './globals.css'

import { Nunito_Sans as Nunito } from 'next/font/google'
import { Sidebar } from '@/src/components/Sidebar'

const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito' })

export const metadata: Metadata = {
  title: 'Bookwise',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} font-[sans] bg-gray-800`}>
        <main className="flex h-screen">
          <Sidebar />

          <div className="flex-1 border border-solid border-[red]">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
