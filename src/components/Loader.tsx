"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LoaderProps {
  onAnimationComplete?: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onAnimationComplete }) => {
  const text = "Whenevr";
  const characters = text.split("");

  // Animation variants for characters
  const charVariants = {
    hidden: {
      y: "110%",
      opacity: 0,
      filter: "blur(8px)",
    },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.08,
        duration: 1.1,   // Slightly slower for more elegance
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <motion.div
      key="loader"
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ 
        duration: 0.8, 
        ease: [0.76, 0, 0.24, 1], 
      }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
      style={{ willChange: "transform" }}
    >
      <div className="flex items-start py-20 px-10">
        <div className="flex overflow-hidden pb-4 px-2 -mb-4 -mx-2">
          {characters.map((char, i) => (
            <div key={i} className="relative">
              <motion.span
                custom={i}
                variants={charVariants}
                initial="hidden"
                animate="visible"
                className={cn(
                  "inline-block text-4xl md:text-6xl text-black font-serif italic font-medium",
                )}
                style={{ fontFamily: "var(--font-source-serif)" }}
              >
                {char}
              </motion.span>
            </div>
          ))}
        </div>
        <motion.sup
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: characters.length * 0.08 + 0.3, duration: 0.6 }}
          className="text-[12px] md:text-[14px] font-sans top-0 align-top leading-none font-bold opacity-30 ml-1.5"
          style={{ verticalAlign: "super" }}
        >
          ®
        </motion.sup>
      </div>
    </motion.div>
  );
};
