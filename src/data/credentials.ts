// Verified Microsoft & other certifications (from the owner's CV). Used by the
// CredentialsBand component and the Person JSON-LD. Do not embellish beyond this.

export type Cert = { name: string; short: string; by?: string };

export const credentialGroups: { id: string; label: string; items: Cert[] }[] = [
  {
    id: "expert",
    label: "Solution Architect Expert",
    items: [
      { name: "Microsoft Certified: Dynamics 365 Finance and Operations Apps Solution Architect Expert", short: "D365 F&O Solution Architect Expert" },
      { name: "Microsoft Certified: Azure Solutions Architect Expert", short: "Azure Solutions Architect Expert" },
      { name: "Microsoft Certified: Power Platform Solution Architect Expert", short: "Power Platform Solution Architect Expert" },
    ],
  },
  {
    id: "associate",
    label: "Associate",
    items: [
      { name: "Microsoft Certified: Dynamics 365 Finance and Operations Apps Developer Associate", short: "D365 F&O Developer Associate" },
      { name: "Microsoft Certified: Power Platform Developer Associate", short: "Power Platform Developer Associate" },
      { name: "Microsoft Certified: Azure Administrator Associate", short: "Azure Administrator Associate" },
      { name: "Microsoft Certified: Power BI Data Analyst Associate", short: "Power BI Data Analyst Associate" },
      { name: "Microsoft Certified: Fabric Analytics Engineer Associate", short: "Fabric Analytics Engineer Associate" },
    ],
  },
  {
    id: "ai",
    label: "AI, Data & Foundations",
    items: [
      { name: "Microsoft Certified: AI Business Professional", short: "AI Business Professional", by: "Microsoft" },
      { name: "Career Essentials in Generative AI", short: "Generative AI (Microsoft & LinkedIn)", by: "Microsoft and LinkedIn" },
      { name: "Machine Learning Specialization", short: "ML Specialization (DeepLearning.AI / Stanford)", by: "DeepLearning.AI and Stanford University" },
      { name: "CS50: Introduction to Programming with Python", short: "CS50 Python (Harvard / edX)", by: "Harvard University (edX)" },
    ],
  },
];

// All certs flattened — for Person schema hasCredential.
export const allCerts = credentialGroups.flatMap((g) => g.items);

// Optional public verification profile (Credly / Microsoft Learn). Leave empty
// to omit the link — never fake it.
export const verificationUrl = "";

export const credentialsHeadline =
  "Microsoft-certified across Dynamics 365, Azure & the Power Platform — including three Solution Architect Expert certifications.";
