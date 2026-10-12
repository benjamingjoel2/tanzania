import { NextResponse } from "next/server";
import { contactSchema } from "@/components/sections/ContactForm";

export async function POST(request: Request) {
  const parsed = contactSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ ok: false, error: "Validation failed" }, { status: 400 });
  console.log("[contact] new message", parsed.data);
  // TODO: email/CRM integration (forward to the specialist inbox and log in the CRM).
  return NextResponse.json({ ok: true });
}
