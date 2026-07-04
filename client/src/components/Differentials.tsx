import { motion } from "framer-motion";
import { FlaskConical, UserCheck, Award } from "lucide-react";

const ACCENT = "#C91D6E";
const PRIMARY = "#1C1C1C";

const differentials = [
  {
    icon: FlaskConical,
    title: "Método Próprio",
    description:
      "Abordagem exclusiva desenvolvida a partir da prática clínica, pesquisa científica e ensino universitário.",
  },
  {
    icon: UserCheck,
    title: "Atendimento Individualizado",
    description:
      "Cada paciente recebe um plano terapêutico construído conforme sua necessidade.",
  },
  {
    icon: Award,
    title: "Referência Nacional",
    description:
      "Professora universitária, pesquisadora e formadora de profissionais em fisioterapia pélvica.",
  },
];

export default function Differentials() {
  return (
    <section id="differentials" className="py-16 md:py-24" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Centered header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-4 mb-5">
            <div style={{ height: "1px", width: "2.5rem", backgroundColor: ACCENT, opacity: 0.6 }} />
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: ACCENT, fontFamily: "Montserrat, sans-serif" }}
            >
              Por que escolher a Dra. Juliana?
            </span>
            <div style={{ height: "1px", width: "2.5rem", backgroundColor: ACCENT, opacity: 0.6 }} />
          </div>

          <h2
            className="mb-3 leading-tight"
            style={{
              fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
              fontFamily: "Lora, Georgia, serif",
              color: PRIMARY,
            }}
          >
            Ciência, experiência e acolhimento caminham juntos.
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {differentials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 border text-center"
              style={{
                borderColor: "rgba(28,28,28,0.09)",
                boxShadow: "0 4px 20px rgba(28,28,28,0.06)",
              }}
            >
              {/* Icon circle */}
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                style={{ backgroundColor: "rgba(201,29,110,0.08)" }}
              >
                <item.icon className="w-6 h-6" style={{ color: ACCENT }} />
              </div>

              <h3
                className="text-lg font-bold mb-3"
                style={{ color: PRIMARY, fontFamily: "Lora, Georgia, serif" }}
              >
                {item.title}
              </h3>

              <p
                className="text-sm leading-relaxed"
                style={{ color: "#5A5A5A", fontFamily: "Montserrat, sans-serif" }}
              >
                {item.description}
              </p>

              {/* Bottom accent */}
              <div
                className="mx-auto mt-5"
                style={{ width: "2rem", height: "2px", backgroundColor: ACCENT, opacity: 0.5 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
