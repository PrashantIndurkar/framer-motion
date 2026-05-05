"use client"

import React from "react"
import { motion } from "framer-motion"
import { BlogFooterCTA } from "@/components/BlogFooterCTA"
import { AnimatedButton } from "@/components/ui/animated-button"
import Link from "next/link"

export const SimplePageContent = () => {
  return (
    <main className="min-h-screen flex flex-col bg-[#f5f5f5]">
      {/* Spacer for fixed navbar */}
      <div className="h-24" />

      {/* Main Content */}
      <section className="flex-grow flex flex-col items-center justify-center text-center px-6 py-[160px]">
        {/* Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <span 
            className="px-6 py-2 bg-white text-black rounded-full font-semibold text-[18px] leading-[22px] font-sans shadow-sm"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Page not found
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[1000px] font-semibold tracking-tight text-black font-sans
                     text-[40px] leading-[44px] 
                     md:text-[64px] md:leading-[1.1] 
                     lg:text-[82px] lg:leading-[90px]"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          This page didn't pass <br className="hidden md:block" /> the{" "}
          <span 
            className="italic font-serif" 
            style={{ fontFamily: "var(--font-source-serif)" }}
          >
            design
          </span>{" "}
          review.
        </motion.h1>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8"
        >
          <Link href="/">
            <AnimatedButton 
              variant="black"
              className="h-auto py-4 px-[30px] text-[18px] leading-[22px] font-semibold text-white"
            >
              Go Home
            </AnimatedButton>
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <BlogFooterCTA />
    </main>
  )
}
