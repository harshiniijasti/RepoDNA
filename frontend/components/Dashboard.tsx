'use client'

import { motion } from 'framer-motion'
import RepositoryOverview from './dashboard/RepositoryOverview'
import TechStackDetection from './dashboard/TechStackDetection'
import ProjectTree from './dashboard/ProjectTree'
import Dependencies from './dashboard/Dependencies'
import LanguagesUsed from './dashboard/LanguagesUsed'
import RepositoryStatistics from './dashboard/RepositoryStatistics'
import ReadmeViewer from './dashboard/ReadmeViewer'
import CommitActivity from './dashboard/CommitActivity'

interface DashboardProps {
  repositoryUrl: string
  analysisData: any
}

export default function Dashboard({
  repositoryUrl,
  analysisData,
}: DashboardProps) {
  console.log(analysisData)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  }

  return (
    <div className="min-h-[calc(100vh-80px)] bg-background">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Repository Overview */}
        <RepositoryOverview overview={analysisData.overview} />

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
<TechStackDetection
  technologies={analysisData.dependencies}
/>
<ProjectTree
    tree={analysisData.project_tree}
/>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
<RepositoryStatistics
    statistics={analysisData.statistics}
/>
            <Dependencies />
          </div>
        </div>

        {/* Full Width Sections */}
        <div className="space-y-6">
<LanguagesUsed
  languages={analysisData.languages}
/>
<ReadmeViewer
    readme={analysisData.readme}
/>
<CommitActivity
    commits={analysisData.commits}
/>
        </div>
      </motion.div>
    </div>
  )
}