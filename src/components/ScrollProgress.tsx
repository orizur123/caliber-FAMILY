"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Razor-thin acid-yellow progress bar pinned to the very top of the viewport.
 * Tells the user how far through the page they've scrolled. Spring-smoothed
 * so it never jitters; pure CSS transforms so it's GPU-cheap.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[110] h-[2px] origin-right bg-[var(--color-accent)]"
      aria-hidden
    />
  );
}
