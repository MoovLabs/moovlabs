import type { LocalizedString } from './common';

export interface ServiceItem {
  title: LocalizedString;
  description: LocalizedString;
}

export interface ServiceCategory {
  id: string;
  slug: string;
  title: LocalizedString;
  description: LocalizedString;
  icon: string;
  items: ServiceItem[];
}
