import { NextResponse } from "next/server";
import { Resend } from "resend";

import { ContactEmail } from "@/lib/email/contact-email";
import { contactFormSchema } from "@/lib/validations/contact";

import { INFO } from "@/constants";

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ success: false, message: "Email service is not configured." }, { status: 503 });
  }

  let values;

  try {
    values = await contactFormSchema.validate(await request.json());
  } catch {
    return NextResponse.json({ success: false, message: "Invalid form submission." }, { status: 400 });
  }

  try {
    const { error } = await new Resend(apiKey).emails.send({
      from: process.env.CONTACT_EMAIL_FROM || "onboarding@resend.dev",
      to: process.env.CONTACT_EMAIL_TO || INFO.EMAIL_ADDRESS,
      replyTo: values.email,
      subject: `New inquiry from ${values.name}: ${values.subject}`,
      react: <ContactEmail {...values} />,
    });

    if (error) {
      return NextResponse.json({ success: false, message: "Failed to send message." }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false, message: "Failed to send message." }, { status: 500 });
  }
}
