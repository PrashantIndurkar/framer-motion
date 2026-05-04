"use client";
import React from "react";
import Marquee from "@/components/ui/marquee";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const DEFAULT_ITEMS = [
  "Social Graphics",
  "UX Design",
  "Pitch Decks",
  "Web Design",
  "Branding",
  "Product Design",
];

interface MarqueeChipsProps {
  items?: string[];
  duration?: string;
  pauseOnHover?: boolean;
  className?: string;
}

export function MarqueeChips({
  items = DEFAULT_ITEMS,
  duration = "60s",
  pauseOnHover = true,
  className,
}: MarqueeChipsProps) {
  return (
    <div className={cn("relative flex w-full flex-col overflow-hidden", className)}>
      <Marquee 
        reverse={true} 
        pauseOnHover={pauseOnHover} 
        duration={duration}
        className="py-1"
      >
        {items.map((item, index) => (
          <Badge
            key={index}
            variant="outline"
            className="rounded-full bg-white px-5 py-0.5 text-lg font-semibold text-neutral-800 border-neutral-200 transition-colors cursor-default select-none hover:bg-neutral-50"
          >
            {item}
          </Badge>
        ))}
      </Marquee>
      
      {/* Edge Gradient Fades - Standard Tailwind widths */}
      <div className="pointer-events-none absolute inset-y-0 -left-10 w-20 bg-gradient-to-r from-background via-background/80 to-transparent z-10"></div>
      <div className="pointer-events-none absolute inset-y-0 -right-20 w-20 bg-gradient-to-l from-background via-background/80 to-transparent z-10"></div>
    </div>
  );
}
