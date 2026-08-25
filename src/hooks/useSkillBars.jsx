import { useEffect, useRef, useState } from "react";

export function useSkillBars(skills) {
  const refs = useRef([]);
  const [widths, setWidths] = useState(skills.map(() => "0%"));

  useEffect(() => {
    const observers = [];
    refs.current.forEach((el, i) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setWidths((prev) => {
                const next = [...prev];
                next[i] = `${skills[i].percent}%`;
                return next;
              });
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.4 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [skills]);

  const setRef = (i) => (el) => {
    refs.current[i] = el;
  };

  return { widths, setRef };
}
