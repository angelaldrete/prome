import Hero from "./modules/Hero";
import Skills from "./modules/Skills";
import Projects from "./modules/Projects";
import Contact from "./modules/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
