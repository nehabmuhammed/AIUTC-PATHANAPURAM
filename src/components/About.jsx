import { ShieldCheck, Calendar, Users, Award } from 'lucide-react';

export default function About() {
  return (
    <section className="about" id="about" aria-label="ഞങ്ങളെക്കുറിച്ച്">
      <div className="about__inner">
        {/* Content */}
        <div className="about__content reveal">
          <div className="about__header-badge">
            <span className="section-label">AITUC PATHANAPURAM</span>
            <span className="about__est-pill">EST. 1972</span>
          </div>
          <span className="section-accent" aria-hidden="true" />
          <h2 className="about__heading">
            അരനൂറ്റാണ്ടിന്റെ പോരാട്ട പാരമ്പര്യം
          </h2>

          <div className="about__body">
            <p>
              സ്റ്റേറ്റ് ഫാമിംഗ് കോർപ്പറേഷനിലെ തൊഴിലാളികളുടെയും ജീവനക്കാരുടെയും അവകാശങ്ങൾ സംരക്ഷിക്കുന്നതിന് 1972-ൽ രൂപീകരിച്ച പ്രമുഖ ട്രേഡ് യൂണിയനാണ് <strong>സ്റ്റേറ്റ് ഫാമിംഗ് കോർപ്പറേഷൻ വർക്കേഴ്സ് &amp; എംപ്ലോയീസ് യൂണിയൻ (AITUC)</strong>.
            </p>
            <p>
              സ്ഥാപനത്തിന്റെ തുടക്കകാലം മുതൽ തന്നെ തൊഴിലാളികളുടെ ന്യായമായ ആവശ്യങ്ങൾ നേടിയെടുക്കുന്നതിനും, വേതന വർദ്ധനവ്, തൊഴിൽ സുരക്ഷ, ആനുകൂല്യങ്ങൾ, മെച്ചപ്പെട്ട ജീവിതസാഹചര്യങ്ങൾ എന്നിവ ഉറപ്പാക്കുന്നതിനും സംഘടന മുൻനിരയിൽ നിന്ന് പ്രവർത്തിച്ചുപോരുന്നു.
            </p>
            <p>
              കഴിഞ്ഞ അഞ്ച് പതിറ്റാണ്ടിലേറെയായി മാനേജ്‌മെന്റുമായുള്ള ക്രിയാത്മകമായ ഇടപെടലുകളിലൂടെയും നിരന്തരമായ അവകാശപോരാട്ടങ്ങളിലൂടെയും തൊഴിലാളി വർഗ്ഗത്തിന്റെ ആത്മാഭിമാനവും കരുത്തുമായി സംഘടന പത്തനാപുരം മേഖലയിൽ സജീവമായി നിലകൊള്ളുന്നു.
            </p>
          </div>

          {/* Key highlights metrics */}
          <div className="about__metrics">
            <div className="about__metric-card">
              <div className="about__metric-icon" aria-hidden="true">
                <Calendar size={20} />
              </div>
              <div className="about__metric-num">50+</div>
              <div className="about__metric-label">വർഷത്തെ സേവനം</div>
            </div>
            <div className="about__metric-card">
              <div className="about__metric-icon" aria-hidden="true">
                <Users size={20} />
              </div>
              <div className="about__metric-num">1972</div>
              <div className="about__metric-label">രൂപീകരണ വർഷം</div>
            </div>
            <div className="about__metric-card">
              <div className="about__metric-icon" aria-hidden="true">
                <ShieldCheck size={20} />
              </div>
              <div className="about__metric-num">100%</div>
              <div className="about__metric-label">തൊഴിലാളി പ്രതിബദ്ധത</div>
            </div>
          </div>
        </div>

        {/* Visual Media Showcase */}
        <div className="about__visual reveal">
          <div className="about__image-card">
            <div className="about__image-wrapper">
              <img
                src="/images/gallery/gallery-03.jpg"
                alt="സ്റ്റേറ്റ് ഫാമിംഗ് കോർപ്പറേഷൻ വർക്കേഴ്സ് & എംപ്ലോയീസ് യൂണിയൻ പതാക കൈമാറ്റം"
                className="about__img"
                loading="lazy"
              />
              <div className="about__image-overlay" />
            </div>

            {/* Floating verification badge */}
            <div className="about__floating-badge">
              <div className="about__floating-badge-icon">
                <Award size={22} />
              </div>
              <div className="about__floating-badge-text">
                <span className="about__floating-badge-title">AITUC പത്തനാപുരം</span>
                <span className="about__floating-badge-subtitle">തൊഴിലാളി വർഗ്ഗത്തിന്റെ വിശ്വസ്ത പ്രസ്ഥാനം</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

