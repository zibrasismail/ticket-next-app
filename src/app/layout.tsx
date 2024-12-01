import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from '@/components/NavBar'
import AnimatedBackground from '@/components/AnimatedBackground'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ticket App',
  description: 'Buy and sell tickets for events',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 transition-colors duration-500">
            <AnimatedBackground />
            <Navbar />
            <main className="container mx-auto px-4 py-8">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

