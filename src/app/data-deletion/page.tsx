'use client'

import { useState } from 'react'

export default function DataDeletionPage() {
  const [requestSubmitted, setRequestSubmitted] = useState(false)
  const [email, setEmail] = useState('')
  const [reason, setReason] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    
    try {
      const response = await fetch('/api/data-deletion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, reason }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit request')
      }

      setRequestSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit request')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mt-8">
            Data Deletion Policy
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We respect your privacy and your right to control your personal data
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            About Data Deletion
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="mb-4">
              We are committed to protecting your privacy and ensuring you retain control over your personal data. 
              When you request data deletion, we will:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Remove all your personal information from our active databases</li>
              <li>Delete all PDF files and documents you&apos;ve uploaded</li>
              <li>Remove any cached or temporary files associated with your account</li>
              <li>Delete your account and all associated preferences</li>
            </ul>
            <p className="mb-4">
              The process typically takes up to 30 days to complete, ensuring thorough removal across all our systems.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Your Rights
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="mb-4">
              Under data protection laws, you have the right to:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Request access to your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Request transfer of your data</li>
            </ul>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Request Data Deletion
          </h2>
          {requestSubmitted ? (
            <div className="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <svg 
                className="w-12 h-12 text-green-500 mx-auto mb-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <h3 className="text-lg font-medium text-green-900 dark:text-green-100 mb-2">
                Request Submitted Successfully
              </h3>
              <p className="text-green-700 dark:text-green-200">
                We&apos;ve received your data deletion request. You will receive a confirmation email shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="your@email.com"
                  disabled={loading}
                />
              </div>
              <div>
                <label 
                  htmlFor="reason" 
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Reason for Deletion (Optional)
                </label>
                <textarea
                  id="reason"
                  rows={4}
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="Please let us know why you're requesting data deletion..."
                  disabled={loading}
                />
              </div>
              <div className="flex items-center">
                <input
                  id="confirm"
                  type="checkbox"
                  required
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  disabled={loading}
                />
                <label 
                  htmlFor="confirm" 
                  className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
                >
                  I understand that this action cannot be undone and all my data will be permanently deleted
                </label>
              </div>
              {error && (
                <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-600 dark:text-red-400">
                  {error}
                </div>
              )}
              <button
                type="submit"
                disabled={loading}
                className={`
                  w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white
                  ${loading 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
                  }
                  transition-colors
                `}
              >
                {loading ? 'Submitting...' : 'Request Data Deletion'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}