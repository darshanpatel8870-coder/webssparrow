"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUp, Mail, Phone, MapPin, Globe } from "lucide-react";
import { Linkedin } from "./SocialIcons";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="border-t border-border-color bg-bg-card text-text-primary mt-auto relative">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand/About */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image 
                src="/logo.png" 
                alt="Logo" 
                width={160} 
                height={45} 
                className="h-10 w-auto object-contain max-h-11" 
              />
            </Link>
            <p className="text-text-secondary text-sm max-w-xs leading-relaxed">
              WebsSparrow is an Official Shopify Partner Agency building robust, fast, and scalable digital systems for international clients, startups, and global brands.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
                <Image src="/logos/shopify.svg" alt="Shopify Partner" width={14} height={14} className="w-3.5 h-3.5" />
                Shopify Partner
              </div>
              <a
                href="https://www.linkedin.com/in/darshan-kavathiya-937353109/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg border border-border-color hover:bg-bg-card-hover text-text-secondary hover:text-text-primary transition"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-text-primary tracking-wider uppercase mb-4">Sitemap</h3>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/#about" },
                { label: "Services", href: "/#services" },
                { label: "Skills & Stack", href: "/#skills" },
                { label: "Portfolio Projects", href: "/#portfolio" },
                { label: "Contact Details", href: "/contact" }
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-text-secondary hover:text-brand-primary text-sm transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold text-text-primary tracking-wider uppercase mb-4">Core Services</h3>
            <ul className="space-y-2">
              {[
                "WordPress Theme & Plugin",
                "Shopify Custom Liquiding",
                "Laravel Enterprise Backend",
                "React Frontend SPAs",
                "Node.js High-scale APIs",
                "Speed & SEO Tuning"
              ].map((service) => (
                <li key={service} className="text-text-secondary text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-sm font-bold text-text-primary tracking-wider uppercase mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm text-text-secondary">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-brand-primary shrink-0" />
                <a href="mailto:darshan@webssparrow.com" className="hover:text-brand-primary transition break-all">
                  darshan@webssparrow.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand-primary shrink-0" />
                <a href="https://wa.me/919979321216" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition">
                  +91 9979321216
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand-primary shrink-0" />
                <span>Ahmedabad, India</span>
              </li>
              <li className="flex items-center gap-2 pt-1">
                <Globe className="h-4 w-4 text-brand-primary shrink-0" />
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-green-500 animate-ping"></span>
                  <span className="text-xs font-semibold text-green-600 dark:text-green-400">Available for Projects</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Policies & Copyright */}
        <div className="mt-12 pt-8 border-t border-border-color flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-text-secondary">
          <p>© {new Date().getFullYear()} WebsSparrow Technologies. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-brand-primary transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-brand-primary transition">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-brand-primary hover:bg-brand-primary/95 text-white shadow-lg cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 z-40 animate-in fade-in zoom-in-50"
          aria-label="Back to Top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </footer>
  );
}
