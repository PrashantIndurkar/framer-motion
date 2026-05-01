"use client";

import React from "react";
import Image from "next/image";
import Marquee from "@/components/ui/marquee";
import { Text } from "@/components/ui/text";
import { Container } from "@/components/ui/container";

const brands = [
  { src: "/image/svg_.svg", alt: "Milano" },
  { src: "/image/svg_ (1).svg", alt: "Amsterdam" },
  { src: "/image/svg_.svg", alt: "Milano" },
  { src: "/image/svg_ (1).svg", alt: "Amsterdam" },
  { src: "/image/svg_ (2).svg", alt: "Venice" },
  { src: "/image/svg_ (3).svg", alt: "Theo" },
  { src: "/image/svg_ (4).svg", alt: "OB" },
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
      <div className="flex flex-col md:flex-row items-center gap- ">
        {/* Left Side: Descriptive Text */}
        <div className="flex-shrink-0 w-full md:w-52 ">
          <Text className="text-black/30 text-xs font-medium leading-tight tracking-tight text-center md:text-left">
            Trusted by the biggest <br className="hidden md:block" /> brands worldwide
          </Text>
        </div>

        {/* Right Side: Infinite Marquee with Fading Masks */}
        <div className="relative  flex-1 w-full overflow-hidden ">
          {/* Smooth Edge Fades using Gradients */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16  bg-gradient-to-r from-background via-background/80 to-transparent z-10"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16  bg-gradient-to-l from-background via-background/80 to-transparent z-10"></div>
          
          <Marquee 
            className="py-1" 
            pauseOnHover={false}
            repeat={12}
          >
            {brands.map((brand, index) => (
              <div 
                key={`${brand.alt}-${index}`} 
                className="flex items-center justify-center min-w-[120px] md:min-w-[160px] px-"
              >
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={159}
                  height={18}
                  className="h-4 w-auto object-contain opacity-100"
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
