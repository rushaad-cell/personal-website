import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Log the submission (in production, send email or save to database)
    console.log("Contact form submission:", { name, email, message });

    // TODO: Integrate with email service
    // For Netlify, you can use Netlify Functions (see netlify/functions/contact.ts)
    // Or integrate with services like Resend, SendGrid, etc.

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

