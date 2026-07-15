import { useRef } from 'react';
import contactBg from '../../imports/contactbg.png';
import { MapPin, Mail, Facebook } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { StaggerReveal } from './animations/ScrollReveal';
import { SectionContainer } from './layout/SectionContainer';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

gsap.registerPlugin(useGSAP);

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (reduced) return;
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from('.contact-heading', { opacity: 0, y: 32, duration: 0.8 })
        .from('.contact-subtext', { opacity: 0, y: 20, duration: 0.65 }, '-=0.45');
    },
    { scope: sectionRef, dependencies: [reduced] },
  );

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-dvh w-full min-w-0 flex-col overflow-x-clip pb-[env(safe-area-inset-bottom,0px)]"
    >
      <div className="pointer-events-none fixed inset-0 z-0">
        <img
          src={contactBg}
          alt=""
          className="h-full w-full max-w-none object-cover object-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#05030F]/75" />
      </div>

      <div className="relative z-10 flex min-w-0 flex-1 flex-col items-center justify-center pb-16 pt-nav sm:pb-20">
        <SectionContainer className="max-w-5xl space-y-8 sm:space-y-12">
          <div className="space-y-4 text-center sm:space-y-5">
            <h1 className="contact-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-6xl">
              Let&apos;s build the future
              <span className="mt-1 block text-violet-400">of EV charging together</span>
            </h1>
            <p className="contact-subtext mx-auto max-w-xl text-base text-white/50 sm:text-lg">
              Have questions or ready to get started? Our team can help you power smarter,
              scale faster, and go further.
            </p>
          </div>

          <StaggerReveal className="grid min-w-0 grid-cols-1 gap-5 lg:grid-cols-2">
            <div
              className="stagger-item flex min-w-0 flex-col items-center space-y-5 rounded-3xl border border-violet-500/20 bg-violet-950/20 p-8 text-center backdrop-blur-xl"
              style={{ boxShadow: '0 0 40px rgba(124,58,237,0.12)' }}
            >
              <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl border border-violet-500/30 bg-violet-500/20">
                <Mail className="size-8 text-violet-300" strokeWidth={1.5} />
              </div>
              <div className="min-w-0 space-y-2">
                <h3 className="text-xl font-semibold text-white">Get in Touch</h3>
                <p className="text-sm leading-relaxed text-white/50">
                  Reach out through any channel below. We would love to hear from you.
                </p>
              </div>
              <a
                href="https://www.facebook.com/profile.php?id=61591692530471"
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10 transition-colors hover:bg-violet-500/20"
              >
                <Facebook className="size-5 text-violet-300" />
              </a>
            </div>

            <div className="min-w-0 space-y-4">
              <div className="stagger-item rounded-2xl border border-white/8 bg-white/[0.04] px-6 py-5 backdrop-blur-xl transition-colors hover:border-violet-500/25">
                <div className="flex min-w-0 items-start gap-4">
                  <div className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/15">
                    <MapPin className="size-5 text-violet-300" strokeWidth={1.5} />
                  </div>
                  <div className="min-w-0">
                    <div className="mb-1 text-xs uppercase tracking-wider text-white/40">Address</div>
                    <p className="text-sm leading-relaxed text-white/80">
                      55 Cauayan Street Barangay Limmara,
                      <br />
                      Vilage Project 7, Quezon City,
                      <br />
                      Philippines, 1105
                    </p>
                  </div>
                </div>
              </div>

              <div className="stagger-item rounded-2xl border border-white/8 bg-white/[0.04] px-6 py-5 backdrop-blur-xl transition-colors hover:border-violet-500/25">
                <div className="flex min-w-0 items-start gap-4">
                  <div className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/15">
                    <Mail className="size-5 text-violet-300" strokeWidth={1.5} />
                  </div>
                  <div className="min-w-0">
                    <div className="mb-1 text-xs uppercase tracking-wider text-white/40">Email</div>
                    <a
                      href="mailto:stratacoreceo@gmail.com"
                      className="break-all text-sm text-white/80 transition-colors hover:text-violet-300"
                    >
                      stratacoreceo@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </StaggerReveal>
        </SectionContainer>
      </div>
    </section>
  );
}
