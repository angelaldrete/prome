import Hero from "./modules/Hero";
import Skills from "./modules/Skills";
import Projects from "./modules/Projects";
import Contact from "./modules/Contact";
import Background from "./modules/Background";

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Background />
      <Projects />
      <Contact />
    </main>
  );
}
