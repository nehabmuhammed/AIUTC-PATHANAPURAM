import { siteConfig, openExternalForm } from '../config/siteConfig';

export default function Hero() {
  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home" aria-label="ഹീറോ സെക്ഷൻ">
      {/* Documentary worker photograph container */}
      <div className="hero__image-wrapper">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?w=1600&auto=format&fit=crop&q=80"
          alt="തൊഴിലാളി ഐക്യം — എ.ഐ.ടി.യു.സി പത്തനാപുരം"
          className="hero__image"
          loading="eager"
          onError={(e) => {
            // High-quality fallback image if primary URL fails
            e.target.src =
              'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1600&auto=format&fit=crop&q=80';
          }}
        />

        {/* Gradient overlays for smooth blending */}
        <div className="hero__image-overlay" aria-hidden="true" />

        {/* Organisation Badge on the image */}
        <div className="hero__badge">
          <span className="hero__badge-icon" aria-hidden="true">★</span>
          <span className="hero__badge-text">
            AITUC · PATHANAPURAM
          </span>
        </div>
      </div>

      {/* Hero text content */}
      <div className="hero__content">
        <div className="hero__tag" aria-label="Organisation label">
          ALL INDIA TRADE UNION CONGRESS
        </div>

        <h1 className="hero__heading">
          <span>തൊഴിലാളികളുടെ ഐക്യം</span>
          <span className="highlight">നാടിന്റെ പുരോഗതി</span>
        </h1>

        <p className="hero__subtext">
          തൊഴിലാളികളുടെ അവകാശങ്ങൾക്കും ക്ഷേമത്തിനും വേണ്ടി ഒരുമിച്ച്
          പ്രവർത്തിക്കുന്ന സംഘടനയാണ് എ.ഐ.ടി.യു.സി പത്തനാപുരം.
        </p>

        <div className="hero__buttons">
          <button
            className="hero__btn-primary"
            onClick={scrollToAbout}
            aria-label="ഞങ്ങളെക്കുറിച്ച് അറിയാം"
          >
            ഞങ്ങളെക്കുറിച്ച് അറിയാം
          </button>
          <button
            className="hero__btn-secondary"
            onClick={() =>
              openExternalForm(
                siteConfig.registrationFormUrl,
                'അംഗത്വ രജിസ്ട്രേഷൻ'
              )
            }
            aria-label="അംഗത്വം നേടുക"
          >
            അംഗത്വം നേടുക →
          </button>
        </div>
      </div>

      {/* Bottom informational strip */}
      <div className="hero__footer-strip">
        <span className="hero__footer-strip-icon" aria-hidden="true">
          ✓
        </span>
        <span className="hero__footer-strip-text">
          തൊഴിലാളികളുടെ അവകാശ സംരക്ഷണത്തിനും ക്ഷേമത്തിനുമായി എപ്പോഴും നിങ്ങളോടൊപ്പം
        </span>
      </div>
    </section>
  );
}
