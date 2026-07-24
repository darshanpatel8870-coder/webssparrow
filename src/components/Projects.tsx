"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { projectsData } from "../data/projects";
import SectionHeader from "./SectionHeader";
import AnimateOnScroll from "./AnimateOnScroll";
import { ExternalLink, ArrowRight, Award } from "lucide-react";

const filters = [
  "All",
  "HTML",
  "WordPress",
  "Shopify",
  "Laravel"
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All"
    ? projectsData
    : projectsData.filter(
        (project) =>
          project.category === activeFilter ||
          project.technologies.includes(activeFilter)
      );

  return (
    <section id="portfolio" className="py-16 md:py-24 border-t border-border-color bg-bg-card/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          title="Featured Projects"
          subtitle="A selection of high-performance e-commerce stores, custom web portals, API databases, and migrations."
          badge="Selected Work"
        />

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                activeFilter === filter
                  ? "bg-brand-primary text-white shadow-md shadow-brand-primary/20"
                  : "border border-border-color bg-bg-card text-text-secondary hover:text-text-primary hover:bg-bg-card-hover"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <AnimateOnScroll
              key={project.slug}
              direction="up"
              delay={index * 0.05}
              className="flex flex-col h-full rounded-2xl border border-border-color bg-bg-card overflow-hidden shadow-sm hover:shadow-xl hover:border-brand-primary/45 transition-all duration-300 group"
            >
              {/* Project Card Image (Website Screenshot) */}
              <div className="relative aspect-video w-full bg-slate-900 flex flex-col justify-between p-4 border-b border-border-color overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-10">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white text-slate-900 hover:scale-110 active:scale-95 transition shadow-lg flex items-center gap-2 font-bold text-xs"
                    aria-label="View Live Website"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Visit Live Site
                  </a>
                </div>

                <div className="relative z-10 flex justify-between items-start pointer-events-none">
                  <span className="px-2.5 py-1 rounded-md bg-slate-900/90 text-white backdrop-blur-md border border-white/10 font-mono text-[10px] font-bold tracking-wider shadow-sm">
                    {project.category}
                  </span>
                </div>

                <div className="relative z-10 pointer-events-none">
                  <h3 className="text-white text-lg font-extrabold tracking-tight drop-shadow-md bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 w-fit">
                    {project.name}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-col p-6 flex-grow space-y-4">
                <p className="text-sm text-text-secondary leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md text-[10px] font-bold border border-border-color bg-bg-card-hover text-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Challenge & Solution details summaries */}
                <div className="text-xs space-y-2 border-t border-border-color/60 pt-4">
                  <div className="flex items-start gap-1.5">
                    <Award className="h-4 w-4 text-brand-primary shrink-0 mt-0.5" />
                    <span className="text-text-secondary leading-relaxed">
                      <strong className="text-text-primary">Key Result:</strong> {project.result}
                    </span>
                  </div>
                </div>

                {/* Footer action links */}
                <div className="flex items-center justify-between pt-2 mt-auto">
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-primary hover:underline cursor-pointer group-hover:text-brand-primary/80"
                  >
                    View Case Study
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </Link>

                  <div className="flex gap-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg border border-border-color hover:bg-bg-card-hover text-text-secondary hover:text-text-primary transition"
                      title="Live Demo"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}
