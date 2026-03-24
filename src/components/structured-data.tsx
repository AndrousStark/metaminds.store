{/*
  ===================================================================================
  MetaMinds Store — JSON-LD Structured Data for SEO, AEO, GEO
  ===================================================================================
  This component injects rich structured data for:
  - Google Search (Rich Results, Knowledge Panel)
  - AI Search Engines (ChatGPT, Perplexity, Google SGE/AIO, Bing Copilot)
  - Voice Assistants (Alexa, Siri, Google Assistant)
  - Social Media Crawlers (Facebook, LinkedIn, Twitter)

  Covers:
  - Organization: MetaMinds, META MINDS, Meta Minds, META-MINDS
  - Person: Aniruddh Atrey, aniruddhatrey.com
  - Products: Outbrew (OutbrewAI), Unjynx (Unjynx App)
  - Services: AI Development, SaaS, CRM, RAG/CRAG Pipelines
  - WebSite: metaminds.store, metaminds.firm.in
  - BreadcrumbList, FAQPage, SoftwareApplication
  ===================================================================================
*/}

export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://metaminds.store/#organization",
    name: "MetaMinds",
    alternateName: [
      "Meta Minds",
      "META MINDS",
      "META-MINDS",
      "MetaMinds Store",
      "MetaMinds AI",
      "MetaMinds Software",
      "MetaMinds Tech",
      "MetaMinds India",
    ],
    url: "https://metaminds.store",
    logo: "https://metaminds.store/logo.jpeg",
    image: "https://metaminds.store/logo.jpeg",
    description:
      "MetaMinds is an AI development company building cutting-edge SaaS products, CRM platforms, RAG pipelines, and software solutions. Founded by Aniruddh Atrey. Products include Outbrew (OutbrewAI) for cold email automation and Unjynx for AI-powered productivity.",
    foundingDate: "2024",
    founder: {
      "@type": "Person",
      "@id": "https://metaminds.store/#founder",
      name: "Aniruddh Atrey",
      alternateName: ["Aniruddh ATREY", "Aniruddh"],
      url: "https://aniruddhatrey.com",
      jobTitle: "Founder & CEO",
      worksFor: {
        "@type": "Organization",
        name: "MetaMinds",
      },
      sameAs: [
        "https://aniruddhatrey.com",
        "https://metaminds.firm.in",
        "https://github.com/AndrousStark",
      ],
      knowsAbout: [
        "Artificial Intelligence",
        "Machine Learning",
        "SaaS Development",
        "CRM Development",
        "RAG Pipelines",
        "CRAG (Corrective RAG)",
        "Cold Email Automation",
        "Full Stack Development",
        "Python",
        "TypeScript",
        "Next.js",
        "FastAPI",
        "NLP",
        "Email Deliverability",
        "Web Scraping",
        "OSINT",
      ],
    },
    sameAs: [
      "https://metaminds.firm.in",
      "https://metaminds.store",
      "https://github.com/AndrousStark",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      availableLanguage: ["English", "Hindi"],
    },
    knowsAbout: [
      "AI Development",
      "AI SaaS Development",
      "AI App Development",
      "CRM Development",
      "Custom CRM Solutions",
      "AI-Powered CRM",
      "RAG Pipeline Development",
      "CRAG Pipeline",
      "Corrective RAG",
      "Retrieval Augmented Generation",
      "LLM Application Development",
      "SaaS Product Development",
      "Cloud Application Development",
      "Machine Learning Solutions",
      "NLP & Text Analytics",
      "Cold Email Automation",
      "Email Deliverability",
      "Email Warming",
      "Lead Generation",
      "Contact Discovery",
      "Data Enrichment",
      "Web Scraping",
      "OSINT Intelligence",
      "Business Intelligence",
      "API Development",
      "Full Stack Development",
      "Next.js Development",
      "React Development",
      "FastAPI Development",
      "Python Development",
      "PostgreSQL",
      "Docker",
      "Microservices Architecture",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://metaminds.store/#website",
    url: "https://metaminds.store",
    name: "MetaMinds Store",
    alternateName: [
      "MetaMinds",
      "Meta Minds Store",
      "META MINDS Store",
      "MetaMinds Product Store",
    ],
    description:
      "MetaMinds Store — Discover AI-powered products and SaaS solutions by Aniruddh Atrey. Outbrew for cold email automation, Unjynx for productivity.",
    publisher: {
      "@id": "https://metaminds.store/#organization",
    },
    inLanguage: "en-US",
  };

  const outbrewSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": "https://metaminds.store/#outbrew",
    name: "Outbrew",
    alternateName: [
      "OutbrewAI",
      "Outbrew AI",
      "Outbrew Email Platform",
      "Outbrew Cold Email",
      "Outbrew Outreach",
    ],
    url: "https://metaminds.store/outbrew",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "Outbrew (OutbrewAI) is an AI-powered cold email and outreach automation platform. Features include email warming, campaign management, AI-powered contact extraction, template system, and analytics. Built by MetaMinds, founded by Aniruddh Atrey.",
    featureList: [
      "AI-Powered Cold Email Automation",
      "Email Warming & Domain Reputation Building",
      "Multi-Step Campaign Builder",
      "AI Contact Extraction & Lead Discovery",
      "OSINT-Based Data Enrichment",
      "Email Template System with Variable Substitution",
      "Real-Time Analytics & Performance Tracking",
      "Follow-Up Sequence Automation",
      "Email Deliverability Monitoring",
      "SPF/DKIM/DMARC Verification",
      "Recipient Group Management",
      "Template Marketplace",
      "Company Intelligence Research",
      "Send Time Optimization",
      "Rate Limiting & Compliance",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free tier available. Pro plans for advanced features.",
    },
    creator: {
      "@id": "https://metaminds.store/#organization",
    },
    author: {
      "@id": "https://metaminds.store/#founder",
    },
  };

  const unjynxSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": "https://metaminds.store/#unjynx",
    name: "Unjynx",
    alternateName: [
      "Unjynx App",
      "Unjynx AI",
      "Unjynx Productivity",
      "Unjynx Platform",
    ],
    url: "https://unjynx.me",
    applicationCategory: "ProductivityApplication",
    operatingSystem: "Web",
    description:
      "Unjynx is an AI-powered productivity and task management platform. Break the satisfactory — Unjynx your productivity. Built by MetaMinds, founded by Aniruddh Atrey.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Early access available.",
    },
    creator: {
      "@id": "https://metaminds.store/#organization",
    },
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": "https://metaminds.store/#services",
    name: "MetaMinds Services",
    description:
      "AI development services by MetaMinds and Aniruddh Atrey — AI SaaS, CRM development, RAG/CRAG pipelines, and custom software solutions.",
    itemListElement: [
      {
        "@type": "Service",
        position: 1,
        name: "AI Development Platform",
        description:
          "Custom AI application development — machine learning models, NLP pipelines, computer vision, and intelligent automation solutions by MetaMinds.",
        provider: { "@id": "https://metaminds.store/#organization" },
      },
      {
        "@type": "Service",
        position: 2,
        name: "SaaS Product Development",
        description:
          "End-to-end SaaS product development — cloud-native applications, microservices, API-first architecture, and scalable web platforms.",
        provider: { "@id": "https://metaminds.store/#organization" },
      },
      {
        "@type": "Service",
        position: 3,
        name: "CRM Development",
        description:
          "Custom CRM development and AI-powered CRM solutions — sales automation, customer analytics, pipeline management, and intelligent lead scoring.",
        provider: { "@id": "https://metaminds.store/#organization" },
      },
      {
        "@type": "Service",
        position: 4,
        name: "RAG & CRAG Pipeline Development",
        description:
          "Retrieval Augmented Generation (RAG) and Corrective RAG (CRAG) pipeline development — vector databases, semantic search, LLM integration, and AI knowledge bases.",
        provider: { "@id": "https://metaminds.store/#organization" },
      },
      {
        "@type": "Service",
        position: 5,
        name: "Email Automation & Deliverability",
        description:
          "Cold email infrastructure, email warming, deliverability optimization, SPF/DKIM/DMARC setup, and outreach automation.",
        provider: { "@id": "https://metaminds.store/#organization" },
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://metaminds.store/#faq",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is MetaMinds?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MetaMinds (also known as Meta Minds, META MINDS, META-MINDS) is an AI development company founded by Aniruddh Atrey. MetaMinds builds AI-powered SaaS products, CRM platforms, RAG/CRAG pipelines, and custom software solutions. Visit metaminds.store or metaminds.firm.in to learn more.",
        },
      },
      {
        "@type": "Question",
        name: "Who is Aniruddh Atrey?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Aniruddh Atrey (aniruddhatrey.com) is the founder and CEO of MetaMinds. He is an AI developer and entrepreneur who builds products like Outbrew (OutbrewAI) for cold email automation and Unjynx for AI-powered productivity. He specializes in AI development, SaaS platforms, CRM systems, and RAG pipeline architecture.",
        },
      },
      {
        "@type": "Question",
        name: "What is Outbrew?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Outbrew (also called OutbrewAI or Outbrew AI) is an AI-powered cold email and outreach automation platform built by MetaMinds. It features email warming, AI-powered contact extraction, campaign management, template systems, follow-up automation, and analytics. Available at metaminds.store/outbrew.",
        },
      },
      {
        "@type": "Question",
        name: "What is Unjynx?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Unjynx (Unjynx App) is an AI-powered productivity and task management platform built by MetaMinds. Its tagline is 'Break the satisfactory. Unjynx your productivity.' Available in early access at unjynx.me.",
        },
      },
      {
        "@type": "Question",
        name: "What AI development services does MetaMinds offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MetaMinds offers AI development platform services, SaaS product development, CRM development, RAG (Retrieval Augmented Generation) pipeline development, CRAG (Corrective RAG) pipelines, machine learning solutions, NLP & text analytics, email automation infrastructure, data enrichment, and custom software development. Founded by Aniruddh Atrey.",
        },
      },
      {
        "@type": "Question",
        name: "What is a RAG pipeline and does MetaMinds build them?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A RAG (Retrieval Augmented Generation) pipeline combines large language models (LLMs) with external knowledge retrieval to produce accurate, grounded AI responses. MetaMinds builds both RAG and CRAG (Corrective RAG) pipelines using vector databases, semantic search, and LLM integration. Contact MetaMinds at metaminds.firm.in.",
        },
      },
      {
        "@type": "Question",
        name: "Does MetaMinds build custom CRM solutions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. MetaMinds develops custom CRM platforms and AI-powered CRM solutions including sales automation, customer analytics, intelligent lead scoring, pipeline management, and integration with email outreach tools like Outbrew.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "MetaMinds Store",
        item: "https://metaminds.store",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: "https://metaminds.store/#products",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(outbrewSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(unjynxSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
