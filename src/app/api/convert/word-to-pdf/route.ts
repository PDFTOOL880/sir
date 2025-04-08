import { NextRequest, NextResponse } from 'next/server';

const CONVERTAPI_URL = 'https://api.convertapi.com/convert';
const AUTH_TOKEN = process.env.CONVERTAPI_SECRET;

if (!AUTH_TOKEN) {
  console.error('Missing CONVERTAPI_SECRET environment variable');
}

export async function POST(request: NextRequest) {
  if (!AUTH_TOKEN) {
    return NextResponse.json(
      { error: 'Service not configured. Please contact administrator.' },
      { status: 503 }
    );
  }

  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    // Check file type
    if (!file.name.endsWith('.doc') && !file.name.endsWith('.docx')) {
      return NextResponse.json(
        { error: 'Invalid file type. Only .doc and .docx files are supported.' },
        { status: 400 }
      );
    }

    try {
      // Convert File to Buffer and create FormData
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      
      const apiFormData = new FormData();
      const fileBlob = new Blob([buffer], { type: 'application/octet-stream' });
      apiFormData.append('File', fileBlob, file.name);
      apiFormData.append('StoreFile', 'true');

      // Determine source format
      const fromFormat = file.name.endsWith('.doc') ? 'doc' : 'docx';
      
      // Make the API request
      console.log(`Converting ${file.name} using ConvertAPI...`);
      const response = await fetch(
        `${CONVERTAPI_URL}/${fromFormat}/to/pdf?secret=${AUTH_TOKEN}`,
        {
          method: 'POST',
          body: apiFormData,
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error('ConvertAPI error response:', errorData);
        throw new Error(errorData.Message || errorData.message || 'Conversion failed');
      }

      // Get the conversion result
      const result = await response.json();
      console.log('Conversion successful, downloading PDF...');
      
      if (!result.Files || !result.Files[0] || !result.Files[0].Url) {
        throw new Error('Invalid response from conversion service');
      }

      // Download the converted PDF
      const pdfResponse = await fetch(result.Files[0].Url);
      if (!pdfResponse.ok) {
        throw new Error('Failed to download converted PDF');
      }

      const pdfBuffer = await pdfResponse.arrayBuffer();

      // Return the PDF file
      return new NextResponse(pdfBuffer, {
        headers: {
          'Content-Type': 'application/pdf',
          'Content-Disposition': `attachment; filename="${file.name.replace(/\.(doc|docx)$/, '.pdf')}"`,
          'Cache-Control': 'no-store, max-age=0',
        },
      });

    } catch (conversionError: any) {
      console.error('ConvertAPI error:', conversionError?.message || conversionError);
      return NextResponse.json(
        { 
          error: 'PDF conversion failed',
          details: conversionError?.message || 'Conversion service error'
        },
        { status: 500 }
      );
    }

  } catch (error: any) {
    console.error('Request handling error:', error?.message || error);
    return NextResponse.json(
      { 
        error: 'Failed to process request',
        details: error?.message || 'Unknown error occurred'
      },
      { status: 500 }
    );
  }
}

export const runtime = 'nodejs';
export const maxDuration = 300; // 5 minutes
export const bodySize = '50mb';
export const dynamic = 'force-dynamic';