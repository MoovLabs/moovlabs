import type { LocalizedString } from './common';

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: LocalizedString;
  year: string;
  description: LocalizedString;
  longDescription: LocalizedString;
  image: string;
  tags: string[];
  technologies: string[];
  challenge: LocalizedString;
  solution: LocalizedString;
  result: LocalizedString;
  url?: string;
  color?: string;
}
