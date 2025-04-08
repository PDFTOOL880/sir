'use client'

import { useState, useCallback } from 'react'
import type { ProcessingOptions } from '@/types'
import { useTranslation } from 'react-i18next'

interface FileUploadProps {
  onUpload: (file: File) => Promise<void>
  options: ProcessingOptions
  onProgress: (progress: number) => void
  accept?: string
  isProcessing?: boolean
  processingText?: string
}

export function FileUpload({
  onUpload,
  options,
  onProgress,
  accept = '.pdf',
  isProcessing = false,
  processingText
}: FileUploadProps) {
  const [isDragging, setIsDragging] = useState(false)
  const { t } = useTranslation()

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)

    const files = Array.from(e.dataTransfer.files)
    if (files.length > 0) {
      const file = files[0]
      if (file.type === 'application/pdf') {
        onUpload(file)
      }
    }
  }, [onUpload])

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    if (files.length > 0) {
      const file = files[0]
      if (file.type === 'application/pdf') {
        onUpload(file)
      }
    }
  }, [onUpload])

  return (
    <div
      className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors
        ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400'}
        dark:border-gray-600 dark:hover:border-gray-500
        ${isProcessing ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
      onDragOver={!isProcessing ? handleDragOver : undefined}
      onDragLeave={!isProcessing ? handleDragLeave : undefined}
      onDrop={!isProcessing ? handleDrop : undefined}
    >
      <input
        type="file"
        className="hidden"
        disabled={isProcessing}
        accept={accept || '.pdf'}
        onChange={!isProcessing ? handleFileSelect : undefined}
        id="fileInput"
      />
      <label htmlFor="fileInput" className="cursor-pointer">
        <div className="mb-4">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 14v20c0 4.418 7.163 8 16 8 1.381 0 2.721-.087 4-.252M24 38c8.837 0 16-3.582 16-8V14M8 14c0 4.418 7.163 8 16 8s16-3.582 16-8M8 14c0-4.418 7.163-8 16-8s16 3.582 16 8"
            />
          </svg>
        </div>
        {isProcessing ? (
          <p className="text-lg font-semibold mb-2 dark:text-white">
            {processingText || t('dropzone.processing')}
          </p>
        ) : (
          <>
            <p className="text-lg font-semibold mb-2 dark:text-white">
              {t('dropzone.title')}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {t('dropzone.description')}
            </p>
          </>
        )}
      </label>
    </div>
  )
}
