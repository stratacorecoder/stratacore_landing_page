import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from './animations/ScrollReveal';

export function EnterpriseCTA({ onContact }: { onContact: () => void }) {
  return (
    <section className="relative px-4 py-24 md:px-8 md:py-28 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl border border-orange-500/40 bg-[#09090B]/70 p-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-xl md:p-16">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-orange-600/20 via-orange-500/5 to-transparent" />
            <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-orange-500/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 size-72 rounded-full bg-orange-600/15 blur-3xl" />

            <div className="relative mx-auto max-w-3xl space-y-8 text-center">
              <div className="space-y-5">
                <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
                  Ready to transform your EV charging infrastructure?
                </h2>
                <p className="text-lg leading-relaxed text-white/60 md:text-xl">
                  Schedule a personalized demo and see how Stratacore helps teams
                  deploy faster and operate with confidence.
                </p>
              </div>

              <div className="flex justify-center pt-2">
                <button
                  type="button"
                  onClick={onContact}
                  className="group flex items-center gap-3 rounded-full bg-orange-600 px-8 py-4 font-medium text-white shadow-xl shadow-orange-600/30 transition-all duration-300 hover:bg-orange-500 active:scale-[0.98]"
                >
                  Book Demo
                  <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 pt-6 text-sm text-white/50">
                {['Fast Deployment', 'Cloud or On-Premise', 'Built for Scale'].map((label) => (
                  <span key={label} className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-orange-400" />
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
