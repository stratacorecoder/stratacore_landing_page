import { Activity, MapPin, BarChart2, Shield, Cloud, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Activity,
    title: 'Real-Time Monitoring',
    description: 'Monitor charger status, charging sessions, power usage, and device health in real time.',
  },
  {
    icon: MapPin,
    title: 'Station Management',
    description: 'Manage multiple charging stations, organize locations, and track performance from one dashboard.',
  },
  {
    icon: BarChart2,
    title: 'Analytics and Reporting',
    description: 'Gain insights with detailed analytics on energy usage, session data, revenue, and more.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Secure authentication, encrypted communication, and role-based access control for your team.',
  },
  {
    icon: Cloud,
    title: 'Cloud or On-Premise',
    description: 'Deploy on your preferred infrastructure, cloud or on-premise, to fit your business needs.',
  },
  {
    icon: TrendingUp,
    title: 'Built for Scale',
    description: 'Designed to scale with your business, from a single site to nationwide networks.',
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-32 px-16">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-sm text-emerald-400 font-medium">
            Platform Features
          </div>
          <h2 className="text-5xl font-semibold tracking-tight hyphens-none">
            Everything you need to scale
          </h2>
          <p className="text-xl text-white/50 max-w-2xl mx-auto hyphens-none">
            Built for enterprise, designed for simplicity
          </p>
        </div>

        {/* Feature Cards — 3 columns, 2 rows */}
        <div className="grid grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-10 rounded-3xl border border-white/5 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm hover:border-emerald-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/0 via-emerald-500/0 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative space-y-6">
                {/* Icon */}
                <div className="size-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 border border-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="size-7 text-emerald-400" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold hyphens-none">{feature.title}</h3>
                  <p className="text-white/60 leading-relaxed hyphens-none break-normal">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
