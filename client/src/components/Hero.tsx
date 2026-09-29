import { motion } from "framer-motion";
import { Calendar, ArrowDown } from "lucide-react";
import atendimento from "../assets/drajulianaatendimento.jpeg";
import { ACCENT, PRIMARY, BRAND, whatsappLink } from "@/lib/site";

interface HeroProps {
  scrollToSection: (section: string) => void;
}

const topics = ["Gestação", "Pós-parto", "Menopausa", "Disfunção sexual", "Recuperação pélvica"];

export default function Hero({ scrollToSection }: HeroProps) {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden flex items-center"
      style={{ minHeight: "100svh", paddingTop: "4.5rem", backgroundColor: "#FFFFFF" }}
    >
      {/* Mobile: foto como fundo suave */}
      <div className="lg:hidden absolute inset-0 pointer-events-none" aria-hidden>
        <img
          src={atendimento}
          alt=""
          className="absolute right-0 bottom-0 h-[70%] w-auto object-cover opacity-25"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, #FFFFFF 35%, rgba(255,255,255,0.75) 70%, rgba(255,255,255,0.55) 100%)" }}
        />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="grid lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_440px] gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div style={{ width: "2.5rem", height: "1px", backgroundColor: ACCENT, flexShrink: 0 }} />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: ACCENT }}>
                {BRAND}
              </span>
            </div>

            <h1
              className="text-balance"
              style={{ fontSize: "clamp(2.2rem, 4.6vw, 3.9rem)", fontWeight: 700, color: PRIMARY, lineHeight: 1.12 }}
            >
              Seu corpo íntimo merece o mesmo cuidado que{" "}
              <em style={{ color: ACCENT, fontStyle: "italic" }}>o resto da sua vida.</em>
            </h1>

            <p className="mt-6 text-base md:text-lg max-w-2xl" style={{ color: "#4A4A4A" }}>
              <strong style={{ color: PRIMARY }}>{BRAND}</strong>, fundada por Juliana, fisioterapeuta pélvica,
              professora universitária, doutora e mestre dedicada ao tema.
            </p>

            <p className="mt-4 text-sm md:text-base max-w-2xl" style={{ color: "#5A5A5A" }}>
              Gestação, pós-parto, menopausa, disfunção sexual e recuperação pélvica, tratados com naturalidade,
              ciência e elegância.
            </p>

            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Áreas de cuidado">
              {topics.map((t) => (
                <li
                  key={t}
                  className="text-xs font-medium px-3 py-1.5 rounded-full"
                  style={{ color: PRIMARY, backgroundColor: "rgba(201,29,110,0.07)", border: "1px solid rgba(201,29,110,0.18)" }}
                >
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-md text-white font-semibold text-[0.95rem]"
                style={{ backgroundColor: ACCENT }}
              >
                <Calendar size={17} />
                Agendar avaliação
              </motion.a>
              <button
                onClick={() => scrollToSection("sobre")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md font-semibold text-[0.95rem] cursor-pointer transition-colors hover:bg-black/[0.03]"
                style={{ color: PRIMARY, border: "1px solid rgba(28,28,28,0.2)", backgroundColor: "rgba(255,255,255,0.8)" }}
              >
                Conheça a Juliana
                <ArrowDown size={16} />
              </button>
            </div>
          </motion.div>

          {/* Desktop: foto emoldurada */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="hidden lg:block relative"
          >
            <div
              className="absolute -top-4 -right-4 w-full h-full rounded-2xl"
              style={{ border: `1px solid ${ACCENT}`, opacity: 0.35 }}
              aria-hidden
            />
            <div className="relative rounded-2xl overflow-hidden" style={{ boxShadow: "0 18px 50px rgba(28,28,28,0.16)" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", backgroundColor: ACCENT, zIndex: 1 }} />
              <img
                src={atendimento}
                alt="Juliana Schulze Burti em atendimento de fisioterapia pélvica"
                className="w-full object-cover"
                style={{ aspectRatio: "498 / 700", maxHeight: "calc(100svh - 10rem)", objectPosition: "top center" }}
              />
            </div>
            <div
              className="absolute -bottom-6 -left-8 bg-white rounded-xl px-5 py-4"
              style={{ boxShadow: "0 10px 30px rgba(28,28,28,0.12)" }}
            >
              <p className="text-[0.7rem] font-semibold uppercase tracking-widest" style={{ color: ACCENT }}>
                Avaliação inicial
              </p>
              <p className="font-heading font-bold text-lg" style={{ color: PRIMARY }}>
                1h30 · plano individual
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
