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
    id: 1,
    date: "09 Mar 2025",
    title: "𝐌𝐚𝐤𝐢𝐧𝐠 𝐚 𝐃𝐢𝐟𝐟𝐞𝐫𝐞𝐧𝐜𝐞, 𝐎𝐧𝐞 𝐒𝐦𝐢𝐥𝐞 𝐚𝐭 𝐚 𝐓𝐢𝐦𝐞!",
    excerpt:
      "We're excited to share the heart-warming journey of Harbour of Smiles' recent CSR initiative at Ibulgolla Primary...",
    content: "Full content of the blog post...",
    category: "CSR",
  },
  {
    id: 2,
    date: "22 Aug 2024",
    title:
      "Greek Lanka offers comprehensive Dry Docking support for the vessels calling at Colombo Dockyard PLC",
    excerpt:
      "Comprehensive dry docking services and technical support for maritime vessels.",
    content: "Full content of the blog post...",
    category: "Services",
  },
  {
    id: 3,
    date: "22 Aug 2024",
    title:
      "Discover the Splendor of Sri Lanka's Seas: Unleashing Our Maritime Services across All Four Majestic Ports!",
    excerpt:
      "Exploring our comprehensive maritime services across Colombo, Galle, Hambantota, and Trincomalee ports.",
    content: "Full content of the blog post...",
    category: "Ports",
  },
  {
    id: 4,
    date: "22 Aug 2024",
    title: "We guarantee the best solution for your ship's spare logistics.",
    excerpt:
      "Professional ship spares logistics and supply chain management solutions.",
    content: "Full content of the blog post...",
    category: "Logistics",
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
