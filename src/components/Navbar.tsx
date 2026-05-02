"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Text } from "@/components/ui/text"
import { ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"
import { Container } from "@/components/ui/container"

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blog" },
  { name: "404", href: "/404" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md transition-all duration-300">
        <Container className="flex items-center justify-between py-6">
          <Link href="/" className="flex items-baseline gap-0.5 hover:opacity-80 transition-opacity">
            <Text 
              variant="serif" 
              size="2xl" 
              weight="semibold" 
              className="italic" 
              as="span"
            >
              whenevr
            </Text>
            <sup className="text-[10px] font-sans align-top leading-none">®</sup>
          </Link>

          <div className="flex items-center">
            <Button 
              variant="white"
              size="sm"
              className="rounded-full px-5 flex items-center gap-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? "Close" : "Menu"}
              {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </Button>
          </div>
        </Container>
      </header>

      <DrawerContent className="min-h-screen flex flex-col items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              className="text-6xl md:text-8xl font-serif font-bold tracking-tighter hover:italic transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        <div className="absolute bottom-12">
          <Text variant="serif" size="sm" className="text-black/40 italic">© 2025 Whenevr®</Text>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
