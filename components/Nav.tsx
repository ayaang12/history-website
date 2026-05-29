import { useState, useEffect } from 'react';

type Section = 'who' | 'goals' | 'leaders' | 'events';

interface NavProps {
  active: Section;
  onNav: (s: Section) => void;
}

const links: { id: Section; label: string }[] = [
  { id: 'who', label: 'Who We Are' },
  { id: 'goals', label: 'Our Goals' },
  { id: 'leaders', label: 'Key Leaders' },
  { id: 'events', label: 'Key Events' },
];

export default function Nav({ active, onNav }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-brown shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo mark */}
        <button
          onClick={() => onNav('who')}
          className="flex items-center gap-3 group"
        >
          <PeaceIcon
            className={`w-8 h-8 transition-colors ${
              scrolled ? 'text-sage' : 'text-sage-dark'
            }`}
          />
          <span
            className={`font-groovy text-lg leading-tight hidden sm:block transition-colors ${
              scrolled ? 'text-cream' : 'text-brown'
            }`}
          >
            Peace &amp; Love
          </span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => onNav(id)}
                className={`nav-link transition-colors ${
                  scrolled ? 'text-cream hover:text-sage-light' : 'text-brown hover:text-sage-dark'
                } ${active === id ? 'active' : ''}`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden flex flex-col gap-1.5 p-2 ${scrolled ? 'text-cream' : 'text-brown'}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-current transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-current transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-current transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-brown border-t-2 border-sage px-6 py-4">
          <ul className="flex flex-col gap-4">
            {links.map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => { onNav(id); setMenuOpen(false); }}
                  className={`nav-link text-cream hover:text-sage-light w-full text-left ${active === id ? 'active' : ''}`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

function PeaceIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2.5" fill="none" />
      <line x1="20" y1="2" x2="20" y2="38" stroke="currentColor" strokeWidth="2.5" />
      <line x1="20" y1="20" x2="5" y2="33" stroke="currentColor" strokeWidth="2.5" />
      <line x1="20" y1="20" x2="35" y2="33" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  );
}
