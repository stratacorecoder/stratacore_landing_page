const capabilities = [
  {
    title: 'Flexible Deployment',
    description: 'Run on-premise or in the cloud with the same control plane.',
  },
  {
    title: 'Enterprise Security',
    description: 'Encrypted communication, secure auth, and role-based access.',
  },
  {
    title: 'Real-Time Monitoring',
    description: 'Live station health, sessions, and remote operations.',
  },
];

interface CapabilityStripProps {
  embedded?: boolean;
}

export function CapabilityStrip({ embedded = false }: CapabilityStripProps) {
  const shellClass = embedded
    ? 'hero-capabilities liquid-glass-panel mt-auto w-full max-w-full py-5 sm:py-8 md:py-10'
    : 'liquid-glass-panel relative w-full max-w-full border-b border-white/10 px-4 py-8 sm:py-10 md:px-8 lg:px-12';

  return (
    <div className={shellClass}>
      <div
        className={
          embedded
            ? 'mx-auto w-full max-w-[1400px] px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20'
            : 'mx-auto max-w-7xl'
        }
      >
        <CapabilityGrid />
      </div>
    </div>
  );
}

function CapabilityGrid() {
  return (
    <div className="flex flex-col gap-5 sm:gap-6 md:flex-row md:items-stretch md:gap-0">
      {capabilities.map((item, index) => (
        <div key={item.title} className="flex flex-1 md:items-stretch">
          {index > 0 && (
            <>
              <div
                className="my-1 h-px w-full bg-gradient-to-r from-transparent via-white/12 to-transparent md:hidden"
                aria-hidden="true"
              />
              <div
                className="liquid-glass-divider mx-8 hidden shrink-0 self-stretch md:block lg:mx-12"
                aria-hidden="true"
              />
            </>
          )}
          <div className="flex-1 space-y-1.5 sm:space-y-2">
            <h3 className="text-sm font-semibold text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.45)] sm:text-base md:text-lg">
              {item.title}
            </h3>
            <p className="max-w-sm text-[0.8125rem] leading-relaxed text-zinc-100 drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)] sm:text-sm md:text-[0.95rem]">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
