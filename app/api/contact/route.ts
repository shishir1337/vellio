import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { email, name, message, phone } = data

    // Here you would typically send an email or store the contact form submission
    // For now, we'll just log it and return a success response
    console.log('Contact form submission:', { email, name, message, phone })

    return NextResponse.json({ 
      success: true, 
      message: 'Thank you for your message. We will get back to you soon.' 
    })
  } catch (error) {
    console.error('Error processing contact form submission:', error)
    return NextResponse.json({ 
      success: false, 
      message: 'There was an error processing your request. Please try again.' 
    }, { status: 500 })
  }
}

