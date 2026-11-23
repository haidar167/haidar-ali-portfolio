import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = typeof body?.name === "string" ? body.name.trim() : "";
    const email = typeof body?.email === "string" ? body.email.trim() : "";
    const message =
      typeof body?.message === "string" ? body.message.trim() : "";

    // Basic server-side validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "name, email and message are required" },
        { status: 400 }
      );
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "invalid email address" },
        { status: 400 }
      );
    }

    // Save to database (best-effort). On serverless hosts (e.g. Vercel) the
    // SQLite file is ephemeral — the client-side email notification below is
    // the reliable delivery path, so never fail the form because of this.
    let stored = true;
    try {
      await db.contactMessage.create({
        data: { name, email, message },
      });
    } catch (dbError) {
      stored = false;
      console.error("Database save failed (non-fatal):", dbError);
    }

    return NextResponse.json({ ok: true, stored });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "failed to save message" },
      { status: 500 }
    );
  }
}
