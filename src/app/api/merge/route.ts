import { PDFDocument } from 'pdf-lib';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Create a new FormData instance for handling the files
    const formData = await request.formData();
    const files: File[] = [];

    // Collect all files from the form data
    for (let i = 0; formData.get(`file${i}`); i++) {
      const file = formData.get(`file${i}`) as File;
      if (!file) break;
      files.push(file);
    }

    // Validate files
    if (files.length < 2) {
      return NextResponse.json(
        { error: 'At least 2 PDF files are required' },
        { status: 400 }
      );
    }

    // Create a new PDF document
    const mergedPdf = await PDFDocument.create();

    // Process each file
    for (const file of files) {
      try {
        // Convert File to ArrayBuffer
        const buffer = await file.arrayBuffer();
        
        // Load the PDF document
        const pdfDoc = await PDFDocument.load(buffer);
        
        // Copy all pages
        const pages = await mergedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
        
        // Add each page to the merged document
        pages.forEach(page => mergedPdf.addPage(page));
      } catch (error) {
        console.error('Error processing file:', file.name, error);
        return NextResponse.json(
          { error: `Failed to process file: ${file.name}` },
          { status: 400 }
        );
      }
    }

    // Save the merged PDF
    const mergedPdfBytes = await mergedPdf.save();

    // Return the merged PDF as a response
    return new NextResponse(mergedPdfBytes, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename=merged.pdf'
      }
    });
  } catch (error) {
    console.error('Error merging PDFs:', error);
    return NextResponse.json(
      { error: 'Failed to merge PDFs' },
      { status: 500 }
    );
  }
}

// Configure route handlers
export const runtime = 'nodejs' // Use Node.js runtime for Buffer support
export const maxDuration = 60 // Maximum execution time (in seconds)
export const dynamic = 'force-dynamic'
