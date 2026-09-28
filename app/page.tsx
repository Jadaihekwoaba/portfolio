import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-6 font-sans">
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
