import React from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import WorkProcess from "@/components/WorkProcess";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  // Structured JSON-LD schema markup
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "WebsSparrow Technologies",
    "description": "Full-service web development agency offering custom WordPress, Shopify, Laravel, React, and Node.js solutions.",
    "url": "https://webssparrow.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Remote / Worldwide",
      "addressCountry": "US"
    },
    "knowsAbout": [
      "WordPress theme & plugin development",
      "Shopify custom Liquid design",
      "Laravel enterprise backend applications",
      "React Next.js SPA development",
      "Node.js API servers",
      "Database migrations and speed performance optimization"
    ],
    "priceRange": "$$$"
  };

  return (
    <>
      {/* Inject Structured Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="relative">
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <WorkProcess />
        <WhyWorkWithMe />
        <Testimonials />
        <FAQ />
        <Contact />
        <CallToAction />
      </div>
    </>
  );
}
