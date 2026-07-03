import { navItems } from '../data/site';

export function HomePage() {
  return (
    <section className="homePage" aria-labelledby="home-title">
      <div className="homeIntro">
        <p className="homeEyebrow">Art, story, making, and mossy little trails.</p>
        <h1 id="home-title">Mary's Makings</h1>
        <p>
          Handmade pieces, gathering notes, shop updates, and the Mossypost journal all in one
          place.
        </p>
      </div>

      <nav className="homeLinkGrid" aria-label="Homepage sections">
        {navItems.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </section>
  );
}
