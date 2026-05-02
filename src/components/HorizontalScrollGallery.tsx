"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef } from "react"

const items = [
  { 
    id: 1, 
    image: "/image/imgi_79_gdoBqgMU9ke6K07ShZLmpfUoWc.jpg" 
  },
  { 
    id: 2, 
    image: "/image/imgi_80_ldLzFEXXuK2q3bgbFfV6MlgqbSw.jpg" 
  },
  { 
    id: 3, 
    image: "/image/imgi_81_XTdwXzaaZ0uFZA76FvHmRgz1z4.jpg" 
  },
]

export function HorizontalScrollGallery() {
  const targetRef = useRef<HTMLDivElement>(null)
  
  // 1. Capture the scroll progress of the entire section
  const { scrollYProgress } = useScroll({
    target: targetRef,
    // Start tracking when the top of the section hits the top of the viewport
    // End tracking when the bottom of the section hits the bottom of the viewport
    offset: ["start start", "end end"]
  })

  // 2. Add smooth physics (Spring) to the scroll progress
  // This removes "popping" and adds a natural momentum
  const xProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // 3. Map the progress (0-1) to horizontal translation (-100%)
  // Since we have 3 items and want to see them all, we move the container to the left.
  // Using -66% for 3 items (to reveal the last 2)
  const x = useTransform(xProgress, [0, 1], ["0%", "-66.6%"])

  return (
    <section 
      ref={targetRef}
      className="relative h-[400vh] bg-background-dark z-30"
    >
      {/* Sticky container that stays fixed while you scroll vertically */}
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        
        {/* Horizontal flex container that moves left/right */}
        <motion.div 
          style={{ x }}
          className="flex flex-nowrap gap-[10vw] px-[10vw] will-change-transform"
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[80vw] h-[70vh] md:h-[80vh] rounded-[40px] md:rounded-[64px] relative overflow-hidden shadow-2xl border border-white/5 bg-neutral-900"
            >
              <img
                src={item.image}
                alt={`Gallery item ${item.id}`}
                className="w-full h-full object-cover"
                loading="eager"
              />
              {/* Subtle overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
