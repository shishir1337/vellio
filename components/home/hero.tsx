'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const [typedText, setTypedText] = useState('')
  const fullText = "Transforming the UK Property Market"
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <section ref={ref} className="relative overflow-hidden bg-gradient-to-br from-[#003366] via-[#00447D] to-[#005292] py-20 md:py-32 min-h-screen flex items-center">
      <motion.div 
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzYgMzRjMC0yIDItNCAyLTRzMiAyIDIgNC0yIDQtMiA0LTItMi0yLTR6bTAgMGMyIDAgNCAwIDQtMnMtMi0yLTQtMi00IDAtNC0yIDItMiA0LTIgNCAwIDQtMi0yLTItNC0yLTQgMC00LTJzMi0yIDQtMiA0IDAgNC0yLTItMi00LTItNCAwLTQtMiAyLTIgNC0yIDQgMCA0LTItMi0yLTQtMi00IDAtNC0yIDItMiA0LTJ6IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIuMSIvPjwvZz48L3N2Zz4=')] bg-[size:60px_60px] opacity-10 animate-[grain_8s_steps(10,end)_infinite]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00447D]/30 to-[#00447D]/70" />
      </motion.div>
      <div className="container relative z-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20 items-center">
          <motion.div 
            className="space-y-8 text-center lg:text-left"
            style={{ y: textY }}
          >
            <h1 className="font-bodoni text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                {typedText}
              </span>
            </h1>
            <motion.p 
              className="text-lg text-blue-100 sm:text-xl md:text-2xl max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
            >
              Investing and managing properties across the UK to redefine the real estate industry
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 0.8 }}
            >
              <Button asChild size="lg" className="bg-white text-[#00447D] hover:bg-blue-50 text-base transition-all duration-300 ease-in-out hover:scale-105 shadow-lg hover:shadow-xl">
                <Link href="/about">
                  Learn More
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 text-base transition-all duration-300 ease-in-out hover:scale-105 backdrop-blur-sm">
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </motion.div>
          </motion.div>
          <motion.div 
            className="relative mx-auto lg:mr-0 w-full max-w-3xl aspect-[4/3]"
            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl transform rotate-3 scale-105 opacity-20 blur-xl" />
            <Image
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop"
              alt="UK Property Investment"
              fill
              className="object-cover rounded-2xl shadow-2xl transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:shadow-blue-500/20"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="eager"
              priority
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-2xl"></div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="w-6 h-10 border-2 border-white rounded-full p-1 opacity-50 hover:opacity-100 transition-opacity duration-300"
        >
          <motion.div
            animate={{
              y: [0, 16, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="w-1 h-1 bg-white rounded-full mx-auto"
          />
        </motion.div>
      </div>
    </section>
  )
}

