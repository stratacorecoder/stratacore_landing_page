import { useRef, type RefObject } from 'react';
import {
  Activity,
  Battery,
  TrendingUp,
  Users,
  Wifi,
  AlertCircle,
  CheckCircle,
  Clock,
  MapPin,
  Zap,
  Star,
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ScrollReveal, StaggerReveal } from './animations/ScrollReveal';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const networkSites = [
  { name: 'BGC Hub - Taguig City', stations: 48, active: 46, utilization: 96, status: 'online' },
  { name: 'NAIA Terminal 3 - Pasay', stations: 32, active: 31, utilization: 97, status: 'online' },
  { name: 'SM Mall of Asia - Pasay', stations: 24, active: 21, utilization: 88, status: 'online' },
  { name: 'Ayala Center - Cebu City', stations: 16, active: 12, utilization: 75, status: 'warning' },
  { name: 'Abreeza Mall - Davao City', stations: 20, active: 19, utilization: 91, status: 'online' },
];

const sessionsPoints = [310, 285, 420, 468, 445, 560, 524, 612, 655, 598, 720];
const kwhPoints = [184, 162, 235, 271, 254, 310, 289, 342, 368, 329, 401];

function buildPath(values: number[], w: number, h: number, min: number, max: number) {
  const pts = values.map((v, i) => {
    const x = (i / (values.length - 1)) * w;
    const y = h - ((v - min) / (max - min)) * h;
    return `${x},${y}`;
  });
  return {
    line: `M ${pts.join(' L ')}`,
    area: `M ${pts.join(' L ')} L ${w},${h} L 0,${h} Z`,
  };
}

function MiniChart({ chartRef }: { chartRef: RefObject<SVGSVGElement | null> }) {
  const W = 500;
  const H = 140;
  const allVals = [...sessionsPoints, ...kwhPoints];
  const min = Math.min(...allVals) * 0.85;
  const max = Math.max(...allVals) * 1.05;
  const s = buildPath(sessionsPoints, W, H, min, max);
  const k = buildPath(kwhPoints, W, H, min, max);

  return (
    <svg
      ref={chartRef}
      viewBox={`0 0 ${W} ${H}`}
      className="w-full"
      style={{ height: 140 }}
      preserveAspectRatio="none"
    >
      {[0.25, 0.5, 0.75].map((t) => (
        <line
          key={t}
          x1={0}
          y1={H * t}
          x2={W}
          y2={H * t}
          stroke="rgba(96,165,250,0.08)"
          strokeWidth={1}
        />
      ))}
      <path d={k.area} fill="rgba(96,165,250,0.12)" className="chart-area-kwh" />
      <path
        d={k.line}
        fill="none"
        stroke="#60a5fa"
        strokeWidth={2}
        strokeLinejoin="round"
        className="chart-line-kwh"
      />
      <path d={s.area} fill="rgba(37,99,235,0.12)" className="chart-area-sessions" />
      <path
        d={s.line}
        fill="none"
        stroke="#2563eb"
        strokeWidth={2}
        strokeLinejoin="round"
        className="chart-line-sessions"
      />
      <circle
        cx={W}
        cy={H - ((sessionsPoints[sessionsPoints.length - 1] - min) / (max - min)) * H}
        r={4}
        fill="#2563eb"
        className="chart-dot-sessions"
      />
      <circle
        cx={W}
        cy={H - ((kwhPoints[kwhPoints.length - 1] - min) / (max - min)) * H}
        r={4}
        fill="#60a5fa"
        className="chart-dot-kwh"
      />
    </svg>
  );
}

function MobileScreen({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative w-[148px] overflow-hidden rounded-[28px] border border-blue-500/20 bg-[#0D0D12] shadow-2xl shadow-blue-500/10 sm:w-[168px] ${className}`}
      style={{ aspectRatio: '9/19' }}
    >
      <div className="flex items-center justify-between px-4 pt-3 pb-1">
        <span className="text-[8px] font-medium text-white/50">9:41</span>
        <div className="h-2.5 w-5 rounded-sm border border-white/40" />
      </div>
      {children}
    </div>
  );
}

export function DashboardPreview() {
  const sectionRef = useRef<HTMLElement>(null);
  const chartRef = useRef<SVGSVGElement>(null);
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (reduced || !chartRef.current) return;

      const lines = chartRef.current.querySelectorAll('.chart-line-sessions, .chart-line-kwh');
      lines.forEach((line) => {
        const el = line as SVGPathElement;
        const length = el.getTotalLength();
        gsap.set(el, { strokeDasharray: length, strokeDashoffset: length });
      });

      gsap.to('.chart-line-sessions, .chart-line-kwh', {
        strokeDashoffset: 0,
        duration: 1.4,
        ease: 'power2.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: chartRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      gsap.from('.chart-area-sessions, .chart-area-kwh', {
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: chartRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    },
    { scope: sectionRef, dependencies: [reduced] },
  );

  return (
    <section
      ref={sectionRef}
      id="solutions"
      className="relative px-4 py-24 md:px-8 md:py-28 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <ScrollReveal className="mb-14 max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Unified dashboard for complete control
          </h2>
          <p className="text-lg text-white/50 md:text-xl">
            Monitor, manage, and optimize your entire network from a single interface.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="relative mb-10">
            <div className="pointer-events-none absolute -inset-24 bg-gradient-to-r from-blue-600/15 via-transparent to-transparent blur-3xl" />

            <div className="relative rounded-3xl border border-blue-500/15 bg-gradient-to-br from-blue-950/25 via-[#09090B]/60 to-[#09090B]/80 p-5 backdrop-blur-xl md:p-8">
              <div className="mb-8 flex flex-col gap-4 border-b border-blue-500/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="mb-1 text-2xl font-semibold">Network Overview</h3>
                  <p className="text-sm text-white/50">Real-time infrastructure monitoring</p>
                </div>
                <div className="rounded-xl border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
                  Last 30 days
                </div>
              </div>

              <StaggerReveal className="mb-7 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {[
                  { icon: Activity, label: 'Active Stations', value: '1,247', delta: '+12%' },
                  { icon: Battery, label: 'Avg. Utilization', value: '89.4%', delta: '+8%' },
                  { icon: Users, label: 'Monthly Users', value: '52.8K', delta: '+24%' },
                  { icon: TrendingUp, label: 'kWh Delivered', value: '2.4M', delta: '+16%' },
                ].map(({ icon: Icon, label, value, delta }) => (
                  <div
                    key={label}
                    className="stagger-item rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/12 to-blue-500/5 p-5"
                  >
                    <div className="mb-4 flex items-start justify-between">
                      <div className="flex size-11 items-center justify-center rounded-xl border border-blue-500/25 bg-blue-500/15">
                        <Icon className="size-5 text-blue-300" strokeWidth={1.5} />
                      </div>
                      <span className="text-sm text-emerald-400">{delta}</span>
                    </div>
                    <div className="text-2xl font-semibold text-white md:text-3xl">{value}</div>
                    <div className="mt-1 text-sm text-blue-200/70">{label}</div>
                  </div>
                ))}
              </StaggerReveal>

              <div className="grid grid-cols-1 gap-5 xl:grid-cols-5">
                <div className="rounded-2xl border border-blue-500/15 bg-blue-500/5 p-5 xl:col-span-3">
                  <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <div className="text-sm font-medium text-white">Network Activity</div>
                      <div className="mt-0.5 text-xs text-white/40">Sessions and kWh delivered - Jan 2026</div>
                    </div>
                    <div className="flex items-center gap-4 text-xs">
                      <span className="flex items-center gap-1.5 text-blue-300">
                        <span className="inline-block size-2 rounded-full bg-blue-400" />
                        Sessions
                      </span>
                      <span className="flex items-center gap-1.5 text-blue-200">
                        <span className="inline-block size-2 rounded-full bg-blue-300" />
                        kWh
                      </span>
                    </div>
                  </div>
                  <MiniChart chartRef={chartRef} />
                  <div className="mt-2 flex justify-between">
                    {['Jan 1', 'Jan 7', 'Jan 13', 'Jan 19', 'Jan 25', 'Jan 31'].map((l) => (
                      <span key={l} className="text-[10px] text-white/30">
                        {l}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-blue-500/15 bg-blue-500/5 p-5 xl:col-span-2">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="text-sm font-medium text-white">Site Status</div>
                    <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                      <CheckCircle className="size-3.5" />
                      4 online, 1 warning
                    </div>
                  </div>
                  <div className="space-y-3">
                    {networkSites.map((site) => (
                      <div key={site.name} className="flex items-center justify-between gap-3">
                        <div className="flex min-w-0 items-center gap-2.5">
                          {site.status === 'online' ? (
                            <Wifi className="size-3.5 shrink-0 text-blue-300" />
                          ) : (
                            <AlertCircle className="size-3.5 shrink-0 text-amber-400" />
                          )}
                          <span className="truncate text-xs text-white/70">{site.name}</span>
                        </div>
                        <div className="flex shrink-0 items-center gap-3">
                          <div className="text-xs text-white/40">
                            {site.active}/{site.stations}
                          </div>
                          <div className="text-xs text-blue-200">{site.utilization}%</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 flex items-center justify-between border-t border-blue-500/10 pt-4 text-xs text-white/30">
                    <div className="flex items-center gap-1.5">
                      <Clock className="size-3" />
                      Updated 2 min ago
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="relative rounded-3xl border border-blue-500/15 bg-gradient-to-br from-blue-950/20 via-[#09090B]/50 to-[#09090B]/70 p-6 backdrop-blur-xl md:p-12">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-6">
                <h3 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                  Seamless charging for every driver
                </h3>
                <p className="text-lg leading-relaxed text-white/50">
                  Drivers get a full charging experience through any browser: find stations,
                  start sessions, and track energy in real time.
                </p>
                <div className="space-y-3 pt-1">
                  {[
                    'Live station availability and directions',
                    'One-tap session start via QR or NFC',
                    'Real-time charging progress and cost',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="flex size-5 shrink-0 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/15">
                        <span className="size-1.5 rounded-full bg-blue-300" />
                      </div>
                      <span className="text-sm text-white/60">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-end justify-center gap-4 overflow-x-auto pb-2">
                <MobileScreen className="mb-8 shrink-0">
                  <div className="flex h-full flex-col px-3 pb-3">
                    <div className="mb-2 px-1 text-[9px] font-semibold text-white">Nearby Stations</div>
                    <div className="relative mb-2 overflow-hidden rounded-xl" style={{ height: '90px' }}>
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 to-[#0a0a12]" />
                      <div className="absolute left-6 top-3 flex size-4 items-center justify-center rounded-full border-2 border-white bg-blue-500 shadow-lg shadow-blue-500/50">
                        <Zap className="size-2 text-white" fill="white" />
                      </div>
                    </div>
                    {[
                      { name: 'Downtown Hub', dist: '0.3 mi', avail: '12/14' },
                      { name: 'Westfield Mall', dist: '0.8 mi', avail: '5/8' },
                    ].map((s) => (
                      <div key={s.name} className="flex items-center justify-between border-b border-white/5 py-1.5 last:border-0">
                        <div className="flex items-center gap-1.5">
                          <MapPin className="size-2.5 shrink-0 text-blue-300" />
                          <div>
                            <div className="text-[8px] font-medium leading-none text-white">{s.name}</div>
                            <div className="mt-0.5 text-[7px] text-white/40">{s.dist}</div>
                          </div>
                        </div>
                        <span className="text-[7px] font-medium text-emerald-400">{s.avail}</span>
                      </div>
                    ))}
                  </div>
                </MobileScreen>

                <MobileScreen className="shrink-0">
                  <div className="flex h-full flex-col items-center px-3 pb-4">
                    <div className="mb-3 self-start text-[9px] font-semibold text-white">Charging Session</div>
                    <div className="relative mb-3">
                      <svg className="h-24 w-24 -rotate-90" viewBox="0 0 80 80">
                        <circle cx="40" cy="40" r="32" fill="none" stroke="rgba(37,99,235,0.15)" strokeWidth="5" />
                        <circle
                          cx="40"
                          cy="40"
                          r="32"
                          fill="none"
                          stroke="#2563eb"
                          strokeWidth="5"
                          strokeLinecap="round"
                          strokeDasharray="201"
                          strokeDashoffset="52"
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-xl font-bold leading-none text-white">74%</span>
                        <span className="mt-0.5 text-[7px] text-white/40">charged</span>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="mt-auto w-full rounded-xl border border-red-500/40 bg-red-500/10 py-2 text-[9px] font-semibold text-white"
                    >
                      Stop Session
                    </button>
                  </div>
                </MobileScreen>

                <MobileScreen className="mb-8 shrink-0">
                  <div className="flex h-full flex-col px-3 pb-3">
                    <div className="mb-2 px-1 text-[9px] font-semibold text-white">Station Detail</div>
                    <div className="mb-2 rounded-xl border border-blue-500/20 bg-blue-500/10 p-2.5">
                      <div className="text-[8px] font-semibold text-white">Westfield Mall</div>
                      <div className="text-[7px] text-white/40">0.8 mi, Open 24h</div>
                      <div className="mt-1 flex items-center gap-1">
                        <Star className="size-2 text-amber-400" fill="#fbbf24" />
                        <span className="text-[7px] text-white/40">4.8 (124)</span>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="mt-auto w-full rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 py-1.5 text-[8px] font-semibold text-white"
                    >
                      Start Charging
                    </button>
                  </div>
                </MobileScreen>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
