'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import LandingPage from '@/components/LandingPage'
import Dashboard from '@/components/Dashboard'

export default function Page() {
  const [analyzeState, setAnalyzeState] = useState<
    'landing' | 'loading' | 'dashboard' | 'error'
  >('landing')

  const [repositoryUrl, setRepositoryUrl] = useState('')
  const [analysisData, setAnalysisData] = useState<any>(null)
  const [error, setError] = useState('')

  const handleAnalyze = async (url: string) => {
    const githubUrlPattern =
      /^https?:\/\/(www\.)?github\.com\/[\w-]+\/[\w.-]+\/?$/

    if (!githubUrlPattern.test(url)) {
      setError('Please enter a valid GitHub repository URL')
      setAnalyzeState('error')
      return
    }

    try {
      setRepositoryUrl(url)
      setAnalyzeState('loading')
      setError('')

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/github/analyze?repo_url=${encodeURIComponent(
          url
        )}`
      )

      if (!response.ok) {
        throw new Error('Failed to analyze repository')
      }

      const data = await response.json()

      console.log(data)

      setAnalysisData(data)
      setAnalyzeState('dashboard')
    } catch (err) {
      console.error(err)

      setError(
        err instanceof Error ? err.message : 'Something went wrong'
      )

      setAnalyzeState('error')
    }
  }

  const handleReset = () => {
    setAnalyzeState('landing')
    setRepositoryUrl('')
    setAnalysisData(null)
    setError('')
  }

  return (
    <div className="min-h-screen bg-background">
      <Header
        onReset={handleReset}
        showReset={analyzeState !== 'landing'}
      />

      {analyzeState === 'landing' && (
        <LandingPage onAnalyze={handleAnalyze} />
      )}

      {analyzeState === 'loading' && (
        <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
          <div className="flex flex-col items-center gap-4">
            <div className="animate-spin">
              <div className="h-8 w-8 rounded-full border-2 border-primary border-t-transparent"></div>
            </div>

            <p className="text-muted-foreground">
              Analyzing repository...
            </p>
          </div>
        </div>
      )}

      {analyzeState === 'dashboard' && (
        <Dashboard
          repositoryUrl={repositoryUrl}
          analysisData={analysisData}
        />
      )}

      {analyzeState === 'error' && (
        <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
          <div className="text-center">
            <h2 className="mb-2 text-xl font-semibold text-foreground">
              Something went wrong
            </h2>

            <p className="mb-6 text-muted-foreground">{error}</p>

            <button
              onClick={handleReset}
              className="rounded-lg bg-primary px-6 py-2 font-medium text-primary-foreground hover:opacity-90"
            >
              Try Again
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
