import { navItems, routes, SITE_TITLE } from '../data/site';

export function Header() {
  return (
    <header className="siteHeader" aria-label="Site header">
      <a className="siteBrand" href={routes.home} aria-label={`${SITE_TITLE} home`}>
        {SITE_TITLE}
      </a>

      <nav className="siteNav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a className="navButton" href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
