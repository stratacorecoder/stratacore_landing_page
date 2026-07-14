import { useRef } from 'react';
import { Play } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import heroBg from '../../imports/stratabg.webm';
import { CapabilityStrip } from './CapabilityStrip';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

gsap.registerPlugin(useGSAP);

export function Hero() {
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
      className="relative flex min-h-[100dvh] w-full max-w-full flex-col overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full min-h-full min-w-full object-cover object-[70%_center] md:object-center"
        >
          <source src={heroBg} type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-[#09090B]/55 md:hidden" />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-[#09090B]/75 via-[#09090B]/35 to-transparent md:block" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090B]/45 via-transparent to-[#09090B]/20 md:from-transparent md:via-transparent md:to-[#09090B]/25" />
      </div>

      <div className="relative flex w-full max-w-full flex-1 flex-col">
        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 pb-4 pt-20 sm:px-6 sm:pb-6 sm:pt-24 md:px-8 lg:px-12">
          <div className="max-w-2xl space-y-4 sm:space-y-6">
            <div className="hero-badge inline-flex items-center rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1.5 backdrop-blur-sm sm:px-4 sm:py-2">
              <span className="text-xs font-medium text-violet-300 sm:text-sm">
                EV Infrastructure Platform
              </span>
            </div>

            <h1 className="hero-headline text-[1.75rem] font-semibold leading-[1.1] tracking-tight sm:text-3xl md:text-5xl lg:text-6xl">
              Power the future of
              <span className="mt-1 block bg-gradient-to-r from-white via-violet-100 to-violet-300/80 bg-clip-text text-transparent">
                electric mobility
              </span>
            </h1>

            <p className="hero-subtext max-w-xl text-base leading-relaxed text-white/70 sm:text-lg md:text-xl">
              Enterprise charging software to manage networks, optimize energy,
              and deliver reliable driver experiences at scale.
            </p>

            <div className="hero-cta flex flex-wrap items-center gap-3 pt-1 sm:gap-4">
              <a
                href="#features"
                className="group flex w-full items-center justify-center gap-3 rounded-full bg-violet-600 px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-violet-600/30 transition-all duration-300 hover:bg-violet-500 active:scale-[0.98] sm:w-auto sm:px-8 sm:py-4 sm:text-base"
              >
                <Play className="size-5 fill-white text-white" />
                Explore Platform
              </a>
            </div>
          </div>
        </div>

        <CapabilityStrip embedded />
      </div>
    </section>
  );
}
