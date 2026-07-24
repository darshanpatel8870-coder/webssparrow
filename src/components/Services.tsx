"use client";

import React from "react";
import Link from "next/link";
import * as Icons from "lucide-react";
import { servicesData } from "../data/services";
import SectionHeader from "./SectionHeader";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 border-t border-border-color bg-bg-card/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          title="My Core Services"
          subtitle="Offering robust technical solutions to help businesses launch products, optimize sales, and scale infrastructure."
          badge="What I Offer"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service) => {
            // Dynamically resolve Lucide Icon
            const IconComponent = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[service.icon] || Icons.HelpCircle;

            return (
              <AnimateOnScroll
                key={service.id}
                direction="up"
                className="flex flex-col h-full p-6 rounded-2xl border border-border-color bg-bg-card shadow-sm hover:shadow-xl hover:border-brand-primary/45 transition-all duration-300 group"
              >
                {/* Icon wrapper */}
                <div className="p-3 rounded-xl bg-brand-primary/10 text-brand-primary w-fit mb-4 group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                  <IconComponent className="h-6 w-6" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-brand-primary transition-all duration-200">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-text-secondary mb-4 leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* Deliverables List */}
                <div className="space-y-2 mb-6 border-t border-border-color/60 pt-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-text-secondary block">
                    Core Deliverables
                  </span>
                  <ul className="space-y-1.5">
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="text-xs text-text-secondary flex items-start gap-1.5">
                        <Icons.Check className="h-3.5 w-3.5 text-brand-secondary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Link */}
                <Link
                  href={service.link}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary group-hover:text-brand-primary/80 hover:underline mt-auto cursor-pointer"
                >
                  Discuss Project
                  <Icons.ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
              </AnimateOnScroll>
            );
          })}
        </div>

      </div>
    </section>
  );
}
