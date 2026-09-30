import { motion } from "framer-motion";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import SectionHeader from "./SectionHeader";
import { PRIMARY } from "@/lib/site";

export const faqs = [
  {
    q: "Quais são os valores da avaliação e das sessões?",
    a: "Os valores são informados no contato. Fale com a gente pelo WhatsApp ou pelo formulário de agendamento para tirar suas dúvidas e marcar sua avaliação inicial, que tem duração de 1h30.",
  },
  {
    q: "Quantas sessões eu vou precisar?",
    a: "Varia de pessoa para pessoa. A previsão de alta é definida já na avaliação inicial.",
  },
  { q: "Atendem homens?", a: "Sim, principalmente para reabilitação após prostatectomia e disfunções urinárias." },
  { q: "Atendem convênio?", a: "O atendimento é particular." },
  {
    q: "O que é a ginástica pélvica?",
    a: "É um método próprio criado por Juliana, com encontros em grupo às sextas-feiras.",
  },
  {
    q: "A fisioterapia pélvica ajuda na vida sexual?",
    a: "Sim. Além de dor na relação e vaginismo, a fisioterapia pélvica também atua em alterações de libido e na dificuldade para chegar ao orgasmo, com escuta, privacidade e sem julgamento.",
  },
  {
    q: "Vocês tratam problemas intestinais?",
    a: "Sim. Constipação, dificuldade para evacuar e perda involuntária de gases ou fezes estão entre os casos que mais atendemos, com avaliação individual e exercícios específicos para o assoalho pélvico.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-16 md:py-24" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <SectionHeader eyebrow="Perguntas frequentes" title="Tire suas dúvidas." />
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Accordion type="single" collapsible className="border-t" style={{ borderColor: "rgba(28,28,28,0.1)" }}>
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} style={{ borderColor: "rgba(28,28,28,0.1)" }}>
                <AccordionTrigger
                  className="py-5 text-[0.95rem] md:text-base font-bold hover:no-underline cursor-pointer"
                  style={{ color: PRIMARY }}
                >
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pl-4 pr-6 text-[0.9rem] md:text-[0.95rem] leading-relaxed text-[#5A5A5A]">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
