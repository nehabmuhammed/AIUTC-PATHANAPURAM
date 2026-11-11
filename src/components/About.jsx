export default function About() {
  return (
    <section className="about" id="about" aria-label="ഞങ്ങളെക്കുറിച്ച്">
      <div className="about__inner">
        {/* Content */}
        <div className="about__content reveal">
          <span className="section-label">About Us</span>
          <span className="section-accent" aria-hidden="true" />
          <h2 className="about__heading">ഞങ്ങളെക്കുറിച്ച്</h2>
          <div className="about__body">
            <p>
              തൊഴിലാളികളുടെ അവകാശങ്ങൾ സംരക്ഷിക്കുന്നതിനും മെച്ചപ്പെട്ട
              തൊഴിൽ സാഹചര്യങ്ങൾ ഉറപ്പാക്കുന്നതിനും വേണ്ടി പ്രവർത്തിക്കുന്ന
              തൊഴിലാളി സംഘടനയാണ് ഓൾ ഇന്ത്യ ട്രേഡ് യൂണിയൻ കോൺഗ്രസ് (AITUC).
            </p>
            <p>
              തൊഴിലാളികളുടെ ഐക്യം, സാമൂഹിക നീതി, തൊഴിൽ സുരക്ഷ, ന്യായമായ
              വേതനം, മെച്ചപ്പെട്ട ജീവിത സാഹചര്യം എന്നിവയാണ് സംഘടനയുടെ
              പ്രവർത്തനങ്ങളുടെ പ്രധാന ലക്ഷ്യങ്ങൾ.
            </p>
            <p>
              പത്തനാപുരം മേഖലയിലെ തൊഴിലാളികളെ ഏകോപിപ്പിച്ചുകൊണ്ട് അവരുടെ
              പ്രശ്നങ്ങൾ ഉയർത്തിക്കാട്ടുന്നതിനും അവകാശങ്ങൾക്കായി
              പ്രവർത്തിക്കുന്നതിനും സംഘടന പ്രതിജ്ഞാബദ്ധമാണ്.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="about__image-wrap reveal">
          <img
            src="https://images.unsplash.com/photo-1573164574001-518958d9b7d4?w=800&q=80"
            alt="AITUC Pathanapuram — തൊഴിലാളി ഐക്യ പ്രവർത്തനങ്ങൾ"
            loading="lazy"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentNode.classList.add('about__image-placeholder');
            }}
          />
        </div>
      </div>
    </section>
  );
}

