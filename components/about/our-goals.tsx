'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, Building } from 'lucide-react'

const goals = [
  {
    title: "Strategic Investment",
    description: "Identifying and investing in UK properties with high growth potential and long-term value.",
    icon: TrendingUp,
  },
  {
    title: "Lifting Communities",
    description: "Focused on uplifting all communities through thoughtful investments and management.",
    icon: Users,
  },
  {
    title: "Building UK's Future",
    description: "Leaving a lasting positive impact on the UK real estate industry.",
    icon: Building,
  },
]

export default function OurGoals() {
  return (
    <section className="py-20 md:py-32 bg-[#fffae8]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-bodoni text-4xl md:text-5xl font-bold mb-6 text-[#00447D]">Our Goals</h2>
          <p className="text-lg text-muted-foreground">
            Becoming one of the UK's leading property investment and management companies, achieving a valuation of £10 million by 2050.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {goals.map((goal, index) => (
            <motion.div
              key={goal.title}
              className="bg-white p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <goal.icon className="w-12 h-12 text-[#00447D] mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-[#00447D]">{goal.title}</h3>
              <p className="text-muted-foreground">{goal.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

