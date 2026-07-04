import { motion } from "framer-motion";
import {
  Heart,
  Sparkles,
  Baby,
  HeartHandshake,
  Shield,
  Activity,
} from "lucide-react";

const ACCENT = "#C91D6E";
const PRIMARY = "#1C1C1C";

const services = [
  {
    icon: Heart,
    title: "Saúde Pélvica Feminina",
    description:
      "Avaliação e tratamento das principais disfunções do assoalho pélvico.",
  },
  {
    icon: Sparkles,
    title: "Menopausa e Climatério",
    description:
      "Tratamentos para melhorar qualidade de vida, função urinária e saúde íntima.",
  },
  {
    icon: Baby,
    title: "Gestação e Pós-parto",
    description:
      "Preparação para o parto e recuperação funcional após o nascimento do bebê.",
  },
  {
    icon: HeartHandshake,
    title: "Disfunções Sexuais",
    description:
      "Tratamento para dor na relação sexual, vaginismo e alterações do assoalho pélvico.",
  },
  {
    icon: Shield,
    title: "Saúde Pélvica Masculina",
    description:
      "Reabilitação após prostatectomia, incontinência urinária e dor pélvica.",
  },
  {
    icon: Activity,
    title: "Ginástica Pélvica",
    description:
      "Programa exclusivo voltado para prevenção, fortalecimento e qualidade de vida.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center gap-4 mb-5">
            <div style={{ height: "1px", width: "2.5rem", backgroundColor: ACCENT, opacity: 0.6 }} />
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: ACCENT, fontFamily: "Montserrat, sans-serif" }}
            >
              Áreas de Atuação
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
            Como posso ajudar você?
          </h2>
          <p
            className="text-base"
            style={{ color: "#5A5A5A", fontFamily: "Montserrat, sans-serif" }}
          >
            Tratamentos individualizados para cada fase da vida.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              className="group relative bg-white rounded-xl p-6 border overflow-hidden transition-all duration-300 hover:shadow-lg"
              style={{
                borderColor: "rgba(28,28,28,0.09)",
              }}
            >
              {/* Top accent bar — appears on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 transition-all duration-300 group-hover:h-1"
                style={{ backgroundColor: ACCENT, opacity: 0, transition: "opacity 0.3s" }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              />
              {/* Static top border that shows on hover via parent */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: ACCENT }}
              />

              {/* Icon */}
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-opacity-100"
                style={{ backgroundColor: "rgba(201,29,110,0.07)" }}
              >
                <service.icon
                  className="w-5 h-5 transition-colors duration-300"
                  style={{ color: ACCENT }}
                />
              </div>

              {/* Title */}
              <h3
                className="text-base font-bold mb-2"
                style={{ color: PRIMARY, fontFamily: "Lora, Georgia, serif" }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#5A5A5A", fontFamily: "Montserrat, sans-serif" }}
              >
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.025 }}
            whileTap={{ scale: 0.975 }}
            className="px-8 py-3.5 text-white rounded-md font-medium hover:shadow-md transition-all cursor-pointer text-sm"
            style={{ backgroundColor: ACCENT, fontFamily: "Montserrat, sans-serif" }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Agendar uma Avaliação
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
