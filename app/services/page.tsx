"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
  Plane,
  Building,
  Bug,
  Lock,
  Waves,
  FileText,
  AlertTriangle,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    slug: "port-agency-services",
    icon: Ship,
    title: "Port Agency Services",
    description:
      "Comprehensive port agency services across all Sri Lankan ports including vessel clearance, documentation, and coordination with local authorities.",
    image: "/images/services/port-agency-services.jpg?height=250&width=400",
    features: [
      "Vessel Clearance",
      "Documentation",
      "Authority Coordination",
      "Port Formalities",
    ],
  },
  {
    slug: "crew-change-services",
    icon: Users,
    title: "Crew Change Services",
    description:
      "Seamless crew change and personnel embark/disembark services with full immigration and customs support.",
    image:
      "/images/services/Efficient-Maritime-Crew-Change-Solutions-by-Greek-Lanka.jpg?height=250&width=400",
    features: [
      "Immigration Support",
      "Customs Clearance",
      "Transportation",
      "Accommodation",
    ],
  },
  {
    slug: "ship-spares-logistics",
    icon: Package,
    title: "Ship Spares Logistics",
    description:
      "Expert ship spares logistics and transport services ensuring timely delivery of critical components to your vessels.",
    image:
      "/images/services/Reliable-Ship-Spare-Solutions-768x768.jpg?height=250&width=400",
    features: [
      "Express Delivery",
      "Customs Clearance",
      "Quality Assurance",
      "24/7 Support",
    ],
  },
  {
    slug: "ship-chandling-services",
    icon: ShoppingCart,
    title: "Ship Chandling Services",
    description:
      "Comprehensive ship chandling services providing all necessary supplies, provisions, and equipment for maritime operations.",
    image:
      "/images/services/Ship-chandling-service-768x768.jpg?height=250&width=400",
    features: [
      "Fresh Provisions",
      "Technical Supplies",
      "Safety Equipment",
      "Bonded Stores",
    ],
  },
  {
    slug: "cargo-handling-operations",
    icon: Container,
    title: "Port Agency for Cargo Operations",
    description:
      "Professional cargo handling and operations services ensuring safe and efficient loading and unloading of vessels.",
    image:
      "/images/services/Smooth-Cargo-Operations-by-Greek-Lanka-768x768.jpg?height=250&width=400",
    features: [
      "Loading/Unloading",
      "Cargo Inspection",
      "Documentation",
      "Storage Solutions",
    ],
  },
  {
    slug: "owners-protective-agency",
    icon: Shield,
    title: "Owner's Protective Agency services",
    description:
      "Protecting your interests with comprehensive owner's protective agency services, safeguarding your maritime investments.",
    image: "/images/services/Owners-Strategic-Partner.jpg?height=250&width=400",
    features: [
      "Interest Protection",
      "Legal Support",
      "Risk Management",
      "Compliance Monitoring",
    ],
  },
  {
    slug: "husbandry-services",
    icon: Wrench,
    title: "Husbandry Services",
    description:
      "Comprehensive husbandry services expertly managing all aspects of vessel maintenance and support during port calls.",
    image: "/images/services/Slop-disposal-768x768.jpg?height=250&width=400",
    features: [
      "Maintenance Coordination",
      "Repair Services",
      "Technical Support",
      "Vendor Management",
    ],
  },
  {
    slug: "bunker-brokering-supply",
    icon: Fuel,
    title: "Port Agency for Bunker Vessels",
    description:
      "Comprehensive bunker brokerage and supply coordination services ensuring optimal fuel solutions for your fleet.",
    image: "/images/services/Bunker-Quantity-768x768.jpg?height=250&width=400",
    features: [
      "Fuel Procurement",
      "Quality Testing",
      "Price Optimization",
      "Supply Coordination",
    ],
  },
  {
    slug: "yacht-cruise-agency",
    icon: Plane,
    title: "Yacht/Cruise Agency",
    description:
      "Premier yacht and cruise agency services offering unparalleled support for luxury vessels and cruise operations.",
    image:
      "/images/services/Premier-Cruise-and-Yacht-Agency-Services.jpg?height=250&width=400",
    features: [
      "VIP Services",
      "Passenger Handling",
      "Luxury Provisions",
      "Concierge Services",
    ],
  },
  {
    slug: "foreign-naval-ships-agency-services",
    icon: Building,
    title: "Foreign Naval Ships Agency",
    description:
      "Specialized agency services for foreign naval vessels with expertise in diplomatic protocols and security requirements.",
    image:
      "/images/services/Foreign-Naval-Ships-Agency.jpg?height=250&width=400",
    features: [
      "Diplomatic Protocol",
      "Security Clearance",
      "Special Handling",
      "Government Liaison",
    ],
  },
  {
    slug: "dry-dock-technical-services",
    icon: Anchor,
    title: "Port Agency for Dry Dock /Afloat Repairs",
    description:
      "Comprehensive dry dock ship management and technical services for all vessel maintenance and repair needs.",
    image:
      "/images/services/Ship-Repair-Services-in-Sri-Lanka-768x768.jpg?height=250&width=400",
    features: [
      "Project Management",
      "Technical Oversight",
      "Quality Control",
      "Timeline Management",
    ],
  },
  {
    slug: "marine-pest-fumigation",
    icon: Bug,
    title: "Marine Pest Control",
    description:
      "Professional marine pest and fumigation services maintaining vessel hygiene and compliance with international standards.",
    image: "/images/services/New.jpg?height=250&width=400",
    features: [
      "Fumigation Services",
      "Pest Control",
      "Hygiene Maintenance",
      "Compliance Certification",
    ],
  },
  {
    slug: "maritime-security-services",
    icon: Lock,
    title: "Maritime Security",
    description:
      "Comprehensive maritime security services ensuring vessel safety and compliance with international security protocols.",
    image: "/images/services/Safeguarding-Your-Voyage.jpg?height=250&width=400",
    features: [
      "Security Assessment",
      "Guard Services",
      "ISPS Compliance",
      "Risk Mitigation",
    ],
  },
  {
    slug: "offshore-support-services",
    icon: Waves,
    title: "Offshore Support",
    description:
      "Dedicated offshore support services for specialized maritime operations and offshore industry requirements.",
    image:
      "/images/services/Marine-and-Offshore-Logistics.jpg?height=250&width=400",
    features: [
      "Offshore Logistics",
      "Specialized Equipment",
      "Technical Support",
      "Emergency Response",
    ],
  },
  {
    slug: "documentation-compliance-services",
    icon: FileText,
    title: "Documentation Services",
    description:
      "Comprehensive documentation and compliance services including certificate renewals and regulatory compliance.",
    image: "/images/services/Ahoy.jpg?height=250&width=400",
    features: [
      "Certificate Renewal",
      "Compliance Management",
      "Documentation Support",
      "Regulatory Guidance",
    ],
  },
  {
    slug: "emergency-contingency-services",
    icon: AlertTriangle,
    title: "Emergency Services",
    description:
      "24/7 emergency and contingency services for urgent maritime situations requiring immediate professional response.",
    image: "/images/services/First-Aid-on-the-Docks.jpg?height=250&width=400",
    features: [
      "24/7 Response",
      "Emergency Coordination",
      "Crisis Management",
      "Rapid Deployment",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-maritime-gradient text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Comprehensive maritime solutions tailored to meet all your
              shipping and logistics needs across Sri Lanka's strategic ports
            </p>
          </motion.div>
        </div>
      </section>

      {/* Unified Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-maritime-navy/20 group-hover:bg-maritime-navy/10 transition-colors duration-300" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 group-hover:bg-maritime-blue group-hover:text-white transition-all duration-300">
                    <service.icon className="h-6 w-6 text-maritime-blue group-hover:text-white" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-maritime-navy group-hover:text-maritime-blue transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.map((feature) => (
                      <Badge
                        key={feature}
                        variant="secondary"
                        className="text-xs"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <Link href={`/services/${service.slug}`}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full group-hover:bg-maritime-blue group-hover:text-white"
                    >
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-maritime-navy text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Need a Custom Solution?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our expert team can design tailored maritime solutions to meet
              your specific operational requirements. Contact us to discuss your
              unique needs.
            </p>
            <Button
              size="lg"
              className="bg-maritime-gold hover:bg-maritime-gold/90 text-maritime-navy"
              asChild
            >
              <Link href="/contact">Get Custom Quote</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
