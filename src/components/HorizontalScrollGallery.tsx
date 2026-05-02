"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef } from "react"

const items = [
  { 
    id: 1, 
    image: "/image/imgi_78_UK3ji9XKftVKablDa07xbZ7o.jpg" 
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
  
  // Track scroll progress of the entire section
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  })

  // Add smooth physics (Spring) for a premium feel
  const xProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Map progress (0-1) to horizontal translation
  // 3 items, each 70vw. 
  // To move from Item 1 at left to Item 3 at left:
  // Item 1 is at 0vw
  // Item 2 is at 70vw
  // Item 3 is at 140vw
  // So we move from 0% to -(140/210)% of the total container width?
  // Easier to use -140vw directly.
  const x = useTransform(xProgress, [0, 1], ["0vw", "-140vw"])

  return (
    <section 
      ref={targetRef}
      data-theme="dark"
      className="relative h-[400vh] bg-background-dark z-30"
    >
      {/* Sticky container that stays fixed while you scroll vertically */}
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        
        {/* Horizontal flex container that moves left/right */}
        <motion.div 
          style={{ x }}
          className="flex flex-nowrap will-change-transform"
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[70vw] h-screen relative overflow-hidden bg-neutral-900 border-r border-white/10"
            >
              <img
                src={item.image}
                alt={`Gallery item ${item.id}`}
                className="w-full h-full object-cover"
                loading="eager"
              />
              {/* Subtle overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
