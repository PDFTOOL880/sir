import { NextResponse } from 'next/server';

const CONVERTAPI_URL = 'https://api.convertapi.com';
const AUTH_TOKEN = process.env.CONVERTAPI_SECRET;

export async function GET() {
  if (!AUTH_TOKEN) {
    return NextResponse.json(
      { error: 'CONVERTAPI_SECRET not configured' },
      { status: 503 }
    );
  }

  try {
    // Test the API connection
    const response = await fetch(
      `${CONVERTAPI_URL}/user?secret=${AUTH_TOKEN}`,
      {
        method: 'GET',
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error('ConvertAPI test failed:', errorData);
      return NextResponse.json(
        { 
          error: 'API configuration test failed',
          details: errorData.Message || errorData.message || 'Unknown error'
        },
        { status: 500 }
      );
    }

    const data = await response.json();
    
    return NextResponse.json({
      status: 'success',
      message: 'ConvertAPI configuration is valid',
      data: {
        secondsLeft: data.SecondsLeft,
        secret: 'valid',
      }
    });

  } catch (error: any) {
    console.error('API test error:', error?.message || error);
    return NextResponse.json(
      { 
        error: 'Failed to test API configuration',
        details: error?.message || 'Connection error'
      },
      { status: 500 }
    );
  }
}