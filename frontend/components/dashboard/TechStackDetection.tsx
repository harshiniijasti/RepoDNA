'use client'

import { motion } from 'framer-motion'

interface TechStackDetectionProps {
  technologies: string[]
}

export default function TechStackDetection({
  technologies,
}: TechStackDetectionProps) {
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  }

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  }

  return (
    <motion.div
      variants={itemVariants}
      className="rounded-lg border border-border bg-card p-6 space-y-4"
    >
      <h3 className="text-lg font-semibold text-foreground">
        Tech Stack
      </h3>

      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, idx) => (
          <motion.div
            key={tech}
            variants={badgeVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: idx * 0.05 }}
            className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1.5 border border-primary/20"
          >
            <span className="text-sm font-medium text-primary">
              {tech}
            </span>
          </motion.div>
        ))}
      </div>

      <p className="text-xs text-muted-foreground pt-2">
        Technologies detected from package.json
      </p>
    </motion.div>
  )
}
