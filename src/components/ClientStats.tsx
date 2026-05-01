"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Text } from "@/components/ui/text";
import { Container } from "@/components/ui/container";
import { ArcGalleryHero } from "@/components/ui/arc-gallery-hero-component";
import { BookCallPill } from "./BookCallPill";

const memoryImages = [
  '/image/imgi_10_UT4fxQBnxf542T5Cf7zZOvBxy0.png',
  '/image/imgi_11_4UX9uXT3N0WRExPOcc1r8bpVQAk.png',
  '/image/imgi_12_GSFkssTRojMMfTCPqH1HENDnw.png',
  '/image/imgi_13_pSEmRq7TZ5niunpklVk0dvh1mDA.png',
  '/image/imgi_14_WdMlO6P4eyTomKkSRBDtGLAio4.png',
  '/image/imgi_15_AcrDBNPoA5kazwDFtUC2IeoPoo.png',
  '/image/imgi_16_d8p3LHFKtLnBbQ65oGYA48cZwYI.png',
  '/image/imgi_17_505rrWNYkeLbF8KyvL2Owkhh7I.png',
  '/image/imgi_18_AOAg5gzJT8elHJjF4ot4zv58UAE.png',
  '/image/imgi_19_npXLqR8zSrRQ361syHkuwTjdeds.png',
  '/image/imgi_20_lEVDQNWDkdXcIlfM1j2Kfmp8at8.png',
  '/image/imgi_21_zRjU5BQHkKDyauYKM2E6MQnLpo.png',
  '/image/imgi_22_38I07rfLJ4DXJRQZ7YXCanY6ko.png',
].slice(0, 13);

export const ClientStats = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      ref={sectionRef} 
      className="relative pt-96 pb-96 md:pt-[400px] md:pb-[400px] overflow-hidden bg-background z-20"
    >
      {/* Background Arc Gallery */}
      <div className="absolute inset-0 z-20 pointer-events-none overflow-visible">
        <ArcGalleryHero 
          images={memoryImages} 
          scrollRef={sectionRef}
          startAngle={195} 
          endAngle={-15} 
          radiusLg={520}
          radiusMd={420}
          radiusSm={300}
          cardSizeLg={110}
          cardSizeMd={90}
          cardSizeSm={60}
          className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      {/* Main Content: Headline and CTA */}
      <Container className="relative z-30 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 relative"
        >
          <Text 
            as="h2" 
            className="text-[48px] md:text-[56px] font-semibold tracking-tighter leading-[1.05] text-black font-sans max-w-4xl"
          >
            100+ clients getting <br />
            <Text as="span" variant="serif" className="italic font-serif">better</Text> design, faster.
          </Text>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <BookCallPill />
        </motion.div>
      </Container>

      {/* Edge Fades for Section Blending */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background via-background/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent z-10 pointer-events-none" />
    </section>
  );
};
