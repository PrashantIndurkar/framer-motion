"use client";

import { MarqueeChips } from "@/components/MarqueeChips";
import { BrandMarquee } from "@/components/BrandMarquee";
import { Text } from "@/components/ui/text";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import HowItWorks from "@/components/HowItWorks";
import { ClientStats } from "@/components/ClientStats";
import { Features } from "@/components/Features";
import { BookCallPill } from "@/components/BookCallPill";
import { Testimonials } from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import BlogSection from "@/components/BlogSection";
import BlogGridSection from "@/components/BlogGridSection";
import { AnimatedButton } from "@/components/ui/animated-button";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-background overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 min-h-hero flex flex-col justify-center overflow-hidden">
        {/* Background Abstract Image with Silky-Smooth Gradient Overlays */}
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] pointer-events-none z-0">
          <div className="absolute -top-[20%] right-0 w-full md:w-[60%] h-[140%] overflow-hidden">
            <div className="relative w-full h-full">
              <Image 
                src="/image/imgi_1_922LPrLT3JS7JXQbJxraBeoo8I.png"
                alt="Abstract Background"
                fill
                className="object-contain object-right opacity-90 -rotate-90 scale-[1.35] translate-y-[-8%] translate-x-[12%]"
                priority
              />
              {/* Top Silky Overlay */}
              <div className="absolute inset-x-0 top-0 h-[10%] bg-gradient-to-b from-background via-background/90 to-transparent"></div>
              {/* Reworked Bottom Overlay: Deeper and more aggressive to eliminate sharp ends */}
              <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-background via-background via-background/95 via-background/80 to-transparent"></div>
            </div>
          </div>
        </div>

        <Container className="relative z-10 ">
          <div className="max-w-4xl ">
            {/* Marquee Section */}
            <div className="mb-10 max-w-xl">
              <MarqueeChips className="w-full -ml-2" />
            </div>

            {/* Headline */}
            <div className="mb-10">
              <Text 
                as="h1" 
                className="text-7xl md:text-8xl lg:text-hero font-bold tracking-tighter text-black leading-tightest"
              >
                World-class <br />
                design <Text as="span" variant="serif" weight="semibold" className="italic font-serif">whenevr</Text><sup className="text-2xl md:text-3xl lg:text-4xl align-top">®</sup> <br />
                you need it.
              </Text>
            </div>

            {/* Subtext */}
            <div className="max-w-xl">
              <Text 
                size="xl" 
                className="md:text-2xl leading-relaxed text-black/40 font-medium tracking-tight"
              >
                A monthly design subscription for startups, creators, 
                and teams who need work done without the wait.
              </Text>
            </div>

            {/* CTA Section */}
            <div className="mt-12 flex flex-col md:flex-row items-start md:items-center gap-4">
              <AnimatedButton 
                className="shadow-[0_8px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.15)]"
              >
                See Pricing
              </AnimatedButton>

              
              <BookCallPill />

            </div>
          </div>
          
          {/* Brand Marquee - Moved inside hero for better visibility */}
          <div className="mt-48 md:mt-56">
            <BrandMarquee />
          </div>
        </Container>
      </section>

      {/* How It Works Section */}
      <HowItWorks />

      {/* Client Stats Section */}
      <ClientStats />

      {/* Features Section */}
      <Features />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Pricing Section */}
      <Pricing />

      {/* Blog Section */}
      <BlogSection />

      {/* Blog Grid Section */}
      <BlogGridSection />
    </main>
  );
}
