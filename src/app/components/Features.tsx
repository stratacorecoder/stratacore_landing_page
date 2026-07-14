import { Activity, MapPin, BarChart2, Shield, Cloud, TrendingUp } from 'lucide-react';
import { ScrollReveal, StaggerReveal } from './animations/ScrollReveal';

const features = [
  {
    icon: Activity,
    title: 'Real-Time Monitoring',
    description: 'Monitor charger status, sessions, power usage, and device health in real time.',
    accent: true,
  },
  {
    icon: MapPin,
    title: 'Station Management',
    description: 'Manage multiple charging stations and track performance from one dashboard.',
    accent: false,
  },
  {
    icon: BarChart2,
    title: 'Analytics and Reporting',
    description: 'Detailed analytics on energy usage, session data, revenue, and network trends.',
    accent: false,
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Secure authentication, encrypted communication, and role-based access control.',
    accent: true,
  },
  {
    icon: Cloud,
    title: 'Cloud or On-Premise',
    description: 'Deploy on your preferred infrastructure to fit compliance and operations.',
    accent: false,
  },
  {
    icon: TrendingUp,
    title: 'Built for Scale',
    description: 'Designed to grow from a single site to nationwide charging networks.',
    accent: false,
  },
];

export function Features() {
  return (
    <section id="features" className="relative overflow-x-clip px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28 lg:px-12">
      <div className="relative mx-auto max-w-7xl">
        <ScrollReveal className="mb-10 max-w-3xl space-y-3 sm:mb-14 sm:space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-5xl">
            Everything you need to scale
          </h2>
          <p className="text-base text-zinc-300 sm:text-lg md:text-xl">
            Built for enterprise operations, designed for teams that need clarity under load.
          </p>
        </ScrollReveal>

        <StaggerReveal className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`stagger-item group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-[#09090B]/55 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md transition-colors duration-300 sm:p-8 ${
                feature.accent
                  ? 'border-emerald-500/45 hover:border-emerald-400/60 hover:bg-[#09090B]/65'
                  : 'border-emerald-500/20 hover:border-emerald-400/35 hover:bg-[#09090B]/65'
              }`}
            >
              <div className="relative flex flex-1 flex-col space-y-5">
                <div
                  className={`flex size-12 items-center justify-center rounded-xl border ${
                    feature.accent
                      ? 'border-emerald-400/35 bg-emerald-500/20'
                      : 'border-emerald-400/20 bg-emerald-500/10'
                  }`}
                >
                  <feature.icon
                    className={`size-6 ${feature.accent ? 'text-emerald-200' : 'text-emerald-100/90'}`}
                    strokeWidth={1.5}
                  />
                </div>
                <div className="space-y-2.5">
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="text-base leading-relaxed text-zinc-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
