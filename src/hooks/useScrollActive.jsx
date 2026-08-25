import { useEffect, useState } from "react";

export function useScrollActive(sectionIds, offset = 140) {
  const [activeId, setActiveId] = useState(sectionIds[0] || "");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + offset;
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (y >= top && y < bottom) {
            setActiveId(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionIds, offset]);

  return activeId;
}
