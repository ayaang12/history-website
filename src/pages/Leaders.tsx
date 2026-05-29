import { FlowerSVG, PeaceSVG, SunburstSVG } from '../components/Icons';

const leaders = [
  {
    name: 'Mario Savio',
    years: '1942 – 1996',
    role: 'Voice of Student Protest',
    org: 'Berkeley Free Speech Movement (FSM)',
    color: '#A8D5A2',
    image: 'https://cropper.watch.aetnd.com/public-content-aetn.video.aetnd.com/video-thumbnails/AETN-History_VMS/21/178/History_Mario_Savio_on_Educational_Reform_Speech_SF_still_624x352.jpg',
    quote: "The university is a vast public utility which turns out future workers in today's vineyard, the military-industrial complex.",
    bio: `He was inspired by his time volunteering in Mississippi during the 1964 Freedom Summer civil rights project. Savio started to become an activist for students. He returned to UC Berkeley to find the university limiting student political activity. Mario Savio argued univiverisites were cold, bureaucratic machines to turn students into compliant cogs.
`,
  },
  {
    name: 'Timothy Leary',
    years: '1920 - 1996',
    role: 'Psychedelic Prophet',
    org: 'Psychologist',
    color: '#C4B8E0',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgAZt-1WZnqEkHkOwIHywSi-ZLeqcUmwYrew&s',
    quote: 'Turn on, tune in, drop out',
    bio: `Leary was a Harvard psychologist and a champion of drug use. He believed that psychotropic substances (LSD) could expand consciousness, cure ailments, and free the mind. He was a firm supporter of recreational drug use, a big thing for the youth of the time.`,
  },
  {
    name: 'Abbie Hoffman',
    years: '1936 – 1989',
    role: 'Prankster',
    org: 'Yippies',
    color: '#B8E0B0',
    image: 'https://www.thenation.com/wp-content/uploads/2017/08/abbie-hoffman-1960s-ap-img.jpg',
    quote: 'You measure a democracy by the freedom it gives its dissidents, not the freedom it gives its assimilated conformists.',
    bio: `He was very anti-war, and he got his point across by blending his views with theater and absurd pranks to expose absurdity of politics and capture media attention. In addition to this, he also cofounded the Youth International Party (Yippies).
`,
  },
];

export default function Leaders() {
  return (
    <section className="min-h-screen" id="leaders">
      {/* Header */}
      <div className="relative bg-violet wave-divider wave-divider-cream pt-28 pb-28 overflow-hidden texture-overlay">
        {/* Sunbursts */}
        <div className="absolute top-12 right-16 opacity-15 hidden md:block">
          <SunburstSVG color="#A8D5A2" size={160} />
        </div>
        <div className="absolute bottom-16 left-8 opacity-10 hidden md:block">
          <SunburstSVG color="#E6E0F0" size={100} />
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <p className="font-typewriter text-brown/60 text-sm uppercase tracking-widest mb-2">The Faces of Change</p>
          <h1 className="section-headline text-7xl md:text-9xl text-brown text-shadow-ink leading-none mb-6">
            Key<br />
            <span className="text-sage-light">Leaders</span>
          </h1>
          
        </div>
      </div>

      {/* Leaders grid */}
      <div className="bg-cream py-20 px-6">
        <div className="max-w-5xl mx-auto">

          {/* Decorative row */}
          <div className="flex justify-center gap-3 mb-14 flex-wrap">
            {leaders.map(l => (
              <FlowerSVG key={l.name} color={l.color} size={30} className="opacity-70" />
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {leaders.map((leader, i) => (
              <div
                key={leader.name}
                className={`groovy-card overflow-hidden ${i % 3 === 0 ? 'rotate-neg-1' : i % 3 === 1 ? 'rotate-1' : ''}`}
              >
                {/* Card header with image */}
                <div className="relative h-40 overflow-hidden" style={{ backgroundColor: leader.color }}>
                  <img
                    src={leader.image}
                    alt={`${leader.name} - ${leader.role}`}
                    className="w-full h-full object-cover mix-blend-overlay opacity-40"
                  />
                  {/* Psychedelic stripe on bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-2 psychedelic-banner" />

                  {/* Name overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4">
                    <h2 className="font-display text-2xl text-brown text-shadow-ink leading-tight">
                      {leader.name}
                    </h2>
                    <div className="flex items-center gap-2 mt-1">
                      <PeaceSVG size={14} color="rgba(74,74,90,0.6)" />
                      <span className="font-typewriter text-brown/70 text-xs">{leader.years}</span>
                    </div>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-5 bg-cream">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <span
                        className="font-typewriter text-xs uppercase tracking-wide px-2 py-0.5 border rounded"
                        style={{ borderColor: leader.color, color: '#4A4A5A', backgroundColor: `${leader.color}30` }}
                      >
                        {leader.role}
                      </span>
                      <p className="font-typewriter text-brown/50 text-xs mt-1">{leader.org}</p>
                    </div>
                    <FlowerSVG color={leader.color} size={32} className="flex-shrink-0 opacity-60" />
                  </div>

                  <blockquote
                    className="font-groovy text-base leading-snug mb-3 border-l-4 pl-3"
                    style={{ color: '#4A4A5A', borderColor: leader.color }}
                  >
                    "{leader.quote}"
                  </blockquote>

                  <p className="font-body text-brown/70 text-sm leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom note */}
          <div className="mt-16 text-center">
            
          </div>
        </div>
      </div>
    </section>
  );
}
