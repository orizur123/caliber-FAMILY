import { CountUp } from "./CountUp";

/**
 * "By the numbers" strip — reads like a record-label one-sheet. Numbers
 * animate from 0 up when the strip enters the viewport (CountUp).
 */
export function AboutStrip({ totalSongs }: { totalSongs: number }) {
  const stats = [
    { node: <CountUp to={totalSongs} />, label: "שירים" },
    { node: <CountUp to={5} suffix="K+" />, label: "מאזינים" },
    { node: <CountUp to={10} suffix="+" />, label: "שיתופי פעולה" },
  ];

  return (
    <section className="relative border-y-2 border-[var(--color-accent)] bg-[var(--color-muted)] py-12 md:py-16">
      <div className="mx-auto grid max-w-5xl grid-cols-3 gap-6 px-4 md:px-8">
        {stats.map((s, i) => (
          <div key={i} className="text-center">
            <div
              className="font-[var(--font-display-he)] text-6xl font-black leading-none text-[var(--color-accent)] md:text-7xl"
              style={{ textShadow: "0 0 30px rgba(223, 225, 4, 0.3)" }}
            >
              {s.node}
            </div>
            <div className="mt-2 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted-fg)] md:text-xs">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
