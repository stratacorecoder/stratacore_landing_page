import { ArrowRight, Play } from 'lucide-react';
import heroVideo from '../../imports/enhanced_stratabg.mp4';

export function Hero({ onExplore }: { onExplore: () => void }) {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#09090B]/50 via-[#09090B]/55 to-[#09090B]/80" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-[1440px] mx-auto px-16 flex flex-col justify-center">
        <div className="max-w-4xl space-y-8">
          {/* Headline */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#F97316]/30 bg-[#F97316]/10 backdrop-blur-sm">
              <div className="size-1.5 rounded-full bg-[#F97316] animate-pulse" />
              <span className="text-sm text-[#F97316]">Next-Generation EV Infrastructure</span>
            </div>
            
            <h1 className="text-7xl font-semibold tracking-tight leading-[1.1]">
              Power the Future of
              <br />
              <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
                Electric Mobility
              </span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
            Enterprise-grade charging infrastructure software that scales with your vision.
            Manage networks, optimize energy, and deliver seamless experiences.
          </p>

          {/* CTAs */}
          <div className="flex items-center pt-4">
            <button
              onClick={onExplore}
              className="group px-8 py-4 rounded-full border border-[#F97316]/25 backdrop-blur-sm bg-[#F97316]/5 hover:bg-[#F97316]/10 transition-all duration-300 flex items-center gap-3"
              style={{ boxShadow: '0 0 20px rgba(249, 115, 22, 0.15), 0 2px 8px rgba(249, 115, 22, 0.1)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 32px rgba(249, 115, 22, 0.3), 0 4px 12px rgba(249, 115, 22, 0.2)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 20px rgba(249, 115, 22, 0.15), 0 2px 8px rgba(249, 115, 22, 0.1)'; }}
            >
              <Play className="size-5 text-[#F97316]" fill="#F97316" />
              <span className="font-medium text-white">Explore Platform</span>
            </button>
          </div>

          {/* Capability Cards */}
          <div className="flex items-start gap-0 pt-12">
            <div className="space-y-2 pr-12">
              <div className="text-base font-semibold text-white leading-snug">Flexible Deployment</div>
              <div className="text-sm text-white/50 leading-relaxed max-w-[200px]">Deploy on-premise or in the cloud.</div>
            </div>
            <div className="self-stretch w-px bg-white/10 mx-0 shrink-0" />
            <div className="space-y-2 px-12">
              <div className="text-base font-semibold text-white leading-snug">Enterprise Security</div>
              <div className="text-sm text-white/50 leading-relaxed max-w-[200px]">Secure authentication and reliable operations.</div>
            </div>
            <div className="self-stretch w-px bg-white/10 mx-0 shrink-0" />
            <div className="space-y-2 pl-12">
              <div className="text-base font-semibold text-white leading-snug">Real-Time Monitoring</div>
              <div className="text-sm text-white/50 leading-relaxed max-w-[200px]">Live insights and remote management.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator — pinned to bottom-right, clear of all content */}
      <div className="absolute bottom-10 right-16 flex flex-col items-center gap-3 animate-bounce">
        <span className="text-xs text-white/40 uppercase tracking-wider">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-white/40" />
        </div>
      </div>
    </section>
  );
}
