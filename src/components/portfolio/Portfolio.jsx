import { useEffect } from "react";
import { About } from "./About";
import { BackgroundFx } from "./BackgroundFx";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { Loader } from "./Loader";
import { Navbar } from "./Navbar";
import { Projects } from "./Projects";
import { ScrollProgress } from "./ScrollProgress";
import { ScrollToTop } from "./ScrollToTop";
import { Services } from "./Services";
import { Skills } from "./Skills";

export function Portfolio() {
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href === "#" || href.length <= 1) return;

      const targetId = href.slice(1);
      const targetEl = document.getElementById(targetId);

      if (targetId === "home") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        try {
          window.history.pushState(null, "", href);
        } catch (_) {}
      } else if (targetEl) {
        e.preventDefault();
        const navOffset = 85;
        const targetTop =
          targetEl.getBoundingClientRect().top + window.pageYOffset - navOffset;
        window.scrollTo({ top: targetTop, behavior: "smooth" });
        try {
          window.history.pushState(null, "", href);
        } catch (_) {}
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <>
      <ScrollProgress />
      <Loader />
      <BackgroundFx />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
