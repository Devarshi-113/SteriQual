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
    tagline: "Independent Specialist Advisory in Quality, Compliance & Sterility Assurance",
    headlineTag: "Independent Specialist Advisory",
    subheadline: "Independent pharmaceutical advisory for manufacturers for global regulated market. Providing practical quality governance, sterility assurance (EU-GMP Annex 1), and inspection preparedness.",
    disclaimer: "SteriQual is an independent advisory practice founded by industry veteran Pinkal Dave. All operational metrics, audit tallies, and career benchmarks reflect the 30-year professional leadership track record of the Principal Consultant across premier pharmaceutical manufacturers.",
  },

  contact: {
    founderName: "Pinkal Dave",
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
    { value: "30", label: "Years, Founder's Quality Leadership", sublabel: "Since August 1996" },
    { value: "30+", label: "Highly Regulated Audits", sublabel: "Including USFDA, EMA, Canada and TGA" },
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

  // Core Practice Pillars: All 11 Services from Comprehensive Advisory Catalogue
  servicePillars: [
    {
      id: "sterility-assurance",
      number: "01",
      name: "Sterility Assurance",
      badge: "Aseptic Operations & Annex 1",
      headline: "Absolute Sterility & Microbial Control in Critical Environments",
      description: "Achieving sterility and robust microbial control across aseptic processing and terminal sterilization products.",
      icon: "shield-check",
      points: [
        "Aseptic Process Simulation (APS / Media Fill) Design: Comprehensive Protocol design, worst-case condition simulation, and regulatory remediation.",
        "Contamination Control Strategy (CCS): Holistic, lifecycle-based CCS development compliant with EU GMP Annex 1 across HVAC, cleanrooms, and disinfection.",
        "Cleanroom & Environmental Monitoring (EM): Design and troubleshooting of EM programs, data integrity alignment, alert/action limit rationalization, and excursion root-cause investigations.",
        "Sterilization Validation & Lifecycle Management: Technical support for moist heat, dry heat, depyrogenation tunnels, and isolator/RABS qualification.",
        "Bioburden & Endotoxin Control: Robust WFI and pure steam validations & monitoring design, cleaning validation programs, and endotoxin excursion troubleshooting.",
        "Smoke Studies (Airflow Visualization): Turnkey project management from Protocol design and execution video reviews to technical reporting and specialized operator training.",
        "Intervention Management & Risk Mitigation: FMEA-based evaluation of routine and non-routine interventions, engineering touchpoint minimization, and media fill simulation.",
        "Personnel Qualification & Cleanroom Behavior: Rigorous sterile gowning qualification, Grade A/B aseptic technique training, and continuous observational audits.",
      ],
      deliverables: [
        "Contamination Control Strategy (CCS) Dossier",
        "Aseptic Process Simulation (APS) Protocol",
        "Smoke Study Technical Review & Video Assessment",
        "EM Program & Limit Rationalization Dossier",
        "Sterile Gowning Qualification Matrix",
      ],
    },
    {
      id: "quality-management-system",
      number: "02",
      name: "Quality Management System (QMS)",
      badge: "Quality Governance",
      headline: "Agile, Audit-Ready Frameworks Driving Sustainable Compliance",
      description: "Building robust, agile, and audit-ready quality frameworks that drive sustainable compliance across the pharmaceutical lifecycle.",
      icon: "layers",
      points: [
        "End-to-End QMS Re-engineering: Designing, drafting, and harmonizing SOPs across Deviations, Change Controls, OOS/OOT investigations, and CAPA.",
        "Data Integrity Governance: Implementing robust frameworks across paper and computerized systems (21 CFR Part 11 and EU Annex 11), with audit-trail reviews.",
        "Advanced Root-Cause Analysis (RCA) Mentorship: Training cross-functional teams in Fishbone, 5 Whys, and FMEA to ensure permanent CAPA and eliminate repeat deviations.",
        "Product Quality Reviews (PQRs / APRs): Establishing streamlined systems for efficient data collection, statistical trending, and regulatory-compliant compilation.",
      ],
      deliverables: [
        "Harmonized Site QMS Standard Operating Procedures",
        "Corporate Data Governance & Audit Trail Policy",
        "Failure Investigation & RCA Playbooks",
        "Annual Product Review (PQR/APR) Frameworks",
      ],
    },
    {
      id: "six-quality-systems",
      number: "03",
      name: "The Six Quality Systems Compliance Model",
      badge: "FDA Systems Approach",
      headline: "Operationalizing FDA's Systems Approach for Site-Wide Compliance",
      description: "Operationalizing the FDA's modern quality systems approach to ensure holistic, multi-departmental site compliance.",
      icon: "cpu",
      points: [
        "Production System: Process validation, master batch record (BMR) design, and cleanroom floor compliance.",
        "Facilities & Equipment System: Equipment qualification, preventive maintenance schedules, and HVAC/clean utility integrity.",
        "Laboratory Control System: QC data reliability, method validation, instrument calibration, and sample integrity.",
        "Materials System: Vendor qualification, raw material testing, supply chain verification, and storage controls.",
        "Packaging & Labeling System: Line clearance protocols, reconciliation controls, and packaging error prevention.",
        "Data & Document System: Record lifecycle, traceability, and secure data archiving.",
        "System Maturity Audits: Gap assessments benchmarking site maturity against baseline FDA and global expectations.",
      ],
      deliverables: [
        "Six Systems Baseline Gap Assessment",
        "Production & Shop-Floor Governance Protocols",
        "QC Laboratory Control Verification Package",
        "Vendor Qualification & Supply Chain Standards",
      ],
    },
    {
      id: "audit-management-readiness",
      number: "04",
      name: "Audit Management & Readiness",
      badge: "Inspection Defense",
      headline: "Proactive Readiness & Front-Room/Back-Room War Room Mastery",
      description: "Turning inspection stress into competitive advantage through proactive readiness, mock audits, and flawless war-room execution.",
      icon: "building",
      points: [
        "Mock Regulatory Inspections: Unannounced-style audits benchmarked against USFDA, EU-MHRA, Health Canada, TGA, and ANVISA.",
        "Inspection War Room Architecture: Establishing communication protocols, SME coaching, and rapid document retrieval workflows.",
        "Audit Response & CAPA Formulation: Drafting scientifically sound, defensible responses to Form 483s, Warning Letters, and non-compliance findings.",
        "Global Customer Audit Management: Building partner confidence for multinational client and licensing audits through structured hosting strategies.",
      ],
      deliverables: [
        "Comprehensive Mock Audit Scorecard & Findings Dossier",
        "Inspection War Room & Front/Back-Room SOP",
        "SME Audit-Facing Coaching Guide",
        "Agency Audit Response & CAPA Roadmaps",
      ],
    },
    {
      id: "quality-excellence-improvement",
      number: "05",
      name: "Quality Excellence & Continuous Improvement",
      badge: "Operational Excellence",
      headline: "Transforming Quality from a Burden into a Core Business Asset",
      description: "Transforming quality from a regulatory obligation into a core business driver, cultural asset, and cost-saving engine.",
      icon: "trending-up",
      points: [
        "Quality Culture Transformation: Shifting mindsets from reactive compliance to proactive, behavior-based quality ownership across all tiers.",
        "Site Quality Index (QI) Enhancement: Implementing metric dashboards to elevate quality indices, eliminate QMS backlogs, and optimize cycle times.",
        "Cost of Quality (CoQ) Optimization: Reducing scrap, rework, unconfirmed OOS rates, and stability testing bottlenecks.",
        "Operational Streamlining & Harmonization: Standardizing multi-site quality systems and business processes across SAP/ERP quality modules.",
      ],
      deliverables: [
        "Site Quality Index (QI) Executive Dashboard",
        "Cost of Quality (CoQ) Reduction Blueprint",
        "Multi-Site QMS Harmonization Roadmap",
        "Behavior-Based Quality Metric Framework",
      ],
    },
    {
      id: "gxp-training-programs",
      number: "06",
      name: "Comprehensive GxP & Technical Training Programs",
      badge: "Workforce Capability",
      headline: "Behavior-Based Learning Bridging Regulations with Shop-Floor Execution",
      description: "Empowering workforces through practical, behavior-based learning that bridges regulatory expectations and daily shop-floor execution.",
      icon: "academic-cap",
      points: [
        "Customized cGMP & Regulatory Awareness Modules: Tailored curricula for operators, technicians, and senior leadership.",
        "Data Integrity & ALCOA+ Masterclasses: Practical training on data governance, electronic records, and audit-trail reviews.",
        "Audit-Facing & Front/Back-Room Coaching: Specialized training for SMEs on professional conduct and inspector question handling.",
        "Investigation & CAPA Root-Cause Workshops: Hands-on problem-solving using Fishbone diagrams, 5 Whys, and FMEA.",
        "Aseptic Practices Training: Rigorous training on personal hygiene, Grade A/B practices, RABS operations, and intervention management.",
      ],
      deliverables: [
        "Tiered cGMP & Annex 1 Training Curricula",
        "ALCOA+ Data Integrity Practical Workshops",
        "Front-Room SME Interrogation Coaching Kits",
        "Cleanroom & RABS Aseptic Practice Modules",
      ],
    },
    {
      id: "audit-remediation-turnaround",
      number: "07",
      name: "Audit Remediation & Compliance Turnaround",
      badge: "Enforcement Defense",
      headline: "Lifting Warning Letters, 483s & Turning Regulatory Vulnerabilities Around",
      description: "Transforming critical compliance vulnerabilities and regulatory enforcement actions into robust, sustainable operational systems.",
      icon: "file-text",
      points: [
        "Warning Letter & Form 483 Remediation: Rapid diagnostic evaluations and strategic roadmaps to lift agency citations and restore compliance.",
        "Comprehensive Compliance Gap Assessments: Deep-dive evaluations across manufacturing blocks, QC labs, and warehouse systems.",
        "CAPA Effectiveness Verification: Rigorous, metrics-driven verification protocols ensuring permanent resolution without repeat citations.",
        "Regulatory Commitment Management: Partnering with leadership to structure defensible milestone progress reports for USFDA, EU-MHRA, Canada, and TGA.",
      ],
      deliverables: [
        "Formal Form 483 / Warning Letter Response Dossier",
        "Prioritized Remediation Master Plan (RMP)",
        "CAPA Effectiveness Verification Protocols",
        "Periodic Regulatory Submission Updates",
      ],
    },
    {
      id: "regulatory-dossier-review",
      number: "08",
      name: "Regulatory Dossier Review",
      badge: "Regulatory Filings",
      headline: "Accelerating Market Approvals with Audit-Ready Dossiers",
      description: "Accelerating time-to-market with comprehensive, audit-ready technical dossiers tailored for stringent global health authorities.",
      icon: "document-search",
      points: [
        "CTD / ACTD Dossier Review: Technical evaluation of Common Technical Dossiers for global filings across diverse international markets.",
        "ANDA Module 3 Support: End-to-end review of Module 3 (CMC) and lifecycle maintenance of Abbreviated New Drug Applications.",
        "Technical Documentation Alignment: Rigorous verification of Batch Manufacturing Records (BMR), Master Formula Records (MFR), Process Validation, and Stability reports.",
        "Global Market Expansion Strategy: Tailoring compliance submissions for US (USFDA), Europe (EMA/MHRA), Canada, TGA (Australia), ANVISA (Brazil), and SAHPRA.",
      ],
      deliverables: [
        "CTD / ANDA Module 3 Gap Analysis Report",
        "BMR / MFR / Validation Documentation Alignment",
        "Pre-Submission Regulatory Compliance Package",
        "Health Authority Deficiency Response Strategy",
      ],
    },
    {
      id: "microbiology-laboratory-setup",
      number: "09",
      name: "Microbiology Laboratory & Contamination Control Setup",
      badge: "Laboratory Commissioning",
      headline: "Turnkey Micro Labs, Sterility Isolators & Contamination Control",
      description: "Building state-of-the-art microbiological laboratories and contamination-free sterile testing environments from the ground up.",
      icon: "flask",
      points: [
        "Greenfield & Existing Micro Lab Setup: Complete engineering, workflow design, and operational commissioning compliant with cGLP and pharmacopeias.",
        "Equipment Qualification & Method Validation: Turnkey support for Sterility Testing Isolators, Rapid Microbial Methods, Air Samplers, Autoclaves, and Incubators.",
        "Microbial Contamination Control Programs: Testing protocols for viable/non-viable environmental monitoring, water systems (WFI/Pure Steam), and bioburden/endotoxin tracking.",
        "Disinfectant Efficacy & Gowning Qualification: Sanitization qualification, coupon testing, and aseptic gowning behavior validation.",
      ],
      deliverables: [
        "Microbiology Laboratory Layout & Commissioning Blueprint",
        "Sterility Testing Isolator Qualification Protocol",
        "Disinfectant Efficacy Study Protocol & Summary",
        "Water System (WFI / Pure Steam) Validation Package",
      ],
    },
    {
      id: "equipment-qualification-csv",
      number: "10",
      name: "Equipment Qualification & Computer System Validation (CSV)",
      badge: "Engineering & Validation",
      headline: "V-Model DQ/IQ/OQ/PQ, Clean Utilities & 21 CFR Part 11 Compliance",
      description: "Ensuring seamless, audit-ready lifecycle validation of manufacturing hardware, cleanroom utilities, and computerized systems.",
      icon: "server",
      points: [
        "Complete V-Model Lifecycle (DQ, IQ, OQ, PQ): Comprehensive authoring and execution for URS, Design, Installation, Operational, and Performance Qualification.",
        "Critical Utilities & Facility Validation: Clean Utilities (WFI, Pure Steam, Clean Compressed Air), and HVAC (AHU zoning, pressure differentials, air changes).",
        "Computer System Validation (CSV) & Data Integrity: Validation of computerized systems, MES, laboratory instruments (HPLC, GC, LIMS), and ERP software under 21 CFR Part 11 & EU Annex 11.",
        "Re-qualification & Change Management: Risk-based periodic re-qualification schedules for modified or legacy manufacturing equipment.",
      ],
      deliverables: [
        "Validation Master Plan (VMP)",
        "Equipment DQ / IQ / OQ / PQ Protocols & Reports",
        "Clean Utilities (WFI, Pure Steam, HVAC) Qualification Dossiers",
        "21 CFR Part 11 & GAMP 5 CSV Validation Packages",
      ],
    },
    {
      id: "investigation-management-oos",
      number: "11",
      name: "Advanced Investigation Management & OOS/OOT Remediation",
      badge: "Failure Diagnostics",
      headline: "Permanent Root-Cause Elimination for Complex Deviations & OOS/OOT",
      description: "Transforming routine deviations and out-of-specification incidents into permanent, robust preventive quality controls.",
      icon: "search-circle",
      points: [
        "Deviation, Market Complaint, OOS & OOT Investigations: Specialized technical guidance for complex laboratory and manufacturing anomalies.",
        "Manufacturing Failure Root-Cause Analysis: Diagnostic deployment of Ishikawa (Fishbone) Diagrams, 5-Whys, FMEA, and Fault-Tree Analysis.",
        "CAPA Effectiveness Verification: Designing scientifically sound, verifiable preventive actions engineered to eliminate repeat deviations.",
        "Product Quality Troubleshooting: Scientific problem solving for yield variations, process robustness, and stability challenges across sterile and oral dosage forms.",
      ],
      deliverables: [
        "Out-of-Specification (OOS / OOT) Investigation Packages",
        "Advanced Root Cause Analysis (RCA) Diagnostic Reports",
        "Verifiable CAPA Design & Effectiveness Frameworks",
        "Product & Process Quality Remediation Summaries",
      ],
    },
  ] as ServicePillar[],

  // Emergency / Remediation Support Callout
  remediationCallout: {
    badge: "Urgent Regulatory Support",
    title: "Need urgent support for response to Form 483 observation, Warning Letter, or Imminent Audit?",
    description: "Senior Quality leadership steps in within 48 hours to evaluate health authority findings, structure scientifically sound CAPA responses, and manage regulatory commitments.",
    actionText: "Request Emergency Advisory",
  },

  // Engagement Models (from the brief) - Ordered: Strategic Advisory, Fractional Quality Support, Milestone-Driven, Agile Advisory
  engagementModels: [
    {
      title: "Your Extended Quality leadership Partner",
      badge: "Strategic Advisory",
      description: "Reserved senior advisory capacity providing scheduled reviews, rapid escalation support, and ongoing quality mentoring for site leadership.",
      features: [
        "Dedicated monthly advisory hours",
        "Scheduled steering reviews with senior leadership",
        "Priority turnaround for critical deviations & investigations",
        "Ongoing mentorship for QA managers and site heads",
      ],
    },
    {
      title: "Senior Quality leadership on flexible basis",
      badge: "Fractional Quality Support",
      description: "Intensive on-site diagnostic review of manufacturing blocks, cleanroom behaviours, QC laboratories, and documentation systems.",
      features: [
        "Agreed days on the manufacturing site",
        "Deep-dive in the agreed scope of work",
        "Advisory support to senior management",
        "Guidance on critical quality and compliance decisions.",
      ],
    },
    {
      title: "Defined Project",
      badge: "Milestone-Driven",
      description: "Specific scope with clearly defined milestones, deliverables, and completion criteria.",
      features: [
        "Agreed fixed scope and target deliverables",
        "Pre-defined timeline and milestones",
        "Comprehensive final review and documentation package",
        "Seamless handover to site quality team",
      ],
    },
    {
      title: "Remote Technical Advisory",
      badge: "Agile Advisory",
      description: "Flexible, off-site support for technical document review, regulatory dossier evaluation, and investigation mentoring.",
      features: [
        "Independent review of Quality Systems, procedures, and protocols",
        "Investigation troubleshooting and root-cause guidance",
        "Teleconsultation on urgent and critical quality issues",
        "Management reviews",
      ],
    },
  ] as EngagementModel[],

  // Founder Detailed Profile
  founder: {
    fullName: "Pinkal Dave",
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
