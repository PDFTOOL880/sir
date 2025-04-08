'use client'

import { useEffect } from 'react'
import { ThemeProvider } from 'next-themes'
import '../i18n/config'

interface ProvidersProps {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  // Initialize theme provider
  useEffect(() => {
    // This useEffect is intentionally empty as next-themes handles theme initialization
    // and we've already initialized i18n in the config file
  }, [])

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  )
}
