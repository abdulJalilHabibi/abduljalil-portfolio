import { useReveal } from "../../hooks/useReveal";

const services = [
  {
    icon: "fa-solid fa-display",
    title: "Responsive Website Development",
    description: "Pixel-perfect websites that adapt seamlessly across every device.",
  },
  {
    icon: "fa-solid fa-paint-roller",
    title: "Landing Page Design",
    description: "High-converting landing pages designed to capture attention.",
  },
  {
    icon: "fa-brands fa-react",
    title: "React Development",
    description: "Modern, scalable React apps with clean component architecture.",
  },
  {
    icon: "fa-solid fa-wand-magic-sparkles",
    title: "Website Redesign",
    description: "Refresh outdated sites with modern UI and improved performance.",
  },
  {
    icon: "fa-solid fa-pen-ruler",
    title: "UI Implementation",
    description: "Turn Figma designs into clean, accessible, production-ready code.",
  },
  {
    icon: "fa-solid fa-bug-slash",
    title: "Bug Fixing",
    description: "Diagnose and resolve frontend issues quickly and reliably.",
  },
];

export function Services() {
  const [headRef, headVisible] = useReveal();

  return (
    <section id="services" className="section">
      <div className="container">
        <div className={`section-head reveal ${headVisible ? "visible" : ""}`} ref={headRef}>
          <span className="section-eyebrow">Services</span>
          <h2 className="section-title">
            What I can <span className="gradient-text">do for you</span>
          </h2>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }) {
  const [ref, visible] = useReveal();

  return (
    <article
      className={`service-card glass reveal ${visible ? "visible" : ""}`}
      ref={ref}
    >
      <i className={service.icon}></i>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </article>
  );
}
