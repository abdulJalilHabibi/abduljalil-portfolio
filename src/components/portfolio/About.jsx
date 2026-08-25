import { useCountUp } from "../../hooks/useCountUp";
import { useReveal } from "../../hooks/useReveal";

const aboutImage =
  "/__l5e/assets-v1/f9ba9f21-297e-4d1d-9ff1-4207e0e11886/abdul-jalil.png";

export function About() {
  const [imgRef, imgVisible] = useReveal();
  const [contentRef, contentVisible] = useReveal();
  const [projectsRef, projectsValue] = useCountUp(6, { suffix: "" });
  const [reposRef, reposValue] = useCountUp(13, { suffix: "" });
  const [yearsRef, yearsValue] = useCountUp(1, { suffix: "" });

  return (
    <section id="about" className="section">
      <div className="container about-grid">
        <div className={`about-img reveal ${imgVisible ? "visible" : ""}`} ref={imgRef}>
          <img
            src={aboutImage}
            alt="Abdul Jalil working at a desk"
            loading="lazy"
          />
          <div className="exp-chip glass">
            <strong>1+</strong>
            <span>
              Year
              <br />
              Experience
            </span>
          </div>
        </div>
        <div className={`about-content reveal ${contentVisible ? "visible" : ""}`} ref={contentRef}>
          <span className="section-eyebrow">About me</span>
          <h2 className="section-title">
            Crafting digital products with{" "}
            <span className="gradient-text">precision &amp; care</span>
          </h2>
          <p>
            I’m a frontend developer based in Kabul, focused on building modern,
            fast, and user-friendly web applications. I transform design
            concepts into clean, responsive, and accessible interfaces that
            deliver a smooth experience across all devices.
          </p>
          <p className="muted">
            I’m currently studying Computer Science at Kabul University, where I
            continue to strengthen my foundation in software development. My
            main focus is improving my React and modern UI engineering skills
            while staying up to date with frontend best practices.
          </p>

          <div className="stats">
            <div className="stat-card glass" ref={projectsRef}>
              <i className="fa-solid fa-rocket"></i>
              <div>
                <strong>{projectsValue}</strong>
                <span>Projects Shipped</span>
              </div>
            </div>
            <div className="stat-card glass" ref={reposRef}>
              <i className="fa-brands fa-github"></i>
              <div>
                <strong>{reposValue}</strong>
                <span>Repositories</span>
              </div>
            </div>
            <div className="stat-card glass" ref={yearsRef}>
              <i className="fa-solid fa-award"></i>
              <div>
                <strong>{yearsValue}</strong>
                <span>Year Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
