"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { useSmoothScroll } from "./SmoothScroll"
import Marquee from "@/components/ui/marquee"

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
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024)
    }
    checkDesktop()
    window.addEventListener('resize', checkDesktop)
    return () => window.removeEventListener('resize', checkDesktop)
  }, [])
  
  // Track scroll progress of the entire section (only for desktop)
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

  const { smoothY } = useSmoothScroll() || {}
  const [sectionTop, setSectionTop] = useState(0)

  useEffect(() => {
    if (targetRef.current && isDesktop) {
      setSectionTop(targetRef.current.offsetTop)
    }
  }, [isDesktop])

  // Map progress (0-1) to horizontal translation
  const x = useTransform(xProgress, [0, 1], ["0vw", "-140vw"])

  // COMPENSATE for SmoothScroll wrapper translation to simulate "sticky"
  const stickyY = useTransform(smoothY || useSpring(0), (latest) => {
    if (!isDesktop || !latest || latest < sectionTop) return 0
    const distance = latest - sectionTop
    const maxDistance = (targetRef.current?.offsetHeight || 0) - window.innerHeight
    return Math.min(distance, maxDistance)
  })

  if (!isDesktop) {
    return (
      <section className="bg-background-dark py-12 overflow-hidden">
        <div className="h-[450px] w-full flex items-center">
          <Marquee 
            className="py-0" 
            pauseOnHover={false}
            repeat={4}
            duration="60s"
            gap="1rem"
          >
            {items.map((item) => (
              <div
                key={`mobile-${item.id}`}
                className="flex-shrink-0 w-[80vw] h-[450px] relative overflow-hidden bg-neutral-900 border-r border-white/5"
              >
                <img
                  src={item.image}
                  alt={`Gallery item ${item.id}`}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>
            ))}
          </Marquee>
        </div>
      </section>
    )
  }

  return (
    <section 
      ref={targetRef}
      data-theme="dark"
      className="relative h-[400vh] bg-background-dark z-30"
    >
      <motion.div 
        style={{ y: stickyY }}
        className="relative h-screen w-full flex items-center overflow-hidden"
      >
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

