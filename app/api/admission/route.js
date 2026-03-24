import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Admission from '@/models/Admission';

export async function POST(req) {
  try {
    // !. connect to a database
    await dbConnect();

    // 2. Receive data sent from a form
    const data = await req.json();

    // 3. Saving new admission data in the database
    const newAdmission = await Admission.create(data);

    return NextResponse.json(
      { success: true, message: 'Data saved successfully!', data: newAdmission },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error in API:', error);
    return NextResponse.json(
      { success: false, message: 'Something went wrong!', error: error.message },
      { status: 500 }
    );
  }
}
