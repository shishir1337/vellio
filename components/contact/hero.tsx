'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function ContactHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <motion.div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/hero-contact.avif')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10" />
      <div className="container relative z-20 text-white text-center">
        <motion.h1 
          className="font-bodoni text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Ready to Transform the UK's Property Market Together?
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Be part of shaping the UK's future, one property at a time.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button asChild size="lg" className="bg-white text-[#00447D] hover:bg-white/90">
            <Link href="#contact-us">Learn More</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

