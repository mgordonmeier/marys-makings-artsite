import { routes, SITE_TITLE } from '../data/site';

export function Header() {
  return (
    <header className="siteHeader" aria-label="Site header">
      <a className="siteTitle" href={routes.home} aria-label={`${SITE_TITLE} home`}>
        {SITE_TITLE}
      </a>

      <div className="headerActions">
        <nav className="siteNav" aria-label="Primary navigation">
          <a href={routes.about}>About</a>
        </nav>
        <a className="learnButton" href={routes.about}>
          Learn more
        </a>
      </div>
    </header>
  );
}
