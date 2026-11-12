import {
  Megaphone,
  Flag,
  Users,
  HeartHandshake,
  CalendarCheck,
  ShieldCheck,
  Activity as DefaultIcon,
} from 'lucide-react';
import { activities } from '../data/activities';

const iconMap = {
  Megaphone,
  Flag,
  Users,
  HeartHandshake,
  CalendarCheck,
  ShieldCheck,
};

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
            const IconComponent = iconMap[activity.icon] || DefaultIcon;
            const number = String(index + 1).padStart(2, '0');

            return (
              <article
                key={activity.id}
                className="activity-card reveal"
                aria-label={activity.title}
              >
                <div className="activity-card__top">
                  <div className="activity-card__icon-box" aria-hidden="true">
                    <IconComponent size={24} strokeWidth={1.8} />
                  </div>
                  <div className="activity-card__meta">
                    {activity.badge && (
                      <span className="activity-card__badge">{activity.badge}</span>
                    )}
                    <span className="activity-card__number">{number}</span>
                  </div>
                </div>

                <div className="activity-card__content">
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
