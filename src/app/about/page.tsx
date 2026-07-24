import React from "react";
import SectionHeader from "@/components/SectionHeader";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";
import CallToAction from "@/components/CallToAction";

export const metadata = {
  title: "About Us | WebsSparrow Technologies",
  description: "Learn more about WebsSparrow, our technical competencies, development standards, and agency vision."
};

export default function AboutPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          title="About WebsSparrow"
          subtitle="A look into our agency background, core technical standards, and execution strategies."
          badge="Company Overview"
        />

        <div className="max-w-4xl mx-auto space-y-8 mb-16 text-text-secondary leading-relaxed">
          <AnimateOnScroll direction="up">
            <h3 className="text-xl font-bold text-text-primary mb-3">
              Who We Are & What We Drive
            </h3>
            <p>
              WebsSparrow Technologies is a full-service web development agency helping global businesses, startups, and marketing partners build reliable, high-performance web systems. Over the years, our team has delivered solutions across a wide spectrum of technical environments—from high-converting e-commerce storefronts and corporate CMS portals to custom SaaS applications, REST APIs, and enterprise server migrations.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll direction="up" delay={0.05}>
            <h3 className="text-xl font-bold text-text-primary mb-3">
              Our Core Development Principles
            </h3>
            <ul className="list-disc pl-5 space-y-3">
              <li>
                <strong className="text-text-primary">Performance First:</strong> A slow website costs conversions. We audit database queries, optimize asset delivery, implement caching layers, and refine code architecture to guarantee lightning-fast load speeds.
              </li>
              <li>
                <strong className="text-text-primary">Security & Protection:</strong> We enforce sanitization, authorization controls, SSL/TLS standards, rate limiting, and automated backups to keep client web applications safe and secure.
              </li>
              <li>
                <strong className="text-text-primary">Clean Architecture:</strong> We write modular, well-documented code adhering to strict industry standards. This ensures long-term scalability and easy feature additions as your business grows.
              </li>
              <li>
                <strong className="text-text-primary">Transparent Execution:</strong> We prioritize clear milestone tracking, regular status updates, and client-first communication on every project.
              </li>
            </ul>
          </AnimateOnScroll>
        </div>

        <WhyWorkWithMe />
        <CallToAction />
      </div>
    </div>
  );
}
