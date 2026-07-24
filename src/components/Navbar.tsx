"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "./ThemeSwitcher";
import { Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  href: string; // Target path/hash
  hash: string; // Section element ID on home page
}

const navItems: NavItem[] = [
  { label: "Home", href: "/", hash: "hero" },
  { label: "About Us", href: "/#about", hash: "about" },
  { label: "Services", href: "/#services", hash: "services" },
  { label: "Skills", href: "/#skills", hash: "skills" },
  { label: "Portfolio", href: "/#portfolio", hash: "portfolio" },
  { label: "Testimonials", href: "/#testimonials", hash: "testimonials" },
  { label: "FAQ", href: "/#faq", hash: "faq" },
  { label: "Contact", href: "/contact", hash: "" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Scroll effect to make navbar glassmorphic after scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver to highlight currently active section on scroll
  useEffect(() => {
    if (pathname !== "/") return;

    const sections = navItems
      .filter((item) => item.hash)
      .map((item) => document.getElementById(item.hash))
      .filter((el): el is HTMLElement => el !== null);

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px", // Focus center
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [pathname]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    setIsOpen(false);
    if (!hash || pathname !== "/") return;

    e.preventDefault();
    const element = document.getElementById(hash);
    if (element) {
      const offset = 80; // Navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const isActive = (item: NavItem) => {
    if (item.href === "/contact" && pathname === "/contact") {
      return true;
    }
    if (pathname === "/" && item.hash === activeSection) {
      return true;
    }
    return false;
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? "glassmorphism border-b border-border-color shadow-sm" 
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center cursor-pointer py-1"
            onClick={(e) => handleLinkClick(e, "hero")}
          >
            <Image 
              src="/logo.png" 
              alt="Logo" 
              width={160} 
              height={45} 
              className="h-10 w-auto object-contain max-h-11" 
              priority 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.hash)}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive(item)
                    ? "text-brand-primary bg-brand-primary/10"
                    : "text-text-secondary hover:text-text-primary hover:bg-bg-card-hover"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Actions (Theme switcher + CTA) */}
          <div className="hidden lg:flex items-center gap-4">
            <ThemeSwitcher />
            <Link
              href="/contact"
              className="px-5 py-2 rounded-xl text-sm font-semibold bg-brand-primary hover:bg-brand-primary/95 text-white shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer hover:scale-102 active:scale-98"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu controls */}
          <div className="flex items-center gap-3 lg:hidden">
            <ThemeSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-bg-card-hover border border-border-color bg-bg-card cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden animate-in fade-in slide-in-from-top-5 duration-200 border-b border-border-color bg-bg-card text-text-primary">
          <nav className="flex flex-col px-4 pt-2 pb-6 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.hash)}
                className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                  isActive(item)
                    ? "text-brand-primary bg-brand-primary/10"
                    : "text-text-secondary hover:text-text-primary hover:bg-bg-card-hover"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 px-4">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full py-3 text-center rounded-xl font-bold bg-brand-primary text-white shadow-md hover:bg-brand-primary/95 transition-all"
              >
                Get a Quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
