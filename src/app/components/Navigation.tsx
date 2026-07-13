import logoImage from '../../imports/logolandingpage.png';

type Page = 'home' | 'contact';

interface NavigationProps {
  page: Page;
  onNavigate: (page: Page) => void;
  onNavigateToSection: (sectionId: string) => void;
}

export function Navigation({ page, onNavigate, onNavigateToSection }: NavigationProps) {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const links: { label: string; action: () => void }[] = [
    { label: 'Home',      action: () => { onNavigate('home'); scrollToTop(); } },
    { label: 'Features',  action: () => onNavigateToSection('features') },
    { label: 'Solutions', action: () => onNavigateToSection('solutions') },
    { label: 'Contact',   action: () => onNavigate('contact') },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.07] backdrop-blur-2xl"
      style={{
        background: 'rgba(9, 9, 11, 0.78)',
        boxShadow: '0 1px 0 rgba(139, 92, 246, 0.18), 0 8px 32px rgba(139, 92, 246, 0.08)',
        fontFamily: "'Sora', sans-serif",
      }}
    >
      {/* Purple ambient glow line along the bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-10 py-4">
        {/* Brand logo */}
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-3 flex-shrink-0"
        >
          <img
            src={logoImage}
            alt="Stratacore logo"
            className="h-11 w-auto object-contain"
            style={{ mixBlendMode: 'screen' }}
          />
          <span
            className="text-[1.35rem] font-bold tracking-wide"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            <span className="text-white">Strata</span><span style={{ color: '#7C3AED' }}>core</span>
          </span>
        </button>

        {/* Navigation links */}
        <div className="flex items-center gap-10">
          {links.map(({ label, action }) => (
            <button
              key={label}
              onClick={action}
              className={`text-sm font-medium transition-colors duration-200 ${
                (label === 'Contact' && page === 'contact') ||
                (label !== 'Contact' && page === 'home')
                  ? 'text-white'
                  : 'text-white/60 hover:text-white'
              } hyphens-none`}
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Book Demo CTA */}
        <button
          onClick={() => onNavigate('contact')}
          className="relative px-6 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03]"
          style={{
            fontFamily: "'Sora', sans-serif",
            background: 'linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)',
            boxShadow: '0 0 18px rgba(124, 58, 237, 0.4), 0 2px 8px rgba(124, 58, 237, 0.25)',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.boxShadow =
              '0 0 28px rgba(124, 58, 237, 0.6), 0 4px 12px rgba(124, 58, 237, 0.4)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.boxShadow =
              '0 0 18px rgba(124, 58, 237, 0.4), 0 2px 8px rgba(124, 58, 237, 0.25)';
          }}
        >
          Book Demo
        </button>
      </div>
    </nav>
  );
}
