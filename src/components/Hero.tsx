"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Briefcase, FileDown, ArrowRight } from "lucide-react";
import { Linkedin } from "./SocialIcons";
import { motion, AnimatePresence } from "framer-motion";

const roles = [
  "WordPress",
  "Shopify",
  "Laravel",
  "React.JS",
  "Node.JS"
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-[calc(100vh-4rem)] flex items-center py-12 md:py-20 overflow-hidden">
      {/* Background visual dots */}
      <div className="absolute inset-0 bg-[radial-gradient(var(--border-color)_1px,transparent_1px)] [background-size:24px_24px] opacity-40 z-0"></div>
      
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-brand-primary/10 blur-3xl z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-80 h-80 rounded-full bg-brand-secondary/10 blur-3xl z-0"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Info */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Availability Status */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-green-500/20 bg-green-500/10 text-green-700 dark:text-green-400 text-xs font-bold shadow-sm">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              Web Development Agency & Technical Partners
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-extrabold tracking-tight text-text-primary sm:text-5xl md:text-6xl leading-none">
              WebsSparrow <br />
              <span className="text-gradient">Building Fast, Scalable</span> <br />
              & High-Converting Digital Systems
            </h1>

            {/* Cycling Role Subtitle */}
            <div className="h-8 flex items-center">
              <span className="text-base sm:text-lg font-bold text-text-secondary mr-2">We Specialization in</span>
              <div className="overflow-hidden relative h-8 w-60">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roles[roleIndex]}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-y-0 left-0 flex items-center text-base sm:text-lg font-bold text-brand-primary"
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            {/* Supporting Text */}
            <p className="text-base text-text-secondary sm:text-lg max-w-2xl leading-relaxed">
              WebsSparrow develops custom websites, e-commerce storefronts, enterprise web applications, APIs, custom plugins, themes, and scalable digital solutions using WordPress, Shopify, Laravel, React.js and Node.js.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#portfolio"
                className="px-6 py-3 rounded-xl font-bold bg-brand-primary text-white hover:bg-brand-primary/95 transition shadow-md hover:shadow-lg flex items-center gap-2 hover:scale-102 active:scale-98 cursor-pointer"
              >
                View Our Work
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-xl font-bold border border-border-color bg-bg-card hover:bg-bg-card-hover text-text-primary transition shadow-sm hover:scale-102 active:scale-98 flex items-center gap-2 cursor-pointer"
              >
                Get a Quote
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4 text-text-secondary border-t border-border-color/60 max-w-md">
              <span className="text-xs font-semibold uppercase tracking-wider">Connect:</span>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/darshan-kavathiya-937353109/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-border-color hover:bg-bg-card-hover text-text-secondary hover:text-text-primary transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Interactive Code Mock Visual */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full rounded-2xl border border-border-color bg-slate-950 p-4 sm:p-5 shadow-2xl relative overflow-hidden font-mono text-xs sm:text-sm text-slate-300 select-none"
            >
              {/* Window Controls */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <div className="flex space-x-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
                </div>
                <span className="text-slate-500 text-[10px] tracking-wider uppercase font-semibold">webssparrow.ts</span>
                <span className="w-6"></span>
              </div>

              {/* Code lines */}
              <div className="space-y-1.5 leading-relaxed overflow-x-auto">
                <div><span className="text-pink-500">const</span> agency = &#123;</div>
                <div className="pl-4">name: <span className="text-green-400">&apos;WebsSparrow Technologies&apos;</span>,</div>
                <div className="pl-4">coreStack: [</div>
                <div className="pl-8"><span className="text-teal-400">&apos;WordPress&apos;</span>, <span className="text-teal-400">&apos;Shopify&apos;</span>,</div>
                <div className="pl-8"><span className="text-teal-400">&apos;Laravel&apos;</span>, <span className="text-teal-400">&apos;React/Next.js&apos;</span>,</div>
                <div className="pl-8"><span className="text-teal-400">&apos;Node.js&apos;</span></div>
                <div className="pl-4">],</div>
                <div className="pl-4">properties: &#123;</div>
                <div className="pl-8">performanceFocused: <span className="text-amber-500">true</span>,</div>
                <div className="pl-8">securityMinded: <span className="text-amber-500">true</span>,</div>
                <div className="pl-8">cleanCodeArchitects: <span className="text-amber-500">true</span></div>
                <div className="pl-4">&#125;,</div>
                <div className="pl-4 text-slate-500">// Solutions oriented delivery</div>
                <div className="pl-4"><span className="text-violet-400">solveProblem</span>(challenge) &#123;</div>
                <div className="pl-8"><span className="text-pink-500">return</span> analyze(challenge)</div>
                <div className="pl-12">.designScalableArchitecture()</div>
                <div className="pl-12">.optimizeForSpeed()</div>
                <div className="pl-12">.deploySecurely();</div>
                <div className="pl-4">&#125;</div>
                <div>&#125;;</div>
              </div>

              {/* Floating badges */}
              <div className="absolute bottom-2 right-2 px-2.5 py-1 rounded bg-brand-primary/20 text-brand-primary font-bold text-[10px] uppercase tracking-wider border border-brand-primary/30">
                WebsSparrow
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
