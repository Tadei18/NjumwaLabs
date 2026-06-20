// Glossary terms — definition-first content that AI engines cite heavily.
// Each term links to a related service pillar where relevant.

export type Term = {
  slug: string;
  term: string;
  short: string; // one-line definition (used in index + meta)
  body: string[]; // paragraphs (definition-first)
  related?: string; // pillar slug
  category: string; // grouping label
};

export const glossary: Term[] = [
  {
    slug: "x-plus-plus",
    term: "X++",
    short:
      "X++ is the object-oriented programming language used to customize and extend Microsoft Dynamics 365 Finance & Operations.",
    body: [
      "X++ is the object-oriented programming language used to develop, customize and extend Microsoft Dynamics 365 Finance & Operations (and its predecessor, Dynamics AX). It combines language features similar to C# and Java with direct, first-class access to the database and the application's data model.",
      "Developers use X++ to build custom tables, forms, classes and data entities, and to extend standard behaviour through the extension framework and the Chain of Command pattern — adding logic without overlaying or breaking Microsoft's code, which keeps the system upgrade-safe.",
    ],
    related: "dynamics-365-finance-operations",
    category: "Dynamics 365",
  },
  {
    slug: "chain-of-command",
    term: "Chain of Command (CoC)",
    short:
      "Chain of Command is a D365 F&O extension pattern that wraps standard methods so you can add logic without breaking the upgrade path.",
    body: [
      "Chain of Command (CoC) is an extensibility pattern in Dynamics 365 Finance & Operations that lets developers 'wrap' a standard method — running custom logic before and after it, and calling the original via next — without overlaying Microsoft's source code.",
      "Because the standard code is never modified, customizations built with Chain of Command survive Microsoft's continuous 'one version' updates. It is the recommended, upgrade-safe alternative to the older overlayering approach.",
    ],
    related: "dynamics-365-finance-operations",
    category: "Dynamics 365",
  },
  {
    slug: "data-management-framework",
    term: "Data Management Framework (DMF)",
    short:
      "The Data Management Framework is the D365 F&O toolset for importing, exporting and migrating data using data entities and data packages.",
    body: [
      "The Data Management Framework (DMF) is the tooling in Dynamics 365 Finance & Operations used to import, export and migrate data at scale. It works through data entities — reusable, de-normalized views over the underlying tables — and data projects that batch many entities together.",
      "DMF is central to a go-live: it's how master data and historical transactions are migrated from legacy systems during cutover, with staging tables that let you validate and clean data before it lands in the live tables.",
    ],
    related: "dynamics-365-finance-operations",
    category: "Dynamics 365",
  },
  {
    slug: "electronic-reporting",
    term: "Electronic Reporting (ER)",
    short:
      "Electronic Reporting is a configurable D365 F&O engine for producing documents and regulatory formats without code.",
    body: [
      "Electronic Reporting (ER) is a configuration-driven engine in Dynamics 365 Finance & Operations for generating outbound documents and regulatory formats — invoices, payment files, tax declarations — through configurable formats rather than custom code.",
      "Because formats are data, not code, ER makes it easier to adapt to changing local compliance requirements across countries without redeploying the application.",
    ],
    related: "dynamics-365-finance-operations",
    category: "Dynamics 365",
  },
  {
    slug: "rag",
    term: "RAG (Retrieval-Augmented Generation)",
    short:
      "RAG is a technique that grounds an AI model's answers in your own documents, so it responds from real, retrievable facts instead of guessing.",
    body: [
      "Retrieval-Augmented Generation (RAG) is a technique that connects a large language model to an external knowledge source — your documents, policies, product data — at answer time. The system retrieves the most relevant passages and feeds them to the model as context, so the answer is grounded in your real content.",
      "RAG is how a trustworthy AI chatbot or internal copilot is built: it dramatically reduces hallucination, lets answers cite sources, and means the assistant stays current as your documents change — without retraining the model.",
    ],
    related: "ai-automation",
    category: "AI & automation",
  },
  {
    slug: "ai-agent",
    term: "AI agent",
    short:
      "An AI agent is software that uses an AI model to take actions toward a goal — answering, qualifying, booking or updating systems — not just generating text.",
    body: [
      "An AI agent is software that pairs a large language model with tools and a goal, so it can take actions rather than only produce text. A support agent might answer a question, qualify the lead, book a meeting and log the result in your CRM — autonomously, with human handoff when needed.",
      "Agents are what make AI automation useful in a business: they connect the model to your real systems (calendar, CRM, helpdesk, WhatsApp) so work actually gets done.",
    ],
    related: "ai-automation",
    category: "AI & automation",
  },
  {
    slug: "workflow-automation",
    term: "Workflow automation",
    short:
      "Workflow automation connects your apps so repetitive, multi-step tasks run themselves — moving data and triggering actions without manual effort.",
    body: [
      "Workflow automation is the practice of connecting your tools — CRM, email, spreadsheets, helpdesk, accounting — so that repetitive, rules-based tasks run automatically. When something happens in one system, the workflow moves data and triggers the next action across the others.",
      "It's typically built with platforms like n8n, Make or Zapier, or with custom code for more complex logic. The result is less manual data entry, fewer errors, and systems that stay in sync.",
    ],
    related: "ai-automation",
    category: "AI & automation",
  },
  {
    slug: "query-optimization",
    term: "Query optimization",
    short:
      "Query optimization is the process of making database queries run faster — through indexing, rewriting queries and analyzing execution plans.",
    body: [
      "Query optimization is the work of making database queries return results faster and use fewer resources. It usually starts with analyzing the execution plan — the database's step-by-step strategy for a query — to find slow operations like full table scans.",
      "Common fixes include adding or reshaping indexes, rewriting inefficient queries, and improving the schema. A single well-placed index can turn an eight-second report into a sub-second one, speeding up everything built on the database.",
    ],
    related: "database-administration",
    category: "Databases",
  },
  {
    slug: "high-availability",
    term: "High availability (HA)",
    short:
      "High availability is database and system design that keeps services running with minimal downtime, using replication, clustering and automatic failover.",
    body: [
      "High availability (HA) describes designing a system — often a database — so it keeps running with little or no downtime, even when a component fails. It relies on redundancy: replication keeps copies of the data, and clustering with automatic failover promotes a standby when the primary goes down.",
      "For a business, HA is what prevents a single server failure from becoming an expensive outage that takes the whole application offline.",
    ],
    related: "database-administration",
    category: "Databases",
  },
  {
    slug: "core-web-vitals",
    term: "Core Web Vitals",
    short:
      "Core Web Vitals are Google's user-experience metrics — LCP, INP and CLS — that measure loading, interactivity and visual stability, and feed into rankings.",
    body: [
      "Core Web Vitals are a set of real-world performance metrics Google uses to measure user experience: Largest Contentful Paint (LCP, loading), Interaction to Next Paint (INP, responsiveness) and Cumulative Layout Shift (CLS, visual stability).",
      "The targets are LCP under 2.5s, INP under 200ms and CLS under 0.1. They're part of Google's ranking system, so good Core Web Vitals help a site both rank and convert.",
    ],
    related: "web-development",
    category: "Web",
  },
];

export const glossaryBySlug = (slug: string) => glossary.find((t) => t.slug === slug);
