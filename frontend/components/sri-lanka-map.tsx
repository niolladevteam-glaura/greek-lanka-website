"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Anchor } from "lucide-react";
import { useState } from "react";

const ports = [
  {
    name: "Colombo",
    position: { x: 310.9, y: 740.3 },
    description: "Sri Lanka’s Busiest Maritime Gateway & Commercial Hub",
    features: ["Container Terminal", "Bulk Cargo", "Cruise Terminal"],
    details: {
      title: "Sri Lanka's Busiest Maritime Gateway & Commercial Hub",
      services: [
        "Container Terminals, Bulk Cargo Handling, Cruise Terminal",
        "Ro-Ro (Roll-on/Roll-off) & Breakbulk/Project Cargo Facilities",
        "Bunkering, Dry Dock & Afloat Repair Services, Customs & Freeport Services",
        "OPL Services, Husbandry Services",
      ],
    },
  },
  {
    name: "Galle",
    position: { x: 375.2, y: 890.9 },
    description:
      "Sri Lanka’s Southern Hub for Yachts, OPL Calls & Maritime Support",
    features: ["OPL Services", "Yacht Services", "Husbandry Services"],
    details: {
      title:
        "Sri Lanka's Southern Hub for Yachts, OPL Calls & Maritime Support",
      services: [
        "OPL Services",
        "Yacht Services",
        "Husbandry Services",
        "Maritime Security Services",
      ],
    },
  },
  {
    name: "Hambantota",
    position: { x: 578.3, y: 874 },
    description:
      "A Modern Deep-Water Port Powering Sri Lanka’s Economic Ambitions",
    features: [
      "Deep Water",
      "Industrial Zone",
      "Logistics Hub",
      "Liquid Bulk Terminals",
    ],
    details: {
      title: "A Modern Deep-Water Port Powering Sri Lanka's Economic Ambitions",
      services: [
        "Deep-Water Multipurpose & Container Terminals, Bulk & Breakbulk Cargo Facilities",
        "Liquid Bulk Terminals, Ro-Ro Services, Industrial Zone & Logistics Hub",
        "Transshipment & Regional Distribution, Ship Repairs & Support, Bunkering Services",
        "Anchorage Services, Husbandry Services",
      ],
    },
  },
  {
    name: "Trincomalee",
    position: { x: 566.7, y: 325.6 },
    description:
      "Powering Global Energy - Hub for Bulk, Oil, and Offshore Support",
    features: [
      "Deep Natural Harbor",
      "Oil Terminal",
      "Liquid Break Bulk Terminals",
    ],
    details: {
      title: "Powering Global Energy - Hub for Bulk, Oil, and Offshore Support",
      services: [
        "Deep Natural Harbor, Multipurpose Cargo Handling, Oil, Liquid Break Bulk Terminals",
        "Bunkering Services, Afloat Repair & Maintenance",
        "Strategic Location & Connectivity, Offshore Support & Marine Services",
        "Sheltered Anchorage, Husbandry Services",
      ],
    },
  },
];

export function SriLankaMap() {
  const [activePort, setActivePort] = useState<string | null>(null);

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
          <h2 className="text-4xl font-bold mb-6">
            The World Is Shifting East
          </h2>
          <p className="text-xl text-maritime-gold max-w-3xl mx-auto">
            and Sri Lanka Is at the Heart of It.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg leading-relaxed">
                As global trade continues to flow toward Asia, Sri Lanka's
                strategic location places it firmly on the fast track to
                becoming a true powerhouse in maritime services.
              </p>
              <p className="text-lg leading-relaxed">
                From the world-class transshipment hub of Colombo to the safe
                and strategic OPL of Galle, and the key ports of Trincomalee and
                Hambantota, our ports aren't just transit points; they are vital
                links connecting East and West. With modern infrastructure and
                efficient, responsive service, Sri Lanka offers speed,
                reliability, and opportunity for global shipping.
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
                    <Card
                      className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer h-full"
                      onMouseEnter={() => setActivePort(port.name)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center mb-2">
                          <Anchor className="h-5 w-5 text-maritime-gold mr-2" />
                          <h3 className="font-semibold text-white">
                            {port.name}
                          </h3>
                        </div>
                        <p className="text-sm text-gray-200 mb-3">
                          {port.description}
                        </p>
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

            {/* Centered Popup Overlay */}
            <AnimatePresence>
              {activePort && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                  {/* Backdrop */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm"
                    onClick={() => setActivePort(null)}
                  />

                  {/* Popup Content*/}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10 w-full max-w-2xl bg-maritime-navy rounded-lg border border-maritime-gold/30 shadow-xl"
                  >
                    {ports.map(
                      (port) =>
                        port.name === activePort && (
                          <div key={port.name}>
                            <div className="p-6">
                              <div className="flex items-center mb-4">
                                <Anchor className="h-8 w-8 text-maritime-gold mr-3" />
                                <h3 className="text-2xl font-bold text-maritime-gold">
                                  Port of {port.name}
                                </h3>
                              </div>
                              <h4 className="text-lg font-semibold mb-4 text-white">
                                {port.details.title}
                              </h4>
                              <ul className="space-y-3 max-h-[60vh] overflow-y-auto pr-4">
                                {port.details.services.map((service, index) => (
                                  <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="flex items-start"
                                  >
                                    <span className="text-maritime-gold mr-2 mt-1">
                                      •
                                    </span>
                                    <span className="text-gray-200">
                                      {service}
                                    </span>
                                  </motion.li>
                                ))}
                              </ul>
                            </div>
                            <div className="px-6 py-4 bg-maritime-navy/80 border-t border-maritime-gold/10 flex justify-end">
                              <button
                                onClick={() => setActivePort(null)}
                                className="px-4 py-2 bg-maritime-gold/20 text-maritime-gold rounded-md hover:bg-maritime-gold/30 transition-colors"
                              >
                                Close
                              </button>
                            </div>
                          </div>
                        )
                    )}
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Side Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src="/images/sri-lanka-map-white.png"
              alt="Sri Lanka Map"
              className="max-h-[600px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
