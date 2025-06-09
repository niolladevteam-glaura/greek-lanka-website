"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/about" },
  { name: "Our Accreditation", href: "/accreditation" },
  { name: "Services", href: "/services" },
  { name: "Ports", href: "/ports" },
  { name: "Contact us", href: "/contact" },
]

const importantLinks = [
  { name: "Merchant Shipping Secretariat", href: "#" },
  { name: "Sri Lanka Ports Authority", href: "#" },
  { name: "Hambantota International Port", href: "#" },
  { name: "Department of Immigration and Emigration", href: "#" },
  { name: "Sri Lanka Customs", href: "#" },
  { name: "Department of Meteorology", href: "#" },
  { name: "Central Bank of Sri Lanka", href: "#" },
  { name: "Board of Investment of Sri Lanka", href: "#" },
]

export function Footer() {
  return (
    <footer className="bg-maritime-navy text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <Image
                src="/greek-lanka-logo.png"  
                alt="Greek Lanka Maritime Services"
                width={200}  
                height={80}  
                className="h-16 w-auto filter brightness-0 invert"  
          />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              The Most Trusted Long-Term Partner Providing Services to The Global Maritime Industry
            </p>
            <div className="flex space-x-4">
              <Button
                size="sm"
                variant="outline"
                className="border-maritime-gold bg-maritime-gold text-maritime-navy"
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-maritime-gold bg-maritime-gold text-maritime-navy"
              >
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 text-maritime-gold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-maritime-gold transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Important Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 text-maritime-gold">Important Links</h3>
            <ul className="space-y-3">
              {importantLinks.slice(0, 6).map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-maritime-gold transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 text-maritime-gold">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-maritime-gold mt-0.5" />
                <div>
                  <p className="text-gray-300 text-sm">24/7 Support</p>
                  <p className="text-white">+94-777-232-271</p>
                  <p className="text-white">+94-777-191-114</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-maritime-gold mt-0.5" />
                <div>
                  <p className="text-white">operations@greeklanka.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-maritime-gold mt-0.5" />
                <div>
                  <p className="text-gray-300 text-sm">
                    Level 5D, 46/7, Valiant Towers,
                    <br />
                    Nawam Mawatha, Colombo 02,
                    <br />
                    Sri Lanka. 00200
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-lg font-semibold mb-4 text-maritime-gold">Stay Updated</h3>
            <p className="text-gray-300 mb-6">Get the latest maritime industry news and updates</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400"
              />
              <Button className="bg-maritime-gold hover:bg-maritime-gold/90 text-maritime-navy">Subscribe</Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 Greek Lanka Maritime Services. All rights reserved</p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">Designed with excellence for maritime industry</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
