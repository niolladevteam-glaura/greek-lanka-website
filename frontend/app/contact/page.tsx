"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  VoicemailIcon as Fax,
  Building,
  User,
  Anchor,
  Ship,
  LifeBuoy,
  Waves,
} from "lucide-react";
import Image from "next/image";

const departments = [
  {
    name: "Operations Department",
    //email: "operations@greeklanka.com",
    contacts: [
      {
        name: "Udith Kalupahana (Mr)",
        phone: "+94 777 232 271",
        availability: "24/7",
      },
      {
        name: "Yasith Kalupahana (Mr)",
        phone: "+94 777 001 855",
        availability: "24/7",
      },
      {
        name: "Sajith Madushan (Mr)",
        phone: "+94 777 828 161",
        availability: "24/7",
      },
    ],
    icon: <Ship className="h-6 w-6" />,
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    name: "Disbursement Department",
    //email: "disbursement@greeklanka.com",
    contacts: [
      {
        name: "Yasith Kalupahana (Mr)",
        phone: "+94 703 310 992",
        availability: "24/7",
      },
    ],
    additionalEmail: "accounts@greeklanka.com",
    icon: <Anchor className="h-6 w-6" />,
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    name: "Career Opportunities",
    //email: "admin@greeklanka.com",
    contacts: [
      {
        name: "Amal Pathirana (Mr)",
        phone: "+94 777 844 214",
        availability: "Business Hours",
      },
    ],
    icon: <User className="h-6 w-6" />,
    color: "bg-purple-500/10 text-purple-600",
  },
];

const offices = [
  {
    name: "Head Office",
    address:
      "Level 5D, 46/7, Valiant Towers, Nawam Mawatha, Colombo 02, Sri Lanka. 00200",
    phone: "+94 777 232 271",
    phoneLabel: "24/7",
    alternatePhone: "+94 777 828 161",
    alternatePhoneLabel: "24/7",
    fax: "+94 112 083 206",
    email: "operations@greeklanka.com",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.923794885567!2d79.8475876!3d6.9188751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25999d7df5973%3A0xde2468363e0ed0e!2sGREEK%20LANKA%20MARITIME%20SERVICES%20(PVT)%20LTD!5e0!3m2!1sen!2slk!4v1718547897291!5m2!1sen!2slk",
  },
  {
    name: "Galle and Hambantota Branch Office",
    address: "No.313, Circular Road, Magalle, Galle, Sri Lanka. 80000",
    phone: "+94 777 001 855",
    phoneLabel: "24/7",
    email: "operations@greeklanka.com",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.073187899999!2d80.2147228!3d6.0313114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae173bb6934f7a5%3A0x3b4a1f9a5a5b5b5b!2sCircular%20Rd%2C%20Galle!5e0!3m2!1sen!2slk!4v1718548000000!5m2!1sen!2slk",
  },
  {
    name: "Trincomalee Branch Office",
    address: "Dockyard Road, Trincomalee, Sri Lanka.",
    phone: "+94 777 001 855",
    phoneLabel: "24/7",
    email: "operations@greeklanka.com",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.7313749999997!2d81.2286118!3d8.5641667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afbbcb87c0d5f5f%3A0x3b4a1f9a5a5b5b5b!2sDockyard%20Rd%2C%20Trincomalee!5e0!3m2!1sen!2slk!4v1718548050000!5m2!1sen!2slk",
  },
];

const teamMembers = [
  {
    name: "Udith Kalupahana",
    position: "Managing Director",
    phone: "+94 77 723 2271",
    //email: "udith@greeklanka.com",
    image: "/team/udith.jpg",
  },
  {
    name: "Yasith Kalupahana",
    position: "Asst.Manager - Business Development",
    phone: "+94 70 331 0992",
    //email: "yasith@greeklanka.com",
    image: "/team/yasith.jpg",
  },
  {
    name: "Sajith Madushan",
    position: "Asst.Manager - Operations",
    phone: "+94 777 828 161",
    //email: "sajith@greeklanka.com",
    image: "/team/sajith.jpg",
  },
  {
    name: "Amal Pathirana",
    position: "Financial Controller",
    phone: "+94 777 844 214",
    //email: "amal@greeklanka.com",
    image: "/team/nimali.jpg",
  },
];

// Utility: Split full name to first/last name (very simple)
function splitName(fullName: string) {
  const parts = fullName.trim().split(" ");
  if (parts.length < 2) return { firstName: fullName, lastName: "" };
  return {
    firstName: parts.slice(0, -1).join(" "),
    lastName: parts.at(-1) || "",
  };
}

export default function ContactPage() {
  // ---- State for form fields ----
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    subscribeNewsletter: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // ---- Handle input for all fields ----
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    const { name, value, type } = target;
    setForm((f) => ({
      ...f,
      [name]:
        type === "checkbox" && "checked" in target
          ? (target as HTMLInputElement).checked
          : value,
    }));
  }

  // ---- Form Submit Handler ----
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setSuccess(null);
    setError(null);

    // Split name
    const { firstName, lastName } = splitName(form.name);

    // Prepare contact body
    const contactBody = {
      firstName,
      lastName,
      email: form.email,
      subject: form.subject,
      phone: form.phone,
      company: form.company,
      message: form.message,
    };

    try {
      // Send contact message
      const res = await fetch("http://localhost:4000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactBody),
      });
      if (!res.ok) throw new Error("Failed to send message");

      // Optionally subscribe to newsletter
      if (form.subscribeNewsletter && form.email) {
        await fetch("http://localhost:4000/api/newsletter/subscribe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: form.email }),
        });
      }

      setSuccess(
        "Thank you for contacting us! Our maritime experts will get back to you within 24 hours."
      );
      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
        subscribeNewsletter: false,
      });
    } catch (err: any) {
      setError(
        "Sorry, there was a problem sending your message. Please try again or contact us via phone/email."
      );
    } finally {
      setSubmitting(false);
    }
  }
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 bg-maritime-gradient text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20 z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Connect With Us
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Your trusted maritime partner in Sri Lanka. Our expert team is
              available 24/7 to ensure smooth sailing for your operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/wave-pattern.svg')] bg-repeat"></div>
        </div>
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-600 mb-4">
              Always Available
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Direct Lines to Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Immediate access to maritime experts through multiple channels
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: <Phone className="h-8 w-8" />,
                title: "24/7 Operations",
                content: (
                  <div className="space-y-1">
                    <a
                      href="tel:+94777232271"
                      className="block hover:text-blue-600 transition-colors font-medium"
                    >
                      +94 777 232 271
                    </a>
                    <a
                      href="tel:+94777191114"
                      className="block hover:text-blue-600 transition-colors font-medium"
                    >
                      +94 777 191 114
                    </a>
                  </div>
                ),
                bg: "bg-blue-600",
                ring: "ring-blue-100",
              },
              {
                icon: <Mail className="h-8 w-8" />,
                title: "Email Support",
                content: (
                  <a
                    href="mailto:operations@greeklanka.com"
                    className="block hover:text-blue-600 transition-colors font-medium py-3"
                  >
                    operations@greeklanka.com
                  </a>
                ),
                bg: "bg-emerald-600",
                ring: "ring-emerald-100",
              },
              {
                icon: <Fax className="h-8 w-8" />,
                title: "Fax",
                content: (
                  <span className="block py-3 font-medium">
                    +94 112 083 206
                  </span>
                ),
                bg: "bg-purple-600",
                ring: "ring-purple-100",
              },
              {
                icon: <LifeBuoy className="h-8 w-8" />,
                title: "Emergency",
                content: (
                  <span className="block py-3 font-medium">24/7 Support</span>
                ),
                bg: "bg-red-600",
                ring: "ring-red-100",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <div
                  className={`p-1 rounded-2xl ${item.ring} transition-all hover:ring-4 h-full`}
                >
                  {" "}
                  <div className="h-full bg-white rounded-xl shadow-sm p-6 flex flex-col">
                    <div
                      className={`h-14 w-14 ${item.bg} rounded-xl flex items-center justify-center text-white mb-6`}
                    >
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <div className="text-gray-600 text-sm mt-auto">
                      {" "}
                      {item.content}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-maritime-navy mb-4">
              Our Key Team Members
            </h2>
            <div className="w-24 h-1 bg-maritime-blue mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated professionals who make it all happen
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full transition-all duration-300 hover:shadow-lg p-6">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-bold text-maritime-navy mb-1">
                      {member.name}
                    </h3>
                    <p className="text-maritime-blue mb-4">{member.position}</p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-2 text-gray-500" />
                        <a
                          href={`tel:${member.phone}`}
                          className="text-sm hover:text-maritime-blue"
                        >
                          {member.phone}
                        </a>
                      </div>
                      {/* <div className="flex items-center">
                        <Mail className="h-4 w-4 mr-2 text-gray-500" />
                        <a
                          href={`mailto:${member.email}`}
                          className="text-sm hover:text-maritime-blue"
                        >
                          {member.email}
                        </a>
                      </div> */}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-600 mb-4">
              Specialized Teams
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Department Contacts
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Connect directly with our specialized maritime teams
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
                <div className="h-full group relative overflow-hidden rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 z-0"></div>
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="p-6">
                      <div
                        className={`h-12 w-12 ${dept.color} rounded-lg flex items-center justify-center mb-4`}
                      >
                        {dept.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {dept.name}
                      </h3>

                      <div className="mt-6 space-y-4">
                        <div>
                          {/* <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                            Email
                          </h4>
                          <a
                            href={`mailto:${dept.email}`}
                            className="text-blue-600 hover:underline flex items-center font-medium"
                          >
                            <Mail className="h-4 w-4 mr-2" />
                            {dept.email}
                          </a> */}
                          {/* {dept.additionalEmail && (
                            <a
                              href={`mailto:${dept.additionalEmail}`}
                              className="text-blue-600 hover:underline flex items-center mt-1 font-medium"
                            >
                              <Mail className="h-4 w-4 mr-2" />
                              {dept.additionalEmail}
                            </a>
                          )} */}
                        </div>

                        <div>
                          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                            Contacts
                          </h4>
                          {dept.contacts.map((contact, contactIndex) => (
                            <div key={contactIndex} className="mb-4 last:mb-0">
                              <p className="font-medium text-gray-900">
                                {contact.name}
                              </p>
                              <a
                                href={`tel:${contact.phone.replace(/\D/g, "")}`}
                                className="text-gray-600 hover:text-blue-600 flex items-center mt-1 font-medium"
                              >
                                <Phone className="h-4 w-4 mr-2" />
                                {contact.phone}
                              </a>
                              <div className="flex items-center text-sm text-blue-600 mt-1">
                                <Clock className="h-3 w-3 mr-1" />
                                {contact.availability}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-auto p-6 pt-0">
                      {/* <Button
                        variant="outline"
                        className="w-full border-gray-300 hover:border-blue-300"
                      >
                        Contact Department
                      </Button> */}
                    </div>
                  </div>

                  {/* Decorative element */}
                  {/* <div className="absolute bottom-0 right-0 h-32 w-32 bg-blue-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-1/2 translate-y-1/2"></div> */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations with Maps */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-maritime-navy mb-4">
              Our Offices
            </h2>
            <div className="w-24 h-1 bg-maritime-blue mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Strategically located across Sri Lanka for your convenience
            </p>
          </motion.div>

          <div className="space-y-12">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              >
                <Card className="h-full border border-gray-200 rounded-lg overflow-hidden">
                  <CardHeader className="bg-maritime-navy p-4">
                    <div className="flex items-center">
                      <Building className="h-6 w-6 text-white mr-3" />
                      <CardTitle className="text-white">
                        {office.name}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-500 mb-2">
                          ADDRESS
                        </h4>
                        <a
                          href={`https://maps.google.com/?q=${encodeURIComponent(
                            office.address
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-maritime-blue flex items-start"
                        >
                          <MapPin className="h-4 w-4 mr-2 mt-1" />
                          {office.address}
                        </a>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-gray-500 mb-2">
                          CONTACT
                        </h4>
                        <a
                          href={`tel:${office.phone.replace(/\D/g, "")}`}
                          className="text-gray-600 hover:text-maritime-blue flex items-center"
                        >
                          <Phone className="h-4 w-4 mr-2" />
                          {office.phone}{" "}
                          <span className="text-sm ml-2">
                            ({office.phoneLabel})
                          </span>
                        </a>
                        {office.alternatePhone && (
                          <a
                            href={`tel:${office.alternatePhone.replace(
                              /\D/g,
                              ""
                            )}`}
                            className="text-gray-600 hover:text-maritime-blue flex items-center mt-1"
                          >
                            <Phone className="h-4 w-4 mr-2" />
                            {office.alternatePhone}{" "}
                            <span className="text-sm ml-2">
                              ({office.alternatePhoneLabel})
                            </span>
                          </a>
                        )}
                        {office.fax && (
                          <div className="flex items-center text-gray-600 mt-1">
                            <Fax className="h-4 w-4 mr-2" />
                            {office.fax}
                          </div>
                        )}
                        <a
                          href={`mailto:${office.email}`}
                          className="text-maritime-blue hover:underline flex items-center mt-1"
                        >
                          <Mail className="h-4 w-4 mr-2" />
                          {office.email}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="h-full rounded-lg overflow-hidden shadow-md">
                  <iframe
                    src={office.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: "300px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl font-bold text-maritime-navy mb-4">
                  Get in Touch
                </h3>
                <div className="w-16 h-1 bg-maritime-blue mb-6"></div>
                <p className="text-lg text-gray-600 mb-8">
                  Have questions or need a quote? Fill out the form and our
                  maritime experts will get back to you within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: <LifeBuoy className="h-6 w-6 text-maritime-blue" />,
                    title: "24/7 Emergency Support",
                    description:
                      "Immediate assistance for urgent maritime situations",
                  },
                  {
                    icon: <Ship className="h-6 w-6 text-maritime-blue" />,
                    title: "Vessel Operations",
                    description:
                      "Comprehensive support for all your vessel needs",
                  },
                  {
                    icon: <User className="h-6 w-6 text-maritime-blue" />,
                    title: "Personalized Service",
                    description: "Dedicated account managers for your business",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="p-2 bg-blue-50 rounded-lg mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-maritime-navy">
                        {item.title}
                      </h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Card className="bg-maritime-navy text-white">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-4 text-maritime-gold">
                    Emergency Contact
                  </h4>
                  <p className="mb-4">
                    For urgent maritime assistance that can't wait, contact our
                    24/7 emergency hotline:
                  </p>
                  <a
                    href="tel:+94777232271"
                    className="flex items-center text-xl font-semibold hover:text-maritime-gold transition-colors"
                  >
                    <Phone className="h-6 w-6 mr-3" />
                    +94 777 232 271
                  </a>
                </CardContent>
              </Card>
            </motion.div>

            {/* ---- Updated Contact Form ---- */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <form
                    className="space-y-6"
                    onSubmit={handleSubmit}
                    autoComplete="off"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Full Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your Name"
                          className="h-12"
                          value={form.name}
                          onChange={handleChange}
                          required
                          disabled={submitting}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          placeholder="Your Email"
                          type="email"
                          className="h-12"
                          value={form.email}
                          onChange={handleChange}
                          required
                          disabled={submitting}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Phone
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          placeholder="Phone Number"
                          className="h-12"
                          value={form.phone}
                          onChange={handleChange}
                          disabled={submitting}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Company
                        </label>
                        <Input
                          id="company"
                          name="company"
                          placeholder="Your Company"
                          className="h-12"
                          value={form.company}
                          onChange={handleChange}
                          disabled={submitting}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Subject"
                        className="h-12"
                        value={form.subject}
                        onChange={handleChange}
                        required
                        disabled={submitting}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Your Message"
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        required
                        disabled={submitting}
                      />
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="subscribeNewsletter"
                        name="subscribeNewsletter"
                        className="mr-2"
                        checked={form.subscribeNewsletter}
                        onChange={handleChange}
                        disabled={submitting}
                      />
                      <label
                        htmlFor="subscribeNewsletter"
                        className="text-sm text-gray-700"
                      >
                        Subscribe to our newsletter
                      </label>
                    </div>

                    {success && (
                      <div className="p-3 bg-green-100 text-green-800 rounded-md text-sm text-center">
                        {success}
                      </div>
                    )}
                    {error && (
                      <div className="p-3 bg-red-100 text-red-800 rounded-md text-sm text-center">
                        {error}
                      </div>
                    )}

                    <Button
                      size="lg"
                      className="w-full bg-maritime-blue hover:bg-maritime-blue/90 text-white"
                      disabled={submitting}
                      type="submit"
                    >
                      {submitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
