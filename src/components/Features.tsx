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
  Lock,
  LucideIcon
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

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

/**
 * Individual feature card displaying an icon, title, and description.
 */
const FeatureCard = ({ icon: Icon, title, description, index }: FeatureCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    viewport={{ once: true }}
    transition={{ duration: 1.1, delay: 0.2 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    whileHover={{ y: -5 }}
    className="bg-white p-2 rounded-3xl border border-black/5 shadow-sm h-full group w-full"
  >
    <div className="bg-neutral-50 rounded-2xl h-full p-5">
      <div className="pt-2">
        <Icon className="w-10 h-10 text-black fill-current" />
      </div>
      <Text as="h3" variant="outfit" className="pt-6 text-lg font-semibold mb-1.5 text-black">
        {title}
      </Text>
      <Text className="text-black/40 font-medium pb-4">
        {description}
      </Text>
    </div>
  </motion.div>
);

/**
 * Marquee displaying the list of design categories.
 */
const CategoriesMarquee = () => (
  <div className="relative mt-20">
    {/* Edge Gradient Fades */}
    <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#f0f0f0] via-[#f0f0f0]/80 to-transparent z-10"></div>
    <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#f0f0f0] via-[#f0f0f0]/80 to-transparent z-10"></div>
    
    <motion.div
      initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
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
    </motion.div>
  </div>
);

export const Features = () => {
  return (
    <section className="bg-[#f0f0f0] py-24 md:py-20 overflow-hidden">
      <Container>
        {/* Top Badge */}
        <div className="flex justify-center">
         <motion.div 
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10"
          >
            <span className="px-4 py-1.5 bg-white border border-black/5 rounded-full text-base font-semibold text-black shadow-sm">
              Features
            </span>
          </motion.div>
        </div>

        {/* Headline */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Text 
              as="h2" 
              variant="outfit"
              className="text-4xl md:text-[56px] font-semibold tracking-tighter leading-tight text-black max-w-3xl mx-auto"
            >
              Everything you need <br />
              and <Text as="span" variant="serif" className="italic font-serif" style={{ fontFamily: "var(--font-source-serif)" }}>nothing</Text> you don't.
            </Text>
          </motion.div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description} 
              index={index} 
            />
          ))}
        </div>

        <CategoriesMarquee />
      </Container>
    </section>
  );
};
