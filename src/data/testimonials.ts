export interface TestimonialItem {
  id: string;
  name: string;
  company: string;
  initials: string;
  projectType: string;
  feedback: string;
  rating: number;
  location: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "test1",
    name: "Sarah Jenkins",
    company: "ModaStreet Co.",
    initials: "SJ",
    projectType: "WooCommerce E-commerce Store",
    feedback: "The speed of our new streetwear store is incredible. We were able to handle our new collection launch with zero downtime, and our mobile conversion rates jumped by over 40%. The clean theme and optimized backend code made all the difference.",
    rating: 5,
    location: "London, UK"
  },
  {
    id: "test2",
    name: "David Vance",
    company: "LogixOps Services",
    initials: "DV",
    projectType: "Laravel Internal Business ERP",
    feedback: "This custom app transformed our operations. What used to take a team of three a whole day now happens automatically in minutes. Relational database setups are robust, queries are optimized, and the UI is very easy to use.",
    rating: 5,
    location: "Austin, USA"
  },
  {
    id: "test3",
    name: "Elena Rostova",
    company: "AdVantage Agency",
    initials: "ER",
    projectType: "React Analytics Dashboard",
    feedback: "The interface is gorgeous and extremely responsive. Loading marketing campaigns and viewing real-time charts feels instantaneous. Out-of-the-box support for dark/light themes matches our branding perfectly.",
    rating: 5,
    location: "Berlin, Germany"
  },
  {
    id: "test4",
    name: "Marcus Aurelius",
    company: "BioOrganics Ltd.",
    initials: "MA",
    projectType: "Shopify Theme Customization & ERP Sync",
    feedback: "Our automated inventory sync works flawlessly. We no longer worry about overselling out-of-stock items, and our customers love the collapsible ingredient lists. A developer with solid technical and commerce skills.",
    rating: 5,
    location: "Rome, Italy"
  },
  {
    id: "test5",
    name: "Kenji Sato",
    company: "FitFlow App",
    initials: "KS",
    projectType: "Node.js REST API Backend",
    feedback: "Highly scalable backend architecture. Response rates are well under 80ms, caching handles peak loads, and the Swagger docs made it easy for our frontend team to integrate everything. Incredibly reliable.",
    rating: 5,
    location: "Tokyo, Japan"
  },
  {
    id: "test6",
    name: "Diana Prince",
    company: "Chronicle Media",
    initials: "DP",
    projectType: "WordPress Database Migration & Nginx Tuning",
    feedback: "We were dreading our database migration for months, but they handled it with zero downtime. Moving 500GB of media and 100k posts was seamless. The website load times are 3 times faster now. Exceptional VPS tuning!",
    rating: 5,
    location: "Toronto, Canada"
  }
];
