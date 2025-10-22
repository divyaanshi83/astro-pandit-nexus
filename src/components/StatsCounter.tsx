// src/components/StatsCounter.tsx
import React, { useEffect, useRef, useState } from "react";

type StatItem = {
  value: number;      // numeric target (e.g. 200 for "200k" if you use suffix 'k')
  suffix?: string;    // optional suffix like 'k', '+', 'k+' etc.
  label: string;
};

const STATS: StatItem[] = [
  { value: 200, suffix: "k", label: "Kundli Served" },
  { value: 50, suffix: "+", label: "Year's Of Legacy" },
  { value: 50, suffix: "k+", label: "Students Enrolled" },
  { value: 100, suffix: "k+", label: "Consultations Given" },
  { value: 20, suffix: "+", label: "Awards in the field of Occult" },
];

type CounterProps = {
  target: number;
  duration?: number; // ms
  suffix?: string;
};

function useCountUp(target: number, duration = 1500) {
  const [count, setCount] = useState(0);
  const startRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // edge cases
    if (target <= 0) {
      setCount(0);
      return;
    }
    startRef.current = null;

    const step = (timestamp: number) => {
      if (startRef.current === null) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / duration, 1); // 0..1
      // easing out (easeOutQuad)
      const eased = 1 - (1 - progress) * (1 - progress);
      const current = Math.floor(eased * target);
      setCount(current);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        // Ensure final value is exactly target
        setCount(Math.floor(target));
      }
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target, duration]);

  return count;
}

const Counter: React.FC<CounterProps> = ({ target, duration = 1500, suffix }) => {
  const value = useCountUp(target, duration);
  return (
    <span className="text-4xl font-semibold leading-none">
      {value}
      {suffix ?? ""}
    </span>
  );
};

export default function StatsCounter() {
  return (
    <section className="bg-[#7A2A24] p-8 rounded-xl mx-6">
      <div className="max-w-[1200px] mx-auto flex flex-wrap justify-between gap-8 items-center">
        {STATS.map((s, i) => (
          <div
            key={i}
            className="w-40 h-40 md:w-48 md:h-48 bg-[#fff3f2] rounded-full flex flex-col items-center justify-center shadow-lg"
          >
            <div className="text-center px-2">
              <Counter target={s.value} duration={1700 + i * 100} suffix={s.suffix} />
              <p className="text-sm md:text-base mt-2 text-[#7A2A24] font-medium">{s.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
