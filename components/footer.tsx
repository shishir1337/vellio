"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Facebook, Youtube, ChevronUp } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const footerSections = [
    {
      title: "Information",
      links: [
        { href: "/", label: "Home" },
        { href: "/about", label: "About Us" },
        { href: "/contact", label: "Contact Us" },
        { href: "/privacy-policy", label: "Privacy Policy" },
        { href: "/terms-and-conditions", label: "Terms and Conditions" },
        { href: "/cookies", label: "Cookies" },
        { href: "/sitemap", label: "Sitemap" },
      ],
    },
    {
      title: "Registered Address",
      content: [
        "Registered in England and Wales.",
        "Registration # 12039916",
        "53 Rodney Crescent, Filton,",
        "Bristol BS34 7AF",
        "United Kingdom",
      ],
    },
  ];

  const toggleSection = (title: string) => {
    setExpandedSection(expandedSection === title ? null : title);
  };

  return (
    <footer className="w-full bg-gradient-to-b from-[#003366] to-[#00447D] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/" className="inline-block">
              <Image
                src="/logo_blue.png"
                alt="Vellio Properties Ltd"
                width={180}
                height={40}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-blue-100 leading-relaxed">
              Vellio Properties is a leading real estate investment firm focused
              on high-potential properties across the UK. We're committed to
              transforming the property landscape with innovative and
              sustainable solutions.
            </p>
            <div className="flex space-x-4">
              {[
                {
                  Icon: Facebook,
                  url: "https://www.facebook.com/people/Vellio-Properties/61567786766589/",
                },
                {
                  Icon: Youtube,
                  url: "https://www.youtube.com/@VellioPropertiesLtd",
                },
              ].map(({ Icon, url }, index) => (
                <motion.a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-100 hover:text-white transition-colors bg-blue-800 p-2 rounded-full"
                  whileHover={{ scale: 1.1, backgroundColor: "#1d4ed8" }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`${Icon.name} link`}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <button
                onClick={() => isMobile && toggleSection(section.title)}
                className="flex items-center justify-between w-full text-left md:cursor-default"
              >
                <h3 className="text-lg font-semibold">{section.title}</h3>
                {isMobile && (
                  <ChevronUp
                    className={`h-5 w-5 transition-transform ${
                      expandedSection === section.title ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>
              <AnimatePresence>
                {(!isMobile || expandedSection === section.title) && (
                  <motion.div
                    initial={isMobile ? { height: 0, opacity: 0 } : false}
                    animate={isMobile ? { height: "auto", opacity: 1 } : false}
                    exit={isMobile ? { height: 0, opacity: 0 } : undefined}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    {"links" in section ? (
                      <nav className="grid grid-cols-2 gap-2">
                        {section?.links?.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm text-blue-100 hover:text-white transition-colors"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </nav>
                    ) : (
                      <div className="flex flex-col gap-2 text-sm text-blue-100">
                        {section.content.map((item, i) => (
                          <p key={i}>{item}</p>
                        ))}
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 border-t border-blue-400 pt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-sm text-blue-100">
            © 2024-2025 Vellio Properties LTD. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
