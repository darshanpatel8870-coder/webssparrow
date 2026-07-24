export interface ServiceItem {
  id: string;
  icon: string; // Lucide icon name
  title: string;
  description: string;
  deliverables: string[];
  link: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "wordpress",
    icon: "FileCode",
    title: "WordPress Development",
    description: "End-to-end WordPress solutions optimized for speed, safety, and conversions. Tailored to your specific business requirements.",
    deliverables: [
      "Custom themes and plugins from scratch",
      "Headless WordPress with React/Next.js",
      "Elementor, Divi, and Gutenberg block integrations",
      "Advanced Custom Fields (ACF) customization",
      "Speed optimization and security audits",
      "Seamless database migrations"
    ],
    link: "#contact"
  },
  {
    id: "shopify",
    icon: "ShoppingBag",
    title: "Shopify Development",
    description: "Launch, scale, and customize your Shopify store. Create bespoke checkout experiences and robust theme customisations.",
    deliverables: [
      "Custom Shopify theme development",
      "Store migration (from WooCommerce, Magento, etc.)",
      "Shopify App installations & custom integrations",
      "Conversion Rate Optimization (CRO)",
      "Liquid templating and custom sections",
      "Speed and Core Web Vitals optimization"
    ],
    link: "#contact"
  },
  {
    id: "laravel",
    icon: "Cpu",
    title: "Laravel Development",
    description: "Enterprise-grade web applications, robust backends, and custom admin portals. Clean, scalable PHP-based backend architectures.",
    deliverables: [
      "Custom web applications and portal development",
      "Secure REST API and GraphQL backend design",
      "Third-party service and payment integrations",
      "Database architecture and query optimization",
      "Custom auth systems & permission structures",
      "Laravel framework upgrades and debugging"
    ],
    link: "#contact"
  },
  {
    id: "react",
    icon: "Code",
    title: "React.js Development",
    description: "Dynamic, fast, and responsive user interfaces. Building custom single-page apps (SPAs) and component libraries.",
    deliverables: [
      "Interactive dashboards and data visualizations",
      "Custom reusable React components",
      "Next.js App Router static/server side rendering",
      "State management (Redux Toolkit, Zustand, Context)",
      "Clean TypeScript integrations",
      "SEO-friendly React architecture"
    ],
    link: "#contact"
  },
  {
    id: "nodejs",
    icon: "Server",
    title: "Node.js Development",
    description: "Scalable backend systems, microservices, and real-time APIs using Express, NestJS, and Fastify.",
    deliverables: [
      "High-performance RESTful and WebSocket APIs",
      "NoSQL (MongoDB) & SQL database integrations",
      "Secure JWT and OAuth 2.0 authentication",
      "Real-time chat, notifications, and streams",
      "Serverless functions and microservices",
      "Asynchronous worker queues and background tasks"
    ],
    link: "#contact"
  },
  {
    id: "frontend",
    icon: "Layout",
    title: "Frontend Development",
    description: "Pixel-perfect Figma-to-code translations, standards-compliant layout structuring, and engaging user journeys.",
    deliverables: [
      "Modern HTML5, CSS3, ES6+ Javascript coding",
      "Responsive & mobile-first layouts using Tailwind CSS",
      "Cross-browser and cross-platform verification",
      "Lightweight motion design & transition effects",
      "Web accessibility standards (WCAG) compliance",
      "Semantic SEO-optimized frontend code"
    ],
    link: "#contact"
  },
  {
    id: "ecommerce",
    icon: "ShoppingCart",
    title: "E-commerce Development",
    description: "Custom store implementations built for scaling. Manage complex product structures, shipping calculations, and integrations.",
    deliverables: [
      "Custom WooCommerce and Shopify storefronts",
      "Stripe, PayPal, and multi-gateway integrations",
      "Custom product builders and configuration fields",
      "Automated order flows and webhooks setups",
      "Multi-currency and multi-language store setups",
      "Abandoned cart recovery integrations"
    ],
    link: "#contact"
  },
  {
    id: "maintenance",
    icon: "Settings",
    title: "Website Maintenance",
    description: "Proactive security audits, regular plugin updates, performance check-ups, and on-call technical support.",
    deliverables: [
      "Routine plugin, theme, and framework updates",
      "Security scanning, malware removal, and hardening",
      "Daily backups and disaster recovery plans",
      "Hosting, server, and DNS management",
      "Bug fixing and ongoing troubleshooting",
      "Monthly speed and SEO audits"
    ],
    link: "#contact"
  }
];
