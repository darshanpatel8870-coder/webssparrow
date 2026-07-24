"use client";

import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Check, Send, AlertCircle, ShieldCheck } from "lucide-react";
import { Linkedin } from "./SocialIcons";
import SectionHeader from "./SectionHeader";
import AnimateOnScroll from "./AnimateOnScroll";

interface FormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  deadline: string;
  description: string;
  communication: string;
  honeypot: string; // Anti-spam field
}

const initialFormState: FormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "WordPress",
  budget: "",
  deadline: "Less than 1 month",
  description: "",
  communication: "Email",
  honeypot: ""
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [formLoadedAt, setFormLoadedAt] = useState<number>(0);

  useEffect(() => {
    setFormLoadedAt(Date.now());
  }, []);

  const validateForm = () => {
    const tempErrors: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) tempErrors.name = "Name is required";
    if (!form.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      tempErrors.email = "Please enter a valid email address";
    }
    if (!form.description.trim()) tempErrors.description = "Project description is required";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when typing
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus("loading");

    try {
      let isSuccess = false;
      
      // 1. Try local API route
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...form, formLoadedAt })
        });
        if (response.ok) isSuccess = true;
      } catch {
        // Fallback to direct client-side posting for static cPanel exports
      }

      // 2. Direct posting to Google Apps Script Webhook (for static cPanel export)
      const webhookUrl = "https://script.google.com/macros/s/AKfycbyvAWOw20RY3Yy-1_YnxGxV4eknGvUFtIBFzcHeLrDR8RinKAF5KnzPVmRPkOujxt1N/exec";
      if (!isSuccess && webhookUrl) {
        try {
          await fetch(webhookUrl, {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "text/plain;charset=utf-8" },
            body: JSON.stringify({
              timestamp: new Date().toISOString(),
              name: form.name,
              email: form.email,
              phone: form.phone || "N/A",
              company: form.company || "N/A",
              service: form.service,
              budget: form.budget || "N/A",
              deadline: form.deadline,
              description: form.description,
              communication: form.communication
            })
          });
          isSuccess = true;
        } catch (err) {
          console.error("Direct Google Sheets post failed:", err);
        }
      }

      if (isSuccess) {
        setStatus("success");
        setForm(initialFormState);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-border-color bg-bg-card/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          title="Start a Project"
          subtitle="Have an application, store, database migration, or maintenance project in mind? Share your requirements and I will get back to you within 24 hours."
          badge="Contact"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
          
          {/* Contact Details Card */}
          <div className="lg:col-span-4 space-y-6">
            <AnimateOnScroll direction="right" className="p-6 rounded-2xl border border-border-color bg-bg-card shadow-sm space-y-6">
              <h3 className="text-lg font-bold text-text-primary">Contact Details</h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Connect directly through standard communication profiles or send your project specifications using the secure contact form.
              </p>

              <ul className="space-y-4 text-sm text-text-secondary">
                <li className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-brand-primary/10 text-brand-primary">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-text-secondary block">Email</span>
                    <a href="mailto:darshan@webssparrow.com" className="hover:text-brand-primary transition">
                      darshan@webssparrow.com
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-brand-primary/10 text-brand-primary">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-text-secondary block">WhatsApp / Phone</span>
                    <a href="https://wa.me/919979321216" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition">
                      +91 9979321216
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-brand-primary/10 text-brand-primary">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-text-secondary block">Location</span>
                    <span>Ahmedabad, India</span>
                  </div>
                </li>
              </ul>

              {/* Social Channels */}
              <div className="border-t border-border-color/60 pt-4">
                <span className="text-[10px] uppercase font-bold text-text-secondary block mb-3">Other Profiles</span>
                <div className="flex gap-3">
                  <a
                    href="https://www.linkedin.com/in/darshan-kavathiya-937353109/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-border-color bg-bg-card hover:bg-bg-card-hover text-text-secondary hover:text-text-primary transition"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Contact Form Details */}
          <div className="lg:col-span-8">
            <AnimateOnScroll direction="left" className="p-6 sm:p-8 rounded-2xl border border-border-color bg-bg-card shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Anti-spam honeypot - hidden from users */}
                <input
                  type="text"
                  name="honeypot"
                  value={form.honeypot}
                  onChange={handleInputChange}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-bold text-text-primary block">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-border-color bg-bg-card text-text-primary text-sm focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                      placeholder="Jane Doe"
                    />
                    {errors.name && <p className="text-xs text-red-500 flex items-center gap-1"><AlertCircle className="h-3.5 w-3.5" />{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-bold text-text-primary block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-border-color bg-bg-card text-text-primary text-sm focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                      placeholder="jane@company.com"
                    />
                    {errors.email && <p className="text-xs text-red-500 flex items-center gap-1"><AlertCircle className="h-3.5 w-3.5" />{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-xs font-bold text-text-primary block">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-border-color bg-bg-card text-text-primary text-sm focus:border-brand-primary"
                      placeholder="+1 (234) 567-890"
                    />
                  </div>

                  {/* Company */}
                  <div className="space-y-1.5">
                    <label htmlFor="company" className="text-xs font-bold text-text-primary block">
                      Company Name (Optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={form.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-border-color bg-bg-card text-text-primary text-sm focus:border-brand-primary"
                      placeholder="Acme Corp"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Required Service */}
                  <div className="space-y-1.5">
                    <label htmlFor="service" className="text-xs font-bold text-text-primary block">
                      Required Service
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 rounded-xl border border-border-color bg-bg-card text-text-primary text-sm focus:border-brand-primary"
                    >
                      <option>WordPress</option>
                      <option>Shopify</option>
                      <option>Laravel</option>
                      <option>React.js</option>
                      <option>Node.js</option>
                      <option>Website maintenance</option>
                      <option>API integration</option>
                      <option>Database migration</option>
                      <option>Other</option>
                    </select>
                  </div>

                  {/* Estimated Budget */}
                  <div className="space-y-1.5">
                    <label htmlFor="budget" className="text-xs font-bold text-text-primary block">
                      Estimated Budget ($ USD / ₹ INR)
                    </label>
                    <input
                      type="number"
                      id="budget"
                      name="budget"
                      value={form.budget}
                      onChange={handleInputChange}
                      min="0"
                      step="100"
                      className="w-full px-4 py-2.5 rounded-xl border border-border-color bg-bg-card text-text-primary text-sm focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                      placeholder="Enter estimated budget (e.g. 2500)"
                    />
                  </div>

                  {/* Project Deadline */}
                  <div className="space-y-1.5">
                    <label htmlFor="deadline" className="text-xs font-bold text-text-primary block">
                      Preferred Deadline
                    </label>
                    <select
                      id="deadline"
                      name="deadline"
                      value={form.deadline}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 rounded-xl border border-border-color bg-bg-card text-text-primary text-sm focus:border-brand-primary"
                    >
                      <option>Less than 1 month</option>
                      <option>1 - 2 months</option>
                      <option>2 - 3 months</option>
                      <option>3+ months</option>
                    </select>
                  </div>
                </div>

                {/* Project Description */}
                <div className="space-y-1.5">
                  <label htmlFor="description" className="text-xs font-bold text-text-primary block">
                    Project Description *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={form.description}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-2.5 rounded-xl border border-border-color bg-bg-card text-text-primary text-sm focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                    placeholder="Briefly describe your project goals, scope, and technical requirements..."
                  />
                  {errors.description && <p className="text-xs text-red-500 flex items-center gap-1"><AlertCircle className="h-3.5 w-3.5" />{errors.description}</p>}
                </div>

                {/* Preferred Communication Method */}
                <div className="space-y-3">
                  <span className="text-xs font-bold text-text-primary block">
                    Preferred Communication Method
                  </span>
                  <div className="flex flex-wrap gap-4 text-sm text-text-secondary">
                    {["Email", "WhatsApp / Phone", "Google Meet / Zoom"].map((method) => (
                      <label key={method} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="communication"
                          value={method}
                          checked={form.communication === method}
                          onChange={handleInputChange}
                          className="text-brand-primary focus:ring-brand-primary"
                        />
                        <span>{method}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Actions & Status states */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="px-6 py-3 rounded-xl font-bold bg-brand-primary text-white hover:bg-brand-primary/95 disabled:bg-indigo-300 dark:disabled:bg-indigo-900/60 shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-102 active:scale-98"
                  >
                    {status === "loading" ? (
                      <>
                        <span className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
                        Sending Details...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Requirements
                      </>
                    )}
                  </button>

                  {/* Submission statuses */}
                  {status === "success" && (
                    <p className="text-green-600 dark:text-green-400 font-semibold text-sm flex items-center gap-1.5 animate-in fade-in slide-in-from-right-3">
                      <Check className="h-4.5 w-4.5 p-0.5 rounded-full bg-green-500 text-white" />
                      Submitted successfully! I will contact you soon.
                    </p>
                  )}
                  {status === "error" && (
                    <p className="text-red-500 font-semibold text-sm flex items-center gap-1.5 animate-in fade-in slide-in-from-right-3">
                      <AlertCircle className="h-4.5 w-4.5" />
                      An error occurred. Please try again later.
                    </p>
                  )}
                </div>

                <div className="pt-2 border-t border-border-color/60 flex items-center gap-2 text-[11px] text-text-secondary font-medium">
                  <ShieldCheck className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>Protected by Honeypot & Anti-Spam Time-Lock &bull; Automated Spreadsheet Sync Enabled</span>
                </div>

              </form>
            </AnimateOnScroll>
          </div>

        </div>

      </div>
    </section>
  );
}
