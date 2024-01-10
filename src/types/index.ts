import { Icon } from "@/components/icons";

export interface Link {
  name: string;
  href: string;
  Icon?: Icon;
  external?: boolean;
  disabled?: boolean;
}

export interface Address {
  street: string;
  city: string;
  region: string;
  postalCode: string;
  country: string;
}

export interface Contact {
  telephone: string;
}

export interface FooterSection {
  Icon?: Icon;
  title?: string;
  links: any[];
}

export interface SiteConfig {
  name: string;
  shortName?: string;
  description: string;
  url: string;
  ogImage?: string;
  Icon?: Icon;
  links?: Link[];
  address?: Address;
  contact?: Contact;
}

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
  items?: NavItem[];
  content?: NavItem[];
};

export type MainNavItem = NavItem;

export type MarketingConfig = {
  mainNav: MainNavItem[];
  footer?: {
    sections?: FooterSection[];
    copyYears?: string;
  };
};
