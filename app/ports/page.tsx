"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Ship, Container, Fuel, Users } from "lucide-react";
import WorldMap from "@/components/WorldMap";
import Image from "next/image";

const ports = [
  {
    name: "Port of Colombo",
    location: "Western Province",
    description:
      "Sri Lanka's most significant and bustling maritime gateway, strategically positioned on one of the world's busiest shipping lanes.",
    details:
      "This deep-water port is renowned for its modern infrastructure and efficiency, handling various cargo and vessel types. Its central location on global trade routes between Asia, Europe, and the Middle East makes it a pivotal hub for international shipping.",
    image: "/images/ports/port-colombo1.jpg?height=400&width=600",
    features: [
      "Dry Dock Facility",
      "Afloat Repairs Facility",
      "Bunkering",
      "FW Supply",
      "Container Terminal",
      "Bulk Cargo Handling",
      "Cruise Terminal",
      "Transhipment Hub",
      "24/7 Operations",
      "Modern Infrastructure",
    ],
    stats: {
      depth: "13-18m",
      berths: "50+",
      capacity: "7M TEU",
      area: "1,200 hectares",
      gps: "Latitude: 6.9536° N, Longitude: 79.8478° E",
    },
    services: [
      "Dry Dock Agency",
      "Repairs",
      "Ship Chandling",
      "Bunker Vessel Agency",
      "Port Agency",
      "Cargo Handling",
      "Crew Change",
      "Bunker Supply",
    ],
  },
  {
    name: "Port of Galle",
    location: "Southern Province",
    description:
      "Located on Sri Lanka's southwestern coast, a historical and operational gem blending traditional charm with modern capabilities.",
    details:
      "Galle serves as a crucial regional port, supporting both commercial trade and tourism. It is well-regarded for its efficient OPL Services, making it an essential player in regional maritime activities.",
    image: "/images/ports/galle_port.jpg?height=400&width=600",
    features: [
      "Heritage Port",
      "OPL Services",
      "Regional Trade",
      "Tourism Support",
      "Fishing Harbor",
      "Cultural Significance",
    ],
    stats: {
      depth: "08-09m",
      berths: "3",
      capacity: "1.5M",
      area: "",
      gps: "Latitude: 6°02′08″ N, Longitude: 80°12′54″ E",
    },
    services: [
      "Ship Repairs",
      "OPL Operations",
      "Port Agency",
      "Tourism Services",
      "Fishing Support",
      "Heritage Tours",
    ],
  },
  {
    name: "Port of Hambantota",
    location: "Southern Province",
    description:
      "A rapidly developing maritime facility with ambitious expansion plans, part of a larger economic development initiative.",
    details:
      "This modern port features an adjacent industrial zone and logistics park. Strategically positioned to enhance its role in international trade, focusing on handling a wide range of cargo including bulk and containerized goods.",
    image: "/images/ports/hambantota-port.jpg?height=400&width=600",
    features: [
      "Afloat Repairs Facility",
      "Bunkering",
      "Deep Water Port",
      "Industrial Zone",
      "Logistics Park",
      "Modern Facilities",
      "Strategic Location",
      "Expansion Plans",
    ],
    stats: {
      depth: "17m",
      berths: "11+",
      capacity: [
        "Container: 300,000 TEUs",
        "Bulk Cargo: 2.5 Million Tons",
        "Breakbulk: 3 Million Tons",
        "RO-RO: 600,000 units",
      ],
      area: "4,000 hectares",
      gps: "Latitude: 6°07.339′ N\nLongitude: 81°05.598′ E",
    },
    services: [
      "Ship Repairs",
      " Bunker Vessel Agency",
      "Port Agency",
      "Industrial Support",
      "Logistics Services",
      "Bulk Cargo",
      "Container Handling",
    ],
  },
  {
    name: "Port of Trincomalee",
    location: "Eastern Province",
    description:
      "One of the largest natural harbors in the world, distinguished by its deep-water capabilities accommodating large vessels.",
    details:
      "Trincomalee's strategic positioning provides access to major trade routes, making it vital for commercial shipping and maritime operations. The port is undergoing significant development to expand cargo handling capacity.",
    image: "/images/ports/thrinko_port.jpg?height=400&width=600",
    features: [
      "Bunkering",
      "Natural Harbor",
      "Deep Water Access",
      "Oil Terminal",
      "Naval Facilities",
      "Strategic Location",
      "Development Projects",
    ],
    stats: {
      depth: "10-18m",
      berths: "3+",
      capacity: "2.5M",
      area: "2,600 hectares",
      gps: "Latitude: 8.5666° N\nLongitude: 81.2333° E",
    },
    services: [
      "Ship Repairs",
      "Bunker Vessel Agency",
      "Port Agency",
      "Oil Terminal Services",
      "Naval Support",
      "Cargo Operations",
    ],
  },
];

// StatCard for uniform statistics display
function StatCard({
  value,
  label,
  isVertical = false,
}: {
  value: React.ReactNode;
  label: string;
  isVertical?: boolean;
}) {
  return (
    <div
      className="bg-gray-200 p-6 rounded-xl flex flex-col justify-center min-h-[110px] h-full"
      style={isVertical ? { alignItems: "flex-start" } : {}}
    >
      <div
        className={`font-bold text-maritime-navy ${
          isVertical ? "text-base mb-1" : "text-2xl"
        }`}
        style={isVertical ? { whiteSpace: "pre-line" } : {}}
      >
        {value}
      </div>
      <div className="text-sm text-gray-600 mt-1">{label}</div>
    </div>
  );
}

export default function PortsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white cursor-maritime">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-maritime-gradient text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Which Sri Lankan port best suits your vessel’s operational
              requirements?
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              From deep-water container terminals to energy logistics hubs and
              OPL support points, our nationwide port network delivers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Strategic Location Overview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-maritime-navy mb-8">
              Strategic Maritime Location
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-left">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Sri Lanka's strategic position at the crossroads of major
                  shipping lanes makes it an ideal hub for maritime operations.
                  Located just 6 nautical miles from the main East-West shipping
                  route, our ports handle over 36 million TEUs annually.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  With natural deep-water harbors and modern infrastructure, Sri
                  Lankan ports offer unparalleled advantages for transhipment,
                  regional distribution, and value-added services.
                </p>
              </div>
              <div>
                <div className="flex items-center justify-center gap-8">
                  <WorldMap />

                  {/* Enhanced Logo Animation */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 100 }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                      y: 0,
                    }}
                    animate={{
                      y: [0, -15, 0],
                      rotate: [0, -2, 0, 2, 0],
                    }}
                    transition={{
                      opacity: { duration: 0.8, ease: "easeOut" },
                      scale: { duration: 0.8, delay: 0.1 },
                      y: {
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                      },
                      rotate: {
                        duration: 6,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                      },
                    }}
                    viewport={{ once: true }}
                    className="w-40 h-40 relative"
                  >
                    <div className="absolute -top-8 -left-8 w-12 h-12">
                      <motion.div
                        animate={{
                          x: [0, 120, 0],
                          y: [0, -10, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          x: {
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear",
                          },
                          y: {
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                          },
                          opacity: {
                            duration: 3,
                            repeat: Infinity,
                            times: [0, 0.2, 1],
                          },
                        }}
                        className="absolute"
                      >
                        <Ship className="w-8 h-8 text-maritime-blue" />
                      </motion.div>
                    </div>

                    <Image
                      src="/greek-lanka-logo.png"
                      alt="Greek Lanka Logo"
                      fill
                      className="object-contain drop-shadow-lg"
                      priority
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ports Details */}
      <section className="px-4 py-0 bg-gray-50 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-20">
            {ports.map((port, index) => (
              <motion.div
                key={port.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                } ${index === ports.length - 1 ? "pb-10" : ""}`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <Card className="p-8 h-full">
                    <CardHeader className="p-0 mb-6">
                      <div className="flex items-center mb-4">
                        <MapPin className="h-8 w-8 text-maritime-blue mr-3" />
                        <div>
                          <CardTitle className="text-3xl text-maritime-navy">
                            {port.name}
                          </CardTitle>
                          <p className="text-maritime-blue font-medium">
                            {port.location}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                        {port.description}
                      </p>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {port.details}
                      </p>

                      {/* Port Statistics - 2 columns, all cards like ![image2](image2) */}
                      <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-6">
                        <StatCard
                          value={port.stats.depth}
                          label="Water Depth"
                        />
                        <StatCard value={port.stats.berths} label="Berths" />

                        {/* Annual Capacity - same style as above, left column */}
                        <StatCard
                          value={
                            Array.isArray(port.stats.capacity) ? (
                              <ul className="list-disc pl-4 m-0">
                                {port.stats.capacity.map((item, i) => (
                                  <li key={i} className="text-base">
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              port.stats.capacity
                            )
                          }
                          label="Annual Capacity"
                        />

                        {/* GPS Position - same style as above, right column, vertical */}
                        <StatCard
                          value={
                            port.stats.gps.includes("\n")
                              ? port.stats.gps
                              : port.stats.gps
                                  .split(",")
                                  .map((line, i) => (
                                    <div key={i}>{line.trim()}</div>
                                  ))
                          }
                          label="GPS Position"
                          isVertical
                        />
                      </div>

                      {/* Features */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-maritime-navy mb-2">
                          Key Features
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {port.features.map((feature) => (
                            <Badge
                              key={feature}
                              variant="secondary"
                              className="bg-maritime-blue/10 text-maritime-blue"
                            >
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Services */}
                      <div>
                        <h4 className="font-semibold text-maritime-navy mb-2">
                          Our Services
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {port.services.map((service) => (
                            <Badge
                              key={service}
                              variant="outline"
                              className="border-maritime-blue text-maritime-blue"
                            >
                              {service}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Port Image */}
                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <div className="relative h-96 rounded-lg overflow-hidden shadow-xl group">
                    <Image
                      src={port.image || "/placeholder.svg"}
                      alt={`${port.name} - Maritime Infrastructure`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-maritime-navy/60 via-transparent to-transparent" />

                    {/* Port Name Overlay */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                        <h3 className="text-xl font-bold text-maritime-navy mb-1">
                          {port.name}
                        </h3>
                        <p className="text-maritime-blue text-sm font-medium">
                          {port.location}
                        </p>
                        <div className="flex items-center mt-2">
                          <Ship className="h-4 w-4 text-maritime-blue mr-2" />
                          <span className="text-sm text-gray-600">
                            Strategic Maritime Hub
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-maritime-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center text-white">
                        <Ship className="h-16 w-16 mx-auto mb-4" />
                        <p className="text-lg font-semibold">
                          Explore {port.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Port Services Overview */}
      <section className="py-20 px-4 bg-maritime-navy text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Comprehensive Port Services
            </h2>
            <p className="text-xl text-maritime-gold max-w-3xl mx-auto">
              Full-service maritime solutions across all Sri Lankan ports
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Ship,
                title: "Port Agency",
                description: "Complete vessel handling and clearance services",
              },
              {
                icon: Container,
                title: "Cargo Operations",
                description: "Efficient loading, unloading, and storage",
              },
              {
                icon: Fuel,
                title: "Bunker Services",
                description: "Fuel supply and quality assurance",
              },
              {
                icon: Users,
                title: "Crew Services",
                description: "Crew change and personnel support",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center p-6 hover:bg-white/20 transition-all duration-300">
                  <CardContent className="p-0">
                    <service.icon className="h-16 w-16 text-maritime-gold mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3 text-white">
                      {service.title}
                    </h3>
                    <p className="text-gray-300">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
