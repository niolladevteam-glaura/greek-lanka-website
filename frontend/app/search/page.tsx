"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Search } from "lucide-react";

// Mock search function - replace with your actual search implementation
async function searchContent(query: string) {
  // In a real app, this would query your CMS, API, or search service
  // For demonstration, we'll use a mock dataset

  const allPages = [
    {
      id: 1,
      title: "Home",
      url: "/",
      excerpt: "Welcome to our maritime services company",
    },
    {
      id: 2,
      title: "About Us",
      url: "/about",
      excerpt: "Learn about our company history and mission",
    },
    {
      id: 3,
      title: "Services",
      url: "/services",
      excerpt: "Explore our comprehensive maritime services",
    },
    {
      id: 4,
      title: "Port Services",
      url: "/ports",
      excerpt: "Information about ports we operate in",
    },
    {
      id: 5,
      title: "Careers",
      url: "/careers",
      excerpt: "Join our team of maritime professionals",
    },
    {
      id: 6,
      title: "Accreditation",
      url: "/accreditation",
      excerpt: "Our industry certifications and standards",
    },
  ];

  // Simple case-insensitive search
  return allPages.filter(
    (page) =>
      page.title.toLowerCase().includes(query.toLowerCase()) ||
      page.excerpt.toLowerCase().includes(query.toLowerCase())
  );
}

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (query) {
      setIsLoading(true);
      searchContent(query).then((res) => {
        setResults(res);
        setIsLoading(false);
      });
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-maritime-navy mb-2">
            Search Results
          </h1>
          <p className="text-gray-600">
            {query ? `Results for "${query}"` : "Enter a search term to begin"}
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-maritime-blue"></div>
          </div>
        ) : results.length > 0 ? (
          <div className="space-y-6">
            {results.map((result) => (
              <div key={result.id} className="bg-white p-6 rounded-lg shadow">
                <Link href={result.url}>
                  <h2 className="text-xl font-semibold text-maritime-blue hover:underline">
                    {result.title}
                  </h2>
                </Link>
                <p className="text-gray-600 mt-2">{result.excerpt}</p>
                <Link
                  href={result.url}
                  className="inline-block mt-3 text-maritime-blue hover:text-maritime-blue/80 font-medium"
                >
                  Read more →
                </Link>
              </div>
            ))}
          </div>
        ) : query ? (
          <div className="text-center py-12">
            <Search className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-lg font-medium text-gray-900">
              No results found
            </h3>
            <p className="mt-1 text-gray-500">
              Try different search terms or check back later.
            </p>
          </div>
        ) : (
          <div className="text-center py-12">
            <Search className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-lg font-medium text-gray-900">
              Start your search
            </h3>
            <p className="mt-1 text-gray-500">
              Enter keywords in the search box to find what you're looking for.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
