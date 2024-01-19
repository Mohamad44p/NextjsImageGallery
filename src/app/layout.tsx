import './globals.css'
import type { Metadata } from 'next'
import Navbar from './components/Navbar'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Next.js Image Gallery',
  description: 'A responsive and dynamic image gallery built with Next.js, showcasing the power and flexibility of server-side rendering (SSR) and image optimization features. Explore a seamless and performant web experience while browsing through a curated collection of images.'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="max-w-6xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  )
}