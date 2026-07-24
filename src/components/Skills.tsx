"use client";

import React, { useState } from "react";
import { skillsData } from "../data/skills";
import SectionHeader from "./SectionHeader";
import AnimateOnScroll from "./AnimateOnScroll";
import TechLogo from "./TechLogos";
import { Cpu, Terminal, Database, Cloud, Settings, Layers, Wrench } from "lucide-react";

const categories = [
  "All",
  "Frontend",
  "Backend",
  "CMS & E-commerce",
  "Databases",
  "Development & Designing Tools",
  "Hosting & Deployment"
];

// Map category names to Lucide icons
const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "All": Layers,
  "Frontend": Cpu,
  "Backend": Terminal,
  "CMS & E-commerce": Settings,
  "Databases": Database,
  "Development & Designing Tools": Wrench,
  "Hosting & Deployment": Cloud
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = activeCategory === "All"
    ? skillsData
    : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-16 md:py-24 border-t border-border-color bg-bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          title="Skills & Technologies"
          subtitle="A comprehensive toolkit of languages, frameworks, design software, and deployment utilities that I use to deliver modern web solutions."
          badge="My Tech Stack"
        />

        {/* Filter categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => {
            const Icon = categoryIcons[category] || Layers;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-1.5 cursor-pointer hover:scale-102 active:scale-98 ${
                  activeCategory === category
                    ? "bg-brand-primary text-white shadow-md shadow-brand-primary/25"
                    : "border border-border-color bg-bg-card text-text-secondary hover:text-text-primary hover:bg-bg-card-hover"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                {category}
              </button>
            );
          })}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredSkills.map((skill, index) => (
            <AnimateOnScroll
              key={skill.name}
              direction="up"
              delay={(index % 6) * 0.05}
              className="p-4 rounded-xl border border-border-color bg-bg-card flex flex-col justify-center items-center text-center shadow-xs hover:shadow-lg hover:border-brand-primary/45 hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Tech Brand Logo */}
              <div className="w-12 h-12 rounded-xl bg-bg-card-hover border border-border-color/60 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:border-brand-primary/40 transition-all duration-300 shadow-xs">
                <TechLogo name={skill.name} className="w-7 h-7" />
              </div>

              {/* Skill details */}
              <span className="text-sm font-bold text-text-primary group-hover:text-brand-primary transition-all duration-200">
                {skill.name}
              </span>
              <span className="text-[10px] text-text-secondary font-medium mt-1">
                {skill.category}
              </span>
            </AnimateOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}
