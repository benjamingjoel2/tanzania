import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  email: z.email(),
  source: z.string().max(80).optional(),
});

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "Invalid email address" }, { status: 400 });
  }
  console.log("[newsletter] signup", parsed.data);
  // TODO: add the subscriber to your email platform (e.g. Mailchimp, Brevo, ConvertKit)
  // and trigger delivery of "The Tanzania Safari Guide" PDF.
  return NextResponse.json({ ok: true });
}
