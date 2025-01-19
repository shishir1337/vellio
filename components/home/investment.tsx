'use client'

import { motion, useAnimation } from 'framer-motion'
import { Search, Users, Building2 } from 'lucide-react'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

const investmentPoints = [
  { title: "Identifying Investment Opportunities", icon: Search, color: "from-blue-400 to-cyan-300" },
  { title: "Empowering Local Communities", icon: Users, color: "from-green-400 to-emerald-300" },
  { title: "Developing Strong Partnership", icon: Building2, color: "from-purple-400 to-pink-300" },
]

export default function Investment() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-blue-50">
      <div className="container">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
        >
          <h2 className="font-bodoni text-4xl md:text-5xl font-bold mb-6 text-[#00447D] relative inline-block">
            Investing in the UK's Future
            <motion.span
              className="absolute bottom-0 left-0 w-full h-1 bg-blue-500"
              initial={{ scaleX: 0 }}
              animate={controls}
              variants={{
                visible: { scaleX: 1, transition: { duration: 0.8, delay: 0.2 } },
              }}
            />
          </h2>
          <p className="text-lg text-gray-600">
          We aim to revolutionise the UK real estate market through smart property investment and management 
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8" ref={ref}>
          {investmentPoints.map((point, index) => (
            <motion.div
              key={point.title}
              className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              variants={{
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  transition: { duration: 0.5, delay: index * 0.1 } 
                },
              }}
            >
              <motion.div
                className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center text-white bg-gradient-to-br ${point.color}`}
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <point.icon className="w-10 h-10" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-4 text-[#00447D]">{point.title}</h3>
              <div className="w-12 h-1 bg-blue-500 mx-auto mb-4 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

