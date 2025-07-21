import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const filePath = path.join(
    process.cwd(),
    "content/blogs",
    `${params.slug}.md`
  );
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  // Use regex to split Markdown into sections
  // This will separate the desired sections by their headings
  const markdownSections = content.split(/(?:^|\n)## /).map((section, i) => {
    // For first section, don't add the heading
    if (i === 0) return section;
    // Get heading text
    const headingMatch = section.match(/^([^\n]+)\n?/);
    const heading = headingMatch ? headingMatch[1] : "";
    const body = section.replace(/^([^\n]+)\n?/, "");
    return { heading, body };
  });

  return (
    <>
      {/* Section Header */}
      <section className="bg-[#003354] pt-24 pb-16 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-white font-extrabold text-5xl md:text-6xl mb-6 drop-shadow">
            {data.title}
          </h1>
        </div>
      </section>

      {/* Blog Post Content */}
      <section className="py-12 px-4 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          {/* Header Image */}
          {data.headerImage && (
            <div className="w-full mb-8">
              <Image
                src={data.headerImage}
                alt={data.title}
                width={1200}
                height={600}
                layout="responsive"
                className="rounded-lg"
                priority
              />
            </div>
          )}

          {/* Title, date, category */}
          <div className="mb-6">
            <h2 className="text-4xl font-bold text-maritime-navy mb-4">
              {data.title}
            </h2>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="h-4 w-4 mr-1" />
                {data.date}
              </div>
              <Badge
                variant="secondary"
                className="bg-maritime-blue/10 text-maritime-blue"
              >
                {data.category}
              </Badge>
            </div>
          </div>
          {/* Excerpt */}
          {data.excerpt && (
            <p className="text-lg text-gray-600 mb-8">{data.excerpt}</p>
          )}

          {/* Blog Sections */}
          <div className="prose prose-lg max-w-none text-gray-900 mb-12">
            {/* First section is usually intro */}
            <ReactMarkdown>
              {typeof markdownSections[0] === "string"
                ? markdownSections[0]
                : ""}
            </ReactMarkdown>

            {/* Render desired sections with big headings */}
            {markdownSections.slice(1).map((section, idx) => {
              if (typeof section === "string") return null;
              // Only show specific sections you want highlighted
              const highlightHeadings = [
                "Preparation Meets Purpose",
                "Gifts That Inspire",
                "A Heartfelt Welcome",
                "Supporting Families, Building Futures",
                "A Promise to Continue",
              ];
              if (highlightHeadings.includes(section.heading)) {
                return (
                  <div key={section.heading} className="my-10">
                    <h3 className="text-2xl font-semibold text-maritime-navy mb-4">
                      {section.heading}
                    </h3>
                    <ReactMarkdown>{section.body}</ReactMarkdown>
                  </div>
                );
              }
              // Other sections (like intro, etc.)
              return (
                <div key={section.heading} className="my-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {section.heading}
                  </h3>
                  <ReactMarkdown>{section.body}</ReactMarkdown>
                </div>
              );
            })}
          </div>
          {/* Blog Images gallery */}
          {data.images && data.images.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {data.images.map((img: string, idx: number) => (
                <div key={img} className="w-full">
                  <Image
                    src={img}
                    alt={`Blog image ${idx + 1}`}
                    width={900}
                    height={600}
                    className="rounded-lg object-cover w-full h-auto"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Back to blog list button */}
          <div className="text-center mt-8">
            <Button size="lg" variant="outline" asChild>
              <Link href="/blog">← Back to Blog List</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
