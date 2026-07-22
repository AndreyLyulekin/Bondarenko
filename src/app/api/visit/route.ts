import { appendFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const LOG_DIRECTORY = path.join(process.cwd(), 'logs');
const LOG_FILE = path.join(LOG_DIRECTORY, 'visits.log');

function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get('x-forwarded-for');

  if (forwardedFor) {
    return forwardedFor.split(',')[0]?.trim() || 'unknown';
  }

  return (
    request.headers.get('x-real-ip') ||
    request.headers.get('cf-connecting-ip') ||
    'unknown'
  );
}

export async function POST(request: NextRequest) {
  const timestamp = new Date().toISOString();
  const ip = getClientIp(request);
  const userAgent = request.headers.get('user-agent') || 'unknown';
  const logLine = `${timestamp} | ip=${ip} | user-agent=${JSON.stringify(userAgent)}\n`;

  try {
    await mkdir(LOG_DIRECTORY, { recursive: true });
    await appendFile(LOG_FILE, logLine, 'utf8');

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to write visit log:', error);

    return NextResponse.json(
      { success: false },
      { status: 500 },
    );
  }
}
