'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function JoinOurJourney() {
  return (
    <section className="py-20 md:py-32 bg-[#00447D] text-white">
      <div className="container">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-bodoni text-4xl md:text-5xl font-bold mb-6">Join Our Journey</h2>
          <p className="text-xl mb-8">
            Become part of the UK's bright future in real estate. Learn more about our vision and how we can help realise your dreams.
          </p>
          <Button asChild size="lg" className="bg-white text-[#00447D] hover:bg-white/90">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

