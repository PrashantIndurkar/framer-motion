"use client";

import { motion } from "framer-motion";
import { Text } from "@/components/ui/text";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Marquee from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import { AnimatedFolder } from "@/components/ui/3d-folder";
import { AnimatedButton } from "@/components/ui/animated-button";

const portfolioData = [
  {
    title: "Design Projects",
    projects: [
      { id: "1", image: "/image/imgi_4_FO0GbO8rNEXzxKJ7N9jYNS92Nvk.jpg", title: "Brand Identity" },
      { id: "2", image: "/image/imgi_5_MRXSykppVewwilGAfSKu7eZdgg.jpg", title: "Product Design" },
      { id: "3", image: "/image/imgi_6_ebwTJIBeD2MM3iPO4JB6BPWF8.jpg", title: "UI/UX Case Study" },
    ]
  }
];

const HowItWorks = () => {
  const cards = [
    {
      title: "Subscribe",
      description: "Pick a plan and get started right away. No calls, no setup, just design on demand.",
      visual: (
        <div className="w-full h-full p-4 pb-0">
          <div className="w-full h-full rounded-t-[24px] overflow-hidden relative group/card">
            {/* Background Gradient with Smooth Feeding Fade */}
            <div className="absolute inset-0 bg-[#F0F0F0] [mask-image:linear-gradient(to_bottom,black_0%,black_40%,rgba(0,0,0,0.8)_60%,rgba(0,0,0,0.4)_80%,transparent_100%)]" />
            
            <div className="relative z-10 p-8 flex flex-col h-full">
              <div className="flex justify-between items-center">
                <motion.span 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="text-[24px] lg:text-[26px] font-serif italic font-bold tracking-[-0.05em] leading-none"
                  style={{ fontFamily: "var(--font-source-serif)" }}
                >
                  Whenevr<sup className="text-[10px] align-top ml-0.5 font-sans not-italic">®</sup>
                </motion.span>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="px-3 py-1 bg-white border border-black/[0.08] rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.03)] flex items-center justify-center"
                >
                  <span className="text-sm font-semibold  text-black">Popular</span>
                </motion.div>
              </div>
              
              <div className="flex items-baseline gap-1.5 mt-3">
                <span className="text-[44px] lg:text-[40px] font-bold tracking-[-0.04em] leading-none text-black">$2,995</span>
                <span className="text-[16px] font-medium text-black/30 tracking-tight leading-none">/month</span>
              </div>
              
              <div className="mt-6">
                <AnimatedButton 
                  className="w-full h-[56px] shadow-[0_12px_24px_rgba(0,0,0,0.12)]"
                >
                  Join today
                </AnimatedButton>
              </div>
            </div>

            {/* Decorative gradients */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover/card:bg-brand-blue/10 transition-colors duration-700" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-purple/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          </div>
        </div>
      )
    },
    {
      title: "Request",
      description: "Submit any design task you need. Landing pages, product visuals, brand assets, and more.",
      visual: (
        <div className="w-full h-full relative flex flex-col justify-center py-6 gap-3 overflow-hidden">
          <Marquee className="[--duration:25s] [--gap:12px]" repeat={4} pauseOnHover={false}>
            {["Branding", "Social Graphics", "UX Design", "Product Design"].map((tag) => (
              <span key={tag} className="px-4 py-1.5 bg-[#F5F5F5] border border-black/[0.03] rounded-full text-[12px] font-bold text-black/70 whitespace-nowrap shadow-sm">
                {tag}
              </span>
            ))}
          </Marquee>
          <Marquee className="[--duration:30s] [--gap:12px]" reverse repeat={4} pauseOnHover={false}>
            {["Email Design", "Blog Graphics", "App Design", "Motion"].map((tag) => (
              <span key={tag} className="px-4 py-1.5 bg-[#F5F5F5] border border-black/[0.03] rounded-full text-[12px] font-bold text-black/70 whitespace-nowrap shadow-sm">
                {tag}
              </span>
            ))}
          </Marquee>
          <Marquee className="[--duration:25s] [--gap:12px]" repeat={4} pauseOnHover={false}>
            {["Ad Creatives", "UI Design", "Packaging", "Illustration"].map((tag) => (
              <span key={tag} className="px-4 py-1.5 bg-[#F5F5F5] border border-black/[0.03] rounded-full text-[12px] font-bold text-black/70 whitespace-nowrap shadow-sm">
                {tag}
              </span>
            ))}
          </Marquee>
          
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
            <motion.div 
              initial={{ rotate: 0 }}
              whileInView={{ rotate: 3 }}
              viewport={{ once: true }}
              style={{ fontFamily: "var(--font-source-serif)" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className=" bg-black rounded-2xl flex items-center justify-center shadow-2xl pointer-events-auto"
            >
               <span style={{ fontFamily: "var(--font-source-serif)" }} className="text-white text-6xl p-4 px-5 font-serif italic font-semibold">w</span>
            </motion.div>
          </div>
        </div>
      )
    },
    {
      title: "Receive",
      description: "Your design is delivered in a few business days. Simple, fast, and ready to use.",
      visual: (
        <div className="w-full h-full flex items-center justify-center p-4">
           <AnimatedFolder 
             title={portfolioData[0].title} 
             projects={portfolioData[0].projects} 
             className="scale-[0.7] sm:scale-[0.75] md:scale-[0.8] lg:scale-[0.85] translate-y-1 bg-transparent border-none shadow-none"
           />
        </div>
      )
    }
  ];

  return (
    <section className="relative z-10 pt-4 pb-32 bg-background">
      <Container>
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-10"
          >
            <span className="px-4 py-1.5 bg-white border border-black/5 rounded-full text-base font-semibold text-black shadow-sm">
              How it works
            </span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Text 
              as="h2" 
              variant="outfit"
              className="text-5xl md:text-6xl lg:text-[56px] font-semibold tracking-tight max-w-5xl leading-[1.02] text-black"
            >
              Welcome to the <Text as="span" variant="serif" className="italic font-serif" style={{ fontFamily: "var(--font-source-serif)" }}>better</Text> way <br className="hidden md:block" />
              of getting design done.
            </Text>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="flex flex-col w-full max-w-[384px]"
            >
              <div className="bg-white p-2 rounded-[32px] h-[450px] shadow-md border border-black/5 flex flex-col group hover:shadow-xl transition-all duration-700 relative">
                <div className="flex flex-col h-full w-full bg-[#F7F7F7] rounded-[24px] overflow-hidden">
                  <div className="h-[233px] w-full">
                    {card.visual}
                  </div>
                  <div className="flex flex-col flex-grow p-8 pt-0 mt-8">
                    <Text as="h3" variant="outfit" className="text-[28px] font-semibold mb-4 tracking-tight text-black leading-tight">
                      {card.title}
                    </Text>
                    <Text className="text-lg text-black/40 leading-relaxed font-medium tracking-tight font-sans">
                      {card.description}
                    </Text>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;
