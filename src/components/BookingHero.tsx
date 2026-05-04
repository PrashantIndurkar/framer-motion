"use client"

import React from "react"
import { motion } from "framer-motion"
import { CalBooking } from "./CalBooking"
import { AnimatedButton } from "@/components/ui/animated-button"

export const BookingHero = () => {
  return (
    <section data-theme="dark" className="py-10 bg-black text-white flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Logo and Nav area */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-0"
        >
          <div className="flex items-baseline gap-0.5 mb-4 ">
            <span className="text-3xl font-serif font-semibold italic tracking-tight" style={{ fontFamily: "var(--font-source-serif)" }}>
              Whenevr
            </span>
            <sup className="text-[10px] font-sans top-0 align-top leading-none font-bold opacity-80 ml-0.5" style={{ verticalAlign: "super" }}>®</sup>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr,0.7fr] gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl lg:text-[72px] xl:text-[82px] font-semibold tracking-tight leading-[1.05]">
              <span>Design <span className="italic font-serif" style={{ fontFamily: "var(--font-source-serif)" }}>doesn't</span> need</span> <br /> to be complicated.
            </h1>
            <p className="text-neutral-400 text-lg md:text-xl max-w-xl leading-relaxed mt-8">
              Book a quick call and get a clear look at how Whenevr works, what's included, and whether it fits your pace.
            </p>
            <div className="mt-10">
              <AnimatedButton 
                variant="white"
                className="shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              >
                See Pricing
              </AnimatedButton>
            </div>
          </motion.div>

          {/* Right Content - Calendar Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Subtle background glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-blue/20 to-brand-purple/20 blur-3xl rounded-full opacity-50 -z-10" />
            
            <div className="w-full lg:max-w-lg lg:ml-auto">
              <CalBooking />
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-24 md:mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-neutral-500"
        >
          <div className="flex flex-col items-center md:items-start gap-2">
            <p>© 2025 Whenevr. Created by Hamza Ehsan.</p>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Thank You</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
