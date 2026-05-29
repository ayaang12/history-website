import { FlowerSVG, SunburstSVG, PeaceSVG } from '../components/Icons';

export default function WhoWeAre() {
  return (
    <section className="min-h-screen" id="who">
      {/* Hero */}
      <div className="relative bg-lavender texture-overlay overflow-hidden pt-28 pb-24">
        {/* Decorative background rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
          {[300, 500, 700, 900].map(s => (
            <div key={s} className="absolute rounded-full border border-sage" style={{ width: s, height: s }} />
          ))}
        </div>

        <div className="relative max-w-5xl mx-auto px-6 z-10">
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Left: headline */}
            <div className="flex-1 text-center md:text-left">
              <span className="stamp text-sage-dark border-sage-dark text-xs mb-4 inline-block">Est. 1960</span>
              <h1 className="section-headline text-6xl md:text-8xl text-brown text-shadow-ink leading-none mb-4">
                Who<br />
                <span className="text-sage-dark">We Are</span>
              </h1>
              <div className="flex items-center gap-3 justify-center md:justify-start mt-4">
                <PeaceSVG size={32} color="#A8D5A2" />
                <p className="font-typewriter text-brown/80 text-lg">The Youth of a New Generation</p>
                <PeaceSVG size={32} color="#A8D5A2" />
              </div>
            </div>

            {/* Right: intro text block */}
            <div className="flex-1 bg-cream/10 border-2 border-sage/40 p-6 rounded-sm rotate-1">
              <p className="font-typewriter text-brown/90 text-base leading-relaxed">
                We are the sons and daughters of the postwar boom — raised on television,
                Eisenhower prosperity, and the constant shadow of the bomb. We came of age
                asking questions our parents were afraid to ask, and we refused to accept
                the answers handed down by a system built on conformity and fear.
              </p>
              <div className="mt-4 pull-quote border-sage/50 text-sage-dark text-xl">
                "Don't trust anyone over thirty."
              </div>
              <p className="font-typewriter text-brown/70 text-sm italic">— Jack Weinberg, Free Speech Movement, 1964</p>
            </div>
          </div>
        </div>

        {/* Bottom flowers */}
        <div className="absolute bottom-4 left-8 opacity-30 hidden md:block">
          <FlowerSVG color="#C4B8E0" size={64} />
        </div>
        <div className="absolute bottom-8 right-12 opacity-20 hidden md:block">
          <FlowerSVG color="#A8D5A2" size={48} />
        </div>
      </div>

      {/* Wave into cream section */}
      <div className="wave-divider wave-divider-cream bg-lavender h-12 relative" />

      {/* Who We Are — body */}
      <div className="bg-cream py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl mx-auto mb-16">
            <p className="font-body text-brown/80 leading-loose text-base">
              Between 1946 and 1964, approximately 76 million babies were born in the United States
              alone. This postwar baby boom produced the largest generation in American history —
              young people who would come to adulthood simultaneously, sharing the same cultural
              touchstones, fears, and frustrations. By the mid-1960s, this massive demographic bulge
              had reached college age. Campuses swelled. Dorms overflowed. The counterculture was not
              one thing. It was a loose, sprawling coalition — civil rights activists and anti-war
              protesters, Beat poets and folk musicians, commune builders and campus radicals. What
              united them was a shared rejection of the mainstream American Dream. They questioned
              mandatory military service, racial segregation, gender roles, corporate conformity, and
              Cold War paranoia. The movement was not limited to California or New York. From the
              Mississippi Delta to the streets of Chicago, from Southern sit-in counters to Northern
              anti-war marches, young Americans across the country were waking up. Women, Black
              Americans, Indigenous peoples, Chicano activists, and queer communities each brought
              their own urgent demands — and their participation reshaped the counterculture into
              something far broader and more enduring than simple youthful rebellion.
            </p>
          </div>

          {/* Image + quote row */}
          <div className="flex flex-col md:flex-row items-center gap-10 mt-8">
            <div className="md:w-1/2">
              <div className="vintage-frame overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Crowd of young people gathered in a field"
                  className="w-full h-64 object-cover"
                  style={{ filter: 'sepia(30%) contrast(1.1)' }}
                />
              </div>
              <p className="font-typewriter text-brown/50 text-xs text-center mt-2 italic">
                Summer of Love, Haight-Ashbury, 1967 [Placeholder Image]
              </p>
            </div>

            <div className="md:w-1/2">
              <SunburstSVG color="#A8D5A2" size={56} className="mb-4 opacity-60" />
              <blockquote className="font-groovy text-brown text-2xl leading-snug">
                "We are not hippies or radicals. We are your children —
                and we are finally asking the right questions."
              </blockquote>
              <p className="font-typewriter text-brown/50 text-sm mt-3">
                — Anonymous, Berkeley Free Speech Movement pamphlet, 1964
              </p>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { num: '76M', label: 'Baby Boomers' },
                  { num: '500+', label: 'Campus Chapters' },
                  { num: '100K+', label: 'March on DC, 1967' },
                ].map(({ num, label }) => (
                  <div key={label} className="groovy-card p-3 text-center">
                    <div className="font-display text-2xl text-violet-dark">{num}</div>
                    <div className="font-typewriter text-brown/70 text-xs mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Primary Source */}
          <div className="mt-20">
            <h2 className="section-headline text-5xl text-center text-brown mb-2">Primary Source</h2>
            <div className="flex justify-center mb-10">
              <div className="flex gap-3">
                {[0,1,2,3,4].map(i => <FlowerSVG key={i} color={['#A8D5A2','#C4B8E0','#B8E0B0','#E6E0F0','#A8D5A2'][i]} size={28} />)}
              </div>
            </div>

            <div className="max-w-3xl mx-auto bg-lavender p-8 rounded-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                <FlowerSVG color="#A8D5A2" size={96} />
              </div>
              <div className="relative z-10">
                <blockquote className="font-groovy text-sage-dark text-xl md:text-2xl leading-relaxed mb-6 border-l-4 border-sage pl-4">
                  "How many roads must a man walk down<br />
                  Before you call him a man?<br />
                  How many seas must a white dove sail<br />
                  Before she sleeps in the sand?<br />
                  Yes, and how many times must the cannonballs fly<br />
                  Before they're forever banned?"
                </blockquote>
                <p className="font-typewriter text-brown/50 text-sm mb-8">— Bob Dylan, "Blowin' in the Wind" (1963)</p>

                <p className="font-body text-brown/80 text-base leading-loose mb-4">
                  Bob Dylan's "Blowin' in the Wind" became one of the most defining anthems of the 1960s counterculture movement. Released in 1963 on his album "The Freewheelin' Bob Dylan," the song posed a series of rhetorical questions about peace, war, and freedom — questions that resonated deeply with young Americans who were questioning the values of their parents' generation. The song's haunting simplicity and poetic ambiguity allowed it to speak to both the civil rights movement and the anti-war movement simultaneously, making it a unifying call for an entire generation seeking change.
                </p>
                <p className="font-body text-brown/80 text-base leading-loose">
                  The refrain "The answer, my friend, is blowin' in the wind" suggested that the solutions to these urgent moral questions were both obvious everywhere around us and yet somehow just out of reach. For young activists marching in the streets, sitting in at lunch counters, and refusing induction into the military, the song crystallized their sense that they were fighting for truths that should be self-evident — peace instead of war, equality instead of segregation, freedom instead of conformity. The song was covered by countless artists including Peter, Paul and Mary, whose version reached #2 on the Billboard charts, bringing the message to an even wider audience and cementing Dylan's role as the voice of a generation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const colorMap: Record<string, string> = {
  sage: '#A8D5A2',
  lavender: '#E6E0F0',
  mint: '#B8E0B0',
  violet: '#C4B8E0',
};
