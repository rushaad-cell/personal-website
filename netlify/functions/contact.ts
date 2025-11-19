import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

export const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method not allowed" }),
    };
  }

  try {
    const { name, email, message } = JSON.parse(event.body || "{}");

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Missing required fields" }),
      };
    }

    // Here you would typically send an email or save to a database
    // For now, we'll just log it and return success
    console.log("Contact form submission:", { name, email, message });

    // TODO: Integrate with email service (e.g., SendGrid, Resend, etc.)
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'contact@yourdomain.com',
    //   to: 'rushaad@berkeley.edu',
    //   subject: `Contact form from ${name}`,
    //   html: `<p>From: ${email}</p><p>${message}</p>`
    // });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Message sent successfully" }),
    };
  } catch (error) {
    console.error("Error processing contact form:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal server error" }),
    };
  }
};

