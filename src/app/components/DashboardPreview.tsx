import { Activity, Battery, TrendingUp, Users, Wifi, AlertCircle, CheckCircle, Clock, MapPin, Zap, Star } from 'lucide-react';

const networkSites = [
  { name: 'BGC Hub — Taguig City', stations: 48, active: 46, utilization: 96, status: 'online' },
  { name: 'NAIA Terminal 3 — Pasay', stations: 32, active: 31, utilization: 97, status: 'online' },
  { name: 'SM Mall of Asia — Pasay', stations: 24, active: 21, utilization: 88, status: 'online' },
  { name: 'Ayala Center — Cebu City', stations: 16, active: 12, utilization: 75, status: 'warning' },
  { name: 'Abreeza Mall — Davao City', stations: 20, active: 19, utilization: 91, status: 'online' },
];

// Normalised 0–1 values for the SVG paths
const sessionsPoints = [310, 285, 420, 468, 445, 560, 524, 612, 655, 598, 720];
const kwhPoints      = [184, 162, 235, 271, 254, 310, 289, 342, 368, 329, 401];
const xLabels = ['Jan 1','Jan 4','Jan 7','Jan 10','Jan 13','Jan 16','Jan 19','Jan 22','Jan 25','Jan 28','Jan 31'];

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

function MiniChart() {
  const W = 500; const H = 140;
  const allVals = [...sessionsPoints, ...kwhPoints];
  const min = Math.min(...allVals) * 0.85;
  const max = Math.max(...allVals) * 1.05;
  const s = buildPath(sessionsPoints, W, H, min, max);
  const k = buildPath(kwhPoints, W, H, min, max);
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ height: 140 }} preserveAspectRatio="none">
      {/* Grid lines */}
      {[0.25, 0.5, 0.75].map((t) => (
        <line key={t} x1={0} y1={H * t} x2={W} y2={H * t} stroke="rgba(56,189,248,0.08)" strokeWidth={1} />
      ))}
      {/* kWh area + line */}
      <path d={k.area} fill="rgba(167,139,250,0.1)" />
      <path d={k.line} fill="none" stroke="#a78bfa" strokeWidth={2} strokeLinejoin="round" />
      {/* Sessions area + line */}
      <path d={s.area} fill="rgba(56,189,248,0.12)" />
      <path d={s.line} fill="none" stroke="#38bdf8" strokeWidth={2} strokeLinejoin="round" />
      {/* Dots at last point */}
      <circle cx={W} cy={H - ((sessionsPoints[sessionsPoints.length-1] - min)/(max-min))*H} r={4} fill="#38bdf8" />
      <circle cx={W} cy={H - ((kwhPoints[kwhPoints.length-1] - min)/(max-min))*H} r={4} fill="#a78bfa" />
    </svg>
  );
}

function MobileScreen({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative w-[168px] rounded-[28px] border border-sky-500/20 bg-[#0D0D12] overflow-hidden shadow-2xl shadow-sky-500/10 ${className}`}
      style={{ aspectRatio: '9/19' }}>
      {/* Status bar */}
      <div className="flex items-center justify-between px-4 pt-3 pb-1">
        <span className="text-[8px] text-white/50 font-medium">9:41</span>
        <div className="flex items-center gap-1">
          <div className="flex gap-0.5 items-end h-2.5">
            {[3, 4, 5, 6].map((h, i) => (
              <div key={i} className="w-0.5 bg-white/60 rounded-sm" style={{ height: `${h * 2}px` }} />
            ))}
          </div>
          <svg className="size-2.5 text-white/60" fill="currentColor" viewBox="0 0 24 24"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3a4.237 4.237 0 00-6 0zm-4-4l2 2a7.074 7.074 0 0110 0l2-2C15.14 9.14 8.87 9.14 5 13z" /></svg>
          <div className="w-5 h-2.5 rounded-sm border border-white/40 flex items-center px-0.5">
            <div className="w-3 h-1.5 bg-white/70 rounded-[1px]" />
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}

export function DashboardPreview() {
  return (
    <section id="solutions" className="relative py-32 px-16">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 text-sm text-sky-400 font-medium">
            Command Center
          </div>
          <h2 className="text-5xl font-semibold tracking-tight">
            Unified dashboard for complete control
          </h2>
          <p className="text-xl text-white/50 max-w-2xl mx-auto">
            Monitor, manage, and optimize your entire network from a single interface
          </p>
        </div>

        {/* Admin Dashboard */}
        <div className="relative mb-10">
          <div className="absolute -inset-40 bg-gradient-to-r from-sky-500/20 via-sky-500/5 to-transparent blur-3xl opacity-30" />

          <div className="relative rounded-3xl border border-sky-500/15 bg-gradient-to-br from-sky-950/30 via-[#09090B]/60 to-[#09090B]/80 backdrop-blur-xl p-8 shadow-2xl shadow-sky-500/5">
            {/* Dashboard Header */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-sky-500/10">
              <div>
                <h3 className="text-2xl font-semibold mb-1">Network Overview</h3>
                <div className="flex items-center gap-2 text-white/50 text-sm">
                  <div className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Real-time infrastructure monitoring
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="px-4 py-2 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sm text-sky-300">Last 30 days</div>
                <button className="size-10 rounded-xl bg-sky-500/10 border border-sky-500/20 hover:bg-sky-500/20 transition-colors flex items-center justify-center text-sky-400">
                  <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-4 gap-5 mb-7">
              {[
                { icon: Activity, label: 'Active Stations', value: '1,247', delta: '+12%' },
                { icon: Battery, label: 'Avg. Utilization', value: '89.4%', delta: '+8%' },
                { icon: Users, label: 'Monthly Users', value: '52.8K', delta: '+24%' },
              ].map(({ icon: Icon, label, value, delta }) => (
                <div key={label} className="p-6 rounded-2xl bg-gradient-to-br from-sky-500/15 to-sky-500/5 border border-sky-500/25">
                  <div className="flex items-start justify-between mb-4">
                    <div className="size-12 rounded-xl bg-sky-500/20 border border-sky-500/30 flex items-center justify-center">
                      <Icon className="size-6 text-sky-400" strokeWidth={1.5} />
                    </div>
                    <div className="flex items-center gap-1 text-sm text-emerald-400">
                      <TrendingUp className="size-4" /><span>{delta}</span>
                    </div>
                  </div>
                  <div className="text-3xl font-semibold text-white">{value}</div>
                  <div className="text-sm text-sky-300/70 mt-1">{label}</div>
                </div>
              ))}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-sky-500/15 to-sky-500/5 border border-sky-500/25">
                <div className="flex items-start justify-between mb-4">
                  <div className="size-12 rounded-xl bg-sky-500/20 border border-sky-500/30 flex items-center justify-center">
                    <svg className="size-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-emerald-400"><TrendingUp className="size-4" /><span>+16%</span></div>
                </div>
                <div className="text-3xl font-semibold text-white">2.4M</div>
                <div className="text-sm text-sky-300/70 mt-1">kWh Delivered</div>
              </div>
            </div>

            {/* Chart + Site Table */}
            <div className="grid grid-cols-5 gap-5">
              <div className="col-span-3 rounded-2xl bg-sky-500/5 border border-sky-500/15 p-6">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <div className="text-sm font-medium text-white">Network Activity</div>
                    <div className="text-xs text-white/40 mt-0.5">Sessions &amp; kWh delivered — Jan 2026</div>
                  </div>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="flex items-center gap-1.5 text-sky-400"><span className="size-2 rounded-full bg-sky-400 inline-block" />Sessions</span>
                    <span className="flex items-center gap-1.5 text-violet-400"><span className="size-2 rounded-full bg-violet-400 inline-block" />kWh</span>
                  </div>
                </div>
                <MiniChart />
                {/* X-axis labels */}
                <div className="flex justify-between mt-2">
                  {['Jan 1','Jan 7','Jan 13','Jan 19','Jan 25','Jan 31'].map((l) => (
                    <span key={l} className="text-[10px] text-white/30">{l}</span>
                  ))}
                </div>
              </div>

              <div className="col-span-2 rounded-2xl bg-sky-500/5 border border-sky-500/15 p-6">
                <div className="flex items-center justify-between mb-5">
                  <div className="text-sm font-medium text-white">Site Status</div>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                    <CheckCircle className="size-3.5" />4 online · 1 warning
                  </div>
                </div>
                <div className="space-y-3">
                  {networkSites.map((site, i) => (
                    <div key={i} className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5 min-w-0">
                        {site.status === 'online'
                          ? <Wifi className="size-3.5 text-sky-400 shrink-0" />
                          : <AlertCircle className="size-3.5 text-amber-400 shrink-0" />}
                        <span className="text-xs text-white/70 truncate">{site.name}</span>
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        <div className="text-xs text-white/40">{site.active}/{site.stations}</div>
                        <div className="w-16 h-1.5 rounded-full bg-sky-500/15 overflow-hidden">
                          <div className={`h-full rounded-full ${site.status === 'warning' ? 'bg-amber-400' : 'bg-sky-400'}`} style={{ width: `${site.utilization}%` }} />
                        </div>
                        <div className="text-xs text-sky-300 w-8 text-right">{site.utilization}%</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-sky-500/10 flex items-center justify-between text-xs text-white/30">
                  <div className="flex items-center gap-1.5"><Clock className="size-3" />Updated 2 min ago</div>
                  <span className="text-sky-400 cursor-pointer hover:text-sky-300 transition-colors">View all →</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Guest Mobile View */}
        <div className="relative rounded-3xl border border-sky-500/15 bg-gradient-to-br from-sky-950/20 via-[#09090B]/50 to-[#09090B]/70 backdrop-blur-xl p-12">
          <div className="absolute -inset-20 bg-gradient-to-b from-sky-500/5 via-transparent to-transparent blur-3xl opacity-40 pointer-events-none" />

          <div className="relative grid grid-cols-2 gap-16 items-center">
            {/* Left copy */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 text-sm text-sky-400 font-medium">
                Guest Experience
              </div>
              <h3 className="text-4xl font-semibold tracking-tight leading-tight hyphens-none">
                Seamless charging for every driver
              </h3>
              <p className="text-lg text-white/50 leading-relaxed hyphens-none break-normal">
                Every driver gets a full charging experience through any browser. Find stations, start sessions, and track energy in real time.
              </p>
              <div className="space-y-3 pt-2">
                {[
                  'Live station availability and directions',
                  'One-tap session start via QR or NFC',
                  'Real-time charging progress and cost',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="size-5 rounded-full bg-sky-500/20 border border-sky-500/30 flex items-center justify-center shrink-0">
                      <svg className="size-3" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-white/60 hyphens-none break-normal">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile screens */}
            <div className="flex items-end justify-center gap-5">
              {/* Screen 1 — Station finder */}
              <MobileScreen className="mb-8">
                <div className="px-3 pb-3 flex flex-col h-full">
                  <div className="text-[9px] font-semibold text-white mb-2 px-1">Nearby Stations</div>
                  {/* Map placeholder */}
                  <div className="rounded-xl overflow-hidden mb-2 relative" style={{ height: '90px' }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-950 to-[#0a1628]" />
                    {/* Grid lines */}
                    {[20, 40, 60, 80].map(p => (
                      <div key={p} className="absolute inset-x-0 border-t border-sky-500/10" style={{ top: `${p}%` }} />
                    ))}
                    {[25, 50, 75].map(p => (
                      <div key={p} className="absolute inset-y-0 border-l border-sky-500/10" style={{ left: `${p}%` }} />
                    ))}
                    {/* Pin markers */}
                    <div className="absolute top-3 left-6 size-4 rounded-full bg-sky-500 border-2 border-white flex items-center justify-center shadow-lg shadow-sky-500/50">
                      <Zap className="size-2 text-white" fill="white" />
                    </div>
                    <div className="absolute top-8 right-8 size-3.5 rounded-full bg-sky-400/70 border border-white/50 flex items-center justify-center">
                      <Zap className="size-1.5 text-white" fill="white" />
                    </div>
                    <div className="absolute bottom-4 left-1/2 size-3 rounded-full bg-emerald-400/80 border border-white/50" />
                    {/* Current location */}
                    <div className="absolute bottom-3 right-5 size-2.5 rounded-full bg-white border-2 border-sky-400 shadow-sm" />
                  </div>
                  {/* Station list */}
                  {[
                    { name: 'Downtown Hub', dist: '0.3 mi', avail: '12/14', color: 'text-emerald-400' },
                    { name: 'Westfield Mall', dist: '0.8 mi', avail: '5/8', color: 'text-emerald-400' },
                    { name: 'Harbor Pier', dist: '1.2 mi', avail: '2/6', color: 'text-amber-400' },
                  ].map((s) => (
                    <div key={s.name} className="flex items-center justify-between py-1.5 border-b border-white/5 last:border-0">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="size-2.5 text-sky-400 shrink-0" />
                        <div>
                          <div className="text-[8px] font-medium text-white leading-none">{s.name}</div>
                          <div className="text-[7px] text-white/40 mt-0.5">{s.dist}</div>
                        </div>
                      </div>
                      <span className={`text-[7px] font-medium ${s.color}`}>{s.avail}</span>
                    </div>
                  ))}
                </div>
              </MobileScreen>

              {/* Screen 2 — Active charging (center, tallest) */}
              <MobileScreen>
                <div className="px-3 pb-4 flex flex-col items-center h-full">
                  <div className="text-[9px] font-semibold text-white mb-3 self-start">Charging Session</div>
                  {/* Circular progress */}
                  <div className="relative mb-3">
                    <svg className="w-24 h-24 -rotate-90" viewBox="0 0 80 80">
                      <circle cx="40" cy="40" r="32" fill="none" stroke="rgba(56,189,248,0.1)" strokeWidth="5" />
                      <circle cx="40" cy="40" r="32" fill="none" stroke="#38bdf8" strokeWidth="5"
                        strokeLinecap="round" strokeDasharray="201" strokeDashoffset="52"
                        style={{ filter: 'drop-shadow(0 0 4px rgba(56,189,248,0.8))' }} />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-xl font-bold text-white leading-none">74%</span>
                      <span className="text-[7px] text-white/40 mt-0.5">charged</span>
                    </div>
                  </div>
                  {/* Stats row */}
                  <div className="w-full grid grid-cols-3 gap-1 mb-3">
                    {[['18.4', 'kWh'], ['32', 'min'], ['$6.12', 'cost']].map(([val, unit]) => (
                      <div key={unit} className="bg-sky-500/10 rounded-lg p-1.5 text-center">
                        <div className="text-[9px] font-semibold text-white">{val}</div>
                        <div className="text-[7px] text-white/40">{unit}</div>
                      </div>
                    ))}
                  </div>
                  {/* Station info */}
                  <div className="w-full bg-sky-500/10 rounded-xl p-2.5 mb-3">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Zap className="size-3 text-sky-400" fill="#38bdf8" />
                      <span className="text-[8px] font-medium text-white">Downtown Hub · Bay 4</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[7px] text-white/40">DC Fast · 150 kW</span>
                      <div className="flex items-center gap-1">
                        <Star className="size-2.5 text-amber-400" fill="#fbbf24" />
                        <span className="text-[7px] text-white/50">4.9</span>
                      </div>
                    </div>
                  </div>
                  {/* Stop button */}
                  <button className="w-full py-2 rounded-xl text-[9px] font-semibold text-white border border-red-500/40 bg-red-500/10">
                    Stop Session
                  </button>
                </div>
              </MobileScreen>

              {/* Screen 3 — Station detail */}
              <MobileScreen className="mb-8">
                <div className="px-3 pb-3 flex flex-col h-full">
                  <div className="text-[9px] font-semibold text-white mb-2 px-1">Station Detail</div>
                  {/* Station header */}
                  <div className="rounded-xl bg-sky-500/10 border border-sky-500/20 p-2.5 mb-2">
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="size-6 rounded-lg bg-sky-500/30 border border-sky-500/40 flex items-center justify-center">
                        <Zap className="size-3.5 text-sky-400" fill="#38bdf8" />
                      </div>
                      <div>
                        <div className="text-[8px] font-semibold text-white">Westfield Mall</div>
                        <div className="text-[7px] text-white/40">0.8 mi · Open 24h</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      {[1,2,3,4,5].map(s => <Star key={s} className="size-2 text-amber-400" fill="#fbbf24" />)}
                      <span className="text-[7px] text-white/40 ml-1">4.8 (124)</span>
                    </div>
                  </div>
                  {/* Connectors */}
                  <div className="text-[7px] text-white/40 mb-1.5 px-0.5">Available connectors</div>
                  {[
                    { type: 'CCS2 DC Fast', kw: '150 kW', avail: 3, color: 'bg-emerald-400' },
                    { type: 'Type 2 AC', kw: '22 kW', avail: 2, color: 'bg-sky-400' },
                    { type: 'CHAdeMO', kw: '50 kW', avail: 0, color: 'bg-white/20' },
                  ].map((c) => (
                    <div key={c.type} className="flex items-center justify-between py-1 border-b border-white/5 last:border-0">
                      <div>
                        <div className="text-[7.5px] font-medium text-white">{c.type}</div>
                        <div className="text-[6.5px] text-white/40">{c.kw}</div>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className={`size-1.5 rounded-full ${c.color}`} />
                        <span className={`text-[7px] ${c.avail > 0 ? 'text-emerald-400' : 'text-white/30'}`}>
                          {c.avail > 0 ? `${c.avail} free` : 'Busy'}
                        </span>
                      </div>
                    </div>
                  ))}
                  {/* Pricing */}
                  <div className="mt-auto pt-2">
                    <div className="bg-sky-500/10 rounded-lg p-2 mb-2">
                      <div className="text-[7px] text-white/40 mb-0.5">Pricing</div>
                      <div className="text-[8px] font-medium text-white">$0.35 / kWh · $1.00 session fee</div>
                    </div>
                    <button className="w-full py-1.5 rounded-xl text-[8px] font-semibold text-white bg-gradient-to-r from-sky-500 to-sky-600">
                      Start Charging
                    </button>
                  </div>
                </div>
              </MobileScreen>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
