import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Services from "@/components/Services";
import CtaBanner from "@/components/CtaBanner";
import Treatments from "@/components/Treatments";
import Differentials from "@/components/Differentials";
import Locations from "@/components/Locations";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const menuItems = [
  { id: "about", label: "Sobre" },
  { id: "services", label: "Atuação" },
  { id: "benefits", label: "Benefícios" },
  { id: "differentials", label: "Diferenciais" },
  { id: "clinic", label: "Clínica" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contato" },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const sections = [
      "about",
      "services",
      "cta-banner",
      "benefits",
      "differentials",
      "clinic",
      "testimonials",
      "faq",
      "contact",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.25 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
      <main>
        <About scrollToSection={scrollToSection} />
        <Services />
        <CtaBanner />
        <Treatments />
        <Differentials />
        <Locations />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
