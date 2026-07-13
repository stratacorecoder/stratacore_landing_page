export function Statistics() {
  const stats = [
    { value: '500K+', label: 'Charging Sessions Managed' },
    { value: '99.9%', label: 'Platform Uptime' },
    { value: '2.4M kWh', label: 'Energy Delivered' },
    { value: '50+', label: 'Enterprise Partners' },
  ];

  return (
    <section className="relative py-32 px-16">
      <div className="max-w-[1440px] mx-auto">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F97316]/5 to-transparent blur-3xl" />
        
        <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl p-20">
          <div className="grid grid-cols-4 gap-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="text-5xl font-semibold bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-white/60">{stat.label}</div>
                {index < stats.length - 1 && (
                  <div className="absolute top-1/2 -translate-y-1/2 right-0 h-24 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
