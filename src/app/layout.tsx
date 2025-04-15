import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Sidebar } from '@/components/Sidebar'
import { News } from '@/components/News'
import SessionWrapper from '@/components/SessionWrapper'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'My X',
  description: 'X clone built with Next js and tailwind',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <SessionWrapper>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <div className="flex justify-between mx-auto">
            <div className="hidden sm:inline border-r border-slate-200 h-screen">
              <Sidebar />
            </div>
            <div>{children}</div>
            <div className="lg:flex-col p-3 h-screen border-l border-slate-200 hidden lg:flex w-[24rem]">
              <div className="sticky top-0 bg-white py-2">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-gray-100 rounded-3xl border border-gray-200
              text-sm w-full px-4 py-2"
                />
              </div>
              <News />
            </div>
          </div>
        </body>
      </html>
    </SessionWrapper>
  )
}
