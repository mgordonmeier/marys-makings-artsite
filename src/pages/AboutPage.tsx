import { aboutPage } from '../data/about';

export function AboutPage() {
  return (
    <article className="aboutPage">
      <div className="aboutPageBody">
        <p>{aboutPage.intro}</p>

        <div className="aboutGallery">
          {aboutPage.images.map((image) => (
            <figure key={image.src}>
              <img src={image.src} alt={image.alt} />
            </figure>
          ))}
        </div>
      </div>
    </article>
  );
}

