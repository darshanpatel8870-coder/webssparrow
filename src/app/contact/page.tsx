import React from "react";
import SectionHeader from "@/components/SectionHeader";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";

export const metadata = {
  title: "Contact Me & Start a Project",
  description: "Connect with a senior full-stack developer to discuss WordPress, Shopify, Laravel, custom APIs, or database migrations."
};

export default function ContactPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          title="Contact & Availability"
          subtitle="Get in touch to request a quote, schedule a consulting call, or ask about monthly retainers."
          badge="Let's Work Together"
        />

        <Contact />
        <FAQ />
      </div>
    </div>
  );
}
