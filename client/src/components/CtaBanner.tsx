import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ACCENT = "#C91D6E";

export default function CtaBanner() {
  const goToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="cta-banner" style={{ backgroundColor: "#1C1C1C" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Decorative accent line */}
          <div
            className="mx-auto mb-7"
            style={{
              width: "2.5rem",
              height: "2px",
              backgroundColor: ACCENT,
            }}
          />

          <h2
            className="mb-5 leading-tight"
            style={{
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              fontFamily: "Lora, Georgia, serif",
              fontWeight: 700,
              color: "#FFFFFF",
            }}
          >
            Seu corpo está dando sinais?
          </h2>

          <p
            className="text-base leading-relaxed mb-9 max-w-2xl mx-auto"
            style={{
              color: "rgba(255,255,255,0.65)",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Não espere que pequenos desconfortos se transformem em grandes limitações.
            Uma avaliação especializada pode identificar a causa dos seus sintomas e indicar
            o tratamento mais adequado para você.
          </p>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={goToContact}
            className="group inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-md cursor-pointer transition-all"
            style={{
              backgroundColor: ACCENT,
              fontFamily: "Montserrat, sans-serif",
              fontSize: "0.9rem",
              boxShadow: "0 4px 20px rgba(201,29,110,0.35)",
            }}
          >
            Agende sua Avaliação
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
