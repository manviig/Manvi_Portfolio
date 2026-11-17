import { Hero } from "@/components/Hero/Hero";
import { GuideZone } from "@/components/WalkingGuide/GuideZone";
import { Projects } from "@/components/Projects/Projects";
import { Experience } from "@/components/Experience/Experience";
import { About } from "@/components/About/About";
import { Skills } from "@/components/Skills/Skills";
import { Credentials } from "@/components/Credentials/Credentials";
import { Contact } from "@/components/Contact/Contact";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <GuideZone>
        <Projects />
        <Experience />
        <About />
        <Skills />
        <Credentials />
        <Contact />
      </GuideZone>
    </main>
  );
}