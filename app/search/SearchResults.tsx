"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Search } from "lucide-react";

// Mock search function - replace with your actual search implementation
async function searchContent(query: string) {
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

export default function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let active = true;
    if (query) {
      setIsLoading(true);
      searchContent(query).then((res) => {
        if (active) {
          setResults(res);
          setIsLoading(false);
        }
      });
    } else {
      setResults([]);
    }
    return () => {
      active = false;
    };
  }, [query]);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-maritime-navy mb-1">
            Search Results
          </h1>
          <p className="text-gray-600 text-base">
            {query ? `Results for "${query}"` : "Enter a search term to begin"}
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-10">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-maritime-blue"></div>
          </div>
        ) : results.length > 0 ? (
          <div className="space-y-5">
            {results.map((result) => (
              <div key={result.id} className="bg-white p-5 rounded-lg shadow">
                <Link href={result.url} className="group">
                  <h2 className="text-lg font-semibold text-maritime-blue group-hover:underline">
                    {result.title}
                  </h2>
                </Link>
                <p className="text-gray-600 mt-1 text-sm">{result.excerpt}</p>
                <Link
                  href={result.url}
                  className="inline-block mt-2 text-maritime-blue hover:text-maritime-blue/80 font-medium text-sm"
                >
                  Read more →
                </Link>
              </div>
            ))}
          </div>
        ) : query ? (
          <div className="text-center py-10">
            <Search className="mx-auto h-10 w-10 text-gray-400" />
            <h3 className="mt-2 text-base font-medium text-gray-900">
              No results found
            </h3>
            <p className="mt-1 text-gray-500 text-sm">
              Try different search terms or check back later.
            </p>
          </div>
        ) : (
          <div className="text-center py-10">
            <Search className="mx-auto h-10 w-10 text-gray-400" />
            <h3 className="mt-2 text-base font-medium text-gray-900">
              Start your search
            </h3>
            <p className="mt-1 text-gray-500 text-sm">
              Enter keywords in the search box to find what you're looking for.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
