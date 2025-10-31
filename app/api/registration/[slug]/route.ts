import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/connectdb';
import RegistrationTemplate from '@/schema/RegistrationTemplateSchema';

interface RouteContext {
  params: Promise<{ slug: string }>;
}

export async function GET(request: NextRequest, context: RouteContext) {
  try {
    await connectDB();
    const { slug } = await context.params;
    
    const template = await RegistrationTemplate.findOne({ slug, active: true });
    
    if (!template) {
      return NextResponse.json({ error: 'Registration form not found or inactive' }, { status: 404 });
    }
    
    return NextResponse.json(template);
  } catch (error) {
    console.error('Error fetching registration template:', error);
    return NextResponse.json({ error: 'Failed to fetch registration form' }, { status: 500 });
  }
}
