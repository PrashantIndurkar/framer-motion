"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { AnimatedButton } from "@/components/ui/animated-button";
import { FAQItem } from "@/components/FAQItem";

const faqs = [
  {
    question: "How many design requests can I submit?",
    answer: "You can submit as many requests as you'd like. They'll be handled one at a time, in the order they're added to your Notion board.",
    defaultOpen: true
  },
  {
    question: "What kind of design work is included?",
    answer: "Most requests related to web, product, and marketing design are covered. That includes landing pages, UI design, Framer builds, brand assets, and more.",
    defaultOpen: true
  },
  {
    question: "How fast will I receive my designs?",
    answer: "Most designs are completed within 2-3 business days. More complex requests might take a bit longer."
  },
  {
    question: "Can I pause my subscription?",
    answer: "Yes, you can pause or cancel your subscription at any time. If you pause, you'll have the remaining days in your billing cycle available for future use."
  },
  {
    question: "What if I need development too?",
    answer: "We offer development services as an add-on or as part of a custom package. Feel free to reach out to discuss your specific needs."
  }
];

export function FAQSection() {
  return (
    <section className="bg-neutral-100 py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-4xl shadow-lg p-8 md:p-12">
          {/* Top Badge */}
          <Badge variant="faq" className="mb-6">
            FAQs
          </Badge>

          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 leading-[1.1]">
                Frequently <br className="hidden md:block" />
                Asked <span className="italic font-serif">Questions</span>
              </h2>
              
              <div className="space-y-1">
                <p className="text-sm text-neutral-500">Email</p>
                <p className="text-base font-medium text-neutral-900">
                  hello@whenevr.com
                </p>
              </div>
            </div>

            <AnimatedButton 
              className="w-full md:w-auto"
            >
              Get in touch
            </AnimatedButton>
          </div>

          {/* Accordion List */}
          <div className="mt-12 flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                defaultOpen={faq.defaultOpen}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
