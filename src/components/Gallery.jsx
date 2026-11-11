import { useState, useCallback, useEffect } from 'react';
import { ZoomIn, X, ChevronLeft, ChevronRight, Images } from 'lucide-react';
import { galleryImages } from '../data/gallery';

function Lightbox({ images, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex);
  const total = images.length;

  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + total) % total),
    [total]
  );
  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose, prev, next]);

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="ചിത്ര ദർശനം"
      onClick={onClose}
    >
      <div
        className="lightbox__content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="lightbox__close"
          onClick={onClose}
          aria-label="അടയ്ക്കുക"
        >
          <X size={18} />
        </button>

        {total > 1 && (
          <>
            <button
              className="lightbox__nav lightbox__nav--prev"
              onClick={prev}
              aria-label="മുമ്പത്തെ ചിത്രം"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              className="lightbox__nav lightbox__nav--next"
              onClick={next}
              aria-label="അടുത്ത ചിത്രം"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        <img
          src={images[current].src}
          alt={images[current].caption || `Gallery image ${current + 1}`}
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  return (
    <section className="gallery" id="gallery" aria-label="ഫോട്ടോ ഗാലറി">
      <div className="gallery__inner">
        <div className="gallery__header reveal">
          <span className="section-label">Photo Gallery</span>
          <span className="section-accent" aria-hidden="true" />
          <h2 className="section-heading section-heading--red">
            ചിത്രങ്ങളിലൂടെ സംഘടനാ പ്രവർത്തനങ്ങൾ
          </h2>
        </div>

        <div className="gallery__grid" role="list">
          {galleryImages.length === 0 ? (
            <div className="gallery__empty" role="status">
              <div className="gallery__empty-icon">
                <Images size={48} strokeWidth={1} />
              </div>
              <p className="gallery__empty-text">
                ഗാലറിയിൽ ഇനിയും ചിത്രങ്ങൾ ചേർത്തിട്ടില്ല.
                <br />
                <code>src/data/gallery.js</code> ഫയൽ അപ്ഡേറ്റ് ചെയ്ത്
                ചിത്രങ്ങൾ ചേർക്കുക.
              </p>
            </div>
          ) : (
            galleryImages.map((img, index) => (
              <div
                key={img.id}
                className="gallery__item reveal"
                role="listitem"
                tabIndex={0}
                onClick={() => openLightbox(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openLightbox(index);
                  }
                }}
                aria-label={img.caption || `ചിത്രം ${index + 1}`}
              >
                <img
                  src={img.src}
                  alt={img.caption || `Gallery image ${index + 1}`}
                  loading="lazy"
                />
                <div className="gallery__item-overlay" aria-hidden="true">
                  <div className="gallery__item-expand">
                    <ZoomIn size={28} />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={galleryImages}
          startIndex={lightboxIndex}
          onClose={closeLightbox}
        />
      )}
    </section>
  );
}

