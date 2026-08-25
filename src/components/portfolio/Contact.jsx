import { useState } from "react";
import { useReveal } from "../../hooks/useReveal";
import { SocialLinks } from "./SocialLinks";

export function Contact() {
  const [infoRef, infoVisible] = useReveal();
  const [formRef, formVisible] = useReveal();
  const [status, setStatus] = useState({ text: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = (data.get("name") || "").toString().trim();
    const email = (data.get("email") || "").toString().trim();
    const message = (data.get("message") || "").toString().trim();
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!name || !validEmail || !message) {
      setStatus({
        text: "Please fill in your name, a valid email, and a message.",
        type: "error",
      });
      return;
    }

    setStatus({ text: "Sending…", type: "" });
    setTimeout(() => {
      setStatus({
        text: `Thanks ${name}! Your message has been sent. I'll reply soon.`,
        type: "success",
      });
      e.currentTarget.reset();
    }, 800);
  };

  return (
    <section id="contact" className="section">
      <div className="container contact-grid">
        <div className={`contact-info reveal ${infoVisible ? "visible" : ""}`} ref={infoRef}>
          <span className="section-eyebrow">Get in touch</span>
          <h2 className="section-title">
            Let's build something <span className="gradient-text">great</span>
          </h2>
          <p className="muted">
            Have a project in mind or just want to say hi? My inbox is always
            open.
          </p>

          <ul className="contact-list">
            <li>
              <i className="fa-solid fa-envelope"></i>{" "}
              <a href="mailto:abduljalilhabibi230@gmail.com">
                abduljalilhabibi230@gmail.com
              </a>
            </li>
            <li>
              <i className="fa-solid fa-phone"></i>{" "}
              <a href="tel:+93749946577">+93 749 946 577</a>
            </li>
            <li>
              <i className="fa-solid fa-location-dot"></i> Kabul, Afghanistan
            </li>
          </ul>

          <SocialLinks />

          <div className="map glass">
            <iframe
              title="Kabul District 5 map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=69.080%2C34.490%2C69.180%2C34.555&amp;layer=mapnik"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <form
          className={`contact-form glass reveal ${formVisible ? "visible" : ""}`}
          ref={formRef}
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your name"
            />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
            />
          </div>
          <div className="field">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="What's this about?"
            />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Tell me about your project…"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            <i className="fa-solid fa-paper-plane"></i> Send Message
          </button>
          <p
            className={`form-status ${status.type}`}
            role="status"
            aria-live="polite"
          >
            {status.text}
          </p>
        </form>
      </div>
    </section>
  );
}
