import { Shield, Users, HardHat, Heart } from 'lucide-react';

const objectives = [
  {
    id: 1,
    icon: Shield,
    title: 'തൊഴിലാളി അവകാശങ്ങൾ',
    description: 'തൊഴിലാളികളുടെ നിയമപരമായ അവകാശങ്ങൾ സംരക്ഷിക്കുക.',
  },
  {
    id: 2,
    icon: Users,
    title: 'തൊഴിലാളി ഐക്യം',
    description:
      'തൊഴിലാളികളെ ഒരുമിപ്പിക്കുകയും കൂട്ടായ്മ ശക്തിപ്പെടുത്തുകയും ചെയ്യുക.',
  },
  {
    id: 3,
    icon: HardHat,
    title: 'തൊഴിൽ സുരക്ഷ',
    description:
      'സുരക്ഷിതവും മാന്യവുമായ തൊഴിൽ സാഹചര്യം ഉറപ്പാക്കാൻ പ്രവർത്തിക്കുക.',
  },
  {
    id: 4,
    icon: Heart,
    title: 'ക്ഷേമ പ്രവർത്തനങ്ങൾ',
    description:
      'തൊഴിലാളികളുടെയും കുടുംബങ്ങളുടെയും ക്ഷേമത്തിനായി പ്രവർത്തിക്കുക.',
  },
];

export default function Objectives() {
  return (
    <section className="objectives" id="objectives" aria-label="ഞങ്ങളുടെ ലക്ഷ്യങ്ങൾ">
      <div className="objectives__inner">
        <div className="objectives__header reveal">
          <span className="section-label">Our Objectives</span>
          <span className="section-accent" aria-hidden="true" />
          <h2 className="section-heading section-heading--red">
            ഞങ്ങളുടെ ലക്ഷ്യങ്ങൾ
          </h2>
        </div>

        <div className="objectives__grid">
          {objectives.map((obj) => {
            const Icon = obj.icon;
            return (
              <article
                key={obj.id}
                className="objectives__card reveal"
                aria-label={obj.title}
              >
                <div className="objectives__card-icon" aria-hidden="true">
                  <Icon size={24} strokeWidth={1.75} />
                </div>
                <h3 className="objectives__card-title">{obj.title}</h3>
                <p className="objectives__card-desc">{obj.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

