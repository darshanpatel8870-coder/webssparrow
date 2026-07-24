import React from "react";
import { experienceData } from "../data/experience";
import SectionHeader from "./SectionHeader";
import AnimateOnScroll from "./AnimateOnScroll";
import { Calendar, Briefcase, Award } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 border-t border-border-color bg-bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          title="Professional Experience"
          subtitle="My professional journey as a developer, highlighting my achievements and the projects I have driven."
          badge="Timeline"
        />

        <div className="relative border-l-2 border-border-color max-w-4xl mx-auto pl-6 sm:pl-8 space-y-12 mt-12">
          {experienceData.map((exp, idx) => (
            <AnimateOnScroll
              key={exp.id}
              direction="up"
              delay={idx * 0.05}
              className="relative"
            >
              {/* Timeline marker node */}
              <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full border-2 border-brand-primary bg-bg-card text-brand-primary shadow-md">
                <Briefcase className="h-4 w-4" />
              </div>

              {/* Card wrapper */}
              <div className="p-6 rounded-2xl border border-border-color bg-bg-card shadow-sm hover:shadow-md hover:border-brand-primary/30 transition duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-text-primary">{exp.role}</h3>
                    <p className="text-sm font-semibold text-brand-primary mt-0.5">
                      {exp.company} {exp.location && <span className="text-text-secondary font-normal">&bull; {exp.location}</span>}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-border-color bg-bg-card-hover text-text-secondary text-xs font-bold w-fit">
                    <Calendar className="h-3.5 w-3.5" />
                    {exp.period}
                  </div>
                </div>

                <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                  {exp.description}
                </p>

                {/* Achievements List */}
                <div className="space-y-2 mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-text-secondary block">
                    Key Achievements
                  </span>
                  <ul className="space-y-1.5">
                    {exp.achievements.map((achievement, aIdx) => (
                      <li key={aIdx} className="text-xs text-text-secondary flex items-start gap-2">
                        <Award className="h-3.5 w-3.5 text-brand-secondary shrink-0 mt-0.5" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-1.5 border-t border-border-color/60 pt-4">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-brand-primary/10 text-brand-primary text-[10px] font-bold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}
