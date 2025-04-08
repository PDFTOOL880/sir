import { NextResponse } from 'next/server'
import { ProcessingOptions } from '@/types'
import { processPDF } from '@/lib/pdf-service'

// Add request validation and error handling middleware
async function validateRequest(request: Request) {
  if (!request.body) {
    throw new Error('Request body is required')
  }

  const formData = await request.formData()
  const file = formData.get('file') as File
  const optionsStr = formData.get('options') as string

  if (!file || !file.type.includes('pdf')) {
    throw new Error('Valid PDF file is required')
  }

  try {
    return { file, options: JSON.parse(optionsStr) }
  } catch {
    throw new Error('Invalid options format')
  }
}

export async function POST(request: Request) {
  try {
    const { file, options } = await validateRequest(request)
    const processedPDF = await processPDF(file, options)
    
    return new NextResponse(processedPDF, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="processed-${file.name}"`,
        'Cache-Control': 'no-cache'
      },
    })
  } catch (error) {
    console.error('PDF processing error:', error)
    return NextResponse.json({ 
      error: error instanceof Error ? error.message : 'Processing failed'
    }, { status: 500 })
  }
}
