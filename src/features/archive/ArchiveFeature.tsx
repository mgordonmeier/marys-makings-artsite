import { archiveFeature } from '../../data/archiveFeature';

type ArchiveFeatureProps = {
  previousPath?: string;
  nextPath?: string;
};

export function ArchiveFeature({ previousPath, nextPath }: ArchiveFeatureProps) {
  const hasPagination = Boolean(previousPath || nextPath);

  return (
    <>
      <section className="homeVerse" aria-label={archiveFeature.verse.ariaLabel}>
        <strong>{archiveFeature.verse.title}</strong>
        {archiveFeature.verse.lines.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </section>

      <section id="about" className="aboutSection" aria-labelledby="about-title">
        <h2 id="about-title">{archiveFeature.heading}</h2>

        {hasPagination ? (
          <nav className="archivePagination" aria-label="Pagination">
            {previousPath ? (
              <a className="archivePageLink" href={previousPath}>
                <span aria-hidden="true">&lt;- </span>Previous Page
              </a>
            ) : (
              <span />
            )}

            {nextPath ? (
              <a className="archivePageLink" href={nextPath}>
                Next Page<span aria-hidden="true"> -&gt;</span>
              </a>
            ) : (
              <span />
            )}
          </nav>
        ) : null}

        <p>{archiveFeature.paragraphs[0]}</p>

        <figure>
          <img
            src={archiveFeature.image.src}
            alt={archiveFeature.image.alt}
            loading="lazy"
            decoding="async"
          />
        </figure>

        <p>{archiveFeature.paragraphs[1]}</p>
      </section>
    </>
  );
}
