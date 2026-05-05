"use client"

import React from "react"
import { motion } from "framer-motion"
import { CalBooking } from "./CalBooking"
import { AnimatedButton } from "@/components/ui/animated-button"

export const BlogFooterCTA = () => {
  return (
    <section data-theme="dark" className="py-8 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Logo at Top */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-0"
        >
          <div className="flex items-baseline gap-0.5">
            <span className="text-3xl font-serif font-semibold italic tracking-tight" style={{ fontFamily: "var(--font-source-serif)" }}>
              Whenevr
            </span>
            <sup className="text-[10px] font-sans top-0 align-top leading-none font-bold opacity-80 ml-0.5" style={{ verticalAlign: "super" }}>®</sup>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-5xl md:text-[82px] font-semibold font-outfit">
              Design <span className="italic font-serif" style={{ fontFamily: "var(--font-source-serif)" }}>doesn't</span> need to be complicated.
            </h2>
            <p className="text-neutral-500 text-lg md:text-xl max-w-xl leading-relaxed mt-8 font-sans font-medium">
              Book a quick call and get a clear look at how Whenevr works, what's included, and whether it fits your pace.
            </p>
            <div className="mt-10">
              <AnimatedButton 
                onClick={() => {
                  document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
                variant="white"
                className="shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              >
                See Pricing
              </AnimatedButton>
            </div>
          </motion.div>

          {/* Right Content - Calendar Card */}
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="ml-auto w-full max-w-lg">
              <CalBooking />
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-neutral-500 font-sans">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p>© 2025 Whenevr. Created by Hamza Ehsan.</p>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Thank You</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </section>
  )
}
