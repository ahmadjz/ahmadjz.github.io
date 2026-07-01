import { motion, useInView, useReducedMotion } from 'motion/react';
import { useRef } from 'react';
import { NABTA_ARCH } from '../../data/site';

/**
 * Nabta 8-repo architecture, revealed tier-by-tier on scroll-in.
 * Clients -> shared contract (OpenAPI) -> backend -> data & infra.
 * Static (all visible, no motion) under reduced-motion.
 */

const KIND_ACCENT: Record<string, string> = {
  client: 'var(--color-accent)',
  shared: 'var(--color-accent-2)',
  contract: 'var(--color-accent-soft)',
  backend: 'var(--color-accent)',
  data: 'var(--color-accent-2)',
  infra: 'var(--color-line-strong)',
};

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function ArchitectureDiagram({ tierLabels }: { tierLabels: string[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: '0px 0px -15% 0px' });
  const animate = !reduce && inView;

  const show = reduce ? 'show' : animate ? 'show' : 'hidden';

  return (
    <div ref={ref} className="flex flex-col items-stretch gap-0">
      {NABTA_ARCH.tiers.map((tier, ti) => (
        <div key={tier.id}>
          {ti > 0 && (
            <div className="flex justify-center" aria-hidden="true">
              <motion.span
                className="my-1 block w-px origin-top"
                style={{ height: 26, background: 'linear-gradient(var(--color-accent), var(--color-accent-2))' }}
                initial={reduce ? undefined : { scaleY: 0, opacity: 0 }}
                animate={animate ? { scaleY: 1, opacity: 0.7 } : undefined}
                transition={{ duration: 0.4, ease: EASE, delay: ti * 0.12 }}
              />
            </div>
          )}

          <div className="mb-1.5 text-center">
            <span className="eyebrow text-[0.7rem]">{tierLabels[ti] ?? tier.id}</span>
          </div>

          <motion.ul
            className="flex flex-wrap justify-center gap-2.5"
            initial="hidden"
            animate={show}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: ti * 0.12 } } }}
          >
            {tier.nodes.map((node) => (
              <motion.li
                key={node.id}
                variants={{
                  hidden: { opacity: 0, y: 14, scale: 0.96 },
                  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: EASE } },
                }}
                className="group relative flex min-w-[8.5rem] flex-1 basis-[8.5rem] flex-col rounded-xl border border-line bg-elevated/80 px-3.5 py-2.5 text-start"
                style={{ boxShadow: `inset 0 0 0 1px color-mix(in oklab, ${KIND_ACCENT[node.kind]} 22%, transparent)` }}
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-y-2 start-0 w-0.5 rounded-full"
                  style={{ background: KIND_ACCENT[node.kind] }}
                />
                <span className="text-sm font-semibold text-ink">{node.label}</span>
                <span className="mt-0.5 font-mono text-[0.7rem] text-muted">{node.sub}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      ))}
    </div>
  );
}
