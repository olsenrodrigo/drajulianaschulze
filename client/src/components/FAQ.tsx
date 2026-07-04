import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const ACCENT = "#C91D6E";
const PRIMARY = "#1C1C1C";

const faqItems = [
  {
    question: "O que é fisioterapia pélvica?",
    answer:
      "É uma especialidade que avalia e trata alterações relacionadas ao assoalho pélvico, promovendo saúde, prevenção e qualidade de vida.",
  },
  {
    question: "Quem pode fazer fisioterapia pélvica?",
    answer:
      "Mulheres, homens, gestantes, puérperas e pessoas com diferentes disfunções pélvicas.",
  },
  {
    question: "A avaliação dói?",
    answer:
      "Não. A avaliação é realizada de forma individualizada, respeitando o conforto e os limites de cada paciente.",
  },
  {
    question: "Quantas sessões são necessárias?",
    answer:
      "Cada tratamento é personalizado. Após a avaliação é possível estimar o número de sessões de acordo com cada caso.",
  },
  {
    question: "Gestantes podem fazer fisioterapia pélvica?",
    answer:
      "Sim. O acompanhamento durante a gestação ajuda na preparação para o parto e na prevenção de diversas disfunções.",
  },
  {
    question: "A fisioterapia pélvica trata perda urinária?",
    answer:
      "Sim. A perda urinária é uma das principais indicações da fisioterapia pélvica e possui excelentes resultados quando tratada adequadamente.",
  },
];

function FaqItem({ item, index }: { item: typeof faqItems[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      className="border-b last:border-b-0"
      style={{ borderColor: "rgba(28,28,28,0.09)" }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-5 text-left cursor-pointer group"
        aria-expanded={isOpen}
      >
        <span
          className="text-base font-semibold pr-4 leading-snug group-hover:text-[#C91D6E] transition-colors"
          style={{
            color: isOpen ? ACCENT : PRIMARY,
            fontFamily: "Lora, Georgia, serif",
          }}
        >
          {item.question}
        </span>
        <span
          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200"
          style={{
            backgroundColor: isOpen ? "rgba(201,29,110,0.10)" : "rgba(28,28,28,0.05)",
          }}
        >
          <ChevronDown
            size={16}
            style={{
              color: isOpen ? ACCENT : PRIMARY,
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.25s ease",
            }}
          />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p
              className="text-sm leading-relaxed pb-5"
              style={{ color: "#5A5A5A", fontFamily: "Montserrat, sans-serif" }}
            >
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-16 md:py-24" style={{ backgroundColor: "#F5F3F3" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-5">
            <div style={{ height: "1px", width: "2.5rem", backgroundColor: ACCENT, opacity: 0.6 }} />
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: ACCENT, fontFamily: "Montserrat, sans-serif" }}
            >
              FAQ
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
            Perguntas Frequentes
          </h2>
        </motion.div>

        {/* Accordion */}
        <div
          className="max-w-2xl mx-auto bg-white rounded-2xl px-6 md:px-10 border"
          style={{ borderColor: "rgba(28,28,28,0.08)", boxShadow: "0 4px 20px rgba(28,28,28,0.06)" }}
        >
          {faqItems.map((item, index) => (
            <FaqItem key={index} item={item} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <p
            className="text-sm mb-4"
            style={{ color: "#5A5A5A", fontFamily: "Montserrat, sans-serif" }}
          >
            Ainda tem dúvidas?
          </p>
          <motion.button
            whileHover={{ scale: 1.025 }}
            whileTap={{ scale: 0.975 }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-7 py-3 text-white rounded-md font-medium text-sm cursor-pointer transition-all hover:shadow-md"
            style={{ backgroundColor: ACCENT, fontFamily: "Montserrat, sans-serif" }}
          >
            Entre em Contato
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
