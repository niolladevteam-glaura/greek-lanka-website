"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Search } from "lucide-react";

// Static data outside the function so it's not recreated on every search
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
    title: "Port Agency Services",
    url: "/services/port-agency",
    excerpt:
      "Full port agency support including cargo, bunkering, dry dock and more at all Sri Lankan ports.",
  },
  {
    id: 5,
    title: "Crew Change Services",
    url: "/services/crew-change",
    excerpt:
      "Fast, secure, and compliant crew change services with 24/7 coordination.",
  },
  {
    id: 6,
    title: "Ship Spares Logistics",
    url: "/services/ship-spares-logistics",
    excerpt:
      "Customs-cleared, port-delivered logistics for all ship spare parts.",
  },
  {
    id: 7,
    title: "Ship Chandling Services",
    url: "/services/ship-chandling",
    excerpt:
      "In-house chandling with quality supplies and transparent pricing.",
  },
  {
    id: 8,
    title: "Owner's Protective Agency",
    url: "/services/owners-protective-agency",
    excerpt: "We represent owners' interests during port calls and operations.",
  },
  {
    id: 9,
    title: "Husbandry Services",
    url: "/services/husbandry-services",
    excerpt:
      "Efficient husbandry support for documentation, provisioning, and coordination.",
  },
  {
    id: 10,
    title: "Yacht and Cruise Agency",
    url: "/services/yacht-cruise-agency",
    excerpt:
      "Agency services for private yachts and cruise liners in Sri Lanka.",
  },
  {
    id: 11,
    title: "Foreign Naval Ships Agency",
    url: "/services/naval-ship-agency",
    excerpt: "Experienced port handling for visiting naval vessels.",
  },
  {
    id: 12,
    title: "Dry Dock / Afloat Repairs",
    url: "/services/dry-dock-repairs",
    excerpt: "Repair coordination for dry dock and afloat vessel services.",
  },
  {
    id: 13,
    title: "Marine Pest Control",
    url: "/services/marine-pest-control",
    excerpt: "Certified fumigation and pest control services for ships.",
  },
  {
    id: 14,
    title: "Maritime Security",
    url: "/services/maritime-security",
    excerpt: "Security coordination for vessels, cargo, and crew in port.",
  },
  {
    id: 15,
    title: "Offshore Support",
    url: "/services/offshore-support",
    excerpt: "Comprehensive offshore marine support and logistics.",
  },
  {
    id: 16,
    title: "Documentation Services",
    url: "/services/documentation",
    excerpt:
      "Customs clearance, permits, and all vessel-related documentation.",
  },
  {
    id: 17,
    title: "Emergency Services",
    url: "/services/emergency-services",
    excerpt:
      "24/7 emergency support including medevac, towage, and provisioning.",
  },
  {
    id: 18,
    title: "Port Services",
    url: "/ports",
    excerpt: "Information about ports we operate in",
  },
  {
    id: 19,
    title: "Careers",
    url: "/careers",
    excerpt: "Join our team of maritime professionals",
  },
  {
    id: 20,
    title: "Accreditation",
    url: "/accreditation",
    excerpt: "Our industry certifications and standards",
  },
];

// Simple case-insensitive search
async function searchContent(query: string) {
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
