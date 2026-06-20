// Single source for author/byline info (E-E-A-T). Used by blog author boxes,
// bylines, the contact trust panel and Person schema.
import { site } from "@data/site";

export const author = {
  name: site.founder, // Crispus Martin Njumwa
  shortName: "Crispus",
  initials: "CN",
  title: "Microsoft-certified Dynamics 365 F&O technical consultant",
  bio: "Microsoft-certified Dynamics 365 Finance & Operations technical consultant (Solution Architect Expert ×3). I build software, AI automation, mobile apps and data systems for businesses worldwide.",
  photo: "/images/crispus-njumwa.jpg", // monogram fallback if missing
  links: {
    about: "/about/",
    linkedin: site.socials.linkedin,
  },
} as const;
