import { Resend } from 'resend'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const { name, email, phone, service, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Les champs nom, courriel et message sont requis.' },
        { status: 400 }
      )
    }

    const toEmail   = process.env.CONTACT_TO_EMAIL   ?? 'contact@aliceaupaysdesdoodles.com'
    const fromEmail = process.env.CONTACT_FROM_EMAIL ?? 'onboarding@resend.dev'

    await resend.emails.send({
      from: `Formulaire Alice au pays des Doodles <${fromEmail}>`,
      to:   [toEmail],
      reply_to: email,
      subject: `Nouveau message de ${name}${service ? ` — ${service}` : ''}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #6B4226;">
          <h2 style="color: #8B5E3C; border-bottom: 2px solid #E8C9A0; padding-bottom: 12px;">
            Nouveau message — Alice au pays des Doodles
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; font-weight: 600; width: 120px;">Nom</td><td>${name}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: 600;">Courriel</td><td><a href="mailto:${email}" style="color:#C9956A;">${email}</a></td></tr>
            ${phone ? `<tr><td style="padding: 8px 0; font-weight: 600;">Téléphone</td><td>${phone}</td></tr>` : ''}
            ${service ? `<tr><td style="padding: 8px 0; font-weight: 600;">Service</td><td>${service}</td></tr>` : ''}
          </table>
          <h3 style="color: #8B5E3C; margin-top: 24px;">Message</h3>
          <p style="background: #F9F4F0; padding: 16px; border-radius: 8px; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
          <p style="color: #D4A574; font-size: 12px; margin-top: 32px;">
            Ce message a été envoyé via le formulaire de contact du site web.
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email send error:', error)
    return NextResponse.json(
      { error: 'Impossible d\'envoyer le message. Veuillez réessayer.' },
      { status: 500 }
    )
  }
}
