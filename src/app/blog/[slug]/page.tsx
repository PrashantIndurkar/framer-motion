"use client"

import React from "react"
import { useParams, notFound } from "next/navigation"
import Image from "next/image"
import { motion } from "framer-motion"
import { Navbar } from "@/components/Navbar"
import { BlogFooterCTA } from "@/components/BlogFooterCTA"
import { BLOG_POSTS } from "@/lib/blog-data"
import { Container } from "@/components/ui/container"
import { cn } from "@/lib/utils"

const PageTransition = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    {children}
  </motion.div>
)

export default function BlogDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const post = BLOG_POSTS.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="bg-[#F7F7F7] min-h-screen pt-24">
      
      <PageTransition>
        {/* Hero Section */}
        <section data-theme="light" className="pt-24 pb-10 px-6">
          <div className="max-w-[800px] mx-auto text-left">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-sm text-neutral-500 font-sans font-medium mb-4"
            >
              {post.date}
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-[56px] font-semibold tracking-tight leading-tight md:leading-[62px] text-neutral-900 font-sans mb-6"
            >
              {post.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-neutral-500 font-sans font-medium leading-relaxed"
            >
              {post.description}
            </motion.p>
            
            {/* Cover Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-12 relative w-full aspect-[800/571] bg-white p-[8px] rounded-3xl overflow-hidden border border-black/5 shadow-md"
            >
              <div className="relative w-full h-full rounded-[1.2rem] overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section data-theme="light" className="pb-24 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="max-w-none">
              {post.content.map((item, index) => {
                if (item.type === 'heading') {
                  return (
                    <motion.h2 
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="text-[32px] leading-[42px] font-semibold text-neutral-900 mt-10 mb-4 font-sans"
                    >
                      {item.text}
                    </motion.h2>
                  )
                }
                return (
                  <motion.p 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-neutral-900 leading-relaxed text-lg mt-4 font-sans font-medium"
                  >
                    {item.text}
                  </motion.p>
                )
              })}
            </div>
            
            {/* Social Share / Small Bio - Optional but nice for design */}
            <div className="mt-20 pt-  border-gray-200">
               <p className="text-lg font-semibold text-neutral-900 mb-2">Stay in the loop.</p>
               <p className="text-sm text-neutral-900 max-w-xs mb-6 font-medium">Simple ideas on design, clarity, and <br /> momentum — shared on X and Instagram.</p>
               <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.28.058-2.152.26-2.917.557-.791.307-1.463.717-2.133 1.387s-1.08 1.342-1.387 2.133c-.297.765-.499 1.637-.557 2.917-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.058 1.28.26 2.152.557 2.917.307.791.717 1.463 1.387 2.133s1.342 1.08 2.133 1.387c.765.297 1.637.499 2.917.557 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.28-.058 2.152-.26 2.917-.557.791-.307 1.463-.717 2.133-1.387s1.08-1.342 1.387-2.133c.297-.765.499-1.637-.557-2.917-.058-1.28-.072-1.688-.072-4.947s.014-3.667.072-4.947c-.058-1.28-.26-2.152-.557-2.917-.307-.791-.717-1.463-1.387-2.133s-1.342-1.08-2.133-1.387c-.765-.297-1.637-.499-2.917-.557-1.28-.058-1.688-.072-4.947-.072zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z"/></svg>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Footer CTA Section */}
        <BlogFooterCTA />
      </PageTransition>
    </main>
  )
}
