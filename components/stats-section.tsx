"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Ship, Users, Globe, Award } from "lucide-react";
import { CountUpOnView } from "@/components/CountUpOnView";

const stats = [
  {
    icon: Ship,
    value: 1300,
    valueSuffix: "+",
    label: "Vessels Served",
    description: "Successfully handled vessels across all Sri Lankan ports",
  },
  {
    icon: Users,
    value: 25,
    valueSuffix: "+",
    label: "Expert Team",
    description: "Experienced maritime professionals at your service",
  },
  {
    icon: Globe,
    value: 24,
    valueSuffix: "/7",
    label: "Operations",
    description: "Round-the-clock support for all maritime needs",
  },
  {
    icon: Award,
    value: 12,
    valueSuffix: "+",
    label: "Industry Knowledge",
    description: "Proven track record in maritime services",
  },
];

export function StatsSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-maritime-navy mb-6">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Delivering excellence across Sri Lanka's maritime industry with
            measurable results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border-2 border-transparent hover:border-maritime-blue/20">
                <CardContent className="p-0">
                  <stat.icon className="h-16 w-16 text-maritime-blue mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <div className="text-4xl font-bold text-maritime-navy mb-2">
                    <CountUpOnView
                      target={stat.value}
                      duration={1.2}
                      suffix={stat.valueSuffix}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-maritime-navy mb-3">
                    {stat.label}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
