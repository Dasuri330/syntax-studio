export interface AboutHero {
  title: string;
  highlight: string;
  subtitle: string;
  description: string;
  tags: string[];
}

export interface AboutIntroduction {
  paragraphs: string[];
}

export interface AboutProfile {
  basedIn: string;
  focus: string;
  stack: string[];
  interests: string[];
  certifications: string[];
}

export interface AboutJourneyItem {
  number: string;
  icon: string;
  title: string;
  description: string;
  year?: string;
}

export interface AboutCapability {
  icon: string;
  title: string;
  description: string;
}

export interface AboutToolboxGroup {
  icon: string;
  category: string;
  technologies: string[];
}

export interface AboutPrinciple {
  title: string;
  description: string;
  icon?: string;
}

export interface AboutExploringItem {
  icon: string;
  title: string;
  description: string;
}

export interface AboutStat {
  icon: string;
  value: string;
  label: string;
}

export interface AboutCta {
  eyebrow: string;
  title: string;
  highlight: string;
  button: string;
}

export interface AboutData {
  hero: AboutHero;
  introduction: AboutIntroduction;
  profile: AboutProfile;
  journey: AboutJourneyItem[];
  capabilities: AboutCapability[];
  toolbox: AboutToolboxGroup[];
  principles: AboutPrinciple[];
  exploring: AboutExploringItem[];
  stats: AboutStat[];
  cta: AboutCta;
}
