import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Intuitrix - Advanced AI Search Solutions',
  description: 'Transform your search capabilities with AI-powered vector and semantic search solutions for text, images, and SVGs.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Top navbar removed */}
        {children}
      </body>
    </html>
  )
} 