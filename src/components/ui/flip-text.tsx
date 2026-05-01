"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FlipTextProps {
  children: string;
  hoverText?: string;
  className?: string;
  height?: number;
}

export function FlipText({ 
  children, 
  hoverText, 
  className,
  height = 28 
}: FlipTextProps) {
  const displayHoverText = hoverText || children;

  return (
    <div 
      className={cn("relative overflow-hidden w-full", className)}
      style={{ height: `${height}px` }}
    >
      <motion.span
        variants={{
          initial: { y: 0, rotateX: 0, opacity: 1 },
          hover: { y: height + 10, rotateX: 90, opacity: 0 }
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="block w-full origin-bottom"
      >
        {children}
      </motion.span>
      <motion.span
        variants={{
          initial: { y: -(height + 10), rotateX: -90, opacity: 0 },
          hover: { y: 0, rotateX: 0, opacity: 1 }
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 block w-full origin-top"
      >
        {displayHoverText}
      </motion.span>
    </div>
  );
}
