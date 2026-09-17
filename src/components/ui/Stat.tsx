"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

export default function Stat({
  value,
  suffix = "",
  label,
  className = "",
}: {
  value: number;
  suffix?: string;
  label: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [animated, setAnimated] = useState(0);
  // Reduced motion lands on the final value at render time, so the effect never
  // has to set state synchronously just to skip the animation.
  const display = reduce ? value : animated;

  useEffect(() => {
    if (!inView || reduce) return;
    let raf = 0;
    const start = performance.now();
    const duration = 1500;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setAnimated(Math.round(value * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, value]);

  return (
    <div ref={ref} className={className}>
      <p className="font-display text-[clamp(2.5rem,4.2vw,3.9rem)] font-semibold leading-none tracking-[-0.06em] tabular-nums">
        {display.toLocaleString("en-IN")}
        {suffix}
      </p>
      <p className="font-mono-ui mt-3 text-[9px] tracking-[0.14em] opacity-50">{label}</p>
    </div>
  );
}