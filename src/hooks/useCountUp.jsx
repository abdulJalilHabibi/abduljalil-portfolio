import { useEffect, useRef, useState } from "react";

export function useCountUp(target, options = {}) {
  const { duration = 1600, threshold = 0.5, suffix = "" } = options;
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            setStarted(true);
            const start = performance.now();
            const step = (now) => {
              const t = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - t, 3);
              setValue(Math.floor(eased * target));
              if (t < 1) requestAnimationFrame(step);
              else setValue(target);
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
  }, [target, duration, threshold, started]);

  return [ref, `${value}${suffix}`];
}
