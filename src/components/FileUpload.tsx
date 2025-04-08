
'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import { ProcessingOptions } from '@/types'
import { initializeGoogleDrive, selectFileFromGoogleDrive, initializeDropbox, selectFileFromDropbox } from '@/utils/cloudStorage'

interface FileUploadProps {
  onUpload: (file: File) => Promise<void>
  options: ProcessingOptions
  accept?: string
  onProgress?: (progress: number) => void
  isProcessing?: boolean
  processingText?: string
}

const GoogleDriveIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.82 2h8.36l7.82 13.27-3.82 6.73H3.82L0 15.27 7.82 2z" fill="#4285F4"/>
    <path d="M15.31 15.27l4.87 6.73H3.82l4.87-6.73h6.62z" fill="#34A853"/>
    <path d="M8.69 15.27L12 9.27l3.31 6h-6.62z" fill="#FBBC05"/>
    <path d="M7.82 2L12 9.27 16.18 2H7.82z" fill="#EA4335"/>
  </svg>
)

const DropboxIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6 2l6 3.75L6 9.5 0 5.75 6 2zm12 0l6 3.75-6 3.75-6-3.75L18 2zM0 13.25L6 9.5l6 3.75L6 17l-6-3.75zM18 9.5l6 3.75L18 17l-6-3.75 6-3.75zM6 18.25l6-3.75 6 3.75L12 22l-6-3.75z" fill="#0061FF"/>
  </svg>
)

export function FileUpload({ 
  onUpload, 
  options, 
  accept = '.pdf', 
  onProgress,
  isProcessing = false,
  processingText = 'Processing...'
}: FileUploadProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string>('')
  const [progress, setProgress] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [cloudServiceReady, setCloudServiceReady] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const initializeCloudServices = async () => {
      try {
        await Promise.all([
          initializeGoogleDrive(),
          initializeDropbox()
        ])
        setCloudServiceReady(true)
      } catch (err) {
        console.error('Failed to initialize cloud services:', err)
        setError('Cloud services initialization failed')
      }
    }

    initializeCloudServices()
  }, [])

  const handleFile = async (file: File) => {
    setLoading(true)
    setError('')
    try {
      await onUpload(file)
      setProgress(100)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Upload failed')
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleDrive = async (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!cloudServiceReady) {
      setError('Google Drive service is not ready')
      return
    }
    
    setLoading(true)
    setError('')
    try {
      const file = await selectFileFromGoogleDrive()
      await handleFile(file)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Google Drive upload failed')
      setLoading(false)
    }
  }

  const handleDropbox = async (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!cloudServiceReady) {
      setError('Dropbox service is not ready')
      return
    }

    setLoading(true)
    setError('')
    try {
      const file = await selectFileFromDropbox()
      await handleFile(file)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Dropbox upload failed'
      if (errorMessage !== 'File selection cancelled') {
        setError(errorMessage)
      }
      setLoading(false)
    }
  }

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
    
    const droppedFiles = Array.from(e.dataTransfer.files)
    const pdfFiles = droppedFiles.filter(file => file.type === 'application/pdf')
    
    if (pdfFiles.length === 0) {
      setError('Please drop PDF files only')
      return
    }

    await handleFile(pdfFiles[0])
  }

  return (
    <div className="w-full">
      <div 
        onClick={() => !isProcessing && fileInputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault()
          e.stopPropagation()
          if (!isDragging && !isProcessing) setIsDragging(true)
        }}
        onDragEnter={(e) => {
          e.preventDefault()
          e.stopPropagation()
          if (!isProcessing) setIsDragging(true)
        }}
        onDragLeave={(e) => {
          e.preventDefault()
          e.stopPropagation()
          const rect = e.currentTarget.getBoundingClientRect()
          const x = e.clientX - rect.left
          const y = e.clientY - rect.top
          if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
            setIsDragging(false)
          }
        }}
        onDrop={handleDrop}
        className={`
          w-full p-8 border-2 border-dashed rounded-xl 
          transition-all duration-300 ease-in-out
          backdrop-blur-sm bg-white/50 dark:bg-gray-800/50
          ${isDragging 
            ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 scale-102' 
            : 'border-gray-300 hover:border-blue-500 dark:border-gray-600'
          }
          ${isProcessing || loading 
            ? 'opacity-75 cursor-wait' 
            : 'cursor-pointer hover:shadow-2xl hover:scale-102'
          }
        `}
      >
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          accept={accept}
          onChange={(e) => {
            const file = e.target.files?.[0]
            if (file) handleFile(file)
          }}
          disabled={loading || isProcessing}
        />
        
        <div className="text-center space-y-6">
          <div className="flex justify-center items-center space-x-8">
            <div className="text-5xl transform transition-transform hover:scale-110">
              {isDragging ? '📄' : '📁'}
            </div>
          </div>
          <div className="text-lg font-medium">
            {loading || isProcessing
              ? processingText || `Processing... ${progress}%`
              : isDragging
                ? 'Drop your PDF here'
                : 'Drag & drop your PDF here or click to browse'
            }
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center space-x-3">
            <span>Supports PDF files up to 10MB</span>
            <span className="text-gray-300">|</span>
            <span className="flex items-center gap-2">
              <span>Upload from:</span>
              <button 
                className={`p-1.5 rounded-lg transition-colors relative group ${
                  cloudServiceReady 
                    ? 'hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer' 
                    : 'opacity-50 cursor-not-allowed'
                }`}
                onClick={handleGoogleDrive}
                disabled={!cloudServiceReady || loading || isProcessing}
                title={cloudServiceReady ? 'Upload from Google Drive' : 'Initializing...'}
              >
                <GoogleDriveIcon />
                {!cloudServiceReady && (
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Initializing...
                  </span>
                )}
              </button>
              <button 
                className={`p-1.5 rounded-lg transition-colors relative group ${
                  cloudServiceReady 
                    ? 'hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer' 
                    : 'opacity-50 cursor-not-allowed'
                }`}
                onClick={handleDropbox}
                disabled={!cloudServiceReady || loading || isProcessing}
                title={cloudServiceReady ? 'Upload from Dropbox' : 'Initializing...'}
              >
                <DropboxIcon />
                {!cloudServiceReady && (
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Initializing...
                  </span>
                )}
              </button>
            </span>
          </div>
        </div>

        {(loading || isProcessing) && (
          <div className="w-full h-2 bg-gray-100 dark:bg-gray-700 rounded-full mt-6 overflow-hidden">
            <div 
              className={`h-full rounded-full transition-all duration-500 ease-out ${
                progress === 100 
                  ? 'bg-green-500' 
                  : 'bg-blue-500'
              }`}
              style={{ 
                width: `${progress}%`,
                boxShadow: progress === 100 ? '0 0 10px rgba(34, 197, 94, 0.5)' : '0 0 10px rgba(59, 130, 246, 0.5)'
              }}
            />
          </div>
        )}
      </div>
      
      {error && (
        <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-600 dark:text-red-400 shadow-sm">
          {error}
        </div>
      )}
    </div>
  )
}
