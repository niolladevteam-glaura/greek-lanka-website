"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Anchor } from "lucide-react"
import { useState } from "react"

const ports = [
  {
    name: "Colombo",
    position: { x: 310.9, y: 740.3 }, // Using exact coordinates from SVG label_points
    description: "Sri Lanka's busiest maritime gateway and commercial hub",
    features: ["Container Terminal", "Bulk Cargo", "Cruise Terminal"],
  },
  {
    name: "Galle",
    position: { x: 375.2, y: 890.9 },
    description: "Historic port with modern facilities and OPL services",
    features: ["Heritage Port", "OPL Services", "Regional Trade"],
  },
  {
    name: "Hambantota",
    position: { x: 578.3, y: 874 },
    description: "Modern deep-water port with strategic location",
    features: ["Deep Water", "Industrial Zone", "Logistics Hub"],
  },
  {
    name: "Trincomalee",
    position: { x: 566.7, y: 325.6 },
    description: "One of the world's largest natural harbors",
    features: ["Natural Harbor", "Oil Terminal", "Naval Base"],
  },
]

export function SriLankaMap() {
  const [hoveredPort, setHoveredPort] = useState<string | null>(null)

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-maritime-navy to-maritime-blue text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Navigating Global Trade</h2>
          <p className="text-xl text-maritime-gold max-w-3xl mx-auto">
            Sri Lanka's Strategic Ports and Geographic Advantage
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed">
              As world trade increasingly gravitates towards Asia, Sri Lanka's strategic positioning propels it to the
              forefront of the maritime services arena, heralding exponential growth and prosperity.
            </p>
            <p className="text-lg leading-relaxed">
              Sri Lanka's major ports, including Colombo, Galle, Hambantota, and Trincomalee, serve as vital arteries of
              maritime commerce, seamlessly linking the East and the West. From the bustling transhipment hub of Colombo
              to the strategic anchorage points of Galle and Trincomalee, each port embodies efficiency, reliability,
              and world-class infrastructure.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {ports.map((port, index) => (
                <motion.div
                  key={port.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-center mb-2">
                        <Anchor className="h-5 w-5 text-maritime-gold mr-2" />
                        <h3 className="font-semibold text-white">{port.name}</h3>
                      </div>
                      <p className="text-sm text-gray-200 mb-3">{port.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {port.features.map((feature) => (
                          <Badge
                            key={feature}
                            variant="secondary"
                            className="text-xs bg-maritime-gold/20 text-maritime-gold"
                          >
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

 {/* Right Side Image */}
  <motion.div
    initial={{ opacity: 0, x: 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="flex justify-center"
  >
    <img
      src="/images/sri-lanka-map-white.png" // make sure this path is correct
      alt="Sri Lanka Map"
    />
  </motion.div>
        </div>
      </div>
    </section>
  )
}
