import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ram - Portfolio | B.Tech Student & AI Automation Expert',
  description: 'Portfolio of Ram, B.Tech student and co-founder of GoEvolve AAA - an AI Automation Agency. Specializing in AI tools, chatbots, voice agents, and innovative tech solutions.',
  keywords: 'Ram, Portfolio, B.Tech, AI Automation, GoEvolve AAA, Chatbots, Voice Agents, Web Development',
  authors: [{ name: 'Ram' }],
  viewport: 'width=device-width, initial-scale=1',
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
