"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { TrendingUp, Users, Building } from "lucide-react";

const visionPoints = [
  {
    title: "Transforming Lives",
    description:
      "Shaping the future of the UK’s real estate industry by empowering communities through our investment and management efforts.",
    icon: TrendingUp,
  },
  {
    title: "Pioneering Progress",
    description:
      "Through innovation and fresh ideas for the real estate industry, we aim to lead the industry, setting new standards for other companies.",
    icon: Users,
  },
  {
    title: "Sustainable Legacy",
    description:
      "By fostering collaboration and adopting sustainable practices, we are committed to leaving a positive, lasting impact on all our projects.",
    icon: Building,
  },
];

export default function Vision() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={ref}
      className="py-20 md:py-32 bg-gradient-to-br from-[#00447D] to-[#003366] text-white relative overflow-hidden bg-opacity-90 bg-pattern"
    >
      <motion.div
        className="absolute inset-0 bg-[url('/subtle-pattern.png')] bg-repeat opacity-10"
        style={{ y: backgroundY }}
        animate={{
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 10,
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
            Shaping the future of the UK’s real estate industry by empowering
            communities through our investment and management efforts.
          </p>
        </motion.div>
        <div className="grid gap-10 md:grid-cols-3">
          {visionPoints.map((point, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center space-y-4 bg-white/10 p-8 rounded-2xl backdrop-blur-sm transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
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
  );
}
