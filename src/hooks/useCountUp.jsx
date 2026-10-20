import { useEffect, useRef, useState } from "react";

export function useCountUp(target, options = {}) {
  const { duration = 1600, threshold = 0.2, suffix = "", prefix = "" } = options;
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || startedRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            const startTime = performance.now();

            const step = (now) => {
              const elapsed = now - startTime;
              const progress = Math.min(1, elapsed / duration);
              // Smooth ease-out cubic
              const eased = 1 - Math.pow(1 - progress, 3);
              const current = Math.round(eased * target);

              setValue(current);

              if (progress < 1) {
                requestAnimationFrame(step);
              } else {
                setValue(target);
                setIsComplete(true);
              }
            };

            requestAnimationFrame(step);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration, threshold]);

  return [ref, `${prefix}${value}${suffix}`, isComplete];
}
