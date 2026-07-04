import { motion } from "framer-motion";
import { Star } from "lucide-react";

const ACCENT = "#C91D6E";
const PRIMARY = "#1C1C1C";

const placeholders = [
  { letter: "A" },
  { letter: "B" },
  { letter: "C" },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
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
              Depoimentos
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
            Histórias de transformação
          </h2>
          <p
            className="text-base max-w-xl mx-auto"
            style={{ color: "#5A5A5A", fontFamily: "Montserrat, sans-serif" }}
          >
            Os depoimentos serão inseridos após autorização das pacientes, preservando toda
            a ética e confidencialidade do atendimento.
          </p>
        </motion.div>

        {/* Placeholder cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {placeholders.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-7 border"
              style={{
                borderColor: "rgba(28,28,28,0.08)",
                boxShadow: "0 4px 16px rgba(28,28,28,0.05)",
              }}
            >
              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-4 h-4 fill-current"
                    style={{ color: "rgba(201,29,110,0.20)" }}
                  />
                ))}
              </div>

              {/* Placeholder text block */}
              <div className="space-y-2 mb-7">
                <div
                  className="h-3 rounded-full w-full"
                  style={{ backgroundColor: "rgba(28,28,28,0.06)" }}
                />
                <div
                  className="h-3 rounded-full w-5/6"
                  style={{ backgroundColor: "rgba(28,28,28,0.06)" }}
                />
                <div
                  className="h-3 rounded-full w-4/6"
                  style={{ backgroundColor: "rgba(28,28,28,0.06)" }}
                />
              </div>

              {/* Em breve badge */}
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                  style={{ backgroundColor: "rgba(201,29,110,0.12)", color: ACCENT }}
                >
                  {item.letter}
                </div>
                <div>
                  <p
                    className="text-xs font-semibold"
                    style={{ color: "rgba(28,28,28,0.30)", fontFamily: "Montserrat, sans-serif" }}
                  >
                    Em breve
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "rgba(28,28,28,0.20)", fontFamily: "Montserrat, sans-serif" }}
                  >
                    Paciente autorizada
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Privacy note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs mt-8"
          style={{ color: "rgba(28,28,28,0.35)", fontFamily: "Montserrat, sans-serif" }}
        >
          Todos os depoimentos são publicados com consentimento expresso das pacientes,
          em conformidade com o Código de Ética Profissional.
        </motion.p>
      </div>
    </section>
  );
}
