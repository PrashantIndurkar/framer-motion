"use client";

import React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  avatar: string;
  className?: string;
}

export const TestimonialCard = ({
  name,
  role,
  content,
  avatar,
  className,
}: TestimonialCardProps) => {
  return (
    <div
      className={cn(
        "bg-white p-2 rounded-[32px] w-[365px] h-[223px] shadow-md border border-black/5 shrink-0 group transition-all duration-300",
        className
      )}
    >
      <div className="bg-[#F7F7F7] p-6 rounded-[24px] h-full w-full">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-100 border border-black/5">
              <Image
                src={avatar}
                alt={name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[15px] font-semibold text-black leading-tight">
                {name}
              </span>
              <span className="text-[13px] text-black/40 font-medium">
                {role}
              </span>
            </div>
          </div>
          <Quote className="w-6 h-6 text-black/5 rotate-180" />
        </div>
        <p className="text-[15px] leading-[1.6] text-black/70 font-medium line-clamp-3">
          {content}
        </p>
      </div>
    </div>
  );
};
