import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";
import { ArrowLeft, ExternalLink, CheckCircle, Star } from "lucide-react";
import CallToAction from "@/components/CallToAction";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: project.name,
    description: project.description,
  };
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Find related projects (different project in same category or just next projects)
  const relatedProjects = projectsData
    .filter((p) => p.slug !== project.slug)
    .slice(0, 2);

  return (
    <div className="py-12 md:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link
          href="/#portfolio"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-text-secondary hover:text-brand-primary mb-8 transition cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Portfolio
        </Link>

        {/* Case Study Header */}
        <div className="space-y-4 mb-12">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-primary/10 text-brand-primary uppercase tracking-wider">
            Case Study: {project.category}
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl text-text-primary">
            {project.name}
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed max-w-3xl">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-brand-primary text-white hover:bg-brand-primary/95 transition shadow flex items-center gap-2 hover:scale-102 active:scale-98 cursor-pointer"
            >
              <ExternalLink className="h-4.5 w-4.5" />
              Visit Live Site
            </a>
          </div>
        </div>

        {/* Project Hero Banner Image */}
        <div className="relative w-full aspect-video rounded-3xl border border-border-color overflow-hidden mb-12 shadow-xl bg-slate-900">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white drop-shadow-md mb-1">
              {project.name}
            </h2>
            <p className="text-xs sm:text-sm font-mono text-white/90 uppercase tracking-widest">
              Live Website Preview & Architecture Walkthrough
            </p>
          </div>
        </div>

        {/* Core Case Study Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Main details */}
          <div className="lg:col-span-8 space-y-8 text-text-secondary leading-relaxed">
            
            {/* Overview */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-text-primary">Project Overview</h2>
              <p>{project.overview}</p>
            </section>

            {/* Client Problem */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-text-primary">Client Problem</h2>
              <p>{project.clientProblem}</p>
            </section>

            {/* Development Process */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-text-primary">Development Process</h2>
              <ol className="list-decimal pl-5 space-y-2">
                {project.process.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ol>
            </section>

            {/* Challenges & Solutions */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-text-primary">Key Challenge & Implementation</h2>
              <div className="p-5 rounded-2xl border border-border-color bg-bg-card/50 space-y-4">
                <div>
                  <strong className="text-text-primary block mb-1">The Challenge:</strong>
                  <p>{project.challenge}</p>
                </div>
                <div className="border-t border-border-color/60 pt-4">
                  <strong className="text-text-primary block mb-1">My Solution:</strong>
                  <p>{project.solution}</p>
                </div>
              </div>
            </section>

            {/* Results */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-text-primary">Results & Metrics</h2>
              <div className="p-6 rounded-2xl bg-green-500/10 border border-green-500/20 text-green-800 dark:text-green-400 font-medium">
                {project.result}
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Tech & Info Info Panel */}
            <div className="p-6 rounded-2xl border border-border-color bg-bg-card shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider">
                Project Info
              </h3>
              
              <div className="space-y-3 text-xs text-text-secondary leading-relaxed">
                <div>
                  <span className="font-bold text-text-primary block">Category</span>
                  <span>{project.category}</span>
                </div>
                <div className="border-t border-border-color/60 pt-3">
                  <span className="font-bold text-text-primary block">Technologies Used</span>
                  <div className="flex flex-wrap gap-1.5 mt-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-bg-card-hover border border-border-color text-text-secondary font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Goals list */}
            <div className="p-6 rounded-2xl border border-border-color bg-bg-card shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider">
                Project Goals
              </h3>
              <ul className="space-y-2 text-xs text-text-secondary">
                {project.goals.map((goal, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-brand-primary shrink-0" />
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* My responsibilities */}
            <div className="p-6 rounded-2xl border border-border-color bg-bg-card shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider">
                My Responsibilities
              </h3>
              <ul className="space-y-2 text-xs text-text-secondary">
                {project.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-brand-secondary shrink-0" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Testimonial slider / block specific to project */}
        {project.testimonial && (
          <section className="mb-16 p-6 sm:p-8 rounded-2xl border border-border-color bg-bg-card shadow-sm relative overflow-hidden">
            <div className="flex gap-0.5 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4.5 w-4.5 ${
                    i < (project.testimonial?.rating || 5) ? "text-yellow-400 fill-yellow-400" : "text-border-color"
                  }`}
                />
              ))}
            </div>
            <blockquote className="text-sm sm:text-base text-text-secondary italic mb-6 leading-relaxed">
              &ldquo;{project.testimonial.feedback}&rdquo;
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center text-white font-extrabold text-xs">
                {project.testimonial.name.substring(0, 2).toUpperCase()}
              </div>
              <div>
                <cite className="not-italic text-sm font-bold text-text-primary block">
                  {project.testimonial.name}
                </cite>
                <span className="text-[10px] text-text-secondary font-medium block">
                  {project.testimonial.company} &bull; {project.testimonial.location}
                </span>
              </div>
            </div>
          </section>
        )}

        {/* Related Projects */}
        <section className="border-t border-border-color pt-12 mb-16">
          <h2 className="text-2xl font-bold text-text-primary mb-8">Related Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedProjects.map((rel) => (
              <div
                key={rel.slug}
                className="p-6 rounded-2xl border border-border-color bg-bg-card shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold text-brand-primary uppercase tracking-wider block mb-2">
                    {rel.category}
                  </span>
                  <h3 className="text-lg font-bold text-text-primary mb-2">{rel.name}</h3>
                  <p className="text-xs text-text-secondary leading-relaxed mb-4">{rel.description}</p>
                </div>
                <Link
                  href={`/portfolio/${rel.slug}`}
                  className="text-xs font-bold text-brand-primary hover:underline flex items-center gap-1 cursor-pointer"
                >
                  View Case Study
                  <span>&rarr;</span>
                </Link>
              </div>
            ))}
          </div>
        </section>

        <CallToAction />
      </div>
    </div>
  );
}
