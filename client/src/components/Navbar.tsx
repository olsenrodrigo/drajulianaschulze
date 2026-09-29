import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import { ACCENT, PRIMARY, NAV_ITEMS, whatsappLink } from "@/lib/site";

interface NavbarProps {
  activeSection?: string;
  scrollToSection: (section: string) => void;
}

export default function Navbar({ activeSection, scrollToSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (id: string) => {
    scrollToSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: "rgba(255,255,255,0.97)",
        backdropFilter: "blur(12px)",
        boxShadow: isScrolled ? "0 1px 0 rgba(28,28,28,0.08)" : "0 1px 0 rgba(28,28,28,0.04)",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[4.5rem] lg:h-[5rem]">
          <button onClick={() => handleNav("inicio")} className="cursor-pointer" aria-label="Início">
            <Logo />
          </button>

          <nav className="hidden lg:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="relative text-[13px] font-medium transition-colors cursor-pointer"
                style={{ color: activeSection === item.id ? ACCENT : PRIMARY }}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-0.5 left-0 right-0 h-px"
                    style={{ background: ACCENT }}
                  />
                )}
              </button>
            ))}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-5 py-2.5 rounded-md text-[13px] font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: ACCENT }}
            >
              Agendar avaliação
            </a>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 cursor-pointer transition-opacity hover:opacity-70"
            style={{ color: PRIMARY }}
            aria-label="Menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden border-t"
              style={{ borderColor: "rgba(28,28,28,0.08)" }}
            >
              <div className="py-3">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNav(item.id)}
                    className="block w-full text-left px-4 py-3 text-sm font-medium cursor-pointer"
                    style={{
                      color: activeSection === item.id ? ACCENT : PRIMARY,
                      backgroundColor: activeSection === item.id ? "rgba(201,29,110,0.05)" : "transparent",
                    }}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="px-4 pt-3 pb-2">
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-5 py-3.5 rounded-md text-sm font-semibold text-white"
                    style={{ backgroundColor: ACCENT }}
                  >
                    Agendar avaliação
                  </a>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
