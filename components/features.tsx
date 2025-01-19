'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView, useAnimation } from 'framer-motion'
import { BarChartIcon as ChartBar, MapPin, Leaf } from 'lucide-react'

const features = [
  {
    title: "Expert Market Knowledge",
    description: "Deep understanding of the UK real estate market and emerging investment trends.",
    icon: ChartBar,
    image: "/features-1.avif",
  },
  {
    title: "Premium Locations",
    description: "Investing and developing projects in prime UK locations for residential and commercial needs.",
    icon: MapPin,
    image: "/features-2.avif",
  },
  {
    title: "Sustainable Actions",
    description: "Committed to eco-friendly, energy-efficient methods to reduce environmental impact.",
    icon: Leaf,
    image: "/features-3.avif",
  },
]

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const controls = useAnimation()

  if (isInView) {
    controls.start("visible")
  }

  return (
    <section ref={ref} className="py-20 md:py-32 overflow-hidden bg-gradient-to-b from-blue-50 to-white relative">
      <motion.div 
        className="container space-y-16 relative z-10"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.6, ease: "easeOut" } 
          }
        }}
      >
        <motion.div 
          className="mx-auto max-w-3xl space-y-4 text-center"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { 
              opacity: 1, 
              y: 0, 
              transition: { duration: 0.6, delay: 0.2, ease: "easeOut" } 
            }
          }}
        >
          <h2 className="font-bodoni text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#00447D] relative inline-block">
            Why Choose Vellio Properties?
            <motion.span 
              className="absolute bottom-0 left-0 w-full h-1 bg-blue-500"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            />
          </h2>
          <p className="text-gray-600 sm:text-lg">
            We strengthen UK communities with smart, calculated property investments.
          </p>
        </motion.div>
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  transition: { duration: 0.6, delay: 0.4 + index * 0.1, ease: "easeOut" } 
                }
              }}
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <motion.div 
                className="relative space-y-4 p-6"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    transition: { duration: 0.6, delay: 0.6 + index * 0.1, ease: "easeOut" } 
                  }
                }}
              >
                <div className="flex items-center space-x-3">
                  <motion.div 
                    className="rounded-full bg-[#00447D] p-2"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <feature.icon className="h-5 w-5 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-[#00447D]">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzYgMzRjMC0yIDItNCAyLTRzMiAyIDIgNC0yIDQtMiA0LTItMi0yLTR6bTAgMGMyIDAgNCAwIDQtMnMtMi0yLTQtMi00IDAtNC0yIDItMiA0LTIgNCAwIDQtMi0yLTItNC0yLTQgMC00LTJzMi0yIDQtMiA0IDAgNC0yLTItMi00LTItNCAwLTQtMiAyLTIgNC0yIDQgMCA0LTItMi0yLTQtMi00IDAtNC0yIDItMiA0LTJ6IiBzdHJva2U9IiMwMDQ0N0QiIHN0cm9rZS1vcGFjaXR5PSIuMSIvPjwvZz48L3N2Zz4=')] bg-[size:30px_30px] opacity-20" />
    </section>
  )
}

