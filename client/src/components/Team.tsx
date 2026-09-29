import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, GraduationCap } from "lucide-react";
import mariana from "../assets/v2/mariana-martinez.webp";
import tatiana from "../assets/v2/tatiana-braga.webp";
import emilia from "../assets/v2/emilia-brollo-guedes.webp";
import fernanda from "../assets/v2/fernanda-paiva.webp";
import SectionHeader from "./SectionHeader";
import { ACCENT, PRIMARY } from "@/lib/site";

const team = [
  {
    name: "Mariana Martinez",
    crefito: "CREFITO-3/393695-F",
    photo: mariana,
    pos: "center 20%",
    background: [
      "Formada em Fisioterapia pela Universidade de Brasília (UnB)",
      "Especializada em Fisioterapia na Saúde Pélvica e Obstétrica pelo Hospital das Clínicas da USP (HCFMUSP)",
      "Trainee do curso de Saúde Pélvica e Obstétrica do HCFMUSP nos ambulatórios de Uroginecologia/Uropediatria, na Enfermaria Obstetrícia de Pós-Parto e Centro Obstétrico",
      "Supervisora do Ambulatório de Fisioterapia em Uroginecologia e Uropediatria do HCFMUSP",
    ],
  },
  {
    name: "Tatiana Braga",
    crefito: "CREFITO-3/413606-F",
    photo: tatiana,
    pos: "center 15%",
    background: [
      "Graduação em Fisioterapia pela PUC-SP",
      "Pós-graduação em Saúde Pélvica e Obstetrícia pelo Hospital das Clínicas - FMUSP",
      "Supervisora cobertura das enfermarias de ginecologia, gestação de alto risco e alojamento conjunto do Hospital das Clínicas - FMUSP",
      "Fisioterapeuta obstétrica no Hospital Maternidade Sepaco",
      "Fisioterapeuta obstétrica credenciada nas maternidades São Luís Star e Grupo Santa Joana",
      "Atuação nas disfunções miccionais e coloproctológicas, disfunções sexuais femininas, ciclo gravídico-puerperal e menopausa",
    ],
  },
  {
    name: "Emilia Brollo Guedes",
    crefito: "CREFITO-3/360764-F",
    photo: emilia,
    pos: "center 25%",
    background: [
      "Graduação em Fisioterapia pela PUC-SP",
      "Pós-graduação em Saúde Pélvica e Obstétrica pelo Hospital das Clínicas - FMUSP",
      "Pós-graduação em Fisioterapia Cardiorrespiratória pelo InCor-USP",
      "Aperfeiçoamento em Avaliação, técnicas respiratórias e reabilitação pulmonar",
      "Aperfeiçoamento em Técnicas de fisioterapia respiratória e recursos instrumentais em pacientes adultos, pediátricos e neurológicos",
      "Atua no Centro de Reabilitação Cardiopulmonar e Metabólica do Hospital do Coração (HCor)",
    ],
  },
  {
    name: "Fernanda Paiva de Lima Silva",
    crefito: "CREFITO-3/395388-F",
    photo: fernanda,
    pos: "center 20%",
    background: [
      "Graduada em Fisioterapia pela PUC-SP (Pontifícia Universidade Católica de São Paulo)",
      "Especializada em Fisioterapia Pélvica e Obstétrica pelo Hospital das Clínicas da Faculdade de Medicina da USP",
      "Especializada em drenagem linfática para gestantes pela Drenogestar",
      "Atua na avaliação, prevenção, tratamento e reabilitação das disfunções pélvicas, como incontinência urinária e fecal, constipação, prolapsos, dor pélvica crônica e disfunções sexuais femininas",
      "Acompanhamento especializado de gestantes durante a gestação, o parto e o puerpério, promovendo a saúde e o bem-estar da mulher",
      "Consultoria em aleitamento materno e laserterapia",
    ],
  },
];

function TeamCard({ member, index }: { member: (typeof team)[number]; index: number }) {
  const [open, setOpen] = useState(false);
  const listId = `formacao-${index}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="bg-white rounded-2xl overflow-hidden flex flex-col"
      style={{ border: "1px solid rgba(28,28,28,0.08)", boxShadow: "0 4px 20px rgba(28,28,28,0.05)" }}
    >
      <div className="relative">
        <img
          src={member.photo}
          alt={`${member.name}, fisioterapeuta pélvica e obstétrica`}
          className="w-full object-cover"
          style={{ aspectRatio: "4 / 5", objectPosition: member.pos }}
          loading="lazy"
        />
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: "3px", backgroundColor: ACCENT }} />
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-heading font-bold text-lg leading-snug" style={{ color: PRIMARY }}>
          {member.name}
        </h3>
        <p className="text-sm mt-1" style={{ color: "#5A5A5A" }}>Fisioterapeuta pélvica e obstétrica</p>
        <p className="text-xs font-semibold mt-1 tracking-wide" style={{ color: ACCENT }}>{member.crefito}</p>

        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls={listId}
          className="lg:hidden mt-4 flex items-center justify-between w-full py-2.5 text-sm font-semibold cursor-pointer border-t"
          style={{ color: PRIMARY, borderColor: "rgba(28,28,28,0.08)" }}
        >
          <span className="flex items-center gap-2">
            <GraduationCap size={16} style={{ color: ACCENT }} />
            {open ? "Ocultar formação" : "Ver formação"}
          </span>
          <ChevronDown size={16} className="transition-transform" style={{ transform: open ? "rotate(180deg)" : "none" }} />
        </button>

        <ul
          id={listId}
          className={`${open ? "block" : "hidden"} lg:block mt-2 lg:mt-4 lg:pt-4 lg:border-t space-y-2`}
          style={{ borderColor: "rgba(28,28,28,0.08)" }}
        >
          {member.background.map((item) => (
            <li key={item} className="flex gap-2 text-[0.8rem] leading-relaxed" style={{ color: "#4A4A4A" }}>
              <span className="mt-[0.55rem] w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: ACCENT }} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

export default function Team() {
  return (
    <section id="equipe" className="py-16 md:py-24" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Equipe"
          title="Uma equipe especializada em saúde pélvica e obstétrica."
          subtitle="Todas as fisioterapeutas da equipe têm formação em Saúde Pélvica e Obstétrica pelo Hospital das Clínicas da FMUSP."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 items-start">
          {team.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
