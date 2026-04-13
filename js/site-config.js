/**
 * WolfPro Services LLC — edit this file to update links, copy, and images.
 * Images live under assets/images/ (see logo paths below).
 * Stock imagery uses Unsplash (https://unsplash.com/license).
 */
window.WOLFPRO_SITE = {
  company: "WolfPro Services LLC",
  domain: "wolfproservices.com",

  /** Browser tab / bookmark icon */
  siteFavicon: "assets/images/wolfpro_wolfhead_wrench_logo_white.png",

  /** Full-width banner under the header (home + projects). */
  siteBanner: {
    src: "assets/images/wolfpro_banner.png",
    alt: "WolfPro Services LLC",
  },

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

  /**
   * PolyWorks / metrology deep-dive (homepage section).
   */
  polyworks: {
    title: "PolyWorks metrology",
    lede:
      "Industry-standard 3D metrology paired with Leica absolute laser trackers — for fabrication, inspection, alignment, and CAD-ready scanning.",
    whatIs:
      "PolyWorks is a professional metrology platform from InnovMetric used to capture, align, analyze, and report on 3D measurement data. It connects laser trackers, scanners, and other devices into one workflow for inspection, GD&T, assembly alignment, and reverse engineering — so you can prove parts to the print, diagnose fit issues on the floor, and hand stakeholders documentation with traceability.",
    howItWorks:
      "We work in your coordinate system: establish datums, run touch or scan campaigns as the job demands, and compare results to your CAD or drawing requirements. Using Leica ATS600 and Leica AT500 absolute laser trackers, we combine direct measurement (probing and precision alignment where contact is appropriate) with contactless scanning where you need dense surface data without touching the part — large weldments, delicate finishes, or hard-to-reach geometry all stay in play.",
    equipment: [
      {
        name: "Leica ATS600",
        summary:
          "A scanning laser tracker built for high-speed, non-contact 3D scanning at working range — ideal for capturing complex surfaces and large structures with dense point clouds for inspection, deviation analysis, or modeling.",
      },
      {
        name: "Leica AT500",
        summary:
          "An absolute laser tracker for accurate 3D measurement and alignment without chaining through a ladder of stations — faster setup, stable results, and a strong fit for shop-floor and field deployment.",
      },
    ],
    whyTitle: "Why PolyWorks — and WolfPro — for fabrication",
    whyBullets: [
      "Catch problems before they become assembly crises — verify geometry, GD&T, and interfaces while parts are still in the shop.",
      "One software ecosystem from measurement to report — PolyWorks keeps scanning, probing, alignment, and inspection coherent instead of juggling disconnected tools.",
      "Hardware matched to real jobs — touch where you need repeatability and trace points; scan where you need full shape or contact-free capture.",
      "Operators who understand fabrication — we align to how mills, CNC shops, and heavy fab actually build, not just how the software manual reads.",
      "Deliverables that feed manufacturing — not only PDF reports, but geometry and insight your programmers and engineers can use.",
    ],
    whyClosing:
      "Partnering with WolfPro means you get disciplined PolyWorks workflows, Leica-class hardware on site when needed, and a direct line to someone accountable for the result — from first scan to the answer your team acts on.",
    scanning: {
      title: "3D scanning for CAM and SolidWorks",
      body:
        "We offer 3D scanning to lock onto as-built shape and feed modeling for CAM and native SolidWorks parts and assemblies. Whether you are programming toolpaths from real stock, reverse-engineering a worn or legacy component, or tightening the loop between the floor and your digital models, we focus on deliverables manufacturing can use: usable surfaces, sensible datums, and files that import cleanly so you spend time cutting metal, not fighting mesh artifacts.",
    },
    ctaLabel: "Discuss PolyWorks or scanning",
    ctaSubject: "PolyWorks / 3D scanning inquiry",
  },

  appsIntro:
    "Products under active development — Flutter flagship apps, Python automation (including ComfyUI workflows), and field-ready tools, with the same rigor I bring to measurement and field work.",

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
    {
      id: "comfyworker",
      title: "ComfyWorker",
      logo: null,
      description:
        "A Python-based application that automates running ComfyUI and exposes a working HTTP endpoint for that automation. It is built for batch, local image generation on your own hardware — no subscription fees and no reliance on external datacenters — so pipelines stay private, predictable, and under your control.",
      href: null,
      linkLabel: null,
    },
    {
      id: "find-my-foreman",
      title: "Find my Foreman",
      logo: null,
      description:
        "A work-in-progress side project: with purchased GPS tracking modules, crews can see where their foremen or field workers are on the ground — a simple, practical answer to “where is everyone?” on busy job sites. Built for fun and experimentation around location-aware field tools.",
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
    {
      title: "ComfyWorker",
      status: "Active development",
      tags: ["Python", "ComfyUI", "Local", "Batch imaging", "Automation"],
      blurb:
        "Python architecture to automate ComfyUI with an API-style endpoint for batch local image generation — no subscriptions, no datacenter dependency.",
      href: null,
      linkLabel: null,
    },
    {
      title: "Find my Foreman",
      status: "Work in progress",
      tags: ["GPS", "Field crews", "Side project"],
      blurb:
        "Fun experiment: GPS modules (when purchased) so users can locate foremen or workers in the field from a simple tracking setup.",
      href: null,
      linkLabel: null,
    },
  ],
};
