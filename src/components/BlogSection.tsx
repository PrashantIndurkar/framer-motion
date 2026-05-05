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
          "text-sm bg-white px-4 py-1 rounded-full shadow-sm text-neutral-900 font-semibold",
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
        "text-sm font-semibold px-3 py-1 rounded-full w-fit transition-all duration-300",
        variant === "tag" 
          ? "bg-neutral-200 text-black" 
          : "bg-white/80 backdrop-blur-md text-black shadow-sm leading-[21px]",
        className
      )}
    >
      {children}
    </span>
  )
}

interface BlogData {
  slug: string
  title: string
  description: string
  image: string
  tag: string
  readTime?: string
  author?: string
}

/**
 * Handles the display of the featured (large) blog card.
 */
const FeaturedBlogCard = ({
  slug,
  title,
  description,
  image,
  tag,
  readTime,
  author,
}: BlogData) => (
  <Link href={`/blog/${slug}`} className="block group lg:col-span-3">
    <motion.article
      initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col bg-white rounded-3xl overflow-hidden p-2 transition-all duration-300 hover:shadow-lg border-none shadow-md lg:flex-row lg:h-[500px] h-auto"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden bg-neutral-100 shrink-0 w-full lg:w-2/5 h-[281px] lg:h-full rounded-t-2xl lg:rounded-l-2xl lg:rounded-r-none rounded-b-none">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative w-full h-full"
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-all duration-500 opacity-90 grayscale brightness-95"
          />
        </motion.div>
        
        {/* Fading effect at the bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent to-60% pointer-events-none" />

        {/* Tag on Image - Only for small screens */}
        <div className="absolute top-3 right-3 z-10 lg:hidden">
          <TagBadge variant="tag" className="bg-white/80 backdrop-blur-md border border-white/20">{tag}</TagBadge>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-between flex-grow lg:w-3/5 p-4 lg:pt-4 lg:pb-10 lg:pr-10 lg:pl-8">
        <div className="space-y-4">
          <TagBadge variant="tag" className="hidden lg:block">{tag}</TagBadge>
          
          <h3 className="font-semibold text-neutral-900 leading-tight font-outfit tracking-tight lg:text-[40px] text-xl lg:leading-tight">
            {title}
          </h3>
          <p className="text-neutral-500 font-sans font-medium leading-relaxed lg:text-lg text-base lg:max-w-xl line-clamp-3">
            {description}
          </p>
        </div>

        {readTime && author && (
          <div className="items-center justify-between mt-8 hidden lg:flex">
            <div className="flex items-center gap-2 text-xs font-semibold text-black font-sans">
              <span className="w-2 h-2 bg-black rounded-full" />
              <span>{readTime}</span>
            </div>
            <span style={{ fontFamily: "var(--font-source-serif)" }} className="text-2xl italic text-black font-sans font-semibold">
              {author}
            </span>
          </div>
        )}
      </div>
    </motion.article>
  </Link>
);

/**
 * Handles the display of standard (small) blog cards.
 */
const StandardBlogCard = ({
  slug,
  title,
  description,
  image,
  tag,
  index = 0,
}: BlogData & { index: number }) => (
  <Link href={`/blog/${slug}`} className="block group col-span-1">
    <motion.article
      initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration: 1.1, delay: 0.1 * index, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col bg-white rounded-3xl overflow-hidden p-2 transition-all duration-300 hover:shadow-lg border-none shadow-md h-[458px]"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden bg-neutral-100 shrink-0 w-full h-[281px] rounded-2xl">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative w-full h-full"
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-all duration-500 brightness-95 contrast-105"
          />
        </motion.div>
        
        {/* Fading effect at the bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent to-60% pointer-events-none" />

        <div className="absolute top-3 right-3 z-10 block">
          <TagBadge variant="tag" className="bg-white/80 backdrop-blur-md border border-white/20">{tag}</TagBadge>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-between flex-grow p-4 py-5">
        <div className="space-y-4">
          <h3 className="font-semibold text-neutral-900 font-outfit tracking-tight text-xl leading-[1.3]">
            {title}
          </h3>
          <p className="text-neutral-500 font-sans font-medium leading-relaxed text-base line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </motion.article>
  </Link>
);

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
      isFeatured: true,
    },
    {
      slug: "hiring-design-team",
      title: "How to Get More Done Without Hiring a Full Design Team",
      description: "Lean teams are using design subscriptions to stay fast without hiring a full in-house team.",
      tag: "Operations",
      image: "/image/imgi_88_A2Jpv443KkrqGb6fQMCtPKhklI.png",
    },
    {
      slug: "design-subscription-workflow",
      title: "What Working With a Design Subscription Actually Looks Like",
      description: "A behind the scenes look at how founders use design subscriptions to move faster.",
      tag: "Workflow",
      image: "/image/imgi_89_mMGyaOXjCOlqMFzBYOOC6xcyeR0.png",
    },
    {
      slug: "cost-of-bad-design",
      title: "The Real Cost of Bad Design (It's Not What You Think)",
      description: "Poor design slows down decisions, clutters your message and stalls growth.",
      tag: "Growth",
      image: "/image/imgi_90_XqWtWOfsLoqWpqyf7St5rHsB2p4.png",
    },
  ];

  const featuredBlog = blogs.find(b => b.isFeatured);
  const standardBlogs = blogs.filter(b => !b.isFeatured);

  return (
    <section id="blog" className="bg-[#f0f0f0] pt-20 pb-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center space-y-6 mb-12"
        >
          <TagBadge variant="pill">Blog</TagBadge>
          <h2 className="text-4xl md:text-[56px] font-semibold leading-[1.05] text-neutral-900 font-outfit max-w-3xl">
            Practical reads to <br /> help you move{" "}
            <span className="italic font-serif" style={{ fontFamily: "var(--font-source-serif)" }}>faster.</span>
          </h2>
        </motion.div>

        {/* Unified Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredBlog && (
            <FeaturedBlogCard {...featuredBlog} />
          )}
          {standardBlogs.map((blog, index) => (
            <StandardBlogCard key={index} {...blog} index={index + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
