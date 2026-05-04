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
        "bg-white p-2 rounded-2xl w-[365px]  shadow-md border border-black/5 shrink-0 group transition-all duration-300",
        className
      )}
    >
      <div className="bg-[#F7F7F7] p-4 rounded-2xl h-full w-full relative">
        <div className="absolute top-6 right-6">
          <Quote className="w-6 h-6 text-black/5 fill-black/5 rotate-180" />
        </div>
        <div className="flex flex-col gap-3 mb-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-100 border border-black/5">
            <Image
              src={avatar}
              alt={name}
              fill
              className="object-cover h-12 w-12"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold text-black leading-tight font-sans">
              {name}
            </span>
            <span className="text-xs text-black/30 font-medium">
              {role}
            </span>
          </div>
        </div>
        <p className="text-sm leading-[1.6] text-black/60 font-medium line-clamp-3 text-left">
          {content}
        </p>
      </div>
    </div>
  );
};
