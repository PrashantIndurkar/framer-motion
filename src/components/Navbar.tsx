"use client"

import * as React from "react"
import Link from "next/link"
import { AnimatedButton } from "@/components/ui/animated-button"
import { Text } from "@/components/ui/text"
import { ChevronDown, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Drawer, DrawerContent } from "@/components/ui/drawer"
import { Container } from "@/components/ui/container"

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

  const navColor = isOpen ? "text-black" : (isDarkSection ? "text-white" : "text-black")

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
        <div 
          className={cn(
            "absolute inset-0 transition-all duration-500",
            isScrolled ? "bg-white/5 backdrop-blur-[6px] border-b border-black/5" : "bg-transparent border-transparent"
          )} 
        />

        <Container className="relative flex items-center justify-between py-6 z-10">
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
            <sup className="text-[10px] font-sans -top-4 align-top leading-none font-bold opacity-80">®</sup>
          </Link>

          <div className="flex items-center gap-4">
            <AnimatedButton 
              variant="white"
              className="h-[44px] px-8 text-sm shadow-sm"
              onClick={() => setIsOpen(!isOpen)}
              hoverText={isOpen ? "Close" : "Open"}
            >
              <div className="flex items-center gap-2">
                {isOpen ? "Close" : "Menu"}
                {isOpen ? <X size={14} /> : <ChevronDown size={14} />}
              </div>
            </AnimatedButton>
          </div>
        </Container>
      </header>

      <DrawerContent className="min-h-screen flex flex-col items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-6">
          {NAV_LINKS.map((link, i) => (
            <Link 
              key={link.name}
              href={link.href} 
              className={cn(
                "text-6xl md:text-8xl font-serif font-bold tracking-tighter transition-all duration-500",
                "hover:italic hover:tracking-tight",
                "opacity-0 animate-in fade-in slide-in-from-bottom-4 fill-mode-forwards"
              )}
              style={{ animationDelay: `${i * 100}ms` }}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        <div className="absolute bottom-12 flex flex-col items-center gap-4">
          <Text variant="serif" size="sm" className="text-black/40 italic">© 2025 Whenevr®</Text>
          <div className="flex gap-6">
            <Link href="#" className="text-xs font-medium text-black/40 hover:text-black transition-colors">Twitter</Link>
            <Link href="#" className="text-xs font-medium text-black/40 hover:text-black transition-colors">Instagram</Link>
            <Link href="#" className="text-xs font-medium text-black/40 hover:text-black transition-colors">LinkedIn</Link>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
