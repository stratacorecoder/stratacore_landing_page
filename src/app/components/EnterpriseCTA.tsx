import { ArrowRight } from 'lucide-react';

export function EnterpriseCTA({ onContact }: { onContact: () => void }) {
  return (
    <section className="relative py-32 px-16">
      <div className="max-w-[1440px] mx-auto">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F97316]/20 via-[#F97316]/5 to-[#F97316]/20 blur-3xl opacity-30" />
        
        <div className="relative rounded-3xl border border-[#F97316]/30 bg-gradient-to-br from-[#F97316]/10 via-transparent to-transparent backdrop-blur-xl overflow-hidden">
          {/* Glow Effect */}
          <div className="absolute -top-40 -right-40 size-96 bg-[#F97316]/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 size-96 bg-[#F97316]/10 rounded-full blur-3xl" />
          
          <div className="relative px-20 py-24 text-center space-y-8">
            <div className="space-y-6 max-w-3xl mx-auto">
              <h2 className="text-5xl font-semibold tracking-tight leading-tight">
                Ready to transform your EV charging infrastructure?
              </h2>
              <p className="text-xl text-white/60 leading-relaxed">
                Join leading enterprises worldwide in delivering exceptional charging experiences. Schedule a personalized demo with our team.
              </p>
            </div>

            <div className="flex items-center justify-center pt-4">
              <button onClick={onContact} className="group px-8 py-4 rounded-full bg-[#F97316] hover:bg-[#EA580C] transition-all duration-300 flex items-center gap-3 shadow-2xl shadow-[#F97316]/40">
                <span className="font-medium">Get Started Today</span>
                <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-12 flex items-center justify-center gap-12 text-sm text-white/50">
              {['Fast Deployment', 'Cloud or On-Premise', 'Built for Scale'].map((label, i) => (
                <div key={label} className="flex items-center gap-2.5">
                  {i > 0 && <div className="h-4 w-px bg-white/10 -ml-6 mr-3" />}
                  <svg
                    className="size-5 shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#F97316"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ filter: 'drop-shadow(0 0 6px rgba(249,115,22,0.6))' }}
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M8.5 12.5l2.5 2.5 4.5-5" />
                  </svg>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
