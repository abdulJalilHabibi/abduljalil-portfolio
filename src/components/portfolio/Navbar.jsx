import { useEffect, useRef, useState } from "react";
import { useScrollActive } from "../../hooks/useScrollActive";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);
  const activeId = useScrollActive(navLinks.map((n) => n.href.slice(1)));

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onClickOutside);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onClickOutside);
    };
  }, [open]);

  return (
    <header className="navbar glass" id="navbar" ref={navRef}>
      <div className="container nav-inner">
        <a href="#home" className="logo" onClick={() => setOpen(false)}>
          <span className="logo-mark">J</span>
          <span className="logo-text">
            Jalil<span className="dot">.</span>
          </span>
        </a>

        <div className={`nav-expand ${open ? "open" : ""}`}>
          <nav
            className="nav-links"
            id="navLinks"
            aria-label="Primary"
            aria-hidden={!open}
          >
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                tabIndex={open ? 0 : -1}
                style={{ transitionDelay: `${open ? 90 + i * 45 : 0}ms` }}
                className={activeId === link.href.slice(1) ? "active" : ""}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className={`nav-toggle ${open ? "open" : ""}`}
            aria-label={open ? "Collapse navigation" : "Expand navigation"}
            aria-expanded={open}
            aria-controls="navLinks"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="nav-toggle-bars" aria-hidden="true">
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
