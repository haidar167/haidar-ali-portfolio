// ============================================================
//  YOUR PORTFOLIO SETTINGS — EDIT EVERYTHING FROM THIS ONE FILE
//  Change the values below and the whole site updates.
// ============================================================

export const profile = {
  // ← EDIT: Type your real name here (shown in navbar, hero and footer)
  name: "Haidar Ali",

  // ← EDIT: A short brand mark for the navbar logo (e.g. "AH." or "DevStudio")
  initials: "HA",

  // ← EDIT: Your profile photo — replace public/avatar.png with your own
  //   photo (keep the same file name) and it will appear automatically.
  //   Or change the line below to point to another image, e.g. "/me.jpg"
  photo: "/avatar.png",

  // ← EDIT: Your main role shown as the hero headline
  role: "Web Developer",

  // ← EDIT: Short punchy line under the headline (services you offer)
  tagline: "Custom Websites · Web Apps · E-commerce · AI Agents · Dashboards · APIs",

  // ← EDIT: One or two sentences about what you do for clients
  description:
    "Slow load times, outdated designs, ideas stuck in your head — I build fast, modern web products that turn visitors into customers and businesses into brands.",

  // ← EDIT: Your contact email (shown in contact section and footer)
  email: "haidar904455@gmail.com",

  // ← EDIT: WhatsApp number with country code, digits only (no + or spaces)
  //   Powers the floating WhatsApp button and the contact card below.
  whatsappNumber: "923326111076",

  // ← EDIT: Your real links (set to "#" until you have them)
  upworkUrl: "#", // e.g. "https://www.upwork.com/freelancers/yourid"
  githubUrl: "#", // e.g. "https://github.com/yourusername"
  linkedinUrl: "https://www.linkedin.com/in/haidar-ali-192abc533b",
  orcidUrl: "https://orcid.org/0009-0008-3278-5582",

  // ← EDIT: Hero stats — put your own numbers here
  stats: [
    { value: "50+", label: "Projects Delivered" },
    { value: "100%", label: "On-Time Delivery" },
    { value: "5★", label: "Average Client Rating" },
  ],
};

// ---------- SERVICES (the "What I Build" section) ----------
export const services = [
  {
    icon: "Globe",
    title: "Custom Websites",
    description:
      "Pixel-perfect landing pages and business websites that load in under a second and look stunning on every device.",
    tags: ["Landing Pages", "Business Sites", "SEO-Ready"],
  },
  {
    icon: "LayoutDashboard",
    title: "Web Applications",
    description:
      "Full-stack apps with logins, roles and real-time data — from MVP to production, built to handle real users.",
    tags: ["SaaS", "Portals", "MVPs"],
  },
  {
    icon: "ShoppingCart",
    title: "E-commerce Stores",
    description:
      "Online stores with carts, payments and order flows that just work — ready to sell from day one.",
    tags: ["Stripe", "Shopify", "Payments"],
  },
  {
    icon: "BarChart3",
    title: "Dashboards & Admin Panels",
    description:
      "Clean, data-rich dashboards where you can see your numbers at a glance and manage everything in one place.",
    tags: ["Analytics", "CRUD", "Reports"],
  },
  {
    icon: "Plug",
    title: "APIs & Integrations",
    description:
      "REST APIs, third-party integrations and backend logic that connect your product to the tools you already use.",
    tags: ["REST", "Node.js", "Automation"],
  },
  {
    icon: "Rocket",
    title: "Speed & Performance",
    description:
      "Is your site slow? I audit, optimize and rebuild until your Core Web Vitals are green and your users are happy.",
    tags: ["Core Web Vitals", "Audits", "Optimization"],
  },
  {
    icon: "Wrench",
    title: "Website Repair & Rescue",
    description:
      "Broken pages, bugs, errors or a messy site? I diagnose and fix it fast — or redesign it into something you're proud of.",
    tags: ["Bug Fixes", "Redesign", "Recovery"],
  },
  {
    icon: "Megaphone",
    title: "Ads & Promotion",
    description:
      "Meta and Google ad campaigns plus high-converting landing pages that turn your ad budget into real customers.",
    tags: ["Meta Ads", "Google Ads", "Landing Pages"],
  },
  {
    icon: "Clapperboard",
    title: "Video Creation",
    description:
      "Eye-catching promo videos, product showcases and social media reels that make your brand impossible to scroll past.",
    tags: ["Promo Videos", "Product Ads", "Reels"],
  },
  {
    icon: "Bot",
    title: "AI Text Agent",
    description:
      "A custom AI chatbot trained on your business that answers customer questions, captures leads and chats 24/7 on your website or WhatsApp.",
    tags: ["AI Chatbots", "24/7 Replies", "Lead Capture"],
  },
  {
    icon: "AudioLines",
    title: "AI Voice Agent",
    description:
      "An AI voice assistant that picks up calls, answers in a natural voice and books appointments — even while you sleep.",
    tags: ["Voice Bots", "Call Handling", "Auto Bookings"],
  },
];

// ---------- PROJECTS (the "Live Products I've Shipped" section) ----------
// ← EDIT: Replace with your real projects, links and screenshots
export const projects = [
  {
    name: "ShopStream",
    url: "#", // ← EDIT: live URL e.g. "https://shopstream.com"
    tagline: "E-commerce Platform",
    description:
      "A complete online store with product catalog, cart, Stripe checkout and an admin panel for orders and inventory.",
    tech: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    accent: "green" as const,
  },
  {
    name: "PulseBoard",
    url: "#", // ← EDIT: live URL
    tagline: "SaaS Analytics Dashboard",
    description:
      "A real-time analytics dashboard where teams track KPIs, filter by date range and export reports in one click.",
    tech: ["React", "Node.js", "Recharts", "REST API"],
    accent: "purple" as const,
  },
  {
    name: "LaunchPage",
    url: "#", // ← EDIT: live URL
    tagline: "Business Website Suite",
    description:
      "A conversion-focused business website with contact forms, blog and 90+ Lighthouse performance scores.",
    tech: ["Next.js", "SEO", "CMS", "Vercel"],
    accent: "green" as const,
  },
];

// ---------- TESTIMONIALS ----------
// ← EDIT: Replace with real client quotes (name, role, text)
export const testimonials = [
  {
    quote:
      "Delivered our store ahead of schedule and it just works. Sales went up the first month — best money we spent this year.",
    name: "Sample Client",
    role: "Founder, Retail Brand",
  },
  {
    quote:
      "He turned a messy spreadsheet workflow into a clean dashboard my whole team actually enjoys using. Zero hand-holding needed.",
    name: "Sample Client",
    role: "Operations Manager, SaaS Startup",
  },
  {
    quote:
      "Clear updates every day, no excuses, and the final site scored perfect on speed tests. Already booked him for the next project.",
    name: "Sample Client",
    role: "Marketing Director, Agency",
  },
];

// ---------- PROCESS (the "How It Works" section) ----------
export const process = [
  {
    step: "01",
    title: "You Share Your Idea",
    description:
      "Tell me what you need in a quick call or message — goals, style, budget. No jargon required.",
  },
  {
    step: "02",
    title: "I Plan It Out",
    description:
      "You get a clear scope, timeline and fixed price before any code is written. No surprises later.",
  },
  {
    step: "03",
    title: "I Build It Fast",
    description:
      "You watch real progress with live demo links — not vague promises. Updates every step of the way.",
  },
  {
    step: "04",
    title: "You Get Results",
    description:
      "A fast, polished product handed over with everything you need — plus support after launch.",
  },
];

// ---------- TECH STACK ----------
export const techStack = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "REST APIs", "GraphQL", "Auth & Security"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MongoDB", "Supabase", "Prisma"],
  },
  {
    category: "SaaS & Payments",
    items: ["Stripe", "Clerk", "Vercel", "Docker"],
  },
  {
    category: "E-Commerce",
    items: ["Shopify", "WooCommerce", "PayPal", "Inventory Systems"],
  },
  {
    category: "AI & Agents",
    items: ["Text Agents", "Voice Agents", "Chatbots", "LLM APIs"],
  },
  {
    category: "Workflow & Tools",
    items: ["Git", "Figma", "CI/CD", "AI-Powered Dev"],
  },
];

// ---------- WHY WORK WITH ME ----------
export const whyMe = [
  {
    icon: "Zap",
    title: "I Ship Fast",
    description:
      "AI-powered development workflow means your project takes days — not months — without cutting corners.",
  },
  {
    icon: "Layers",
    title: "One Person, Full Stack",
    description:
      "Design, frontend, backend, deployment — one person who owns the whole thing. No miscommunication, no delays.",
  },
  {
    icon: "MessageCircle",
    title: "Zero Ghosting",
    description:
      "Daily updates, quick replies and honest answers. You will always know exactly where your project stands.",
  },
  {
    icon: "TrendingUp",
    title: "Built to Scale",
    description:
      "Clean code and solid architecture from day one, so your product grows with your business instead of breaking.",
  },
];

// ---------- NAV & FOOTER LINKS ----------
export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Contact", href: "#contact" },
];

export const footerTagline = "Building Fast, Beautiful Websites That Grow Your Business.";
