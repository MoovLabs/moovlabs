import type { LocalizedString } from './common';

export interface TeamMember {
  id: string;
  firstName: string;
  lastName: string;
  role: LocalizedString;
  bio: LocalizedString;
  image?: string;
  socials?: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    website?: string;
  };
}
