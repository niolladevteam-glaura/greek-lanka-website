"use client";

import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import { Card, CardContent } from "@/components/ui/card";
import {
  Target,
  Eye,
  Users,
  Shield,
  Leaf,
  Award,
  Heart,
  Zap,
} from "lucide-react";
import { ContactSection } from "@/components/contact-section";

const coreValues = [
  {
    icon: Users,
    title: "CUSTOMERS",
    description:
      "We understand our clients and proactively meet their expectation on time.",
    color: "text-maritime-blue",
  },
  {
    icon: Shield,
    title: "INTEGRITY",
    description: "We act in an honest, smooth and responsible manner.",
    color: "text-maritime-teal",
  },
  {
    icon: Leaf,
    title: "ENVIRONMENT",
    description:
      "We care for the environment and are committed to it's protection.",
    color: "text-green-600",
  },
  {
    icon: Award,
    title: "EXCELLENCE",
    description:
      "We embrace commitments, compliance and innovation in striving for ever higher performance.",
    color: "text-maritime-gold",
  },
  {
    icon: Heart,
    title: "TEAM WORK",
    description:
      "We value and respect each other, build relationships and work as a team.",
    color: "text-red-500",
  },
  {
    icon: Zap,
    title: "SAFETY",
    description: "We are committed to safety of all involved.",
    color: "text-orange-500",
  },
];

export default function AboutPage() {
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6">About Us</h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              More than just a Ship Agency - Your dedicated partner in global
              maritime logistics
            </p>
          </motion.div>
        </div>
      </section>

      {/* YouTube Video Section */}
      <section className="py-10 px-4 flex justify-center bg-white">
        <ReactPlayer
          src="https://www.youtube.com/watch?v=BY7mbrxpNEM"
          playing={true}
          controls={true}
          width="100%"
          height="480px"
          className="max-w-3xl mx-auto rounded-lg shadow-lg"
        />
      </section>

      {/* Certification Note */}
      <div className="px-4 pb-10 flex justify-center bg-white">
        <div className="max-w-3xl mx-auto text-center text-sm text-gray-600 mt-2">
          <strong>Note:</strong> Video shows our former ISO by DNV GL. We are
          now ISO 9001:2015 certified by Scandinavian Business Certification AB.
        </div>
      </div>

      {/* Company Overview */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-maritime-navy mb-8">
              Who We Are
            </h2>
            <div className="max-w-5xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                GREEK LANKA MARITIME SERVICES (PVT) LTD, we are more than just a
                Ship Agency. We are a dedicated partner in global maritime
                logistics, committed to delivering seamless, efficient, and
                reliable services across Sri Lanka's ports. With a rich history
                of hands-on experience and industry expertise, we have earned a
                reputation for excellence by consistently exceeding customer
                expectations.
              </p>
              <p>
                Our journey began with a vision to provide personalized,
                high-quality service to shipping companies worldwide, and today,
                we are proud to be a trusted name in the industry. Whether your
                vessel is calling at Colombo, Galle, Hambantota, Trincomalee, or
                any minor ports in Sri Lanka, we ensure your operations run
                smoothly, backed by our team's in-depth knowledge, 24/7
                availability, and strategic local partnerships.
              </p>
              <p>
                We believe in building long-term relationships with our clients
                by offering not only competitive rates but also unparalleled
                support tailored to your specific needs. With the support of our
                representatives in Greece and Cyprus, we offer an unmatched
                global network that enhances our ability to serve you better.
              </p>
              <p>
                Driven by our core values of integrity, professionalism, and
                customer satisfaction, Greek Lanka is committed to ensuring that
                every ship that calls our shores receives top-tier service. We
                understand the complexities of the shipping industry and are
                here to make your experience as efficient and hassle-free as
                possible.
              </p>
              <p className="text-xl font-semibold text-maritime-blue">
                Let us navigate the complexities of shipping so you can focus on
                what matters most – your business.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className=" px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-8 bg-maritime-navy text-white">
                <CardContent className="p-0">
                  <Eye className="h-16 w-16 text-maritime-gold mb-6" />
                  <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
                  <p className="text-xl leading-relaxed">
                    "The Most Trusted Long-Term Partner Providing Services to
                    The Global Maritime Industry"
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-8 bg-maritime-blue text-white">
                <CardContent className="p-0">
                  <Target className="h-16 w-16 text-maritime-gold mb-6" />
                  <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
                  <p className="text-xl leading-relaxed">
                    We provide continued assurance to clients offering reliable,
                    cost effective and innovative solutions. We enable and
                    motivate our employees to do the best. We try our best for
                    zero pollution, zero accident and zero repercussions.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-maritime-navy mb-6">
              Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our values guide every decision we make and every service we
              provide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                  <CardContent className="p-0 text-center">
                    <value.icon
                      className={`h-16 w-16 mx-auto mb-4 ${value.color} group-hover:scale-110 transition-transform`}
                    />
                    <h3 className="text-xl font-bold text-maritime-navy mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-maritime-navy text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience the difference of working with Sri Lanka's most trusted
              maritime services provider. Let us handle your maritime logistics
              while you focus on growing your business.
            </p>
          </motion.div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
