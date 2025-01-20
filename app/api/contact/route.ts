import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number.parseInt(process.env.EMAIL_PORT || "587"),
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    ciphers: "SSLv3",
    rejectUnauthorized: false,
  },
})

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { email, name, message, phone } = data

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: "New Contact Form Submission - Vellio Properties",
      text: `
New Contact Form Submission

Dear Vellio Properties Team,

A new inquiry has been received through the contact form on your website. Details are as follows:

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}

Message:
${message}

Please respond to this inquiry as soon as possible.

Best regards,
Vellio Properties Automated System
      `,
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    h1 { color: #00447D; }
    .info { background-color: #f4f4f4; padding: 15px; border-radius: 5px; }
    .message { margin-top: 20px; }
  </style>
</head>
<body>
  <div class="container">
    <h1>New Contact Form Submission</h1>
    <p>Dear Vellio Properties Team,</p>
    <p>A new inquiry has been received through the contact form on your website. Details are as follows:</p>
    <div class="info">
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
    </div>
    <div class="message">
      <h2>Message:</h2>
      <p>${message.replace(/\n/g, "<br>")}</p>
    </div>
    <p>Please respond to this inquiry as soon as possible.</p>
    <p>Best regards,<br>Vellio Properties Automated System</p>
  </div>
</body>
</html>
      `,
    }

    await transporter.sendMail(mailOptions)

    console.log("Contact form submission sent via email:", { email, name, message, phone })

    return NextResponse.json({
      success: true,
      message: "Thank you for your message. We will get back to you soon.",
    })
  } catch (error) {
    console.error("Error processing contact form submission:", error)
    return NextResponse.json(
      {
        success: false,
        message: "There was an error processing your request. Please try again.",
      },
      { status: 500 },
    )
  }
}

