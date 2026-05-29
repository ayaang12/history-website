import { FlowerSVG, PeaceSVG, SunburstSVG } from '../components/Icons';

const events = [
  {
    year: '1963',
    title: '“Blowin’ in the Wind” Released',
    date: '1963',
    location: 'United States',
    color: '#A8D5A2',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f',
    body: `Bob Dylan released “Blowin’ in the Wind,” a protest song questioning war,
    freedom, and justice. The song became an anthem for young Americans who wanted
    social change and opposed violence and inequality.`,
    significance: 'Showed how music became a political and cultural weapon.',
  },

  {
    year: '1967',
    title: 'Summer of Love',
    date: 'Summer 1967',
    location: 'San Francisco, California',
    color: '#C4B8E0',
    image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a',
    body: `Thousands of young people gathered in San Francisco’s Haight-Ashbury district.
    The event popularized hippie culture, communal living, psychedelic music,
    experimentation, and antiwar ideals.`,
    significance: 'Brought counterculture into mainstream American culture.',
  },

  {
    year: '1968',
    title: 'Student Protests & Free Speech Activism',
    date: '1968',
    location: 'College Campuses Across America',
    color: '#B8E0B0',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d',
    body: `Student activists protested university restrictions, war policies,
    and government authority. Influenced by leaders like Mario Savio,
    students demanded free political expression and greater student power.`,
    significance: 'Made youth activism a major national political force.',
  },

  {
    year: '1969',
    title: 'Woodstock Music Festival',
    date: 'August 15–18, 1969',
    location: 'Bethel, New York',
    color: '#E6E0F0',
    image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063',
    body: `Nearly 400,000 people attended Woodstock. The festival featured artists
    like Jimi Hendrix, Janis Joplin, and The Who. It became the most recognizable
    symbol of peace, music, freedom, and youth counterculture.`,
    significance: 'The defining cultural event of the counterculture movement.',
  },

  {
    year: '1969',
    title: 'Anti-War Moratorium Protest',
    date: 'November 15, 1969',
    location: 'Washington, D.C.',
    color: '#A8D5A2',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978',
    body: `Roughly 500,000 people gathered in Washington, D.C. to protest the Vietnam War.
    Organized anti-war moratoriums occurred around the world as young activists
    demanded peace and an end to American military involvement.`,
    significance: 'One of the largest antiwar demonstrations in American history.',
  },
];

export default function Events() {
  return (
    <section className="min-h-screen" id="events">
      {/* Header */}
      <div className="relative bg-mint wave-divider wave-divider-cream pt-28 pb-28 overflow-hidden texture-overlay">
        <div className="absolute top-16 right-0 opacity-10 hidden md:block">
          <SunburstSVG color="#C4B8E0" size={220} />
        </div>
        <div className="absolute -bottom-4 left-6 opacity-10 hidden md:block">
          <FlowerSVG color="#A8D5A2" size={140} />
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <p className="font-typewriter text-brown/60 text-sm uppercase tracking-widest mb-2">The Record</p>
          <h1 className="section-headline text-7xl md:text-9xl text-brown text-shadow-ink leading-none mb-6">
            Key<br />
            <span className="text-lavender-dark">Events</span>
          </h1>
          <p className="font-body text-brown/80 text-lg max-w-xl leading-relaxed">
            History is not a background — it is the accumulation of moments when people
            chose to act. These are some of the moments that defined the decade.
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-cream py-20 px-6">
        <div className="max-w-5xl mx-auto">

          {/* Decorative row */}
          <div className="flex justify-center mb-14">
            <div className="psychedelic-banner h-3 w-64 rounded-none" />
          </div>

          <div className="relative">
            {/* Vertical timeline line */}
            <div className="hidden lg:block absolute left-[calc(50%-1px)] top-0 bottom-0 w-0.5 bg-brown/15" />

            <div className="space-y-12">
              {events.map((event, i) => (
                <div key={event.year} className={`flex flex-col lg:flex-row gap-6 items-start ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>

                  {/* Content side */}
                  <div className="flex-1 lg:max-w-[calc(50%-2rem)]">
                    <div
                      className={`groovy-card overflow-hidden ${i % 2 === 0 ? 'rotate-neg-1' : 'rotate-1'}`}
                    >
                      {/* Image */}
                      <div className="relative h-36 overflow-hidden" style={{ backgroundColor: event.color }}>
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover mix-blend-overlay opacity-35"
                        />
                        <div className="absolute bottom-0 left-0 right-0 h-1.5 psychedelic-banner" />
                        <div className="absolute inset-0 flex items-end p-3">
                          <span className="font-display text-4xl text-brown/90 leading-none text-shadow-ink">
                            {event.year}
                          </span>
                        </div>
                      </div>

                      {/* Body */}
                      <div className="p-5 bg-cream">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <div>
                            <h2 className="font-display text-xl text-brown leading-tight">{event.title}</h2>
                            <p className="font-typewriter text-brown/50 text-xs mt-0.5">{event.date}</p>
                            <p className="font-typewriter text-brown/50 text-xs">{event.location}</p>
                          </div>
                          <PeaceSVG size={20} color={event.color} className="flex-shrink-0 mt-1" />
                        </div>

                        <p className="font-body text-brown/70 text-sm leading-relaxed mt-3">
                          {event.body}
                        </p>

                        <div className="mt-3 pt-3 border-t border-brown/15">
                          <span className="font-typewriter text-xs" style={{ color: '#4A4A5A' }}>
                            Why it matters: {event.significance}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline node (desktop) */}
                  <div className="hidden lg:flex flex-col items-center w-8 pt-6 flex-shrink-0">
                    <div
                      className="w-5 h-5 rounded-full border-2 border-brown flex-shrink-0"
                      style={{ backgroundColor: event.color }}
                    />
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden lg:block flex-1" />
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-20 bg-lavender p-8 text-center relative overflow-hidden rounded-sm">
            <div className="absolute inset-0 flex items-center justify-center opacity-5">
              <SunburstSVG color="#A8D5A2" size={400} />
            </div>
            <p className="font-groovy text-sage-dark text-xl md:text-2xl leading-relaxed relative z-10 max-w-2xl mx-auto">
              "History will have to record that the greatest tragedy of this period of social
              transition was not the strident clamor of the bad people, but the appalling
              silence of the good people."
            </p>
            <p className="font-typewriter text-brown/50 text-sm mt-4 relative z-10">
              — Martin Luther King Jr.
            </p>
            <div className="flex justify-center gap-3 mt-6 relative z-10">
              {[...Array(5)].map((_, i) => (
                <FlowerSVG key={i} color={['#A8D5A2','#C4B8E0','#B8E0B0','#E6E0F0','#A8D5A2'][i]} size={24} className="opacity-60" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
