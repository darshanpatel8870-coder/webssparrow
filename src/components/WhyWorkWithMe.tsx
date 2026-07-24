import React from "react";
import SectionHeader from "./SectionHeader";
import AnimateOnScroll from "./AnimateOnScroll";
import { Shield, Sparkles, Smartphone, Code, MessageSquare, FastForward, Heart, HelpCircle } from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "Full-Stack Knowledge",
    description: "Equipped to handle frontend designs, relational databases, backend APIs, deployment optimization, and site safety audits."
  },
  {
    icon: Code,
    title: "Clean & Maintainable Code",
    description: "Writing well-structured TypeScript, custom PHP structures, and reusable React components that adhere to industry standards."
  },
  {
    icon: Smartphone,
    title: "Mobile-First Focus",
    description: "Developing fully responsive user journeys designed to load instantly and fit perfectly across all mobile devices."
  },
  {
    icon: FastForward,
    title: "Performance Optimization",
    description: "Optimizing codebases, databases, and image configurations to achieve Google Lighthouse scores above 90%."
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description: "Committed to detailed status updates, async availability, Slack integrations, and walkthrough demonstrations."
  },
  {
    icon: Shield,
    title: "Security Hardening",
    description: "Implementing rate limits, input sanitization, JWT authorization tokens, and DDoS prevention policies."
  },
  {
    icon: Heart,
    title: "Reliable Client Retainers",
    description: "Offering long-term code updates, backups, server tuning, and troubleshooting support for continuous operation."
  },
  {
    icon: HelpCircle,
    title: "Business Problem Solving",
    description: "Aligning software architecture with your business goals to increase store sales and save administrative hours."
  }
];

export default function WhyWorkWithMe() {
  return (
    <section id="why-work-with-me" className="py-16 md:py-24 border-t border-border-color bg-bg-card/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          title="Why Choose WebsSparrow?"
          subtitle="Delivering enterprise-level engineering quality, clean code documentation, and commercial success."
          badge="Agency Advantages"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <AnimateOnScroll
                key={benefit.title}
                direction="up"
                delay={idx * 0.05}
                className="p-6 rounded-2xl border border-border-color bg-bg-card shadow-sm hover:shadow-lg hover:border-brand-primary/45 transition-all duration-300 group"
              >
                <div className="p-2.5 bg-brand-primary/10 rounded-xl text-brand-primary w-fit mb-4 group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-text-primary mb-2 group-hover:text-brand-primary transition-all duration-200">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {benefit.description}
                </p>
              </AnimateOnScroll>
            );
          })}
        </div>

      </div>
    </section>
  );
}
