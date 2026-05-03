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
    answer: "Most requests related to web, product, and marketing design are covered. That includes landing pages, UI design, Framer builds, brand assets, and more."
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
    <section className="bg-neutral-100 py-24 px-6 flex justify-center">
      {/* Outer White Frame */}
      <div className="bg-white rounded-[32px] border border-black/5 p-2 w-full max-w-[588px] h-[716px] flex flex-col shadow-sm">
        {/* Inner Content Card */}
        <div className="bg-[#F7F7F7] rounded-[24px] p-10 flex flex-col h-full overflow-hidden">
          {/* Header Section */}
          <div className="mb-10">
            <Badge variant="faq" className="mb-8 font-semibold text-[12px] tracking-wider bg-white text-neutral-500 uppercase py-1.5 px-4 border border-black/5 rounded-full shadow-sm">
              FAQs
            </Badge>
            
            <h2 className="text-[32px] md:text-[40px] font-semibold tracking-tight text-neutral-900 leading-[1.1] mb-8">
              Frequently <br />
              Asked <span className="italic font-serif" style={{ fontFamily: "var(--font-source-serif)" }}>Questions</span>
            </h2>

            <div className="flex justify-between items-end">
              <div>
                <p className="text-[10px] text-neutral-400 font-medium uppercase tracking-[0.2em] mb-1">Email</p>
                <p className="text-base font-semibold text-neutral-900">
                  hello@whenevr.com
                </p>
              </div>
              
              <AnimatedButton 
                className="text-lg font-semibold tracking-tight flex-shrink-0 px-[30px] py-[17px]"
                hoverText="Contact"
              >
                Get in touch
              </AnimatedButton>
            </div>
          </div>

          {/* FAQ List Section */}
          <div className="flex-1 overflow-y-auto pr-2 -mr-2 scrollbar-hide space-y-2">
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
