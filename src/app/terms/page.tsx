import React from "react";
import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions",
  description: "Read the Terms & Conditions governing the use of DevPortfolio services."
};

export default function TermsPage() {
  return (
    <div className="py-12 md:py-20 text-text-secondary leading-relaxed">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          title="Terms & Conditions"
          subtitle="Effective Date: July 23, 2026"
          badge="Legal"
        />

        <div className="space-y-6">
          <section className="space-y-2">
            <h2 className="text-xl font-bold text-text-primary">1. Services & Scope</h2>
            <p>
              All software development and consulting services provided are governed by individual client contracts, which detail the specific deliverables, milestones, budgets, and timelines.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-text-primary">2. Intellectual Property</h2>
            <p>
              Upon receipt of full payment, ownership of custom themes, plugins, APIs, and databases transfers entirely to the client as specified in our contract.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-text-primary">3. Warranties & Liability</h2>
            <p>
              While I adhere to security, speed, and coding best practices, all deliverables are provided &ldquo;as is&rdquo; without warranties of any kind regarding third-party service deprecations (e.g. Shopify API updates or WordPress Core modifications) that occur post-delivery.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-text-primary">4. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with applicable laws, without regard to conflict of law principles.
            </p>
          </section>

          <div className="pt-6 border-t border-border-color">
            <Link href="/" className="text-sm font-bold text-brand-primary hover:underline cursor-pointer">
              &larr; Back to Home
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
