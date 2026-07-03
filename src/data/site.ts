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

export const externalLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/marysmakings?igsh=cnpyOW1wZXdrbG40',
  },
  { label: 'Etsy', href: 'https://www.etsy.com/' },
  { label: 'TikTok', href: 'https://www.tiktok.com/' },
  { label: 'Pinterest', href: 'https://www.pinterest.com/' },
  { label: 'YouTube', href: 'https://www.youtube.com/' },
  { label: 'Facebook', href: 'https://www.facebook.com/' },
] as const;
