export type IImpact = "Implement" | "Refactor" | "Maintenance" | "Development";

export type IWorkProjectsItem = {
  id: number;
  externalHref: string;
  name: string;
  privacy: "private" | "public";
  company: string;
  impact: IImpact[];
};
