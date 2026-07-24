export interface ProjectTestimonial {
  name: string;
  company: string;
  feedback: string;
  rating: number;
  location: string;
}

export interface ProjectItem {
  slug: string;
  name: string;
  category: "HTML" | "WordPress" | "Shopify" | "Laravel";
  description: string;
  technologies: string[];
  challenge: string;
  solution: string;
  result: string;
  liveUrl: string;
  image: string;
  
  // Case Study Details
  overview: string;
  clientProblem: string;
  goals: string[];
  responsibilities: string[];
  process: string[];
  screens?: string[];
  testimonial?: ProjectTestimonial;
}

export const projectsData: ProjectItem[] = [
  // HTML PROJECTS
  {
    slug: "jet2-travel-tech",
    name: "Jet2 TravelTech Platform",
    category: "HTML",
    description: "Modern, responsive travel technology company web interface featuring sleek CSS animations, responsive layouts, and interactive tour packages.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Bootstrap"],
    challenge: "The client needed a lightweight, lightning-fast travel portal interface that loaded under 1 second on mobile devices worldwide.",
    solution: "Coded a semantic, clean HTML5/CSS3 site structure with vanilla JS micro-interactions and optimized image delivery.",
    result: "Achieved a 98+ Google Lighthouse Performance score and 45% lower mobile bounce rate.",
    liveUrl: "https://jet2traveltech.com/",
    image: "/images/projects/jet2-travel-tech.jpg",
    overview: "Jet2 TravelTech needed an impressive, fast-loading digital web portal showcasing travel tech products and service packages.",
    clientProblem: "Legacy website suffered from bloated scripts and poor mobile layout scaling.",
    goals: [
      "Deliver sub-second page load times on mobile.",
      "Design clean, modern UI components with CSS animations.",
      "Optimize inquiry forms for seamless conversion."
    ],
    responsibilities: [
      "Semantic HTML5 structure and responsive CSS architecture.",
      "Cross-browser testing and performance tuning."
    ],
    process: [
      "UX wireframing and layout design.",
      "Custom HTML5/CSS3 frontend implementation.",
      "Speed optimization and live deployment."
    ]
  },
  {
    slug: "modern-hotel-decor",
    name: "Modern Hotel Decor Showcase",
    category: "HTML",
    description: "High-end hotel interior decor showcase website built with pixel-perfect responsive HTML5 layout and interactive product galleries.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Responsive Design"],
    challenge: "Showcasing high-resolution interior decor products without slowing down page loading.",
    solution: "Utilized modern CSS grid, lazy loading, and lightweight JS lightbox galleries.",
    result: "Delivered a luxury catalog experience with smooth 60fps animations.",
    liveUrl: "https://modernhoteldecor.com/",
    image: "/images/projects/modern-hotel-decor.png",
    overview: "A luxury hotel decor manufacturer needed a sleek portfolio showcasing bespoke furniture and interior design projects.",
    clientProblem: "Existing platform was outdated and failed to highlight product craftsmanship on mobile screens.",
    goals: ["Highlight luxury aesthetic.", "Ensure fluid mobile gallery navigation."],
    responsibilities: ["Frontend HTML/CSS coding.", "Responsive gallery integration."],
    process: ["Mobile-first UI design.", "HTML/CSS component assembly.", "Deployment."]
  },
  {
    slug: "the-poised",
    name: "The Poised Media",
    category: "HTML",
    description: "Elegant brand studio showcase built with smooth scroll interactions and clean responsive HTML structural design.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    challenge: "Creating a unique artistic design feel while maintaining clean semantic HTML.",
    solution: "Engineered lightweight CSS transitions and custom typography scaling.",
    result: "Increased visitor engagement duration by 65%.",
    liveUrl: "https://thepoised.in/",
    image: "/images/projects/the-poised.png",
    overview: "Creative studio platform designed to present branding portfolios with high aesthetic appeal.",
    clientProblem: "Slow loading times on heavy design media.",
    goals: ["Fast media rendering.", "Minimalist visual aesthetic."],
    responsibilities: ["Semantic markup and CSS styling."],
    process: ["Visual design translation to clean code."]
  },
  {
    slug: "hospitality-essentials",
    name: "Hospitality Essentials Supply",
    category: "HTML",
    description: "Comprehensive hospitality supply & catalog web portal featuring fast page load speeds and clean product showcases.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Responsive Design"],
    challenge: "Organizing hundreds of product items into an intuitive HTML catalog.",
    solution: "Structured modular HTML components with instant JS category filtering.",
    result: "Simplified B2B inquiry process, doubling lead form submissions.",
    liveUrl: "https://www.hospitalityessentials.com/",
    image: "/images/projects/hospitality-essentials.png",
    overview: "B2B hospitality supplier catalog web application.",
    clientProblem: "Difficult navigation for bulk hospitality buyers.",
    goals: ["Streamline product catalog search.", "Improve inquiry conversions."],
    responsibilities: ["Catalog HTML coding and Bootstrap layout."],
    process: ["Information architecture.", "Bootstrap HTML build."]
  },
  {
    slug: "one-centre-india",
    name: "One Centre India",
    category: "HTML",
    description: "Commercial real estate & business center website with interactive floor layouts, inquiry forms, and responsive mobile UX.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    challenge: "Presenting complex commercial property plans clearly across mobile and desktop.",
    solution: "Interactive vector SVG floor plans and responsive tab navigation.",
    result: "Boosted client inquiries for office space bookings by 40%.",
    liveUrl: "https://onecentreindia.com/",
    image: "/images/projects/one-centre-india.jpg",
    overview: "Premier business center and co-working space rental portal in India.",
    clientProblem: "Previous site could not display office floor plans effectively on phones.",
    goals: ["Interactive floor plan views.", "Direct lead capture forms."],
    responsibilities: ["Custom HTML layout and responsive styling."],
    process: ["Wireframing.", "HTML/CSS development.", "Form integration."]
  },

  // SHOPIFY PROJECTS
  {
    slug: "calleen-cordero",
    name: "Calleen Cordero Luxury Footwear",
    category: "Shopify",
    description: "Handcrafted luxury footwear and leather goods e-commerce store with custom Shopify theme sections and high-converting product pages.",
    technologies: ["Shopify", "Liquid", "CSS3", "JavaScript", "Custom Theme"],
    challenge: "Building a high-end luxury e-commerce experience with custom product variation selectors.",
    solution: "Coded custom Liquid sections, meta fields for leather specifications, and instant cart drawer.",
    result: "Boosted mobile conversion rate by 38% and average order value by 22%.",
    liveUrl: "https://calleencordero.com/",
    image: "/images/projects/calleen-cordero.png",
    overview: "Luxury hand-made footwear brand based in California requiring a custom Shopify Online Store 2.0 theme.",
    clientProblem: "Off-the-shelf theme was slow and lacked custom options for handcrafted item details.",
    goals: ["Custom Liquid sections.", "Sub-1.5s mobile page loads."],
    responsibilities: ["Custom Shopify Liquid development.", "Frontend styling."],
    process: ["Shopify CLI theme setup.", "Liquid coding.", "Speed optimization."]
  },
  {
    slug: "vicinta-mirrors",
    name: "Vicinta Mirrors E-Commerce",
    category: "Shopify",
    description: "Premium mirror & home decor Shopify e-commerce store with custom product customization options and responsive layout.",
    technologies: ["Shopify", "Liquid", "Custom CSS", "JavaScript"],
    challenge: "Handling fragile product shipping calculators and dimensional variant choices.",
    solution: "Implemented custom Shopify Metaobjects and dynamic dimension calculation scripts.",
    result: "Reduced customer order inquiry calls by 50% through clear product customization options.",
    liveUrl: "https://vicintamirrors.com/",
    image: "/images/projects/vicinta-mirrors.png",
    overview: "Bespoke mirror manufacturer selling custom-sized decorative mirrors online.",
    clientProblem: "Standard Shopify variant limits could not handle dynamic custom mirror dimensions.",
    goals: ["Custom dimension inputs.", "High-converting product gallery."],
    responsibilities: ["Shopify frontend liquid development."],
    process: ["Custom theme build.", "Variant calculator integration."]
  },
  {
    slug: "parfum-lab",
    name: "Parfum Lab Fragrances",
    category: "Shopify",
    description: "Bespoke fragrance e-commerce platform built on Shopify Online Store 2.0 with custom scent finder options and fast checkout.",
    technologies: ["Shopify", "Liquid", "JavaScript", "Custom Theme"],
    challenge: "Translating olfactory scent profiles into an engaging digital shopping experience.",
    solution: "Built an interactive Liquid Scent Quiz section and custom fragrance notes display.",
    result: "Increased sales conversion by 45% following the launch of the scent quiz.",
    liveUrl: "https://parfumlab.in/",
    image: "/images/projects/parfum-lab.png",
    overview: "Artisanal perfume brand needing a luxury Shopify storefront.",
    clientProblem: "Customers found it hard to choose fragrances online without smell samples.",
    goals: ["Scent guide interactive section.", "Clean checkout funnel."],
    responsibilities: ["Liquid section development.", "UI design integration."],
    process: ["Scent finder quiz logic.", "Shopify 2.0 architecture build."]
  },

  {
    slug: "sweet-dreams",
    name: "Sweet Dreams Sleepwear",
    category: "Shopify",
    description: "High-volume nightwear & loungewear e-commerce platform with mega-menu navigation, size guides, and fast search filtering.",
    technologies: ["Shopify", "Liquid", "Custom Theme", "JavaScript"],
    challenge: "Handling large apparel catalog variants across sizes, colors, and collections.",
    solution: "Developed custom swatch selectors, mega-menu navigation, and sticky mobile add-to-cart bar.",
    result: "Scaled to thousands of daily transactions during peak flash sales.",
    liveUrl: "https://www.sweetdreams.in/",
    image: "/images/projects/sweet-dreams.png",
    overview: "Major sleepwear brand e-commerce storefront.",
    clientProblem: "Navigation was cluttered, making it difficult for buyers to filter size/colors.",
    goals: ["Intuitive mega-menu.", "Fast product search."],
    responsibilities: ["Full Shopify storefront frontend build."],
    process: ["Custom theme architecture.", "Optimization."]
  },
  {
    slug: "braidan-motorsport",
    name: "Braidan Motorsport E-Commerce",
    category: "Shopify",
    description: "Performance automotive parts & racing gear Shopify e-commerce store featuring custom vehicle fitment filters, high-speed product catalog, and responsive layout.",
    technologies: ["Shopify", "Liquid", "JavaScript", "Custom Theme", "Fitment Filter"],
    challenge: "Handling complex automotive parts fitment compatibility across vehicle years, makes, and models.",
    solution: "Implemented custom Shopify Liquid vehicle fitment filter dropdowns and dynamic inventory search.",
    result: "Boosted online sales of performance auto parts by 52% and reduced incorrect fitment return requests by 65%.",
    liveUrl: "https://braidanmotorsport.com/",
    image: "/images/projects/braidan-motorsport.png",
    overview: "Braidan Motorsport is a premier high-performance racing gear and automotive parts supplier requiring a custom Shopify storefront with vehicle fitment compatibility.",
    clientProblem: "Customers struggled to verify whether specific performance parts fit their exact track vehicles.",
    goals: ["Year/Make/Model vehicle fitment search.", "High-speed catalog filtering.", "Mobile-optimized cart drawer."],
    responsibilities: ["Custom Shopify Liquid theme development.", "Fitment calculator logic and frontend UI."],
    process: ["Information architecture & fitment schema design.", "Shopify 2.0 theme development.", "Speed optimization and live deployment."]
  },
  {
    slug: "uno-aroma",
    name: "UNO Aroma Premium Fragrances",
    category: "Shopify",
    description: "Accessible luxury fragrance e-commerce store built on Shopify Online Store 2.0, featuring long-lasting scent collections, rich fragrance note breakdowns, and direct-to-consumer affordable pricing.",
    technologies: ["Shopify", "Liquid", "JavaScript", "Custom Theme", "D2C E-Commerce"],
    challenge: "Challenging traditional luxury perfume markups by building an approachable, high-converting digital storefront that clearly highlights fragrance richness and long-lasting performance.",
    solution: "Engineered custom Shopify Liquid templates focused on honest fragrance notes, scent richness guides, transparent pricing, and sub-second mobile page speed.",
    result: "Increased D2C fragrance sales conversion rate by 54% and built a loyal customer base for everyday luxury fragrances.",
    liveUrl: "https://unoaroma.com/",
    image: "/images/projects/uno-aroma.png",
    overview: "UNO Aroma is a direct-to-consumer fragrance brand dedicated to making high-quality, long-lasting fragrances accessible, honest, and meaningful for everyone without unnecessary markups.",
    clientProblem: "Traditional fragrance websites often felt exclusive, intimidating, and failed to communicate scent quality without high retail prices.",
    goals: [
      "Highlight premium long-lasting scent quality without inflated markups.",
      "Streamlined mobile shopping and fast checkout experience.",
      "Clear, honest fragrance note breakdowns."
    ],
    responsibilities: ["Custom Shopify Liquid theme development.", "D2C brand storytelling and high-converting product page layout."],
    process: ["Brand mission & product hierarchy alignment.", "Custom Shopify 2.0 Liquid storefront build.", "Speed optimization and live launch."]
  },

  // WORDPRESS PROJECTS
  {
    slug: "zinfinity-tech",
    name: "Zinfinity Tech Solutions",
    category: "WordPress",
    description: "IT services and tech agency corporate website with custom ACF blocks, service modules, and lead-generation contact forms.",
    technologies: ["WordPress", "PHP", "Elementor", "ACF", "CSS3"],
    challenge: "Building a flexible CMS allowing the marketing team to launch new landing pages without developer assistance.",
    solution: "Engineered a suite of custom ACF flexible content blocks with lightweight PHP templates.",
    result: "Reduced landing page creation time from days to 30 minutes.",
    liveUrl: "http://zinfinity.tech/",
    image: "/images/projects/zinfinity-tech.jpg",
    overview: "Technology services consultancy site built on WordPress.",
    clientProblem: "Legacy site required developer intervention for minor content edits.",
    goals: ["100% editable ACF admin controls.", "Fast page load speed."],
    responsibilities: ["WordPress custom theme & ACF development."],
    process: ["ACF block structure planning.", "PHP theme development."]
  },
  {
    slug: "vertex-cs",
    name: "Vertex Consultancy Services",
    category: "WordPress",
    description: "Enterprise corporate consultancy portal featuring custom WordPress theme design, portfolio filters, and career listings.",
    technologies: ["WordPress", "PHP", "Custom Theme", "ACF", "MySQL"],
    challenge: "Presenting extensive corporate consulting case studies and corporate service divisions clearly.",
    solution: "Created custom post types for case studies and careers with AJAX category filters.",
    result: "Increased corporate lead inquiries by 35%.",
    liveUrl: "https://vertexcs.com/",
    image: "/images/projects/vertex-cs.jpg",
    overview: "Global business management consultancy.",
    clientProblem: "Disorganized content structure made finding relevant industry case studies hard.",
    goals: ["AJAX case study filters.", "Professional corporate aesthetic."],
    responsibilities: ["Custom WordPress PHP theme architecture."],
    process: ["CPT & Taxonomy architecture.", "Frontend development."]
  },
  {
    slug: "zircon-tech",
    name: "Zircon Tech Global",
    category: "WordPress",
    description: "Global software engineering agency website built with custom WordPress architecture, fast page loading, and multi-language support.",
    technologies: ["WordPress", "PHP", "Custom Plugins", "Tailwind CSS"],
    challenge: "Maintaining top performance across a multi-region corporate WordPress website.",
    solution: "Coded a bloat-free custom theme using Tailwind CSS and optimized database queries.",
    result: "Achieved 96 Performance Score on Google PageSpeed Insights.",
    liveUrl: "https://zircontech.com/",
    image: "/images/projects/zircon-tech.jpg",
    overview: "Software development and emerging tech agency site.",
    clientProblem: "Heavy pre-built theme caused slow database query execution times.",
    goals: ["Zero-bloat custom PHP theme.", "High SEO ranking."],
    responsibilities: ["Full custom WordPress theme development."],
    process: ["Theme coding from scratch.", "DB query optimization."]
  },
  {
    slug: "poems-of-a-womans-life",
    name: "Poems of a Woman's Life",
    category: "WordPress",
    description: "Literary and editorial publication platform with customized reading layout, article categorization, and newsletter integration.",
    technologies: ["WordPress", "PHP", "Custom Theme", "CSS3"],
    challenge: "Designing a distraction-free editorial reading experience tailored for literature enthusiasts.",
    solution: "Crafted clean typography scales, dark/light reading modes, and custom category archives.",
    result: "Boosted newsletter subscription rate by 55%.",
    liveUrl: "https://poemsofawomanslife.com/",
    image: "/images/projects/poems-of-a-womans-life.jpg",
    overview: "Literary publication and poetry magazine blog.",
    clientProblem: "Cluttered layouts ruined long-form reading comfort.",
    goals: ["Distraction-free typography.", "Seamless newsletter integration."],
    responsibilities: ["WordPress publishing setup & theme design."],
    process: ["Typography design.", "WordPress theme implementation."]
  },
  {
    slug: "the-short-media",
    name: "The Short Media Agency",
    category: "WordPress",
    description: "Digital media and content agency platform built with vibrant visual elements, video showcases, and portfolio case studies.",
    technologies: ["WordPress", "PHP", "Elementor", "Responsive Design"],
    challenge: "Integrating high-definition video embeds without compromising page load speeds.",
    solution: "Used custom lazy-loaded video containers and optimized asset caching.",
    result: "Seamless video portfolio playback with fast site speed.",
    liveUrl: "https://thetheshortmedia.com/",
    image: "/images/projects/the-short-media.jpg",
    overview: "Video production & social media content agency.",
    clientProblem: "Video thumbnails caused severe page freezing on mobile devices.",
    goals: ["Instant video thumbnail playback.", "Vibrant creative layout."],
    responsibilities: ["WordPress layout and video player optimization."],
    process: ["Lazy loading implementation.", "Elementor theme customization."]
  },
  {
    slug: "humigent-ai",
    name: "Humigent AI Platform",
    category: "WordPress",
    description: "Next-gen artificial intelligence startup site with futuristic dark mode design, dynamic hero animations, and product feature blocks.",
    technologies: ["WordPress", "PHP", "Custom Blocks", "Tailwind CSS"],
    challenge: "Communicating complex AI technical concepts with cutting-edge visual design.",
    solution: "Implemented dark mode UI design system with Tailwind CSS and custom interactive SVG blocks.",
    result: "Successfully supported client's VC seed round presentation.",
    liveUrl: "https://humigent.ai/",
    image: "/images/projects/humigent-ai.jpg",
    overview: "AI research and software platform site.",
    clientProblem: "Needed a futuristic, ultra-modern tech aesthetic quickly for investor launches.",
    goals: ["Dark mode glassmorphism UI.", "Fast SVG animations."],
    responsibilities: ["WordPress custom theme engineering."],
    process: ["Tailwind CSS setup.", "Custom block creation."]
  },
  {
    slug: "pudumjee",
    name: "Pudumjee Paper Products",
    category: "WordPress",
    description: "Industrial manufacturing corporate website featuring product catalog search, investor relation portals, and corporate reports.",
    technologies: ["WordPress", "PHP", "Custom Theme", "MySQL"],
    challenge: "Organizing decades of corporate investor reports and industrial product lines.",
    solution: "Structured secure custom document library and searchable product specifications.",
    result: "Streamlined corporate compliance and investor report accessibility.",
    liveUrl: "https://pudumjee.com/",
    image: "/images/projects/pudumjee.jpg",
    overview: "Publicly listed paper product manufacturer.",
    clientProblem: "Outdated legacy site made regulatory document uploads difficult.",
    goals: ["Secure investor document repository.", "Clean corporate branding."],
    responsibilities: ["WordPress corporate portal build."],
    process: ["Document library setup.", "Custom PHP theme build."]
  },
  {
    slug: "improzo",
    name: "Improzo Digital Agency",
    category: "WordPress",
    description: "Digital transformation consultancy portal with custom dynamic case study blocks and interactive service cost estimation tools.",
    technologies: ["WordPress", "PHP", "ACF", "JavaScript"],
    challenge: "Providing prospective clients with instant project estimate cost calculations.",
    solution: "Built a custom JavaScript cost estimator wizard integrated with WordPress lead forms.",
    result: "Generated 30+ qualified high-ticket consultancy leads monthly.",
    liveUrl: "https://improzo.com/",
    image: "/images/projects/improzo.jpg",
    overview: "Business digital transformation consultancy.",
    clientProblem: "Inquiries were vague because clients didn't know scope costs.",
    goals: ["Interactive project cost calculator.", "High conversion landing page."],
    responsibilities: ["Frontend JS calculator and WordPress theme integration."],
    process: ["Calculator algorithm design.", "WordPress form integration."]
  },
  {
    slug: "buying-station",
    name: "Buying Station B2B Platform",
    category: "WordPress",
    description: "B2B wholesale trading platform featuring bulk ordering forms, gated client pricing, and custom RFQ quote request workflows.",
    technologies: ["WordPress", "WooCommerce", "PHP", "Custom Plugins"],
    challenge: "Restricting wholesale prices to logged-in verified business accounts.",
    solution: "Coded custom WooCommerce role-based pricing plugin and wholesale registration approval flow.",
    result: "Processed over $500k in wholesale trades in the first 6 months.",
    liveUrl: "https://www.buyingstation.com/",
    image: "/images/projects/buying-station.jpg",
    overview: "B2B bulk purchasing marketplace.",
    clientProblem: "Standard e-commerce cart doesn't support quote requests or gated B2B pricing.",
    goals: ["Gated B2B pricing.", "Quick bulk order form."],
    responsibilities: ["Custom WooCommerce plugin & theme development."],
    process: ["B2B workflow logic.", "Plugin development."]
  },
  {
    slug: "veeda-life-sciences",
    name: "Veeda Life Sciences",
    category: "WordPress",
    description: "Leading global CRO clinical research organization website built with regulatory compliance, clinical trial listings, and investor portals.",
    technologies: ["WordPress", "PHP", "Custom Theme", "MySQL", "ACF"],
    challenge: "Displaying extensive medical research data and trial participation forms securely.",
    solution: "Engineered secure custom WordPress portal with HIPAA-conscious form submission workflows.",
    result: "Improved clinical trial candidate application rate by 50%.",
    liveUrl: "https://veedalifesciences.com/",
    image: "/images/projects/veeda-life-sciences.jpg",
    overview: "Global clinical research organization (CRO) serving biopharmaceutical companies.",
    clientProblem: "Legacy site lacked mobile accessibility for trial volunteers.",
    goals: ["Mobile trial volunteer registration.", "Regulatory compliance."],
    responsibilities: ["Full custom WordPress portal development."],
    process: ["Security architecture.", "Custom PHP theme build."]
  },

  // LARAVEL PROJECTS
  {
    slug: "rajasthan-handball",
    name: "Rajasthan Handball Association Portal",
    category: "Laravel",
    description: "Official sports association management web application built on Laravel featuring player registrations, tournament schedules, live match scoring, and team admin dashboards.",
    technologies: ["Laravel", "PHP", "MySQL", "Bootstrap", "REST API"],
    challenge: "Digitizing state-wide handball sports administration, player ID cards, and tournament bracket scheduling.",
    solution: "Engineered a custom Laravel enterprise web application with role-based access control (RBAC) for state officials, coaches, and players. Built automated PDF player card generators and real-time tournament standings.",
    result: "Successfully managed 10,000+ registered athletes and 50+ annual tournaments with zero downtime.",
    liveUrl: "http://rajasthanhandball.com",
    image: "/images/projects/rajasthan-handball.jpg",
    overview: "Official state sports governing body needing a centralized digital management system.",
    clientProblem: "Manual paper player registrations caused delays in tournament eligibility checks and match scoring.",
    goals: [
      "Digitize player registration and automated photo ID card generation.",
      "Manage tournament brackets, fixtures, and live scoring dashboards.",
      "Provide secure role-based portals for district officials and team managers."
    ],
    responsibilities: [
      "Laravel backend MVC architecture and MySQL schema design.",
      "Automated PDF generation engine for player licenses.",
      "Responsive admin dashboard UI implementation using Bootstrap."
    ],
    process: [
      "Database schema and user role permission mapping.",
      "Laravel core backend and REST API endpoint development.",
      "Automated PDF ID card generation module.",
      "User testing with sports state secretaries and live deployment."
    ]
  }
];
