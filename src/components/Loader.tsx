"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LoaderProps {
  onAnimationComplete?: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onAnimationComplete }) => {
  const text = "whenevr";
  const characters = text.split("");

  // Animation variants for characters
  const charVariants = {
    hidden: {
      y: "200%",
      opacity: 0,
      filter: "blur(10px)",
    },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.08, // Stagger delay: 0.06-0.1s
        duration: 0.9,   // Slower duration for a more dramatic, premium reveal
        ease: [0.16, 1, 0.3, 1], // Custom "out" quint-like easing for smoothness
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
      <div className="flex items-start overflow-hidden py-10">
        <div className="flex overflow-hidden">
          {characters.map((char, i) => (
            <div key={i} className="overflow-hidden">
              <motion.span
                custom={i}
                variants={charVariants}
                initial="hidden"
                animate="visible"
                className={cn(
                  "inline-block text-4xl md:text-5xl tracking-tighter text-black font-serif italic font-semibold",
                )}
              >
                {char}
              </motion.span>
            </div>
          ))}
        </div>
        <motion.sup
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: characters.length * 0.08 + 0.2, duration: 0.5 }}
          className="text-[10px] md:text-[12px] font-sans -top-4 align-top leading-none font-bold opacity-40 ml-0.5"
        >
          ®
        </motion.sup>
      </div>
    </motion.div>
  );
};
