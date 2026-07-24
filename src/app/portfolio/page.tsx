import React from "react";
import SectionHeader from "@/components/SectionHeader";
import Projects from "@/components/Projects";
import CallToAction from "@/components/CallToAction";

export const metadata = {
  title: "Portfolio",
  description: "Browse my completed client projects, web portals, Shopify stores, and database migrations."
};

export default function PortfolioPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Project Portfolio"
          subtitle="Explore completed developer case studies spanning e-commerce, custom backends, and APIs."
          badge="Completed Work"
        />

        <Projects />
        <CallToAction />
      </div>
    </div>
  );
}
