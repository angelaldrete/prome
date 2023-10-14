import Hero from "./modules/Hero";
import Skills from "./modules/Skills";
import Projects from "./modules/Projects";
import Contact from "./modules/Contact";
import Background from "./modules/Background";
import Footer from "./modules/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Background />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
