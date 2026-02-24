"use client"

import { ThemeProvider } from "next-themes"
import { ReactNode } from "react"

const NextThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider defaultTheme="system" enableSystem attribute="class">
      {children}
    </ThemeProvider>
  )
}

export default NextThemeProvider
