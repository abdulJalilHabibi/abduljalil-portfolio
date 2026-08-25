import { About } from "./About";
import { BackgroundFx } from "./BackgroundFx";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { Loader } from "./Loader";
import { Navbar } from "./Navbar";
import { Projects } from "./Projects";
import { ScrollToTop } from "./ScrollToTop";
import { Services } from "./Services";
import { Skills } from "./Skills";

export function Portfolio() {
  return (
    <>
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
