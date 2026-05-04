"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Text } from "@/components/ui/text"
import { ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"
import { Container } from "@/components/ui/container"
import { motion, AnimatePresence } from "framer-motion"

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blog" },
  { name: "404", href: "/404" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isDarkSection, setIsDarkSection] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY
      const threshold = window.innerHeight * 0.2
      setIsScrolled(scrollPos > threshold)

      // Reliable section theme detection
      const sections = document.querySelectorAll("section[data-theme]")
      let currentTheme = "light"
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        // If the top of the section has reached the navbar area (approx 80px)
        if (rect.top <= 80 && rect.bottom >= 40) {
          currentTheme = section.getAttribute("data-theme") || "light"
        }
      })
      
      setIsDarkSection(currentTheme === "dark")
    }

    window.addEventListener("scroll", handleScroll)
    // Initial check
    handleScroll()
    
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock body scroll when menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const navColor = isOpen ? "text-black" : (isDarkSection ? "text-white" : "text-black")

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500">
        <div 
          className={cn(
            "absolute inset-0 transition-all duration-500",
            isScrolled ? "bg-white/5 backdrop-blur-[6px]" : "bg-transparent"
          )} 
        />

        <Container className="relative flex items-center justify-between pt-[19px] pb-6 z-10">
          <Link 
            href="/" 
            className={cn(
              "flex items-baseline gap-0.5 hover:opacity-80 transition-colors duration-500",
              navColor
            )}
          >
            <span className="text-3xl font-serif font-semibold italic tracking-tight" style={{ fontFamily: "var(--font-source-serif)" }}>
              whenevr
            </span>
            <sup className="text-sm font-sans -top-3 align-top leading-none font-bold opacity-80 ml-0.5" >®</sup>
          </Link>
          <div className="flex items-center gap-4">
            <Button 
              variant="white"
              className="h-auto py-2.5 px-4 text-sm font-semibold text-black shadow-sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="flex items-center gap-2">
                {isOpen ? "Close" : "Menu"}
                {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </div>
            </Button>
          </div>
        </Container>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[90] flex flex-col items-center justify-center bg-[#f0f0f0] border-none outline-none overflow-hidden"
          >
            <div className="flex flex-col items-center gap-1.5 translate-y-10">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link 
                    href={link.href} 
                    className={cn(
                      "text-[64px] leading-[70px] font-sans font-semibold tracking-tight text-black transition-all duration-300",
                      "hover:text-black/60"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + NAV_LINKS.length * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8"
              >
                <Text className="text-[14px] leading-[21px] font-sans font-semibold text-black">
                  © 2025 whenevr®
                </Text>
              </motion.div>
            </div>
            

          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
