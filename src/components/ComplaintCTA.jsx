import { MessageSquare } from 'lucide-react';
import { siteConfig, openExternalForm } from '../config/siteConfig';

export default function ComplaintCTA() {
  return (
    <section
      className="complaint-cta"
      id="complaint"
      aria-label="പരാതി സമർപ്പണം"
    >
      <div className="complaint-cta__inner">
        <div className="complaint-cta__content reveal">
          <span className="section-label">Submit a Complaint</span>
          <span className="section-accent" aria-hidden="true" />
          <h2 className="complaint-cta__heading">
            നിങ്ങളുടെ പ്രശ്നങ്ങൾ{' '}
            <span>ഞങ്ങളെ അറിയിക്കുക</span>
          </h2>
          <p className="complaint-cta__text">
            തൊഴിലാളികൾ നേരിടുന്ന പ്രശ്നങ്ങളും പരാതികളും നിർദ്ദേശങ്ങളും
            ഞങ്ങളെ അറിയിക്കാം. നിങ്ങളുടെ പരാതി ബന്ധപ്പെട്ട ഭാരവാഹികളുടെ
            ശ്രദ്ധയിൽപ്പെടുത്തുന്നതിനായി താഴെ നൽകിയിരിക്കുന്ന ലിങ്ക്
            ഉപയോഗിക്കുക.
          </p>
        </div>

        <button
          className="complaint-cta__btn"
          onClick={() =>
            openExternalForm(siteConfig.complaintFormUrl, 'പരാതി ഫോം')
          }
          aria-label="പരാതി ഫോം തുറക്കുക"
        >
          <MessageSquare size={20} />
          പരാതി സമർപ്പിക്കുക
        </button>
      </div>
    </section>
  );
}

