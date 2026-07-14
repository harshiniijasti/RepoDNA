'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { GitBranch, ArrowRight } from 'lucide-react'

interface LandingPageProps {
  onAnalyze: (url: string) => void
}

export default function LandingPage({ onAnalyze }: LandingPageProps) {
  const [url, setUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (url.trim()) {
      setIsLoading(true)
      onAnalyze(url)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <main className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center px-4 py-20">
      <motion.div
        className="max-w-2xl w-full space-y-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <motion.div variants={itemVariants} className="space-y-4">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 mb-4">
            <GitBranch className="h-8 w-8 text-primary" />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-foreground text-balance">
            RepoDNA
          </h1>

          <p className="text-xl text-muted-foreground text-balance">
            Reveal the DNA of any GitHub repository
          </p>
        </motion.div>

        {/* Description */}
        <motion.div variants={itemVariants} className="space-y-4">
          <p className="text-lg text-muted-foreground max-w-xl mx-auto text-balance">
           Understand any public GitHub repository in minutes. Explore its tech stack, project structure, dependencies, language distribution, repository statistics, README, and commit activity—all in one place.
          </p>
        </motion.div>

        {/* Input Section */}
        <motion.form
          onSubmit={handleSubmit}
          variants={itemVariants}
          className="space-y-4 pt-4"
        >
          <div className="relative">
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://github.com/owner/repository"
              className="w-full px-6 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
            />
          </div>
{/* Popular Repository Examples */}
<div className="space-y-3">
  <p className="text-sm text-muted-foreground text-left">
    Popular repositories
  </p>

  <div className="flex flex-wrap gap-2">
    {[
      {
        name: "Next.js",
        url: "https://github.com/vercel/next.js",
      },
      {
        name: "React",
        url: "https://github.com/facebook/react",
      },
      {
        name: "FastAPI",
        url: "https://github.com/fastapi/fastapi",
      },
    ].map((repo) => (
      <button
        key={repo.name}
        type="button"
        onClick={() => setUrl(repo.url)}
        className="rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground transition-all hover:border-primary hover:text-primary hover:bg-primary/5"
      >
        {repo.name}
      </button>
    ))}
  </div>
</div>
          <button
            type="submit"
            disabled={isLoading || !url.trim()}
            className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <div className="animate-spin h-4 w-4 rounded-full border-2 border-primary-foreground border-t-transparent"></div>
                Analyzing...
              </>
            ) : (
              <>
                Analyze Repository
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </button>
        </motion.form>

        {/* Empty State Illustration */}
        <motion.div variants={itemVariants} className="pt-12">
          <div className="mx-auto max-w-md space-y-4">
            <div className="relative h-40 rounded-2xl border-2 border-dashed border-border flex items-center justify-center bg-muted/30">
            <div className="text-center">
              <GitBranch className="h-12 w-12 text-muted-foreground mx-auto mb-2 opacity-50" />
              <p className="text-sm text-muted-foreground">
                Paste a repository URL to get started
              </p>
            </div>
            </div>
            <p className="text-xs text-muted-foreground">
              💡 Tip: 💡 Works with any public GitHub repository. Start with one of the examples above or paste your own.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </main>
  )
}
