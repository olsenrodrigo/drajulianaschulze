import { motion } from "framer-motion";

const ACCENT = "#C91D6E";

const statsData = [
  { value: "20+", label: "Anos dedicados à saúde da mulher" },
  { value: "Centenas", label: "de pacientes atendidas" },
  { value: "Centenas", label: "de profissionais capacitados" },
  { value: "2012", label: "Professora universitária desde" },
  { value: "Nacional", label: "Referência em fisioterapia pélvica" },
  { value: "PUC-SP", label: "Instituição de ensino" },
];

export default function Stats() {
  return (
    <section id="stats" style={{ backgroundColor: "#1C1C1C" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-0"
        >
          {statsData.map((stat, index) => (
            <div key={index} className="flex items-center">
              {/* Stat item */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                className="flex flex-col items-center text-center px-8 py-4"
                style={{ minWidth: "140px" }}
              >
                <span
                  className="text-3xl md:text-4xl font-bold leading-tight mb-1.5"
                  style={{
                    fontFamily: "Lora, Georgia, serif",
                    color: "#FFFFFF",
                  }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-xs leading-snug max-w-[120px]"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    color: "rgba(255,255,255,0.55)",
                  }}
                >
                  {stat.label}
                </span>
              </motion.div>

              {/* Divider (not after last) */}
              {index < statsData.length - 1 && (
                <div
                  className="hidden sm:block flex-shrink-0 w-px h-10 self-center"
                  style={{ backgroundColor: ACCENT, opacity: 0.35 }}
                />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
