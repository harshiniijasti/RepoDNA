'use client'

import { motion } from 'framer-motion'
import { Star, GitFork, Eye, AlertCircle, HardDrive } from 'lucide-react'

interface Statistics {
  stars: number
  forks: number
  watchers: number
  issues: number
  size: number
}

interface RepositoryStatisticsProps {
  statistics: Statistics
}

export default function RepositoryStatistics({
  statistics,
}: RepositoryStatisticsProps) {
  const stats = [
    {
      label: 'Stars',
      value: statistics.stars,
      icon: Star,
    },
    {
      label: 'Forks',
      value: statistics.forks,
      icon: GitFork,
    },
    {
      label: 'Watchers',
      value: statistics.watchers,
      icon: Eye,
    },
    {
      label: 'Issues',
      value: statistics.issues,
      icon: AlertCircle,
    },
    {
      label: 'Size (KB)',
      value: statistics.size,
      icon: HardDrive,
    },
  ]

  return (
    <motion.div
      className="rounded-lg border border-border bg-card p-6 space-y-4"
    >
      <h3 className="text-lg font-semibold text-foreground">
        Repository Statistics
      </h3>

      <div className="space-y-3">
        {stats.map((stat) => {
          const Icon = stat.icon

          return (
            <div
              key={stat.label}
              className="flex items-center justify-between rounded-lg border border-border bg-muted/40 p-3"
            >
              <div className="flex items-center gap-3">
                <Icon className="h-4 w-4 text-primary" />

                <span className="text-sm font-medium">
                  {stat.label}
                </span>
              </div>

              <span className="font-semibold">
                {stat.value.toLocaleString()}
              </span>
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}