"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, LogIn } from "lucide-react";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Ports", href: "/ports" },
  { name: "Accreditation", href: "/accreditation" },
  { name: "Contact", href: "/contact" },
  { name: "Journey", href: "/contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
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
                  width={60}
                  height={60}
                  className="h-12 w-auto"
                />
              </motion.div>
            )}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? isScrolled
                      ? "text-maritime-blue"
                      : "text-maritime-gold"
                    : isScrolled
                    ? "text-gray-700 hover:text-maritime-blue"
                    : "text-white hover:text-maritime-gold"
                }`}
              >
                {item.name}
                {pathname === item.href && (
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                      isScrolled ? "bg-maritime-blue" : "bg-maritime-gold"
                    }`}
                    layoutId="activeTab"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Login Button */}
          <div className="hidden lg:flex items-center space-x-4">
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
                  <div className="space-y-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block px-4 py-3 text-lg font-medium rounded-lg transition-colors ${
                          pathname === item.href
                            ? "bg-maritime-blue text-white"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </nav>

                <div className="mt-8">
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
