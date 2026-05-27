"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

/**
 * Numeric counter that animates from 0 to `to` once it enters the viewport.
 * easeOutCubic so the count slows near the end (feels less robotic).
 * Renders the number + an optional suffix (e.g. "K+", "+").
 */
export function CountUp({
  to,
  duration = 1600,
  suffix = "",
}: {
  to: number;
  duration?: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setN(Math.floor(eased * to));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setN(to);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}
