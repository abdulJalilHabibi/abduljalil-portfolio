import { useReveal } from "../../hooks/useReveal";
import { useSkillBars } from "../../hooks/useSkillBars";

const skills = [
  { name: "HTML5", icon: "fa-brands fa-html5", percent: 95 },
  { name: "CSS3", icon: "fa-brands fa-css3-alt", percent: 92 },
  { name: "JavaScript", icon: "fa-brands fa-js", percent: 90 },
  { name: "React", icon: "fa-brands fa-react", percent: 88 },
  { name: "Tailwind CSS", icon: "fa-solid fa-wind", percent: 90 },
  { name: "Bootstrap", icon: "fa-brands fa-bootstrap", percent: 85 },
  { name: "Git", icon: "fa-brands fa-git-alt", percent: 87 },
  { name: "GitHub", icon: "fa-brands fa-github", percent: 89 },
  { name: "Responsive Design", icon: "fa-solid fa-mobile-screen", percent: 94 },
  { name: "REST APIs", icon: "fa-solid fa-plug", percent: 86 },
];

export function Skills() {
  const [headRef, headVisible] = useReveal();
  const { widths, percents, setRef } = useSkillBars(skills);

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className={`section-head reveal ${headVisible ? "visible" : ""}`} ref={headRef}>
          <span className="section-eyebrow">Skills</span>
          <h2 className="section-title">
            My <span className="gradient-text">technical toolkit</span>
          </h2>
          <p className="section-sub">
            Technologies I use every day to build modern web experiences.
          </p>
        </div>
        <div className="skills-grid">
          {skills.map((skill, i) => (
            <article
              key={skill.name}
              className="skill-card glass reveal visible"
              ref={setRef(i)}
            >
              <header>
                <i className={skill.icon}></i>
                <h3>{skill.name}</h3>
                <span>{percents[i]}%</span>
              </header>
              <div className="bar">
                <div
                  className="bar-fill"
                  style={{ width: widths[i] }}
                ></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
