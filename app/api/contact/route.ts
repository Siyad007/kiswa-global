import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, company, email, phone, product, quantity, message } = body

    if (!name || !phone) {
      return NextResponse.json({ error: 'Name and phone are required.' }, { status: 400 })
    }

    // Log the inquiry (replace with real email/WhatsApp integration)
    console.log('📦 New Kiswa Inquiry:', {
      name,
      company,
      email,
      phone,
      product,
      quantity,
      message,
      timestamp: new Date().toISOString(),
    })

    /*
      INTEGRATION OPTIONS:
      1. Nodemailer → Send email to kiswaglobalksa@gmail.com
      2. WhatsApp Business API → Forward to +966553806731
      3. Resend.com → Professional transactional emails
      4. Airtable / Google Sheets → Log all inquiries
    */

    return NextResponse.json({ success: true }, { status: 200 })
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
