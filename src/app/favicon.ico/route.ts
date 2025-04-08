import { NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';

export async function GET() {
  try {
    const iconPath = join(process.cwd(), 'public', 'icon-192.png');
    const iconBuffer = readFileSync(iconPath);
    
    return new NextResponse(iconBuffer, {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    return new NextResponse(null, { status: 404 });
  }
}