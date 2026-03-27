import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Faltan campos requeridos" },
        { status: 400 }
      );
    }

    // Log for now — integrate with email service (Resend/SendGrid) in production
    console.log("Nuevo contacto:", { name, email, phone, service, message });

    // TODO: Send email via Resend or similar
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({ ... })

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error en contacto:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
