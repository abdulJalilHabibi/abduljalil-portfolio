import { useReveal } from "../../hooks/useReveal";
import calculatorAsset from "../../assets/calculator.png.asset.json";
import chefAsset from "../../assets/chef.png.asset.json";
import fxchecker from "../../assets/fx-checker.png.asset.json";
import extensionAsset from "../../assets/extension.png.asset.json";
import farawayAsset from "../../assets/faraway.png.asset.json";
import typingAsset from "../../assets/typing.png.asset.json";
import vanlifeAsset from "../../assets/vanlife.png.asset.json";
import product from "../../assets/product.png.asset.json";
import movie from "../../assets/movie.png.asset.json";

const projects = [
  {
    title: "FX Checker | Real-Time Currency Converter",
    description:
      "FX Checker is a responsive currency conversion dashboard built with React.",
    image: product.url,
    alt: "FX Checker currency converter dashboard showing live exchange rates, currency conversion, historical rate chart, currency comparison, favorite pairs, and conversion history.",
    tech: ["React", "API", "Tailwind CSS"],
    live: "https://foriegn-exchange-currency.vercel.app/",
  },
  {
    title: "Product List with Cart | E-Commerce Shopping Cart",
    description:
      "Responsive React e-commerce app with product listing, cart management, and quantity controls.",
    image: fxchecker.url,
    alt: "Responsive product list and shopping cart interface showing product cards, selected items, quantities, and order total.",
    tech: ["React", "LocalStorage", "Tailwind CSS"],
    live: "https://product-list-cart-nu.vercel.app/",
  },
  {
    title: "Movie List | Movie Discovery App",
    description:
      "Movie List is a responsive React app for discovering, searching, and exploring movies using a movie API.",
    image: movie.url,
    alt: "Movie List app displaying a responsive grid of movie cards with posters, titles, and ratings.",
    tech: ["React", "REST API", "Tailwind CSS"],
    live: "https://use-popcorn-ruby.vercel.app/",
  },
  {
    title: "Chef Claude",
    description:
      "AI-powered recipe generator that suggests meals from the ingredients you have.",
    image: chefAsset.url,
    alt: "Chef Claude app screenshot showing AI generated recipe suggestions",
    tech: ["React", "API", "CSS"],
    live: "https://chef-claude-app-4tau.vercel.app/",
  },
  {
    title: "Browser Extension Manager UI",
    description:
      "Clean dashboard UI to enable, disable, and remove browser extensions with light/dark mode.",
    image: extensionAsset.url,
    alt: "Browser extension manager dashboard screenshot with extension cards",
    tech: ["HTML", "CSS", "JS"],
    live: "https://browser-extension-manager-ui-green-seven.vercel.app/",
  },
  {
    title: "Typing Speed Test",
    description:
      "Interactive typing game that measures WPM and accuracy in real time.",
    image: typingAsset.url,
    alt: "Typing speed test app screenshot displaying words per minute results",
    tech: ["HTML", "CSS", "JS"],
    live: "https://typing-speed-test-sepia-seven.vercel.app/",
  },
  {
    title: "Van Life",
    description:
      "Multi-page React Router app for browsing and renting campervans for road trips.",
    image: vanlifeAsset.url,
    alt: "Van Life app screenshot listing campervans available to rent",
    tech: ["React", "React Router", "CSS"],
    live: "https://van-life-three-lyart.vercel.app/",
  },
  {
    title: "Calculator App",
    description:
      "Responsive calculator with a polished UI and full keyboard support.",
    image: calculatorAsset.url,
    alt: "Calculator app screenshot with a themed keypad interface",
    tech: ["HTML", "CSS", "JS"],
    live: "https://calculator-app-beryl-tau.vercel.app/",
  },
  {
    title: "Far Away",
    description:
      "Interactive travel packing list app that helps you organize items for your next trip.",
    image: farawayAsset.url,
    alt: "Far Away packing list app screenshot with travel items checklist",
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
        <div
          className={`section-head reveal ${headVisible ? "visible" : ""}`}
          ref={headRef}
        >
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
        <img
          src={project.image}
          alt={project.alt || `${project.title} project screenshot`}
          loading="lazy"
          decoding="async"
        />
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
