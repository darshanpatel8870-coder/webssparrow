import React from "react";
import Image from "next/image";

interface TechLogoProps {
  name: string;
  className?: string;
}

const logoMap: Record<string, string> = {
  "HTML5": "/logos/html5.svg",
  "CSS3": "/logos/css3.svg",
  "JavaScript": "/logos/javascript.svg",
  "React.js": "/logos/react.svg",
  "Next.js": "/logos/nextjs.svg",
  "Tailwind CSS": "/logos/tailwindcss.svg",
  "Bootstrap": "/logos/bootstrap.svg",
  "Responsive Design": "/logos/responsive.svg",
  "PHP": "/logos/php.svg",
  "Laravel": "/logos/laravel.svg",
  "Node.js": "/logos/nodejs.svg",
  "WordPress": "/logos/wordpress.svg",
  "WooCommerce": "/logos/woocommerce.svg",
  "Shopify": "/logos/shopify.svg",
  "ACF": "/logos/acf.svg",
  "Elementor": "/logos/elementor.svg",
  "Divi": "/logos/divi.svg",
  "Custom Themes": "/logos/custom-themes.svg",
  "Custom Plugins": "/logos/custom-plugins.svg",
  "MySQL": "/logos/mysql.svg",
  "Database Migrations": "/logos/database-migrations.svg",
  "Query Optimization": "/logos/query-optimization.svg",
  "Indexing": "/logos/indexing.svg",
  "Data Mapping": "/logos/data-mapping.svg",
  "Git": "/logos/git.svg",
  "Postman": "/logos/postman.svg",
  "WP-CLI": "/logos/wp-cli.svg",
  "Composer": "/logos/composer.svg",
  "Figma": "/logos/figma.svg",
  "Photoshop": "/logos/photoshop.svg",
  "Illustrator": "/logos/illustrator.svg",
  "CorelDraw": "/logos/coreldraw.svg",
  "cPanel": "/logos/cpanel.svg",
  "VPS": "/logos/vps.svg",
  "Cloudflare": "/logos/cloudflare.svg",
  "Apache": "/logos/apache.svg",
  "Nginx": "/logos/nginx.svg",
  "Website Migration": "/logos/website-migration.svg",
  "DNS Management": "/logos/dns-management.svg"
};

export default function TechLogo({ name, className = "w-7 h-7" }: TechLogoProps) {
  const logoPath = logoMap[name];

  if (!logoPath) {
    return (
      <span className="font-mono text-xs font-bold text-brand-primary">
        {name.substring(0, 2).toUpperCase()}
      </span>
    );
  }

  return (
    <Image
      src={logoPath}
      alt={`${name} official logo`}
      width={32}
      height={32}
      className={`${className} object-contain p-0.5`}
    />
  );
}
