"use client";

import React from "react";
import Image from "next/image";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";

interface BookCallPillProps {
  className?: string;
}

export const BookCallPill = ({ className }: BookCallPillProps) => {
  return (
    <div 
      className={cn(
        "flex items-center gap-3 bg-white border border-black/[0.04] p-1.5 pr-6 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)] transition-all cursor-pointer group min-w-[224px] h-[56px] w-fit",
        className
      )}
    >
      <div className="relative w-11 h-11 rounded-full overflow-hidden border border-black/5 bg-neutral-100 flex-shrink-0">
        <Image 
          src="/image/imgi_50_UK3ji9XKftVKablDa07xbZ7o.jpg" 
          alt="Avatar" 
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col whitespace-nowrap">
        <Text weight="bold" className="text-black leading-tight text-[14px] tracking-tight">Book a 15-min intro call</Text>
        <div className="flex items-center gap-1.5 mt-0.5">
          <div className="w-1.5 h-1.5 rounded-full bg-brand-available shadow-available animate-pulse"></div>
          <Text className="text-black/30 font-medium leading-none text-[12px]">Available now</Text>
        </div>
      </div>
    </div>


  );
};
