/** Shared shape both locale dictionaries implement. */

export interface Metric {
  value: number;
  suffix?: string;
  label: string;
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  problem: string;
  approach: string;
  impact: string;
  tech: string[];
  metrics?: Metric[];
  links: { live?: string; repo?: string; play?: string; company?: string };
  status?: 'building' | 'shipped';
  year: string;
  role: string;
  featured: boolean;
  anchor?: boolean;
}

export interface Role {
  company: string;
  url?: string;
  role: string;
  dates: string;
  type: string;
  bullets: string[];
  tags?: string[];
}

export interface Community {
  org: string;
  dates: string;
  detail: string;
}

export interface Content {
  meta: { title: string; description: string; ogAlt: string };
  nav: { work: string; about: string; skills: string; experience: string; community: string; contact: string };
  a11y: { skip: string; motionOn: string; motionOff: string; switchLang: string };
  hero: {
    status: string;
    greeting: string;
    name: string;
    roles: string[];
    headline: string;
    headlineAccent: string;
    valueProp: string;
    ctaWork: string;
    ctaCv: string;
    scrollHint: string;
  };
  work: {
    eyebrow: string;
    title: string;
    intro: string;
    viewLive: string;
    viewCode: string;
    viewApp: string;
    viewCompany: string;
    privateNote: string;
    buildingLabel: string;
    architectureTitle: string;
    architectureNote: string;
    projects: Project[];
  };
  about: { eyebrow: string; title: string; paragraphs: string[]; highlights: { value: string; label: string }[] };
  skills: { eyebrow: string; title: string; intro: string; groups: { label: string; items: string[] }[] };
  experience: { eyebrow: string; title: string; intro: string; present: string; roles: Role[] };
  community: {
    eyebrow: string;
    title: string;
    items: Community[];
    educationTitle: string;
    school: string;
    degree: string;
    dates: string;
    detail: string;
    projects: { name: string; desc: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    lead: string;
    ctaEmail: string;
    ctaCv: string;
    links: { label: string; href: string; kind: 'github' | 'linkedin' | 'email' | 'phone' }[];
  };
  footer: { builtWith: string; lastUpdated: string; rights: string };
}
