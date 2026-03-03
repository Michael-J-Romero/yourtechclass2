import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const REQUIRED_FIELDS = ["name", "email", "studentAge"] as const;

type ContactPayload = {
  name: string;
  email: string;
  studentAge: string;
  message?: string;
  inquiryType?: string;
  interests?: string[];
};

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;

    for (const field of REQUIRED_FIELDS) {
      if (!payload[field] || !payload[field].toString().trim()) {
        return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
      }
    }

    const host = process.env.SMTP_HOST;
    const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const from = process.env.SMTP_FROM || user;
    const to = process.env.SMTP_TO || user;

    if (!host || !user || !pass || !from || !to) {
      return NextResponse.json({ error: "Email configuration is missing." }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass,
      },
    });

    const interestList = payload.interests?.length ? payload.interests.join(", ") : "No interests selected";
    const inquiryType = payload.inquiryType?.trim() || "No preference";

    await transporter.sendMail({
      from,
      to,
      subject: `Program Inquiry: ${payload.name}`,
      replyTo: payload.email,
      text:
        `Name: ${payload.name}\n` +
        `Email: ${payload.email}\n` +
        `Student Age: ${payload.studentAge}\n` +
        `Program Format: ${inquiryType}\n` +
        `Interests: ${interestList}\n\n` +
        `Message:\n${payload.message?.trim() || "(none)"}`,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}
