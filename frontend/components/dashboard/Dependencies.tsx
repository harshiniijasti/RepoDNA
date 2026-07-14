'use client'

import { motion } from 'framer-motion'
import { Package } from 'lucide-react'

const dependencies = [
  'React',
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'Axios',
  'zod',
]

export default function Dependencies() {
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  }

  const depVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  }

  return (
    <motion.div
      variants={itemVariants}
      className="rounded-lg border border-border bg-card p-6 space-y-4"
    >
      <h3 className="text-lg font-semibold text-foreground">Dependencies</h3>

      <div className="space-y-2">
        {dependencies.map((dep, idx) => (
          <motion.div
            key={dep}
            variants={depVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: idx * 0.05 }}
            className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 border border-border/50 hover:border-border transition-colors"
          >
            <Package className="h-4 w-4 text-primary flex-shrink-0" />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-foreground truncate">{dep}</p>
              <p className="text-xs text-muted-foreground">^1.0.0</p>
            </div>
          </motion.div>
        ))}
      </div>

      <p className="text-xs text-muted-foreground pt-2">
        {dependencies.length} dependencies detected
      </p>
    </motion.div>
  )
}
