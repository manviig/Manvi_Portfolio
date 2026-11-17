export type DeepCardLabel = "Decision" | "Broke";

export interface DeepCard {
  title: string;
  text: string;
  label?: DeepCardLabel;
  wide?: boolean;
  /** Renders the rules / NLP split bar under the text. */
  blend?: { rules: number; nlp: number };
}

export interface DeepGroup {
  title: string;
  columns: 1 | 2 | 3;
  cards: DeepCard[];
}

export interface DiagramNode {
  x: number;
  y: number;
  w: number;
  h: number;
  rx: number;
  title: string;
  sub?: string;
  small?: boolean;
}

export interface Diagram {
  id: string;
  label: string;
  nodes: DiagramNode[];
  arrows: string[];
}

export interface Tile {
  title: string;
  text: string;
}

export interface ProjectLink {
  label: string;
  href: string;
  primary?: boolean;
}

export type ProjectTone = "nova" | "portal" | "wanderlust";

export interface Project {
  id: string;
  tone: ProjectTone;
  kicker: string;
  name: string;
  badge: string;
  summary: string;
  problem: string;
  role: string;
  stack: string[];
  links: ProjectLink[];
  note?: string;
  caption?: string;
  diagram?: Diagram;
  tiles: Tile[];
  deepDive: DeepGroup[];
}

export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  stack: string[];
  summary: string;
  highlights: string[];
  flow: string[];
}

export interface SkillGroup {
  title: string;
  items: string[];
  highlight?: boolean;
}

export interface Credential {
  label: string;
  title: string;
  text: string;
}

export interface Fact {
  label: string;
  title: string;
  detail: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
  external?: boolean;
  copyable?: boolean;
}
