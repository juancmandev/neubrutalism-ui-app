import { NextResponse } from 'next/server';
import MailerLite from '@mailerlite/mailerlite-nodejs';

export async function POST(request: Request) {
  try {
    const mailerlite = new MailerLite({
      api_key: process.env.MAILER_LITE_KEY!,
    });
    const { name, email } = await request.json();

    await mailerlite.subscribers.createOrUpdate({
      email,
      fields: {
        name,
      },
      status: 'active',
      groups: ['91890469200463449'],
    });

    return NextResponse.json({ status: 'ok' });
  } catch {
    return NextResponse.json({ status: 'error' });
  }
}
