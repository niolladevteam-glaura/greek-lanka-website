"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, DollarSign, Clock, TrendingDown, Calendar, Award, CheckCircle, Zap } from "lucide-react"

const trustFactors = [
  {
    icon: Shield,
    title: "Unwavering Confidentiality",
    description:
      "We maintain strict commercial confidentiality, safeguarding all sensitive information with the highest level of discretion.",
  },
  {
    icon: DollarSign,
    title: "Exceptional Value",
    description:
      "Our competitive rates are designed to provide superior value while maintaining the highest service standards.",
  },
  {
    icon: Clock,
    title: "24/7 Excellence",
    description:
      "Our dedicated team delivers outstanding service around the clock, ensuring your needs are met whenever and wherever you need us.",
  },
  {
    icon: TrendingDown,
    title: "Strategic Cost Savings",
    description:
      "Through regular performance evaluations, we identify and implement cost-saving measures to enhance your operational efficiency.",
  },
  {
    icon: Calendar,
    title: "Optimized Call Planning",
    description:
      "We provide meticulous call planning to ensure timely and effective responses, minimize downtime, and optimize operational flow.",
  },
  {
    icon: Award,
    title: "Consistent Professionalism",
    description:
      "Experience consistent professionalism across all our services, ensuring reliability and quality at every step.",
  },
  {
    icon: CheckCircle,
    title: "Reliable Service",
    description:
      "Our track record of dependable service ensures that you can trust us to meet your needs with precision and care.",
  },
  {
    icon: Zap,
    title: "Prompt Solutions",
    description:
      "We prioritize swift vessel attendance and cost-effective solutions, reducing turnaround times and optimizing your operational costs.",
  },
]

export function TrustSection() {
  return (
    <section className="py-20 px-4 bg-maritime-navy text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Why Customers Trust Greek Lanka Maritime Services</h2>
          <p className="text-xl text-maritime-gold max-w-3xl mx-auto">
            Choose Greek Lanka Maritime Services for a partner that delivers exceptional service, reliability, and value
            tailored to your needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustFactors.map((factor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 h-full hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <factor.icon className="h-12 w-12 text-maritime-gold mx-auto mb-4" />
                  <h3 className="font-semibold mb-3 text-white">{factor.title}</h3>
                  <p className="text-sm text-gray-200 leading-relaxed">{factor.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
