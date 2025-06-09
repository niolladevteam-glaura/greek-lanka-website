"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
  {
    name: "Maersk Line",
    logo: "/placeholder.svg?height=80&width=160",
    description: "Global container shipping leader",
  },
  {
    name: "MSC Mediterranean",
    logo: "/placeholder.svg?height=80&width=160",
    description: "World's largest container shipping company",
  },
  {
    name: "CMA CGM Group",
    logo: "/placeholder.svg?height=80&width=160",
    description: "French container transportation giant",
  },
  {
    name: "COSCO Shipping",
    logo: "/placeholder.svg?height=80&width=160",
    description: "Chinese state-owned shipping company",
  },
  {
    name: "Hapag-Lloyd",
    logo: "/placeholder.svg?height=80&width=160",
    description: "German international shipping company",
  },
  {
    name: "ONE Ocean Network",
    logo: "/placeholder.svg?height=80&width=160",
    description: "Japanese container shipping alliance",
  },
  {
    name: "Yang Ming Marine",
    logo: "/placeholder.svg?height=80&width=160",
    description: "Taiwanese container shipping company",
  },
  {
    name: "Evergreen Line",
    logo: "/placeholder.svg?height=80&width=160",
    description: "Taiwanese containerized-freight shipping company",
  },
  {
    name: "PIL Pacific International",
    logo: "/placeholder.svg?height=80&width=160",
    description: "Singapore-based shipping company",
  },
  {
    name: "Wan Hai Lines",
    logo: "/placeholder.svg?height=80&width=160",
    description: "Taiwanese container shipping company",
  },
  {
    name: "OOCL Orient Overseas",
    logo: "/placeholder.svg?height=80&width=160",
    description: "Hong Kong-based container shipping company",
  },
  {
    name: "Zim Integrated Shipping",
    logo: "/placeholder.svg?height=80&width=160",
    description: "Israeli international cargo shipping company",
  },
];

export function ClientsSection() {
  return (
    <section className="py-20 px-4 bg-maritime-navy text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-maritime-gold max-w-3xl mx-auto">
            Serving the world's leading shipping companies with excellence and
            reliability
          </p>
        </motion.div>

        {/* Client Logos Grid - Static Display */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 mb-12">
          {clients.slice(0, 12).map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 border border-white/20">
                <div className="relative h-16 mb-4">
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt={`${client.name} logo`}
                    fill
                    className="object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                  />
                </div>
                <h3 className="text-sm font-semibold text-white text-center group-hover:text-maritime-gold transition-colors">
                  {client.name}
                </h3>
                <p className="text-xs text-gray-300 text-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {client.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Continuous Sliding Animation */}
        <div className="relative mb-12">
          <div className="flex animate-scroll">
            {/* First set of logos */}
            {clients.map((client, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-6 px-8 py-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-4">
                  <div className="relative w-12 h-8">
                    <Image
                      src={client.logo || "/placeholder.svg"}
                      alt={`${client.name} logo`}
                      fill
                      className="object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                    />
                  </div>
                  <span className="text-lg font-semibold text-white whitespace-nowrap group-hover:text-maritime-gold transition-colors">
                    {client.name}
                  </span>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {clients.map((client, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-6 px-8 py-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-4">
                  <div className="relative w-12 h-8">
                    <Image
                      src={client.logo || "/placeholder.svg"}
                      alt={`${client.name} logo`}
                      fill
                      className="object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                    />
                  </div>
                  <span className="text-lg font-semibold text-white whitespace-nowrap group-hover:text-maritime-gold transition-colors">
                    {client.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-300">
            Join over{" "}
            <span className="text-maritime-gold font-semibold">
              100+ shipping companies
            </span>{" "}
            who trust us with their maritime operations
          </p>
        </motion.div>
      </div>
    </section>
  );
}
