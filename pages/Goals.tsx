import { FlowerSVG, PeaceSVG } from '../components/Icons';

const goals = [
  {
    number: '01',
    title: 'End the War in Vietnam',
    color: '#A8D5A2',
    body: `They believed that the war in Vietnam went directly against their views of peace, love, and nonviolence. They viewed the US drafts with a negative connotation as they saw the US government as corrupt and not something worth fighting for. They protested the war through marches and strikes.`,
    sub: 'Draft resistance, campus strikes, mass marches',
  },
  {
    number: '02',
    title: 'Civil Rights for All Americans',
    color: '#C4B8E0',
    body: `The 1960's saw the peak of the civil rights movement, and the youth of the time supported equal rights for people of all races, sexualities, and genders. They strongly supported women's rights and LGBTQ freedoms. They went agains the norms and social standards of the time, and supporting these groups was one of the most direct ways to defy the older generations.`,
    sub: 'Sit-ins, freedom rides, voter registration drives, legal challenges',
  },
  {
    number: '03',
    title: "Free Speech & Openness",
    color: '#B8E0B0',
    body: `Young people of the time sought spiritual guidance through Buddhism, Hinduism, and other Eastern religions. In addition to opening their eyes to new religions, they also experimented with recreational drugs, communal living, political protests, casual sex, folk and rock music. They rejected mainstream society, as they viewed middle-class society as materialistic and repressive.`
  },
];

export default function Goals() {
  return (
    <section className="min-h-screen" id="goals">
      {/* Header */}
      <div className="relative bg-sage wave-divider wave-divider-parchment pt-28 pb-24 overflow-hidden texture-overlay">
        <div className="absolute -top-10 -right-10 opacity-10 hidden md:block">
          <FlowerSVG color="#2A2A3A" size={200} />
        </div>
        <div className="absolute bottom-8 left-8 opacity-15 hidden md:block">
          <FlowerSVG color="#E6E0F0" size={120} />
        </div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <p className="font-typewriter text-brown/70 text-sm uppercase tracking-widest mb-2">The Platform</p>
            <h1 className="section-headline text-7xl md:text-9xl text-brown text-shadow-ink leading-none mb-6">
              Their<br />
              <span className="text-lavender-dark">Goals</span>
            </h1>
            
          </div>
        </div>
      </div>

      {/* Goals list on parchment */}
      <div className="bg-parchment py-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Decorative row */}
          <div className="flex justify-center gap-4 mb-14">
            {[...Array(7)].map((_, i) => (
              <PeaceSVG key={i} size={24} color={['#A8D5A2','#C4B8E0','#B8E0B0','#E6E0F0','#A8D5A2','#C4B8E0','#B8E0B0'][i]} />
            ))}
          </div>

          <div className="space-y-12">
            {goals.map((goal, i) => (
              <div
                key={goal.number}
                className={`flex flex-col md:flex-row gap-6 items-start pb-12 ${
                  i < goals.length - 1 ? 'border-b-2 border-dashed border-brown/20' : ''
                }`}
              >
                {/* Number stamp */}
                <div
                  className="flex-shrink-0 w-16 h-16 rounded-full border-4 flex items-center justify-center font-display text-2xl bg-lavender-light"
                  style={{ borderColor: goal.color, color: '#4A4A5A' }}
                >
                  {goal.number}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h2 className="section-headline text-3xl md:text-4xl text-brown mb-3">
                    <span className="squiggle" style={{ textDecorationColor: goal.color }}>{goal.title}</span>
                  </h2>
                  <p className="font-body text-brown/75 text-base leading-loose mb-4">{goal.body}</p>
                  <div
                    className="inline-block font-typewriter text-sm px-3 py-1 border rounded"
                    style={{ borderColor: goal.color, color: '#4A4A5A', backgroundColor: `${goal.color}20` }}
                  >
                    {goal.sub}
                  </div>
                </div>

                {/* Decorative flower */}
                <div className="flex-shrink-0 hidden lg:block opacity-50">
                  <FlowerSVG color={goal.color} size={52} className={i % 2 === 0 ? 'rotate-1' : '-rotate-2'} />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom manifesto */}
          <div className="mt-16 bg-lavender p-8 relative overflow-hidden rounded-sm">
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
              <FlowerSVG color="#A8D5A2" size={128} />
            </div>
            <p className="font-groovy text-sage-dark text-2xl md:text-3xl leading-relaxed relative z-10">
              "Make Love, Not War"
            </p>
        
          </div>
        </div>
      </div>
    </section>
  );
}
