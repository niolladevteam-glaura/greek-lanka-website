"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  Clock,
  DollarSign,
  MapPin,
  GraduationCap,
  User,
  Banknote,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

// Modal Component (simple, can use a library like @radix-ui/react-dialog for production)
function Modal({ open, onClose, children }: any) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-400 hover:text-maritime-blue text-2xl"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
}

const WEB3FORMS_API_KEY = "9dbf1f19-3f76-4547-ab19-3dd6130d74f4";

// SVG Illustration as a React Component
function MaritimeSVG() {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mb-4"
    >
      <rect width="120" height="120" rx="24" fill="#E5E7EB" />
      <path
        d="M60 40C56.6863 40 54 42.6863 54 46V74C54 77.3137 56.6863 80 60 80C63.3137 80 66 77.3137 66 74V46C66 42.6863 63.3137 40 60 40Z"
        fill="#93C5FD"
      />
      <path
        d="M60 36C53.3726 36 48 41.3726 48 48V74C48 80.6274 53.3726 86 60 86C66.6274 86 72 80.6274 72 74V48C72 41.3726 66.6274 36 60 36ZM70 74C70 79.5228 65.5228 84 60 84C54.4772 84 50 79.5228 50 74V48C50 42.4772 54.4772 38 60 38C65.5228 38 70 42.4772 70 48V74Z"
        fill="#60A5FA"
      />
    </svg>
  );
}

const jobOpenings: any[] = [
  {
    id: 1,
    title: "Trainee Operations Executive (Male)",
    image: "/Trainee-Operations-Executive-(Male).jpg",
  },
];

export default function CareersPage() {
  const [cvModal, setCvModal] = useState(false);
  const [cvForm, setCvForm] = useState({
    name: "",
    email: "",
    phone: "",
    file: null as File | null,
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Handle input changes
  function handleCvChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value, files } = e.target;
    if (name === "file" && files && files.length > 0) {
      setCvForm((f) => ({ ...f, file: files[0] }));
    } else {
      setCvForm((f) => ({ ...f, [name]: value }));
    }
  }

  // Handle form submit
  async function handleCvSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setSuccess(null);
    setError(null);

    // Prepare form data for WEB3Forms
    const data = new FormData();
    data.append("access_key", WEB3FORMS_API_KEY);
    data.append("subject", "Career Application via Website");
    data.append("name", cvForm.name);
    data.append("email", cvForm.email);
    data.append("phone", cvForm.phone);
    if (cvForm.file) data.append("attachment", cvForm.file);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const result = await res.json();
      if (result.success !== true) throw new Error(result.message);
      setSuccess(
        "CV submitted successfully! We'll get in touch if there is a match."
      );
      setCvForm({ name: "", email: "", phone: "", file: null });
    } catch (err: any) {
      setError("Failed to submit CV. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

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
              Build Your Career in Maritime Excellence
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Join our team and be part of Sri Lanka's premier maritime services
              provider. Explore exciting opportunities across our port network.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-maritime-navy mb-4">
              Current Job Openings
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're looking for talented professionals to join our growing team
            </p>
          </motion.div>

          {jobOpenings.length === 0 ? (
            <></>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {jobOpenings.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col items-center justify-center bg-white border border-gray-200">
                    <CardHeader className="w-full">
                      <CardTitle className="text-center text-maritime-navy text-xl">
                        {job.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="w-full flex justify-center items-center p-6">
                      {job.image && (
                        <div className="flex flex-col items-center w-full">
                          <Image
                            src={job.image}
                            alt={job.title}
                            width={500}
                            height={700}
                            className="rounded-lg object-contain border border-gray-200 shadow-lg bg-white"
                            style={{
                              maxHeight: 700,
                              width: "auto",
                              height: "auto",
                              maxWidth: "100%",
                            }}
                            priority
                          />
                          <a
                            href={job.image}
                            download
                            className="mt-4 inline-block bg-maritime-blue text-white px-4 py-2 rounded hover:bg-maritime-blue/90 transition-colors text-sm"
                          >
                            Download Image
                          </a>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-maritime-navy mb-4">
              Why Join Our Team?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer more than just jobs - we build careers in the maritime
              industry
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: User,
                title: "Professional Growth",
                description:
                  "Continuous training and development programs to advance your maritime career",
              },
              {
                icon: Briefcase,
                title: "Dynamic Environment",
                description:
                  "Work in a fast-paced, international setting with cutting-edge port technology",
              },
              {
                icon: GraduationCap,
                title: "Learning Culture",
                description:
                  "Opportunities to gain expertise in all aspects of port operations and management",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-6 text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="bg-maritime-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon className="h-8 w-8 text-maritime-blue" />
                    </div>
                    <h3 className="text-xl font-semibold text-maritime-navy mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-700">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section className="py-20 px-4 bg-maritime-navy text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Embark on Your Maritime Career?
            </h2>
            <p className="text-xl text-maritime-gold max-w-3xl mx-auto mb-8">
              Even if you don't see the perfect role now, we're always
              interested in meeting talented professionals.
            </p>
            <Button
              className="bg-maritime-gold text-maritime-navy px-8 py-4 rounded-lg text-lg font-semibold hover:bg-maritime-gold/90 transition-colors"
              onClick={() => setCvModal(true)}
            >
              Submit Your CV
            </Button>
          </motion.div>
        </div>
      </section>
      {/* CV Submit Modal */}
      <Modal open={cvModal} onClose={() => setCvModal(false)}>
        <h2 className="text-2xl font-bold mb-4 text-maritime-navy">
          Submit Your CV
        </h2>
        <form className="space-y-4" onSubmit={handleCvSubmit}>
          <div>
            <label className="block text-gray-700 mb-1">Full Name</label>
            <Input
              name="name"
              value={cvForm.name}
              onChange={handleCvChange}
              required
              disabled={submitting}
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <Input
              name="email"
              type="email"
              value={cvForm.email}
              onChange={handleCvChange}
              required
              disabled={submitting}
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Phone (optional)</label>
            <Input
              name="phone"
              value={cvForm.phone}
              onChange={handleCvChange}
              disabled={submitting}
              placeholder="Your Phone Number"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">
              CV / Resume (PDF, DOC, DOCX)
            </label>
            <Input
              name="file"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleCvChange}
              required
              disabled={submitting}
            />
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
            type="submit"
            className="w-full bg-maritime-blue hover:bg-maritime-blue/90 text-white"
            disabled={submitting}
          >
            {submitting ? "Submitting..." : "Submit CV"}
          </Button>
        </form>
      </Modal>
    </div>
  );
}
