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

const jobOpenings = [
  {
    id: 1,
    title: "Port Operations Manager",
    location: "Port of Colombo",
    type: "Full-time",
    salary: "Competitive Package",
    experience: "5+ years in port operations",
    description:
      "Lead and oversee all port operations ensuring efficiency and compliance with international standards.",
    responsibilities: [
      "Manage daily port operations",
      "Coordinate with shipping agencies",
      "Ensure safety regulations compliance",
      "Optimize cargo handling processes",
      "Lead operational team",
    ],
    requirements: [
      "Degree in Maritime Operations or related field",
      "Proven leadership experience",
      "Knowledge of port management systems",
      "Excellent problem-solving skills",
    ],
    posted: "2 days ago",
  },
  {
    id: 2,
    title: "Marine Engineer",
    location: "Port of Hambantota",
    type: "Full-time",
    salary: "LKR 250,000 - 350,000",
    experience: "3+ years in marine engineering",
    description:
      "Maintain and repair port machinery and equipment to ensure smooth operations.",
    responsibilities: [
      "Inspect and maintain port equipment",
      "Troubleshoot mechanical issues",
      "Implement preventive maintenance",
      "Ensure compliance with safety standards",
    ],
    requirements: [
      "Bachelor's in Mechanical/Marine Engineering",
      "Relevant certifications",
      "Experience with heavy machinery",
      "Strong technical skills",
    ],
    posted: "1 week ago",
  },
  {
    id: 3,
    title: "Cargo Handling Supervisor",
    location: "Port of Galle",
    type: "Contract",
    salary: "LKR 180,000 - 220,000",
    experience: "2+ years in cargo operations",
    description:
      "Supervise cargo handling operations to ensure efficient loading/unloading of vessels.",
    responsibilities: [
      "Supervise cargo handling team",
      "Coordinate with vessel crews",
      "Maintain accurate records",
      "Ensure safe handling procedures",
    ],
    requirements: [
      "Diploma in Logistics or related field",
      "Forklift certification preferred",
      "Knowledge of cargo handling equipment",
      "Leadership skills",
    ],
    posted: "3 days ago",
  },
  {
    id: 4,
    title: "Port Security Officer",
    location: "Port of Trincomalee",
    type: "Full-time",
    salary: "LKR 200,000 - 250,000",
    experience: "3+ years in security operations",
    description:
      "Ensure security of port facilities and compliance with ISPS code requirements.",
    responsibilities: [
      "Monitor port security systems",
      "Conduct regular security checks",
      "Implement security protocols",
      "Coordinate with law enforcement",
    ],
    requirements: [
      "Background in security/military/police",
      "ISPS code knowledge",
      "Security management training",
      "First aid certification",
    ],
    posted: "5 days ago",
  },
];

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
                          {job.responsibilities.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-maritime-navy mb-2">
                          Requirements:
                        </h4>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                          {job.requirements.map((item, i) => (
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
