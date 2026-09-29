import { motion } from "framer-motion";
import { ACCENT } from "@/lib/site";

const outlets = ["Revista Veja", "Revista Aptare", "TV PUC", "SBGG", "Women's Health"];

export default function Media() {
  return (
    <section aria-label="Destaques na mídia" className="py-10 md:py-12" style={{ backgroundColor: "#1C1C1C" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-5 md:gap-10"
        >
          <span
            className="text-[0.7rem] font-semibold uppercase tracking-widest flex-shrink-0"
            style={{ color: ACCENT }}
          >
            Como visto em
          </span>
          <ul className="flex flex-wrap justify-center md:justify-between flex-1 gap-x-8 gap-y-3">
            {outlets.map((o) => (
              <li
                key={o}
                className="font-heading font-semibold text-lg md:text-xl"
                style={{ color: "rgba(255,255,255,0.75)", letterSpacing: "0.01em" }}
              >
                {o}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
