"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Shield, CheckCircle, Target, Users, Leaf } from "lucide-react"

const certifications = [
  {
    title: "ISO 9001:2015",
    description: "Quality Management System certification ensuring consistent service delivery",
    issuer: "International Organization for Standardization",
    status: "Certified",
  },
  {
    title: "ISPS Code Compliance",
    description: "International Ship and Port Facility Security Code compliance",
    issuer: "International Maritime Organization",
    status: "Compliant",
  },
  {
    title: "MLC 2006",
    description: "Maritime Labour Convention compliance for crew welfare",
    issuer: "International Labour Organization",
    status: "Certified",
  },
  {
    title: "STCW Convention",
    description: "Standards of Training, Certification and Watchkeeping compliance",
    issuer: "International Maritime Organization",
    status: "Compliant",
  },
]

const qualityObjectives = [
  {
    icon: Target,
    title: "Service Excellence",
    description: "Consistently exceed customer requirements and expectations",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Build strong and lasting partnerships with our clients",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Prioritize safety and environmental sustainability",
  },
  {
    icon: CheckCircle,
    title: "Continuous Improvement",
    description: "Embrace culture of continuous improvement in all processes",
  },
  {
    icon: Award,
    title: "Industry Standards",
    description: "Comply with international and local shipping regulations",
  },
  {
    icon: Leaf,
    title: "Environmental Responsibility",
    description: "Committed to environmental protection and sustainability",
  },
]

export default function AccreditationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-maritime-gradient text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Accreditation</h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Committed to excellence through internationally recognized standards and continuous improvement
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quality Policy */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-maritime-navy mb-8">Quality Policy</h2>
            <div className="max-w-5xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                We are committed to providing efficient, reliable, and customer-centric services to all our clients. We
                strive to deliver services that consistently exceed customer requirements, building strong and lasting
                partnerships.
              </p>
              <p>
                Our policy is to continuously improve our operations, comply with industry standards, and prioritize
                safety and environmental sustainability while ensuring compliance with international & local shipping
                standards, laws, regulations, and ISO 9001 requirements.
              </p>
              <p>
                We establish clear quality objectives and performance indicators to monitor our progress. By analyzing
                data and key performance metrics, we make informed decisions and drive service excellence through
                embracing the culture of continuous improvement in our processes, services, and systems.
              </p>
              <p className="text-xl font-semibold text-maritime-blue">
                Through our dedicated team and innovative approach, we aim to be a trusted partner in facilitating
                seamless port operations and contributing to the growth and success of our clients and stakeholders.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-maritime-navy mb-6">Certifications & Compliance</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence is validated through internationally recognized certifications and standards
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Award className="h-12 w-12 text-maritime-blue" />
                      <Badge className="bg-green-100 text-green-800">{cert.status}</Badge>
                    </div>
                    <CardTitle className="text-maritime-navy">{cert.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed mb-4">{cert.description}</p>
                    <p className="text-sm text-maritime-blue font-medium">Issued by: {cert.issuer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Objectives */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-maritime-navy mb-6">Quality Objectives</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our commitment to quality is reflected in our comprehensive objectives and performance indicators
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {qualityObjectives.map((objective, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                  <CardContent className="p-0">
                    <objective.icon className="h-16 w-16 text-maritime-blue mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-semibold text-maritime-navy mb-3">{objective.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{objective.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Statement */}
      <section className="py-20 px-4 bg-maritime-navy text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Our Commitment</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              We are dedicated to maintaining the highest standards of service quality, safety, and environmental
              responsibility. Through regular assessments and feedback, we identify areas for enhancement to improve our
              efficiency and effectiveness, ensuring we remain your trusted maritime partner.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-maritime-gold mb-2">Zero</div>
                <div className="text-lg">Pollution</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-maritime-gold mb-2">Zero</div>
                <div className="text-lg">Accidents</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-maritime-gold mb-2">Zero</div>
                <div className="text-lg">Repercussions</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
