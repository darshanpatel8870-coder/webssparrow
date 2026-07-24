import React from "react";
import SectionHeader from "./SectionHeader";
import AnimateOnScroll from "./AnimateOnScroll";
import { Eye, Map, FileCode, CheckCircle, Rocket, ShieldCheck, Compass } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Compass,
    title: "Discovery & Requirements",
    description: "Aligning on goals, scope, user personas, and technical specifications through structured consultation."
  },
  {
    number: "02",
    icon: Map,
    title: "Planning & Strategy",
    description: "Designing database architectures, selecting libraries, drafting API structures, and mapping migration paths."
  },
  {
    number: "03",
    icon: Eye,
    title: "Architecture & UI Setup",
    description: "Reviewing Figma mockups, establishing design tokens, setting up TypeScript templates, and structuring CSS themes."
  },
  {
    number: "04",
    icon: FileCode,
    title: "Development Phase",
    description: "Writing responsive interfaces, integrating database schemas, coding business logic, and configuring secure routes."
  },
  {
    number: "05",
    icon: ShieldCheck,
    title: "Testing & QA",
    description: "Validating cross-browser layouts, checking Core Web Vitals, testing forms, and running security audit checks."
  },
  {
    number: "06",
    icon: Rocket,
    title: "Deployment & Launch",
    description: "Configuring VPS/cPanel/Vercel pipelines, mapping domains, configuring DNS, and activating Cloudflare firewalls."
  },
  {
    number: "07",
    icon: CheckCircle,
    title: "Maintenance & RET Support",
    description: "Monitoring backups, keeping modules updated, conducting security scans, and offering technical support retainer options."
  }
];

export default function WorkProcess() {
  return (
    <section id="work-process" className="py-16 md:py-24 border-t border-border-color bg-bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          title="My Structured Work Process"
          subtitle="A systematic, milestone-driven approach to delivering production-grade web applications on schedule."
          badge="Work Flow"
        />

        {/* Process Timeline */}
        <div className="relative border-l border-border-color md:border-l-0 md:grid md:grid-cols-7 md:gap-4 md:border-t md:pt-8 md:mt-16 pl-6 md:pl-0 space-y-8 md:space-y-0">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <AnimateOnScroll
                key={step.number}
                direction="up"
                delay={idx * 0.05}
                className="relative"
              >
                {/* Connector Nodes */}
                <div className="absolute -left-[35px] md:-left-0 md:-top-[45px] flex items-center justify-center w-8 h-8 rounded-full border-2 border-border-color bg-bg-card text-brand-primary text-xs font-extrabold shadow-sm transition group-hover:border-brand-primary">
                  {step.number}
                </div>

                {/* Card block */}
                <div className="p-5 rounded-2xl border border-border-color bg-bg-card shadow-xs hover:shadow-lg hover:border-brand-primary/30 transition-all duration-300">
                  <div className="p-2 bg-brand-primary/10 rounded-xl text-brand-primary w-fit mb-3">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-bold text-text-primary mb-1.5 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>

      </div>
    </section>
  );
}
