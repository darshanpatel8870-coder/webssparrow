"use client";

import React from "react";
import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";
import { MessageSquare, PhoneCall } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="py-16 md:py-24 border-t border-border-color bg-gradient-to-br from-brand-primary/10 via-brand-accent/5 to-bg-base relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(var(--border-color)_1px,transparent_1px)] [background-size:32px_32px] opacity-20 z-0"></div>
      
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimateOnScroll direction="up" className="text-center space-y-6">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-text-primary">
            Looking for a Dedicated Web Development Agency?
          </h2>
          <p className="text-base text-text-secondary leading-relaxed sm:text-lg max-w-3xl mx-auto">
            Let&apos;s discuss your website, e-commerce store, custom web portal, API database schema, migration, or performance maintenance requirements. WebsSparrow provides dedicated delivery and clear project timelines.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl font-bold bg-brand-primary hover:bg-brand-primary/95 text-white shadow-md hover:shadow-lg transition flex items-center gap-2 hover:scale-102 active:scale-98 cursor-pointer"
            >
              <MessageSquare className="h-4.5 w-4.5" />
              Start a Project
            </Link>
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl font-bold border border-border-color bg-bg-card hover:bg-bg-card-hover text-text-primary transition flex items-center gap-2 hover:scale-102 active:scale-98 cursor-pointer"
            >
              <PhoneCall className="h-4.5 w-4.5 text-brand-primary" />
              Schedule a Call
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
