'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { TrendingUp, Users, Building } from 'lucide-react'

const visionPoints = [
  {
    title: "Strategic Investment",
    description: "Identifying and investing in UK properties with high growth potential and long-term value.",
    icon: TrendingUp,
  },
  {
    title: "Lifting Communities",
    description: "Focused on uplifting local communities through thoughtful investments and management.",
    icon: Users,
  },
  {
    title: "Building UK's Future",
    description: "Leaving a lasting positive impact on the UK real estate industry.",
    icon: Building,
  },
]

export default function Vision() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section ref={ref} className="py-20 md:py-32 bg-gradient-to-br from-[#00447D] to-[#003366] text-white relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzYgMzRjMC0yIDItNCAyLTRzMiAyIDIgNC0yIDQtMiA0LTItMi0yLTR6bTAgMGMyIDAgNCAwIDQtMnMtMi0yLTQtMi00IDAtNC0yIDItMiA0LTIgNCAwIDQtMi0yLTItNC0yLTQgMC00LTJzMi0yIDQtMiA0IDAgNC0yLTItMi00LTItNCAwLTQtMiAyLTIgNC0yIDQgMCA0LTItMi0yLTQtMi00IDAtNC0yIDItMiA0LTJ6IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIuMSIvPjwvZz48L3N2Zz4=')] bg-[size:30px_30px] opacity-20"
        style={{ y: backgroundY }}
        animate={{
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <div className="container relative z-10">
        <motion.div 
          className="mx-auto max-w-3xl text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="font-bodoni text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6 relative inline-block">
            Our Vision
            <motion.span
              className="absolute bottom-0 left-0 w-full h-1 bg-blue-300"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </h2>
          <p className="sm:text-lg text-blue-100">
            Becoming one of the UK's top property managers by driving eco-friendly community development.
          </p>
        </motion.div>
        <div className="grid gap-10 md:grid-cols-3">
          {visionPoints.map((point, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col items-center text-center space-y-4 bg-white/10 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <motion.div 
                className="rounded-full bg-blue-400 p-3"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <point.icon className="h-6 w-6 text-[#00447D]" />
              </motion.div>
              <h3 className="text-xl font-semibold">{point.title}</h3>
              <p className="text-blue-100">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        className="absolute top-10 right-10 w-20 h-20 border-4 border-white/20 rounded-full"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
    </section>
  )
}

