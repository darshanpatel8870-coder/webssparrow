import React from "react";
import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy",
  description: "Read the privacy practices and data protection guidelines of DevPortfolio."
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12 md:py-20 text-text-secondary leading-relaxed">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          title="Privacy Policy"
          subtitle="Effective Date: July 23, 2026"
          badge="Legal"
        />

        <div className="space-y-6">
          <section className="space-y-2">
            <h2 className="text-xl font-bold text-text-primary">1. Information Collection</h2>
            <p>
              When you submit a project request through the contact form, we collect the details you provide (name, email, phone, company, project budget, and description) solely to evaluate your request and respond to you.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-text-primary">2. Use of Information</h2>
            <p>
              Your contact details are used only to communicate with you about your projects or consulting calls. We do not sell, distribute, or share your personal data with third-party advertisers or services unless required by law.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-text-primary">3. Cookies</h2>
            <p>
              We use standard local storage configurations to persist your selected theme preference (dark or light mode) to ensure a consistent browsing experience.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-text-primary">4. Data Retention</h2>
            <p>
              We retain project requests only as long as necessary to complete client onboarding and consultation. You can request the removal of your submitted form details at any time by contacting us directly.
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
