"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, EyeOff, Server, Mail, AlertCircle } from "lucide-react";

const privacyPrinciples = [
  {
    icon: Lock,
    title: "Data Minimization",
    description: "We only collect what we need to provide our services",
  },
  {
    icon: Shield,
    title: "Security First",
    description: "Appropriate measures to protect your information",
  },
  {
    icon: EyeOff,
    title: "Limited Sharing",
    description: "We don't sell or trade your personal information",
  },
  {
    icon: Server,
    title: "Your Rights",
    description: "Control over your personal data",
  },
  {
    icon: Mail,
    title: "Transparency",
    description: "Clear communication about data practices",
  },
  {
    icon: AlertCircle,
    title: "Compliance",
    description: "Adherence to applicable data protection laws",
  },
];

export default function PrivacyPolicyPage() {
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Protecting your data with the same commitment we bring to maritime
              services
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
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
              Our Commitment to Privacy
            </h2>
            <div className="max-w-5xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Greek Lanka Maritime Services (Pvt) Ltd ("we," "us," or "our")
                respects your privacy and is committed to protecting the
                personal information you share with us. This Privacy Policy
                outlines how we collect, use, disclose, and safeguard your
                information when you visit our website and use our services.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Data Collection */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-maritime-navy mb-6">
              Information We Collect
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We may collect and process the following types of information:
            </p>
          </motion.div>

          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full max-w-4xl"
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-maritime-blue/20">
                <CardHeader>
                  <CardTitle className="text-maritime-navy text-3xl text-center">
                    Types of Data Collected
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold text-lg mb-4 text-maritime-blue">
                        Personal Information
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Name</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Company name</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Email address</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Phone number</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Job title</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>
                            Other contact details provided through forms or
                            emails
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-4 text-maritime-blue">
                        Technical Data
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>IP address</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Browser type and version</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Time zone settings</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Operating system and platform</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>
                            Browsing actions on our website (via cookies)
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-semibold text-maritime-navy mb-6">
              How We Use Your Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-medium text-lg mb-2">Service Delivery</h4>
                <p className="text-gray-600 text-sm">
                  To respond to your inquiries or service requests and
                  communicate regarding agency services
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="font-medium text-lg mb-2">Improvements</h4>
                <p className="text-gray-600 text-sm">
                  To improve our website and customer experience
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Server className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="font-medium text-lg mb-2">Compliance</h4>
                <p className="text-gray-600 text-sm">
                  To comply with legal obligations and for internal record
                  keeping
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Principles */}
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
              Our Privacy Principles
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Fundamental principles that guide our approach to data protection
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {privacyPrinciples.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                  <CardContent className="p-0">
                    <principle.icon className="h-16 w-16 text-maritime-blue mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-semibold text-maritime-navy mb-3">
                      {principle.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {principle.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Sharing & Protection */}
      <section className="py-20 px-4 bg-maritime-navy text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Data Sharing & Protection
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                We maintain strict protocols for data sharing and implement
                appropriate security measures
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-maritime-gold">
                  Data Sharing
                </h3>
                <div className="space-y-6 text-gray-300">
                  <p>
                    We do not sell, trade, or rent your personal information to
                    third parties. However, we may share your information with:
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        Trusted partners or service providers who help us
                        operate our website or provide our services (e.g., port
                        authorities, logistic partners)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        Legal or regulatory authorities when required to comply
                        with applicable laws
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-maritime-gold">
                  Data Protection
                </h3>
                <div className="space-y-6 text-gray-300">
                  <p>
                    We implement appropriate technical and organizational
                    measures to protect your personal data:
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        Protection from unauthorized access, alteration,
                        disclosure, or destruction
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Secure transmission protocols</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Regular security assessments</span>
                    </li>
                  </ul>
                  <p className="text-gray-400 italic">
                    Note: No method of transmission over the internet is 100%
                    secure.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cookies Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-maritime-navy mb-6">
              Cookies Policy
            </h2>
            <div className="max-w-3xl mx-auto text-gray-600">
              <p>
                Our website may use cookies and similar technologies to enhance
                your browsing experience. You can choose to disable cookies
                through your browser settings.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Third-Party Links */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-maritime-navy mb-6">
              Third-Party Links
            </h2>
            <div className="max-w-3xl mx-auto text-gray-600">
              <p>
                Our website may contain links to third-party websites. We are
                not responsible for the content or privacy practices of such
                websites.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Your Rights & Contact */}
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
              Your Data Protection Rights
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              You have rights regarding your personal information
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-maritime-blue/20">
                <CardHeader>
                  <CardTitle className="text-maritime-navy text-2xl">
                    Your Rights
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 text-gray-600">
                    <li className="flex items-start">
                      <span className="mr-2 font-bold">•</span>
                      <span>
                        <strong>Access:</strong> The personal information we
                        hold about you
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 font-bold">•</span>
                      <span>
                        <strong>Correction:</strong> Request correction of
                        inaccurate or incomplete data
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 font-bold">•</span>
                      <span>
                        <strong>Deletion:</strong> Request deletion of your
                        personal data, where applicable
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 font-bold">•</span>
                      <span>
                        <strong>Withdraw Consent:</strong> Where processing is
                        based on consent
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-maritime-blue/20">
                <CardHeader>
                  <CardTitle className="text-maritime-navy text-2xl">
                    Contact Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6 text-gray-600">
                    <p>
                      To exercise any of these rights or for privacy-related
                      inquiries:
                    </p>
                    <div className="bg-maritime-blue/10 p-4 rounded-lg">
                      <p className="font-semibold text-maritime-blue">
                        Greek Lanka Maritime Services (Pvt) Ltd
                      </p>
                      <p className="mt-2">
                        Email:{" "}
                        <span className="text-maritime-blue">
                          info@greeklanka.com
                        </span>
                      </p>
                      <p>
                        Phone:{" "}
                        <span className="text-maritime-blue">
                          +94 11 208 3206
                        </span>
                      </p>
                      <p>
                        Address:{" "}
                        <span className="text-maritime-blue">
                          Level 5D, Valiant Towers, Nawam Mawatha, Colombo 02,
                          Sri Lanka
                        </span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <h3 className="text-2xl font-semibold text-maritime-navy mb-6">
                Policy Updates
              </h3>
              <div className="max-w-3xl mx-auto text-gray-600">
                <p>
                  We may update this Privacy Policy from time to time. Any
                  changes will be posted on this page with an updated "Effective
                  Date."
                </p>
                <p className="mt-4 font-medium">Last Updated: 09/07/2025</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
