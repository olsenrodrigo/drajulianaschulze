import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Team from "@/components/Team";
import Media from "@/components/Media";
import Areas from "@/components/Areas";
import Differentials from "@/components/Differentials";
import CtaBanner from "@/components/CtaBanner";
import Locations from "@/components/Locations";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { NAV_ITEMS, scrollToId } from "@/lib/site";

export default function Home() {
  const [activeSection, setActiveSection] = useState("inicio");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    scrollToId(sectionId);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    ["inicio", ...NAV_ITEMS.map((i) => i.id)].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <main>
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Team />
        <Media />
        <Areas />
        <Differentials />
        <CtaBanner
          title="Uma avaliação para entender seu caso com calma."
          text="A avaliação inicial dura 1h30, é o primeiro passo para criar um plano de tratamento individual, com previsão clara de alta."
          buttonLabel="Agendar minha avaliação"
        />
        <Locations />
        <Testimonials />
        <CtaBanner
          title="Ressignifique a relação com o seu corpo."
          text="Agende sua avaliação inicial na JS Fisioterapia Pélvica e Bem-Estar e comece um tratamento individual, com ciência, acolhimento e previsão clara de alta."
          buttonLabel="Agendar pelo WhatsApp"
          microtext="Atendimento particular. Avaliação inicial de 1h30."
        />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
