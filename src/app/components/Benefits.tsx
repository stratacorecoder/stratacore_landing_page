import { Check } from 'lucide-react';
import { ScrollReveal, StaggerReveal } from './animations/ScrollReveal';
import { PageSection } from './layout/SectionContainer';

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
    <PageSection id="benefits">
      <div className="grid min-w-0 items-start gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-20">
        <ScrollReveal className="min-w-0 space-y-4 sm:space-y-5 lg:sticky lg:top-28">
          <h2 className="text-2xl font-semibold leading-tight tracking-tight sm:text-3xl md:text-5xl">
            Built for the demands of enterprise operations
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-white/50 sm:text-lg md:text-xl">
            Stratacore combines reliable infrastructure software with practical tools
            for real-world deployment at scale.
          </p>
        </ScrollReveal>

        <StaggerReveal className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="stagger-item min-w-0 space-y-3 rounded-2xl border border-violet-500/35 bg-[#09090B]/60 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md transition-colors duration-300 hover:border-violet-400/50 hover:bg-[#09090B]/70 sm:p-6"
            >
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-violet-400/35 bg-violet-500/20">
                <Check className="size-5 text-violet-200" strokeWidth={2.5} />
              </div>
              <div className="min-w-0 space-y-2">
                <h3 className="text-lg font-semibold text-white">{benefit.title}</h3>
                <p className="text-sm leading-relaxed text-violet-100/70">{benefit.description}</p>
              </div>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </PageSection>
  );
}
