import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/data/services";

export const serviceMetas: Record<
  string,
  {
    title: string;
    description: string;
    keywords: string[];
    schema: object;
  }
> = {
  "port-agency": {
    title: "Port Agency Services in Sri Lanka | Greek Lanka",
    description:
      "Comprehensive port agency services across all Sri Lankan ports, including cargo ops, bunkering, and dry dock support.",
    keywords: [
      "port agency Sri Lanka",
      "port services Colombo",
      "ship agency Galle",
      "Sri Lanka cargo port operations",
      "bunker port agency services",
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Port Agency Services",
      provider: {
        "@type": "Organization",
        name: "Greek Lanka Maritime Services",
        url: "https://greeklankamaritime.com",
      },
      areaServed: {
        "@type": "Place",
        name: ["Colombo", "Galle", "Hambantota", "Trincomalee", "Puttalam"],
      },
    },
  },
  "crew-change": {
    title: "Crew Change Services in Sri Lanka | Greek Lanka",
    description:
      "Fast and compliant crew change services with 24/7 support at all major Sri Lankan ports.",
    keywords: [
      "crew change Sri Lanka",
      "crew management Colombo port",
      "ship crew transfer Sri Lanka",
      "crew logistics",
      "seafarer change Colombo",
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Crew Change Services",
      provider: {
        "@type": "Organization",
        name: "Greek Lanka Maritime Services",
        url: "https://greeklankamaritime.com",
      },
      areaServed: {
        "@type": "Place",
        name: ["Colombo", "Galle", "Hambantota"],
      },
    },
  },
  "ship-spares-logistics": {
    title: "Ship Spares Logistics in Sri Lanka | Greek Lanka",
    description:
      "End-to-end ship spare parts logistics including customs clearance, delivery, and coordination across all ports in Sri Lanka.",
    keywords: [
      "ship spares delivery Sri Lanka",
      "marine logistics Sri Lanka",
      "spare parts customs clearance",
      "logistics for ships Colombo",
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Ship Spares Logistics",
      provider: {
        "@type": "Organization",
        name: "Greek Lanka Maritime Services",
        url: "https://greeklanka.com",
      },
      areaServed: {
        "@type": "Place",
        name: ["Colombo", "Galle", "Hambantota", "Trincomalee", "Puttalam"],
      },
    },
  },
  "ship-chandling": {
    title: "Ship Chandling Services in Sri Lanka | Greek Lanka",
    description:
      "In-house ship chandling with quality supplies, fast delivery, and transparent pricing at Sri Lanka's major ports.",
    keywords: [
      "ship chandling Colombo",
      "marine supply Sri Lanka",
      "ship provisions Galle",
      "chandler port services",
      "marine consumables supplier",
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Ship Chandling Services",
      provider: {
        "@type": "Organization",
        name: "Greek Lanka Maritime Services",
        url: "https://greeklanka.com",
      },
      areaServed: {
        "@type": "Place",
        name: ["Colombo", "Galle", "Hambantota", "Trincomalee", "Puttalam"],
      },
    },
  },
  "owners-protective-agency": {
    title: "Owner’s Protective Agency in Sri Lanka | Greek Lanka",
    description:
      "Acting in owners’ best interests with OPA services ensuring transparent operations and safeguarding throughout port calls.",
    keywords: [
      "owner protective agency Sri Lanka",
      "OPA agent Sri Lanka",
      "vessel operations representation",
      "port agency for owners",
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Owner’s Protective Agency",
      provider: {
        "@type": "Organization",
        name: "Greek Lanka Maritime Services",
        url: "https://greeklanka.com",
      },
      areaServed: {
        "@type": "Place",
        name: ["Colombo", "Galle", "Hambantota", "Trincomalee", "Puttalam"],
      },
    },
  },
  "husbandry-services": {
    title: "Husbandry Services for Vessels in Sri Lanka | Greek Lanka",
    description:
      "Efficient husbandry services including documentation, crew handling, delivery, and coordination during port calls.",
    keywords: [
      "vessel husbandry services",
      "crew and supply coordination",
      "port logistics support",
      "husbanding agent Colombo",
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Husbandry Services",
      provider: {
        "@type": "Organization",
        name: "Greek Lanka Maritime Services",
        url: "https://greeklanka.com",
      },
      areaServed: {
        "@type": "Place",
        name: ["Colombo", "Galle", "Hambantota", "Trincomalee", "Puttalam"],
      },
    },
  },
  "yacht-cruise-ship-agency": {
    title: "Yacht & Cruise Ship Agency Sri Lanka | Greek Lanka",
    description:
      "Professional support for cruise lines and yachts at Sri Lankan ports with immigration, provisioning, and port liaison.",
    keywords: [
      "yacht agency Sri Lanka",
      "cruise agent Sri Lanka",
      "cruise port services Colombo",
      "yacht provisioning and permits",
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Yacht & Cruise Ship Agency",
      provider: {
        "@type": "Organization",
        name: "Greek Lanka Maritime Services",
        url: "https://greeklanka.com",
      },
      areaServed: {
        "@type": "Place",
        name: ["Colombo", "Galle", "Hambantota", "Trincomalee", "Puttalam"],
      },
    },
  },
  "naval-ship-agency": {
    title: "Naval Ship Agency Services Sri Lanka | Greek Lanka",
    description:
      "Experienced naval port agents for visiting foreign naval ships — coordination, clearance, and full-service support.",
    keywords: [
      "naval ship agency Sri Lanka",
      "foreign navy port agent",
      "naval support Colombo",
      "military vessel coordination",
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Naval Ship Agency Services",
      provider: {
        "@type": "Organization",
        name: "Greek Lanka Maritime Services",
        url: "https://greeklanka.com",
      },
      areaServed: {
        "@type": "Place",
        name: ["Colombo", "Galle", "Hambantota", "Trincomalee", "Puttalam"],
      },
    },
  },
  "dry-dock-afloat-repair": {
    title: "Dry Dock & Afloat Repair Agency | Greek Lanka",
    description:
      "Coordination of dry dock and afloat repair services at Sri Lankan ports with time-sensitive execution and local partnerships.",
    keywords: [
      "dry dock repairs Sri Lanka",
      "afloat vessel repair",
      "repair coordination port agent",
      "dry docking support services",
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Dry Dock & Afloat Repair Agency",
      provider: {
        "@type": "Organization",
        name: "Greek Lanka Maritime Services",
        url: "https://greeklanka.com",
      },
      areaServed: {
        "@type": "Place",
        name: ["Colombo", "Galle", "Hambantota", "Trincomalee", "Puttalam"],
      },
    },
  },
  "marine-pest-control": {
    title: "Marine Pest Control Services Sri Lanka | Greek Lanka",
    description:
      "Certified fumigation and pest control services for vessels, cargo, and onboard spaces at major Sri Lankan ports.",
    keywords: [
      "marine pest control Sri Lanka",
      "ship fumigation Colombo",
      "vessel decontamination services",
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Marine Pest Control Services",
      provider: {
        "@type": "Organization",
        name: "Greek Lanka Maritime Services",
        url: "https://greeklanka.com",
      },
      areaServed: {
        "@type": "Place",
        name: ["Colombo", "Galle", "Hambantota", "Trincomalee", "Puttalam"],
      },
    },
  },
  "maritime-security": {
    title: "Maritime Security Services Sri Lanka | Greek Lanka",
    description:
      "Reliable maritime security support for vessels and cargo — coordination with naval and local authorities.",
    keywords: [
      "maritime security Sri Lanka",
      "vessel safety services",
      "armed security escort Colombo",
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Maritime Security Services",
      provider: {
        "@type": "Organization",
        name: "Greek Lanka Maritime Services",
        url: "https://greeklanka.com",
      },
      areaServed: {
        "@type": "Place",
        name: ["Colombo", "Galle", "Hambantota", "Trincomalee", "Puttalam"],
      },
    },
  },
  "offshore-maritime-support": {
    title: "Offshore Maritime Support Sri Lanka | Greek Lanka",
    description:
      "Offshore vessel coordination, logistics, crew movement, and technical support around Sri Lanka’s territorial waters.",
    keywords: [
      "offshore support Sri Lanka",
      "offshore logistics Colombo",
      "supply vessel coordination",
      "offshore marine services",
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Offshore Maritime Support",
      provider: {
        "@type": "Organization",
        name: "Greek Lanka Maritime Services",
        url: "https://greeklanka.com",
      },
      areaServed: {
        "@type": "Place",
        name: ["Colombo", "Galle", "Hambantota", "Trincomalee", "Puttalam"],
      },
    },
  },
  "maritime-documentation": {
    title: "Maritime Documentation Services | Greek Lanka",
    description:
      "Port documentation, permits, clearances, and customs support across all Sri Lankan ports with precision and speed.",
    keywords: [
      "ship documentation Sri Lanka",
      "maritime permits",
      "customs clearance for ships",
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Maritime Documentation Services",
      provider: {
        "@type": "Organization",
        name: "Greek Lanka Maritime Services",
        url: "https://greeklanka.com",
      },
      areaServed: {
        "@type": "Place",
        name: ["Colombo", "Galle", "Hambantota", "Trincomalee", "Puttalam"],
      },
    },
  },
  "maritime-emergency-support": {
    title: "Maritime Emergency Support Sri Lanka | Greek Lanka",
    description:
      "24/7 rapid response maritime emergency services — towage, medical, provisioning, and crew evacuation in Sri Lanka.",
    keywords: [
      "emergency maritime Sri Lanka",
      "ship emergency towage",
      "medical evacuation port support",
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Maritime Emergency Support",
      provider: {
        "@type": "Organization",
        name: "Greek Lanka Maritime Services",
        url: "https://greeklanka.com",
      },
      areaServed: {
        "@type": "Place",
        name: ["Colombo", "Galle", "Hambantota", "Trincomalee", "Puttalam"],
      },
    },
  },
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const meta = serviceMetas[params.slug];
  if (!meta) return {};

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      title: meta.title,
      description: meta.description,
    },
  };
}

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) return notFound();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-10 px-4 bg-maritime-gradient text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold">{service.title}</h1>
        <p className="text-xl mt-4 max-w-2xl mx-auto">
          {service.shortDescription}
        </p>
      </section>

      {/* Image Gallery */}
      <section className="py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <div
            className={`flex overflow-x-auto pb-4 ${
              service.imageGallery.length <= 2 ? "justify-center" : ""
            }`}
          >
            <div
              className={`flex ${
                service.imageGallery.length <= 2 ? "gap-8" : "space-x-4"
              }`}
            >
              {service.imageGallery.map((image, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80"
                >
                  <div className="relative h-full rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={image}
                      alt={`${service.title} - Example ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full Description */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <div className="space-y-6 text-gray-700">
          <h2 className="text-3xl font-bold text-maritime-navy mb-6 border-b-2 border-maritime-gold pb-2">
            Service Overview
          </h2>

          {/* Parse and render the fullDescription content */}
          {service.fullDescription.split("\n").map((paragraph, index) => {
            if (paragraph.trim() === "") return null;

            // Check for section headings
            if (
              paragraph.startsWith("We Offer Embarkation") ||
              paragraph.startsWith("Our Services Include") ||
              paragraph.startsWith("Choose Greek Lanka")
            ) {
              return (
                <h3
                  key={index}
                  className="text-xl font-semibold text-maritime-navy mt-8 mb-4"
                >
                  {paragraph.replace(":", "")}
                </h3>
              );
            }

            // Check for bullet points
            if (paragraph.startsWith("- ")) {
              const isBold = paragraph.includes("**");
              const content = paragraph
                .replace("- ", "")
                .replace(/\*\*(.*?)\*\*/g, "$1");

              if (isBold) {
                const [title, ...descParts] = content.split(":");
                const description = descParts.join(":");

                return (
                  <div
                    key={index}
                    className="p-4 bg-white rounded-lg shadow-sm border border-gray-100
                        transition-all duration-300 ease-in-out
                        hover:shadow-md hover:border-maritime-gold/50 hover:translate-y-[-2px]
                        group"
                  >
                    <h4 className="font-bold text-maritime-navy group-hover:text-maritime-gold transition-colors duration-300">
                      {title}
                    </h4>
                    {description && (
                      <p className="mt-1 text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                        {description}
                      </p>
                    )}
                  </div>
                );
              }

              return (
                <div
                  key={index}
                  className="flex items-start hover:bg-gray-50/50 px-2 py-1 rounded transition-colors duration-200"
                >
                  <svg
                    className="h-5 w-5 text-maritime-gold mt-0.5 mr-2 flex-shrink-0
                         group-hover:scale-110 transition-transform duration-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700 hover:text-maritime-navy transition-colors duration-200">
                    {content}
                  </span>
                </div>
              );
            }

            // Regular paragraphs
            return (
              <p key={index} className="text-lg leading-relaxed">
                {paragraph}
              </p>
            );
          })}
        </div>
      </section>

      {/* Key Features */}
      <section className="py-10 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2 text-maritime-navy">
                  {feature}
                </h3>
                <p className="text-gray-600">
                  Our comprehensive service covers all aspects of{" "}
                  {feature.toLowerCase()} to ensure smooth operations.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-maritime-navy text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold mb-4">
            Interested in {service.title}?
          </h3>
          <p className="text-lg mb-6">
            Reach out to us today for a custom quote or further details.
          </p>
          <Button
            asChild
            className="bg-maritime-gold text-maritime-navy hover:bg-maritime-gold/90 text-lg font-semibold py-6 px-8"
          >
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
