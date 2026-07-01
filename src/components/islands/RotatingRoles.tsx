import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

/**
 * Hero role line that cycles through facets. The visible text is always a real
 * word (good for screen readers between swaps); under reduced-motion it stays
 * on the first role and never cycles.
 */
export default function RotatingRoles({ roles }: { roles: string[] }) {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || document.documentElement.dataset.motion === 'off') return;
    const id = setInterval(() => setI((n) => (n + 1) % roles.length), 2600);
    return () => clearInterval(id);
  }, [reduce, roles.length]);

  if (reduce) {
    return <span className="text-gradient font-mono">{roles[0]}</span>;
  }

  return (
    <span className="relative inline-grid">
      <AnimatePresence mode="wait">
        <motion.span
          key={i}
          initial={{ y: '0.6em', opacity: 0, filter: 'blur(6px)' }}
          animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          exit={{ y: '-0.6em', opacity: 0, filter: 'blur(6px)' }}
          transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
          className="text-gradient font-mono [grid-area:1/1]"
        >
          {roles[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
