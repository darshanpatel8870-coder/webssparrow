import React from "react";
import Link from "next/link";
import { Terminal, Home, Mail } from "lucide-react";

export const metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist."
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-6 space-y-6">
      <div className="p-4 rounded-full bg-brand-primary/10 text-brand-primary">
        <Terminal className="h-12 w-12" />
      </div>

      <div className="space-y-2">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-text-primary">
          404 - Page Not Found
        </h1>
        <p className="text-base text-text-secondary leading-relaxed sm:text-lg max-w-md mx-auto">
          The requested page could not be located. It might have been moved, renamed, or is temporarily unavailable.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 pt-4">
        <Link
          href="/"
          className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-brand-primary hover:bg-brand-primary/95 text-white shadow-md hover:shadow-lg transition flex items-center gap-2 cursor-pointer hover:scale-102 active:scale-98"
        >
          <Home className="h-4.5 w-4.5" />
          Back to Home
        </Link>
        <Link
          href="/contact"
          className="px-5 py-2.5 rounded-xl text-sm font-semibold border border-border-color bg-bg-card hover:bg-bg-card-hover text-text-primary transition flex items-center gap-2 cursor-pointer hover:scale-102 active:scale-98"
        >
          <Mail className="h-4.5 w-4.5 text-brand-primary" />
          Contact Support
        </Link>
      </div>
    </div>
  );
}
