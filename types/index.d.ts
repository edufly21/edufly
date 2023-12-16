interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
}

interface NavItem {
  title: string;
  href: string;
  content?: NavListItem[];
}

interface NavListItem {
  title: string;
  href: string;
  items?: NavItem[];
  new?: boolean;
}
