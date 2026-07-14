'use client'

import { motion } from 'framer-motion'
import { GitCommit } from 'lucide-react'

interface Commit {
  author: string
  message: string
  date: string
  sha: string
}

interface CommitActivityProps {
  commits: Commit[]
}

export default function CommitActivity({
  commits,
}: CommitActivityProps) {
  return (
    <motion.div
      className="rounded-lg border border-border bg-card p-6 space-y-4"
    >
      <h3 className="text-lg font-semibold">
        Recent Commits
      </h3>

      <div className="space-y-3">
        {commits.map((commit) => (
          <div
            key={commit.sha}
            className="rounded-lg border p-3"
          >
            <div className="flex gap-3">
              <GitCommit size={18} />

              <div className="flex-1">
                <p className="font-medium">
                  {commit.message}
                </p>

                <p className="text-sm text-muted-foreground">
                  {commit.author}
                </p>

                <p className="text-xs text-muted-foreground">
                  {new Date(commit.date).toLocaleString()}
                </p>
              </div>

              <code>{commit.sha}</code>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
