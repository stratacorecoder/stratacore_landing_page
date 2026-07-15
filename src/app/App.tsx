import { useState, useEffect, useCallback, useLayoutEffect, useRef } from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { DashboardPreview } from './components/DashboardPreview';
import { Benefits } from './components/Benefits';
import { EnterpriseCTA } from './components/EnterpriseCTA';
import { Navigation } from './components/Navigation';
import { Contact } from './components/Contact';
import bgImage from '../imports/bg_for_landingpage.png';
import {
  isSectionId,
  waitForSectionAndScroll,
} from './utils/scrollToSection';

export type Page = 'home' | 'contact';

export default function App() {
  const [page, setPage] = useState<Page>('home');
  const [scrollTarget, setScrollTarget] = useState<string | null>(null);
  const scrollRequestRef = useRef(0);

  const navigateToSection = useCallback((sectionId: string) => {
    scrollRequestRef.current += 1;
    setPage('home');
    setScrollTarget(sectionId);
  }, []);

  useLayoutEffect(() => {
    if (!scrollTarget || page !== 'home') return;

    const target = scrollTarget;
    const requestId = scrollRequestRef.current;

    waitForSectionAndScroll(target, () => {
      if (requestId === scrollRequestRef.current) {
        setScrollTarget(null);
      }
    });
  }, [page, scrollTarget]);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!isSectionId(hash)) return;

    setPage('home');
    setScrollTarget(hash);
  }, []);

  return (
    <>
      {page === 'home' && (
        <div className="pointer-events-none fixed inset-0 z-0">
          <img
            src={bgImage}
            alt=""
            className="h-full w-full object-cover object-center"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-[#09090B]/72" />
        </div>
      )}

      <div className="relative z-10 min-h-dvh w-full min-w-0 overflow-x-clip text-white">
        <Navigation
          page={page}
          onNavigate={setPage}
          onNavigateToSection={navigateToSection}
        />

        {page === 'home' ? (
          <>
            <Hero />
            <Features />
            <DashboardPreview />
            <Benefits />
            <EnterpriseCTA onContact={() => setPage('contact')} />
          </>
        ) : (
          <Contact />
        )}
      </div>
    </>
  );
}
