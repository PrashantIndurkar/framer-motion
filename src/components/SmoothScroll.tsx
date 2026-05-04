"use client"

import React, { createContext, useContext, useEffect, useRef, useState, useCallback } from "react"
import { motion, useScroll, useSpring, useTransform, MotionValue } from "framer-motion"

const ScrollContext = createContext<{
  scrollY: MotionValue<number>;
  smoothY: MotionValue<number>;
} | null>(null)

export const useSmoothScroll = () => useContext(ScrollContext)

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [contentHeight, setContentHeight] = useState(0)

  // Update content height on resize and dynamic content changes
  const onResize = useCallback(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight)
    }
  }, [])

  useEffect(() => {
    // Initial height calculation
    onResize()
    
    // ResizeObserver handles dynamic content changes (images loading, accordion expands, etc.)
    const resizeObserver = new ResizeObserver(() => {
      onResize()
    })
    
    if (contentRef.current) {
      resizeObserver.observe(contentRef.current)
    }
    
    window.addEventListener("resize", onResize)
    return () => {
      window.removeEventListener("resize", onResize)
      resizeObserver.disconnect()
    }
  }, [onResize])

  // Get native scroll position from window
  const { scrollY } = useScroll()

  // Create smooth spring for the scroll position
  // These settings control the "heavy" and "inertial" feel
  const smoothY = useSpring(scrollY, {
    stiffness: 30,   // Lower stiffness = slower/softer movement
    damping: 15,     // Lower damping = more inertia/momentum
    mass: 0.8,       // Mass adds "weight" to the scroll
    restDelta: 0.001
  })

  // Transform the smooth value into a negative translate value for the fixed container
  const y = useTransform(smoothY, (value) => -value)

  // Sync scroll height with body height
  useEffect(() => {
    document.body.style.height = `${contentHeight}px`
    return () => {
      document.body.style.height = ""
    }
  }, [contentHeight])

  return (
    <ScrollContext.Provider value={{ scrollY, smoothY }}>
      {/* 
          This dummy div creates the actual scrollable area in the body.
          The user scrolls this, and we smooth that movement to the content.
      */}
      <div style={{ height: contentHeight }} className="w-full pointer-events-none" />
      
      {/* 
          The actual content wrapper that is translated smoothly.
          Fixed positioning keeps it in view while we scroll the dummy area.
      */}
      <motion.div
        ref={contentRef}
        style={{ y }}
        className="fixed top-0 left-0 w-full overflow-hidden will-change-transform"
      >
        {children}
      </motion.div>
    </ScrollContext.Provider>
  )
}
