import { Calendar, Image } from 'lucide-react';
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
        </div>

        <div className="activities__grid">
          {activities.map((activity) => (
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
                    <Image size={40} strokeWidth={1} />
                  </div>
                )}
              </div>
              <div className="activity-card__content">
                {activity.date && (
                  <div className="activity-card__date">
                    <Calendar size={12} />
                    {activity.date}
                  </div>
                )}
                <h3 className="activity-card__title">{activity.title}</h3>
                <p className="activity-card__desc">{activity.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

