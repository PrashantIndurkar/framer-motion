"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps {
  children: React.ReactNode;
  hoverText?: string;
  className?: string;
  onClick?: () => void;
  variant?: "black" | "white";
}

export function AnimatedButton({ 
  children, 
  hoverText, 
  className, 
  onClick,
  variant = "black" 
}: AnimatedButtonProps) {
  const isWhite = variant === "white";

  return (
    <motion.button
      initial="initial"
      whileHover="hover"
      onClick={onClick}
      className={cn(
        "relative h-[56px] px-8 overflow-hidden rounded-full font-bold text-[15px] transition-all duration-300 flex items-center justify-center",
        isWhite ? "bg-white text-black" : "bg-black text-white",
        className
      )}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <motion.span
          variants={{
            initial: { y: 0, opacity: 1 },
            hover: { y: 40, opacity: 0 }
          }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative block"
        >
          {children}
        </motion.span>

        <motion.span
          variants={{
            initial: { y: -40, opacity: 0 },
            hover: { y: 0, opacity: 1 }
          }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {hoverText || children}
        </motion.span>
      </div>
    </motion.button>
  );
}
