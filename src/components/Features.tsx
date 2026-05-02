"use client";

import React from "react";
import { motion } from "framer-motion";
import Marquee from "@/components/ui/marquee";
import { 
  Pause, 
  FileText, 
  Zap, 
  LayoutGrid, 
  ToggleRight, 
  Lock 
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Pause,
    title: "Simple design queue",
    description: "Track tasks easily in Notion.",
  },
  {
    icon: FileText,
    title: "One price, always",
    description: "Flat monthly rate, no surprises.",
  },
  {
    icon: Zap,
    title: "Quick turnaround",
    description: "Most requests done in a few days.",
  },
  {
    icon: LayoutGrid,
    title: "High-quality every time",
    description: "Senior designer, nothing less.",
  },
  {
    icon: ToggleRight,
    title: "You're in control",
    description: "Change or pause your plan anytime.",
  },
  {
    icon: Lock,
    title: "100 percent yours",
    description: "Custom work, fully owned by you.",
  },
];

const categories = [
  "UX Design",
  "Pitch Decks",
  "Web Design",
  "Branding",
  "Blog Graphics",
  "Landing Pages",
];

export const Features = () => {
  return (
    <section className="bg-background py-24 md:py-32 overflow-hidden">
      <Container>
        {/* Top Badge */}
        <div className="flex justify-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-4 py-1.5 rounded-full border border-black/5 bg-white shadow-sm"
          >
            <Text size="sm" className="font-semibold text-black/60">
              Features
            </Text>
          </motion.div>
        </div>

        {/* Headline */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Text 
              as="h2" 
              variant="outfit"
              className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight text-black max-w-3xl mx-auto"
            >
              Everything you need <br />
              and <Text as="span" variant="serif" className="italic font-serif">nothing</Text> you don't.
            </Text>
          </motion.div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-2 rounded-[32px] border border-black/5 shadow-md transition-all duration-300 h-full group"
            >
              <div className="bg-[#F7F7F7] p-8 rounded-[24px] h-full">
                <div className="mb-8">
                  <feature.icon className="w-8 h-8 text-black fill-current" />
                </div>
                <Text as="h3" variant="outfit" className="text-xl font-bold mb-2 text-black">
                  {feature.title}
                </Text>
                <Text className="text-black/40 font-medium">
                  {feature.description}
                </Text>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Category Marquee */}
        <div className="relative mt-20">
          {/* Edge Gradient Fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background via-background/80 to-transparent z-10"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background via-background/80 to-transparent z-10"></div>
          
          <Marquee 
            className="[--duration:40s] [--gap:12px] py-4" 
            pauseOnHover={false} 
            repeat={6}
          >
            {categories.map((category, index) => (
              <div
                key={index}
                className="px-6 py-1.5 rounded-full bg-white border border-black/5 shadow-sm cursor-default whitespace-nowrap mx-1"
              >
                <Text className="font-semibold text-black text-lg font-sans">
                  {category}
                </Text>
              </div>
            ))}
          </Marquee>
        </div>
      </Container>
    </section>
  );
};
