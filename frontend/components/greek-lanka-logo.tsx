"use client"

import { cn } from "@/lib/utils"

interface GreekLankaLogoProps {
  className?: string
  variant?: "light" | "dark"
}

export function GreekLankaLogo({ className, variant = "dark" }: GreekLankaLogoProps) {
  const isLight = variant === "light"

  return (
    <div className={cn("flex items-center space-x-3", className)}>
      {/* Anchor Icon */}
      <div className="relative">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cn("transition-colors duration-300", isLight ? "text-white" : "text-maritime-blue")}
        >
          {/* Anchor Ring */}
          <circle cx="20" cy="8" r="4" stroke="currentColor" strokeWidth="2.5" fill="none" />

          {/* Anchor Shaft */}
          <line x1="20" y1="12" x2="20" y2="32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />

          {/* Anchor Arms */}
          <path
            d="M12 24C12 28 16 32 20 32C24 32 28 28 28 24"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Anchor Flukes */}
          <path
            d="M12 24L8 28L12 32"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M28 24L32 28L28 32"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Crossbar */}
          <line x1="16" y1="16" x2="24" y2="16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>

        {/* Decorative waves */}
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
          <svg
            width="48"
            height="8"
            viewBox="0 0 48 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn("opacity-60", isLight ? "text-maritime-gold" : "text-maritime-teal")}
          >
            <path
              d="M0 4C6 0 12 8 18 4C24 0 30 8 36 4C42 0 48 8 48 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>
      </div>

      {/* Company Name */}
      <div className="flex flex-col">
        <div className={cn("text-xl font-bold leading-tight", isLight ? "text-white" : "text-maritime-navy")}>
          Greek Lanka
        </div>
        <div className={cn("text-sm font-medium leading-tight", isLight ? "text-maritime-gold" : "text-maritime-blue")}>
          Maritime Services
        </div>
      </div>
    </div>
  )
}
