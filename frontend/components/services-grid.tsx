"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Ship,
  Users,
  Package,
  ShoppingCart,
  Container,
  Shield,
  Wrench,
  Fuel,
  Anchor,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    icon: Ship,
    title: "Port Agency Services",
    description:
      "Greek Lanka Maritime Services has rapidly expanded since its establishment, providing comprehensive port agency services across all Sri Lankan ports.",
    image: "/images/services/port-agency-services.jpg?height=200&width=300",
    features: ["Vessel Clearance", "Documentation", "Port Coordination"],
  },
  {
    icon: Users,
    title: "Crew Change Services",
    description:
      "At Greek Lanka Maritime Services, we provide seamless Crew Change and Other Personnel Embark/Disembark Services with professional coordination.",
    image:
      "/images/services/Efficient-Maritime-Crew-Change-Solutions-by-Greek-Lanka.jpg?height=200&width=300",
    features: ["Immigration Support", "Transportation", "Accommodation"],
  },
  {
    icon: Package,
    title: "Ship Spares Logistics",
    description:
      "Expert Ship Spares Logistics and Transport Services ensuring timely delivery of critical components to your vessels.",
    image:
      "/images/services/Reliable-Ship-Spare-Solutions-768x768.jpg?height=200&width=300",
    features: ["Express Delivery", "Customs Clearance", "Quality Assurance"],
  },
  {
    icon: ShoppingCart,
    title: "Ship Chandling Services",
    description:
      "Comprehensive range of Ship Chandling Services providing all necessary supplies and provisions for your maritime operations.",
    image:
      "/images/services/Ship-chandling-service-768x768.jpg?height=200&width=300",
    features: ["Fresh Provisions", "Technical Supplies", "Safety Equipment"],
  },
  {
    icon: Container,
    title: "Cargo Handling",
    description:
      "Professional cargo handling and operations services ensuring safe and efficient loading and unloading of your vessels.",
    image:
      "/images/services/Smooth-Cargo-Operations-by-Greek-Lanka-768x768.jpg?height=200&width=300",
    features: ["Loading/Unloading", "Cargo Inspection", "Storage Solutions"],
  },
  {
    icon: Shield,
    title: "Owner's Protective Agency",
    description:
      "Protecting your interests with our comprehensive Owner's Protective Agency Services, safeguarding your maritime investments.",
    image: "/images/services/Owners-Strategic-Partner.jpg?height=200&width=300",
    features: ["Interest Protection", "Legal Support", "Risk Management"],
  },
  {
    icon: Wrench,
    title: "Husbandry Services",
    description:
      "Renowned for comprehensive husbandry services, expertly managing all aspects of vessel maintenance and support.",
    image: "/images/services/Slop-disposal-768x768.jpg?height=200&width=300",
    features: [
      "Maintenance Coordination",
      "Repair Services",
      "Technical Support",
    ],
  },
  {
    icon: Fuel,
    title: "Bunker Brokering",
    description:
      "Comprehensive bunker brokerage and supply coordination services ensuring optimal fuel solutions for your fleet.",
    image: "/images/services/Bunker-Quantity-768x768.jpg?height=200&width=300",
    features: ["Fuel Procurement", "Quality Testing", "Supply Coordination"],
  },
  {
    icon: Anchor,
    title: "Dry Dock Management",
    description:
      "Comprehensive Dry Dock Ship Management and Technical Services for all your vessel maintenance and repair needs.",
    image:
      "/images/services/Ship-Repair-Services-in-Sri-Lanka-768x768.jpg?height=200&width=300",
    features: ["Project Management", "Technical Oversight", "Quality Control"],
  },
];

export function ServicesGrid() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-maritime-navy mb-6">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive maritime solutions tailored to meet all your shipping
            and logistics needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden">
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-maritime-navy/20 group-hover:bg-maritime-navy/10 transition-colors duration-300" />

                  {/* Icon Overlay */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 group-hover:bg-maritime-blue group-hover:text-white transition-all duration-300">
                    <service.icon className="h-6 w-6 text-maritime-blue group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Service Features Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-maritime-navy/90 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex flex-wrap gap-1">
                      {service.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="text-xs bg-maritime-gold/20 text-maritime-gold px-2 py-1 rounded-full backdrop-blur-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-maritime-navy group-hover:text-maritime-blue transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:bg-maritime-blue group-hover:text-white group-hover:border-maritime-blue transition-all duration-300"
                    asChild
                  >
                    <Link href="/services">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            size="lg"
            asChild
            className="bg-maritime-blue hover:bg-maritime-blue/90 group"
          >
            <Link href="/services">
              View All Services
              <Ship className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
