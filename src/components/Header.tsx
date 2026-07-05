import { useState } from 'react';
import { navItems, routes, SITE_TITLE } from '../data/site';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="siteHeader" aria-label="Site header">
      <a className="siteBrand" href={routes.home} aria-label={`${SITE_TITLE} home`}>
        {SITE_TITLE}
      </a>

      <button
        aria-controls="primary-navigation"
        aria-expanded={isMenuOpen}
        className="navMenuButton"
        onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
        type="button"
      >
        <span aria-hidden="true">✦</span>
        Menu
      </button>

      <nav
        className={isMenuOpen ? 'siteNav isOpen' : 'siteNav'}
        id="primary-navigation"
        aria-label="Primary navigation"
      >
        {navItems.map((item) => (
          <a className="navButton" href={item.href} key={item.href} onClick={() => setIsMenuOpen(false)}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
