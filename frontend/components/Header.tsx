'use client'

import { Moon, Sun, ArrowLeft } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

interface HeaderProps {
  onReset: () => void
  showReset: boolean
}

export default function Header({ onReset, showReset }: HeaderProps) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <header className="border-b border-border bg-card">
      <div className="flex max-w-7xl mx-auto items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          {showReset && (
            <button
              onClick={onReset}
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </button>
          )}
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-primary flex items-center justify-center">
              <span className="text-xs font-bold text-primary-foreground">D</span>
            </div>
            <span className="font-semibold text-foreground">RepoDNA</span>
          </div>
        </div>

        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="flex items-center justify-center h-9 w-9 rounded-lg border border-border hover:bg-muted transition-colors"
        >
          {theme === 'dark' ? (
            <Sun className="h-4 w-4 text-foreground" />
          ) : (
            <Moon className="h-4 w-4 text-foreground" />
          )}
        </button>
      </div>
    </header>
  )
}
