"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

// Replace with your actual Web3Forms key
const WEB3FORMS_KEY = "9dbf1f19-3f76-4547-ab19-3dd6130d74f4";

export function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((f) => ({
      ...f,
      [name]: value,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setSuccess(null);
    setError(null);

    const contactBody: Record<string, any> = {
      access_key: WEB3FORMS_KEY,
      name: form.name,
      email: form.email,
      phone: form.phone,
      company: form.company,
      message: form.message,
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactBody),
      });
      const data = await res.json();
      if (!res.ok || data.success !== true) {
        throw new Error(data.message || "Failed to send message");
      }

      setSuccess("Thank you for contacting us! We will get back to you soon.");
      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    } catch (err: any) {
      setError(
        "Sorry, there was a problem sending your message. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

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
          <h2 className="text-4xl font-bold text-maritime-navy mb-6">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to discuss your maritime service needs? Contact our expert
            team today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-maritime-navy mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">
              <Card className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-maritime-blue mt-1" />
                    <div>
                      <h4 className="font-semibold text-maritime-navy mb-2">
                        24/7 Operations
                      </h4>
                      <p className="text-gray-600">+94-777-232-271</p>
                      <p className="text-gray-600">+94-777-191-114</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-maritime-blue mt-1" />
                    <div>
                      <h4 className="font-semibold text-maritime-navy mb-2">
                        Email
                      </h4>
                      <p className="text-gray-600">operations@greeklanka.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-maritime-blue mt-1" />
                    <div>
                      <h4 className="font-semibold text-maritime-navy mb-2">
                        Head Office
                      </h4>
                      <p className="text-gray-600">
                        Level 5D, 46/7, Valiant Towers,
                        <br />
                        Nawam Mawatha, Colombo 02,
                        <br />
                        Sri Lanka. 00200
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-maritime-blue mt-1" />
                    <div>
                      <h4 className="font-semibold text-maritime-navy mb-2">
                        Service Hours
                      </h4>
                      <p className="text-gray-600">24/7 Operations Support</p>
                      <p className="text-sm text-maritime-blue">
                        Always available for maritime emergencies
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-maritime-navy mb-6">
                  Send us a Message
                </h3>
                <form
                  className="space-y-6"
                  onSubmit={handleSubmit}
                  autoComplete="off"
                >
                  <input
                    type="hidden"
                    name="access_key"
                    value={WEB3FORMS_KEY}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Your Name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      disabled={submitting}
                    />
                    <Input
                      placeholder="Your Email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      disabled={submitting}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Phone Number"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      disabled={submitting}
                    />
                    <Input
                      placeholder="Company"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      disabled={submitting}
                    />
                  </div>
                  <Textarea
                    placeholder="Your Message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    required
                    disabled={submitting}
                  />
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
                    className="w-full bg-maritime-blue hover:bg-maritime-blue/90"
                    type="submit"
                    disabled={submitting}
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
  );
}
