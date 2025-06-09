"use client";

import { motion } from "framer-motion";
import { ArrowRight, Ship, Globe, Shield, Users, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HeroSection } from "@/components/hero-section";
import { ServicesGrid } from "@/components/services-grid";
import { TrustSection } from "@/components/trust-section";
import { BlogSection } from "@/components/blog-section";
import { ContactSection } from "@/components/contact-section";
import { SriLankaMap } from "@/components/sri-lanka-map";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ClientsSection } from "@/components/clients-section";
import { StatsSection } from "@/components/stats-section";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white cursor-maritime">
      <HeroSection />

      {/* Who We Are Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-maritime-navy mb-6">
            Who We Are
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              GREEK LANKA MARITIME SERVICES (PVT) LTD, we are more than just a
              Ship Agency. We are a dedicated partner in global maritime
              logistics, committed to delivering seamless, efficient, and
              reliable services across Sri Lanka's ports. With a rich history of
              hands-on experience and industry expertise, we have earned a
              reputation for excellence by consistently exceeding customer
              expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-maritime-blue hover:bg-maritime-blue/90 group"
                asChild
              >
                <Link href="/contact">
                  <Phone className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                  Get in Touch
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="group">
                <Link href="/about">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { icon: Ship, label: "24/7 Service", value: "Always Available" },
            {
              icon: Globe,
              label: "Global Network",
              value: "Worldwide Coverage",
            },
            {
              icon: Shield,
              label: "Trusted Partner",
              value: "Reliable Service",
            },
            { icon: Users, label: "Expert Team", value: "Professional Staff" },
          ].map((item, index) => (
            <Card
              key={index}
              className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
            >
              <CardContent className="p-0">
                <item.icon className="h-12 w-12 text-maritime-blue mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-maritime-navy mb-2">
                  {item.label}
                </h3>
                <p className="text-sm text-gray-600">{item.value}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </section>

      <SriLankaMap />
      <StatsSection />
      <ServicesGrid />
      <TrustSection />
      <TestimonialsSection />
      <ClientsSection />
      <BlogSection />
      <ContactSection />
    </div>
  );
}
