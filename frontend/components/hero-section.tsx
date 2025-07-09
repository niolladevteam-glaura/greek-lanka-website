"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ArrowRight, Anchor } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function HeroSection() {
  const { t } = useTranslation();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const gridSize = 50;
    const maxDistance = 150;

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Set grid line style
      ctx.strokeStyle = "rgba(255, 215, 0, 0.1)"; // Maritime gold with low opacity
      ctx.lineWidth = 1;

      // Draw vertical lines
      for (let x = 0; x <= canvas.width; x += gridSize) {
        const distance = Math.abs(x - mousePosition.x);
        const opacity = Math.max(0, 1 - distance / maxDistance);

        ctx.strokeStyle = `rgba(255, 215, 0, ${0.1 + opacity * 0.3})`;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Draw horizontal lines
      for (let y = 0; y <= canvas.height; y += gridSize) {
        const distance = Math.abs(y - mousePosition.y);
        const opacity = Math.max(0, 1 - distance / maxDistance);

        ctx.strokeStyle = `rgba(255, 215, 0, ${0.1 + opacity * 0.3})`;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw intersection dots
      for (let x = 0; x <= canvas.width; x += gridSize) {
        for (let y = 0; y <= canvas.height; y += gridSize) {
          const distance = Math.sqrt(
            Math.pow(x - mousePosition.x, 2) + Math.pow(y - mousePosition.y, 2)
          );

          if (distance < maxDistance) {
            const opacity = Math.max(0, 1 - distance / maxDistance);
            const size = 2 + opacity * 3;

            ctx.fillStyle = `rgba(255, 215, 0, ${opacity * 0.8})`;
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      drawGrid();
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mousePosition]);

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
      {/* Interactive Grid Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ mixBlendMode: "screen" }}
      />
      Animated Grid Pattern Overlay
      <div className="absolute inset-0 z-10 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-maritime-gold/5 to-transparent animate-pulse" />
        <div
          className="absolute inset-0 bg-grid-pattern opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 215, 0, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 215, 0, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            animation: "grid-move 20s linear infinite",
          }}
        />
      </div>
      {/* Floating Particles
      <div className="absolute inset-0 z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-maritime-gold rounded-full opacity-60"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        ))}
      </div> */}
      {/* Hero Content */}
      <div className="relative z-20 w-full px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
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
              className="relative"
            >
              <div className="absolute -inset-4 bg-maritime-gold/20 rounded-full blur-xl animate-pulse" />
              <Anchor className="relative h-12 w-12 mb-6 text-maritime-gold drop-shadow-lg" />
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <motion.span
                className="block text-white drop-shadow-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Greek Lanka
              </motion.span>
              <motion.span
                className="block text-maritime-gold mt-2 drop-shadow-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Maritime Services
              </motion.span>
            </h1>

            <motion.p
              className="text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed text-white drop-shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <span className="inline-block md:whitespace-nowrap">
                Fast. Reliable. Unstoppable. Sri Lanka's #1 Ship Agent is here
              </span>
              <br className="hidden md:block" />
              Let's get things moving!
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-maritime-gold hover:bg-maritime-gold/90 text-maritime-navy font-semibold shadow-2xl hover:shadow-maritime-gold/25 transition-all duration-300 hover:scale-105"
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
                className="border-white text-white hover:bg-white/10 hover:text-white font-semibold backdrop-blur-sm shadow-2xl transition-all duration-300 hover:scale-105 bg-transparent"
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center backdrop-blur-sm bg-white/10">
          <motion.div
            className="w-1 h-3 bg-maritime-gold rounded-full mt-2"
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              delay: 0.5,
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
