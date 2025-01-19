'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Users, Star, Handshake } from 'lucide-react'
import { useMemo } from 'react'

const VALUES = [
  {
    title: "Innovation",
    description: "We bring a fresh, innovative perspective to the UK real estate market, delivering impactful solutions that align with today's modern mindset.",
    icon: Lightbulb,
  },
  {
    title: "Community",
    description: "Unlike other property managers, our goal is to uplift local neighbourhoods and enhance local economies through strategic investment and management efforts.",
    icon: Users,
  },
  {
    title: "Excellence",
    description: "We strive for perfection in every project, ensuring the highest standards of quality while maximising value and returns on all real estate investments.",
    icon: Star,
  },
  {
    title: "Partnership",
    description: "We partner with other organisations for our investment and management efforts, helping local businesses all across the UK.",
    icon: Handshake,
  },
] as const

export default function OurValues() {
  const memoizedValues = useMemo(() => VALUES, [])

  return (
    <section className="py-20 md:py-32 bg-[#fffae8]">
      <div className="container">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-bodoni text-4xl md:text-5xl font-bold mb-6 text-[#00447D]">Our Values</h2>
          <p className="text-lg text-muted-foreground">
            Every action we take is guided by our strong core values and a commitment to excellence.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {memoizedValues.map((value, index) => (
            <motion.div
              key={value.title}
              className="bg-white p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <value.icon className="w-12 h-12 text-[#00447D] mb-4" aria-hidden="true" />
              <h3 className="text-xl font-semibold mb-4 text-[#00447D]">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

