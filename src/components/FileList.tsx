'use client'

import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

interface FileListProps {
  files: File[]
  currentPage: number
  filesPerPage: number
  onPageChange: (page: number) => void
  onRemove: (index: number) => void
}

export function FileList({ 
  files, 
  currentPage, 
  filesPerPage, 
  onPageChange, 
  onRemove 
}: FileListProps) {
  const { t } = useTranslation()
  const totalPages = Math.ceil(files.length / filesPerPage)
  const startIndex = (currentPage - 1) * filesPerPage
  const visibleFiles = files.slice(startIndex, startIndex + filesPerPage)

  const formatFileSize = useCallback((bytes: number) => {
    if (bytes === 0) return '0 B'
    const k = 1024
    const sizes = ['B', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }, [])

  if (files.length === 0) {
    return null
  }

  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold mb-4 dark:text-white">{t('fileList.title')}</h3>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {visibleFiles.map((file, index) => (
            <li key={file.name + index} className="p-4 flex items-center justify-between">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <svg
                  className="h-6 w-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{file.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {formatFileSize(file.size)}
                  </p>
                </div>
              </div>
              <button
                onClick={() => onRemove(startIndex + index)}
                className="text-red-500 hover:text-red-700"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      </div>
      
      {totalPages > 1 && (
        <div className="mt-4 flex justify-center space-x-2 rtl:space-x-reverse">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-700 disabled:opacity-50"
          >
            {t('pagination.previous')}
          </button>
          <span className="px-3 py-1 text-gray-600 dark:text-gray-300">
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-700 disabled:opacity-50"
          >
            {t('pagination.next')}
          </button>
        </div>
      )}
    </div>
  )
}