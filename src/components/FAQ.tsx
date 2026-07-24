"use client";

import React, { useState } from "react";
import { faqsData } from "../data/faqs";
import SectionHeader from "./SectionHeader";
import AnimateOnScroll from "./AnimateOnScroll";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 border-t border-border-color bg-bg-card/30">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Clear answers about my development services, plugin configurations, project timelines, and rates."
          badge="FAQs"
        />

        <div className="space-y-4 mt-8">
          {faqsData.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <AnimateOnScroll
                key={idx}
                direction="up"
                delay={idx * 0.03}
                className="rounded-2xl border border-border-color bg-bg-card shadow-xs overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 hover:bg-bg-card-hover transition cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-sm sm:text-base text-text-primary group-hover:text-brand-primary transition">
                    {faq.question}
                  </span>
                  <span className="p-1 rounded-lg border border-border-color bg-bg-card group-hover:bg-brand-primary/10 text-text-secondary group-hover:text-brand-primary transition shrink-0">
                    {isOpen ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-sm text-text-secondary border-t border-border-color/60 pt-4 leading-relaxed bg-bg-card/50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </AnimateOnScroll>
            );
          })}
        </div>

      </div>
    </section>
  );
}
