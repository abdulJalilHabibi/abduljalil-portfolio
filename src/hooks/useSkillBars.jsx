import { useEffect, useRef, useState } from "react";

export function useSkillBars(skills) {
  const refs = useRef([]);
  const [widths, setWidths] = useState(skills.map(() => "0%"));
  const [percents, setPercents] = useState(skills.map(() => 0));

  useEffect(() => {
    const observers = [];
    refs.current.forEach((el, i) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Bar width animation
              setWidths((prev) => {
                const next = [...prev];
                next[i] = `${skills[i].percent}%`;
                return next;
              });

              // Number count animation from 0 to percent
              const duration = 1400;
              const target = skills[i].percent;
              const start = performance.now();

              const step = (now) => {
                const elapsed = now - start;
                const t = Math.min(1, elapsed / duration);
                const eased = 1 - Math.pow(1 - t, 3);
                const current = Math.round(eased * target);

                setPercents((prev) => {
                  const next = [...prev];
                  next[i] = current;
                  return next;
                });

                if (t < 1) {
                  requestAnimationFrame(step);
                } else {
                  setPercents((prev) => {
                    const next = [...prev];
                    next[i] = target;
                    return next;
                  });
                }
              };

              requestAnimationFrame(step);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.25 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [skills]);

  const setRef = (i) => (el) => {
    refs.current[i] = el;
  };

  return { widths, percents, setRef };
}
