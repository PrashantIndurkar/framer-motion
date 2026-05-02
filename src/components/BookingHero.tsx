"use client"

import React from "react"
import { motion } from "framer-motion"
import { CalBooking } from "./CalBooking"
import { AnimatedButton } from "@/components/ui/animated-button"

export const BookingHero = () => {
  return (
    <section data-theme="dark" className="min-h-screen bg-black text-white flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16 w-full">
        {/* Logo and Nav area */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-20"
        >
          <div className="flex items-center gap-2 mb-8">
            <span className="text-3xl italic font-bold tracking-tight" style={{ fontFamily: "var(--font-source-serif)" }}>whenevr®</span>
          </div>
          <p className="text-lg italic font-serif text-neutral-300">
            Simplifying your creative workflow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] max-w-2xl">
              Design <span className="italic font-serif">doesn't</span> need to be complicated.
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
            
            <div className="ml-auto w-full max-w-lg">
              <CalBooking />
            </div>
          </motion.div>
        </div>

        {/* Footer info (optional matching image) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-24 md:mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-neutral-500"
        >
          <p>© 2025 Whenevr. Created by Hamza Ehsan.</p>
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
