"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, LogIn, Search, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import {
  GB,
  SA,
  CN,
  NL,
  FR,
  DE,
  GR,
  IT,
  JP,
  PT,
  RU,
  ES,
} from "country-flag-icons/react/3x2";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "About",
    href: "/about",
    subItems: [
      { name: "Blog", href: "/blog" },
      //{ name: "Journey", href: "/journey" },
    ],
  },
  {
    name: "Services",
    href: "/services",
    subItems: [
      { name: "Port Agency Services", href: "/services" },
      { name: "Crew Change Services", href: "/services/crew-change-services" },
      { name: "Port Agency Services", href: "/services" },
      { name: "Ship Chandling Services", href: "/services" },
      { name: "Cargo Handling Operations", href: "/services" },
      { name: "Owner's Protective Agency services", href: "/services" },
      { name: "Bunker Brokering", href: "/services" },
      { name: "Yacht/Cruise Agency", href: "/services" },
      {
        name: "Foreign Naval Ships Agency",
        href: "/services/foreign-naval-ships-agency-services",
      },
      { name: "Dry Dock Management", href: "/services" },
      { name: "Marine Pest Control", href: "/services" },
      { name: "Maritime Security", href: "/services" },
      { name: "Offshore Support", href: "/services" },
      { name: "Documentation Services", href: "/services" },
      { name: "Emergency Services", href: "/services" },
    ],
  },
  { name: "Ports", href: "/ports" },
  { name: "Accreditation", href: "/accreditation" },
  {
    name: "Contact",
    href: "/contact",
  },
];

const languages = [
  { code: "en", name: "English", Flag: GB },
  { code: "ar", name: "Arabic", Flag: SA },
  { code: "zh", name: "Chinese", Flag: CN },
  { code: "nl", name: "Dutch", Flag: NL },
  { code: "fr", name: "French", Flag: FR },
  { code: "de", name: "German", Flag: DE },
  { code: "el", name: "Greek", Flag: GR },
  { code: "it", name: "Italian", Flag: IT },
  { code: "ja", name: "Japanese", Flag: JP },
  { code: "pt", name: "Portuguese", Flag: PT },
  { code: "ru", name: "Russian", Flag: RU },
  { code: "es", name: "Spanish", Flag: ES },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(languages[0]);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Close search overlay
      setIsSearchOpen(false);
      // Navigate to search page with query parameter
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      // Clear the search input
      setSearchQuery("");
    }
  };

  const handleLanguageChange = (langCode: string) => {
    const selectedLang = languages.find((lang) => lang.code === langCode);
    if (selectedLang) {
      setCurrentLanguage(selectedLang);
      console.log("Changing language to:", langCode);
    }
    setIsLanguageMenuOpen(false);
  };

  const isActive = (href: string) => {
    return (
      pathname === href ||
      (href === "/about" && (pathname === "/blog" || pathname === "/journey"))
    );
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-2xl relative">
            <form onSubmit={handleSearch}>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-full p-4 text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-maritime-blue"
                autoFocus
              />
              <button
                type="submit"
                className="absolute right-16 top-4 text-gray-500 hover:text-maritime-blue"
              >
                <Search size={24} />
              </button>
              <button
                type="button"
                onClick={() => setIsSearchOpen(false)}
                className="absolute right-4 top-4 text-gray-500 hover:text-maritime-blue"
              >
                <X size={24} />
              </button>
            </form>
          </div>
        </div>
      )}

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center">
              {isScrolled ? (
                <Image
                  src="/greek-lanka-logo.png"
                  alt="Greek Lanka Maritime Services"
                  width={200}
                  height={60}
                  className="h-16 w-auto"
                />
              ) : (
                <Image
                  src="/greek-lanka-logo.png"
                  alt="Greek Lanka Maritime Services"
                  width={200}
                  height={80}
                  className="h-16 w-auto filter brightness-0 invert"
                />
              )}
            </Link>
            {isScrolled && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Image
                  src="/iso-9001-min-150x145.png"
                  alt="ISO 9001 Certified"
                  width={200}
                  height={80}
                  className="h-16 w-auto"
                />
              </motion.div>
            )}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <div className="flex items-center">
                  <Link
                    href={item.href}
                    className={`relative px-3 py-2 text-sm font-medium transition-colors flex items-center ${
                      isActive(item.href)
                        ? isScrolled
                          ? "text-maritime-blue"
                          : "text-maritime-gold"
                        : isScrolled
                        ? "text-gray-700 hover:text-maritime-blue"
                        : "text-white hover:text-maritime-gold"
                    }`}
                  >
                    {item.name}
                    {item.subItems && (
                      <ChevronDown
                        size={16}
                        className="ml-1 transition-transform group-hover:rotate-180"
                      />
                    )}
                    {isActive(item.href) && (
                      <motion.div
                        className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                          isScrolled ? "bg-maritime-blue" : "bg-maritime-gold"
                        }`}
                        layoutId="activeTab"
                      />
                    )}
                  </Link>
                </div>

                {item.subItems && (
                  <div className="absolute left-0 top-full invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-0 w-48 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                    >
                      <div className="py-1">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className={`block px-4 py-2 text-sm ${
                              pathname === subItem.href
                                ? "bg-gray-100 text-maritime-blue"
                                : "text-gray-700 hover:bg-gray-100"
                            }`}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className={`p-2 rounded-full ${
                isScrolled
                  ? "text-gray-700 hover:text-maritime-blue"
                  : "text-white hover:text-maritime-gold"
              }`}
            >
              <Search size={20} />
            </button>

            {/* Language Selector */}
            <div className="relative group">
              <button
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className={`px-3 py-2 text-sm font-medium rounded-md flex items-center ${
                  isScrolled
                    ? "text-gray-700 hover:text-maritime-blue"
                    : "text-white hover:text-maritime-gold"
                }`}
              >
                <currentLanguage.Flag className="w-5 h-auto mr-2" />
                {currentLanguage.code.toUpperCase()}
                <ChevronDown
                  size={16}
                  className="ml-1 transition-transform group-hover:rotate-180"
                />
              </button>
              <div className="absolute right-0 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                >
                  <div className="py-1 max-h-60 overflow-auto">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                      >
                        <lang.Flag className="w-5 h-auto mr-3" />
                        {lang.name}
                      </button>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Login Button */}
            <Button
              size="sm"
              className={`${
                isScrolled
                  ? "bg-maritime-blue hover:bg-maritime-blue/90 text-white"
                  : "bg-maritime-gold hover:bg-maritime-gold/90 text-maritime-navy"
              }`}
            >
              <LogIn className="mr-2 h-4 w-4" />
              Login to GLAURA
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className={`lg:hidden ${
                  isScrolled ? "text-maritime-navy" : "text-white"
                }`}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <Image
                    src="/greek-lanka-logo.png"
                    alt="Greek Lanka Maritime Services"
                    width={150}
                    height={40}
                    className="h-8 w-auto"
                  />
                </div>

                <nav className="flex-1">
                  <div className="space-y-2">
                    {navigation.map((item) => (
                      <div key={item.name}>
                        <Link
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`block px-4 py-3 text-lg font-medium rounded-lg transition-colors ${
                            isActive(item.href)
                              ? "bg-maritime-blue text-white"
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          {item.name}
                        </Link>
                        {item.subItems && (
                          <div className="ml-4 mt-1 space-y-1">
                            {item.subItems.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`block px-4 py-2 text-base font-medium rounded-lg transition-colors ${
                                  pathname === subItem.href
                                    ? "bg-maritime-blue/20 text-maritime-blue"
                                    : "text-gray-600 hover:bg-gray-100"
                                }`}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </nav>

                <div className="mt-4">
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsSearchOpen(true);
                    }}
                    className="w-full flex items-center justify-center px-4 py-3 mb-4 text-lg font-medium rounded-lg bg-gray-100 hover:bg-gray-200"
                  >
                    <Search className="mr-2 h-5 w-5" />
                    Search
                  </button>
                </div>

                <div className="mt-2 mb-4">
                  <div className="relative">
                    <select
                      className="w-full px-4 py-3 text-lg rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-maritime-blue appearance-none"
                      onChange={(e) => handleLanguageChange(e.target.value)}
                      value={currentLanguage.code}
                    >
                      {languages.map((lang) => (
                        <option key={lang.code} value={lang.code}>
                          {lang.name}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-3 top-3 pointer-events-none">
                      <ChevronDown size={20} />
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <Button className="w-full bg-maritime-blue hover:bg-maritime-blue/90">
                    <LogIn className="mr-2 h-4 w-4" />
                    Login to GLAURA
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  );
}
