import React from "react";
import AnimateOnScroll from "./AnimateOnScroll";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  centered?: boolean;
}

export default function SectionHeader({
  title,
  subtitle,
  badge,
  centered = true,
}: SectionHeaderProps) {
  return (
    <AnimateOnScroll className={`max-w-3xl mb-12 ${centered ? "mx-auto text-center" : "text-left"}`}>
      {badge && (
        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-brand-primary/10 text-brand-primary mb-3">
          {badge}
        </span>
      )}
      <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-text-primary mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base text-text-secondary leading-relaxed sm:text-lg">
          {subtitle}
        </p>
      )}
    </AnimateOnScroll>
  );
}
