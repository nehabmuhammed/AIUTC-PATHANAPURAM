import { MapPin, Image as ImageIcon } from 'lucide-react';
import { activities } from '../data/activities';

export default function Activities() {
  return (
    <section
      className="activities"
      id="activities"
      aria-label="സംഘടനാ പ്രവർത്തനങ്ങൾ"
    >
      <div className="activities__inner">
        <div className="activities__header reveal">
          <span className="section-label">Our Activities</span>
          <span className="section-accent" aria-hidden="true" />
          <h2 className="section-heading section-heading--red">
            സംഘടനാ പ്രവർത്തനങ്ങൾ
          </h2>
          <p className="activities__subheading">
            തൊഴിലാളികളുടെ ഉന്നമനത്തിനും അവകാശ സംരക്ഷണത്തിനുമായി എ.ഐ.ടി.യു.സി പത്തനാപുരം നടത്തുന്ന പ്രധാന പ്രവർത്തനങ്ങൾ.
          </p>
        </div>

        <div className="activities__grid">
          {activities.map((activity, index) => {
            const number = String(index + 1).padStart(2, '0');

            return (
              <article
                key={activity.id}
                className="activity-card reveal"
                aria-label={activity.title}
              >
                <div className="activity-card__image-wrap">
                  {activity.image ? (
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="activity-card__image"
                      loading="lazy"
                    />
                  ) : (
                    <div className="activity-card__image-placeholder">
                      <ImageIcon size={36} strokeWidth={1.5} />
                    </div>
                  )}
                  <div className="activity-card__image-overlay" aria-hidden="true" />
                  
                  {/* Floating Badges */}
                  <div className="activity-card__floating-bar">
                    <span className="activity-card__category-badge">
                      {activity.category}
                    </span>
                    <span className="activity-card__index-pill">
                      {number}
                    </span>
                  </div>
                </div>

                <div className="activity-card__content">
                  {activity.location && (
                    <div className="activity-card__location">
                      <MapPin size={13} className="activity-card__location-icon" />
                      <span>{activity.location}</span>
                    </div>
                  )}

                  <h3 className="activity-card__title">{activity.title}</h3>
                  <p className="activity-card__desc">{activity.description}</p>
                </div>

                <div className="activity-card__footer-accent" aria-hidden="true" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
