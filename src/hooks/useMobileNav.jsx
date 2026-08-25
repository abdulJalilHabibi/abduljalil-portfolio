import { useEffect, useRef, useState } from "react";

export function useMobileNav() {
  const [open, setOpen] = useState(false);
  const linksRef = useRef(null);

  useEffect(() => {
    const links = linksRef.current;
    if (!links) return;
    const anchors = links.querySelectorAll("a");
    const close = () => setOpen(false);
    anchors.forEach((a) => a.addEventListener("click", close));
    return () => anchors.forEach((a) => a.removeEventListener("click", close));
  }, [linksRef.current]);

  const toggle = () => setOpen((prev) => !prev);

  return { open, toggle, linksRef };
}
