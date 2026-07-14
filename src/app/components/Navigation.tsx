import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import logoImage from '../../imports/logolandingpage.png';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import { finalizeSectionScroll } from '../utils/scrollToSection';

gsap.registerPlugin(useGSAP);

type Page = 'home' | 'contact';

interface NavigationProps {
  page: Page;
  onNavigate: (page: Page) => void;
  onNavigateToSection: (sectionId: string) => void;
}

const SECTION_LINKS = [
  { label: 'Features', id: 'features' },
  { label: 'Solutions', id: 'solutions' },
] as const;

export function Navigation({ page, onNavigate, onNavigateToSection }: NavigationProps) {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useGSAP(
    () => {
      if (reduced) return;
      gsap.from(navRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
      });
    },
    { scope: navRef, dependencies: [reduced] },
  );

  const linkClass = (active: boolean) =>
    `text-sm font-medium transition-colors duration-200 ${
      active ? 'text-white' : 'text-white/60 hover:text-white'
    }`;

  const mobileLinkClass =
    'rounded-xl px-4 py-3 text-left text-sm font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white';

  const goHome = () => {
    onNavigate('home');
    window.history.replaceState(null, '', window.location.pathname);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goContact = () => {
    onNavigate('contact');
    window.history.replaceState(null, '', window.location.pathname);
    setMobileOpen(false);
  };

  const handleSectionClick = (sectionId: string) => {
    setMobileOpen(false);

    if (page === 'home') {
      window.setTimeout(() => finalizeSectionScroll(sectionId), 900);
      return;
    }

    onNavigateToSection(sectionId);
  };

  const renderSectionLink = (label: string, sectionId: string, className: string) => {
    if (page === 'home') {
      return (
        <a
          key={sectionId}
          href={`#${sectionId}`}
          className={className}
          onClick={() => handleSectionClick(sectionId)}
        >
          {label}
        </a>
      );
    }

    return (
      <button
        key={sectionId}
        type="button"
        className={className}
        onClick={() => handleSectionClick(sectionId)}
      >
        {label}
      </button>
    );
  };

  return (
    <>
      <div className="pointer-events-none fixed top-0 left-0 right-0 z-40 h-px bg-gradient-to-r from-transparent via-violet-500/35 to-transparent" />
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? 'border-white/10 bg-[#09090B]/90 shadow-lg shadow-violet-950/20 backdrop-blur-2xl'
            : 'border-white/[0.06] bg-[#09090B]/70 backdrop-blur-xl'
        }`}
        style={{ fontFamily: "'Sora', sans-serif" }}
      >
        <div className="mx-auto flex h-16 w-full max-w-7xl min-w-0 items-center justify-between gap-3 px-4 md:h-[4.5rem] md:gap-4 md:px-8">
          <button
            type="button"
            onClick={goHome}
            className="flex min-w-0 shrink items-center gap-2 sm:gap-3"
          >
            <img
              src={logoImage}
              alt="Stratacore logo"
              className="h-8 w-auto shrink-0 object-contain sm:h-9 md:h-10"
              style={{ mixBlendMode: 'screen' }}
            />
            <span
              className="truncate text-base font-bold tracking-wide sm:text-lg md:text-[1.2rem]"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              <span className="text-white">Strata</span>
              <span className="text-violet-400">core</span>
            </span>
          </button>

          <div className="hidden items-center gap-8 lg:flex">
            <button
              type="button"
              onClick={goHome}
              className={linkClass(page === 'home')}
            >
              Home
            </button>

            {SECTION_LINKS.map(({ label, id }) =>
              renderSectionLink(label, id, linkClass(false)),
            )}

            <button
              type="button"
              onClick={goContact}
              className={linkClass(page === 'contact')}
            >
              Contact
            </button>
          </div>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={goContact}
              className="hidden rounded-full bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-violet-600/25 transition-all duration-300 hover:bg-violet-500 active:scale-[0.98] sm:inline-flex"
            >
              Book Demo
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              className="inline-flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white lg:hidden"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="border-t border-white/10 bg-[#09090B]/95 px-4 py-4 backdrop-blur-2xl lg:hidden">
            <div className="flex flex-col gap-1">
              <button type="button" onClick={goHome} className={mobileLinkClass}>
                Home
              </button>

              {SECTION_LINKS.map(({ label, id }) =>
                renderSectionLink(label, id, mobileLinkClass),
              )}

              <button type="button" onClick={goContact} className={mobileLinkClass}>
                Contact
              </button>

              <button
                type="button"
                onClick={goContact}
                className="mt-2 rounded-full bg-violet-600 px-4 py-3 text-sm font-semibold text-white"
              >
                Book Demo
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
