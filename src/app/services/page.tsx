import React from "react";
import SectionHeader from "@/components/SectionHeader";
import Services from "@/components/Services";
import WorkProcess from "@/components/WorkProcess";
import FAQ from "@/components/FAQ";
import CallToAction from "@/components/CallToAction";

export const metadata = {
  title: "Services",
  description: "Explore the custom full-stack services I offer, including WordPress, Shopify, Laravel, and APIs."
};

export default function ServicesPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="My Professional Services"
          subtitle="From custom themes and store templates to database setups, security audits, and server optimizations."
          badge="Services"
        />
        
        <Services />
        <WorkProcess />
        <FAQ />
        <CallToAction />
      </div>
    </div>
  );
}
