export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "exp1",
    role: "WordPress and Shopify Developer (Team Leader)",
    company: "EZ Infoways",
    location: "Ahmedabad, India",
    period: "Feb 2026 - Present",
    description: "Leading the web engineering team in delivering custom WordPress and Shopify e-commerce platforms, custom Liquid theme sections, and enterprise client web portals.",
    achievements: [
      "Serving as Team Leader overseeing custom WordPress (ACF) and Shopify Online Store 2.0 developments.",
      "Architecting custom theme structures, custom Liquid sections, and optimized database schemas.",
      "Managing team code reviews, client technical requirements, and high-performance server deployments."
    ],
    technologies: ["WordPress", "Shopify", "Liquid", "PHP", "ACF", "WooCommerce", "JavaScript", "HTML5", "CSS3", "MySQL"]
  },
  {
    id: "exp2",
    role: "WordPress and Shopify Developer (Team Leader)",
    company: "Poised Media PVT LTD",
    location: "Ahmedabad, India",
    period: "June 2020 - Feb 2026",
    description: "Led web development initiatives over 5.5+ years, engineering custom e-commerce stores, bespoke themes, plugins, and scalable web solutions for global clients.",
    achievements: [
      "Successfully led and delivered 30+ client projects spanning luxury e-commerce storefronts, corporate portals, and custom web applications.",
      "Coded bloat-free custom Liquid themes, ACF Pro flexible layouts, and optimized database queries for maximum performance.",
      "Managed client communications, project timeline estimates, and team development workflows."
    ],
    technologies: ["WordPress", "Shopify", "Liquid", "PHP", "ACF", "WooCommerce", "JavaScript", "CSS3", "HTML5", "MySQL"]
  },
  {
    id: "exp3",
    role: "WordPress Developer & Designer",
    company: "Kretoss Technology",
    location: "Ahmedabad, India",
    period: "2017 - 2020",
    description: "Built custom WordPress websites, designed responsive UI themes, and developed custom ACF site structures following intensive 5-month technical training.",
    achievements: [
      "Completed 5-month intensive web development training and advanced into a 2.5-year core WordPress developer role.",
      "Designed and coded custom WordPress themes, custom post types, and responsive HTML5/CSS3 layouts.",
      "Managed database integrations, site speed tuning, and custom client website deployments."
    ],
    technologies: ["WordPress", "PHP", "HTML5", "CSS3", "JavaScript", "ACF", "MySQL", "Bootstrap"]
  }
];
