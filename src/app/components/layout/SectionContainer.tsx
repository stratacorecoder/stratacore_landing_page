import type { ReactNode, RefObject } from 'react';

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
}

/** Shared responsive content width + horizontal padding with iPhone safe-area support. */
export function SectionContainer({ children, className = '' }: SectionContainerProps) {
  return (
    <div className={`section-container mx-auto w-full min-w-0 max-w-7xl ${className}`}>
      {children}
    </div>
  );
}

interface PageSectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  sectionRef?: RefObject<HTMLElement | null>;
}

/** Standard section shell: no horizontal overflow, consistent vertical rhythm. */
export function PageSection({
  id,
  children,
  className = '',
  containerClassName = '',
  sectionRef,
}: PageSectionProps) {
  return (
    <section
      ref={sectionRef}
      id={id}
      className={`relative w-full min-w-0 overflow-x-clip py-16 sm:py-20 md:py-28 ${className}`}
    >
      <SectionContainer className={containerClassName}>{children}</SectionContainer>
    </section>
  );
}
