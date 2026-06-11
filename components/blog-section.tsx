"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    id: "posidonia-2026-thank-you-athens",
    date: "Jun 2026",
    title: "Posidonia 2026 | What a Week in Athens!",
    excerpt:
      "Posidonia 2026 was an incredible opportunity to reconnect with valued partners, meet new friends across the maritime industry, and explore exciting opportunities for the future. The event reinforced the importance of trust, relationships, and collaboration in an industry that remains driven by people.",
    content:
      "Posidonia 2026 is now behind us, and what a week it has been. Over the past few days, I had the opportunity to reconnect with long-standing partners, meet new friends from across the maritime industry, and discuss exciting opportunities for the future. On behalf of Greek Lanka Maritime Services, Oceanic Ship Chandlers, and Navigator Crew Management, I would like to sincerely thank everyone who took the time to visit us, meet with us, and share their thoughts and experiences. Seeing familiar faces, strengthening existing relationships, and building new connections reminded me once again that shipping remains a people-driven industry, where trust and partnerships matter above all else. A special thank you to our clients, partners, suppliers, and friends for your continued support and confidence in us. We truly value every relationship and look forward to turning many of our discussions in Athens into successful collaborations. Thank you, Athens. Thank you, Posidonia. Thank you to Christos Sideris, DynaRep Shipping Consultants, and the entire team. Now it's time to get back to work.",
    category: "Events & Networking",
  },
  {
    id: "people-development-session-who-am-i",
    date: "14 Feb 2026",
    title: 'People Development Session: "Who Am I?"',
    excerpt:
      "In today’s business world, companies cannot be built to depend on individuals. They must be built on strong systems run by skilled people. Over the past months, we have been strengthening that foundation through process thinking and our first People Development Session, “Who Am I?”—a step toward ownership, clarity, and sustainable growth.",
    content: "Full content of the blog post...",
    category: "People Development",
  },
  {
    id: "iso-awareness-strengthening-foundations",
    date: "14 Oct 2025",
    title: "Strengthening Our Foundations with ISO Awareness!",
    excerpt:
      "Our team at Greek Lanka completed a full ISO awareness program to ensure every service we deliver is safe, compliant & world-class.",
    content: "Full content of the blog post...",
    category: "Company News",
  },
  {
    id: "greek-lanka-5th-anniversary",
    date: "04 Aug 2025",
    title: "Greek Lanka 5th Year Anniversary Celebration",
    excerpt:
      "On July 19th, 2025, Greek Lanka Maritime Services celebrated five years of unwavering commitment to Sri Lanka’s maritime industry. Our team, partners, and friends gathered aboard a yacht off Colombo to honor our journey, achievements, and the values that guide us.",
    content: "Full content of the blog post...",
    category: "Milestone",
  },
];

export function BlogSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-maritime-navy mb-6">
            Latest News & Updates
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest developments in maritime services and
            industry insights
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-3">
                    <Badge
                      variant="secondary"
                      className="bg-maritime-blue/10 text-maritime-blue"
                    >
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <h3 className="font-semibold text-maritime-navy line-clamp-2 group-hover:text-maritime-blue transition-colors">
                    {post.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="p-0 h-auto text-maritime-blue hover:text-maritime-blue/80"
                    asChild
                  >
                    <Link href={`/blog/${post.id}`}>
                      Continue reading
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button size="lg" variant="outline" asChild>
            <Link href="/blog">
              View All Posts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
