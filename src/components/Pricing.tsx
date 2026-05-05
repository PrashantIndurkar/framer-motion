"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Marquee from "@/components/ui/marquee";
import { PricingToggle } from "@/components/ui/pricing-toggle";
import { FeatureItem } from "@/components/ui/feature-item";
import { Container } from "@/components/ui/container";
import { AnimatedButton } from "@/components/ui/animated-button";
import { cn } from "@/lib/utils";

const marqueeImages = [
  "/image/imgi_78_UK3ji9XKftVKablDa07xbZ7o.jpg",
  "/image/imgi_79_gdoBqgMU9ke6K07ShZLmpfUoWc.jpg",
  "/image/imgi_80_ldLzFEXXuK2q3bgbFfV6MlgqbSw.jpg",
  "/image/imgi_81_XTdwXzaaZ0uFZA76FvHmRgz1z4.jpg",
];

/**
 * Handles the display of the scrolling images on the left side of the Pricing card.
 */
const PricingMarquee = () => (
  <motion.div 
    initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    viewport={{ once: true }}
    transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
    className="w-full lg:w-[40%] relative bg-[#0f0f0f] overflow-hidden h-[300px] md:h-[400px] lg:h-full rounded-2xl"
  >
    {/* Desktop Marquee (Vertical) */}
    <Marquee vertical duration="30s" repeat={4} className="h-full hidden lg:flex">
      {marqueeImages.map((src, i) => (
        <div key={i} className="relative aspect-[4/3] w-full overflow-hidden group rounded-2xl">
          <Image
            src={src}
            alt={`Design ${i}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      ))}
    </Marquee>

    {/* Mobile/Tablet Marquee (Horizontal) */}
    <Marquee duration="30s" repeat={4} className="h-full flex lg:hidden">
      {marqueeImages.map((src, i) => (
        <div key={i} className="relative aspect-video w-[280px] md:w-[400px] shrink-0 overflow-hidden group rounded-2xl">
          <Image
            src={src}
            alt={`Design ${i}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      ))}
    </Marquee>
  </motion.div>
);

/**
 * Handles the pricing logic, features list, and interactive toggle on the right side of the Pricing card.
 */
const PricingDetails = ({
  isAdditionalActive,
  setIsAdditionalActive,
  price,
  activeTasks
}: {
  isAdditionalActive: boolean;
  setIsAdditionalActive: (val: boolean) => void;
  price: string;
  activeTasks: string;
}) => (
  <div className="w-full lg:w-[60%] p-8 md:p-12 lg:py-12 flex flex-col justify-between relative">
    <div>
      <motion.div 
        initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="flex justify-between items-center w-full"
      >
        <h2 className="text-4xl md:text-5xl font-serif italic text-white tracking-tight leading-none">
          whenver<span className="text-sm align-top not-italic">®</span>
        </h2>
        <div className="flex items-center gap-2">
          <span className={cn("text-sm md:text-base font-semibold transition-colors duration-300", isAdditionalActive ? "text-white" : "text-white/50")}>
            Additional Active Task
          </span>
          <span className={cn("text-sm md:text-base font-semibold transition-colors duration-300", isAdditionalActive ? "text-white" : "text-white/50")}>
            +$995
          </span>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="flex justify-between items-center w-full mt-6"
      >
        <p className="text-white/50 text-sm font-medium font-sans max-w-xs leading-relaxed">
          Submit any design task you need. Landing pages, product visuals, brand assets, and more.
        </p>
        <PricingToggle 
          checked={isAdditionalActive} 
          onChange={setIsAdditionalActive} 
        />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="mt-[24px]"
      >
        <div className="flex items-baseline gap-1">
          <AnimatePresence mode="wait">
            <motion.span
              key={price}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-[40px] font-semibold font-sans text-white tracking-tight leading-none"
            >
              ${price}
            </motion.span>
          </AnimatePresence>
          <span className="text-white/40 text-[20px] font-sans">/month</span>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col gap-[22px] mt-[32px] mb-8"
      >
        <FeatureItem>Unlimited design requests</FeatureItem>
        <FeatureItem className="transition-all duration-300">
          <AnimatePresence mode="wait">
            <motion.span
              key={activeTasks}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              {activeTasks} at a time
            </motion.span>
          </AnimatePresence>
        </FeatureItem>
        <FeatureItem>Delivered in a few business days</FeatureItem>
        <FeatureItem>Source files included</FeatureItem>
        <FeatureItem>Cancel or pause anytime</FeatureItem>
      </motion.div>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration: 1.1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <AnimatedButton 
        variant="white" 
        className="w-full text-lg py-6"
      >
        Join today
      </AnimatedButton>
    </motion.div>
  </div>
);

export default function Pricing() {
  const [isAdditionalActive, setIsAdditionalActive] = useState(false);

  const price = isAdditionalActive ? "3,990" : "2,995";
  const activeTasks = isAdditionalActive ? "Two active tasks" : "One active task";

  return (
    <section id="pricing" className="py-20 bg-[#f0f0f0]">
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white p-2 rounded-[32px] md:rounded-2xl border border-black/5 shadow-2xl"
        >
          <div className="overflow-hidden rounded-[24px] md:rounded-2xl bg-[#0D0D0D] flex flex-col-reverse lg:flex-row lg:h-[620px] w-full">
            <PricingMarquee />
            <PricingDetails 
              isAdditionalActive={isAdditionalActive}
              setIsAdditionalActive={setIsAdditionalActive}
              price={price}
              activeTasks={activeTasks}
            />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
