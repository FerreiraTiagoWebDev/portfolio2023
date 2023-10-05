import { IWorkProjectsItem } from "src/types/IWorkProjectsItem";

export const JAIMY_PROJECTS: IWorkProjectsItem[] = [
  {
    id: 1,
    externalHref: "https://www.jaimy.be/",
    name: "Jaimy.be",
    privacy: "public",
  },
  {
    id: 2,
    externalHref: "https://pro.jaimy.be/fr",
    name: "Pro.jaimy.be",
    privacy: "public",
  },
  {
    id: 3,
    externalHref:
      "https://play.google.com/store/apps/details?id=be.jaimy.fieldserviceapp",
    name: "Mobile App",
    privacy: "public",
  },
  {
    id: 4,
    externalHref: "#",
    name: "Backoffice",
    privacy: "private",
  },
];
export const FIXXER_PROJECTS: IWorkProjectsItem[] = [
  {
    id: 1,
    externalHref: "https://fixxer.eu",
    name: "Fixxer.eu",
    privacy: "public",
  },
  {
    id: 2,
    externalHref: "#",
    name: "a.s.r. Admin",
    privacy: "private",
  },
  {
    id: 3,
    externalHref: "#",
    name: "a.s.r. Trader",
    privacy: "private",
  },
  {
    id: 4,
    externalHref: "#",
    name: "Form Builder",
    privacy: "private",
  },
];

export const WORK_PROJECTS: IWorkProjectsItem[] =
  JAIMY_PROJECTS.concat(FIXXER_PROJECTS);
