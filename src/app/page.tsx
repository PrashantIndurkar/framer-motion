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
import { BookingHero } from "@/components/BookingHero";
import { FAQSection } from "@/components/FAQSection";
import BlogSection from "@/components/BlogSection";

import { HorizontalScrollGallery } from "@/components/HorizontalScrollGallery";
import { AnimatedButton } from "@/components/ui/animated-button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#f0f0f0]">
      {/* Hero Section */}
      <section id="home" className="relative pt-24 pb-12 md:pt-40 md:pb-40 lg:pt-50 lg:pb-40 flex flex-col lg:justify-start overflow-hidden">
        
        <Container className="relative z-10 order-1 md:order-none">
          <div className="max-w-4xl ">
            {/* Marquee Section */}
            <div className="mb-8 max-w-xl">
              <MarqueeChips className="w-full -ml-2" />
            </div>

            {/* Headline */}
            <div className="mb-6">
              <Text 
                as="h1" 
                size="hero"
                weight="semibold"
                className="tracking-tighter text-black !text-[42px] sm:!text-6xl md:!text-7xl lg:!text-[82px] "
              >
                World-class <br />
                design 
                <span className="italic font-semibold" style={{ fontFamily: "var(--font-source-serif)" }}> whenevr</span><sup className="text-lg md:text-2xl lg:text-3xl align-top top-0">®</sup> <br />
                you need it.
              </Text>
            </div>

            {/* Subtext */}
            <div className="max-w-xl">
              <Text 
                size="xl" 
                className="leading-relaxed text-black/40 font-medium tracking-tight !text-lg md:!text-xl"
              >
                A monthly design subscription for startups, creators, 
                and teams who need work done without the wait.
              </Text>
            </div>

            {/* CTA Section */}
            <div className="mt-8 flex flex-col md:flex-row items-start md:items-center gap-4">
              <AnimatedButton 
                onClick={() => {
                  document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
                className="text-lg font-semibold shadow-[0_8px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.15)] "
              >
                See Pricing
              </AnimatedButton>

              <BookCallPill />
            </div>
          </div>
        </Container>

        {/* Background Abstract Image - Desktop */}
        <div className="hidden lg:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] pointer-events-none z-0">
          <div className="absolute -top-[20%] right-0 w-[60%] h-[140%] overflow-hidden">
            <Image 
              src="/image/imgi_1_922LPrLT3JS7JXQbJxraBeoo8I.png"
              alt="Abstract Background Desktop"
              width={1200}
              height={1200}
              className="w-full h-full object-contain object-right opacity-90 -rotate-90 scale-[1.35] translate-y-[-8%] translate-x-[12%]"
              priority
            />
            {/* Top Silky Overlay */}
            <div className="absolute inset-x-0 top-0 h-[10%] bg-gradient-to-b from-[#f0f0f0] via-[#f0f0f0]/90 to-transparent"></div>
            {/* Bottom Overlay */}
            <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-[#f0f0f0] via-[#f0f0f0]/90 to-transparent"></div>
          </div>
        </div>

        {/* Background Abstract Image - Mobile */}
        <div className="lg:hidden absolute top-[30%] sm:top-[40%] md:top-[60%] left-0 w-full h-[70%] pointer-events-none z-0 overflow-hidden flex items-start">
          <div className="relative w-full h-full">
            <Image 
              src="/image/imgi_74_922LPrLT3JS7JXQbJxraBeoo8I.png"
              alt="Abstract Background Mobile"
              fill
              className="object-contain object-bottom opacity-90 scale-125"
              priority
            />
            {/* Smooth Top Blend for Mobile Wave */}
            <div className="absolute inset-x-0 top-0 h-[40%] bg-gradient-to-b from-[#f0f0f0] via-[#f0f0f0]/20 to-transparent"></div>
            {/* Bottom Fade to mask the edge */}
            <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-[#f0f0f0] via-[#f0f0f0]/90 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Brand Marquee Section */}
      <section className="relative z-10 py-12 md:py-16 lg:pt-0 -mt-8 md:mt-0">
        <Container>
          <BrandMarquee />
        </Container>
      </section>

      {/* How It Works Section */}
      <HowItWorks />

      {/* Client Stats Section */}
      <ClientStats />

      {/* Horizontal Scroll Gallery */}
      <HorizontalScrollGallery />

      {/* Features Section */}
      <Features />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Pricing Section */}
      <Pricing />

       {/* Blog Section */}
      <BlogSection />




  {/* FAQ Section */}
      <FAQSection />
      {/* Booking Hero Section (Footer) */}
      <BookingHero />
    </main>
  );
}
