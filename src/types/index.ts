export interface PDFFile {
  id: string;
  fileName: string;
  size: number;
  createdAt: Date;
  status: 'processed' | 'processing' | 'error';
  url?: string;
  thumbnailUrl?: string;
  processingType?: 'compress' | 'convert' | 'merge' | 'split';
  userId: string;
}

export interface UserProfile {
  id: string;
  email: string;
  subscription: string;
  usageLimit: number;
  usedStorage: number;
  totalFiles: number;
  createdAt: Date;
}

export interface ProcessingOptions {
  maxFileSize?: number;
  allowedTypes?: string[];
  preserveQuality?: boolean;
  compression?: {
    level: 'low' | 'medium' | 'high';
  };
  conversion?: {
    format: string;
    quality?: number;
  };
}
