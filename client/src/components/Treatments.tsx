import { motion } from "framer-motion";

const ACCENT = "#C91D6E";
const PRIMARY = "#1C1C1C";

const benefits = [
  {
    title: "Controle urinário",
    description: "Reduza ou elimine episódios de perda urinária.",
  },
  {
    title: "Mais qualidade de vida",
    description: "Recupere segurança, autonomia e bem-estar.",
  },
  {
    title: "Saúde sexual",
    description: "Melhore conforto, função sexual e autoestima.",
  },
  {
    title: "Preparação para o parto",
    description: "Prepare o corpo para viver esse momento com mais segurança.",
  },
  {
    title: "Prevenção",
    description: "Cuide da sua saúde antes que os sintomas apareçam.",
  },
  {
    title: "Método exclusivo",
    description:
      "Tratamento baseado em metodologia própria desenvolvida ao longo de décadas.",
  },
];

export default function Treatments() {
  return (
    <section id="benefits" className="py-16 md:py-24" style={{ backgroundColor: "#F5F3F3" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div style={{ width: "2rem", height: "1px", backgroundColor: ACCENT, flexShrink: 0 }} />
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: ACCENT, fontFamily: "Montserrat, sans-serif" }}
            >
              Por que fazer fisioterapia pélvica?
            </span>
            <div style={{ width: "2rem", height: "1px", backgroundColor: ACCENT, flexShrink: 0 }} />
          </div>

          <h2
            className="mb-3 leading-tight"
            style={{
              fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
              fontFamily: "Lora, Georgia, serif",
              color: PRIMARY,
            }}
          >
            Muito além do tratamento dos sintomas.
          </h2>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -12 : 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              className="flex items-start gap-4 bg-white rounded-xl p-5 border"
              style={{ borderColor: "rgba(28,28,28,0.08)" }}
            >
              {/* Pink dot checkmark */}
              <div
                className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "rgba(201,29,110,0.10)" }}
              >
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: ACCENT }}
                />
              </div>

              <div>
                <h3
                  className="text-sm font-bold mb-1"
                  style={{ color: PRIMARY, fontFamily: "Lora, Georgia, serif" }}
                >
                  {benefit.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#5A5A5A", fontFamily: "Montserrat, sans-serif" }}
                >
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
