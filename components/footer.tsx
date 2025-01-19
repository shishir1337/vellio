import Link from 'next/link'
import { Facebook, Youtube } from 'lucide-react'
import Image from 'next/image'

const footerSections = [
  {
    title: 'Information',
    links: [
      { href: '/', label: 'Home' },
      { href: '/about', label: 'About Us' },
      { href: '/contact', label: 'Contact Us' },
      { href: '/privacy-policy', label: 'Privacy Policy' },
      { href: '/terms-and-conditions', label: 'Terms and Conditions' },
      { href: '/cookies', label: 'Cookies' },
      { href: '/sitemap', label: 'Sitemap' },
    ],
  },
  {
    title: 'Registered Address',
    content: [
      'Registered in England and Wales.',
      'Registration # 12039916',
      '53 Rodney Crescent, Filton,',
      'Bristol BS34 7AF',
      'United Kingdom',
    ],
  },
]

const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/people/Vellio-Properties/61567786766589/' },
  { icon: Youtube, label: 'YouTube', href: 'https://www.youtube.com/@VellioPropertiesLtd' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-primary text-white border-t border-primary/20">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image 
                src="/logo_white.png"
                alt="Vellio Properties"
                width={180}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm leading-relaxed text-white/80">
              Vellio Properties is a leading real estate investment firm focused on high-potential properties across the UK. We're committed to transforming the property landscape with innovative and sustainable solutions.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Information</h3>
            <nav className="flex flex-col space-y-2">
              {footerSections[0]?.links?.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/80 hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
            <div className="flex flex-col space-y-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-300"
                >
                  <link.icon className="h-5 w-5" />
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Registered Address</h3>
            <div className="text-sm text-white/80 space-y-1">
              {footerSections[1]?.content?.map((item, i) => (
                <p key={i}>{item}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 text-center border-t border-white/20">
          <p className="text-sm text-white/80">
            © 2024-{currentYear} Vellio Properties LTD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

