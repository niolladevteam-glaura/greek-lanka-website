"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Captain Michael Chen",
    company: "Pacific Shipping Lines",
    role: "Fleet Manager",
    content:
      "Greek Lanka Maritime Services has been our trusted partner for over 5 years. Their 24/7 support and professional handling of our vessels at Colombo Port is exceptional. The team's expertise in crew changes and port formalities has saved us countless hours and costs.",
    rating: 5,
    initials: "MC",
  },
  {
    name: "Sarah Williams",
    company: "Global Maritime Solutions",
    role: "Operations Director",
    content:
      "Outstanding service quality and reliability. Greek Lanka's team handled our emergency bunker supply at Hambantota Port with remarkable efficiency. Their local knowledge and network proved invaluable during critical operations.",
    rating: 5,
    initials: "SW",
  },
  {
    name: "Rajesh Patel",
    company: "Indian Ocean Logistics",
    role: "Port Operations Manager",
    content:
      "The professionalism and attention to detail provided by Greek Lanka is unmatched. From ship chandling to cargo operations, they consistently deliver beyond expectations. Highly recommended for any maritime operations in Sri Lanka.",
    rating: 5,
    initials: "RP",
  },
  {
    name: "Captain Lars Andersen",
    company: "Nordic Shipping Co.",
    role: "Marine Superintendent",
    content:
      "Greek Lanka's comprehensive port agency services at Trincomalee have been instrumental in our successful operations. Their proactive approach and cost-effective solutions make them our preferred maritime partner in the region.",
    rating: 5,
    initials: "LA",
  },
]

export function TestimonialsSection() {
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
          <h2 className="text-4xl font-bold text-maritime-navy mb-6">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Trusted by maritime professionals worldwide for our exceptional service and reliability
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <Quote className="h-8 w-8 text-maritime-blue mr-3" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6 italic">"{testimonial.content}"</p>

                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarFallback className="bg-maritime-blue text-white font-semibold">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-maritime-navy">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-sm text-maritime-blue font-medium">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
