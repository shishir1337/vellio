'use client'

import { motion } from 'framer-motion'
import { BarChartIcon as ChartBar, TrendingUp, HeadphonesIcon } from 'lucide-react'

const features = [
  {
    title: "Expert Market Insights",
    description: "Gain valuable knowledge about the UK property landscape",
    icon: ChartBar,
  },
  {
    title: "Investment Opportunities",
    description: "Explore properties with exceptional growth potential",
    icon: TrendingUp,
  },
  {
    title: "End-to-End Support",
    description: "Comprehensive expert support to all parties involved",
    icon: HeadphonesIcon,
  },
]

export default function ContactUs() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="font-bodoni text-4xl md:text-5xl font-bold mb-6 text-[#00447D]">Contact Our Team</h2>
        <p className="text-xl text-muted-foreground">
          Take the first step towards transforming the UK's property market. Our expert team is ready to assist you.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#00447D] rounded-full p-4 mb-4">
              <feature.icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#00447D]">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

