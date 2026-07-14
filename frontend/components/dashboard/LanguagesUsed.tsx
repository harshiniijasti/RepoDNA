'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Language {
  name: string
  percentage: number
}

interface LanguagesUsedProps {
  languages: Language[]
}

function AnimatedProgressBar({
  percentage,
}: {
  percentage: number
}) {
  const [displayPercentage, setDisplayPercentage] = useState(0)

  useEffect(() => {
    let start = 0

    const increment = Math.ceil(percentage / 20)

    const interval = setInterval(() => {
      start += increment

      if (start >= percentage) {
        setDisplayPercentage(percentage)
        clearInterval(interval)
      } else {
        setDisplayPercentage(start)
      }
    }, 30)

    return () => clearInterval(interval)
  }, [percentage])

  return <>{displayPercentage.toFixed(1)}%</>
}

export default function LanguagesUsed({
  languages,
}: LanguagesUsedProps) {
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  }

  return (
    <motion.div
      variants={itemVariants}
      className="rounded-lg border border-border bg-card p-6 space-y-6"
    >
      <h3 className="text-lg font-semibold text-foreground">
        Languages Used
      </h3>

      <div className="space-y-6">
        {languages.map((lang, idx) => (
          <motion.div
            key={lang.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: idx * 0.1,
              duration: 0.4,
            }}
            className="space-y-2"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">
                {lang.name}
              </span>

              <span className="text-sm font-semibold text-primary">
                <AnimatedProgressBar
                  percentage={lang.percentage}
                />
              </span>
            </div>

            <div className="h-2.5 rounded-full bg-muted overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full"
                initial={{ width: 0 }}
                animate={{
                  width: `${lang.percentage}%`,
                }}
                transition={{
                  delay: 0.3 + idx * 0.1,
                  duration: 0.8,
                  ease: 'easeOut',
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
