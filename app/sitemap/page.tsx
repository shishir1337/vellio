import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sitemap | Vellio Properties Ltd',
  description: 'Navigate through all pages of the Vellio Properties Ltd website.',
}

const pages = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
  { name: 'Privacy Policy', path: '/privacy' },
  { name: 'Terms and Conditions', path: '/terms-and-conditions' },
  { name: 'Cookies Policy', path: '/cookies' },
]

export default function Sitemap() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="font-bodoni text-4xl md:text-5xl font-bold mb-8 text-[#00447D]">Sitemap</h1>
      <div className="grid gap-4">
        {pages.map((page) => (
          <Link 
            key={page.path} 
            href={page.path}
            className="text-lg text-[#00447D] hover:underline"
          >
            {page.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

