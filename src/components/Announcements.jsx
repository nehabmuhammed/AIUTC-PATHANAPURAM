import { MapPin, Bell } from 'lucide-react';
import { announcements } from '../data/announcements';

export default function Announcements() {
  return (
    <section
      className="announcements"
      id="announcements"
      aria-label="അറിയിപ്പുകളും പരിപാടികളും"
    >
      <div className="announcements__inner">
        <div className="announcements__header reveal">
          <span className="section-label">Announcements &amp; Events</span>
          <span className="section-accent" aria-hidden="true" />
          <h2 className="section-heading section-heading--red">
            അറിയിപ്പുകളും പരിപാടികളും
          </h2>
        </div>

        {announcements.length === 0 ? (
          <div className="announcements__empty reveal" role="status">
            <div className="announcements__empty-icon">
              <Bell size={48} strokeWidth={1} />
            </div>
            <p className="announcements__empty-text">
              നിലവിൽ പുതിയ അറിയിപ്പുകളൊന്നുമില്ല.
            </p>
          </div>
        ) : (
          <div className="announcements__list">
            {announcements.map((item) => {
              const dateParts = item.date ? item.date.split(' ') : [];
              const day = dateParts[0] || '';
              const monthYear = dateParts.slice(1).join(' ');

              return (
                <article
                  key={item.id}
                  className="announcement-card reveal"
                  aria-label={item.title}
                >
                  {item.date && (
                    <div
                      className="announcement-card__date-block"
                      aria-label={`തീയ്യതി: ${item.date}`}
                    >
                      <span className="announcement-card__date-day">{day}</span>
                      <span className="announcement-card__date-month">
                        {monthYear}
                      </span>
                    </div>
                  )}
                  <div className="announcement-card__content">
                    <h3 className="announcement-card__title">{item.title}</h3>
                    {item.location && (
                      <div className="announcement-card__location">
                        <MapPin size={12} />
                        {item.location}
                      </div>
                    )}
                    {item.description && (
                      <p className="announcement-card__desc">
                        {item.description}
                      </p>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

