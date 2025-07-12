"use client";

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

// No job openings yet
const jobOpenings: any[] = [];

export default function CareersPage() {
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
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center py-16"
            >
              {/* You can replace this SVG with your own illustration */}
              <svg
                width="120"
                height="120"
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mb-8"
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
              <h3 className="text-2xl md:text-3xl font-semibold text-maritime-navy mb-4">
                No job openings at the moment
              </h3>
              <p className="text-lg text-gray-600 max-w-xl text-center">
                Please check back soon or submit your CV below so we can reach
                out when an opportunity arises!
              </p>
            </motion.div>
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
                  <Card className="hover:shadow-xl transition-shadow duration-300 h-full">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-2xl text-maritime-navy">
                            {job.title}
                          </CardTitle>
                          <div className="flex items-center mt-2 text-maritime-blue">
                            <MapPin className="h-4 w-4 mr-2" />
                            <span>{job.location}</span>
                          </div>
                        </div>
                        <Badge
                          variant="outline"
                          className="border-maritime-blue text-maritime-blue"
                        >
                          {job.type}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <p className="text-gray-700">{job.description}</p>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="flex items-center">
                            <Banknote className="h-4 w-4 text-maritime-blue mr-2" />
                            <span className="text-sm">{job.salary}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 text-maritime-blue mr-2" />
                            <span className="text-sm">{job.experience}</span>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-maritime-navy mb-2">
                            Key Responsibilities:
                          </h4>
                          <ul className="list-disc pl-5 text-gray-700 space-y-1">
                            {job.responsibilities.map(
                              (item: string, i: number) => (
                                <li key={i}>{item}</li>
                              )
                            )}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-maritime-navy mb-2">
                            Requirements:
                          </h4>
                          <ul className="list-disc pl-5 text-gray-700 space-y-1">
                            {job.requirements.map((item: string, i: number) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex justify-between items-center pt-4 border-t">
                          <span className="text-sm text-gray-500">
                            Posted {job.posted}
                          </span>
                          <button className="bg-maritime-blue text-white px-4 py-2 rounded hover:bg-maritime-blue/90 transition-colors">
                            Apply Now
                          </button>
                        </div>
                      </div>
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
            <button className="bg-maritime-gold text-maritime-navy px-8 py-4 rounded-lg text-lg font-semibold hover:bg-maritime-gold/90 transition-colors">
              Submit Your CV
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
