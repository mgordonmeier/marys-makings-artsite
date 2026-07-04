import { externalLinks, routes, SITE_TITLE } from '../data/site';

export function Footer() {
  return (
    <footer className="siteFooter" aria-label="Site footer">
      <a className="siteBrand siteFooterBrand" href={routes.home} aria-label={`${SITE_TITLE} home`}>
        {SITE_TITLE}
      </a>

      <nav className="homeLinkGrid" aria-label="External links">
        {externalLinks.map((item) => (
          <a href={item.href} key={item.href} rel="noreferrer" target="_blank">
            {item.label}
          </a>
        ))}
      </nav>
    </footer>
  );
}

