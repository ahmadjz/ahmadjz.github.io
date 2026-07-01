import type { Variants, Transition } from 'motion/react';

/** Shared easing + durations, mirrored from the CSS motion tokens. */
export const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];
export const DUR = { fast: 0.2, med: 0.45, slow: 0.7 } as const;
export const STAGGER = 0.06;

/** Entrance reveal: fade + short rise. Kept on transform/opacity only. */
export const revealVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: DUR.med, ease: EASE_OUT },
  },
};

/** Parent that staggers its children's entrance. */
export const staggerParent = (stagger = STAGGER): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren: 0.05 },
  },
});

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: DUR.med, ease: EASE_OUT } },
};

export const springSettle: Transition = { type: 'spring', stiffness: 220, damping: 18 };

/** True only when the user has NOT asked to reduce motion. */
export function motionAllowed(): boolean {
  if (typeof window === 'undefined') return false;
  const root = document.documentElement;
  if (root.dataset.motion === 'off') return false;
  return !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
