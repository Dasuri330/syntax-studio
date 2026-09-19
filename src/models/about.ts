export interface AboutStat {
  value: string;
  label: string;
}

export interface About {
  sectionNumber: string;
  eyebrow: string;
  title: string;
  description: string;
  secondaryDescription: string;
  stats: AboutStat[];
}
