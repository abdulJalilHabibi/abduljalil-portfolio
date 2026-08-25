import { useMobileNav } from "../../hooks/useMobileNav";
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
  const { open, toggle, linksRef } = useMobileNav();
  const activeId = useScrollActive(navLinks.map((n) => n.href.slice(1)));

  return (
    <header className="navbar glass" id="navbar">
      <div className="container nav-inner">
        <a href="#home" className="logo">
          <span className="logo-mark">J</span>
          <span className="logo-text">
            Jalil<span className="dot">.</span>
          </span>
        </a>
        <nav
          className={`nav-links ${open ? "open" : ""}`}
          id="navLinks"
          aria-label="Primary"
          ref={linksRef}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={activeId === link.href.slice(1) ? "active" : ""}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          className={`menu-toggle ${open ? "open" : ""}`}
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={toggle}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
