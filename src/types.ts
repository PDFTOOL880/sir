// Basic types
export type ProcessingType = 'merge' | 'split' | 'compress' | 'convert'

// Settings types
interface CompressSettings {
  quality: number
}

interface SplitSettings {
  pageRange: string
}

interface ConvertSettings {
  outputFormat: string
  isImageToPdf?: boolean
}

interface MergeSettings {
  order: string[]
}

export interface ProcessingSettings {
  compress?: CompressSettings
  split?: SplitSettings
  convert?: ConvertSettings
  merge?: MergeSettings
}

export interface ProcessingOptions {
  type: ProcessingType
  settings?: ProcessingSettings
}

// File types
export interface PDFFile {
  id: string
  userId: string
  originalName: string
  fileName?: string
  path: string
  size: number
  createdAt: Date
  status?: 'processed' | 'processing' | 'error'
  processingType?: ProcessingType
  url?: string
}

// User types
export interface UserProfile {
  id: string
  email: string
  subscription: 'free' | 'premium'
  usageLimit: number
  usedStorage: number
  totalFiles: number
  createdAt: Date
}

// Component props
export interface FileListProps {
  files: File[]
  currentPage: number
  filesPerPage: number
  onPageChange: (page: number) => void
  onRemove: (index: number) => void
  searchTerm?: string
  onSearch?: (term: string) => void
  sortBy?: 'name' | 'date' | 'size'
  onSort?: (sortKey: 'name' | 'date' | 'size') => void
}
