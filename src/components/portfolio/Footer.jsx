import { SocialLinks } from "./SocialLinks";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <a href="#home" className="logo">
            <span className="logo-mark">J</span>
            <span className="logo-text">
              alil<span className="dot">.</span>
            </span>
          </a>
          <p className="muted small">
            Abdul Jalil — Frontend developer crafting premium digital
            experiences.
          </p>
        </div>
        <nav aria-label="Footer">
          <h4>Navigate</h4>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
        <div>
          <h4>Follow</h4>
          <SocialLinks />
        </div>
      </div>
      <div className="container copyright">
        <p>© {year} Abdul Jalil. All rights reserved.</p>
        <p className="muted small">Designed &amp; built with care.</p>
      </div>
    </footer>
  );
}
