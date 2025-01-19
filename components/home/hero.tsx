"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Transforming the UK Property Market";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#003366] via-[#00447D] to-[#005292] py-20 md:py-32 flex items-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzYgMzRjMC0yIDItNCAyLTRzMiAyIDIgNC0yIDQtMiA0LTItMi0yLTR6bTAgMGMyIDAgNCAwIDQtMnMtMi0yLTQtMi00IDAtNC0yIDItMiA0LTIgNCAwIDQtMi0yLTItNC0yLTQgMC00LTJzMi0yIDQtMiA0IDAgNC0yLTItMi00LTItNCAwLTQtMiAyLTIgNC0yIDQgMCA0LTItMi0yLTQtMi00IDAtNC0yIDItMiA0LTJ6IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIuMSIvPjwvZz48L3N2Zz4=')] bg-[size:60px_60px] opacity-10 animate-[grain_8s_steps(10,end)_infinite]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00447D]/30 to-[#00447D]/70" />
      </div>
      <div className="container relative z-10">
        <div className="grid gap-8 lg:gap-16 lg:grid-cols-2 items-center">
          <div className="space-y-4 text-center lg:text-left">
            <h1 className="font-bodoni text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                {typedText}
              </span>
            </h1>
            <p className="text-lg text-blue-100 sm:text-xl md:text-2xl max-w-2xl mx-auto lg:mx-0">
              Investing and managing properties across the UK to redefine the
              real estate industry
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-white text-[#00447D] hover:bg-blue-50 text-base transition-all duration-300 ease-in-out hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Link href="/about">Learn More</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white/10 text-base transition-all duration-300 ease-in-out hover:scale-105 backdrop-blur-sm"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
          <div className="relative mx-auto lg:mr-0 w-full max-w-3xl aspect-[4/3]">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl transform rotate-3 scale-105 opacity-20 blur-xl" />
            <Image
              src="/hero-banner.avif"
              alt="UK Property Investment"
              fill
              className="object-cover rounded-2xl shadow-2xl transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:shadow-blue-500/20"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={85}
              priority
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAIABADASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAZEAADAQEBAAAAAAAAAAAAAAAAAQIDMUH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AKbS7WlJQA//2Q=="
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
