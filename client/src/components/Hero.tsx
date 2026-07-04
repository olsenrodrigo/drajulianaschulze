import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import drajuliana1 from "../assets/drajuliana1.jpeg";

interface HeroProps {
  scrollToSection?: (section: string) => void;
}

const ACCENT = "#C91D6E";
const PRIMARY = "#1C1C1C";

const stats = [
  { value: "20+", label: "Anos dedicados à saúde da mulher" },
  { value: "PUC-SP", label: "Professora universitária" },
  { value: "Doutora", label: "em Psicologia" },
];

export default function Hero({ scrollToSection }: HeroProps) {
  const goTo = (id: string) => {
    if (scrollToSection) scrollToSection(id);
    else document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      id="hero"
      className="relative overflow-hidden"
      style={{ backgroundColor: "#F9F7F7" }}
    >
      {/* Background decorativo */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #F9F7F7 0%, #FFFFFF 55%, #FDF0F6 100%)",
          }}
        />
        <div
          className="absolute right-0 top-0 w-1/2 h-full"
          style={{
            background:
              "radial-gradient(ellipse at top right, rgba(201,29,110,0.05) 0%, transparent 65%)",
          }}
        />
        {/* Thin top accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, #C91D6E 40%, #C91D6E 60%, transparent 100%)",
            opacity: 0.25,
          }}
        />
      </div>

      {/* Conteúdo principal */}
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        style={{ paddingTop: "6rem", paddingBottom: "4rem" }}
      >
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] xl:gap-14 xl:items-center">

          {/* Coluna esquerda: conteúdo */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="max-w-2xl"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-5">
              <div
                aria-hidden="true"
                style={{ width: "2rem", height: "1px", backgroundColor: ACCENT, flexShrink: 0 }}
              />
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: ACCENT, fontFamily: "Montserrat, sans-serif" }}
              >
                Fisioterapia Pélvica Especializada
              </span>
            </div>

            {/* Headline */}
            <h1
              className="mb-4 leading-tight"
              style={{
                fontSize: "clamp(1.9rem, 3.6vw, 2.9rem)",
                fontFamily: "Lora, Georgia, serif",
                fontWeight: 700,
                color: PRIMARY,
              }}
            >
              Referência em Fisioterapia Pélvica,{" "}
              Saúde da Mulher e{" "}
              <em style={{ color: ACCENT, fontStyle: "italic" }}>Envelhecimento Feminino</em>
            </h1>

            {/* Nome profissional */}
            <p
              className="text-sm font-semibold mb-1.5 tracking-wide"
              style={{ color: PRIMARY, fontFamily: "Montserrat, sans-serif" }}
            >
              Dra. Juliana Schulze Burti
            </p>

            {/* Descrição */}
            <p
              className="text-sm mb-8 leading-relaxed"
              style={{ color: "#5A5A5A", fontFamily: "Montserrat, sans-serif", maxWidth: "38rem" }}
            >
              Transformando qualidade de vida através de um método próprio baseado em ciência,
              experiência clínica e cuidado humanizado.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <motion.button
                whileHover={{ scale: 1.025 }}
                whileTap={{ scale: 0.975 }}
                onClick={() => goTo("contact")}
                className="group flex items-center gap-2 px-6 py-3 text-white font-medium text-sm rounded-md transition-all hover:shadow-md cursor-pointer"
                style={{ backgroundColor: ACCENT, fontFamily: "Montserrat, sans-serif" }}
              >
                <Calendar size={15} />
                Agendar uma Avaliação
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.025 }}
                whileTap={{ scale: 0.975 }}
                onClick={() => goTo("about")}
                className="flex items-center gap-2 px-6 py-3 font-medium text-sm rounded-md border transition-all cursor-pointer"
                style={{
                  borderColor: "rgba(28,28,28,0.25)",
                  color: PRIMARY,
                  backgroundColor: "transparent",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Conheça o Método
              </motion.button>
            </div>

            {/* Stats */}
            <motion.div
              className="flex flex-wrap gap-x-8 gap-y-4 mt-9 pt-7 border-t"
              style={{ borderColor: "rgba(28,28,28,0.10)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span
                    className="text-xl sm:text-2xl font-bold leading-tight"
                    style={{ color: PRIMARY, fontFamily: "Lora, Georgia, serif" }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="text-xs mt-0.5"
                    style={{ color: "#5A5A5A", fontFamily: "Montserrat, sans-serif" }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Coluna direita: foto — aparece somente em xl+ */}
          <motion.div
            className="hidden xl:flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.2 }}
          >
            <div
              className="relative w-[300px] h-[380px] rounded-2xl overflow-hidden"
              style={{
                boxShadow: "0 20px 60px rgba(201,29,110,0.12), 0 8px 24px rgba(28,28,28,0.12)",
              }}
            >
              <img
                src={drajuliana1}
                alt="Dra. Juliana Schulze Burti"
                className="w-full h-full object-cover object-top"
              />
              {/* Overlay subtle gradient at bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 h-24"
                style={{
                  background: "linear-gradient(to top, rgba(28,28,28,0.35) 0%, transparent 100%)",
                }}
              />
              {/* Pink accent border strip */}
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ backgroundColor: ACCENT }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
