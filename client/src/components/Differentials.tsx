import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Sparkles, Clock } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { ACCENT, PRIMARY } from "@/lib/site";

const differentials = [
  { icon: GraduationCap, text: "Fisioterapeuta pela USP, mestre pela Unifesp e doutora pela PUC-SP" },
  { icon: BookOpen, text: "Autora de dois livros publicados sobre o método de trabalho" },
  { icon: Sparkles, text: "Método próprio de trabalho com o assoalho pélvico" },
  { icon: Clock, text: "Avaliação inicial de 1h30, com previsão de alta definida já no início" },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-16 md:py-24" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Diferenciais" title="Por que escolher a JS Fisioterapia." />

        <div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden"
          style={{ border: "1px solid rgba(28,28,28,0.08)", backgroundColor: "rgba(28,28,28,0.08)" }}
        >
          {differentials.map((d, i) => {
            const Icon = d.icon;
            return (
              <motion.div
                key={d.text}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="bg-white p-7 md:p-8 text-center flex flex-col items-center"
              >
                <Icon size={30} strokeWidth={1.4} style={{ color: ACCENT }} />
                <div className="w-8 h-px my-5" style={{ backgroundColor: ACCENT, opacity: 0.5 }} />
                <p className="text-[0.95rem] font-medium" style={{ color: PRIMARY, lineHeight: 1.6 }}>
                  {d.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
