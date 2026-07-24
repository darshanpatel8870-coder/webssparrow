export interface SkillItem {
  name: string;
  category: string;
  icon?: string; // Optional icon mapping
}

export const skillsData: SkillItem[] = [
  // Frontend
  { name: "HTML5", category: "Frontend" },
  { name: "CSS3", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "React.js", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Bootstrap", category: "Frontend" },
  { name: "Responsive Design", category: "Frontend" },

  // Backend
  { name: "PHP", category: "Backend" },
  { name: "Laravel", category: "Backend" },
  { name: "Node.js", category: "Backend" },

  // CMS & E-commerce
  { name: "WordPress", category: "CMS & E-commerce" },
  { name: "WooCommerce", category: "CMS & E-commerce" },
  { name: "Shopify", category: "CMS & E-commerce" },
  { name: "ACF", category: "CMS & E-commerce" },
  { name: "Elementor", category: "CMS & E-commerce" },
  { name: "Divi", category: "CMS & E-commerce" },
  { name: "Custom Themes", category: "CMS & E-commerce" },
  { name: "Custom Plugins", category: "CMS & E-commerce" },

  // Databases
  { name: "MySQL", category: "Databases" },
  { name: "Database Migrations", category: "Databases" },
  { name: "Query Optimization", category: "Databases" },
  { name: "Indexing", category: "Databases" },
  { name: "Data Mapping", category: "Databases" },

  // Development & Designing Tools
  { name: "Git", category: "Development & Designing Tools" },
  { name: "Postman", category: "Development & Designing Tools" },
  { name: "WP-CLI", category: "Development & Designing Tools" },
  { name: "Composer", category: "Development & Designing Tools" },
  { name: "Figma", category: "Development & Designing Tools" },
  { name: "Photoshop", category: "Development & Designing Tools" },
  { name: "Illustrator", category: "Development & Designing Tools" },
  { name: "CorelDraw", category: "Development & Designing Tools" },

  // Hosting & Deployment
  { name: "cPanel", category: "Hosting & Deployment" },
  { name: "VPS", category: "Hosting & Deployment" },
  { name: "Cloudflare", category: "Hosting & Deployment" },
  { name: "Apache", category: "Hosting & Deployment" },
  { name: "Nginx", category: "Hosting & Deployment" },
  { name: "Website Migration", category: "Hosting & Deployment" },
  { name: "DNS Management", category: "Hosting & Deployment" }
];
