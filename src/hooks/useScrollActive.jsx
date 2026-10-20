import { useEffect, useState } from "react";

export function useScrollActive(sectionIds, offset = 120) {
  const [activeId, setActiveId] = useState(sectionIds[0] || "");

  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // When near the top of the page, activate first section
      if (scrollPos < 80) {
        setActiveId(sectionIds[0] || "home");
        return;
      }

      // When scrolled to the bottom of the page, activate last section
      if (scrollPos + windowHeight >= documentHeight - 60) {
        setActiveId(sectionIds[sectionIds.length - 1] || "contact");
        return;
      }

      const y = scrollPos + offset;
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
