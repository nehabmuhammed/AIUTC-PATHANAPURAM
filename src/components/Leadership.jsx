import { User } from 'lucide-react';
import { leaders } from '../data/leaders';

export default function Leadership() {
  return (
    <section className="leadership" id="leadership" aria-label="സംഘടനാ നേതൃത്വം">
      <div className="leadership__inner">
        <div className="leadership__header reveal">
          <span className="section-label">Our Leadership</span>
          <span className="section-accent" aria-hidden="true" />
          <h2 className="section-heading section-heading--red">
            സംഘടനാ നേതൃത്വം
          </h2>
        </div>

        <div className="leadership__grid">
          {leaders.map((leader) => (
            <article
              key={leader.id}
              className="leadership__card reveal"
              aria-label={leader.name}
            >
              <div className="leadership__card-image-wrap">
                {leader.image ? (
                  <img
                    src={leader.image}
                    alt={`${leader.designation} — ${leader.name}`}
                    className="leadership__card-image"
                    loading="lazy"
                  />
                ) : (
                  <div className="leadership__card-placeholder">
                    <div className="leadership__card-placeholder-icon">
                      <User size={28} strokeWidth={1.5} />
                    </div>
                  </div>
                )}
              </div>
              <div className="leadership__card-info">
                <span className="leadership__card-designation">
                  {leader.designation}
                </span>
                <h3 className="leadership__card-name">{leader.name}</h3>
                {leader.description && (
                  <p className="leadership__card-desc">{leader.description}</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

