import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

// Brand icons as clean inline SVGs
function FacebookIcon({ size = 16, className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ size = 16, className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function ContactItem({ icon: Icon, label, children }) {
  return (
    <div className="contact__item">
      <div className="contact__item-icon" aria-hidden="true">
        <Icon size={18} strokeWidth={1.75} />
      </div>
      <div className="contact__item-content">
        <span className="contact__item-label">{label}</span>
        <div className="contact__item-value">{children}</div>
      </div>
    </div>
  );
}

export default function Contact() {
  const { contact } = siteConfig;

  const hasSocial = contact.whatsapp || contact.facebook || contact.instagram;

  return (
    <section className="contact" id="contact" aria-label="ബന്ധപ്പെടുക">
      <div className="contact__inner">
        <div className="contact__header reveal">
          <span className="section-label">Contact Us</span>
          <span className="section-accent" aria-hidden="true" />
          <h2 className="section-heading section-heading--red">
            ബന്ധപ്പെടുക
          </h2>
        </div>

        <div className="contact__grid">
          {/* Contact Info */}
          <div className="contact__info reveal">
            <ContactItem icon={MapPin} label="വിലാസം">
              {contact.address ? (
                contact.address
              ) : (
                <span className="contact__placeholder">
                  [ ഓഫീസ് വിലാസം ഇനിയും ചേർത്തിട്ടില്ല ]
                </span>
              )}
            </ContactItem>

            <ContactItem icon={Phone} label="ഫോൺ">
              {contact.phone ? (
                <a href={`tel:${contact.phone}`}>{contact.phone}</a>
              ) : (
                <span className="contact__placeholder">
                  [ ഫോൺ നമ്പർ ഇനിയും ചേർത്തിട്ടില്ല ]
                </span>
              )}
            </ContactItem>

            <ContactItem icon={Mail} label="ഇ-മെയിൽ">
              {contact.email ? (
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              ) : (
                <span className="contact__placeholder">
                  [ ഇ-മെയിൽ ഇനിയും ചേർത്തിട്ടില്ല ]
                </span>
              )}
            </ContactItem>
          </div>

          {/* Social */}
          <div className="contact__social reveal">
            <h3 className="contact__social-heading">സോഷ്യൽ മീഡിയ</h3>

            {hasSocial ? (
              <div className="contact__social-links">
                {contact.whatsapp && (
                  <a
                    href={contact.whatsapp}
                    className="contact__social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle size={16} />
                    WhatsApp
                  </a>
                )}
                {contact.facebook && (
                  <a
                    href={contact.facebook}
                    className="contact__social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <FacebookIcon size={16} />
                    Facebook
                  </a>
                )}
                {contact.instagram && (
                  <a
                    href={contact.instagram}
                    className="contact__social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <InstagramIcon size={16} />
                    Instagram
                  </a>
                )}
              </div>
            ) : (
              <p className="contact__social-placeholder">
                [ സോഷ്യൽ മീഡിയ ലിങ്കുകൾ ഇനിയും ചേർത്തിട്ടില്ല ]
                <br />
                <code style={{ fontSize: '0.75rem' }}>
                  src/config/siteConfig.js
                </code>{' '}
                ഫയൽ അപ്ഡേറ്റ് ചെയ്യുക.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
