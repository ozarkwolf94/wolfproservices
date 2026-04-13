/**
 * WolfPro Services LLC — edit this file to update links, copy, and images.
 * Images live under assets/images/ (see logo paths below).
 * Stock imagery uses Unsplash (https://unsplash.com/license).
 */
window.WOLFPRO_SITE = {
  company: "WolfPro Services LLC",
  domain: "wolfproservices.com",

  /** Shown in meta / fallback; primary story is in heroLede */
  tagline:
    "Industrial metrology, nationwide field technical work, and software that fits how your business actually runs.",

  /** Public contact */
  email: "clayton@wolfproservices.com",

  /** Homepage hero */
  personName: "Clayton Wolf",
  heroTitle: "Clayton Wolf",
  heroLede:
    "I am a metrologist and technical problem-solver: PolyWorks metrology, precision fabrication support in CNC shops and steel mills, and hands-on troubleshooting across job sites. I am actively advancing my software practice through coursework in Python, JavaScript, Flutter, and related full-stack tooling so I can deliver everything from straightforward mobile apps to operator-facing interfaces for machinery — quickly, clearly, and built for the field.",

  /** Short bullets under the hero lede */
  heroHighlights: [
    "PolyWorks metrology suite — inspection, alignment, and GD&T support in demanding environments",
    "National travel — steel mill equipment alignment, bridge section fabrication and assembly GD&T, site-wide technical diagnosis",
    "Custom software path — mobile through machine-adjacent UIs; fast triage when something breaks",
  ],

  /**
   * Hero panel image (stock). Swap `src` for your own professional photo anytime.
   * Photo IDs: unsplash.com/photos/...
   */
  heroImage: {
    src:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80",
    alt: "Engineer in hard hat reviewing work in an industrial facility",
  },

  expertiseIntro:
    "Fabrication floors, heavy industry, and code — representative of the environments where precision and uptime matter.",

  /**
   * Visual strip under Expertise (stock photos).
   */
  capabilityStrip: [
    {
      src:
        "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=800&q=80",
      alt: "CNC machining and precision metalworking",
      label: "Precision fabrication & CNC",
    },
    {
      src:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
      alt: "Construction and heavy industrial site",
      label: "Steel mills & heavy industry",
    },
    {
      src:
        "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=800&q=80",
      alt: "Bridge and large-scale infrastructure",
      label: "Large-scale fabrication & assembly",
    },
    {
      src:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      alt: "Software development workspace",
      label: "Software & interfaces for operations",
    },
  ],

  appsIntro:
    "Products under active development — Flutter and adjacent stacks, with the same rigor I bring to measurement and field work.",

  servicesIntro:
    "Engagements are shaped around outcomes: correct geometry, reliable hardware and software, and clear communication with your team.",

  /** Long-form bio (shown in About). Use \n\n between paragraphs for multiple blocks. */
  aboutBio: `I am Clayton Wolf, the face of WolfPro Services LLC. My background is in precision fabrication and industrial environments — CNC shops, steel mills, and complex assemblies where tolerances and traceability matter. I specialize in the PolyWorks metrology suite and routinely travel throughout the United States for alignment, GD&T support (including bridge sections through fabrication and assembly), and site-wide technical troubleshooting when operations need answers fast.

WolfPro maintains strong connections across Northeast Arkansas to coordinate general contracting when a project calls for it. In house, we focus on helping businesses keep hardware and software current, stable, and aligned with how people actually work — so systems run smoothly instead of fighting the people who depend on them.

I work closely and often with Industrial Technology Solutions Inc., a Northeast Arkansas–based firm. Together we draw on a strong network of metrology solutions and field experience, so engagements that need extra capability or coordination are handled smoothly while you still have a clear point of contact through me and WolfPro.

If you are hiring or need contract support — metrology, field technical leadership, or software that fits your operation — I would welcome a conversation.`,

  /**
   * Homepage app spotlights
   */
  featuredApps: [
    {
      id: "origin-engine",
      title: "Origin Engine",
      logo: "assets/images/origin_engine_logo_full.png",
      description:
        "Origin Engine is an immersive storytelling platform designed to give creators and players complete freedom over their narrative journeys. Built on the Flutter framework and powered by a hybrid approach to API/local AI integration, it provides a high-performance, unrestricted environment for narrative-driven RPG experiences. By shifting the processing to local models, Origin Engine removes the creative boundaries often found in cloud-based AI, ensuring that every story is private, personalized, and entirely unique to the user.",
      href: null,
      linkLabel: null,
    },
    {
      id: "metrilog",
      title: "MetriLog",
      logo: "assets/images/metrilog_logo.png",
      description:
        "MetriLog is a streamlined time and location-tracking application designed for the modern mobile professional. It simplifies the complexity of managing a busy schedule by offering precise logging for travel, work hours, and job-site data in one intuitive interface. Built to handle the demands of frequent travel and diverse project roles, the app ensures that every mile and every minute is accurately recorded, allowing users to focus on the work itself rather than the paperwork.",
      href: null,
      linkLabel: null,
    },
  ],

  /** Nav/footer external link only — music content lives at claytonwolfmusic.com */
  music: {
    label: "Music",
    url: "https://claytonwolfmusic.com",
  },

  services: [
    {
      id: "metrology",
      title: "Industrial metrology",
      icon: "◎",
      summary:
        "PolyWorks-driven inspection and alignment — from shop-floor programs to complex assemblies where GD&T and repeatability drive the result.",
      detail:
        "Steel, bridges, precision machining, and documentation you can hand to engineering or QC with confidence.",
      ctaLabel: "Metrology inquiry",
      ctaHref: "mailto:clayton@wolfproservices.com?subject=Metrology%20inquiry",
    },
    {
      id: "field",
      title: "National field deployment",
      icon: "◇",
      summary:
        "On-site alignment, fabrication support, and technical diagnosis — travel across the U.S. when the job cannot wait for a screen share.",
      detail:
        "Steel mill equipment alignment, large-structure GD&T, and site-wide troubleshooting alongside your team.",
      ctaLabel: "Field work inquiry",
      ctaHref: "mailto:clayton@wolfproservices.com?subject=Field%20technical%20services%20inquiry",
    },
    {
      id: "software",
      title: "Custom software & UIs",
      icon: "⬡",
      summary:
        "Practical applications from mobile tools to machinery-facing interfaces — Python, JavaScript, Flutter, and full-stack coursework inform how I design and build.",
      detail:
        "Scoped builds, quick fixes, and operator-friendly UI where industrial workflows meet modern software.",
      ctaLabel: "Discuss software",
      ctaHref: "mailto:clayton@wolfproservices.com?subject=Custom%20software%20inquiry",
    },
    {
      id: "tech-support",
      title: "Technology assistance for businesses",
      icon: "⚡",
      summary:
        "Keeping hardware and software up to date, dependable, and understandable — so your team spends time on revenue work, not fighting tools.",
      detail:
        "In-house focus at WolfPro; Northeast Arkansas contracting relationships when the project needs broader trade coordination.",
      ctaLabel: "Technology support inquiry",
      ctaHref: "mailto:clayton@wolfproservices.com?subject=Business%20technology%20support%20inquiry",
    },
  ],

  /** Projects page — same apps plus optional future entries */
  projects: [
    {
      title: "Origin Engine",
      status: "In development",
      tags: ["Flutter", "Local AI", "Narrative RPG"],
      blurb:
        "Immersive storytelling platform for narrative-driven RPG experiences — hybrid API/local AI, privacy-first, built for creator and player freedom.",
      href: null,
      linkLabel: null,
    },
    {
      title: "MetriLog",
      status: "In development",
      tags: ["Mobile", "Time tracking", "Location"],
      blurb:
        "Time and location logging for mobile professionals — travel, hours, and job-site data in one intuitive flow.",
      href: null,
      linkLabel: null,
    },
  ],
};
