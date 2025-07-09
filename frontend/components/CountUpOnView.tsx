"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

interface CountUpOnViewProps {
  target: number;
  duration?: number; // seconds
  className?: string;
  prefix?: string;
  suffix?: string;
}

export function CountUpOnView({
  target,
  duration = 1.2,
  className = "",
  prefix = "",
  suffix = "",
}: CountUpOnViewProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = target;
    const startTime = performance.now();

    function animate(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const value = Math.floor(progress * (end - start) + start);
      setCount(value);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    }

    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}
