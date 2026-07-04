import { ArtworkGallery } from '../components/ArtworkGallery';

export function HomePage() {
  return (
    <section className="homePage" aria-label="Mary's Makings home">
      <div className="homeIntro">
        <p className="homeEyebrow">Art, story, making, and mossy little trails.</p>
        <p>
          Handmade pieces, gathering notes, shop updates, and the Mossypost journal all in one
          place.
        </p>
      </div>

      <ArtworkGallery label="Featured artwork" />
    </section>
  );
}
