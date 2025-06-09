"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Ship,
  Anchor,
  Compass,
  MapPin,
  Clock,
  Globe,
  Waves,
  Users,
} from "lucide-react";
import Image from "next/image";

const milestones = [
  {
    year: "1995",
    title: "Our Humble Beginnings",
    description:
      "Founded as a small port agency in Colombo with just 5 employees, serving local vessels.",
    image: "/images/journey/office-1995.jpg",
    stats: {
      employees: "5",
      ports: "1",
      vessels: "12/year",
    },
    features: ["Port Agency", "Local Operations", "Small Team"],
    icon: Anchor,
    color: "bg-maritime-blue/20 text-maritime-blue",
  },
  {
    year: "2002",
    title: "Regional Expansion",
    description:
      "Expanded services to Galle port, establishing our first regional office and doubling our fleet services.",
    image: "/images/journey/galle-expansion.jpg",
    stats: {
      employees: "25",
      ports: "2",
      vessels: "120/year",
    },
    features: ["Regional Presence", "OPL Services", "Crew Management"],
    icon: Compass,
    color: "bg-maritime-gold/20 text-maritime-gold",
  },
  {
    year: "2010",
    title: "Strategic Partnerships",
    description:
      "Formed alliances with major shipping lines and became a trusted partner for international maritime operations.",
    image: "/images/journey/partnerships.jpg",
    stats: {
      employees: "75",
      ports: "3",
      vessels: "500+/year",
    },
    features: ["Global Networks", "Bunker Services", "Transshipment"],
    icon: Globe,
    color: "bg-maritime-navy/20 text-maritime-navy",
  },
  {
    year: "2015",
    title: "Digital Transformation",
    description:
      "Implemented cutting-edge port management systems and real-time vessel tracking, revolutionizing our operations.",
    image: "/images/journey/digital-upgrade.jpg",
    stats: {
      employees: "120",
      ports: "4",
      vessels: "1,200+/year",
    },
    features: ["Digital Systems", "Real-time Tracking", "E-Documentation"],
    icon: Waves,
    color: "bg-maritime-blue/20 text-maritime-blue",
  },
  {
    year: "2020",
    title: "Full-Service Maritime Solutions",
    description:
      "Achieved comprehensive service coverage across all major Sri Lankan ports with ISO certifications.",
    image: "/images/journey/full-service.jpg",
    stats: {
      employees: "200+",
      ports: "All Major Ports",
      vessels: "2,500+/year",
    },
    features: ["ISO Certified", "End-to-End Solutions", "24/7 Operations"],
    icon: Ship,
    color: "bg-maritime-gold/20 text-maritime-gold",
  },
  {
    year: "Present",
    title: "Industry Leader",
    description:
      "Recognized as Sri Lanka's premier maritime agency with international accolades and expanding global footprint.",
    image: "/images/journey/current-team.jpg",
    stats: {
      employees: "300+",
      ports: "Global Network",
      vessels: "5,000+/year",
    },
    features: ["Award-Winning", "Global Presence", "Innovation Hub"],
    icon: MapPin,
    color: "bg-maritime-navy/20 text-maritime-navy",
  },
];

export default function JourneyPage() {
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
              Our Maritime Journey
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Charting 25+ years of excellence in maritime services across Sri
              Lanka and beyond
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-maritime-blue via-maritime-gold to-maritime-navy"></div>

        <div className="max-w-7xl mx-auto">
          <div className="space-y-32">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-12`}
              >
                {/* Year Badge */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div
                    className={`flex items-center justify-center w-24 h-24 rounded-full ${milestone.color} border-4 border-white shadow-lg`}
                  >
                    <milestone.icon className="h-10 w-10" />
                    <span className="sr-only">{milestone.year}</span>
                  </div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xl font-bold text-maritime-navy">
                    {milestone.year}
                  </div>
                </div>

                {/* Content Card */}
                <div
                  className={`lg:w-1/2 ${
                    index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"
                  } mt-16`}
                >
                  <Card className="p-8 h-full shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <CardHeader className="p-0 mb-6">
                      <CardTitle className="text-3xl text-maritime-navy">
                        {milestone.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                        {milestone.description}
                      </p>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {Object.entries(milestone.stats).map(([key, value]) => (
                          <div
                            key={key}
                            className="bg-maritime-blue/10 p-3 rounded-lg text-center"
                          >
                            <div className="text-xl font-bold text-maritime-navy">
                              {value}
                            </div>
                            <div className="text-sm text-gray-600 capitalize">
                              {key.replace(/_/g, " ")}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Features */}
                      <div>
                        <h4 className="font-semibold text-maritime-navy mb-3">
                          Key Achievements
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {milestone.features.map((feature) => (
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
                    </CardContent>
                  </Card>
                </div>

                {/* Image */}
                <div className="lg:w-1/2 relative h-96 rounded-lg overflow-hidden shadow-xl group">
                  <Image
                    src={milestone.image || "/placeholder.svg"}
                    alt={`${milestone.year} - ${milestone.title}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-maritime-navy/60 via-transparent to-transparent" />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-maritime-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Clock className="h-16 w-16 mx-auto mb-4" />
                      <p className="text-lg font-semibold">{milestone.year}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Status */}
      <section className="py-20 px-4 bg-maritime-navy text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Where We Are Today</h2>
            <p className="text-xl text-maritime-gold max-w-3xl mx-auto">
              A trusted partner in global maritime operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Ship,
                value: "5,000+",
                label: "Vessels Served Annually",
              },
              {
                icon: MapPin,
                value: "15+",
                label: "Countries in Our Network",
              },
              {
                icon: Users,
                value: "300+",
                label: "Dedicated Professionals",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center p-8 hover:bg-white/20 transition-all duration-300 h-full">
                  <CardContent className="p-0">
                    <stat.icon className="h-16 w-16 text-maritime-gold mx-auto mb-6" />
                    <div className="text-5xl font-bold mb-3">{stat.value}</div>
                    <p className="text-gray-300 text-lg">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-maritime-navy mb-6">
              Sailing Into the Future
            </h2>
            <p className="text-xl text-maritime-blue max-w-3xl mx-auto">
              Our vision for sustainable and innovative maritime solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Green Port Initiatives",
                description:
                  "Implementing eco-friendly port operations and reducing carbon footprint",
                icon: "🌱",
              },
              {
                title: "Digital Expansion",
                description:
                  "Blockchain-based documentation and AI-powered logistics",
                icon: "🤖",
              },
              {
                title: "Global Reach",
                description: "Expanding our network to 25+ countries by 2030",
                icon: "🌍",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full hover:shadow-lg transition-shadow duration-300 border-maritime-blue/30">
                  <CardContent className="p-0 text-center">
                    <div className="text-5xl mb-6">{item.icon}</div>
                    <h3 className="text-2xl font-semibold text-maritime-navy mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
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
