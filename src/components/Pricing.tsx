"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Marquee from "@/components/ui/marquee";
import { Button } from "@/components/ui/button";
import { PricingToggle } from "@/components/ui/pricing-toggle";
import { FeatureItem } from "@/components/ui/feature-item";
import { Container } from "@/components/ui/container";
import { AnimatedButton } from "@/components/ui/animated-button";
import { cn } from "@/lib/utils";

const marqueeImages = [
  "/image/imgi_10_UT4fxQBnxf542T5Cf7zZOvBxy0.png",
  "/image/imgi_11_4UX9uXT3N0WRExPOcc1r8bpVQAk.png",
  "/image/imgi_12_GSFkssTRojMMfTCPqH1HENDnw.png",
  "/image/imgi_13_pSEmRq7TZ5niunpklVk0dvh1mDA.png",
  "/image/imgi_14_WdMlO6P4eyTomKkSRBDtGLAio4.png",
  "/image/imgi_15_AcrDBNPoA5kazwDFtUC2IeoPoo.png",
];

export default function Pricing() {
  const [isAdditionalActive, setIsAdditionalActive] = useState(false);

  const price = isAdditionalActive ? "3,990" : "2,995";
  const activeTasks = isAdditionalActive ? "Two active tasks" : "One active task";

  return (
    <section className="py-20 bg-[#F2F2F2]">
      <Container>
        <div className="overflow-hidden rounded-[32px] md:rounded-[40px] border border-black/5 bg-[#0D0D0D] shadow-2xl flex flex-col md:flex-row md:h-[620px]">
        
        {/* LEFT SECTION: Marquee */}
        <div className="w-full md:w-[40%] relative bg-[#0f0f0f] overflow-hidden min-h-[300px] md:h-full">
          <Marquee vertical duration="30s" repeat={4} className="h-full">
            {marqueeImages.map((src, i) => (
              <div key={i} className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden group">
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
          
          {/* Fade Mask */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#0D0D0D] via-transparent to-[#0D0D0D] z-10" />
        </div>

        {/* RIGHT SECTION: Content */}
        <div className="w-full md:w-[60%] p-8 md:p-12 md:py-12 flex flex-col justify-between relative">
          <div>
            <div className="flex justify-between items-start">
              <h2 className="text-4xl md:text-5xl font-serif italic text-white tracking-tight leading-none">
                whenver<span className="text-sm align-top not-italic">®</span>
              </h2>
              <div className="flex flex-col items-end gap-1.5">
                <span className={cn("text-base font-semibold transition-colors duration-300", isAdditionalActive ? "text-white" : "text-white/50")}>
                  Additional Active Task
                </span>
                <span className={cn("text-sm mb-1 font-semibold transition-colors duration-300", isAdditionalActive ? "text-white" : "text-white/50")}>+$995</span>
                <PricingToggle 
                  checked={isAdditionalActive} 
                  onChange={setIsAdditionalActive} 
                />
              </div>
            </div>
            
            <p className="text-[#7C7C7C] text-[14px] font-medium font-sans max-w-[320px] mt-[12px] leading-[21px]">
              Submit any design task you need. Landing pages, product visuals, brand assets, and more.
            </p>

            <div className="mt-[24px]">
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
            </div>

            <div className="flex flex-col gap-[22px] mt-[32px] mb-8">
              <FeatureItem>Unlimited design requests</FeatureItem>
              <FeatureItem className="transition-all duration-300">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={activeTasks}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                  >
                    {activeTasks} at a time
                  </motion.span>
                </AnimatePresence>
              </FeatureItem>
              <FeatureItem>Delivered in a few business days</FeatureItem>
              <FeatureItem>Source files included</FeatureItem>
              <FeatureItem>Cancel or pause anytime</FeatureItem>
            </div>
          </div>

          <AnimatedButton 
            variant="white" 
            className="w-full text-lg py-6"
          >
            Join today
          </AnimatedButton>
        </div>
      </div>
      </Container>
    </section>
  );
}
