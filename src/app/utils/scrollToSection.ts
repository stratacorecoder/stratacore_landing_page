import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const SECTION_IDS = ['features', 'solutions', 'benefits'] as const;
export type SectionId = (typeof SECTION_IDS)[number];

export function isSectionId(value: string): value is SectionId {
  return SECTION_IDS.includes(value as SectionId);
}

function getNavOffset(): number {
  const nav = document.querySelector('nav');
  return (nav?.getBoundingClientRect().height ?? 64) + 12;
}

function revealSectionAnimations(sectionEl: HTMLElement) {
  ScrollTrigger.getAll().forEach((trigger) => {
    const triggerEl = trigger.trigger;
    if (!(triggerEl instanceof Element)) return;
    if (!sectionEl.contains(triggerEl) && triggerEl !== sectionEl) return;

    trigger.animation?.progress(1);
    gsap.set(triggerEl, { clearProps: 'opacity,transform' });
  });
}

function applyScrollTop(top: number) {
  const targetTop = Math.max(0, top);
  document.documentElement.scrollTop = targetTop;
  document.body.scrollTop = targetTop;
  window.scrollTo({ top: targetTop, left: 0, behavior: 'auto' });
}

export function scrollToSectionById(
  sectionId: string,
  options: { behavior?: ScrollBehavior; updateHash?: boolean } = {},
): boolean {
  const el = document.getElementById(sectionId);
  if (!el) return false;

  const behavior = options.behavior ?? 'smooth';
  const updateHash = options.updateHash ?? true;
  const targetTop = Math.max(0, el.getBoundingClientRect().top + window.pageYOffset - getNavOffset());

  if (updateHash) {
    window.history.replaceState(null, '', `#${sectionId}`);
  }

  if (behavior === 'smooth') {
    window.scrollTo({ top: targetTop, left: 0, behavior: 'smooth' });
  } else {
    applyScrollTop(targetTop);
  }

  ScrollTrigger.refresh();

  window.setTimeout(() => {
    if (Math.abs(window.pageYOffset - targetTop) > 40) {
      applyScrollTop(targetTop);
    }
    revealSectionAnimations(el);
    ScrollTrigger.refresh();
  }, behavior === 'smooth' ? 850 : 50);

  window.setTimeout(() => {
    if (Math.abs(window.pageYOffset - targetTop) > 40) {
      applyScrollTop(targetTop);
    }
  }, behavior === 'smooth' ? 100 : 0);

  return true;
}

export function waitForSectionAndScroll(
  sectionId: string,
  onComplete?: () => void,
  attempt = 0,
): void {
  const el = document.getElementById(sectionId);

  if (el) {
    requestAnimationFrame(() => {
      scrollToSectionById(sectionId);
      onComplete?.();
    });
    return;
  }

  if (attempt < 60) {
    requestAnimationFrame(() => waitForSectionAndScroll(sectionId, onComplete, attempt + 1));
    return;
  }

  onComplete?.();
}

export function finalizeSectionScroll(sectionId: string) {
  const el = document.getElementById(sectionId);
  if (!el) return;
  revealSectionAnimations(el);
  ScrollTrigger.refresh();
}
