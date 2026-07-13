import { Check } from 'lucide-react';

const benefits = [
  {
    title: 'Rapid Deployment',
    description: 'Get your charging network operational in days, not months, with our streamlined onboarding process.',
  },
  {
    title: 'Scalable Architecture',
    description: 'Grow from 10 to 10,000 charging points without performance degradation or infrastructure changes.',
  },
  {
    title: 'Open Standards',
    description: 'Built on OCPP 2.0.1 and supports all major charging hardware manufacturers seamlessly.',
  },
  {
    title: 'Real-time Analytics',
    description: 'Make data-driven decisions with comprehensive insights into usage patterns, revenue, and performance.',
  },
  {
    title: 'Revenue Optimization',
    description: 'Dynamic pricing, subscription management, and seamless payment processing built-in.',
  },
  {
    title: '24/7 Support',
    description: 'Dedicated enterprise support team available around the clock to ensure zero downtime.',
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="relative py-32 px-16">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-sm text-violet-400 font-medium">
                Platform Benefits
              </div>
              <h2 className="text-5xl font-semibold tracking-tight leading-tight">
                Built for the demands of enterprise operations
              </h2>
              <p className="text-xl text-white/50 leading-relaxed">
                Stratacore combines cutting-edge technology with practical solutions designed for real-world deployment at scale.
              </p>
            </div>

          </div>

          {/* Right Benefits List */}
          <div className="grid grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="space-y-3">
                <div className="size-12 rounded-2xl bg-gradient-to-br from-violet-500/20 to-violet-500/5 border border-violet-500/25 flex items-center justify-center">
                  <Check className="size-6 text-violet-400" strokeWidth={2.5} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">{benefit.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
