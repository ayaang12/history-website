import { FlowerSVG, PeaceSVG, SunburstSVG } from '../components/Icons';

const events = [
  {
    year: '1955',
    title: 'Montgomery Bus Boycott',
    date: 'December 5, 1955 – December 20, 1956',
    location: 'Montgomery, Alabama',
    color: '#A8D5A2',
    image: 'https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=600',
    body: `When Rosa Parks refused to give up her seat on a segregated Montgomery city bus on
    December 1, 1955, the Black community responded by boycotting the bus system for 381 days.
    Led by the newly-formed Montgomery Improvement Association and a 26-year-old minister named
    Martin Luther King Jr., the boycott ended only after the Supreme Court ruled bus segregation
    unconstitutional. It proved that organized, sustained nonviolent resistance could win.`,
    significance: 'Demonstrated nonviolent resistance as a winning strategy.',
  },
  {
    year: '1960',
    title: 'Greensboro Sit-Ins',
    date: 'February 1 – July 25, 1960',
    location: 'Greensboro, North Carolina',
    color: '#C4B8E0',
    image: 'https://images.pexels.com/photos/3585806/pexels-photo-3585806.jpeg?auto=compress&cs=tinysrgb&w=600',
    body: `Four Black college freshmen — Ezell Blair Jr., David Richmond, Franklin McCain, and
    Joseph McNeil — sat down at a segregated Woolworth's lunch counter and refused to leave
    when denied service. Within weeks, sit-ins had spread to fifty-five cities across the
    South. The movement was almost entirely student-led, and it produced the Student Nonviolent
    Coordinating Committee (SNCC), which would become a central organizing force for the decade.`,
    significance: 'Launched the student-led SNCC and the sit-in movement.',
  },
  {
    year: '1962',
    title: 'SDS Port Huron Statement',
    date: 'June 11–15, 1962',
    location: 'Port Huron, Michigan',
    color: '#B8E0B0',
    image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600',
    body: `Students for a Democratic Society gathered at a United Auto Workers camp in Michigan
    to draft a founding manifesto for the New Left. The resulting Port Huron Statement called
    for "participatory democracy" — a political system in which citizens actively participated
    in the decisions that shaped their lives, rather than delegating power to distant
    representatives. It became the intellectual backbone of campus organizing throughout the
    decade.`,
    significance: 'Defined "participatory democracy" as the movement\'s guiding principle.',
  },
  {
    year: '1964',
    title: 'Freedom Summer',
    date: 'June – August 1964',
    location: 'Mississippi',
    color: '#E6E0F0',
    image: 'https://images.pexels.com/photos/6146978/pexels-photo-6146978.jpeg?auto=compress&cs=tinysrgb&w=600',
    body: `SNCC and CORE organized hundreds of mostly white Northern college students to travel
    to Mississippi to help register Black voters and establish "Freedom Schools." The summer
    was met with violence: three civil rights workers — James Chaney, Andrew Goodman, and
    Michael Schwerner — were murdered by Klansmen with law enforcement complicity. The
    atrocity drew national attention to the terror that Black Mississippians lived with every
    day, accelerating pressure for federal legislation.`,
    significance: 'Exposed systemic racist violence, built cross-racial solidarity.',
  },
  {
    year: '1967',
    title: 'March on the Pentagon',
    date: 'October 21–22, 1967',
    location: 'Washington, D.C.',
    color: '#A8D5A2',
    image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600',
    body: `Over 100,000 people gathered at the Lincoln Memorial before a contingent of 35,000
    marched on the Pentagon itself in one of the largest antiwar demonstrations to date.
    The Yippies attempted to levitate the building. Soldiers fixed bayonets. Protesters
    placed flowers in gun barrels. The images — of young people facing armed soldiers —
    crystallized the confrontation between the counterculture and military authority and
    were broadcast around the world.`,
    significance: 'Largest antiwar demonstration; defining image of the movement.',
  },
  {
    year: '1968',
    title: 'Democratic National Convention',
    date: 'August 25–29, 1968',
    location: 'Chicago, Illinois',
    color: '#C4B8E0',
    image: 'https://images.pexels.com/photos/2774140/pexels-photo-2774140.jpeg?auto=compress&cs=tinysrgb&w=600',
    body: `As Democrats nominated Hubert Humphrey inside the Chicago convention hall, thousands
    of protesters gathered in Grant Park. Mayor Richard Daley's police responded with
    overwhelming and nationally televised violence — beating demonstrators, journalists,
    and bystanders alike. The "Chicago Eight" (later Chicago Seven) were indicted for
    conspiracy, and their subsequent trial became a circus of radical theater. The images
    from Chicago fractured the liberal coalition and radicalized a generation.`,
    significance: 'Police riot; fractured Democratic Party; galvanized radical left.',
  },
  {
    year: '1969',
    title: 'Woodstock',
    date: 'August 15–18, 1969',
    location: 'Bethel, New York',
    color: '#B8E0B0',
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600',
    body: `Half a million young Americans converged on Max Yasgur's dairy farm in upstate New York
    for what became the defining cultural event of the counterculture. Janis Joplin, Jimi
    Hendrix, The Who, Jefferson Airplane, and thirty-two other acts performed. Despite rain,
    mud, food shortages, and the sheer impossibility of the logistics, the festival was largely
    peaceful. Woodstock demonstrated both the size and the ethos of the generation: communal,
    free, and briefly, beautifully, ungovernable.`,
    significance: '400,000 people; the counterculture\'s largest cultural moment.',
  },
  {
    year: '1970',
    title: 'Kent State Shootings',
    date: 'May 4, 1970',
    location: 'Kent, Ohio',
    color: '#E6E0F0',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600',
    body: `Ohio National Guard troops opened fire on students protesting Nixon's invasion of
    Cambodia at Kent State University, killing four students and wounding nine. The killings
    triggered a student strike across 450 campuses, shutting down American higher education.
    Neil Young's "Ohio" was recorded within days. The image of a young woman kneeling over a
    dead student became one of the most iconic photographs of the era — and a turning point
    in public opinion on the war.`,
    significance: 'Turned mainstream opinion against the war; triggered national campus strike.',
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
