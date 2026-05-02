"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface TagBadgeProps {
  children: React.ReactNode
  className?: string
  variant?: "pill" | "tag"
}

const TagBadge = ({ children, className, variant = "tag" }: TagBadgeProps) => {
  if (variant === "pill") {
    return (
      <span
        className={cn(
          "text-sm bg-white px-4 py-1 rounded-full shadow-sm text-neutral-900 font-medium border border-black/5",
          className
        )}
      >
        {children}
      </span>
    )
  }

  return (
    <span
      className={cn(
        "text-xs bg-neutral-200 px-3 py-1 rounded-full w-fit text-neutral-700 font-medium",
        className
      )}
    >
      {children}
    </span>
  )
}

interface BlogCardProps {
  slug: string
  title: string
  description: string
  image: string
  tag: string
  readTime: string
  author: string
  className?: string
}

const BlogCard = ({
  slug,
  title,
  description,
  image,
  tag,
  readTime,
  author,
  className,
}: BlogCardProps) => {
  return (
    <Link href={`/blog/${slug}`} className="block">
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className={cn(
          "flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden p-2 md:h-[500px] gap-6 md:gap-8 border border-black/5 hover:border-black/10 transition-colors",
          className
        )}
      >
        {/* Left Image Section - Only this part hovers */}
        <div className="group w-full md:w-2/5 h-[300px] md:h-full relative rounded-2xl overflow-hidden bg-neutral-100">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative w-full h-full"
          >
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover opacity-80 blur-[1px] grayscale transition-all duration-500"
            />
          </motion.div>
        </div>

        {/* Right Content Section */}
        <div className="w-full md:w-3/5 flex flex-col justify-between py-6 pr-6 pl-4">
          <div className="space-y-4">
            <TagBadge>{tag}</TagBadge>
            <h3 className="text-2xl md:text-5xl font-semibold text-neutral-900 leading-tight font-outfit">
              {title}
            </h3>
            <p className="text-neutral-600 text-sm md:text-lg leading-relaxed max-w-xl font-sans">
              {description}
            </p>
          </div>

          <div className="flex items-center justify-between mt-8 border-t border-black/5 pt-6">
            <div className="flex items-center gap-2 text-sm text-neutral-500 font-sans">
              <span className="w-1.5 h-1.5 bg-black rounded-full" />
              <span>{readTime}</span>
            </div>
            <span className="text-sm italic text-neutral-700 font-sans font-medium">
              {author}
            </span>
          </div>
        </div>
      </motion.article>
    </Link>
  )
}

export default function BlogSection() {
  const blogs = [
    {
      slug: "startup-design-struggles",
      title: "Why Most Startups Keep Getting Design Wrong",
      description:
        "Many teams move fast on product but fall behind on design. This post breaks down why that happens, how it holds you back, and what to do instead if you want to stay clear and competitive.",
      image: "/image/imgi_54_ueqZoCFRDc46Zk64JejcJN460.png",
      tag: "Branding",
      readTime: "5 min read",
      author: "by Whenevr®",
    },
  ]

  return (
    <section className="bg-[#F2F2F2] pt-20 pb-0 px-6">
      <div className="max-w-[1200px] mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-6 mb-16">
          <TagBadge variant="pill">Blog</TagBadge>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-neutral-900 font-outfit max-w-3xl">
            Practical reads to help you move{" "}
            <span className="italic font-serif">faster.</span>
          </h2>
        </div>

        {/* Blog Cards List */}
        <div className="grid gap-8">
          {blogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>
      </div>
    </section>
  )
}
