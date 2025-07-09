"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function PrivacyPolicyBar() {
  const [visible, setVisible] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem("privacy-policy-dismissed");
    if (!dismissed) {
      setVisible(true);
      // Allow rendering before starting animation
      setTimeout(() => setAnimate(true), 50);
    }
  }, []);

  const handleDismiss = () => {
    localStorage.setItem("privacy-policy-dismissed", "true");
    setAnimate(false);
    setTimeout(() => setVisible(false), 300); // match transition duration
  };

  if (!visible) return null;

  return (
    <div
      className={`
        fixed bottom-0 left-0 w-full z-50 flex justify-center
        transition-transform duration-300
        ${animate ? "translate-y-0" : "translate-y-full"}
      `}
    >
      <Card className="w-full max-w-3xl mx-auto flex flex-row items-center justify-between bg-maritime-blue py-3 px-4 shadow-lg rounded-t-xl border border-maritime-blue">
        <div className="flex items-center gap-1 text-white text-base">
          We value your privacy. Please review our&nbsp;
          <Link
            href="/privacyPolicy"
            className="underline hover:text-maritime-navy font-semibold"
          >
            Privacy Policy
          </Link>
          .
        </div>
        <div className="flex items-center gap-2 ml-4">
          <Button
            asChild
            size="sm"
            className="bg-maritime-gold hover:bg-maritime-gold/90 text-maritime-navy font-semibold shadow-2xl hover:shadow-maritime-gold/25 transition-all duration-300 hover:scale-105"
          >
            <Link href="/privacyPolicy">See more</Link>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="border-white text-white hover:bg-white/10 hover:text-white font-semibold backdrop-blur-sm shadow-2xl transition-all duration-300 hover:scale-105 bg-transparent"
            onClick={handleDismiss}
          >
            Dismiss
          </Button>
        </div>
      </Card>
    </div>
  );
}
