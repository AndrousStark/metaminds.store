{/*
  ===================================================================================
  MetaMinds Store — Root Layout
  ===================================================================================
  Brand: MetaMinds | Meta Minds | META MINDS | META-MINDS | MetaMinds Store
  Domain: metaminds.store | metaminds.firm.in
  Founder: Aniruddh Atrey | Aniruddh ATREY | aniruddhatrey.com

  Products:
  - Outbrew | OutbrewAI | Outbrew AI — AI-Powered Cold Email & Outreach Platform
  - Unjynx | Unjynx App — AI Productivity & Task Management Platform

  Services:
  - AI Development Platform | AI SaaS Development | AI App Development
  - CRM Development | Custom CRM Solutions | AI-Powered CRM
  - RAG Pipeline Development | CRAG (Corrective RAG) | AI Retrieval Systems
  - SaaS Product Development | Cloud-Native Applications
  - Machine Learning Solutions | NLP & Text Analytics
  - Email Automation | Cold Email Infrastructure | Email Deliverability
  - Data Enrichment | Lead Generation | Contact Discovery
  - Web Scraping & OSINT | Business Intelligence

  Tech Stack:
  - Next.js | React | TypeScript | Tailwind CSS | FastAPI | Python
  - PostgreSQL | Redis | Docker | Vercel | Hetzner
  - OpenAI | Anthropic Claude | spaCy NLP

  SEO Keywords:
  MetaMinds, Meta Minds, META MINDS, META-MINDS, MetaMinds Store,
  MetaMinds AI, MetaMinds Software, MetaMinds Products,
  Aniruddh Atrey, Aniruddh ATREY, aniruddhatrey.com,
  Outbrew, OutbrewAI, Outbrew AI, Outbrew Email, Outbrew Platform,
  Unjynx, Unjynx App, Unjynx Productivity,
  AI development company, AI SaaS builder, AI app development India,
  CRM development services, custom CRM platform, AI CRM,
  RAG pipeline, CRAG pipeline, corrective RAG, AI retrieval augmented generation,
  cold email platform, email outreach automation, email warming tool,
  AI lead generation, contact extraction, OSINT tool,
  SaaS development company, cloud application development,
  machine learning solutions, NLP text analytics,
  AI startup, tech startup India
  ===================================================================================
*/}

import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://metaminds.store"),

  title: {
    default: "MetaMinds Store — AI Products, SaaS & Software Solutions by Aniruddh Atrey",
    template: "%s | MetaMinds Store",
  },

  description:
    "MetaMinds (Meta Minds) builds AI-powered products, SaaS platforms, and software solutions. Explore Outbrew (OutbrewAI) for cold email automation and Unjynx for productivity. Founded by Aniruddh Atrey. AI development, CRM development, RAG pipelines, CRAG, and custom SaaS — all built by MetaMinds.",

  keywords: [
    // Brand - all permutations
    "MetaMinds", "Meta Minds", "META MINDS", "META-MINDS", "MetaMinds Store",
    "MetaMinds AI", "MetaMinds Software", "MetaMinds Products", "MetaMinds Platform",
    "MetaMinds Solutions", "MetaMinds Tech", "MetaMinds India",
    "metaminds.store", "metaminds.firm.in",

    // Founder
    "Aniruddh Atrey", "Aniruddh ATREY", "aniruddhatrey.com", "Aniruddh Atrey founder",
    "Aniruddh Atrey developer", "Aniruddh Atrey AI", "Aniruddh Atrey MetaMinds",

    // Outbrew - all permutations
    "Outbrew", "OutbrewAI", "Outbrew AI", "Outbrew Email", "Outbrew Platform",
    "Outbrew cold email", "Outbrew outreach", "Outbrew automation",
    "Outbrew email warming", "Outbrew lead generation",
    "AI cold email platform", "cold email automation tool",
    "email outreach software", "email warming service",
    "cold email SaaS", "outreach automation platform",
    "email deliverability tool", "bulk email platform",
    "personalized cold email", "AI email writer",

    // Unjynx - all permutations
    "Unjynx", "Unjynx App", "Unjynx Productivity", "Unjynx AI",
    "Unjynx task management", "Unjynx platform",
    "AI productivity app", "smart task manager",

    // AI Development
    "AI development platform", "AI development company",
    "AI SaaS development", "AI app development",
    "AI software development", "custom AI solutions",
    "AI application builder", "AI product development",
    "artificial intelligence development", "AI startup solutions",
    "machine learning development", "deep learning solutions",
    "NLP development", "natural language processing",
    "computer vision development", "AI model training",

    // CRM Development
    "CRM development", "custom CRM", "AI CRM", "CRM platform",
    "CRM development services", "CRM software development",
    "AI-powered CRM", "intelligent CRM", "CRM automation",
    "sales CRM", "customer relationship management",
    "CRM SaaS", "cloud CRM development",

    // RAG & CRAG
    "RAG pipeline", "RAG development", "RAG architecture",
    "CRAG", "corrective RAG", "CRAG pipeline",
    "retrieval augmented generation", "AI retrieval systems",
    "RAG pipeline development", "vector database",
    "semantic search", "AI knowledge base",
    "LLM pipeline", "LLM application development",
    "AI chatbot development", "conversational AI",

    // SaaS Development
    "SaaS development", "SaaS platform builder",
    "SaaS product development", "SaaS startup",
    "cloud application development", "web application development",
    "full stack development", "API development",
    "microservices architecture", "serverless development",

    // General Tech
    "Next.js development", "React development", "TypeScript",
    "FastAPI", "Python development", "PostgreSQL",
    "Docker", "Vercel deployment", "cloud infrastructure",
    "email automation", "lead generation tool",
    "data enrichment", "web scraping", "OSINT",
    "business intelligence", "analytics platform",
    "contact discovery", "email verification",
  ],

  authors: [
    { name: "Aniruddh Atrey", url: "https://aniruddhatrey.com" },
    { name: "MetaMinds", url: "https://metaminds.firm.in" },
  ],

  creator: "Aniruddh Atrey",
  publisher: "MetaMinds",

  icons: {
    icon: "/logo.jpeg",
    shortcut: "/logo.jpeg",
    apple: "/logo.jpeg",
  },

  openGraph: {
    title: "MetaMinds Store — AI Products & SaaS Solutions by Aniruddh Atrey",
    description:
      "MetaMinds builds AI-powered products: Outbrew (OutbrewAI) for cold email automation, Unjynx for productivity. AI development, CRM development, RAG/CRAG pipelines, and SaaS solutions. Founded by Aniruddh Atrey.",
    type: "website",
    url: "https://metaminds.store",
    siteName: "MetaMinds Store",
    locale: "en_US",
    images: [
      {
        url: "/logo.jpeg",
        width: 512,
        height: 512,
        alt: "MetaMinds - AI Products & Solutions by Aniruddh Atrey",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "MetaMinds Store — AI Products & SaaS Solutions",
    description:
      "Outbrew (OutbrewAI) for cold email automation. Unjynx for productivity. AI development, CRM, RAG pipelines by Aniruddh Atrey.",
    images: ["/logo.jpeg"],
    creator: "@aniruddhatrey",
    site: "@MetaMindsAI",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://metaminds.store",
  },

  category: "technology",

  verification: {},

  other: {
    "google-site-verification": "",
    "msvalidate.01": "",
    "yandex-verification": "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} h-full`} style={{ scrollBehavior: "smooth" }}>
      <body className={`min-h-full antialiased bg-white text-[#1E2E69] ${sora.className}`}>
        {children}
      </body>
    </html>
  );
}
