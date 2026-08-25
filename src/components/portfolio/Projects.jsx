import { useReveal } from "../../hooks/useReveal";

const projects = [
  {
    title: "Chef Claude",
    description:
      "AI-powered recipe generator that suggests meals from the ingredients you have.",
    image:
      "/__l5e/assets-v1/20642116-3b9c-4d0c-9bbe-47a73ffa525c/chef.png",
    tech: ["React", "API", "CSS"],
    live: "https://chef-claude-app-4tau.vercel.app/",
  },
  {
    title: "Browser Extension Manager UI",
    description:
      "Clean dashboard UI to enable, disable, and remove browser extensions with light/dark mode.",
    image:
      "/__l5e/assets-v1/4562eb60-b24f-4cb4-a1ac-41e6dad96284/extension.png",
    tech: ["HTML", "CSS", "JS"],
    live: "https://browser-extension-manager-ui-green-seven.vercel.app/",
  },
  {
    title: "Typing Speed Test",
    description:
      "Interactive typing game that measures WPM and accuracy in real time.",
    image:
      "/__l5e/assets-v1/f6a7eff4-0d6f-453f-9e68-0d7b6b57b4c1/typing.png",
    tech: ["HTML", "CSS", "JS"],
    live: "https://typing-speed-test-sepia-seven.vercel.app/",
  },
  {
    title: "Van Life",
    description:
      "Multi-page React Router app for browsing and renting campervans for road trips.",
    image:
      "/__l5e/assets-v1/d57a3472-cc54-4759-b13e-3cbb8a2930a9/vanlife.png",
    tech: ["React", "React Router", "CSS"],
    live: "https://van-life-three-lyart.vercel.app/",
  },
  {
    title: "Calculator App",
    description:
      "Responsive calculator with a polished UI and full keyboard support.",
    image:
      "/__l5e/assets-v1/d2fa5003-af82-46d7-9117-097a7d881f00/calculator.png",
    tech: ["HTML", "CSS", "JS"],
    live: "https://calculator-app-beryl-tau.vercel.app/",
  },
  {
    title: "Far Away",
    description:
      "Interactive travel packing list app that helps you organize items for your next trip.",
    image:
      "/__l5e/assets-v1/f405f495-cb8d-426e-9b3c-a9d92a09391a/faraway.png",
    tech: ["React", "State", "CSS"],
    live: "https://far-away-project-eta.vercel.app/",
  },
];

const githubUrl = "https://github.com/abdulJalilHabibi";

export function Projects() {
  const [headRef, headVisible] = useReveal();

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className={`section-head reveal ${headVisible ? "visible" : ""}`} ref={headRef}>
          <span className="section-eyebrow">Selected work</span>
          <h2 className="section-title">
            Recent <span className="gradient-text">projects</span>
          </h2>
          <p className="section-sub">
            A glimpse at the products I've shipped over the last year.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const [ref, visible] = useReveal();

  return (
    <article
      className={`project-card glass reveal ${visible ? "visible" : ""}`}
      ref={ref}
    >
      <div className="project-img">
        <img src={project.image} alt={project.title} loading="lazy" />
      </div>
      <div className="project-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="tech">
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <div className="project-actions">
          <a
            href={project.live}
            target="_blank"
            rel="noopener"
            className="btn btn-primary btn-sm"
          >
            <i className="fa-solid fa-arrow-up-right-from-square"></i> Live
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener"
            className="btn btn-ghost btn-sm"
          >
            <i className="fa-brands fa-github"></i> Code
          </a>
        </div>
      </div>
    </article>
  );
}
