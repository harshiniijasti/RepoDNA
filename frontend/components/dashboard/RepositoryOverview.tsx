'use client'

import { motion } from 'framer-motion'
import { Star, GitFork, AlertCircle, Tag, Calendar } from 'lucide-react'

interface RepositoryOverviewProps {
  overview: {
    name: string
    owner: string
    description: string
    stars: number
    forks: number
    open_issues: number
    license: string
    updated_at: string
  }
}

export default function RepositoryOverview({
  overview,
}: RepositoryOverviewProps) {
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
      {/* Header */}
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-foreground">
          {overview.name}
        </h2>

        <p className="text-sm text-muted-foreground">
          {overview.owner} / {overview.name}
        </p>

        <p className="text-base text-muted-foreground pt-2 max-w-2xl">
          {overview.description || 'No description available.'}
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="rounded-lg bg-muted/50 p-4 space-y-2">
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 text-primary" />
            <span className="text-xs font-medium text-muted-foreground">
              Stars
            </span>
          </div>

          <p className="text-2xl font-bold text-foreground">
            {overview.stars.toLocaleString()}
          </p>
        </div>

        <div className="rounded-lg bg-muted/50 p-4 space-y-2">
          <div className="flex items-center gap-2">
            <GitFork className="h-4 w-4 text-primary" />
            <span className="text-xs font-medium text-muted-foreground">
              Forks
            </span>
          </div>

          <p className="text-2xl font-bold text-foreground">
            {overview.forks.toLocaleString()}
          </p>
        </div>

        <div className="rounded-lg bg-muted/50 p-4 space-y-2">
          <div className="flex items-center gap-2">
            <AlertCircle className="h-4 w-4 text-primary" />
            <span className="text-xs font-medium text-muted-foreground">
              Issues
            </span>
          </div>

          <p className="text-2xl font-bold text-foreground">
            {overview.open_issues.toLocaleString()}
          </p>
        </div>

        <div className="rounded-lg bg-muted/50 p-4 space-y-2">
          <div className="flex items-center gap-2">
            <Tag className="h-4 w-4 text-primary" />
            <span className="text-xs font-medium text-muted-foreground">
              License
            </span>
          </div>

          <p className="text-lg font-semibold text-foreground">
            {overview.license}
          </p>
        </div>
      </div>

      {/* Last Updated */}
      <div className="flex items-center gap-2 pt-4 border-t border-border">
        <Calendar className="h-4 w-4 text-muted-foreground" />

        <span className="text-sm text-muted-foreground">
          Last updated:{' '}
          <span className="text-foreground font-medium">
            {new Date(overview.updated_at).toLocaleDateString()}
          </span>
        </span>
      </div>
    </motion.div>
  )
}
