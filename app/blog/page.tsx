"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const blogPosts = [
  {
    id: "from-alexanders-legacy-to-greek-lanka",
    date: "24 Jul 2026",
    title: "From Alexander’s Legacy to Greek Lanka: Greece in Sri Lanka",
    excerpt:
      "We are honored to share an article by Billy Cotsis, published in Neos Kosmos, exploring the historical ties between Greece and Sri Lanka while highlighting his visit to Greek Lanka Maritime Services and our commitment to the global maritime industry.",
    content:
      "We are honored to feature this article written by Billy Cotsis following his visit to Greek Lanka Maritime Services (Pvt) Ltd. in Colombo, Sri Lanka. The article offers a unique Greek perspective on the long-standing historical connections between Greece and Sri Lanka while sharing the author's personal experience visiting our company, meeting our Managing Director, Mr. Udith Kalupahana, and learning about our commitment to serving the global maritime industry. We sincerely thank Billy Cotsis for capturing our story and the shared values that continue to strengthen the relationship between Greece and Sri Lanka. Read the full article here: https://neoskosmos.com/en/2026/07/17/life/from-alexanders-legacy-to-greek-lanka-greece-in-sri-lanka/. Originally published by Neos Kosmos: https://neoskosmos.com/en/.",
    category: "Media & Press",
  },
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
  {
    id: "making-a-difference-one-smile",
    date: "09 Mar 2025",
    title: "Making a Different One Smile at a Time!",
    excerpt:
      "We're excited to share the heart-warming journey of Harbour of Smiles' recent CSR initiative at Ibulgolla Primary...",
    content: "Full content of the blog post...",
    category: "CSR",
  },
  {
    id: "greek-lanka-dry-docking-support",
    date: "22 Aug 2024",
    title:
      "Greek Lanka offers comprehensive Dry Docking support for the vessels calling at Colombo Dockyard PLC",
    excerpt:
      "Comprehensive dry docking services and technical support for maritime vessels.",
    content: "Full content of the blog post...",
    category: "Services",
  },
  {
    id: "discover-sri-lanka-seas",
    date: "22 Aug 2024",
    title:
      "Discover the Splendor of Sri Lanka's Seas: Unleashing Our Maritime Services across All Four Majestic Ports!",
    excerpt:
      "Exploring our comprehensive maritime services across Colombo, Galle, Hambantota, and Trincomalee ports.",
    content: "Full content of the blog post...",
    category: "Ports",
  },
  {
    id: "ship-spares-logistics-guarantee",
    date: "22 Aug 2024",
    title: "We guarantee the best solution for your ship's spare logistics.",
    excerpt:
      "Professional ship spares logistics and supply chain management solutions.",
    content: "Full content of the blog post...",
    category: "Logistics",
  },
  {
    id: "crew-change-services",
    date: "22 Aug 2024",
    title: "Crew Change",
    excerpt:
      "Expert port agency crew change solutions for seamless transitions in Sri Lankan ports.",
    content: "Full content of the blog post...",
    category: "Services",
  },
  {
    id: "underwater-services-repairs",
    date: "22 Aug 2024",
    title: "Under Water Services & Repairs",
    excerpt:
      "Comprehensive underwater inspection and marine repair services for vessels at all major Sri Lankan ports.",
    content: "Full content of the blog post...",
    category: "Services",
  },
  {
    id: "emergency-medical-assistance",
    date: "22 Aug 2024",
    title: "Emergency Medical Assistance",
    excerpt:
      "Reliable emergency medical assistance for vessels and crew in Sri Lankan waters, with swift response and expert care.",
    content: "Full content of the blog post...",
    category: "Services",
  },
  {
    id: "bunkering-services-south-asia",
    date: "22 Aug 2024",
    title: "Looking for Bunkering Services in the Heart of South Asia?",
    excerpt:
      "World-class vessel bunkering solutions at Sri Lanka's premier maritime facility, offering quality fuel, expert support, and competitive rates.",
    content: "Full content of the blog post...",
    category: "Services",
  },
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(blogPosts.map((post) => post.category)),
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

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
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Latest News & Updates
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Stay informed with the latest developments in maritime services
              and industry insights
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Search and Filter Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 sm:mb-16"
          >
            {/* Search Bar */}
            <div className="max-w-xl mx-auto mb-6 sm:mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-10 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-maritime-blue focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                    selectedCategory === category
                      ? "bg-maritime-blue text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Blog Posts Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full flex flex-col border border-gray-200 hover:border-maritime-blue/30 hover:shadow-lg transition-all duration-300">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-3">
                        <Badge className="bg-maritime-blue/10 text-maritime-blue hover:bg-maritime-blue/20">
                          {post.category}
                        </Badge>
                        <div className="flex items-center text-xs text-gray-500">
                          <Calendar className="h-3 w-3 mr-1" />
                          {post.date}
                        </div>
                      </div>
                      <h3 className="font-semibold text-lg text-maritime-navy leading-snug line-clamp-2">
                        {post.title}
                      </h3>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="mt-auto">
                        <Button
                          variant="link"
                          size="sm"
                          className="p-0 text-maritime-blue hover:text-maritime-blue/80 hover:no-underline"
                          asChild
                        >
                          <Link
                            href={`/blog/${post.id}`}
                            className="flex items-center"
                          >
                            Read more
                            <ArrowRight className="ml-1 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 sm:py-20"
            >
              <h3 className="text-lg sm:text-xl font-medium text-gray-600 mb-4">
                No articles found matching your criteria
              </h3>
              <Button
                variant="outline"
                size="sm"
                className="text-maritime-blue border-maritime-blue hover:bg-maritime-blue/10"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
              >
                Clear filters
              </Button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
