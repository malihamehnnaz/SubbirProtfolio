"use client"

import { ThemeProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import { useEffect, useState } from "react"

export function ThemeProviderWrapper({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Return children without ThemeProvider during SSR
    return <>{children}</>
  }

  return <ThemeProvider {...props}>{children}</ThemeProvider>
}