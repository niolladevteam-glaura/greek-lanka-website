"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Anchor } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/header-image.jpg"
          alt="Maritime background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Navy Blue Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#010D2FE6] to-[#002A52B3]" />
      {/* <div className="absolute inset-0 bg-gradient-to-t from-[rgba(1,13,47,0.9)] to-[rgba(0,42,82,0.4)]" />
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(1,13,47,0.9)] to-[rgba(0,42,82,0.4)]" /> */}

      {/* Hero Content - Aligned with Navbar */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        <div className="ml-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <Anchor className="h-12 w-12 mb-6 text-maritime-gold" />
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block text-white">Greek Lanka</span>
              <span className="block text-maritime-gold mt-2">
                Maritime Services
              </span>
            </h1>

            <motion.p
              className="text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              The Most Trusted Long-Term Partner Providing
              <br className="hidden md:block" /> Services to The Global Maritime
              Industry
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-maritime-gold hover:bg-maritime-gold/90 text-maritime-navy font-semibold"
              >
                <Link href="/services" className="flex items-center">
                  Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-black hover:bg-white/10 hover:text-white font-semibold"
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
}
