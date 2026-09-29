import SectionHeader from "./SectionHeader";
import { ACCENT, PRIMARY } from "@/lib/site";

// Seção reservada: adicionar aqui apenas depoimentos autorizados.
// Enquanto a lista estiver vazia, a seção não é exibida.
const testimonials: { text: string; author: string }[] = [];

export default function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section id="depoimentos" className="py-16 md:py-24" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Depoimentos" title="O que dizem os pacientes" />
        <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4">
          {testimonials.map((t) => (
            <figure
              key={t.author}
              className="snap-start flex-shrink-0 w-[85%] sm:w-[45%] lg:w-[32%] bg-white rounded-2xl p-7"
              style={{ border: "1px solid rgba(28,28,28,0.08)" }}
            >
              <blockquote className="font-heading italic text-lg" style={{ color: PRIMARY }}>“{t.text}”</blockquote>
              <figcaption className="mt-4 text-sm font-semibold" style={{ color: ACCENT }}>{t.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
