import { NextResponse } from "next/server";
import { Resend } from "resend";

import { ContactEmail } from "@/lib/email/contact-email";
import { contactFormSchema } from "@/lib/validations/contact";

import { INFO } from "@/constants";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  let values;

  try {
    values = await contactFormSchema.validate(await request.json());
  } catch {
    return NextResponse.json({ success: false, message: "Invalid form submission." }, { status: 400 });
  }

  try {
    const { error } = await resend.emails.send({
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
