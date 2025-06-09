"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, VoicemailIcon as Fax, Building } from "lucide-react"

const departments = [
  {
    name: "Operations Department",
    email: "operations@greeklanka.com",
    contacts: [
      { name: "Udith Kalupahana (Mr)", phone: "+94 777 232 271", availability: "24/7" },
      { name: "Yasith Kalupahana (Mr)", phone: "+94 777 001 855", availability: "24/7" },
      { name: "Sajith Madushan (Mr)", phone: "+94 777 828 161", availability: "24/7" },
    ],
  },
  {
    name: "Disbursement Department",
    email: "disbursement@greeklanka.com",
    contacts: [{ name: "Accounts Team", phone: "+94 777 232 271", availability: "Business Hours" }],
    additionalEmail: "accounts@greeklanka.com",
  },
  {
    name: "Career Opportunities",
    email: "admin@greeklanka.com",
    contacts: [{ name: "HR Department", phone: "+94 777 232 271", availability: "Business Hours" }],
  },
]

const offices = [
  {
    name: "Head Office",
    address: "Level 5D, 46/7, Valiant Towers, Nawam Mawatha, Colombo 02, Sri Lanka. 00200",
    phone: "+94 777 232 271 (24/7)",
    alternatePhone: "+94 777 828 161 (24/7)",
    fax: "+94 112 083 206",
    email: "operations@greeklanka.com",
  },
  {
    name: "Galle and Hambantota Branch Office",
    address: "No.313, Circular Road, Magalle, Galle, Sri Lanka. 80000",
    phone: "+94 777 001 855 (24/7)",
    email: "operations@greeklanka.com",
  },
  {
    name: "Trincomalee Branch Office",
    address: "Dockyard Road, Trincomalee, Sri Lanka.",
    phone: "+94 777 001 855 (24/7)",
    email: "operations@greeklanka.com",
  },
]

export default function ContactPage() {
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Ready to discuss your maritime service needs? Our expert team is available 24/7 to assist you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-maritime-navy mb-6">Get in Touch</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Contact our expert team for immediate assistance with your maritime operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-0">
                  <Phone className="h-12 w-12 text-maritime-blue mx-auto mb-4" />
                  <h3 className="font-semibold text-maritime-navy mb-2">24/7 Operations</h3>
                  <p className="text-gray-600">+94 777 232 271</p>
                  <p className="text-gray-600">+94 777 191 114</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-0">
                  <Mail className="h-12 w-12 text-maritime-blue mx-auto mb-4" />
                  <h3 className="font-semibold text-maritime-navy mb-2">Email</h3>
                  <p className="text-gray-600">operations@greeklanka.com</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-0">
                  <Fax className="h-12 w-12 text-maritime-blue mx-auto mb-4" />
                  <h3 className="font-semibold text-maritime-navy mb-2">Fax</h3>
                  <p className="text-gray-600">+94 112 083 206</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-0">
                  <Clock className="h-12 w-12 text-maritime-blue mx-auto mb-4" />
                  <h3 className="font-semibold text-maritime-navy mb-2">Availability</h3>
                  <p className="text-gray-600">24/7 Emergency Support</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-maritime-navy mb-6">Departments</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Connect with the right department for your specific needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-6 hover:shadow-xl transition-all duration-300">
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-maritime-navy">{dept.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 text-maritime-blue mr-3" />
                        <span className="text-gray-600">{dept.email}</span>
                      </div>
                      {dept.additionalEmail && (
                        <div className="flex items-center">
                          <Mail className="h-5 w-5 text-maritime-blue mr-3" />
                          <span className="text-gray-600">{dept.additionalEmail}</span>
                        </div>
                      )}
                      {dept.contacts.map((contact, contactIndex) => (
                        <div key={contactIndex} className="border-t pt-3">
                          <p className="font-medium text-maritime-navy">{contact.name}</p>
                          <div className="flex items-center mt-1">
                            <Phone className="h-4 w-4 text-maritime-blue mr-2" />
                            <span className="text-gray-600">{contact.phone}</span>
                          </div>
                          <p className="text-sm text-maritime-blue mt-1">{contact.availability}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-maritime-navy mb-6">Office Locations</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Visit us at our strategically located offices across Sri Lanka
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-6 hover:shadow-xl transition-all duration-300">
                  <CardHeader className="p-0 mb-6">
                    <div className="flex items-center">
                      <Building className="h-8 w-8 text-maritime-blue mr-3" />
                      <CardTitle className="text-maritime-navy">{office.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-maritime-blue mr-3 mt-1" />
                        <span className="text-gray-600">{office.address}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 text-maritime-blue mr-3" />
                        <span className="text-gray-600">{office.phone}</span>
                      </div>
                      {office.alternatePhone && (
                        <div className="flex items-center">
                          <Phone className="h-5 w-5 text-maritime-blue mr-3" />
                          <span className="text-gray-600">{office.alternatePhone}</span>
                        </div>
                      )}
                      {office.fax && (
                        <div className="flex items-center">
                          <Fax className="h-5 w-5 text-maritime-blue mr-3" />
                          <span className="text-gray-600">{office.fax}</span>
                        </div>
                      )}
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 text-maritime-blue mr-3" />
                        <span className="text-gray-600">{office.email}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-maritime-navy mb-6">Send us a Message</h3>
              <p className="text-lg text-gray-600 mb-8">
                Have a question or need assistance? Fill out the form and our team will get back to you promptly.
              </p>
              <Card className="p-8">
                <CardContent className="p-0">
                  <form className="space-y-6">
                    <Input placeholder="Your Name" className="h-12" />
                    <Input placeholder="Your Email" type="email" className="h-12" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input placeholder="Phone Number" className="h-12" />
                      <Input placeholder="Company" className="h-12" />
                    </div>
                    <Textarea placeholder="Your Message" rows={6} />
                    <Button size="lg" className="w-full bg-maritime-blue hover:bg-maritime-blue/90">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl font-bold text-maritime-navy mb-6">Why Choose Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-maritime-blue rounded-full mt-3 mr-4"></div>
                    <div>
                      <h4 className="font-semibold text-maritime-navy mb-1">24/7 Availability</h4>
                      <p className="text-gray-600">
                        Round-the-clock support for all maritime emergencies and operations
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-maritime-blue rounded-full mt-3 mr-4"></div>
                    <div>
                      <h4 className="font-semibold text-maritime-navy mb-1">Expert Team</h4>
                      <p className="text-gray-600">Experienced maritime professionals with deep local knowledge</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-maritime-blue rounded-full mt-3 mr-4"></div>
                    <div>
                      <h4 className="font-semibold text-maritime-navy mb-1">Comprehensive Services</h4>
                      <p className="text-gray-600">Full range of maritime services under one roof</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-maritime-blue rounded-full mt-3 mr-4"></div>
                    <div>
                      <h4 className="font-semibold text-maritime-navy mb-1">Strategic Locations</h4>
                      <p className="text-gray-600">Offices at all major Sri Lankan ports for immediate support</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="p-6 bg-maritime-navy text-white">
                <CardContent className="p-0">
                  <h4 className="text-xl font-bold mb-4 text-maritime-gold">Emergency Contact</h4>
                  <p className="mb-4">For urgent maritime assistance, contact our 24/7 emergency hotline:</p>
                  <div className="flex items-center text-lg font-semibold">
                    <Phone className="h-5 w-5 mr-2" />
                    +94 777 232 271
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
