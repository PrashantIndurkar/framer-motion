"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TestimonialCard } from "./TestimonialCard";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Eli Ramos",
    role: "Founder, Minos",
    content: "Every request was handled quickly and nailed on the first pass. Genuinely the most efficient design experience I've had.",
    avatar: "/image/imgi_4_FO0GbO8rNEXzxKJ7N9jYNS92Nvk.jpg",
  },
  {
    name: "Maya Kim",
    role: "Head of Product, Haptik",
    content: "Clean process, great work, and no hand-holding required. It felt like having a senior designer on standby without the back-and-forth.",
    avatar: "/image/imgi_5_MRXSykppVewwilGAfSKu7eZdgg.jpg",
  },
  {
    name: "Tina Zhang",
    role: "Creative Director, Octave",
    content: "The quality of design is top-tier and the process is frictionless. Whenevr feels like cheating in the best way.",
    avatar: "/image/imgi_6_ebwTJIBeD2MM3iPO4JB6BPWF8.jpg",
  },
  {
    name: "James Wilson",
    role: "CEO, Stellar",
    content: "We've tried several agencies, but none have the speed and precision that Whenevr brings to the table. Truly impressive.",
    avatar: "/image/imgi_50_UK3ji9XKftVKablDa07xbZ7o.jpg",
  },
  {
    name: "Sarah Chen",
    role: "Design Lead, Prism",
    content: "The attention to detail is remarkable. They don't just follow instructions; they add value to every pixel they touch.",
    avatar: "/image/imgi_51_gdoBqgMU9ke6K07ShZLmpfUoWc.jpg",
  },
];

// For infinite loop, we wrap the items
// [Last 2, Original 5, First 2] to ensure smooth transition when showing 3 cards
const extendedTestimonials = [
  ...testimonials.slice(-3),
  ...testimonials,
  ...testimonials.slice(0, 3),
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(3); // Start at the first original item
  const [isPaused, setIsPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const cardWidth = 365;
  const gap = 16;
  const stepWidth = cardWidth + gap;

  const handleNext = useCallback(() => {
    if (!isAnimating) return;
    setCurrentIndex((prev) => prev + 1);
  }, [isAnimating]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index + 3);
  };

  // Seamless jump logic
  useEffect(() => {
    if (currentIndex >= testimonials.length + 3) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
        setCurrentIndex(3);
      }, 500); // Match transition duration
      return () => clearTimeout(timer);
    }
    if (currentIndex < 3) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
        setCurrentIndex(testimonials.length + 2);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  // Re-enable animation after jump
  useEffect(() => {
    if (!isAnimating) {
      const timer = setTimeout(() => setIsAnimating(true), 50);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  // Auto-play logic
  useEffect(() => {
    if (!isPaused && isAnimating) {
      timeoutRef.current = setInterval(handleNext, 3000);
    }
    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, [handleNext, isPaused, isAnimating]);

  return (
    <section className="flex flex-col items-center py-32 bg-[#F2F2F2] overflow-hidden">
      {/* Label */}
      <div className="px-4 py-1.5 bg-white rounded-full border border-black/5 shadow-sm mb-6">
        <span className="text-[12px] font-bold text-black/60 tracking-[0.1em] uppercase">
          Testimonials
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-[48px] md:text-[64px] font-bold text-center leading-[1.05] tracking-tight mb-12 max-w-3xl font-sans">
        Turns out, people like <br />
        getting things <span className="italic font-serif font-medium">done.</span>
      </h2>

      {/* Carousel Container restricted to 3 cards width */}
      <div className="relative w-full flex justify-center">
        <div 
          className="relative overflow-hidden py-10 -my-10"
          style={{ 
            width: `${cardWidth * 3 + gap * 2}px`,
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            className="flex"
            style={{ gap: `${gap}px` }}
            animate={{ x: -(currentIndex * stepWidth) }}
            transition={isAnimating ? { 
              duration: 0.5,
              ease: [0.32, 0.72, 0, 1] // Custom smooth ease
            } : { duration: 0 }}
          >
            {extendedTestimonials.map((item, i) => (
              <TestimonialCard
                key={`${item.name}-${i}`}
                {...item}
                className="shrink-0"
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Dot Navigation */}
      <div className="flex gap-2 mt-[45px] bg-black/5 p-1.5 rounded-full px-3">
        {testimonials.map((_, i) => {
          // Calculate active dot based on currentIndex
          const activeIndex = (currentIndex - 3 + testimonials.length) % testimonials.length;
          return (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                activeIndex === i 
                  ? "bg-black/60 w-4" 
                  : "bg-black/20 hover:bg-black/40"
              )}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          );
        })}
      </div>
    </section>
  );
};
