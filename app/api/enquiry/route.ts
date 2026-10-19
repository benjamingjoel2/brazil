import { enquirySchema } from "@/lib/enquiry";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = enquirySchema.safeParse(body);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "form");
      fieldErrors[key] ??= issue.message;
    }
    return Response.json({ ok: false, fieldErrors }, { status: 422 });
  }

  // Bots fill the hidden honeypot; accept silently so they learn nothing.
  if (parsed.data.website) return Response.json({ ok: true });

  const { website: _honeypot, ...enquiry } = parsed.data;
  void _honeypot;
  console.log("[enquiry]", JSON.stringify({ receivedAt: new Date().toISOString(), ...enquiry }));
  // TODO: send to the CRM (e.g. HubSpot/Pipedrive) and notify the team on WhatsApp/email.

  return Response.json({ ok: true });
}
