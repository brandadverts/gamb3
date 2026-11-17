import type { Dictionary } from "./tr";

/**
 * Deutsche Texte. Sachlich und direkt geschrieben — für Plattform-, Zahlungs- und Trading-Verantwortliche,
 * nicht für eine Broschüre. Zahlen in deutscher Schreibweise (590.418 · 97,2 %).
 */
const de: Dictionary = {
  site: {
    name: "Gamb Gaming",
    tagline: "B2B / iGAMING",
  },

  meta: {
    home: {
      title: "Gamb Gaming — Ihr Technologiepartner im iGaming",
      description:
        "Sportsbook, Casino, Zahlungen, Bonus, CRM, Risiko und KI für lizenzierte Betreiber. Aufbau und Betrieb aus einer Hand.",
    },
    products: {
      title: "iGaming-Produkte und Module — Gamb Gaming",
      description:
        "Sportsbook, Casino-Aggregation, gemeinsames Wallet, Zahlungen, CRM, Bonus, Affiliate, Risiko und KI: die 32 Module einer iGaming-Operation auf einer Plattform.",
    },
    technology: {
      title: "iGaming-Plattformarchitektur und API — Gamb Gaming",
      description:
        "API-first integriert, modulare Services, gemeinsame Datenschicht und eingebaute Sicherheit. Eine Infrastruktur, die am stärksten Spieltag genauso arbeitet.",
    },
    cases: {
      title: "Fallstudien: Launch, Migration, Multi-Brand — Gamb Gaming",
      description:
        "Start bei null, Plattformwechsel ohne Ausfall und eine zweite Marke: drei typische Szenarien, ihre Risiken und die jeweiligen Gegenmaßnahmen.",
    },
    packages: {
      title: "Pakete und Umfang: Launch, Scale, Enterprise — Gamb Gaming",
      description:
        "Startumfänge für neue Operationen, wachsende Betreiber und Multi-Brand-Gruppen. Der Preis folgt nach dem Discovery-Workshop.",
    },
    demo: {
      title: "Demo vereinbaren — Gamb Gaming",
      description:
        "Gehen Sie die Plattform mit dem technischen Team durch: Ziele, Module und Startplan in einem Termin.",
    },
    blog: {
      title: "Blog: Notizen zur iGaming-Infrastruktur — Gamb Gaming",
      description:
        "Plattformauswahl, Integration, Zahlungen, Risiko und Betrieb — geschrieben für Teams, die einen Anbieter suchen.",
    },
    notfound: {
      title: "Seite nicht gefunden — Gamb Gaming",
      description: "Die Seite wurde verschoben, oder die Adresse wurde falsch geschrieben.",
    },
  },

  nav: {
    home: "Startseite",
    products: "Produkte",
    technology: "Technologie",
    cases: "Fallstudien",
    packages: "Pakete",
    blog: "Blog",
    demo: "Demo vereinbaren",
    menu: "Menü",
    close: "Schließen",
    mainNav: "Hauptmenü",
    mobileNav: "Mobiles Menü",
    skip: "Zum Inhalt springen",
    language: "Sprache",
    logoLabel: "Gamb Gaming Startseite",
    menuNote: ["B2B-Technologie ausschließlich für lizenzierte Betreiber.", "Kein Support für Endkunden und Spieler."],
  },

  footer: {
    headline: ["Die Technik", "hinter dem Spiel."],
    copy: "Technologie- und Betriebspartner für lizenzierte iGaming-Betreiber, von Anfang bis Ende.",
    explore: "Entdecken",
    products: "Produkte",
    pagesLabel: "Seiten",
    cardTitle: "Sehen wir uns die Plattform gemeinsam an.",
    cardCopy: "Sagen Sie uns, was Sie vorhaben; wir richten die Tour an Ihrem Betrieb aus.",
    legal:
      "Gamb Gaming erbringt Technologie- und Betriebsleistungen ausschließlich für lizenzierte Betreiber. Für Endkunden gibt es weder Spiel-, Wett- noch Kontosupport. Der Leistungsumfang richtet sich nach den Vorschriften des Marktes, in dem der Betreiber tätig ist.",
    rights: "Alle Rechte vorbehalten.",
    top: "Nach oben",
  },

  heroes: {
    home: {
      title: ["Ihr Technologiepartner", "im iGaming."],
      description:
        "Sportsbook, Casino, Zahlungen, Bonus, CRM, Risiko und KI für lizenzierte Betreiber. Aufbau und Betrieb aus einer Hand.",
    },
    products: {
      title: ["Der ganze Betrieb,", "auf einer Plattform."],
      description:
        "{modules} Module in {groups} Bereichen: vom Spiel bis zur Auszahlung, vom Bonus bis zum Risiko. Starten Sie mit dem, was Sie brauchen; der Rest steht bereit, wenn es so weit ist.",
    },
    technology: {
      title: ["Der Traffic steigt.", "Das Spiel läuft weiter."],
      description:
        "API-first integriert, modulare Services und eine gemeinsame Datenschicht — ausgelegt auf den stärksten Spieltag der Saison.",
      bullets: ["API-first", "Modular", "Gemeinsames Wallet", "Rollenbasierter Zugriff"],
    },
    cases: {
      title: ["Ein neuer Betrieb", "ist planbar."],
      description:
        "Neue Starts, kontrollierte Migrationen und Wachstum über mehrere Marken. Drei typische Szenarien.",
    },
    packages: {
      title: ["Heute bauen.", "Morgen offen lassen."],
      description:
        "Keine Schablonen von der Stange. Ein Start, der zu Ihrem Betrieb passt, und ein Umfang, der mitwächst.",
    },
  },

  home: {
    stats: [
      { value: "100 %", label: "KUNDENORIENTIERT" },
      { value: "14 Tage", label: "ZIELPLAN BIS ZUM START" },
      { value: "{modules} Module", label: "EINE PLATTFORM" },
    ],
    heroPrimary: "Plattform entdecken",
    heroSecondary: "Unsere Leistungen ansehen",
    servicesTitle: "Wonach am häufigsten gefragt wird",
    servicesCopy: "Vom Aufbau bis zum Tagesgeschäft — die Expertise, die Ihr Betrieb braucht.",
    services: [
      { title: "Plattform & Integration", copy: "Produkte, Daten und Abläufe auf einem Rückgrat zusammenführen." },
      { title: "Zahlungsbetrieb", copy: "Zahlungsanbindungen, Transaktionsverfolgung und Abstimmung." },
      { title: "CRM & Spielerverwaltung", copy: "Segmentierung, Kampagnen und Lebenszyklus steuern." },
      { title: "Risiko & Sicherheit", copy: "Identität, Zugriff, Limits und Risikoregeln zentral führen." },
      { title: "Affiliate-Management", copy: "Partnerschaften, Provisionen und Performance im Blick." },
    ],
    tileSlogan: "Eine Plattform deckt alles ab.",
    tileLink: "Alle Module ansehen",
    consoleTitle: "Ihr Team startet den Tag auf einem Bildschirm.",
    consoleCopy:
      "Trading, Zahlungen, CRM und Risiko sehen dieselben Daten. Wer was freigegeben hat, welche Kampagne läuft, welche Transaktion wartet — alles an einer Stelle.",
    consolePoints: [
      "Ansichten nach Rolle geordnet",
      "Eine gemeinsame Warteschlange für alles, was auf Freigabe wartet",
      "Filter nach Marke und Markt",
    ],
    consoleCta: "Produkte ansehen",
    platformTitle: "Der ganze Betrieb spricht eine Sprache.",
    platformCopy:
      "Statt getrennter Werkzeuge und von Hand zusammengefügter Berichte trifft sich alles — von der ersten Sitzung bis zur Auszahlung — in einer gemeinsamen Datenschicht.",
    platformFeatures: [
      { title: "Eine Spieleransicht", copy: "Konto, Wallet, Spiel und Kampagnen nebeneinander lesen." },
      { title: "Gemeinsamer Betrieb", copy: "Produktteams arbeiten mit denselben Regeln, Rechten und Freigaben." },
      { title: "Messbares Wachstum", copy: "Kanal-, Produkt- und Segmentleistung in einem Berichtsmodell verfolgen." },
    ],
    audienceTitle: "Wo Sie stehen, da fangen wir an.",
    audienceCopy:
      "Vom Team mit der ersten Marke bis zur Multi-Brand-Gruppe: Der Ausgangspunkt ist verschieden, das Ziel nicht.",
    audiences: [
      {
        title: "Erste Marke im Aufbau",
        copy: "Lizenz und Team stehen; jetzt müssen Produkte, Zahlungen und Backoffice gleichzeitig live gehen.",
        points: ["Grundlegender Produktumfang", "Checkliste für den Start", "Teamschulung"],
      },
      {
        title: "Genug von getrennten Werkzeugen",
        copy: "Teams, die Spieler und Umsatz an einer Stelle sehen wollen statt in fünf Panels und einer Tabelle.",
        points: ["Gemeinsames Wallet und Daten", "CRM und Segmentierung", "Schrittweiser Wechsel"],
      },
      {
        title: "Neue Märkte im Blick",
        copy: "Gruppen, die mehrere Marken und Märkte auf einer Plattform führen — jede mit eigenen Regeln und Rechten.",
        points: ["Konfiguration je Marke", "Marktbeschränkungen", "Zentrale Auswertung"],
      },
    ],
    bandTitle: "Der Traffic steigt. Die Leistung bleibt.",
    bandCta: "Architektur ansehen",
    bandFacts: [
      { title: "API-first", copy: "Produkte und externe Dienste sprechen über definierte Verträge." },
      { title: "Modular", copy: "Ein Produkt wird aktualisiert, die anderen laufen weiter." },
      { title: "Beobachtbar", copy: "Servicezustand und Transaktionsfluss an einer Stelle." },
    ],
    processTitle: "Von der Analyse bis live, ein klarer Weg.",
    processCopy: "In jedem Schritt klären wir Umfang, Verantwortliche und Abnahmekriterien gemeinsam.",
    processSteps: [
      { title: "Analyse", copy: "Markt, Lizenz, Produkt und Integrationsbedarf bestimmen." },
      { title: "Plan", copy: "Technischer Umfang, Markenstruktur und Zeitplan bis zum Start." },
      { title: "Aufbau", copy: "Umgebungen, Produkte, Anbieter und Betriebsrollen vorbereiten." },
      { title: "Abnahme", copy: "Tests von Ende zu Ende, Schulung und abgeschlossene Startcheckliste." },
    ],
    awardsTitle: "International anerkannt.",
    awardsCopy: "Unser Anbieter hat bei den EGR B2B, SBC und SiGMA Awards gewonnen, bei den MiGEA in drei Jahren den ersten Platz belegt und stand vielfach auf der Shortlist.",
    awardsLabel: "Auszeichnungen unseres Anbieters",
    ctaTitle: "Finden wir den richtigen Start für Ihren Betrieb.",
    ctaCopy: "Beschreiben Sie Ihren Bedarf; wir erarbeiten Produkt-, Integrations- und Wechselumfang gemeinsam.",
  },

  panel: {
    tabsLabel: "Panel-Ansichten",
    general: "Überblick",
    last12: "Letzte 12 Stunden",
    note: "Mehr davon sehen Sie,",
    noteLink: "wenn Sie eine Demo vereinbaren",
    modulesLabel: "Module: {group}",
    overview: {
      kpis: [
        { label: "Aktive Spieler", value: "590.418", delta: "+6 %" },
        { label: "Offene Wettscheine", value: "1.284.730", delta: "+11 %" },
        { label: "Wartet auf Freigabe", value: "214", delta: "−37" },
      ],
      chartLabel: "Sitzungen pro Stunde",
      rows: [
        { time: "21:04", text: "12 Partien wegen Betrugsverdacht entfernt, Wettscheine storniert", tag: "Risiko" },
        { time: "21:02", text: "Neuer Spielanbieter in die Lobby aufgenommen", tag: "Casino" },
        { time: "20:57", text: "Wochenendkampagne gestartet", tag: "CRM" },
        { time: "20:49", text: "1.380 Auszahlungsanträge zur Freigabe eingereiht", tag: "Finanzen" },
      ],
    },
    groups: {
      "oyun-icerik": {
        kpis: [
          { label: "Live-Partien", value: "1.846", delta: "−12" },
          { label: "Casino-Sitzungen", value: "212.640", delta: "+9 %" },
          { label: "Veröffentlichte Spiele", value: "5.120", delta: "+48" },
        ],
        chartLabel: "Wettscheine und Runden pro Stunde",
        stats: {
          "urun-sportsbook": "1.284.730 offene Scheine",
          "urun-game-provider": "38 Anbieter",
          "urun-canli-casino": "412 offene Tische",
          "urun-sanal-espor": "96 Events",
          "urun-hizli-oyunlar": "18.400 Runden / Std.",
          "urun-turnuva-jackpot": "7 Turniere",
        },
      },
      "oyuncu-hesap": {
        kpis: [
          { label: "Aktive Spieler", value: "590.418", delta: "+6 %" },
          { label: "Registrierungen heute", value: "8.940", delta: "+4 %" },
          { label: "Prüfung ausstehend", value: "1.126", delta: "−180" },
        ],
        chartLabel: "Anmeldungen pro Stunde",
        stats: {
          "urun-oyuncu-hesap": "590.418 aktiv",
          "urun-cuzdan": "0 Saldoabweichung",
          "urun-kyc": "1.126 in der Warteschlange",
          "urun-sorumlu-oyun": "3.480 aktive Limits",
        },
      },
      "odeme-finans": {
        kpis: [
          { label: "Einzahlungsfreigabe", value: "97,2 %", delta: "+0,4" },
          { label: "Offene Auszahlungen", value: "1.380", delta: "−96" },
          { label: "Abstimmung", value: "99,98 %", delta: "+0,01" },
        ],
        chartLabel: "Transaktionen pro Stunde",
        stats: {
          "urun-gambpay": "842.300 Transaktionen",
          "urun-finans": "14 offene Abrechnungen",
          "urun-kripto": "12 % Anteil",
        },
      },
      "buyume-pazarlama": {
        kpis: [
          { label: "Laufende Kampagnen", value: "17", delta: "+2" },
          { label: "Vergebene Boni", value: "18.930", delta: "+12 %" },
          { label: "Zurückgekehrte Spieler", value: "31.240", delta: "+18 %" },
        ],
        chartLabel: "Kampagnenresonanz",
        stats: {
          "urun-gambcrm": "126 Segmente",
          "urun-bonus": "42 aktive Boni",
          "urun-pazarlama": "9 geplante Aussendungen",
          "urun-gambaffiliate": "1.240 Partner",
          "urun-sadakat": "2.310 VIP-Spieler",
          "urun-is-gelistirme": "3 Marktanalysen",
        },
      },
      "risk-uyum": {
        kpis: [
          { label: "Offene Warnungen", value: "57", delta: "+12" },
          { label: "Konten in Prüfung", value: "311", delta: "+46" },
          { label: "Stornierte Wettscheine", value: "4.218", delta: "heute" },
        ],
        chartLabel: "Markierte Vorgänge",
        stats: {
          "urun-risk-fraud": "12 Partien entfernt",
          "urun-aml": "23 offene Fälle",
          "urun-uyum": "2 Berichte fertig",
        },
      },
      "veri-yapay-zeka": {
        kpis: [
          { label: "Hohes Abwanderungsrisiko", value: "12.480", delta: "Spieler" },
          { label: "Klickrate Empfehlungen", value: "18,4 %", delta: "+1,1" },
          { label: "Hoher Betrugsscore", value: "64", delta: "Transaktionen" },
        ],
        chartLabel: "Modellaufrufe",
        stats: {
          "urun-ai": "4 Modelle live",
          "urun-bi": "36 Dashboards",
          "urun-veri-akisi": "2,1 Mio. Ereignisse / Std.",
        },
      },
      "operasyon-altyapi": {
        kpis: [
          { label: "Verfügbarkeit", value: "99,97 %", delta: "30 Tage" },
          { label: "Offene Tickets", value: "148", delta: "−21" },
          { label: "Aktive Marken", value: "6", delta: "+1" },
        ],
        chartLabel: "Anfragen pro Stunde",
        stats: {
          "urun-arka-ofis": "214 warten auf Freigabe",
          "urun-cms": "12 Veröffentlichungen heute",
          "urun-destek": "148 offene Tickets",
          "urun-bayi": "860 Agenturen",
          "urun-api": "64 ms Antwortzeit",
          "urun-coklu-marka": "6 Marken",
          "urun-altyapi": "0 offene Alarme",
        },
      },
    },
  },

  catalog: {
    groups: {
      "oyun-icerik": {
        name: "Spiel & Inhalte",
        summary: "Alles, was der Spieler sieht: Wetten, Casino und alle Spiele dazwischen.",
      },
      "oyuncu-hesap": {
        name: "Spieler & Konto",
        summary: "Von der Registrierung bis zur Auszahlung: jeder Schritt am Spielerkonto.",
      },
      "odeme-finans": {
        name: "Zahlung & Finanzen",
        summary: "Geld hinein, Geld hinaus und am Abend ein geschlossenes Buch.",
      },
      "buyume-pazarlama": {
        name: "Wachstum & Marketing",
        summary: "Die Werkzeuge, die Spieler holen, halten und zurückbringen.",
      },
      "risk-uyum": { name: "Risiko & Compliance", summary: "Die Regeln, die Kasse, Lizenz und Spieler schützen." },
      "veri-yapay-zeka": {
        name: "Daten & KI",
        summary: "Entscheiden Sie mit Daten und Modellen statt aus dem Bauch.",
      },
      "operasyon-altyapi": {
        name: "Betrieb & Infrastruktur",
        summary: "Die täglichen Werkzeuge des Teams und der Boden, auf dem alles steht.",
      },
    },
    modules: {
      "urun-sportsbook": {
        name: "Sportsbook",
        tag: "",
        description: "Pre-Match und Live-Wetten an einer Stelle steuern.",
        items: [
          "Pre-Match- und Live-Abläufe",
          "Quoten, Limits und Margen konfigurieren",
          "Wettbaukasten und Cash-out",
          "Wettschein-, Erstattungs- und Stornoabläufe",
        ],
      },
      "urun-game-provider": {
        name: "Spielanbieter-Aggregation",
        tag: "",
        description: "Casino-Anbieter über eine Integration anbinden, Katalog und Lobby steuern.",
        items: [
          "Viele Anbieter, eine API",
          "Spielkatalog und Lobby-Aufbau",
          "Sichtbarkeit je Markt",
          "Berichte und Abstimmung je Anbieter",
        ],
      },
      "urun-canli-casino": {
        name: "Live-Casino",
        tag: "",
        description: "Live-Tische und Dealer-Spiele aus demselben Wallet anbieten.",
        items: [
          "Lobby für Live-Tische",
          "Tischlimits und Sichtbarkeit",
          "Nahtloser Wechsel über ein gemeinsames Wallet",
          "Sitzungs- und Wettverlauf",
        ],
      },
      "urun-sanal-espor": {
        name: "Virtuals & E-Sport",
        tag: "",
        description: "Wettinhalte rund um die Uhr, unabhängig vom Spielplan.",
        items: [
          "Virtuelle Ligen und Rennen",
          "E-Sport-Märkte",
          "Eigene Limit- und Margenprofile",
          "Gemeinsamer Wettschein mit dem Sportsbook",
        ],
      },
      "urun-hizli-oyunlar": {
        name: "Schnelle Spiele",
        tag: "",
        description: "Ein fertiger Katalog kurzer Runden: Crash, Würfel, Minen.",
        items: [
          "Katalog mit kurzen Runden",
          "Nachprüfbare Rundenergebnisse",
          "Marge je Spiel einstellen",
          "Platzierung in der Lobby",
        ],
      },
      "urun-turnuva-jackpot": {
        name: "Turniere & Jackpots",
        tag: "",
        description: "Mit Bestenlisten und Preistöpfen wird aus dem Spiel ein Rennen.",
        items: [
          "Turniervorlagen und Kalender",
          "Live-Bestenlisten",
          "Progressive Jackpot-Töpfe",
          "Regeln für die Preisvergabe",
        ],
      },
      "urun-oyuncu-hesap": {
        name: "Spielerkontoverwaltung",
        tag: "",
        description: "Registrierung, Profil, Sitzungen und Kontostatus an einer Stelle.",
        items: [
          "Registrierung und Anmeldung",
          "Profil, Etiketten und Notizen",
          "Kontostatus und Beschränkungen",
          "Die gesamte Historie auf einem Bildschirm",
        ],
      },
      "urun-cuzdan": {
        name: "Gemeinsames Wallet",
        tag: "",
        description: "Ein Saldo über alle Produkte; jede Bewegung im Buch.",
        items: [
          "Echt- und Bonusguthaben getrennt",
          "Mehrere Währungen",
          "Transaktionsbuch",
          "Saldokorrektur mit Freigabe",
        ],
      },
      "urun-kyc": {
        name: "KYC & Identitätsprüfung",
        tag: "",
        description: "Prüfanbieter in Registrierung und Auszahlung einhängen.",
        items: [
          "Dokumenten-Upload und Prüfwarteschlange",
          "Anbindung von Prüfanbietern",
          "Prüfregeln je Markt",
          "Alters- und Adresskontrolle",
        ],
      },
      "urun-sorumlu-oyun": {
        name: "Verantwortungsvolles Spiel",
        tag: "",
        description: "Limits, Pausen und Selbstsperre gehören zum Spielerkonto.",
        items: [
          "Einzahlungs-, Verlust- und Zeitlimits",
          "Pause und Selbstsperre",
          "Hinweise zur Sitzungsdauer",
          "Anzeichen riskanten Verhaltens",
        ],
      },
      "urun-gambpay": {
        name: "gambpay",
        tag: "Zahlung",
        description: "Zahlungsabläufe, Transaktionsstatus und Freigabeschritte verfolgen.",
        items: [
          "Ein- und Auszahlungsabläufe",
          "Limits und Routing je Methode",
          "Rechte und Freigabeschritte",
          "Statusverfolgung je Transaktion",
        ],
      },
      "urun-finans": {
        name: "Finanzen & Abstimmung",
        tag: "",
        description: "Kasse, Abrechnungen und Tagesabschluss in einer Tabelle schließen.",
        items: [
          "Tages- und Periodenabstimmung",
          "GGR-/NGR- und Umsatzberichte",
          "Abrechnungen für Anbieter und Partner",
          "Export für die Buchhaltung",
        ],
      },
      "urun-kripto": {
        name: "Krypto-Zahlungen",
        tag: "",
        description: "Ein- und Auszahlungen in Krypto; dasselbe Wallet, dieselben Regeln.",
        items: [
          "Mehrere Netzwerke und Assets",
          "Automatische Umrechnung",
          "Adress- und Transaktionsüberwachung",
          "Freigaberegeln für Auszahlungen",
        ],
      },
      "urun-gambcrm": {
        name: "gambcrm",
        tag: "CRM",
        description: "Spielerdaten in messbare Maßnahmen übersetzen.",
        items: [
          "Segmente und Kampagnenaufbau",
          "Lebenszyklus des Spielers",
          "Auslöser in Echtzeit",
          "Messung der Kampagnenergebnisse",
        ],
      },
      "urun-bonus": {
        name: "Bonusverwaltung",
        tag: "",
        description: "Boni samt Regeln, Budget und Umsatzbedingungen entwerfen.",
        items: [
          "Willkommens-, Einzahlungs- und Verlustboni",
          "Gratiswetten und Freispiele",
          "Umsatz- und Gültigkeitsregeln",
          "Bonusbudget und Missbrauchskontrolle",
        ],
      },
      "urun-pazarlama": {
        name: "Marketing-Automation",
        tag: "",
        description: "Kampagnen planen, auf die Kanäle bringen, Ergebnis messen.",
        items: [
          "Kampagnenkalender und Promo-Codes",
          "E-Mail, SMS und Push",
          "Banner und Landingpages auf der Seite",
          "Ertrag je Kanal und Kampagne",
        ],
      },
      "urun-gambaffiliate": {
        name: "gambaffiliate",
        tag: "Affiliate",
        description: "Das Partnernetz mit Zahlen wachsen lassen, die beide Seiten sehen.",
        items: [
          "Provisionsmodelle",
          "Kampagnen- und Traffic-Verfolgung",
          "Partnerportal und Abrechnungsperioden",
          "Strukturen für Unterpartner",
        ],
      },
      "urun-sadakat": {
        name: "Loyalität & VIP",
        tag: "",
        description: "Bindung über Stufen, Punkte und Vorrechte steuern.",
        items: [
          "Stufen- und Punktesystem",
          "Werkzeuge für VIP-Betreuer",
          "Persönliche Angebote",
          "Cashback-Regeln",
        ],
      },
      "urun-is-gelistirme": {
        name: "Geschäftsentwicklung",
        tag: "Leistung",
        description: "Vom Markteintritt bis zu Anbieterverträgen bauen wir den Wachstumsplan mit Ihnen.",
        items: [
          "Markt- und Wettbewerbsanalyse",
          "Auswahl von Anbietern und Zahlungspartnern",
          "Launch- und Wachstumsplan",
          "Regelmäßige Leistungsbewertung",
        ],
      },
      "urun-risk-fraud": {
        name: "Risiko- & Betrugsmanagement",
        tag: "",
        description: "Auffälliges Konto-, Bonus- und Wettverhalten früh erkennen.",
        items: [
          "Mehrfachkonten und Geräteabgleich",
          "Regeln gegen Bonusmissbrauch",
          "Risikoprofile für Wetten und Limits",
          "Prüfwarteschlange und Fallakten",
        ],
      },
      "urun-aml": {
        name: "AML & Transaktionsüberwachung",
        tag: "",
        description: "Auffällige Geldbewegungen regelbasiert überwachen und dokumentieren.",
        items: [
          "Schwellen- und Musterregeln",
          "Abfrage der Mittelherkunft",
          "Aufzeichnungen verdächtiger Transaktionen",
          "Prüfungsfeste Historie",
        ],
      },
      "urun-uyum": {
        name: "Compliance & Aufsichtsberichte",
        tag: "",
        description: "Die von der Aufsicht geforderten Berichte aus dem Panel erzeugen.",
        items: [
          "Berichtsvorlagen je Markt",
          "Unveränderliche Prüfprotokolle",
          "Regeln zur Datenaufbewahrung",
          "Rechte- und Zugriffsberichte",
        ],
      },
      "urun-ai": {
        name: "KI-Module",
        tag: "KI",
        description: "Prognose- und Empfehlungsmodelle an die täglichen Entscheidungen anschließen.",
        items: [
          "Spiel- und Wettempfehlungen",
          "Prognose des Abwanderungsrisikos",
          "Betrugs- und Risikobewertung",
          "KI-Assistent für das Betriebsteam",
        ],
      },
      "urun-bi": {
        name: "BI & Berichte",
        tag: "",
        description: "Produkt-, Kanal- und Segmentleistung auf gemeinsamen Definitionen.",
        items: [
          "Fertige Dashboards",
          "Baukasten für eigene Berichte",
          "Geplanter Berichtsversand",
          "Export ins Data Warehouse",
        ],
      },
      "urun-veri-akisi": {
        name: "Datenstrom in Echtzeit",
        tag: "",
        description: "Spieler- und Transaktionsereignisse sofort in Ihre Systeme bringen.",
        items: [
          "Ereignisstrom und Webhooks",
          "Segment-Auslöser",
          "Live-Kennzahlen",
          "Anbindung externer Werkzeuge",
        ],
      },
      "urun-arka-ofis": {
        name: "Backoffice",
        tag: "",
        description: "Das Verwaltungspanel, in dem alle Teams nach denselben Regeln arbeiten.",
        items: ["Rollen und Rechte", "Freigabeabläufe", "Änderungsverlauf", "Multi-Brand-Ansicht"],
      },
      "urun-cms": {
        name: "CMS & Frontend",
        tag: "",
        description: "Web- und Mobil-Oberfläche, Inhalte und Themes ohne Code verwalten.",
        items: [
          "Fertiges Web- und Mobil-Frontend",
          "Seiten, Banner und Menüs",
          "Marken-Themes",
          "Mehrsprachigkeit",
        ],
      },
      "urun-destek": {
        name: "Werkzeuge für den Kundendienst",
        tag: "",
        description: "Der Support sieht Spieler, Transaktion und Historie auf einem Bildschirm.",
        items: [
          "Ticket- und Fallverwaltung",
          "Anbindung des Live-Chats",
          "Textbausteine und Etiketten",
          "Spielerhistorie mit einem Klick",
        ],
      },
      "urun-bayi": {
        name: "Agentur- & Vertriebsverwaltung",
        tag: "",
        description: "Ihr Außennetz mit Hierarchie, Limits und Provisionen führen.",
        items: [
          "Mehrstufige Agenturstruktur",
          "Verteilung von Guthaben und Limits",
          "Provisionskonten",
          "Berichte je Agentur",
        ],
      },
      "urun-api": {
        name: "API- & Integrationsschicht",
        tag: "",
        description: "Fremdsysteme binden sich über definierte Verträge an.",
        items: [
          "REST- und WebSocket-Endpunkte",
          "Sandbox-Umgebung",
          "Webhook-Benachrichtigungen",
          "Versionierte Dokumentation",
        ],
      },
      "urun-coklu-marka": {
        name: "Multi-Brand",
        tag: "",
        description: "Neue Marken und Märkte auf derselben Plattform eröffnen.",
        items: [
          "Konfiguration je Marke",
          "Markt- und Sprachregeln",
          "Getrennte Rechte und Berichte",
          "Gemeinsame Spieler- und Wallet-Schicht",
        ],
      },
      "urun-altyapi": {
        name: "Infrastruktur & Überwachung",
        tag: "Leistung",
        description: "Hosting, Skalierung und Überwachung übernehmen wir.",
        items: [
          "Verwaltete Cloud-Infrastruktur",
          "Automatische Skalierung",
          "Überwachung und Alarme",
          "Sicherung und Rückfallplan",
        ],
      },
    },
  },

  products: {
    indexLabel: "Produktbereiche",
    flowTitle: "{modules} Module, ein Spielerdatensatz.",
    flowCopy:
      "Jeder Schritt nach der Registrierung landet im zuständigen Modul; alles schreibt auf dasselbe Konto und dasselbe Wallet.",
    playerFlow: [
      { step: "Registrierung", module: "Spielerkonten · KYC", copy: "Das Konto entsteht, die Prüfung beginnt." },
      { step: "Einzahlung", module: "gambpay", copy: "Die Zahlung wird freigegeben, das Wallet aktualisiert." },
      { step: "Spiel", module: "Sportsbook · Casino", copy: "Derselbe Saldo gilt in beiden Produkten." },
      { step: "Ansprache", module: "gambcrm · Bonus", copy: "Die Aktivität speist Segmente und Auslöser." },
      { step: "Herkunft", module: "gambaffiliate", copy: "Wird dem vermittelnden Partner gutgeschrieben." },
    ],
    capsTitle: "Hinter jedem Modul dieselbe Betriebsdisziplin.",
    capsCopy:
      "Module lassen sich einzeln nutzen; zusammen laufen Daten, Rechte und Berichte ohne Bruch durch.",
    capabilities: [
      { title: "Rollen und Rechte", copy: "Feine Rollen, damit Teams nur ihre eigenen Bereiche erreichen." },
      { title: "Regelverwaltung", copy: "Limits, Freigaben, Sichtbarkeit und Betriebsregeln zentral steuern." },
      { title: "Änderungsverlauf", copy: "Kritische Änderungen nach Nutzer, Zeit und Ergebnis zurückverfolgen." },
      { title: "Berichte", copy: "Produkt- und Betriebskennzahlen auf gemeinsamen Definitionen vergleichen." },
      { title: "Benachrichtigungen", copy: "Bei wichtigen Vorgängen und Schwellen das richtige Team sofort erreichen." },
      { title: "Multi-Brand", copy: "Mehrere Marken und Märkte kontrolliert auf einer Plattform führen." },
    ],
    integrationTitle: "Arbeiten Sie mit Ihren bisherigen Partnern weiter.",
    integrationCopy:
      "Anbieter-, Zahlungs-, Identitäts- und Datendienste binden sich kontrolliert über die API-Schicht an.",
    integrationCta: "Technischen Aufbau ansehen",
    integrationLabel: "Anbindbare Dienstarten",
    integrationTypes: [
      "Spielanbieter",
      "Quoten- und Datenfeeds",
      "Zahlungsmethoden",
      "Identitätsprüfung",
      "Nachrichtenkanäle",
      "Data Warehouse und BI",
    ],
    ctaTitle: "Sehen Sie die Module in echten Abläufen.",
    ctaCopy: "Planen wir eine Produkttour entlang der Prioritäten Ihres Teams.",
  },

  technology: {
    layersTitle: "Außen das Spiel. Innen die Technik.",
    layersCopy: "Vier Schichten, jede mit eigener Aufgabe. Wählen Sie eine für die Details.",
    layersLabel: "Plattformschichten",
    layersCaption:
      "Konzeptionelles Plattformschema. Betriebsmodell und Integrationsumfang werden in der technischen Analyse festgelegt.",
    layers: [
      {
        title: "Erlebnis",
        summary: "Web-Oberfläche · Mobil · Betreiberverwaltung",
        detail:
          "Was der Spieler sieht und was Ihr Team im Backoffice nutzt, liegt auf denselben Services. Theme und Inhalte werden je Marke geführt.",
        parts: ["Spieleroberfläche", "Backoffice", "Marken-Themes", "Inhaltsverwaltung"],
      },
      {
        title: "Zugang",
        summary: "API-Schicht · Authentifizierung · Autorisierung",
        detail:
          "Alle Anfragen gehen durch eine Tür. Identität, Rechte und Ratenbegrenzung greifen dort; interne Dienste stehen nie direkt offen.",
        parts: ["API-Gateway", "Sitzung und Identität", "Rollenprüfung", "Ratenbegrenzung"],
      },
      {
        title: "Fachdienste",
        summary: "Sportwetten · Casino · Zahlungen · CRM",
        detail:
          "Jedes Produkt läuft im eigenen Dienst und spricht über definierte Verträge. Eines wird aktualisiert, die anderen laufen weiter.",
        parts: ["Sportwetten", "Casino", "Zahlungen", "CRM", "Affiliate"],
      },
      {
        title: "Daten & Kontrolle",
        summary: "Gemeinsame Daten · Transaktionsprotokolle · Überwachung",
        detail:
          "Wallet-, Spieler- und Transaktionsdaten liegen in einer gemeinsamen Schicht. Jede Änderung wird protokolliert; der Servicezustand zentral überwacht.",
        parts: ["Gemeinsames Wallet", "Spielerdaten", "Prüfprotokoll", "Überwachung und Alarm"],
      },
    ],
    principlesTitle: "Bereit zu wachsen, offen für Änderungen.",
    principlesCopy:
      "Die Plattform ist darauf gebaut, Produkte unabhängig weiterzuentwickeln, kritische Dienste zu schützen und neue Anbindungen schnell live zu nehmen.",
    principles: [
      { title: "API-first", copy: "Produkte und externe Dienste kommunizieren über definierte Verträge." },
      { title: "Modulare Dienste", copy: "Neuer Bedarf kommt hinzu, ohne das System neu zu bauen." },
      { title: "Beobachtbarkeit", copy: "Servicezustand, Transaktionsfluss und Fehlersignale zentral im Blick." },
      { title: "Belastbarkeit", copy: "Kritische Abläufe sind durch kontrollierte Wiederholung, Warteschlangen und Isolation geschützt." },
    ],
    securityTitle: "Sicherheit ist keine Schicht, die man später aufträgt.",
    securityCopy:
      "Zugriff, Protokollierung, Datenschutz und Betriebsfreigaben gehören zur Arbeitsweise der Plattform.",
    securityPoints: [
      "Rollenbasierter Zugriff und minimale Rechte",
      "Freigaben und Prüfprotokolle bei kritischen Vorgängen",
      "Trennung von Umgebungs-, Marken- und Betriebsdaten",
      "Überwachung, Alarm und Vorfallbearbeitung",
    ],
    apiTitle: "Lesbare Verträge, vorhersehbare Antworten.",
    apiCopy:
      "Ihr Team weiß vorher, worauf es sich einlässt. Das Beispiel unten zeigt, wie eine Wallet-Transaktion aussieht.",
    request: "Anfrage",
    response: "Antwort",
    sample: "Beispielhafte Darstellung",
    apiNotes: [
      {
        title: "Wiederholbar",
        copy: "Eine Anfrage mit demselben Schlüssel wird nicht zweimal verarbeitet; nach einem Abbruch ist der erneute Versuch sicher.",
      },
      {
        title: "Statusbasiert",
        copy: "Jede Transaktion trägt einen klaren Status. Änderungen gehen per Webhook an Ihr System.",
      },
      {
        title: "Versioniert",
        copy: "Verträge sind versioniert; neue Felder kommen hinzu, ohne bestehende Anbindungen zu brechen.",
      },
    ],
    apiCaption: "Die echten Endpunkte und Felder stehen in der API-Dokumentation aus der technischen Analyse.",
    stepsTitle: "Von der Anbindung bis zum Live-Traffic, kontrolliert.",
    integrationSteps: [
      { title: "Vertrag", copy: "API-Umfang und Datenmodell" },
      { title: "Sandbox", copy: "Sicher entwickeln und testen" },
      { title: "Abnahme", copy: "Szenarien von Ende zu Ende" },
      { title: "Live", copy: "Überwachter, kontrollierter Start" },
    ],
    ctaTitle: "Sehen wir uns Ihre bestehende Architektur gemeinsam an.",
    ctaCopy:
      "Besprechen Sie Integrationspunkte, Wechselrisiken und das empfohlene Betriebsmodell mit unserem technischen Team.",
  },

  cases: {
    listLabel: "Szenarien",
    need: "Bedarf",
    approach: "Vorgehen",
    result: "Angestrebtes Ergebnis",
    phasesLabel: "Phasen",
    caseStudies: [
      {
        title: "Von null bis zum ersten Live-Tag.",
        need: "Ein Team, dessen Lizenz- und Betriebsvorbereitung steht und das jetzt mit allen Produkten aus einer Hand an den Markt geht.",
        approach:
          "Zuerst wird der grundlegende Produktumfang festgelegt. Marken- und Umgebungsaufbau laufen parallel zur Integration.",
        result:
          "Geprüfte Kernabläufe, ein geschultes Betriebsteam und eine gemeinsam abgenommene Startcheckliste.",
        phases: ["Umfang", "Aufbau", "Integration", "Probelauf", "Start"],
      },
      {
        title: "Gleiches Geschäft, neues Fundament.",
        need: "Die technische Basis erneuern, ohne den laufenden Betrieb zu unterbrechen.",
        approach:
          "Daten-, Wallet- und Produktflüsse werden in kontrollierte Phasen geteilt. Jede Phase trägt einen Rückfallplan.",
        result: "Ein messbarer Wechselplan und eine Plattform, auf der sich weiterbauen lässt.",
        phases: ["Bestandsaufnahme", "Datenprobe", "Parallelbetrieb", "Traffic-Rampe", "Abschluss"],
      },
      {
        title: "Zweite Marke, dasselbe Rückgrat.",
        need: "Ein Betreiber mit einer Marke eröffnet für einen neuen Markt eine zweite — mit eigenem Team und eigenen Regeln.",
        approach:
          "Gemeinsames Wallet und Datenschicht bleiben. Marke, Marktbeschränkungen und Rechte werden getrennt konfiguriert.",
        result: "Geteilte Infrastruktur, eigene Markenidentität und Berichte, die beide Marken zusammen zeigen.",
        phases: ["Marktregeln", "Markenstruktur", "Inhalte", "Rechte", "Start"],
      },
    ],
    caption: "Die Szenarien sind beispielhaft; sie beschreiben keinen konkreten Kunden und kein konkretes Ergebnis.",
    methodTitle: "Jedes Projekt beginnt mit denselben vier Fragen.",
    methodCopy:
      "Erfolgskriterien stehen von Anfang an fest; Fortschritt misst sich an fertigen Ergebnissen, nicht an Annahmen.",
    methodQuestions: [
      { title: "Wohin gehen wir?", copy: "Zielmarkt, Produktumfang und kaufmännische Prioritäten." },
      { title: "Was schützen wir?", copy: "Das heutige Spielererlebnis, die Daten und die kritischen Abläufe." },
      { title: "Was ändern wir?", copy: "Plattform, Anbieter, Prozesse und Verantwortlichkeiten im Team." },
      { title: "Wie prüfen wir das?", copy: "Testszenarien, Abnahmekriterien und Messungen zum Start." },
    ],
    riskTitle: "Was schiefgehen kann, besprechen wir vorher.",
    riskCopy:
      "Die vier häufigsten Risiken eines Wechselprojekts und wo der Plan dazu steht.",
    riskHead: ["Risiko", "Gegenmaßnahme"],
    riskTable: [
      {
        risk: "Verlust oder Abweichung bei der Datenmigration",
        measure: "Wiederholte Datenproben vor dem Start und Abgleich auf Datensatzebene.",
      },
      {
        risk: "Abweichende Wallet-Salden",
        measure: "Saldoabstimmung zum Umschaltzeitpunkt; ohne geschlossene Differenz kein Traffic.",
      },
      {
        risk: "Ausfall am Starttag",
        measure: "Traffic in Stufen, Überwachungsboards und vorher verfasste Rückfallschritte.",
      },
      {
        risk: "Das Team findet sich in den neuen Werkzeugen nicht zurecht",
        measure: "Rollenbezogene Schulung und ein Probelauf mit echten Szenarien vor dem Start.",
      },
    ],
    outcomesTitle: "Ein sichtbarer Plan. Klare Zuständigkeiten. Ein kontrollierter Start.",
    outcomes: [
      { title: "Ein Umfang", copy: "Produkt- und Integrationsanforderungen" },
      { title: "Ein Kalender", copy: "Abhängigkeiten zwischen den Teams" },
      { title: "Ein Abnahmeplan", copy: "Test- und Startkriterien" },
    ],
    ctaTitle: "Die nächste Fallstudie könnte Ihre sein.",
    ctaCopy: "Wägen wir Ihre Prioritäten für einen Neustart oder einen Plattformwechsel ab.",
  },

  packages: {
    listLabel: "Pakete",
    price: "Angebot nach Umfang",
    planCta: "Über den Umfang sprechen",
    plans: [
      {
        audience: "Für neue Operationen",
        summary: "Der Grundumfang, um Ihre erste Marke zu eröffnen.",
        items: [
          "Grundlegende Produkteinrichtung",
          "Markenkonfiguration",
          "Plan bis zum Start",
          "Backoffice und Rollendefinitionen",
          "Schulung zum Start",
        ],
      },
      {
        audience: "Für wachsende Betreiber",
        summary: "Alle Produkte zusammen, Spielerdaten an einer Stelle.",
        items: [
          "Ein verbundenes Produktökosystem",
          "CRM und Segmentierung",
          "Erweiterte Integration",
          "Affiliate-Management",
          "Fortgeschrittene Berichte",
        ],
      },
      {
        audience: "Für Projekte mit eigenem Umfang",
        summary: "Multi-Brand-Strukturen und Plattformwechsel.",
        items: [
          "Individuelle Entwicklung",
          "Planung des Wechsels",
          "Eigenes Betriebsmodell",
          "Mehrere Marken und Märkte",
          "Ein eigenes Projektteam",
        ],
      },
    ],
    includedTitle: "Egal, wofür Sie sich entscheiden.",
    includedCopy: "Der Umfang ändert sich; die Arbeitsweise nicht. Diese vier Schritte gehören zu jedem Projekt.",
    includedInAll: [
      { title: "Analysephase", copy: "Umfang, Zeitplan und Zuständigkeiten werden schriftlich festgehalten." },
      { title: "Sandbox-Umgebung", copy: "Anbindungen werden sicher getestet, bevor sie live gehen." },
      { title: "Teamschulung", copy: "Jede Rolle lernt ihre Bildschirme an echten Szenarien." },
      { title: "Startcheckliste", copy: "Der Live-Gang folgt Schritten, auf die sich alle geeinigt haben." },
    ],
    compareTitle: "Dasselbe Fundament. Unterschiedliche Geschwindigkeiten.",
    compareCopy:
      "Die Pakete sind keine feste Produktliste, sondern ein Rahmen, um den richtigen Startumfang zu finden.",
    capability: "Funktion",
    included: "Enthalten",
    notIncluded: "Nicht enthalten",
    comparison: [
      { label: "Kernplattform und Verwaltung", cells: ["Enthalten", "Enthalten", "Enthalten"] },
      { label: "Sportsbook / Casino", cells: ["Zur Wahl", "Enthalten", "Enthalten"] },
      { label: "Zahlungsbetrieb", cells: ["Basis", "Erweitert", "Eigener Umfang"] },
      { label: "CRM und Segmentierung", cells: ["Einstieg", "Erweitert", "Eigener Umfang"] },
      { label: "Bonus und Marketing", cells: ["Basis", "Erweitert", "Eigener Umfang"] },
      { label: "Affiliate-Management", cells: ["Optional", "Enthalten", "Eigener Umfang"] },
      { label: "Risiko und Betrug", cells: ["Basis", "Erweitert", "Eigener Umfang"] },
      { label: "KI-Module", cells: ["—", "Optional", "Enthalten"] },
      { label: "Multi-Brand", cells: ["—", "Optional", "Enthalten"] },
      { label: "Wechsel und Anpassung", cells: ["—", "Optional", "Enthalten"] },
    ],
    faqTitle: "Bevor Sie entscheiden.",
    faqs: [
      {
        question: "Sind die Pakete fest?",
        answer:
          "Nein. Sie sind ein Startrahmen; der endgültige Umfang ergibt sich nach der Analyse aus Produkt, Markt und Integrationsbedarf.",
      },
      {
        question: "Wie lange dauert es bis zum Start?",
        answer:
          "Das hängt von der Lizenzvorbereitung, der Zahl der Anbindungen, der Datenmigration und der Abnahme ab. Am Ende der Analyse steht ein realistischer Plan.",
      },
      {
        question: "Können wir unsere jetzigen Anbieter behalten?",
        answer:
          "Sobald technische Eignung und Verträge bestätigt sind, kann die Anbindung Ihrer bestehenden Anbieter in den Umfang aufgenommen werden.",
      },
      {
        question: "Ist Betriebsunterstützung enthalten?",
        answer:
          "Schulung, Live-Gang und laufende Unterstützung werden nach dem gewählten Servicemodell geplant.",
      },
      {
        question: "Können wir mit einem einzigen Produkt beginnen?",
        answer:
          "Ja. Module funktionieren auch einzeln. Sie können mit Zahlungen oder CRM starten und den Rest später ergänzen.",
      },
      {
        question: "Stellen Sie die Lizenz?",
        answer:
          "Nein. Gamb Gaming ist Technologie- und Betriebspartner; wir arbeiten nur mit Betreibern, die eine eigene Lizenz halten oder sie gerade beantragen.",
      },
      {
        question: "Wie entsteht der Preis?",
        answer:
          "Weil Produkt-, Markt- und Integrationsumfang bei jedem Betrieb anders sind, folgt das Angebot nach der Analyse.",
      },
      {
        question: "Betreuen Sie Spieler direkt?",
        answer:
          "Nein. Gamb Gaming arbeitet ausschließlich mit Unternehmen; für Endkunden gibt es weder Spiel-, Wett- noch Kontosupport.",
      },
    ],
    ctaTitle: "Starten Sie mit dem Nötigen, wachsen Sie, wenn es so weit ist.",
    ctaCopy: "Suchen wir nicht das richtige Paket, sondern den richtigen Umfang.",
  },

  demo: {
    title: ["Sehen wir uns", "die Plattform gemeinsam an."],
    lead: "Echte Abläufe. Eine Plattformtour direkt mit dem technischen Team.",
    stepsLabel: "Was im Termin passiert",
    steps: [
      { title: "Analyse", copy: "Ihre Ziele und Prioritäten." },
      { title: "Produkttour", copy: "Module und Arbeitsabläufe." },
      { title: "Nächste Schritte", copy: "Umfang und Startplan." },
    ],
    fineprint: ["Nur für B2B-Anfragen von Betreibern.", "Kein Support für Endkunden und Spieler."],
    formTitle: "Erzählen Sie uns von Ihrem Betrieb.",
    required: "Mit * markierte Felder sind Pflicht.",
    fields: {
      name: "Vor- und Nachname",
      namePh: "Ihr Vor- und Nachname",
      role: "Ihre Funktion",
      rolePh: "z. B. Leitung Betrieb",
      email: "Geschäftliche E-Mail",
      emailPh: "sie@ihrbetrieb.com",
      company: "Firmen- / Betriebsname",
      companyPh: "Betriebsnamen eingeben",
      stage: "Projektphase",
      stageChoose: "Bitte wählen",
      products: "Produkte, die Sie interessieren",
      message: "Kurz: Ihr Bedarf",
      messagePh: "Zielmarkt, Produktumfang und geplanter Start ...",
      website: "Website",
      consent:
        "Ich habe die Datenschutzhinweise gelesen. Ich bin damit einverstanden, dass meine Angaben zur Beantwortung meiner Anfrage verarbeitet werden.",
    },
    stages: ["Neuer Betrieb", "Plattformwechsel", "Wachstum"],
    errors: {
      name: "Bitte geben Sie Vor- und Nachnamen an.",
      email: "Bitte geben Sie Ihre geschäftliche E-Mail an.",
      emailFormat: "Bitte im Format name@firma.com angeben.",
      company: "Bitte geben Sie den Firmen- oder Betriebsnamen an.",
      consent: "Bitte bestätigen Sie die Datenschutzhinweise.",
      send: "Ihre Anfrage konnte nicht gesendet werden. Prüfen Sie die Verbindung und versuchen Sie es erneut.",
    },
    submit: "Demo-Anfrage senden",
    sending: "Wird gesendet …",
    previewHint: "Vorschaumodus: Das Formular funktioniert, es wird aber keine Anfrage gesendet.",
    thanks: "Danke",
    sentCopy: "Unser Team meldet sich, um Ihren Umfang durchzugehen.",
    previewFlag:
      "Dies ist eine Vorschau: Das Formular wurde geprüft, Ihre Anfrage ging aber an keinen Server und nichts wurde gespeichert.",
    summary: { company: "Firma", email: "E-Mail", stage: "Projektphase", products: "Produkte" },
    again: "Neue Anfrage stellen",
  },

  notfound: {
    title: ["Diese Seite", "ist nicht hier."],
    copy: "Die Adresse hat sich geändert oder wurde falsch geschrieben.",
    cta: "Zur Startseite",
  },

  blog: {
    title: ["Notizen aus der Praxis.", "Für alle, die eine Plattform suchen."],
    lead: "Plattformauswahl, Integration, Zahlungen, Risiko und Betrieb — aus der Arbeit heraus geschrieben, nicht aus der Broschüre.",
    latest: "Neueste Beiträge",
    readMore: "Beitrag lesen",
    minutes: "{n} Min. Lesezeit",
    back: "Alle Beiträge",
    related: "Das könnte Sie auch interessieren",
    empty: "In dieser Sprache gibt es noch keine Beiträge.",
    author: "Das Team von Gamb Gaming",
    updated: "Veröffentlicht",
    notFound: "Dieser Beitrag wurde nicht gefunden oder entfernt.",
    ctaTitle: "Sprechen wir darüber anhand Ihres eigenen Betriebs.",
    ctaCopy: "Stellen Sie Ihre Fragen in einer Plattformtour direkt dem technischen Team.",
  },
};

export default de;
