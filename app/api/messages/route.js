import { NextResponse } from 'next/server';
import dbConnect from '../../../lib/dbConnect';
import Admission from '../../../models/Admission';

export async function GET() {
  try {
    // 1. Connecting database
    await dbConnect();

    // ২. Finding all admission messages from the database (New one will be shown first)
    const allMessages = await Admission.find({}).sort({ createdAt: -1 });

    return NextResponse.json(
      { success: true, data: allMessages },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching messages:', error);
    return NextResponse.json(
      { success: false, message: 'There was a problem loading data' },
      { status: 500 }
    );
  }
}
