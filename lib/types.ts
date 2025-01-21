export type Project = {
  id: number;
  Title: string;
  Tag: Tags;
  Description: string;
  Stack: number[];
  Images: string[];
  Details: string;
  img: string;
  Link: string;
  Github: string;
};

export type Tags = "Static" | "Full-Stack" | "Frontend" | "Other";
