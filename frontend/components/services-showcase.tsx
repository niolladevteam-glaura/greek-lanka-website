"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Ship,
  Users,
  Package,
  ShoppingCart,
  Fuel,
  Settings,
  DollarSign,
  FileText,
  Anchor,
  Clock,
} from "lucide-react";
import Link from "next/link";
import { gsap } from "gsap";

const services = [
  {
    id: 1,
    title: "Port Agency Services",
    subtitle: "Complete Port Call Management",
    description: "Simplify Operations, Improve Flow",
    details: "24/7 support for vessels at all Sri Lankan ports.",
    icon: Ship,
    color: "bg-blue-500",
    cardTitle: "PORT CALL ACTIVITIES",
    activities: [
      {
        type: "Customs and Immigration Services",
        cost: "850.00",
        description: "Fast-track customs, documents, and immigration.",
        color: "bg-blue-500",
        icon: FileText,
      },
      {
        type: "Port Facility Services",
        cost: "1,200.00",
        description: "Berthing, bunkering, and port coordination.",
        color: "bg-green-500",
        icon: Anchor,
      },
      {
        type: "Local Transportation and Logistics",
        cost: "2,400.00",
        description: "Ground transport for crew and equipment.",
        color: "bg-red-500",
        icon: Ship,
      },
      {
        type: "Ship Repair and Maintenance Coordination",
        cost: "650.00",
        description: "Connects with trusted repair providers.",
        color: "bg-purple-500",
        icon: Settings,
      },
    ],
  },
  {
    id: 2,
    title: "Crew Change & Personnel Transfer Services",
    subtitle: "Crew Change & Personnel Transfer Services",
    description: "Aligned Crew Operations",
    details: "Smooth crew transitions and paperwork.",
    icon: Users,
    color: "bg-green-500",
    cardTitle: "CREW CHANGE",
    activities: [
      {
        type: "Efficient Operations",
        cost: "450.00",
        description: "End-to-end crew change handling.",
        color: "bg-blue-500",
        icon: FileText,
      },
      {
        type: "Streamlined Embarkation/Disembarkation",
        cost: "320.00",
        description: "Quick join/depart support with formalities.",
        color: "bg-yellow-500",
        icon: Ship,
      },
      {
        type: "24/7 Support",
        cost: "890.00",
        description: "Round-the-clock issue resolution.",
        color: "bg-green-500",
        icon: Clock,
      },
      {
        type: "Safety and Compliance",
        cost: "180.00",
        description: "Meets all local and global standards.",
        color: "bg-orange-500",
        icon: Settings,
      },
    ],
  },
  {
    id: 3,
    title: "Ship Chandling Services",
    subtitle: "Ship Chandling Services",
    description: "24/7 supply of goods and equipment.",
    details: "Supplies provisions, bonded goods, and tools.",
    icon: Package,
    color: "bg-purple-500",
    cardTitle: "Ship Chandling Services",
    activities: [
      {
        type: "Provisions Supply",
        cost: "3,200.00",
        description: "Fresh and dry stores for crew needs.",
        color: "bg-red-500",
        icon: Settings,
      },
      {
        type: "Deck and Engine Stores",
        cost: "1,850.00",
        description: "Safety and maintenance tools.",
        color: "bg-blue-500",
        icon: Anchor,
      },
      {
        type: "Bonded Stores",
        cost: "720.00",
        description: "Duty-free supply of regulated goods.",
        color: "bg-green-500",
        icon: Ship,
      },
      {
        type: "Technical Support",
        cost: "450.00",
        description: "Quality checks and supply guidance.",
        color: "bg-yellow-500",
        icon: Clock,
      },
    ],
  },
  {
    id: 4,
    title: "Port agency for Cargo Operations",
    subtitle: "Port agency for Cargo Operations",
    description: "Expert cargo handling services.",
    details: "Coordination for various cargo types.",
    icon: ShoppingCart,
    color: "bg-orange-500",
    cardTitle: "Port agency for Cargo Operations",
    activities: [
      {
        type: "Containerized Cargo",
        cost: "2,100.00",
        description: "Efficient container loading/unloading.",
        color: "bg-green-500",
        icon: Package,
      },
      {
        type: "Oil and Petroleum Products",
        cost: "1,650.00",
        description: "Handled with safety and compliance.",
        color: "bg-blue-500",
        icon: Settings,
      },
      {
        type: "Bulk Commodities",
        cost: "380.00",
        description: "Dry/liquid bulk cargo handling.",
        color: "bg-yellow-500",
        icon: Ship,
      },
      {
        type: "General Cargo",
        cost: "920.00",
        description: "Custom solutions for all cargo types.",
        color: "bg-red-500",
        icon: Anchor,
      },
    ],
  },
  {
    id: 5,
    title: "Yacht/Cruise Agency",
    subtitle: "Yacht/Cruise Agency",
    description: "Complete yacht and cruise support.",
    details: "Arrival, tours, crew, and repairs handled.",
    icon: Fuel,
    color: "bg-red-500",
    cardTitle: "Yacht/Cruise Agency",
    activities: [
      {
        type: "Comprehensive Port Services",
        cost: "15,400.00",
        description: "Berthing and port clearances.",
        color: "bg-red-500",
        icon: Fuel,
      },
      {
        type: "Logistics and Coordination",
        cost: "28,900.00",
        description: "Tour and docking arrangements.",
        color: "bg-orange-500",
        icon: Settings,
      },
      {
        type: "Technical and Maintenance Support",
        cost: "320.00",
        description: "Certified repairs and services.",
        color: "bg-blue-500",
        icon: FileText,
      },
      {
        type: "Crew Management",
        cost: "850.00",
        description: "Crew logistics and compliance.",
        color: "bg-green-500",
        icon: Ship,
      },
    ],
  },
  {
    id: 6,
    title: "Port agency for dry dock /Afloat Repairs",
    subtitle: "Port agency for dry dock /Afloat Repairs",
    description: "Dry dock and afloat repair support.",
    details: "Repairs, assessments, and overhauls managed.",
    icon: DollarSign,
    color: "bg-yellow-500",
    cardTitle: "Port agency for dry dock /Afloat Repairs",
    activities: [
      {
        type: "Dry Docking Operations",
        cost: "8,750.00",
        description: "Full hull and machinery overhauls.",
        color: "bg-blue-500",
        icon: DollarSign,
      },
      {
        type: "Structural Repairs",
        cost: "1,200.00",
        description: "Hull repairs and reinforcement.",
        color: "bg-green-500",
        icon: Settings,
      },
      {
        type: "Machinery Overhaul",
        cost: "180.00",
        description: "Engine and system restorations.",
        color: "bg-yellow-500",
        icon: FileText,
      },
      {
        type: "Technical Assessments",
        cost: "95.00",
        description: "Inspections and maintenance planning.",
        color: "bg-purple-500",
        icon: DollarSign,
      },
    ],
  },
];

export function ServicesShowcase() {
  const [activeService, setActiveService] = useState(0);
  const cardsRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (cardsRef.current && titleRef.current) {
      // Animate title
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );

      // Animate cards
      const cards = cardsRef.current.children;
      gsap.fromTo(
        cards,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.2,
        }
      );
    }
  }, [activeService]);

  const currentService = services[activeService];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-blue-100 relative overflow-hidden">
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
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Services List */}
          <div className="space-y-4">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className={`p-6 rounded-lg cursor-pointer transition-all duration-500 ${
                  index === activeService
                    ? "bg-white shadow-lg border-l-4 border-maritime-blue"
                    : "bg-white/50 hover:bg-white/80"
                }`}
                onClick={() => setActiveService(index)}
                whileHover={{ x: 5 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`p-2 rounded-full ${service.color} bg-opacity-20`}
                  >
                    <service.icon className={`h-6 w-6 text-maritime-blue`} />
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`font-semibold text-lg mb-1 transition-colors ${
                        index === activeService
                          ? "text-maritime-navy"
                          : "text-gray-600"
                      }`}
                    >
                      {service.subtitle}
                    </h3>
                    <h4
                      className={`font-bold text-xl mb-2 transition-colors ${
                        index === activeService
                          ? "text-maritime-navy"
                          : "text-gray-400"
                      }`}
                    >
                      {service.description}
                    </h4>
                    <p
                      className={`text-sm transition-colors ${
                        index === activeService
                          ? "text-gray-700"
                          : "text-gray-400"
                      }`}
                    >
                      {service.details}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side - Service Details */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden min-h-[500px]">
              {/* Background Elements */}
              <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-500/5 to-blue-600/5 rounded-r-2xl" />

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-blue-100 rounded-full opacity-50" />
              <div className="absolute bottom-4 right-8 w-24 h-24 bg-blue-50 rounded-full opacity-30" />

              {/* Service Header */}
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div
                    className={`p-3 rounded-full ${currentService.color} bg-opacity-20`}
                  >
                    <currentService.icon className="h-8 w-8 text-maritime-blue" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-maritime-navy">
                      {currentService.title}
                    </h3>
                    <p className="text-maritime-blue font-medium">
                      {currentService.subtitle}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Title */}
              <div ref={titleRef} className="mb-6">
                <div className="bg-white rounded-lg shadow-sm border p-4 text-center">
                  <h4 className="font-bold text-maritime-navy text-lg">
                    {currentService.cardTitle}
                  </h4>
                </div>
              </div>

              {/* Activity Cards */}
              <div ref={cardsRef} className="space-y-3">
                {currentService.activities.map((activity, index) => (
                  <div
                    key={`${currentService.id}-${index}`}
                    className={`${activity.color} rounded-lg p-4 text-white shadow-md hover:shadow-lg transition-shadow duration-300 relative overflow-hidden`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <activity.icon className="h-5 w-5 text-white/90" />
                        <div>
                          <h5 className="font-semibold text-white">
                            {activity.type}
                          </h5>
                          <p className="text-white/80 text-sm">
                            {activity.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Decorative Icons */}
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex space-x-1 opacity-30">
                      <div className="w-2 h-2 bg-white rounded-full" />
                      <div className="w-2 h-2 bg-white rounded-full" />
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="mt-8">
                <Button
                  className="bg-maritime-blue hover:bg-maritime-blue/90 text-white w-full"
                  asChild
                >
                  <Link href="/services">
                    Learn More About {currentService.title}
                  </Link>
                </Button>
              </div>
            </div>

            {/* Service Indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {services.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeService
                      ? "bg-maritime-blue scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  onClick={() => setActiveService(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
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
