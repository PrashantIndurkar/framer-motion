"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface GridTagBadgeProps {
  children: React.ReactNode
  className?: string
}

const GridTagBadge = ({ children, className }: GridTagBadgeProps) => {
  return (
    <span
      className={cn(
        "text-[10px] uppercase tracking-wider font-bold bg-white/80 backdrop-blur-md px-3 py-1 rounded-full shadow-sm text-neutral-900 border border-black/5",
        className
      )}
    >
      {children}
    </span>
  )
}

interface GridBlogCardProps {
  title: string
  description: string
  image: string
  tag: string
  className?: string
}

const GridBlogCard = ({
  title,
  description,
  image,
  tag,
  className,
}: GridBlogCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className={cn(
        "group flex flex-col bg-white rounded-3xl overflow-hidden p-2 w-full md:w-[389px] h-[458px] border border-neutral-200 shadow-md transition-all duration-300",
        className
      )}
    >
      {/* Image Container - Strictly constrained height, handles internal hover */}
      <div className="relative w-full h-[281px] shrink-0 rounded-2xl overflow-hidden">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative w-full h-full"
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover brightness-95 contrast-105"
          />
        </motion.div>
        <div className="absolute top-3 right-3 z-10">
          <GridTagBadge>{tag}</GridTagBadge>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 px-4 py-5 flex-grow">
        <h3 className="text-xl font-semibold text-neutral-900 leading-tight font-outfit tracking-tight group-hover:text-brand-blue transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-neutral-600 leading-relaxed font-sans line-clamp-2">
          {description}
        </p>
      </div>
    </motion.article>
  )
}

export default function BlogGridSection() {
  const blogs = [
    {
      title: "How to Get More Done Without Hiring a Full Design Team",
      description: "Lean teams are using design subscriptions to stay fast without hiring a full in-house team.",
      tag: "Operations",
      image: "/image/imgi_42_ldLzFEXXuK2q3bgbFfV6MlgqbSw.jpg",
    },
    {
      title: "What Working With a Design Subscription Actually Looks Like",
      description: "A behind the scenes look at how founders use design subscriptions to move faster.",
      tag: "Workflow",
      image: "/image/imgi_43_XTdwXzaaZ0uFZA76FvHmRgz1z4.jpg",
    },
    {
      title: "The Real Cost of Bad Design (It's Not What You Think)",
      description: "Poor design slows down decisions, clutters your message and stalls growth.",
      tag: "Growth",
      image: "/image/imgi_44_DcNJgQIOkkv7HpGnt8XS2UJ0sGE.png",
    },
  ]

  return (
    <section className="bg-[#F2F2F2] pt-8 pb-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Using a strict grid to prevent blowout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
          {blogs.map((blog, index) => (
            <GridBlogCard key={index} {...blog} />
          ))}
        </div>
      </div>
    </section>
  )
}
