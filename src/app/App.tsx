import { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { DashboardPreview } from './components/DashboardPreview';
import { Benefits } from './components/Benefits';
import { EnterpriseCTA } from './components/EnterpriseCTA';
import { Navigation } from './components/Navigation';
import { Contact } from './components/Contact';
import bgImage from '../imports/bg_for_landingpage.png';

export type Page = 'home' | 'contact';

export default function App() {
  const [page, setPage] = useState<Page>('home');
  const [scrollTarget, setScrollTarget] = useState<string | null>(null);

  // After switching to home, scroll to the pending target section
  useEffect(() => {
    if (scrollTarget && page === 'home') {
      const timer = setTimeout(() => {
        document.getElementById(scrollTarget)?.scrollIntoView({ behavior: 'smooth' });
        setScrollTarget(null);
      }, 80);
      return () => clearTimeout(timer);
    }
  }, [page, scrollTarget]);

  const navigateToSection = (sectionId: string) => {
    if (page !== 'home') {
      setPage('home');
      setScrollTarget(sectionId);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {page === 'home' && (
        <div className="fixed inset-0 z-0 pointer-events-none">
          <img
            src={bgImage}
            alt=""
            className="w-full h-full object-cover object-center"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-[#09090B]/72" />
        </div>
      )}

      <div className="relative z-10 min-h-screen text-white">
        <Navigation page={page} onNavigate={setPage} onNavigateToSection={navigateToSection} />

        {page === 'home' ? (
          <>
            <Hero onExplore={() => navigateToSection('benefits')} />
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
