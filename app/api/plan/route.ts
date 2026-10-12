import { NextResponse } from "next/server";
import { plannerSchema } from "@/lib/planner-schema";

const submissionSchema = plannerSchema.refine((v) => v.childAges.length === v.children, {
  message: "Please give an age for each child",
  path: ["childAges"],
});

function makeReference() {
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `UJ-${Date.now().toString(36).slice(-4).toUpperCase()}${rand}`;
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = submissionSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Validation failed", issues: parsed.error.issues.map((i) => ({ path: i.path, message: i.message })) },
      { status: 400 },
    );
  }

  const reference = makeReference();
  console.log("[trip-planner] new enquiry", reference, JSON.stringify(parsed.data, null, 2));

  // TODO: email/CRM integration.
  //  - Send a notification to the specialist team (e.g. Resend, Postmark, SES).
  //  - Create a lead/deal in the CRM (e.g. HubSpot, Pipedrive, Zoho) with the reference.
  //  - Send the traveller an acknowledgement email.
  //  - Add spam protection (honeypot/Turnstile) and rate limiting before launch.

  return NextResponse.json({ ok: true, reference });
}
