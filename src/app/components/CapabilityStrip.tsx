import { SectionContainer } from './layout/SectionContainer';

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
    ? 'hero-capabilities liquid-glass-panel mt-auto w-full min-w-0 max-w-full py-5 sm:py-8 md:py-10'
    : 'liquid-glass-panel relative w-full min-w-0 max-w-full border-b border-white/10 py-8 sm:py-10';

  return (
    <div className={shellClass}>
      <SectionContainer>
        <CapabilityGrid />
      </SectionContainer>
    </div>
  );
}

function CapabilityGrid() {
  return (
    <div className="flex w-full min-w-0 flex-col gap-5 sm:gap-6 md:flex-row md:items-stretch md:gap-0">
      {capabilities.map((item, index) => (
        <div
          key={item.title}
          className="flex w-full min-w-0 flex-col md:min-w-0 md:flex-1 md:flex-row md:items-stretch"
        >
          {index > 0 && (
            <>
              <div
                className="mb-1 h-px w-full shrink-0 bg-gradient-to-r from-transparent via-white/12 to-transparent md:hidden"
                aria-hidden="true"
              />
              <div
                className="liquid-glass-divider mx-4 hidden shrink-0 self-stretch md:block lg:mx-8"
                aria-hidden="true"
              />
            </>
          )}
          <div className="min-w-0 w-full flex-1 space-y-1.5 sm:space-y-2">
            <h3 className="text-sm font-semibold text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.45)] sm:text-base md:text-lg">
              {item.title}
            </h3>
            <p className="max-w-full text-balance text-[0.8125rem] leading-relaxed text-zinc-100 drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)] sm:text-sm md:max-w-sm md:text-[0.95rem]">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
