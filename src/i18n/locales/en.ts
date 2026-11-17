import type { Dictionary } from "./tr";

/**
 * English copy. Written for the people who actually run an operation — heads of platform,
 * payments and trading — not for a brochure. Numbers use English formatting (590,418 · 97.2%).
 */
const en: Dictionary = {
  site: {
    name: "Gamb Gaming",
    tagline: "B2B / iGAMING",
  },

  meta: {
    home: {
      title: "Gamb Gaming — your technology partner in iGaming",
      description:
        "Sportsbook, casino, payments, bonusing, CRM, risk and AI for licensed operators. Build and run it with one team.",
    },
    products: {
      title: "iGaming products and modules — Gamb Gaming",
      description:
        "Sportsbook, casino aggregation, shared wallet, payments, CRM, bonusing, affiliates, risk and AI: the 32 modules an iGaming operation needs, on one platform.",
    },
    technology: {
      title: "iGaming platform architecture and API — Gamb Gaming",
      description:
        "API-first integration, modular services, a shared data layer and security built in. Infrastructure that behaves the same way on a heavy matchday.",
    },
    cases: {
      title: "Case studies: launch, migration, multi-brand — Gamb Gaming",
      description:
        "A launch from zero, a migration without downtime and a second brand: three representative scenarios, the risks in each and how they are handled.",
    },
    packages: {
      title: "Packages and scope: Launch, Scale, Enterprise — Gamb Gaming",
      description:
        "Starting scopes for new operations, growing operators and multi-brand groups. Pricing is quoted after discovery.",
    },
    demo: {
      title: "Book a demo — Gamb Gaming",
      description:
        "Walk the platform with the engineers who built it: your goals, the modules and a starting plan in one call.",
    },
    blog: {
      title: "Blog: notes on iGaming infrastructure — Gamb Gaming",
      description:
        "Platform selection, integration, payments, risk and operations — written for teams shopping for a provider.",
    },
    notfound: {
      title: "Page not found — Gamb Gaming",
      description: "The page has moved, or the address was typed incorrectly.",
    },
  },

  nav: {
    home: "Home",
    products: "Products",
    technology: "Technology",
    cases: "Case studies",
    packages: "Packages",
    blog: "Blog",
    demo: "Book a demo",
    menu: "Menu",
    close: "Close",
    mainNav: "Main menu",
    mobileNav: "Mobile menu",
    skip: "Skip to content",
    language: "Language",
    logoLabel: "Gamb Gaming home",
    menuNote: ["B2B technology for licensed operators only.", "No end-user or player support."],
  },

  footer: {
    headline: ["The technology", "behind the game."],
    copy: "End-to-end technology and operations partner for licensed iGaming operators.",
    explore: "Explore",
    products: "Products",
    pagesLabel: "Pages",
    cardTitle: "Let's walk the platform together.",
    cardCopy: "Tell us what you are building; we will shape the tour around your operation.",
    legal:
      "Gamb Gaming provides technology and operational services to licensed operators only. It offers no gaming, betting or account support to end users. The scope of services depends on the regulations of the market in which the operator is licensed.",
    rights: "All rights reserved.",
    top: "Back to top",
  },

  heroes: {
    home: {
      title: ["Your technology", "partner in iGaming."],
      description:
        "Sportsbook, casino, payments, bonusing, CRM, risk and AI for licensed operators. Build and run it with one team.",
    },
    products: {
      title: ["One platform,", "the whole operation."],
      description:
        "{modules} modules across {groups} areas: from the game to the payout, from bonusing to risk — everything an iGaming operation needs. Start with what you need; the rest is there when you are ready.",
    },
    technology: {
      title: ["Traffic spikes.", "The game goes on."],
      description:
        "API-first integration, modular services and a shared data layer — designed to behave the same way on the busiest matchday of the season.",
      bullets: ["API-first", "Modular", "Shared wallet", "Role-based access"],
    },
    cases: {
      title: ["A new operation", "is a solvable problem."],
      description:
        "New launches, controlled migrations and multi-brand growth. Three representative scenarios.",
    },
    packages: {
      title: ["Build for today.", "Leave tomorrow open."],
      description:
        "Not off-the-shelf tiers. A starting point that fits your operation and a scope that widens as you grow.",
    },
  },

  home: {
    stats: [
      { value: "100%", label: "CUSTOMER-LED" },
      { value: "14 days", label: "TARGET LAUNCH PLAN" },
      { value: "{modules} modules", label: "ONE PLATFORM" },
    ],
    heroPrimary: "Explore the platform",
    heroSecondary: "See what we do",
    servicesTitle: "What we are asked for most",
    servicesCopy: "From the build to the daily shift, the expertise your operation needs.",
    services: [
      { title: "Platform & integration", copy: "Bring products, data and workflows onto one backbone." },
      { title: "Payment operations", copy: "Payment connections, transaction tracking and reconciliation." },
      { title: "CRM & player management", copy: "Segmentation, campaigns and lifecycle management." },
      { title: "Risk & security", copy: "Centralise identity, access, limits and risk rules." },
      { title: "Affiliate management", copy: "Partnerships, commissions and performance tracking." },
    ],
    tileSlogan: "One platform covers all of it.",
    tileLink: "See every module",
    consoleTitle: "Your team starts the day on one screen.",
    consoleCopy:
      "Trading, payments, CRM and risk look at the same data. Who approved what, which campaign is live, which transaction is waiting — all in one place.",
    consolePoints: [
      "Views arranged around your role",
      "A shared queue for anything awaiting approval",
      "Filtering by brand and market",
    ],
    consoleCta: "Browse the products",
    platformTitle: "The whole operation speaks one language.",
    platformCopy:
      "Instead of separate tools and reports stitched together by hand, everything from a player's first session to the payout meets in a shared data layer.",
    platformFeatures: [
      { title: "One player view", copy: "Read account, wallet, gameplay and campaign history side by side." },
      { title: "Shared operations", copy: "Product teams work with the same rules, permissions and approval flows." },
      { title: "Measurable growth", copy: "Track channel, product and segment performance in one reporting model." },
    ],
    audienceTitle: "Wherever you are, that is where we start.",
    audienceCopy:
      "From a team opening its first brand to a multi-brand group, the starting point differs; the destination does not.",
    audiences: [
      {
        title: "Opening a first brand",
        copy: "Licence and team are ready; now the products, the payments and the back office all have to go live at once.",
        points: ["Core product scope", "Launch checklist", "Team training"],
      },
      {
        title: "Tired of disconnected tools",
        copy: "Teams who want to see the player and the revenue in one place instead of five panels and a spreadsheet.",
        points: ["Shared wallet and data", "CRM and segmentation", "Phased migration"],
      },
      {
        title: "Entering new markets",
        copy: "Groups running several brands and markets on one platform, each with its own rules and permissions.",
        points: ["Per-brand configuration", "Market restrictions", "Central reporting"],
      },
    ],
    bandTitle: "Traffic climbs. Performance holds.",
    bandCta: "See the architecture",
    bandFacts: [
      { title: "API-first", copy: "Products and external services talk through defined contracts." },
      { title: "Modular", copy: "One product can be updated while the others keep serving." },
      { title: "Observable", copy: "Service health and transaction flow are watched from one place." },
    ],
    processTitle: "From discovery to live, a clear route.",
    processCopy: "At every step we agree on the scope, the owners and the acceptance criteria together.",
    processSteps: [
      { title: "Discovery", copy: "Mapping market, licence, product and integration requirements." },
      { title: "Plan", copy: "Technical scope, brand structure and the go-live calendar." },
      { title: "Build", copy: "Environments, products, providers and operational roles made ready." },
      { title: "Validation", copy: "End-to-end testing, team training and the launch checklist signed off." },
    ],
    awardsTitle: "Globally recognised.",
    awardsCopy: "Our provider has won at the EGR B2B, SBC and SiGMA awards, taken first place at MiGEA in three separate years, and been shortlisted many more times.",
    awardsLabel: "Awards won by our provider",
    ctaTitle: "Let's find the right starting point for your operation.",
    ctaCopy: "Tell us what you need; we will map out the product, integration and migration scope together.",
  },

  panel: {
    tabsLabel: "Panel views",
    general: "Overview",
    last12: "Last 12 hours",
    note: "To see more of it,",
    noteLink: "book a demo",
    modulesLabel: "{group} modules",
    overview: {
      kpis: [
        { label: "Active players", value: "590,418", delta: "+6%" },
        { label: "Open bet slips", value: "1,284,730", delta: "+11%" },
        { label: "Awaiting approval", value: "214", delta: "−37" },
      ],
      chartLabel: "Sessions per hour",
      rows: [
        { time: "21:04", text: "12 events pulled on suspected fraud, bet slips voided", tag: "Risk" },
        { time: "21:02", text: "New game provider added to the lobby", tag: "Casino" },
        { time: "20:57", text: "Weekend campaign went live", tag: "CRM" },
        { time: "20:49", text: "1,380 withdrawal requests queued for approval", tag: "Finance" },
      ],
    },
    groups: {
      "oyun-icerik": {
        kpis: [
          { label: "Live events", value: "1,846", delta: "−12" },
          { label: "Casino sessions", value: "212,640", delta: "+9%" },
          { label: "Games published", value: "5,120", delta: "+48" },
        ],
        chartLabel: "Bet slips and rounds per hour",
        stats: {
          "urun-sportsbook": "1,284,730 open slips",
          "urun-game-provider": "38 providers",
          "urun-canli-casino": "412 tables open",
          "urun-sanal-espor": "96 events",
          "urun-hizli-oyunlar": "18,400 rounds / hr",
          "urun-turnuva-jackpot": "7 tournaments",
        },
      },
      "oyuncu-hesap": {
        kpis: [
          { label: "Active players", value: "590,418", delta: "+6%" },
          { label: "Registrations today", value: "8,940", delta: "+4%" },
          { label: "Pending verification", value: "1,126", delta: "−180" },
        ],
        chartLabel: "Logins per hour",
        stats: {
          "urun-oyuncu-hesap": "590,418 active",
          "urun-cuzdan": "0 balance variance",
          "urun-kyc": "1,126 in queue",
          "urun-sorumlu-oyun": "3,480 active limits",
        },
      },
      "odeme-finans": {
        kpis: [
          { label: "Deposit approval", value: "97.2%", delta: "+0.4" },
          { label: "Pending withdrawals", value: "1,380", delta: "−96" },
          { label: "Reconciliation", value: "99.98%", delta: "+0.01" },
        ],
        chartLabel: "Transactions per hour",
        stats: {
          "urun-gambpay": "842,300 transactions",
          "urun-finans": "14 open settlements",
          "urun-kripto": "12% share",
        },
      },
      "buyume-pazarlama": {
        kpis: [
          { label: "Live campaigns", value: "17", delta: "+2" },
          { label: "Bonuses issued", value: "18,930", delta: "+12%" },
          { label: "Returning players", value: "31,240", delta: "+18%" },
        ],
        chartLabel: "Campaign engagement",
        stats: {
          "urun-gambcrm": "126 segments",
          "urun-bonus": "42 active bonuses",
          "urun-pazarlama": "9 scheduled sends",
          "urun-gambaffiliate": "1,240 partners",
          "urun-sadakat": "2,310 VIP players",
          "urun-is-gelistirme": "3 market studies",
        },
      },
      "risk-uyum": {
        kpis: [
          { label: "Open alerts", value: "57", delta: "+12" },
          { label: "Accounts under review", value: "311", delta: "+46" },
          { label: "Voided bet slips", value: "4,218", delta: "today" },
        ],
        chartLabel: "Flagged activity",
        stats: {
          "urun-risk-fraud": "12 events pulled",
          "urun-aml": "23 open cases",
          "urun-uyum": "2 reports ready",
        },
      },
      "veri-yapay-zeka": {
        kpis: [
          { label: "High churn risk", value: "12,480", delta: "players" },
          { label: "Recommendation CTR", value: "18.4%", delta: "+1.1" },
          { label: "High fraud score", value: "64", delta: "transactions" },
        ],
        chartLabel: "Model calls",
        stats: {
          "urun-ai": "4 models live",
          "urun-bi": "36 dashboards",
          "urun-veri-akisi": "2.1M events / hr",
        },
      },
      "operasyon-altyapi": {
        kpis: [
          { label: "Uptime", value: "99.97%", delta: "30 days" },
          { label: "Open support tickets", value: "148", delta: "−21" },
          { label: "Active brands", value: "6", delta: "+1" },
        ],
        chartLabel: "Requests per hour",
        stats: {
          "urun-arka-ofis": "214 awaiting approval",
          "urun-cms": "12 publishes today",
          "urun-destek": "148 open tickets",
          "urun-bayi": "860 agents",
          "urun-api": "64 ms response",
          "urun-coklu-marka": "6 brands",
          "urun-altyapi": "0 open alarms",
        },
      },
    },
  },

  catalog: {
    groups: {
      "oyun-icerik": {
        name: "Games & content",
        summary: "Everything the player sees: betting, casino and all the games in between.",
      },
      "oyuncu-hesap": {
        name: "Player & account",
        summary: "From registration to withdrawal, every step tied to the player's account.",
      },
      "odeme-finans": {
        name: "Payments & finance",
        summary: "Money in, money out, and the books closed at the end of the day.",
      },
      "buyume-pazarlama": {
        name: "Growth & marketing",
        summary: "The tools that bring players in, keep them and win them back.",
      },
      "risk-uyum": { name: "Risk & compliance", summary: "The rules that protect the book, the licence and the player." },
      "veri-yapay-zeka": {
        name: "Data & AI",
        summary: "Decide with data and models instead of a hunch.",
      },
      "operasyon-altyapi": {
        name: "Operations & infrastructure",
        summary: "The tools the team uses daily and the ground all of it stands on.",
      },
    },
    modules: {
      "urun-sportsbook": {
        name: "Sportsbook",
        tag: "",
        description: "Run pre-match and in-play betting from one place.",
        items: [
          "Pre-match and in-play flows",
          "Odds, limit and margin configuration",
          "Bet builder and cash out",
          "Bet slip, refund and void workflows",
        ],
      },
      "urun-game-provider": {
        name: "Game provider aggregation",
        tag: "",
        description: "Connect casino providers through one integration; manage the catalogue and the lobby.",
        items: [
          "Many providers, one API",
          "Game catalogue and lobby layout",
          "Game visibility per market",
          "Per-provider reporting and reconciliation",
        ],
      },
      "urun-canli-casino": {
        name: "Live casino",
        tag: "",
        description: "Serve live tables and dealer games from the same wallet.",
        items: [
          "Live table lobby",
          "Table limits and visibility",
          "Seamless switching on a shared wallet",
          "Session and bet history",
        ],
      },
      "urun-sanal-espor": {
        name: "Virtuals & esports",
        tag: "",
        description: "Betting content at any hour, independent of the fixture list.",
        items: [
          "Virtual leagues and racing",
          "Esports markets",
          "Separate limit and margin profiles",
          "Shared bet slip with the sportsbook",
        ],
      },
      "urun-hizli-oyunlar": {
        name: "Fast games",
        tag: "",
        description: "A ready catalogue of short-round games: crash, dice, mines.",
        items: [
          "Short-round game catalogue",
          "Provably fair round results",
          "Per-game margin settings",
          "Lobby promotion slots",
        ],
      },
      "urun-turnuva-jackpot": {
        name: "Tournaments & jackpots",
        tag: "",
        description: "Turn play into a race with leaderboards and prize pools.",
        items: [
          "Tournament templates and calendar",
          "Live leaderboards",
          "Progressive jackpot pools",
          "Prize distribution rules",
        ],
      },
      "urun-oyuncu-hesap": {
        name: "Player account management",
        tag: "",
        description: "Registration, profile, sessions and account states in one place.",
        items: [
          "Registration and login flows",
          "Profile, tags and notes",
          "Account status and restrictions",
          "A player's whole history on one screen",
        ],
      },
      "urun-cuzdan": {
        name: "Shared wallet",
        tag: "",
        description: "One balance across every product; every movement on the ledger.",
        items: [
          "Real and bonus balance kept apart",
          "Multi-currency",
          "Transaction ledger",
          "Balance adjustment with approval",
        ],
      },
      "urun-kyc": {
        name: "KYC & identity verification",
        tag: "",
        description: "Wire verification providers into registration and withdrawal.",
        items: [
          "Document upload and review queue",
          "Verification provider integrations",
          "Verification rules per market",
          "Age and address checks",
        ],
      },
      "urun-sorumlu-oyun": {
        name: "Responsible gaming",
        tag: "",
        description: "Limits, cool-offs and self-exclusion are part of the player account.",
        items: [
          "Deposit, loss and time limits",
          "Cool-off and self-exclusion",
          "Session duration reminders",
          "Markers of harm",
        ],
      },
      "urun-gambpay": {
        name: "gambpay",
        tag: "Payments",
        description: "Follow payment flows, transaction states and approval steps.",
        items: [
          "Deposit and withdrawal workflows",
          "Limits and routing per method",
          "Permission and approval steps",
          "Transaction status tracking",
        ],
      },
      "urun-finans": {
        name: "Finance & reconciliation",
        tag: "",
        description: "Close the book, the settlements and the day in one place.",
        items: [
          "End-of-day and period reconciliation",
          "GGR / NGR and revenue reports",
          "Provider and partner settlements",
          "Exports for accounting",
        ],
      },
      "urun-kripto": {
        name: "Crypto payments",
        tag: "",
        description: "Deposits and withdrawals in crypto; same wallet, same rules.",
        items: [
          "Multiple networks and assets",
          "Automatic conversion",
          "Address and transaction monitoring",
          "Withdrawal approval rules",
        ],
      },
      "urun-gambcrm": {
        name: "gambcrm",
        tag: "CRM",
        description: "Turn player data into actions you can measure.",
        items: [
          "Segments and campaign builders",
          "Player lifecycle",
          "Real-time triggers",
          "Campaign result measurement",
        ],
      },
      "urun-bonus": {
        name: "Bonus management",
        tag: "",
        description: "Design bonuses together with their rules, budget and wagering terms.",
        items: [
          "Welcome, deposit and loss bonuses",
          "Free bets and free spins",
          "Wagering and validity rules",
          "Bonus budget and abuse control",
        ],
      },
      "urun-pazarlama": {
        name: "Marketing automation",
        tag: "",
        description: "Plan campaigns, push them to the channels, measure what came back.",
        items: [
          "Campaign calendar and promo codes",
          "Email, SMS and push",
          "On-site banners and landing pages",
          "Channel and campaign return",
        ],
      },
      "urun-gambaffiliate": {
        name: "gambaffiliate",
        tag: "Affiliate",
        description: "Grow your partner network on numbers both sides can see.",
        items: [
          "Commission models",
          "Campaign and traffic tracking",
          "Partner portal and settlement periods",
          "Sub-affiliate structures",
        ],
      },
      "urun-sadakat": {
        name: "Loyalty & VIP",
        tag: "",
        description: "Manage loyalty with tiers, points and privileges.",
        items: [
          "Tier and points system",
          "Tools for VIP account managers",
          "Personalised offers",
          "Cashback rules",
        ],
      },
      "urun-is-gelistirme": {
        name: "Business development",
        tag: "Service",
        description: "From market entry to provider deals, we build the growth plan with you.",
        items: [
          "Market and competitor analysis",
          "Provider and payment partner selection",
          "Launch and growth plan",
          "Periodic performance reviews",
        ],
      },
      "urun-risk-fraud": {
        name: "Risk & fraud management",
        tag: "",
        description: "Catch suspicious account, bonus and betting behaviour early.",
        items: [
          "Multi-account and device matching",
          "Bonus abuse rules",
          "Betting and limit risk profiles",
          "Review queue and case records",
        ],
      },
      "urun-aml": {
        name: "AML & transaction monitoring",
        tag: "",
        description: "Watch and document unusual money movement with rules.",
        items: [
          "Threshold and pattern rules",
          "Source-of-funds workflow",
          "Suspicious transaction records",
          "An audit-ready history",
        ],
      },
      "urun-uyum": {
        name: "Compliance & regulatory reporting",
        tag: "",
        description: "Produce the reports your regulator asks for from the panel.",
        items: [
          "Report templates per market",
          "Immutable audit records",
          "Data retention rules",
          "Permission and access reports",
        ],
      },
      "urun-ai": {
        name: "AI modules",
        tag: "AI",
        description: "Wire prediction and recommendation models into daily decisions.",
        items: [
          "Game and bet recommendations",
          "Churn risk prediction",
          "Fraud and risk scoring",
          "An AI assistant for the ops team",
        ],
      },
      "urun-bi": {
        name: "BI & reporting",
        tag: "",
        description: "Product, channel and segment performance on shared definitions.",
        items: [
          "Ready-made dashboards",
          "Custom report builder",
          "Scheduled report delivery",
          "Export to your warehouse",
        ],
      },
      "urun-veri-akisi": {
        name: "Real-time data stream",
        tag: "",
        description: "Move player and transaction events into your own systems as they happen.",
        items: [
          "Event stream and webhook notifications",
          "Segment triggers",
          "Live metric boards",
          "Third-party tool integrations",
        ],
      },
      "urun-arka-ofis": {
        name: "Back office",
        tag: "",
        description: "The admin panel where every team works to the same rules.",
        items: ["Role and permission management", "Approval flows", "Change history", "Multi-brand view"],
      },
      "urun-cms": {
        name: "CMS & front end",
        tag: "",
        description: "Manage the web and mobile front end, content and themes without writing code.",
        items: [
          "Ready web and mobile front end",
          "Page, banner and menu management",
          "Brand themes",
          "Multiple languages",
        ],
      },
      "urun-destek": {
        name: "Customer support tools",
        tag: "",
        description: "Support sees the player, the transaction and the history on one screen.",
        items: [
          "Ticket and case management",
          "Live chat integration",
          "Canned replies and tags",
          "One-click access to player history",
        ],
      },
      "urun-bayi": {
        name: "Agent & retail management",
        tag: "",
        description: "Run your field network with hierarchy, limits and commissions.",
        items: [
          "Multi-level agent structure",
          "Balance and limit distribution",
          "Commission accounts",
          "Per-agent reporting",
        ],
      },
      "urun-api": {
        name: "API & integration layer",
        tag: "",
        description: "External systems connect through defined contracts.",
        items: [
          "REST and WebSocket endpoints",
          "Sandbox environment",
          "Webhook notifications",
          "Versioned documentation",
        ],
      },
      "urun-coklu-marka": {
        name: "Multi-brand",
        tag: "",
        description: "Open new brands and markets on the same platform.",
        items: [
          "Per-brand configuration",
          "Market and language rules",
          "Separate permissions and reports",
          "Shared player and wallet layer",
        ],
      },
      "urun-altyapi": {
        name: "Infrastructure & monitoring",
        tag: "Service",
        description: "We run the hosting, the scaling and the monitoring.",
        items: [
          "Managed cloud infrastructure",
          "Auto-scaling",
          "Monitoring and alerting",
          "Backup and rollback plan",
        ],
      },
    },
  },

  products: {
    indexLabel: "Product areas",
    flowTitle: "{modules} modules, one player record.",
    flowCopy:
      "Every step a player takes after registering lands in the relevant module; all of it writes to the same account and the same wallet.",
    playerFlow: [
      { step: "Sign-up", module: "Player accounts · KYC", copy: "The account opens, verification starts." },
      { step: "Deposit", module: "gambpay", copy: "Payment is approved, the shared wallet updates." },
      { step: "Play", module: "Sportsbook · Casino", copy: "The same balance works in both products." },
      { step: "Contact", module: "gambcrm · Bonusing", copy: "Activity feeds segments and triggers." },
      { step: "Source", module: "gambaffiliate", copy: "Credited to the partner who sent the player." },
    ],
    capsTitle: "The same operational discipline behind every module.",
    capsCopy:
      "Modules can be used on their own; used together, data, permissions and reporting carry across without a seam.",
    capabilities: [
      { title: "Roles and permissions", copy: "Granular roles so teams reach only the areas they are responsible for." },
      { title: "Rule management", copy: "Manage limits, approvals, visibility and operational rules centrally." },
      { title: "Change history", copy: "Trace critical changes back by user, time and outcome." },
      { title: "Reporting", copy: "Compare product and operational metrics on shared definitions." },
      { title: "Notifications", copy: "Alert the right team in real time on important transactions and thresholds." },
      { title: "Multi-brand", copy: "Run several brands and markets on one platform, under control." },
    ],
    integrationTitle: "Keep working with the partners you already have.",
    integrationCopy:
      "Provider, payment, identity and data services connect to the platform through the API layer, under controlled terms.",
    integrationCta: "See the technical setup",
    integrationLabel: "Service types that can be connected",
    integrationTypes: [
      "Game providers",
      "Odds and data feeds",
      "Payment methods",
      "Identity verification",
      "Messaging channels",
      "Data warehouse and BI",
    ],
    ctaTitle: "See the modules in real operational flows.",
    ctaCopy: "Let's plan a product tour around your team's priorities.",
  },

  technology: {
    layersTitle: "A game on the outside. Engineering underneath.",
    layersCopy: "Four layers, each with its own job. Pick one to see the detail.",
    layersLabel: "Platform layers",
    layersCaption:
      "A conceptual platform diagram. The deployment model and integration scope are set during technical discovery.",
    layers: [
      {
        title: "Experience",
        summary: "Web front end · Mobile · Operator admin",
        detail:
          "The face the player sees and the back office your team uses run on the same services. Theme and content are managed per brand.",
        parts: ["Player front end", "Back office", "Brand themes", "Content management"],
      },
      {
        title: "Access",
        summary: "API layer · Authentication · Authorisation",
        detail:
          "Every request comes through one door. Identity, permissions and rate limits are applied there; internal services are never exposed directly.",
        parts: ["API gateway", "Sessions and identity", "Role checks", "Rate limiting"],
      },
      {
        title: "Business services",
        summary: "Sportsbook · Casino · Payments · CRM",
        detail:
          "Each product runs in its own service and speaks through defined contracts. One can be updated while the others keep serving.",
        parts: ["Sportsbook", "Casino", "Payments", "CRM", "Affiliate"],
      },
      {
        title: "Data & control",
        summary: "Shared data · Transaction records · Monitoring",
        detail:
          "Wallet, player and transaction data sit in a shared layer. Every change is recorded; service health is watched centrally.",
        parts: ["Shared wallet", "Player data", "Audit log", "Monitoring and alerting"],
      },
    ],
    principlesTitle: "Ready to grow, open to change.",
    principlesCopy:
      "The platform is built to let products evolve independently, to protect the critical services and to bring new connections live quickly.",
    principles: [
      { title: "API-first", copy: "Products and external services communicate through defined contracts." },
      { title: "Modular services", copy: "New requirements join the scope without rebuilding the whole system." },
      { title: "Observability", copy: "Service health, transaction flow and error signals are watched centrally." },
      { title: "Resilience", copy: "Critical flows are protected with controlled retries, queues and isolation." },
    ],
    securityTitle: "Security is not a layer added later.",
    securityCopy:
      "Access, logging, data protection and operational approvals are part of how the platform works.",
    securityPoints: [
      "Role-based access and least privilege",
      "Approvals and audit records on critical actions",
      "Separation of environment, brand and operational data",
      "Monitoring, alerting and incident response flows",
    ],
    apiTitle: "Readable contracts, predictable responses.",
    apiCopy:
      "Your engineers know what they are walking into before they start. The example below shows what a wallet transaction looks like.",
    request: "Request",
    response: "Response",
    sample: "Illustrative example",
    apiNotes: [
      {
        title: "Safe to retry",
        copy: "A request with the same key is not processed twice; when the connection drops, retrying is safe.",
      },
      {
        title: "State-driven",
        copy: "Every transaction carries an explicit state. Changes are pushed to your system by webhook.",
      },
      {
        title: "Versioned",
        copy: "Contracts are versioned; new fields are added without breaking existing integrations.",
      },
    ],
    apiCaption: "The real endpoints and fields are in the API documentation shared during technical discovery.",
    stepsTitle: "From first connection to live traffic, under control.",
    integrationSteps: [
      { title: "Contract", copy: "API scope and data model" },
      { title: "Sandbox", copy: "Safe development and testing" },
      { title: "Validation", copy: "End-to-end scenarios" },
      { title: "Live", copy: "A monitored, controlled opening" },
    ],
    ctaTitle: "Let's go through your current architecture together.",
    ctaCopy:
      "Talk through integration points, migration risks and the deployment model we would recommend with our engineers.",
  },

  cases: {
    listLabel: "Scenarios",
    need: "The need",
    approach: "The approach",
    result: "Intended outcome",
    phasesLabel: "Phases",
    caseStudies: [
      {
        title: "From zero to the first live day.",
        need: "A team that has finished its licensing and operational groundwork, now getting to market with every product run from one place.",
        approach:
          "The core product scope is agreed first. Brand and environment setup runs in parallel with the integration work.",
        result:
          "Validated core workflows, a trained operations team and a launch checklist both sides signed off.",
        phases: ["Scope", "Build", "Integration", "Rehearsal", "Launch"],
      },
      {
        title: "Same business, new foundations.",
        need: "Replacing the technical platform without interrupting a running operation.",
        approach:
          "Data, wallet and product flows are split into controlled phases. Each phase moves with a rollback plan attached.",
        result: "A migration plan you can measure and a platform you can keep building on.",
        phases: ["Inventory", "Data rehearsal", "Parallel run", "Traffic ramp", "Cut-over"],
      },
      {
        title: "A second brand on the same backbone.",
        need: "A single-brand operator opening a second brand for a new market, with its own team and its own rules.",
        approach:
          "The shared wallet and data layer stay as they are. Brand, market restrictions and permissions are configured separately.",
        result: "Shared infrastructure, a distinct brand identity and reporting that shows both brands together.",
        phases: ["Market rules", "Brand structure", "Content", "Permissions", "Launch"],
      },
    ],
    caption: "The scenarios are illustrative; they do not describe a specific customer or outcome.",
    methodTitle: "Every project starts with the same four questions.",
    methodCopy:
      "Success criteria are defined up front; progress is tracked against finished work, not assumptions.",
    methodQuestions: [
      { title: "Where are we going?", copy: "Target market, product scope and commercial priorities." },
      { title: "What are we protecting?", copy: "The current player experience, the data and the critical flows." },
      { title: "What are we changing?", copy: "Platform, providers, processes and team responsibilities." },
      { title: "How do we verify it?", copy: "Test scenarios, acceptance criteria and go-live measurements." },
    ],
    riskTitle: "We talk about what can go wrong before it does.",
    riskCopy:
      "The four risks that come up most often in a migration, and where the plan stands on each.",
    riskHead: ["Risk", "Countermeasure"],
    riskTable: [
      {
        risk: "Data loss or drift during migration",
        measure: "Repeated data rehearsals before go-live and record-level comparison.",
      },
      {
        risk: "Wallet balances that do not match",
        measure: "Balance reconciliation at cut-over; traffic does not open until the gap is closed.",
      },
      {
        risk: "Downtime on launch day",
        measure: "A traffic ramp, monitoring boards and rollback steps written in advance.",
      },
      {
        risk: "The team not settling into new tools",
        measure: "Role-based training and a rehearsal on real scenarios before launch.",
      },
    ],
    outcomesTitle: "A visible plan. Clear ownership. A controlled go-live.",
    outcomes: [
      { title: "One scope", copy: "Product and integration requirements" },
      { title: "A shared calendar", copy: "Dependencies between teams" },
      { title: "An acceptance plan", copy: "Test and launch criteria" },
    ],
    ctaTitle: "The next case study could be yours.",
    ctaCopy: "Let's weigh up your priorities for a new operation or a platform migration.",
  },

  packages: {
    listLabel: "Packages",
    price: "Quoted per operation",
    planCta: "Let's talk scope",
    plans: [
      {
        audience: "For new operations",
        summary: "The core scope needed to open your first brand.",
        items: [
          "Core product setup",
          "Brand configuration",
          "Go-live plan",
          "Back office and role definitions",
          "Launch training",
        ],
      },
      {
        audience: "For growing operators",
        summary: "Every product together, player data in one place.",
        items: [
          "A unified product ecosystem",
          "CRM and segmentation",
          "Extended integration",
          "Affiliate management",
          "Advanced reporting",
        ],
      },
      {
        audience: "For custom-scope projects",
        summary: "Multi-brand structures and platform migrations.",
        items: [
          "Custom development",
          "Migration planning",
          "A bespoke operating model",
          "Multiple brands and markets",
          "A dedicated project team",
        ],
      },
    ],
    includedTitle: "Whichever one you pick.",
    includedCopy: "The scope changes; the way we work does not. These four steps are part of every project.",
    includedInAll: [
      { title: "Discovery", copy: "Scope, calendar and ownership put in writing." },
      { title: "Sandbox", copy: "Integrations tried safely before they touch production." },
      { title: "Team training", copy: "Every role learns its own screens on real scenarios." },
      { title: "Launch checklist", copy: "Go-live happens on steps everyone has agreed." },
    ],
    compareTitle: "Same foundation. Different speeds.",
    compareCopy:
      "The packages are not a fixed product list; they are frames for finding the right starting scope.",
    capability: "Capability",
    included: "Included",
    notIncluded: "Not included",
    comparison: [
      { label: "Core platform and admin", cells: ["Included", "Included", "Included"] },
      { label: "Sportsbook / Casino", cells: ["Pick one", "Included", "Included"] },
      { label: "Payment operations", cells: ["Core", "Advanced", "Custom scope"] },
      { label: "CRM and segmentation", cells: ["Starter", "Advanced", "Custom scope"] },
      { label: "Bonusing and marketing", cells: ["Core", "Advanced", "Custom scope"] },
      { label: "Affiliate management", cells: ["Optional", "Included", "Custom scope"] },
      { label: "Risk and fraud", cells: ["Core", "Advanced", "Custom scope"] },
      { label: "AI modules", cells: ["—", "Optional", "Included"] },
      { label: "Multi-brand", cells: ["—", "Optional", "Included"] },
      { label: "Migration and customisation", cells: ["—", "Optional", "Included"] },
    ],
    faqTitle: "Before you decide.",
    faqs: [
      {
        question: "Are the packages fixed?",
        answer:
          "No. They are a starting frame; the final scope is set after discovery, according to your product, market and integration needs.",
      },
      {
        question: "How long does go-live take?",
        answer:
          "It depends on licensing readiness, the number of integrations, the data migration and the acceptance process. You get a realistic plan at the end of discovery.",
      },
      {
        question: "Can we keep our current providers?",
        answer:
          "Once technical fit and commercial agreements are confirmed, integrating your existing providers can be brought into scope.",
      },
      {
        question: "Is operational support included?",
        answer:
          "Training, go-live and ongoing operational support are planned according to the service model you choose.",
      },
      {
        question: "Can we start with a single product?",
        answer:
          "Yes. Modules work on their own. You can start with payments or CRM alone and add the rest later.",
      },
      {
        question: "Do you provide the licence?",
        answer:
          "No. Gamb Gaming is a technology and operations partner; we work only with operators who hold their own licence or are going through the process.",
      },
      {
        question: "How is pricing decided?",
        answer:
          "Because product, market and integration scope differ for every operation, pricing is quoted after discovery.",
      },
      {
        question: "Do you serve players directly?",
        answer:
          "No. Gamb Gaming works with businesses only; it offers no gaming, betting or account support to end users.",
      },
    ],
    ctaTitle: "Start with what you need, grow when you are ready.",
    ctaCopy: "Let's find the right scope rather than the right package.",
  },

  demo: {
    title: ["Let's walk", "the platform together."],
    lead: "Real flows. A platform tour with the engineers themselves.",
    stepsLabel: "What happens on the call",
    steps: [
      { title: "Discovery", copy: "Your goals and priorities." },
      { title: "Product tour", copy: "Modules and workflows." },
      { title: "Next steps", copy: "Scope and a starting plan." },
    ],
    fineprint: ["For B2B operator enquiries only.", "No end-user or player support."],
    formTitle: "Tell us about your operation.",
    required: "Fields marked * are required.",
    fields: {
      name: "Full name",
      namePh: "Your first and last name",
      role: "Your role",
      rolePh: "e.g. Director of Operations",
      email: "Work email",
      emailPh: "you@youroperation.com",
      company: "Company / operation name",
      companyPh: "Enter the operation name",
      stage: "Project stage",
      stageChoose: "Select",
      products: "Products you are interested in",
      message: "Briefly, what you need",
      messagePh: "Target market, product scope and planned start...",
      website: "Website",
      consent:
        "I have read the privacy notice. I agree to my details being processed so you can reply to my enquiry.",
    },
    stages: ["New operation", "Platform migration", "Growth"],
    errors: {
      name: "Enter your first and last name.",
      email: "Enter your work email.",
      emailFormat: "Use the format name@company.com.",
      company: "Enter your company or operation name.",
      consent: "Please accept the privacy notice to continue.",
      send: "Your request could not be sent. Check your connection and try again.",
    },
    submit: "Send demo request",
    sending: "Sending…",
    previewHint: "Preview mode: the form works, but no request is actually sent.",
    thanks: "Thank you",
    sentCopy: "Our team will be in touch to go through your scope.",
    previewFlag:
      "This is a preview: the form validated, but your request was not sent to a server and nothing was stored.",
    summary: { company: "Company", email: "Email", stage: "Project stage", products: "Products" },
    again: "Start a new request",
  },

  notfound: {
    title: ["This page", "is not here."],
    copy: "The address may have changed, or it was typed incorrectly.",
    cta: "Back to home",
  },

  blog: {
    title: ["Notes from the floor.", "For teams shopping for a platform."],
    lead: "Platform selection, integration, payments, risk and operations — written from inside the work, not from a brochure.",
    latest: "Latest posts",
    readMore: "Read the post",
    minutes: "{n} min read",
    back: "All posts",
    related: "You might also want",
    empty: "No posts in this language yet.",
    author: "The Gamb Gaming team",
    updated: "Published",
    notFound: "This post was not found, or it has been removed.",
    ctaTitle: "Let's talk about this on your own operation.",
    ctaCopy: "Put your questions to the engineers directly on a platform tour.",
  },
};

export default en;
