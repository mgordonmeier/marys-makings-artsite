export const SITE_TITLE = "Mary's Makings";

export const routes = {
  home: '/',
  collections: '/collections/',
  shop: '/shop/',
  events: '/events/',
  contact: '/contact/',
  mossypost: '/mossypost/',
  mature: '/mature/',
  about: '/about/',
} as const;

export const navItems = [
  { label: 'Collections', href: routes.collections },
  { label: 'Shop', href: routes.shop },
  { label: 'Events', href: routes.events },
  { label: 'Contact', href: routes.contact },
  { label: 'Mossypost', href: routes.mossypost },
  { label: '18+ Mature Content', href: routes.mature },
] as const;
