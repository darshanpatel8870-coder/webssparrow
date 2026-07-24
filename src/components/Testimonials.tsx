import React from "react";
import { testimonialsData } from "../data/testimonials";
import SectionHeader from "./SectionHeader";
import AnimateOnScroll from "./AnimateOnScroll";
import { Star, MessageSquare } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 border-t border-border-color bg-bg-card/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          title="Client Testimonials"
          subtitle="Read feedback from client partnerships, agencies, and businesses that I have collaborated with."
          badge="Reviews"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {testimonialsData.map((test, idx) => (
            <AnimateOnScroll
              key={test.id}
              direction="up"
              delay={idx * 0.05}
              className="flex flex-col h-full p-6 rounded-2xl border border-border-color bg-bg-card shadow-sm hover:shadow-lg transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute right-6 top-6 text-brand-primary/10">
                <MessageSquare className="h-10 w-10" />
              </div>

              {/* Star Rating */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < test.rating ? "text-yellow-400 fill-yellow-400" : "text-border-color"
                    }`}
                  />
                ))}
              </div>

              {/* Feedback text */}
              <blockquote className="text-sm text-text-secondary leading-relaxed mb-6 flex-grow italic">
                &ldquo;{test.feedback}&rdquo;
              </blockquote>

              {/* Client Profile details */}
              <div className="flex items-center gap-3 border-t border-border-color/60 pt-4 mt-auto">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center text-white font-extrabold text-xs shadow-sm uppercase">
                  {test.initials}
                </div>
                <div>
                  <cite className="not-italic text-sm font-bold text-text-primary block">
                    {test.name}
                  </cite>
                  <span className="text-[10px] text-text-secondary font-medium block mt-0.5">
                    {test.company} &bull; {test.location}
                  </span>
                  <span className="text-[10px] font-bold text-brand-primary block mt-0.5">
                    {test.projectType}
                  </span>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}
