import { useState, useEffect, useRef } from 'react';
import Nav from './components/Nav';
import WhoWeAre from './pages/WhoWeAre';
import Goals from './pages/Goals';
import Leaders from './pages/Leaders';
import Events from './pages/Events';
import { FlowerSVG, PeaceSVG } from './components/Icons';

type Section = 'who' | 'goals' | 'leaders' | 'events';

const sectionOrder: Section[] = ['who', 'goals', 'leaders', 'events'];

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('who');
  const containerRef = useRef<HTMLDivElement>(null);

  function scrollToSection(id: Section) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  }

  // Update active section based on scroll position
  useEffect(() => {
    const onScroll = () => {
      for (const id of [...sectionOrder].reverse()) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(id);
            return;
          }
        }
      }
      setActiveSection('who');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-cream font-body">
      <Nav active={activeSection} onNav={scrollToSection} />

      <main>
        <WhoWeAre />
        <Goals />
        <Leaders />
        <Events />
      </main>

      <Footer onNav={scrollToSection} />
    </div>
  );
}

function Footer({ onNav }: { onNav: (s: Section) => void }) {
  return (
    <footer className="bg-ink text-cream py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Logo area */}
          <div className="max-w-xs">
            <div className="flex items-center gap-3 mb-3">
              <PeaceSVG size={36} color="#A8D5A2" />
              <span className="font-groovy text-sage text-2xl">Peace &amp; Love</span>
            </div>
            <p className="font-typewriter text-cream/50 text-sm leading-relaxed">
              A living archive of the youth counterculture movement of the 1960s — its people,
              its ideas, and its lasting impact on American life.
            </p>
            <div className="flex gap-2 mt-4">
              {[0,1,2,3,4].map(i => (
                <FlowerSVG key={i} color={['#A8D5A2','#C4B8E0','#B8E0B0','#E6E0F0','#A8D5A2'][i]} size={22} className="opacity-60" />
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-typewriter text-sage text-sm uppercase tracking-widest mb-4">Sections</h3>
            <ul className="space-y-2">
              {([
                { id: 'who', label: 'Who We Are' },
                { id: 'goals', label: 'Our Goals' },
                { id: 'leaders', label: 'Key Leaders' },
                { id: 'events', label: 'Key Events' },
              ] as { id: Section; label: string }[]).map(({ id, label }) => (
                <li key={id}>
                  <button
                    onClick={() => onNav(id)}
                    className="font-body text-cream/60 hover:text-sage transition-colors text-sm"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Manifesto snippet */}
          <div className="max-w-sm">
            <h3 className="font-typewriter text-sage text-sm uppercase tracking-widest mb-4">The Call</h3>
            <blockquote className="font-groovy text-cream/80 text-lg leading-snug border-l-2 border-sage/40 pl-4">
              "We shall overcome, we shall overcome,
              we shall overcome some day."
            </blockquote>
            <p className="font-typewriter text-cream/40 text-xs mt-2">
              — Traditional, adapted for the Civil Rights Movement
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-cream/10 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-typewriter text-cream/30 text-xs">
            This website is a historical education resource. All content is for informational purposes.
          </p>
          <p className="font-typewriter text-cream/30 text-xs">
            "The arc of the moral universe is long, but it bends toward justice."
          </p>
        </div>
      </div>
    </footer>
  );
}
