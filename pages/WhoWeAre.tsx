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
                Youth/Counterculture <br />
                <span className="text-sage-dark">Movement</span>
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
                The Youth/Counterculture Movement emerged during the 1960s and early 1970s.
Mostly made up of young people, it challenged traditional American values,
opposed the Vietnam War, promoted peace, civil rights, freedom of expression,
and encouraged experimentation with music, fashion, spirituality, and lifestyle.
Many members became known as “hippies.”
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
              The Youth/Counterculture Movement was a social movement during the 1960s and early 1970s made up mostly of young people who rejected traditional American values and lifestyles. Many members of the movement opposed war, supported civil rights, experimented with new styles of music and fashion, promoted peace, freedom, and self-expression. They were often called “hippies”.
            </p>
          </div>

          {/* Image + quote row */}
          <div className="flex flex-col md:flex-row items-center gap-10 mt-8">
            <div className="md:w-1/2">
              <div className="vintage-frame overflow-hidden">
                <img
                  src="https://www.slate.com/content/dam/slate/articles/news_and_politics/politics/2016/04/trump_baby_boom/160429_POL_Vietnam-Protest-Berkeley-CA.jpg.CROP.original-original.jpg"
                  alt="Crowd of young people gathered in a field"
                  className="w-full h-64 object-cover"
                  style={{ filter: 'sepia(30%) contrast(1.1)' }}
                />
              </div>
              <p className="font-typewriter text-brown/50 text-xs text-center mt-2 italic">
                Students protesting the Vietnam War at the University of California, Berkeley, 1967
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
                 
                  { num: '2500+', label: 'Berkely Protests' },
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
            <h2 className="section-headline text-5xl text-center text-brown mb-2">Prevalence in Pop Culture</h2>
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
                  An important primary source from the Youth/Counterculture Movement is the song “Blowin’ in the Wind” by Bob Dylan, which was released in 1963. The song asks questions about war, peace, and freedom, such as how many times people must suffer before change happens. It became an anthem for young people who wanted social change and protested against injustice and war. The first line in the song is “How many roads must a man walk down / Before you call him a man?”

                </p>
                <p className="font-body text-brown/80 text-base leading-loose">
                  The song “Blowin' in the Wind” was significant because it expressed how many young people felt in the 1960s. The song inspired people to protest war and fight for equal rights. It also showed how music could bring people together and spread ideas. The song became a symbol of the Youth/Counterculture Movement because it promoted peace, change, and questioning the government. Today, it is still known as one of the most famous protest songs in American history.
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
