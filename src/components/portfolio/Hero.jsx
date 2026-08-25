import { useTypingEffect } from "../../hooks/useTypingEffect";
import { useReveal } from "../../hooks/useReveal";
import { SocialLinks } from "./SocialLinks";

const phrases = ["Frontend Developer", "React Enthusiast", "UI Engineer"];
const heroImage =
  "/__l5e/assets-v1/f9ba9f21-297e-4d1d-9ff1-4207e0e11886/abdul-jalil.png";

export function Hero() {
  const typed = useTypingEffect(phrases);
  const [contentRef, contentVisible] = useReveal();
  const [visualRef, visualVisible] = useReveal();

  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className={`hero-content reveal ${contentVisible ? "visible" : ""}`} ref={contentRef}>
          <span className="eyebrow">
            <span className="pulse-dot"></span> Available for freelance
          </span>
          <h1>
            Hi, I'm <span className="gradient-text">Abdul Jalil</span>
            <br />
            <span className="typing-wrap">
              a <span className="typed">{typed}</span>
              <span className="caret">|</span>
            </span>
          </h1>
          <p className="lead">
            I design and build premium, accessible, and lightning-fast
            interfaces. Turning ideas into pixel-perfect, production-ready web
            experiences.
          </p>
          <div className="cta-row">
            <a href="#" className="btn btn-primary" download>
              <i className="fa-solid fa-download"></i> Download CV
            </a>
            <a href="#contact" className="btn btn-ghost">
              <i className="fa-solid fa-paper-plane"></i> Contact Me
            </a>
          </div>
          <SocialLinks />
        </div>

        <div className={`hero-visual reveal ${visualVisible ? "visible" : ""}`} ref={visualRef}>
          <div className="avatar-wrap">
            <div className="avatar-ring"></div>
            <div className="avatar-glow"></div>
            <img
              src={heroImage}
              alt="Portrait of Abdul Jalil"
              className="avatar-img"
              loading="eager"
            />
            <div className="float-badge badge-1">
              <i className="fa-brands fa-react"></i>
            </div>
            <div className="float-badge badge-2">
              <i className="fa-brands fa-js"></i>
            </div>
            <div className="float-badge badge-3">
              <i className="fa-solid fa-code"></i>
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-cue" aria-label="Scroll to about">
        <span></span>
      </a>
    </section>
  );
}
