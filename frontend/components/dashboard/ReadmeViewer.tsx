'use client'

import { motion } from 'framer-motion'

interface ReadmeViewerProps {
  readme: string
}

export default function ReadmeViewer({
  readme,
}: ReadmeViewerProps) {
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
      className="rounded-lg border border-border bg-card p-6"
    >
      <h3 className="text-lg font-semibold mb-4">
        README
      </h3>

      <div className="max-h-[500px] overflow-y-auto rounded-lg bg-muted/40 p-4">
        <pre className="whitespace-pre-wrap text-sm">
          {readme}
        </pre>
      </div>
    </motion.div>
  )
}