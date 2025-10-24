import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ram Jakkala - Portfolio | Computer Science Student & Software Developer',
  description: 'Portfolio of Ram Jakkala, passionate Computer Science student and aspiring software developer from Hyderabad. Focused on AI, web development, and data science to create innovative tech solutions.',
  keywords: 'Ram Jakkala, Portfolio, Computer Science, Software Developer, AI, Web Development, Data Science, Hyderabad, React, Next.js',
  authors: [{ name: 'Ram Jakkala' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-inter antialiased">
        {children}
      </body>
    </html>
  )
}
