import { IWorkProjectsItem } from "src/types/IWorkProjectsItem";

export const JAIMY_PROJECTS: IWorkProjectsItem[] = [
  {
    id: 1,
    externalHref: "https://www.jaimy.be/",
    name: "Jaimy.be",
    privacy: "public",
    company: "Jaimy",
    impact: ["Refactor", "Maintenance", "Development"],
  },
  {
    id: 2,
    externalHref: "https://pro.jaimy.be/fr",
    name: "Pro.jaimy.be",
    privacy: "public",
    company: "Jaimy",
    impact: ["Maintenance", "Development"],
  },
  {
    id: 3,
    externalHref:
      "https://play.google.com/store/apps/details?id=be.jaimy.fieldserviceapp",
    name: "Mobile App",
    privacy: "public",
    company: "Jaimy",
    impact: ["Maintenance", "Development"],
  },
  {
    id: 4,
    externalHref: "#",
    name: "Backoffice",
    privacy: "private",
    company: "Jaimy",
    impact: ["Maintenance", "Development"],
  },
];
export const FIXXER_PROJECTS: IWorkProjectsItem[] = [
  {
    id: 5,
    externalHref: "https://fixxer.eu",
    name: "Fixxer.eu",
    privacy: "public",
    company: "Fixxer",
    impact: ["Implement", "Maintenance", "Development"],
  },
  {
    id: 6,
    externalHref: "#",
    name: "a.s.r. Admin",
    privacy: "private",
    company: "Fixxer",
    impact: ["Implement", "Maintenance", "Development"],
  },
  {
    id: 7,
    externalHref: "#",
    name: "a.s.r. Trader",
    privacy: "private",
    company: "Fixxer",
    impact: ["Implement", "Maintenance", "Development"],
  },
  {
    id: 8,
    externalHref: "#",
    name: "Form Builder",
    privacy: "private",
    company: "Fixxer",
    impact: ["Implement", "Maintenance", "Development"],
  },
];

export const WORK_PROJECTS: IWorkProjectsItem[] =
  JAIMY_PROJECTS.concat(FIXXER_PROJECTS);
