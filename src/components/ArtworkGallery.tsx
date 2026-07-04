import { useState } from 'react';
import couchPainting from '../img/IMG_0586.jpeg';
import beachPainting from '../img/IMG_0602.jpeg';
import villagePainting from '../img/IMG_0691.jpeg';

type GalleryImage = {
  src: string;
  alt: string;
  frame: 'parlor' | 'sun' | 'village';
};

const galleryImages: GalleryImage[] = [
  {
    src: couchPainting,
    alt: 'Painting of two people sitting on a purple couch sharing a small magical moment',
    frame: 'parlor',
  },
  {
    src: beachPainting,
    alt: 'Bright beach painting with two figures relaxing under an umbrella',
    frame: 'sun',
  },
  {
    src: villagePainting,
    alt: 'Painting of a colorful village with a sculpture and flowers in the foreground',
    frame: 'village',
  },
];

type ArtworkGalleryProps = {
  isInteractive?: boolean;
  label: string;
  limit?: number;
};

export function ArtworkGallery({ isInteractive = true, label, limit }: ArtworkGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | undefined>();
  const images = limit ? galleryImages.slice(0, limit) : galleryImages;

  return (
    <>
      <div className="homeGallery" aria-label={label}>
        {images.map((image) => (
          <figure className={`homeGalleryFrame is-${image.frame}`} key={image.src}>
            {isInteractive ? (
              <button
                aria-label={`Enlarge artwork: ${image.alt}`}
                className="homeGalleryOpen"
                onClick={() => setSelectedImage(image)}
                type="button"
              >
                <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
              </button>
            ) : (
              <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
            )}
          </figure>
        ))}
      </div>

      {isInteractive && selectedImage ? (
        <div
          aria-label="Enlarged artwork"
          aria-modal="true"
          className="galleryLightbox"
          onClick={() => setSelectedImage(undefined)}
          role="dialog"
        >
          <button
            aria-label="Close enlarged artwork"
            className={`galleryLightboxFrame is-${selectedImage.frame}`}
            onClick={(event) => {
              event.stopPropagation();
              setSelectedImage(undefined);
            }}
            type="button"
          >
            <img src={selectedImage.src} alt={selectedImage.alt} />
          </button>
        </div>
      ) : null}
    </>
  );
}
