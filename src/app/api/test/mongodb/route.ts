import { NextResponse } from 'next/server';
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

export async function GET() {
  if (!MONGODB_URI) {
    return NextResponse.json(
      { error: 'MONGODB_URI not configured' },
      { status: 503 }
    );
  }

  try {
    // Test database connection
    if (mongoose.connections[0].readyState) {
      await mongoose.disconnect();
    }

    // Connect to MongoDB
    await mongoose.connect(MONGODB_URI);

    // Get connection status
    const status = mongoose.connections[0].readyState;
    const dbName = mongoose.connections[0].name;

    // Close the connection
    await mongoose.disconnect();

    return NextResponse.json({
      status: 'success',
      message: 'MongoDB connection successful',
      data: {
        database: dbName,
        connection: 'valid',
        readyState: status
      }
    });

  } catch (error: any) {
    console.error('MongoDB connection test error:', error?.message || error);
    return NextResponse.json(
      { 
        error: 'Failed to connect to MongoDB',
        details: error?.message || 'Connection error'
      },
      { status: 500 }
    );
  }
}