"use client";

import React from "react";
import Image from "next/image";
import Marquee from "@/components/ui/marquee";
import { Text } from "@/components/ui/text";

const brands = [
  { src: "/image/svg_.svg", alt: "Milano" },
  { src: "/image/svg_ (1).svg", alt: "Amsterdam" },
  { src: "/image/svg_.svg", alt: "Milano" },
  { src: "/image/svg_ (1).svg", alt: "Amsterdam" },
  { src: "/image/svg_ (2).svg", alt: "Venice" },
  { src: "/image/svg_ (3).svg", alt: "Theo" },
  { src: "/image/svg_ (2).svg", alt: "Venice" },
  { src: "/image/svg_ (3).svg", alt: "Theo" },
  { src: "/image/svg_ (4).svg", alt: "OB" },
    { src: "/image/svg_.svg", alt: "Milano" },
  { src: "/image/svg_ (1).svg", alt: "Amsterdam" },
  { src: "/image/svg_.svg", alt: "Milano" },
  { src: "/image/svg_ (1).svg", alt: "Amsterdam" },
  { src: "/image/svg_ (2).svg", alt: "Venice" },
  { src: "/image/svg_ (3).svg", alt: "Theo" },
  { src: "/image/svg_ (2).svg", alt: "Venice" },
  { src: "/image/svg_ (3).svg", alt: "Theo" },
  { src: "/image/svg_ (4).svg", alt: "OB" },
];

/**
 * BrandMarquee Component
 * Displays a "Trusted by" section with a scrolling marquee of brand logos.
 * Features edge-fading gradients for a premium feel.
 */
export function BrandMarquee() {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
        {/* Descriptive Text */}
        <div className="flex-shrink-0">
          <Text className="text-black/30 text-sm font-semibold leading-tight tracking-tight whitespace-nowrap text-center md:text-left">
            Trusted by the biggest <br /> brands worldwide
          </Text>
        </div>

        {/* Infinite Marquee with Fading Masks */}
        <div className="relative flex-grow md:flex-initial w-full max-w-[800px] overflow-hidden my-auto">
          {/* Smooth Edge Fades using Gradients */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#f0f0f0] via-[#f0f0f0]/80 to-transparent z-10"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#f0f0f0] via-[#f0f0f0]/80 to-transparent z-10"></div>
          
          <Marquee 
            className="py-1" 
            pauseOnHover={false}
            repeat={12}
            duration="80s"
            gap="3rem"
          >
            {brands.map((brand, index) => (
              <div 
                key={`${brand.alt}-${index}`} 
                className="flex items-center justify-center"
              >
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={159}
                  height={18}
                  className="h-3.5 md:h-4 w-auto object-contain opacity-100 grayscale hover:grayscale-0 transition-all duration-700"
                  priority
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
