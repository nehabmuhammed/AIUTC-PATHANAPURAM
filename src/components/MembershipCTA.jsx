import { UserPlus } from 'lucide-react';
import { siteConfig, openExternalForm } from '../config/siteConfig';

export default function MembershipCTA() {
  return (
    <section
      className="membership-cta"
      id="membership"
      aria-label="അംഗത്വ രജിസ്ട്രേഷൻ"
    >
      <div className="membership-cta__inner">
        <h2 className="membership-cta__heading">
          എ.ഐ.ടി.യു.സി കുടുംബത്തിലേക്ക്
          <br />
          സ്വാഗതം
        </h2>
        <p className="membership-cta__text">
          തൊഴിലാളികളുടെ ഐക്യത്തിനും അവകാശ സംരക്ഷണത്തിനുമുള്ള കൂട്ടായ്മയിൽ
          പങ്കാളികളാകൂ. അംഗത്വത്തിനായി താഴെ നൽകിയിരിക്കുന്ന ലിങ്കിലൂടെ
          രജിസ്റ്റർ ചെയ്യുക.
        </p>
        <button
          className="membership-cta__btn"
          onClick={() =>
            openExternalForm(
              siteConfig.registrationFormUrl,
              'അംഗത്വ രജിസ്ട്രേഷൻ'
            )
          }
          aria-label="അംഗത്വ ഫോം തുറക്കുക"
        >
          <UserPlus size={20} />
          അംഗത്വത്തിനായി രജിസ്റ്റർ ചെയ്യുക
        </button>
      </div>
    </section>
  );
}

