import { motion } from "framer-motion";
import { Baby, Flower2, HeartHandshake, Droplets, ShieldCheck, Activity, Users } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { ACCENT, PRIMARY } from "@/lib/site";

const areas = [
  {
    icon: Baby,
    title: "Gestação e Pós-Parto",
    description: "Preparação corporal para o parto e reabilitação do abdômen e do assoalho pélvico após o nascimento do bebê.",
  },
  {
    icon: Flower2,
    title: "Menopausa e Climatério",
    description:
      "Cuidado com a saúde urinária, intestinal e sexual nessa fase: ressecamento, desconforto, perdas urinárias, constipação e mudanças na função sexual.",
    badge: "Agenda concorrida",
  },
  {
    icon: HeartHandshake,
    title: "Disfunções Sexuais",
    description:
      "Dor na relação, vaginismo, alterações de libido e dificuldade para chegar ao orgasmo. Acompanhamento individualizado, com escuta e sem julgamento.",
  },
  {
    icon: Droplets,
    title: "Incontinência Urinária e Bexiga Hiperativa",
    description: "Tratamento de incontinência, urgência miccional e dificuldade para urinar, em mulheres, homens e crianças.",
  },
  {
    icon: ShieldCheck,
    title: "Reabilitação Pós-Prostatectomia (Homens)",
    description: "Tratamento de incontinência urinária e disfunção erétil após a cirurgia de próstata.",
  },
  {
    icon: Activity,
    title: "Constipação e Disfunção Evacuatória",
    description: "Avaliação e tratamento de dificuldades evacuatórias, cada vez mais frequentes.",
    badge: "Agenda concorrida",
  },
  {
    icon: Users,
    title: "Ginástica Pélvica",
    description: "Grupo semanal, às sextas-feiras, com o método próprio criado por Juliana.",
  },
];

export default function Areas() {
  return (
    <section id="atuacao" className="py-16 md:py-24" style={{ backgroundColor: "#F9F7F7" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Áreas de atuação" title="Cuidado especializado para cada fase da vida." />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {areas.map((area, i) => {
            const Icon = area.icon;
            return (
              <motion.article
                key={area.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
                className={`relative bg-white rounded-2xl p-6 md:p-7 transition-shadow hover:shadow-lg ${
                  i === areas.length - 1 ? "lg:col-start-2" : ""
                }`}
                style={{ border: "1px solid rgba(28,28,28,0.07)" }}
              >
                {area.badge && (
                  <span
                    className="absolute top-5 right-5 text-[0.65rem] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full"
                    style={{ color: ACCENT, backgroundColor: "rgba(201,29,110,0.08)" }}
                  >
                    {area.badge}
                  </span>
                )}
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center mb-5"
                  style={{ backgroundColor: "rgba(201,29,110,0.08)" }}
                >
                  <Icon size={20} strokeWidth={1.6} style={{ color: ACCENT }} />
                </div>
                <h3 className="font-heading font-bold text-lg leading-snug mb-2.5 pr-2" style={{ color: PRIMARY }}>
                  {area.title}
                </h3>
                <p className="text-sm" style={{ color: "#5A5A5A", lineHeight: 1.7 }}>
                  {area.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
