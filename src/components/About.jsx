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
            <p>സ്റ്റേറ്റ് ഫാമിംഗ് കോർപ്പറേഷനിലെ തൊഴിലാളികളുടെയും ജീവനക്കാരുടെയും അവകാശങ്ങൾ സംരക്ഷിക്കുന്നതിന് 1972-ൽ രൂപീകരിച്ച ട്രേഡ് യൂണിയനാണ് സ്റ്റേറ്റ് ഫാമിംഗ് കോർപ്പറേഷൻ വർക്കേഴ്സ് & എംപ്ലോയീസ് യൂണിയൻ. സ്ഥാപനത്തിന്റെ തുടക്കകാലം മുതൽ തന്നെ തൊഴിലാളികളുടെ ന്യായമായ ആവശ്യങ്ങൾ നേടിയെടുക്കുന്നതിനും, വേതന വർദ്ധനവ്, തൊഴിൽ സുരക്ഷ, ക്ഷേമപദ്ധതികൾ എന്നിവ ഉറപ്പാക്കുന്നതിനും ഈ സംഘടന നിർണ്ണായകമായ പങ്കുവഹിച്ചിട്ടുണ്ട്.
              കഴിഞ്ഞ അഞ്ച് പതിറ്റാണ്ടിലേറെയായി തൊഴിലാളി വർഗ്ഗത്തിന്റെ ഐക്യവും അവകാശപോരാട്ടങ്ങളുടെ കരുത്തുമായി ഈ യൂണിയൻ നിലകൊള്ളുന്നു. മാനേജ്‌മെന്റുമായുള്ള ക്രിയാത്മകമായ ഇടപെടലുകളിലൂടെയും നിരന്തരമായ പോരാട്ടങ്ങളിലൂടെയും തൊഴിലാളികളുടെയും ജീവനക്കാരുടെയും ജീവിതനിലവാരം ഉയർത്തുന്നതിനും, സ്ഥാപനത്തിന്റെ വളർച്ചയ്ക്കും പുരോഗതിക്കും ഒപ്പം നിന്ന് പ്രവർത്തിക്കുന്നതിനും സംഘടനയ്ക്ക് സാധിച്ചു.
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

