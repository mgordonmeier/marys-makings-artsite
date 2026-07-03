import { ArtworkGallery } from '../components/ArtworkGallery';
import { externalLinks, SITE_TITLE } from '../data/site';

export function HomePage() {
  return (
    <section className="homePage" aria-labelledby="home-title">
      <div className="homeIntro">
        <p className="homeEyebrow">Art, story, making, and mossy little trails.</p>
        <p>
          Handmade pieces, gathering notes, shop updates, and the Mossypost journal all in one
          place.
        </p>
      </div>

      <ArtworkGallery label="Featured artwork" />

      <h1 className="homeLogo" id="home-title">
        {SITE_TITLE}
      </h1>

      <nav className="homeLinkGrid" aria-label="External links">
        {externalLinks.map((item) => (
          <a href={item.href} key={item.href} rel="noreferrer" target="_blank">
            {item.label}
          </a>
        ))}
      </nav>
    </section>
  );
}
