"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Text } from "@/components/ui/text";
import { FlipText } from "@/components/ui/flip-text";
import { cn } from "@/lib/utils";

interface BookCallPillProps {
  className?: string;
}

export const BookCallPill = ({ className }: BookCallPillProps) => {
  return (
    <motion.div 
      initial="initial"
      whileHover="hover"
      className={cn(
        "flex items-center bg-white border border-black/5 p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group h-[56px] w-fit min-w-[224px] overflow-hidden relative",
        className
      )}
    >
      {/* Normal State Contents */}
      <div className="flex items-center w-full h-full">
        <div className="relative w-11 h-11 rounded-full overflow-hidden border border-black/5 bg-neutral-100 flex-shrink-0">
          <Image 
            src="/image/imgi_50_UK3ji9XKftVKablDa07xbZ7o.jpg" 
            alt="Avatar" 
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col whitespace-nowrap ml-3 pr-6">
          <Text weight="bold" className="text-black leading-tight text-[14px] tracking-tight">
            Book a 15-min intro call
          </Text>
          <div className="flex items-center gap-1.5 mt-0.5">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-available shadow-available animate-pulse"></div>
            <Text className="text-black/30 font-medium leading-none text-[12px]">Available now</Text>
          </div>
        </div>
      </div>

      {/* Hover Overlay: Slides down from top */}
      <motion.div 
        variants={{
          initial: { y: "-100%" },
          hover: { y: 0 }
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 bg-white flex items-center justify-center z-10"
      >
        <span className="text-black font-bold text-[14px] tracking-tight">
          View calendar
        </span>
      </motion.div>
    </motion.div>
  );
};
