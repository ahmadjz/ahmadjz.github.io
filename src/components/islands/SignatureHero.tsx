import { useEffect, useRef } from 'react';

/**
 * The signature interaction: a pointer-reactive violet particle field with a
 * soft spotlight. Purely decorative background — the hero text is real SSR DOM.
 * Under reduced-motion it paints ONE static frame and never animates.
 */

interface Dot {
  x: number;
  y: number;
  bx: number; // base position
  by: number;
  r: number;
  tw: number; // twinkle phase
}

const ACCENT = '139, 92, 246'; // violet
const ACCENT2 = '6, 182, 212'; // cyan

export default function SignatureHero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const reduce =
      document.documentElement.dataset.motion === 'off' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let dots: Dot[] = [];
    const pointer = { x: -9999, y: -9999, active: false };
    let raf = 0;
    let running = true;

    const build = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const gap = w < 640 ? 46 : 38;
      dots = [];
      for (let y = gap * 0.5; y < h; y += gap) {
        for (let x = gap * 0.5; x < w; x += gap) {
          dots.push({
            x,
            y,
            bx: x,
            by: y,
            r: Math.random() * 1.1 + 0.5,
            tw: Math.random() * Math.PI * 2,
          });
        }
      }
    };

    const drawSpotlight = () => {
      const cx = pointer.active ? pointer.x : w * 0.5;
      const cy = pointer.active ? pointer.y : h * 0.32;
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(w, h) * 0.55);
      grad.addColorStop(0, `rgba(${ACCENT}, 0.18)`);
      grad.addColorStop(0.5, `rgba(${ACCENT2}, 0.05)`);
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
    };

    const frame = (t: number) => {
      if (!running) return;
      ctx.clearRect(0, 0, w, h);
      drawSpotlight();

      const time = t * 0.001;
      for (const d of dots) {
        // gentle drift
        const driftX = Math.sin(time * 0.6 + d.by * 0.02) * 3;
        const driftY = Math.cos(time * 0.5 + d.bx * 0.02) * 3;
        let px = d.bx + driftX;
        let py = d.by + driftY;

        // pointer repulsion + brightening
        let glow = 0;
        if (pointer.active) {
          const dx = px - pointer.x;
          const dy = py - pointer.y;
          const dist = Math.hypot(dx, dy);
          const radius = 150;
          if (dist < radius) {
            const force = (1 - dist / radius) ** 2;
            px += (dx / (dist || 1)) * force * 26;
            py += (dy / (dist || 1)) * force * 26;
            glow = force;
          }
        }
        d.x = px;
        d.y = py;

        const twinkle = 0.5 + 0.5 * Math.sin(time * 1.4 + d.tw);
        const alpha = 0.12 + twinkle * 0.16 + glow * 0.6;
        const r = d.r + glow * 1.6;
        ctx.beginPath();
        ctx.arc(px, py, r, 0, Math.PI * 2);
        ctx.fillStyle =
          glow > 0.15
            ? `rgba(${ACCENT}, ${alpha})`
            : `rgba(180, 190, 210, ${alpha})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(frame);
    };

    const paintStatic = () => {
      ctx.clearRect(0, 0, w, h);
      drawSpotlight();
      for (const d of dots) {
        ctx.beginPath();
        ctx.arc(d.bx, d.by, d.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(180, 190, 210, 0.16)';
        ctx.fill();
      }
    };

    const onPointer = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.active = true;
    };
    const onLeave = () => {
      pointer.active = false;
    };
    const onVisibility = () => {
      running = !document.hidden;
      if (running && !reduce) {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(frame);
      }
    };

    let resizeTimer = 0;
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        build();
        if (reduce) paintStatic();
      }, 150);
    };

    build();
    if (reduce) {
      paintStatic();
    } else {
      window.addEventListener('pointermove', onPointer, { passive: true });
      window.addEventListener('pointerleave', onLeave);
      document.addEventListener('visibilitychange', onVisibility);
      raf = requestAnimationFrame(frame);
    }
    window.addEventListener('resize', onResize);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onPointer);
      window.removeEventListener('pointerleave', onLeave);
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
      style={{ maskImage: 'radial-gradient(ellipse 90% 70% at 50% 40%, #000 55%, transparent 100%)' }}
    />
  );
}
