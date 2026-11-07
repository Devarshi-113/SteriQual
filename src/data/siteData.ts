export interface Metric {
  value: string;
  label: string;
  sublabel: string;
}

export interface ServicePillar {
  id: string;
  number: string;
  name: string;
  badge: string;
  headline: string;
  description: string;
  icon: string;
  points: string[];
  deliverables: string[];
}

export interface EngagementModel {
  title: string;
  badge: string;
  description: string;
  features: string[];
}

export const siteData = {
  company: {
    name: "SteriQual",
    legalName: "SteriQual Pharma Consulting",
    tagline: "Independent Specialist Advisory in Sterile Injectable Quality & Compliance",
    headlineTag: "Independent Specialist Advisory",
    subheadline: "Independent pharmaceutical Quality Assurance leadership for sterile injectable manufacturers, CDMOs, and export-oriented organisations. Providing practical quality governance, sterility assurance (EU-GMP Annex 1), and inspection preparedness.",
    disclaimer: "SteriQual is an independent advisory practice founded by industry veteran Pinkalkumar Dave. All operational metrics, audit tallies, and career benchmarks reflect the 30-year professional leadership track record of the Principal Consultant across premier pharmaceutical manufacturers.",
  },

  contact: {
    founderName: "Pinkalkumar Dave",
    founderShortName: "Pinkal Dave",
    title: "Founder & Independent Senior QA Consultant",
    formerTitle: "Former Site Quality Head / Director – Quality",
    email: "pinkaldave13@gmail.com",
    phone: "+91 98795 61480",
    phoneDisplay: "+91 98795 61480",
    whatsappNumber: "919879561480",
    whatsappMessage: "Hello Mr. Dave, I am reaching out regarding SteriQual's sterile injectable quality and compliance consulting services.",
    location: "Vadodara, Gujarat, India",
    engagementReach: "India-based | Remote and on-site engagements across India and internationally",
    linkedin: "https://www.linkedin.com/in/pinkal-dave",
    operatingHours: "Monday – Saturday: 9:00 AM – 7:00 PM IST",
  },

  // Note: All statistics strictly represent the Founder's personal track record across 30 years (August 1996 – Present)
  founderMetrics: [
    { value: "30", label: "Years, Founder's QA Leadership", sublabel: "August 1996 – Present" },
    { value: "15", label: "USFDA Audits Faced", sublabel: "Successfully steered by founder" },
    { value: "15", label: "EU, Canada & TGA Audits", sublabel: "Steered at top-tier sterile sites" },
    { value: "100+", label: "Global Customer Audits", sublabel: "Faced across multi-product sterile facilities" },
  ] as Metric[],

  // Founder Detailed Audits Faced List
  founderAuditTallies: [
    { agency: "USFDA", count: "15 Audits", desc: "Successful USFDA sterile & oral formulation audits steered" },
    { agency: "EU-GMP / MHRA, Canada & TGA", count: "15 Audits", desc: "European, Health Canada and Australian TGA inspections" },
    { agency: "ANVISA (Brazil)", count: "5 Audits", desc: "Brazilian health authority site approvals" },
    { agency: "MCC / SAHPRA & INVIMA", count: "8 Audits", desc: "South Africa (4) and Colombia (4) regulatory inspections" },
    { agency: "Other Regulatory Authorities", count: "Multiple", desc: "WHO (CDSCO), Ukraine, Indonesia, Taiwan, Kenya, etc." },
    { agency: "Global Customer & Partner Audits", count: "100+ Audits", desc: "Multinational MNC customer & licensing partner audits" },
  ],

  // Targeted Therapeutic & Dosage Scope
  specialistScope: [
    {
      title: "Small Volume Parenterals (SVP)",
      desc: "Aseptic and terminally sterilized solutions, suspensions, and emulsions in glass vials, ampoules, and bottles.",
      standard: "USFDA 21 CFR 211 & EU-GMP Annex 1",
    },
    {
      title: "Lyophilized Injections",
      desc: "Sterile freeze-dried injectables, formulation verification, cycle optimization, depyrogenation, and sterile reconstitution.",
      standard: "Aseptic Processing & CCS Guidelines",
    },
    {
      title: "Pre-filled Syringes (PFS) & Cartridges",
      desc: "Advanced pre-filled syringe assembly, sterile needle insertion, nested tub processing, and isolator/RABS integration.",
      standard: "Annex 1 Barrier Systems (RABS / Isolators)",
    },
    {
      title: "Ophthalmic & Sterile Liquids",
      desc: "Preserved and unpreserved sterile ophthalmic solutions, blow-fill-seal (BFS) technology, and particulate control.",
      standard: "ISO 14644 & International Pharmacopeias",
    },
  ],

  // Value additions
  valuePropositions: [
    "Strengthen sterile manufacturing controls and executive quality governance.",
    "Identify and prioritise GMP compliance gaps with a risk-based remediation roadmap.",
    "Improve deviation investigations, root cause depth, CAPA quality, and effectiveness checks.",
    "Prepare teams, evidence war-rooms, and documentation for international regulatory inspections.",
    "Provide experienced, independent QA perspective directly to promoters and senior management.",
    "Fractional VP-Quality oversight without the long-term overhead of a permanent C-suite hire.",
  ],

  // Core Practice Pillars (Distilled from comprehensive services brief)
  servicePillars: [
    {
      id: "sterility-assurance",
      number: "01",
      name: "Sterility Assurance & Contamination Control (CCS)",
      badge: "Annex 1 & Aseptic Processing",
      headline: "Microbial Control, Media Fills & Smoke Studies",
      description: "Achieving absolute sterility assurance and robust microbial control across aseptic processing and terminal sterilization environments.",
      icon: "shield-check",
      points: [
        "Aseptic Process Simulation (APS / Media Fill) design: protocol development, worst-case condition simulation, and intervention challenges.",
        "Holistic Contamination Control Strategy (CCS) formulation aligned strictly with modern EU-GMP Annex 1 expectations.",
        "Comprehensive turnkey oversight for Smoke Studies: airflow visualization protocol drafting, video execution reviews, and technical reporting.",
        "Cleanroom Environmental Monitoring (EM) optimization: alert/action limit rationalization and data-driven particulate trending.",
        "Aseptic interventions risk mitigation using Failure Mode & Effects Analysis (FMEA) to reduce human touchpoints in Grade A/B zones.",
        "Sterile personnel gowning qualification programs, aseptic technique workshops, and cleanroom behavioral audits.",
      ],
      deliverables: [
        "Contamination Control Strategy (CCS) Dossier",
        "Aseptic Process Simulation (APS) Protocol",
        "Smoke Study Technical Review & Report",
        "EM Program Rationalization Document",
        "Sterile Gowning Qualification Matrix",
      ],
    },
    {
      id: "inspection-readiness",
      number: "02",
      name: "Regulatory Inspection Readiness & Audit Management",
      badge: "Inspection Defense & War Room",
      headline: "USFDA, EU-MHRA, Canada, TGA & ANVISA Benchmarking",
      description: "Turning inspection stress into competitive advantage through rigorous simulation audits, war-room setup, and confident regulatory defense.",
      icon: "building",
      points: [
        "Comprehensive mock regulatory inspections benchmarked against the actual rigor of USFDA, EU-MHRA, Health Canada, TGA, and ANVISA auditors.",
        "Inspection War Room architecture: structuring front-room strategy, back-room document retrieval workflows, and communication lines.",
        "Subject Matter Expert (SME) coaching and interview preparation to handle challenging inspector interrogations with composure.",
        "Evidence-room preparation and technical document curation for rapid, flawless presentation during live regulatory audits.",
        "Multinational customer audit hosting strategies to build partner confidence and protect commercial supply relationships.",
      ],
      deliverables: [
        "Site Audit Readiness Gap Report",
        "Front-Room / Back-Room War Room SOP",
        "SME Coaching & Interview Readiness Guide",
        "Mock Audit Scorecard & Findings Matrix",
        "Inspection Day Logistics Checklist",
      ],
    },
    {
      id: "audit-remediation",
      number: "03",
      name: "Audit Remediation & Warning Letter / 483 Turnaround",
      badge: "Regulatory Defense & CAPA",
      headline: "Defensible Responses & Sustainable Compliance Turnarounds",
      description: "Transforming critical compliance vulnerabilities and regulatory enforcement actions into robust, sustainable operational systems.",
      icon: "file-text",
      points: [
        "Rapid diagnostic evaluation and strategic response drafting for USFDA Form 483 observations and Warning Letters.",
        "European Statement of Non-Compliance (CNC) remediation planning and health authority commitment management.",
        "Advanced Root-Cause Analysis (RCA) leveraging Fishbone diagrams, 5-Whys, and FMEA to uncover latent systemic failure points.",
        "CAPA Effectiveness Verification frameworks: metrics-driven protocols to ensure corrective actions are impervious to repeat citations.",
        "Direct partnership with executive leadership to draft structured, defensible progress reports for global health authorities.",
      ],
      deliverables: [
        "Formal Form 483 / Warning Letter Response Dossier",
        "Root Cause Analysis (RCA) Investigation Reports",
        "Prioritized CAPA Remediation Roadmap",
        "CAPA Effectiveness Verification Protocols",
        "Regulatory Authority Progress Updates",
      ],
    },
    {
      id: "qms-governance",
      number: "04",
      name: "QMS Governance & The Six Quality Systems Model",
      badge: "Quality Governance & Systems",
      headline: "FDA Quality Systems Architecture & Data Integrity",
      description: "Building robust, agile, and audit-ready quality frameworks that drive sustainable compliance across the plant lifecycle.",
      icon: "layers",
      points: [
        "Implementation of the FDA's Six Quality Systems: Production, Facilities & Equipment, Laboratory Controls, Materials, Packaging & Labeling, and Data/Document systems.",
        "End-to-end QMS re-engineering: harmonizing SOPs across Deviations, Change Controls, OOS/OOT investigations, and CAPA.",
        "Comprehensive Data Integrity Governance adhering to ALCOA+ principles across paper-based and computerized laboratory systems (21 CFR Part 11 / EU Annex 11).",
        "Streamlined Product Quality Reviews (PQR / APR) compilation with statistical trending and regulatory-compliant metrics.",
        "Site Quality Index (QI) enhancement to reduce overdue QMS backlogs, resolve unconfirmed OOS incidents, and improve supply commitment.",
      ],
      deliverables: [
        "Six Quality Systems Baseline Gap Matrix",
        "Data Integrity ALCOA+ Governance Policy",
        "Harmonized Deviation & OOS Investigation SOPs",
        "Site Quality Index (QI) Metric Dashboard",
        "Quality Risk Management (ICH Q9) Matrix",
      ],
    },
    {
      id: "microbiology-lab",
      number: "05",
      name: "Microbiology Laboratory Setup & Method Validation",
      badge: "GLP & Laboratory Controls",
      headline: "Greenfield Setup, Isolators & Rapid Microbial Methods",
      description: "Building state-of-the-art microbiological testing facilities and contamination-free sterile environments from the ground up.",
      icon: "flask",
      points: [
        "Greenfield and brownfield microbiology laboratory workflow engineering compliant with GLP and international pharmacopeias.",
        "Equipment qualification & method validation: Sterility Testing Isolators, Air Samplers, Autoclaves, and Incubators.",
        "Bioburden & endotoxin control: water-for-injection (WFI) and pure steam system validation, cleaning validation programs, and excursion troubleshooting.",
        "Disinfectant efficacy studies and qualification programs for plant sanitization, biocides, and cleanroom surfaces.",
        "QC laboratory data reliability, analytical method transfer, instrument calibration, and sample integrity assurance.",
      ],
      deliverables: [
        "Microbiology Laboratory Layout & Workflow Design",
        "Sterility Testing Isolator Qualification Protocol",
        "WFI / Pure Steam Validation Summary",
        "Disinfectant Efficacy Study Protocols",
        "Microbial Limit Testing (MLT) Validation Package",
      ],
    },
    {
      id: "qualification-csv",
      number: "06",
      name: "Equipment Qualification & Computer System Validation (CSV)",
      badge: "V-Model & Clean Utilities",
      headline: "ASTM E2500, ISPE & 21 CFR Part 11 Compliance",
      description: "Audit-ready lifecycle validation of sterile manufacturing hardware, cleanroom utilities, and computerized systems.",
      icon: "cpu",
      points: [
        "Complete V-Model qualification lifecycle authoring: URS, DQ, IQ, OQ, and Performance Qualification (PQ).",
        "Clean utilities & facility qualification: HVAC air changes, differential pressure cascades, particle counts, WFI loops, and pure steam.",
        "Computer System Validation (CSV) following GAMP 5 principles for automated equipment, SCADA, QC instrumentation (HPLC, GC, LIMS), and ERP systems.",
        "Barrier system qualification: technical oversight for restricted access barrier systems (RABS) and isolation technology.",
        "Periodic re-qualification schedules and change management frameworks for modified or legacy manufacturing equipment.",
      ],
      deliverables: [
        "Validation Master Plan (VMP)",
        "Equipment DQ / IQ / OQ / PQ Protocols",
        "Computer System Validation (CSV) GAMP 5 Package",
        "HVAC Dynamic Pressure Cascade Verification",
        "Clean Utility Qualification Protocols",
      ],
    },
  ] as ServicePillar[],

  // Emergency / Remediation Support Callout
  remediationCallout: {
    badge: "Urgent Regulatory Support",
    title: "Faced with a Form 483, Warning Letter, or Imminent Audit?",
    description: "Senior QA leadership steps in within 48 hours to evaluate health authority findings, structure scientifically sound CAPA responses, and manage regulatory commitments.",
    actionText: "Request Emergency Advisory",
  },

  // Engagement Models (from the brief)
  engagementModels: [
    {
      title: "Defined Project",
      badge: "Milestone-Driven",
      description: "Specific scope with clearly defined milestones, deliverables, and completion criteria. Ideal for CCS creation, mock inspections, or URS/VMP drafting.",
      features: [
        "Agreed fixed scope and target deliverables",
        "Pre-defined timeline and milestones",
        "Comprehensive final review and documentation package",
        "Seamless handover to site quality team",
      ],
    },
    {
      title: "On-Site Assessment",
      badge: "Targeted Audit Days",
      description: "Intensive on-site diagnostic review of manufacturing blocks, cleanroom behaviors, QC laboratories, and documentation systems.",
      features: [
        "Agreed audit days on the manufacturing floor",
        "Pre-audit document preparation and scoping",
        "Deep-dive shop floor observation and operator interviews",
        "Prioritized exit report and executive debrief meeting",
      ],
    },
    {
      title: "Monthly Advisory Retainer",
      badge: "Fractional Executive QA",
      description: "Reserved senior advisory capacity providing scheduled reviews, rapid escalation support, and ongoing quality mentoring for site leadership.",
      features: [
        "Dedicated monthly advisory hours",
        "Scheduled steering reviews with senior leadership",
        "Priority turnaround for critical deviations & investigations",
        "Ongoing mentorship for QA managers and site heads",
      ],
    },
    {
      title: "Remote Technical Advisory",
      badge: "Agile Advisory",
      description: "Flexible, off-site support for technical document review, regulatory dossier evaluation, investigation mentoring, and strategy workshops.",
      features: [
        "Independent review of SOPs, protocols, and CAPA dossiers",
        "Investigation troubleshooting and root-cause guidance",
        "Virtual workshops on Annex 1, Data Integrity, and inspection conduct",
        "Continuous QA sounding board for leadership",
      ],
    },
  ] as EngagementModel[],

  // Founder Detailed Profile
  founder: {
    fullName: "Pinkalkumar Pravinchandra Dave",
    displayName: "Pinkal Dave",
    title: "Founder & Principal QA Consultant",
    designationHistory: "Former Site Quality Head / Director – Quality",
    educationDegrees: "B.Sc. & M.Sc. (Microbiology), MBA (Personnel), MDPM",
    experienceYears: "30 Years",
    location: "Vadodara, Gujarat, India",
    email: "pinkaldave13@gmail.com",
    phone: "+91 98795 61480",
    summary: "Accomplished Site Quality Head and Senior Quality Leader with 30 years of continuous hands-on pharmaceutical experience (August 1996 – Present) across Sun Pharma, Alembic, Emcure, Zydus, and Intas, having steered over 35 major regulatory inspections by USFDA, EU/MHRA, Health Canada, TGA, and ANVISA.",
    quote: "True regulatory compliance is never achieved through cosmetic documentation prepared weeks before an audit. It is an engineered culture where sterility assurance and data integrity are governed by scientific discipline on the cleanroom floor.",
    
    // Exact career progression from resume
    careerTrack: [
      {
        company: "Alembic Pharmaceuticals Limited",
        role: "Site Quality Head",
        period: "2025 – 2026",
        details: "Directed overall quality assurance for a facility featuring 5 sterile manufacturing lines (solutions, suspensions, emulsions, lyophilized, ophthalmic, PFS, vials) catering to US, EU, and Canadian markets, managing a team of over 250 quality professionals.",
      },
      {
        company: "Innoxel Lifesciences Private Limited",
        role: "Senior General Manager – Quality Assurance",
        period: "2023 – 2024",
        details: "Led quality operations during the greenfield project and scale-up phase to establish the site as a premier sterile and oncology CDMO for regulated global markets.",
      },
      {
        company: "Emcure Pharmaceuticals Ltd.",
        role: "Director – Quality (Site Quality Head)",
        period: "2020 – 2023",
        details: "Headed the entire site quality organization at Sanand, owning QA, QC, and Microbiology laboratories with full responsibility for product releases, compliance, and audits for a team exceeding 200 members.",
      },
      {
        company: "Sun Pharmaceutical Industries Ltd.",
        role: "GM – Quality (Site Quality Head) & Regional Quality Lead",
        period: "1998 – 2020 (~20 Years Cumulative Tenure)",
        details: "Served in pivotal roles across Halol, Baska, and Regional Quality: spearheaded 4 USFDA audits, EU, Canada, and TGA inspections; drove SAP HANA QA harmonization; improved Site Quality Index from ~60% to over 85%; and eliminated overdue stability backlogs.",
      },
      {
        company: "LIVA Pharmaceuticals (Zydus Group)",
        role: "Deputy General Manager – Quality",
        period: "2014 – 2016",
        details: "Established quality systems from the early project stage for a greenfield injectable facility with four aseptic lines.",
      },
      {
        company: "INTAS Pharmaceuticals Limited",
        role: "Assistant General Manager – Quality Assurance",
        period: "2013 – 2014",
        details: "Directed QA operations for Oncology and Hormone manufacturing blocks (sterile injectables, tablets, capsules).",
      },
    ],

    education: [
      { degree: "M.Sc. (Microbiology)", institution: "Vinayaka Missions University", year: "2012" },
      { degree: "MDPM (Masters Diploma in Pharmaceutical Management)", institution: "IPER, Pune", year: "2004" },
      { degree: "MBA (Personnel)", institution: "Baroda Productivity Council / Newport University", year: "2000" },
      { degree: "B.Sc. (Microbiology)", institution: "Gujarat University", year: "1996" },
    ],
  },
};
