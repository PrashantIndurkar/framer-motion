'use client';

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

// --- The ArcGalleryHero Component ---
type ArcGalleryHeroProps = {
  images: string[];
  scrollRef?: React.RefObject<HTMLElement>;
  startAngle?: number;
  endAngle?: number;
  // radius for different screen sizes
  radiusLg?: number;
  radiusMd?: number;
  radiusSm?: number;
  // size of each card for different screen sizes
  cardSizeLg?: number;
  cardSizeMd?: number;
  cardSizeSm?: number;
  // optional extra class on outer section
  className?: string;
};

export const ArcGalleryHero: React.FC<ArcGalleryHeroProps> = ({
  images,
  scrollRef,
  startAngle = 20,
  endAngle = 160,
  radiusLg = 480,
  radiusMd = 360,
  radiusSm = 260,
  cardSizeLg = 120,
  cardSizeMd = 100,
  cardSizeSm = 80,
  className = '',
}) => {
  const [dimensions, setDimensions] = useState({
    radius: radiusLg,
    cardSize: cardSizeLg,
  });

  // Scroll-driven animation - tied to the section ref for precision
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"]
  });

  const rotateTransform = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const rotate = useSpring(rotateTransform, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001
  });

  // Effect to handle responsive resizing of the arc and cards
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setDimensions({ radius: radiusSm, cardSize: cardSizeSm });
      } else if (width < 1024) {
        setDimensions({ radius: radiusMd, cardSize: cardSizeMd });
      } else {
        setDimensions({ radius: radiusLg, cardSize: cardSizeLg });
      }
    };

    handleResize(); // Set initial size
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [radiusLg, radiusMd, radiusSm, cardSizeLg, cardSizeMd, cardSizeSm]);

  // Ensure at least 2 points to distribute angles for the arc calculation
  const count = Math.max(images.length, 2);
  const step = (endAngle - startAngle) / (count - 1);

  return (
    <div className={cn("relative overflow-visible w-full", className)}>
      {/* Background ring container that controls geometry */}
      <motion.div
        className="relative mx-auto origin-center"
        style={{
          width: '100%',
          // Give it enough height to show the full arc around the text
          height: dimensions.radius * 2.0,
          rotate: rotate,
        }}
      >
        {/* Center pivot for transforms - positioned at center-ish for better wrapping */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
          {/* Each image is positioned on the circle */}
          {images.map((src, i) => {
            const angle = startAngle + step * i; // degrees
            const angleRad = (angle * Math.PI) / 180;
            
            // Calculate x and y positions on the arc
            const x = Math.cos(angleRad) * dimensions.radius;
            const y = Math.sin(angleRad) * dimensions.radius;
            
            // Calculate effects based on position (blur and fade out only at the very ends)
            const midIndex = (count - 1) / 2;
            const distanceRef = Math.abs(i - midIndex) / midIndex; // 0 at center, 1 at edges
            
            // Steeper curves ensure sharpness for almost all avatars, with a very subtle fade/blur at the absolute ends
            const opacity = Math.max(0.4, 1 - Math.pow(distanceRef, 6));
            const blurValue = Math.pow(distanceRef, 10) * 2; // Max 2px blur, extremely localized
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ 
                  opacity: opacity, 
                  scale: 1,
                  filter: `blur(${blurValue}px)`
                }}
                transition={{ 
                  duration: 0.4, 
                  delay: i * 0.03,
                  ease: "easeOut"
                }}
                className="absolute"
                style={{
                  width: dimensions.cardSize,
                  height: dimensions.cardSize,
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% - ${y}px)`,
                  transform: `translate(-50%, -50%)`,
                  zIndex: count - i,
                }}
              >
                <div className="rounded-full shadow-xl overflow-hidden border-[4px] border-white bg-white dark:bg-neutral-900 transition-all duration-300 hover:scale-110 w-full h-full">
                  <img
                    src={src}
                    alt={`User ${i + 1}`}
                    className="block w-full h-full object-cover"
                    draggable={false}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://placehold.co/400x400/334155/e2e8f0?text=User`;
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};
