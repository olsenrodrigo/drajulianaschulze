import { motion } from "framer-motion";
import { BookOpen, Tv } from "lucide-react";
import retrato from "../assets/drajuliana2.jpeg";
import { ACCENT, PRIMARY } from "@/lib/site";

const seals = [
  { name: "USP", detail: "Fisioterapia" },
  { name: "Unifesp", detail: "Mestrado" },
  { name: "PUC-SP", detail: "Doutorado e docência" },
];

const books = [
  { title: "Ginástica Feminina", subtitle: "do assoalho pélvico à postura ideal", year: "2017" },
  { title: "Exercícios no Trabalho", subtitle: "", year: "2005" },
];

export default function About() {
  return (
    <section id="sobre" className="py-16 md:py-24" style={{ backgroundColor: "#F9F7F7" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[380px_1fr] xl:grid-cols-[420px_1fr] gap-10 lg:gap-16 items-start">
          {/* Retrato */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative max-w-sm mx-auto lg:max-w-none w-full lg:sticky lg:top-28"
          >
            <div className="rounded-2xl overflow-hidden" style={{ boxShadow: "0 14px 40px rgba(28,28,28,0.14)" }}>
              <img
                src={retrato}
                alt="Juliana Schulze Burti, fisioterapeuta pélvica"
                className="w-full object-cover"
                style={{ aspectRatio: "4 / 5", objectPosition: "top center" }}
                loading="lazy"
              />
            </div>
            <div className="mt-5 grid grid-cols-3 gap-2">
              {seals.map((s) => (
                <div
                  key={s.name}
                  className="bg-white rounded-lg px-2 py-3 text-center"
                  style={{ border: "1px solid rgba(28,28,28,0.08)" }}
                >
                  <p className="font-heading font-bold text-base" style={{ color: PRIMARY }}>{s.name}</p>
                  <p className="text-[0.65rem] leading-tight mt-0.5" style={{ color: "#7A7A7A" }}>{s.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div style={{ width: "2.5rem", height: "1px", backgroundColor: ACCENT, flexShrink: 0 }} />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: ACCENT }}>
                Sobre Juliana Schulze Burti
              </span>
            </div>
            <h2 className="leading-tight text-balance mb-7" style={{ fontSize: "clamp(1.75rem, 3vw, 2.6rem)", color: PRIMARY }}>
              Ciência e acolhimento para o assoalho pélvico.
            </h2>

            <div className="space-y-5 text-[0.95rem] md:text-base" style={{ lineHeight: 1.8 }}>
              <p style={{ color: "#4A4A4A" }}>
                Sou graduada em <strong style={{ color: PRIMARY }}>Fisioterapia pela USP</strong> e em Educação Física pelas
                Faculdades Metropolitanas Unidas. Fiz{" "}
                <strong style={{ color: PRIMARY }}>mestrado em Ciências da Saúde</strong> pelo Departamento de Disfunções
                Miccionais Femininas (Urologia) da Unifesp, e <strong style={{ color: PRIMARY }}>doutorado em Psicologia Social
                pela PUC-SP</strong>. Sou professora do curso de Fisioterapia da PUC-SP e já formei fisioterapeutas no Brasil e
                no Canadá. Tenho também <strong style={{ color: PRIMARY }}>pós-graduação em Fisiologia do Exercício pela
                Unifesp</strong>.
              </p>
              <p style={{ color: "#4A4A4A" }}>
                Sou autora de dois livros, e apresentei o <strong style={{ color: PRIMARY }}>Fisiochat</strong>, na TV PUC, o
                primeiro programa de fisioterapia da TV brasileira.
              </p>
              <p style={{ color: "#4A4A4A" }}>
                Criei um método próprio de trabalho com o assoalho pélvico, hoje chamado de{" "}
                <strong style={{ color: PRIMARY }}>ginástica pélvica</strong>, e acredito que falar de temas íntimos não precisa
                ser constrangedor.
              </p>
            </div>

            <blockquote
              className="mt-8 pl-5 font-heading italic text-lg md:text-xl"
              style={{ borderLeft: `2px solid ${ACCENT}`, color: PRIMARY, lineHeight: 1.5 }}
            >
              “Pode (e deve) ser feito com naturalidade, respeito e elegância.”
            </blockquote>

            {/* Livros e TV */}
            <div className="mt-10 grid sm:grid-cols-3 gap-3">
              {books.map((b) => (
                <div
                  key={b.title}
                  className="bg-white rounded-xl p-5 flex flex-col"
                  style={{ border: "1px solid rgba(28,28,28,0.08)" }}
                >
                  <BookOpen size={20} style={{ color: ACCENT }} />
                  <p className="mt-3 font-heading font-bold leading-snug" style={{ color: PRIMARY }}>
                    {b.title}
                  </p>
                  {b.subtitle && <p className="text-xs mt-1" style={{ color: "#6A6A6A" }}>{b.subtitle}</p>}
                  <p className="text-xs mt-auto pt-3 font-semibold" style={{ color: ACCENT }}>Livro · {b.year}</p>
                </div>
              ))}
              <div
                className="bg-white rounded-xl p-5 flex flex-col"
                style={{ border: "1px solid rgba(28,28,28,0.08)" }}
              >
                <Tv size={20} style={{ color: ACCENT }} />
                <p className="mt-3 font-heading font-bold leading-snug" style={{ color: PRIMARY }}>Fisiochat</p>
                <p className="text-xs mt-1" style={{ color: "#6A6A6A" }}>primeiro programa de fisioterapia da TV brasileira</p>
                <p className="text-xs mt-auto pt-3 font-semibold" style={{ color: ACCENT }}>TV PUC</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
