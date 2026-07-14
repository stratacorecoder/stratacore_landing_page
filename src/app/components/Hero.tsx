import { useRef } from 'react';
import { Play } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import heroVideo from '../../imports/enhanced_stratabg.mp4';
import { CapabilityStrip } from './CapabilityStrip';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

gsap.registerPlugin(useGSAP);

export function Hero({ onExplore }: { onExplore: () => void }) {
  const containerRef = useRef<HTMLElement>(null);
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (reduced) return;

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from('.hero-badge', { opacity: 0, y: 18, duration: 0.55 })
        .from('.hero-headline', { opacity: 0, y: 44, duration: 0.85 }, '-=0.25')
        .from('.hero-subtext', { opacity: 0, y: 24, duration: 0.65 }, '-=0.45')
        .from('.hero-cta', { opacity: 0, y: 20, duration: 0.55 }, '-=0.35')
        .from('.hero-capabilities', { opacity: 0, y: 16, duration: 0.6 }, '-=0.4');
    },
    { scope: containerRef, dependencies: [reduced] },
  );

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[100dvh] w-full flex-col overflow-hidden"
    >
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#09090B]/75 via-[#09090B]/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-[#09090B]/25" />
      </div>

      <div className="relative flex min-h-[100dvh] w-full flex-1 flex-col">
        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 pb-6 pt-24 md:px-8 lg:px-12">
          <div className="max-w-2xl space-y-6">
            <div className="hero-badge inline-flex items-center rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 backdrop-blur-sm">
              <span className="text-sm font-medium text-violet-300">
                EV Infrastructure Platform
              </span>
            </div>

            <h1 className="hero-headline text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl lg:text-6xl">
              Power the future of
              <span className="mt-1 block bg-gradient-to-r from-white via-violet-100 to-violet-300/80 bg-clip-text text-transparent">
                electric mobility
              </span>
            </h1>

            <p className="hero-subtext max-w-xl text-lg leading-relaxed text-white/70 md:text-xl">
              Enterprise charging software to manage networks, optimize energy,
              and deliver reliable driver experiences at scale.
            </p>

            <div className="hero-cta flex flex-wrap items-center gap-4 pt-1">
              <button
                type="button"
                onClick={onExplore}
                className="group flex items-center gap-3 rounded-full bg-violet-600 px-8 py-4 font-medium text-white shadow-lg shadow-violet-600/30 transition-all duration-300 hover:bg-violet-500 active:scale-[0.98]"
              >
                <Play className="size-5 fill-white text-white" />
                Explore Platform
              </button>
            </div>
          </div>
        </div>

        <CapabilityStrip embedded />
      </div>
    </section>
  );
}
