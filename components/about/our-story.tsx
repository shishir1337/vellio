"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function OurStory() {
  return (
    <section id="our-story" className="py-20 md:py-32 bg-white">
      <div className="container">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-bodoni text-4xl md:text-5xl font-bold mb-6 text-[#00447D]">
            Our Story
          </h2>
          <p className="text-lg text-muted-foreground">
            Since our founding, we have focused on improving local communities
            across the UK through smart property management solutions. By
            concentrating on premier locations, we ensure that every project
            contributes to a lasting, positive impact.
          </p>
        </motion.div>
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/our-story.avif"
              alt="Vellio Properties Project"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-[#00447D]">
              Our Commitment to Excellence
            </h3>
            <p className="text-muted-foreground">
              At Vellio Properties, we're dedicated to finding smart investment
              and management opportunities that align with our goals and values.
              We partner up with businesses and organisations to achieve our
              real estate vision. Our team of experts brings years of experience
              and a passion for innovation to every project we undertake.
            </p>
            <p className="text-muted-foreground">
              We believe that successful property management goes beyond just
              maintaining buildings; it's about creating thriving communities
              and sustainable investments. This philosophy drives our approach
              to every aspect of our work, from tenant relations to property
              development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
