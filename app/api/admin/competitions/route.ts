import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import connectDB from '@/lib/connectdb';
import CompetitionResult from '@/schema/CompetitionResultSchema';

// GET all competition results
export async function GET() {
  try {
    await connectDB();
    const results = await CompetitionResult.find().sort({ createdAt: -1, rank: 1 });
    return NextResponse.json(results);
  } catch (error) {
    console.error('Error fetching competition results:', error);
    return NextResponse.json({ error: 'Failed to fetch competition results' }, { status: 500 });
  }
}

// POST create new competition result
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();
    const body = await request.json();
    
    const result = await CompetitionResult.create(body);

    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    console.error('Error creating competition result:', error);
    return NextResponse.json({ error: 'Failed to create competition result' }, { status: 500 });
  }
}

// PUT update competition result
export async function PUT(request: NextRequest) {
  try {
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();
    const { id, ...updateData } = await request.json();

    const result = await CompetitionResult.findByIdAndUpdate(id, updateData, { new: true });

    if (!result) {
      return NextResponse.json({ error: 'Competition result not found' }, { status: 404 });
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error updating competition result:', error);
    return NextResponse.json({ error: 'Failed to update competition result' }, { status: 500 });
  }
}

// DELETE competition result
export async function DELETE(request: NextRequest) {
  try {
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Result ID required' }, { status: 400 });
    }

    const result = await CompetitionResult.findByIdAndDelete(id);

    if (!result) {
      return NextResponse.json({ error: 'Competition result not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting competition result:', error);
    return NextResponse.json({ error: 'Failed to delete competition result' }, { status: 500 });
  }
}
