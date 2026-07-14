import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from './animations/ScrollReveal';

export function EnterpriseCTA({ onContact }: { onContact: () => void }) {
  return (
    <section className="relative overflow-x-clip px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-2xl border border-orange-500/40 bg-[#09090B]/70 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-xl sm:rounded-3xl sm:p-10 md:p-16">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-orange-600/20 via-orange-500/5 to-transparent" />
            <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-orange-500/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 size-72 rounded-full bg-orange-600/15 blur-3xl" />

            <div className="relative mx-auto max-w-3xl space-y-6 text-center sm:space-y-8">
              <div className="space-y-4 sm:space-y-5">
                <h2 className="text-2xl font-semibold leading-tight tracking-tight sm:text-3xl md:text-5xl">
                  Ready to transform your EV charging infrastructure?
                </h2>
                <p className="text-base leading-relaxed text-white/60 sm:text-lg md:text-xl">
                  Schedule a personalized demo and see how Stratacore helps teams
                  deploy faster and operate with confidence.
                </p>
              </div>

              <div className="flex justify-center pt-2">
                <button
                  type="button"
                  onClick={onContact}
                  className="group flex w-full items-center justify-center gap-3 rounded-full bg-orange-600 px-6 py-3.5 text-sm font-medium text-white shadow-xl shadow-orange-600/30 transition-all duration-300 hover:bg-orange-500 active:scale-[0.98] sm:w-auto sm:px-8 sm:py-4 sm:text-base"
                >
                  Book Demo
                  <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

              <div className="flex flex-col items-center justify-center gap-2 pt-4 text-sm text-white/50 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-3 sm:pt-6">
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
