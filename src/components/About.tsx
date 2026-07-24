"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Award, CheckCircle, Heart, Cpu, Smile, FileText } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import SectionHeader from "./SectionHeader";

const stats = [
  { id: "stat1", icon: Award, value: "8+", label: "Years Experience" },
  { id: "stat2", icon: CheckCircle, value: "120+", label: "Completed Projects" },
  { id: "stat3", icon: Smile, value: "95+", label: "Satisfied Clients" },
  { id: "stat4", icon: Cpu, value: "25+", label: "Technologies Used" },
  { id: "stat5", icon: Heart, value: "100%", label: "Client Satisfaction" }
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 border-t border-border-color bg-bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          title="About WebsSparrow"
          subtitle="Engineering high-performance web systems, custom e-commerce storefronts, and enterprise web solutions."
          badge="Company Overview"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Profile Photo Area / Visual */}
          <div className="lg:col-span-5 relative">
            <AnimateOnScroll direction="right" className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary to-brand-accent rounded-3xl blur-md opacity-25 group-hover:opacity-40 transition-all duration-300"></div>
              <div className="relative w-full aspect-square max-w-md mx-auto rounded-3xl border border-border-color overflow-hidden bg-bg-card shadow-lg">
                <Image
                  src="/about-photo.jpeg"
                  alt="WebsSparrow Web Agency"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 flex justify-between items-center text-xs text-white/90 font-mono">
                  <span>WebsSparrow Technologies</span>
                  <span className="flex items-center gap-1.5 text-emerald-400 font-semibold bg-emerald-950/70 border border-emerald-500/40 px-2 py-0.5 rounded-md">
                    <Image src="/logos/shopify.svg" alt="Shopify Partner" width={12} height={12} className="w-3 h-3" />
                    Shopify Partner
                  </span>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Text & Stats */}
          <div className="lg:col-span-7 space-y-6">
            <AnimateOnScroll direction="left" className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
                <Image src="/logos/shopify.svg" alt="Shopify Partner" width={14} height={14} className="w-3.5 h-3.5" />
                Official Shopify Partner Agency
              </div>
              <h3 className="text-2xl font-bold text-text-primary">
                Reliable Technical Partner for Startups, Brands & Global Enterprises
              </h3>
              <p className="text-text-secondary leading-relaxed">
                WebsSparrow is an <strong>Official Shopify Partner Agency</strong> and full-service web development firm specializing in building custom Shopify storefronts, bespoke Liquid themes, e-commerce platforms, API integrations, and scalable databases.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Whether you need a bespoke WooCommerce store, a highly customized Shopify Online Store 2.0 theme, a Laravel internal operations portal, or high-throughput APIs built on Node.js, our focus is always on writing clean, scalable code that drives real business results.
              </p>
              <p className="text-text-secondary leading-relaxed">
                We pride ourselves on transparent, client-first communication, ensuring that project milestones are met on schedule and codebases are delivered clean, well-documented, and ready to scale.
              </p>
            </AnimateOnScroll>

            {/* Statistics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 pt-4" suppressHydrationWarning>
              {stats.map((stat) => (
                <AnimateOnScroll
                  key={stat.id}
                  direction="up"
                  className="p-4 rounded-2xl border border-border-color bg-bg-card text-center shadow-sm hover:shadow-md hover:border-brand-primary/30 transition-all duration-200"
                >
                  <stat.icon className="h-6 w-6 text-brand-primary mx-auto mb-2" />
                  <div className="text-xl font-extrabold text-text-primary" suppressHydrationWarning>{stat.value}</div>
                  <div className="text-[10px] sm:text-xs font-medium text-text-secondary mt-1">{stat.label}</div>
                </AnimateOnScroll>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/about"
                className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-brand-primary text-white hover:bg-brand-primary/95 transition shadow-sm hover:scale-102 active:scale-98 cursor-pointer"
              >
                Learn More About Us
              </Link>
              <Link
                href="/contact"
                className="px-5 py-2.5 rounded-xl text-sm font-semibold border border-border-color bg-bg-card hover:bg-bg-card-hover text-text-primary transition shadow-xs flex items-center gap-2 hover:scale-102 active:scale-98 cursor-pointer"
              >
                Get a Quote
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
