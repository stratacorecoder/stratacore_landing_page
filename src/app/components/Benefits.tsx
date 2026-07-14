import { Check } from 'lucide-react';
import { ScrollReveal, StaggerReveal } from './animations/ScrollReveal';

const benefits = [
  {
    title: 'Rapid Deployment',
    description: 'Get your charging network operational in days, not months, with streamlined onboarding.',
  },
  {
    title: 'Scalable Architecture',
    description: 'Grow from 10 to 10,000 charging points without performance degradation.',
  },
  {
    title: 'Open Standards',
    description: 'Built on OCPP 2.0.1 and supports major charging hardware manufacturers.',
  },
  {
    title: 'Real-time Analytics',
    description: 'Make data-driven decisions with insights into usage, revenue, and performance.',
  },
  {
    title: 'Revenue Optimization',
    description: 'Dynamic pricing, subscription management, and payment processing built in.',
  },
  {
    title: '24/7 Support',
    description: 'Dedicated enterprise support to keep mission-critical networks online.',
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="relative px-4 py-24 md:px-8 md:py-28 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <ScrollReveal className="space-y-5 lg:sticky lg:top-28">
            <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              Built for the demands of enterprise operations
            </h2>
            <p className="max-w-xl text-lg leading-relaxed text-white/50 md:text-xl">
              Stratacore combines reliable infrastructure software with practical tools
              for real-world deployment at scale.
            </p>
          </ScrollReveal>

          <StaggerReveal className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="stagger-item space-y-3 rounded-2xl border border-violet-500/35 bg-[#09090B]/60 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md transition-colors duration-300 hover:border-violet-400/50 hover:bg-[#09090B]/70"
              >
                <div className="flex size-11 items-center justify-center rounded-xl border border-violet-400/35 bg-violet-500/20">
                  <Check className="size-5 text-violet-200" strokeWidth={2.5} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-white">{benefit.title}</h3>
                  <p className="text-sm leading-relaxed text-violet-100/70">{benefit.description}</p>
                </div>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </div>
    </section>
  );
}
