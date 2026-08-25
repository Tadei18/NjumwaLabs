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
  {
    slug: "copilot-studio",
    term: "Microsoft Copilot Studio",
    short:
      "Microsoft Copilot Studio is a low-code platform for building, managing and publishing AI agents that answer questions, use your business data and take actions.",
    body: [
      "Microsoft Copilot Studio is Microsoft's platform for building and managing AI agents. You describe what you want the agent to do in plain English, connect the knowledge it should answer from, add the tools it may use, test it in a panel beside the editor, and publish it to channels such as Microsoft Teams, Microsoft 365 Copilot, SharePoint, Power Pages or your own website.",
      "Agents built in Copilot Studio range from simple prompt-and-response assistants to fully autonomous agents that react to events without anyone prompting them. The core building blocks are instructions (the agent's role and boundaries), knowledge sources, tools, topics (scripted conversation paths) and triggers. It runs on the Power Platform and needs a Dataverse environment, and it bills by usage in Copilot Credits.",
      "Copilot Studio is also the orchestration layer beneath Microsoft's own products — Copilot in Dynamics 365 Finance & Operations, for example, is bound to a Copilot Studio agent that decides which tools to invoke for each prompt.",
    ],
    related: "ai-automation",
    category: "AI & automation",
  },
  {
    slug: "autonomous-agent",
    term: "Autonomous agent",
    short:
      "An autonomous agent is an AI agent that acts without being prompted — an event fires, and it decides what to do and does it within the guardrails you set.",
    body: [
      "An autonomous agent perceives events, makes decisions and executes tasks independently, rather than waiting for someone to type a request. It's defined by three things: triggers (what wakes it up — a schedule, a new email, a changed record), instructions (what it should do and why), and guardrails (what it must never do).",
      "The difference from ordinary automation is judgement. A rule-based automation follows a path someone drew in advance; an autonomous agent is given a goal and works out its own route, including for cases nobody scripted. In practice the most reliable designs split the work — the agent reasons and decides, while a deterministic flow performs the mechanical execution.",
      "Because an autonomous agent acts when nobody is watching, the security decisions matter more than the AI ones: validate that triggers are authentic, scope the agent's permissions tightly, keep humans in the loop for consequential actions, and log everything it does.",
    ],
    related: "ai-automation",
    category: "AI & automation",
  },
  {
    slug: "agentic-ai",
    term: "Agentic AI",
    short:
      "Agentic AI describes AI systems that pursue goals by taking actions in real systems — planning, using tools and adapting — rather than only generating text.",
    body: [
      "Agentic AI is the shift from AI that produces output to AI that produces outcomes. Instead of answering a question and stopping, an agentic system is given a goal, a set of tools and a set of boundaries, then plans a sequence of steps, calls the tools, checks the results and adapts.",
      "In a business context that usually means an AI system with its own identity and permissions inside your software — able to read records, invoke business logic and complete a task, with its actions recorded for audit. Microsoft's Dynamics 365 agents follow exactly this pattern: each runs under a dedicated agent user identity with its own security roles and an activity log.",
      "The practical implication is that agentic AI is a governance question as much as a technology one. Once software can act on your behalf, the important decisions are what it's allowed to do, who owns it, and how you would prove what it did.",
    ],
    related: "ai-automation",
    category: "AI & automation",
  },
  {
    slug: "model-context-protocol",
    term: "Model Context Protocol (MCP)",
    short:
      "MCP is an open standard that connects AI agents to data systems and business logic through a common interface, instead of bespoke APIs for every integration.",
    body: [
      "The Model Context Protocol (MCP) is an open standard for how AI agents get context from, and take actions in, other systems. Rather than building a custom integration for each agent and each application, an application exposes an MCP server, and any compatible agent platform can connect to it.",
      "For businesses the practical benefit is reuse and consistency: the same agent can work across systems, the same system can serve many agents, and data access, permissions and auditability follow one pattern rather than a dozen. Microsoft's Dynamics 365 ERP MCP server, for example, lets agents read and write data, drive application forms and invoke business logic — with everything scoped by the agent's security role, so it only ever sees what its role allows.",
      "MCP servers can be added as tools inside Microsoft Copilot Studio, which is how an agent gains a whole application's capabilities in a single connection.",
    ],
    related: "ai-automation",
    category: "AI & automation",
  },
  {
    slug: "generative-orchestration",
    term: "Generative orchestration",
    short:
      "Generative orchestration is an AI planning layer that interprets a request, breaks it into steps, and chooses which tools and knowledge to use to fulfil it.",
    body: [
      "Generative orchestration is the large-language-model-driven planning layer in Microsoft Copilot Studio. It interprets what a user actually wants, decomposes complex or multi-part requests, selects the right tools, topics, knowledge sources or other agents, and executes a multi-step plan with guardrails for safety and compliance.",
      "It's the difference between an agent that matches your message to a pre-written conversation path and one that composes its own route. With generative orchestration enabled, an agent can handle a request that combines several intents, and can respond autonomously to events rather than only to typed messages.",
      "It isn't always on by default. In Dynamics 365 Finance & Operations, for instance, generative orchestration is supported for the Copilot agent but disabled unless an administrator turns it on — typically when the agent has been extended with new capabilities that need it.",
    ],
    related: "ai-automation",
    category: "AI & automation",
  },
  {
    slug: "copilot-sidecar",
    term: "Copilot sidecar (D365)",
    short:
      "The Copilot sidecar is the chat pane that opens beside a Dynamics 365 Finance & Operations page, giving users a natural-language assistant in context.",
    body: [
      "In Dynamics 365 Finance & Operations, the *sidecar* is the pane that opens on the right-hand side of a page when a user selects the Copilot button. Microsoft describes it as the primary Copilot interface in finance and operations apps: a natural-language conversation that runs alongside your work rather than a separate place you navigate to.",
      "Behind it sits a Copilot Studio agent named 'Copilot for finance and operations apps', deployed into the Dataverse environment linked to the F&O environment through Power Platform Integration. When a user types a prompt, Copilot Studio interprets the intent, decides which tools or topics to invoke, runs them, and returns an answer in plain language.",
      "Out of the box the sidecar's generative help and guidance feature is grounded in Microsoft's public documentation rather than your own records — it searches the learn.microsoft.com domain and composes an answer with citations. Administrators can extend it with custom knowledge sources in Copilot Studio so it can also answer from your own documents and data.",
    ],
    related: "dynamics-365-finance-operations",
    category: "Dynamics 365",
  },
];

export const glossaryBySlug = (slug: string) => glossary.find((t) => t.slug === slug);
