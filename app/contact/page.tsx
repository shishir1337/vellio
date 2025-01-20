import { Suspense } from 'react'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Skeleton } from '@/components/ui/skeleton'

const ContactHero = dynamic(() => import('@/components/contact/hero'), {
  loading: () => <Skeleton className="w-full h-screen" />,
})
const ContactUs = dynamic(() => import('@/components/contact/contact-us'), {
  loading: () => <Skeleton className="w-full h-96" />,
})
const ContactForm = dynamic(() => import('@/components/contact/form'), {
  loading: () => <Skeleton className="w-full h-96" />,
})

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Vellio Properties.',
}

export default function Contact() {
  return (
    <>
      <ContactHero />
      <section id="contact-us" className="py-20 md:py-32 bg-white">
        <div className="container">
          <Suspense fallback={<Skeleton className="w-full h-96" />}>
            <ContactUs />
          </Suspense>
        </div>
      </section>
      <section id="contact-form" className="py-20 md:py-32 bg-[#fffae8]">
        <div className="container max-w-3xl">
          <Suspense fallback={<Skeleton className="w-full h-96" />}>
            <ContactForm />
          </Suspense>
        </div>
      </section>
    </>
  )
}

