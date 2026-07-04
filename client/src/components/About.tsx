import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import drajuliana1     from "../assets/drajuliana1.jpeg";
import drajuliana2     from "../assets/drajuliana2.jpeg";
import drajulianaatend from "../assets/drajulianaatendimento.jpeg";

const ACCENT  = "#C91D6E";
const PRIMARY = "#1C1C1C";

const photos = [
  { src: drajuliana1,     alt: "Dra. Juliana Schulze Burti", pos: "top center" },
  { src: drajuliana2,     alt: "Dra. Juliana Schulze Burti", pos: "top center" },
  { src: drajulianaatend, alt: "Dra. Juliana — Atendimento", pos: "top center" },
];

const stats = [
  { value: "20+",      label: "Anos dedicados à saúde da mulher" },
  { value: "Centenas", label: "de pacientes atendidas" },
  { value: "Centenas", label: "de profissionais capacitados" },
  { value: "2012",     label: "Professora universitária desde" },
  { value: "Nacional", label: "Referência em fisioterapia pélvica" },
  { value: "PUC-SP",   label: "Instituição de ensino" },
];

interface AboutProps {
  scrollToSection?: (section: string) => void;
}

export default function About({ scrollToSection }: AboutProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const dot  = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  const startAuto = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(() => emblaApi?.scrollNext(), 4500);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", () => setSelectedIndex(emblaApi.selectedScrollSnap()));
    startAuto();
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  }, [emblaApi, startAuto]);

  const goTo = (id: string) => {
    if (scrollToSection) scrollToSection(id);
    else document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    /*
     * Seção ocupa exatamente 100vh.
     * Flex coluna: área de conteúdo (flex-1) + strip de stats (fixo na base).
     * Padding-top = altura da navbar (5rem) para o conteúdo começar abaixo dela.
     */
    <section
      id="about"
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        paddingTop: "5rem",
        backgroundColor: "#FFFFFF",
        overflow: "hidden",
      }}
    >

      {/* ── ÁREA PRINCIPAL — cresce para preencher o espaço disponível ── */}
      <div style={{ flex: 1, overflow: "hidden", minHeight: 0 }}>
        <div
          className="container mx-auto px-4 sm:px-6 lg:px-8 h-full"
          style={{ paddingTop: "1.75rem", paddingBottom: "1rem" }}
        >
          {/* Grid: texto | carrossel */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 320px",
              gap: "3.5rem",
              height: "100%",
              alignItems: "stretch",
            }}
          >

            {/* ── Coluna esquerda: texto ── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", paddingTop: "0.5rem", paddingBottom: "0.5rem" }}
            >
              {/* Bloco superior: eyebrow + headline + divisor */}
              <div>
                {/* Eyebrow */}
                <div className="flex items-center gap-3" style={{ marginBottom: "1.4rem" }}>
                  <div style={{ width: "2.5rem", height: "1px", backgroundColor: ACCENT, flexShrink: 0 }} />
                  <span style={{
                    fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase",
                    letterSpacing: "0.12em", color: ACCENT, fontFamily: "Montserrat, sans-serif",
                  }}>
                    Fisioterapia Pélvica Especializada
                  </span>
                </div>

                {/* Headline principal */}
                <h1 style={{
                  fontSize: "clamp(2rem, 3.2vw, 3.2rem)",
                  fontFamily: "Lora, Georgia, serif",
                  fontWeight: 700,
                  color: PRIMARY,
                  lineHeight: 1.2,
                  marginBottom: "1.5rem",
                }}>
                  Referência em Fisioterapia Pélvica,
                  <br />
                  <em style={{ color: ACCENT, fontStyle: "italic" }}>Saúde da Mulher</em>
                  <br />
                  e Envelhecimento Feminino.
                </h1>

                {/* Divisor */}
                <div style={{ width: "3.5rem", height: "2px", backgroundColor: ACCENT, opacity: 0.5 }} />
              </div>

              {/* Bloco do meio: subtítulo + tagline + bio */}
              <div>
                {/* Subtítulo */}
                <h2 style={{
                  fontSize: "clamp(1.4rem, 2.2vw, 2rem)",
                  fontFamily: "Lora, Georgia, serif",
                  fontWeight: 600,
                  color: PRIMARY,
                  lineHeight: 1.3,
                  marginBottom: "0.5rem",
                }}>
                  Conheça a Dra. Juliana Schulze Burti
                </h2>

                <p style={{
                  fontSize: "0.85rem", fontWeight: 600, color: ACCENT,
                  fontFamily: "Montserrat, sans-serif", marginBottom: "1.2rem",
                  letterSpacing: "0.02em",
                }}>
                  Ciência, movimento e cuidado humano integrados
                </p>

                {/* Bio */}
                <p style={{
                  fontSize: "0.95rem", lineHeight: 1.75, color: "#4A4A4A",
                  fontFamily: "Montserrat, sans-serif",
                  maxWidth: "38rem",
                }}>
                  Graduada em <strong style={{ color: PRIMARY }}>Educação Física</strong> e{" "}
                  <strong style={{ color: PRIMARY }}>Fisioterapia</strong>, com{" "}
                  <strong style={{ color: PRIMARY }}>Mestrado em Urologia</strong> e{" "}
                  <strong style={{ color: PRIMARY }}>Doutorado em Psicologia</strong>.
                  Professora da <strong style={{ color: PRIMARY }}>PUC-SP</strong>, pesquisadora e criadora do{" "}
                  <strong style={{ color: PRIMARY }}>Método Juliana Schulze Burti</strong> — uma abordagem integrativa
                  que une ciência, movimento e escuta ativa no cuidado da saúde feminina.
                </p>
              </div>

              {/* Bloco inferior: CTA */}
              <div>
                <motion.button
                  whileHover={{ scale: 1.025 }}
                  whileTap={{ scale: 0.975 }}
                  onClick={() => goTo("contact")}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "0.6rem",
                    padding: "0.85rem 2rem", backgroundColor: ACCENT,
                    color: "#fff", fontSize: "0.9rem", fontWeight: 600,
                    fontFamily: "Montserrat, sans-serif", borderRadius: "0.375rem",
                    border: "none", cursor: "pointer",
                  }}
                >
                  <Calendar size={16} />
                  Agendar uma Avaliação
                </motion.button>
              </div>
            </motion.div>

            {/* ── Coluna direita: carrossel ── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}
            >
              {/* Container do carrossel — ocupa toda a altura disponível */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  flex: 1,
                  minHeight: 0,
                  borderRadius: "1rem",
                  overflow: "hidden",
                  boxShadow: "0 12px 40px rgba(28,28,28,0.14)",
                }}
                onMouseEnter={() => { if (autoRef.current) clearInterval(autoRef.current); }}
                onMouseLeave={startAuto}
              >
                {/* Barra pink */}
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0,
                  height: "3px", backgroundColor: ACCENT, zIndex: 10,
                }} />

                {/* Embla */}
                <div ref={emblaRef} style={{ overflow: "hidden", height: "100%" }}>
                  <div style={{ display: "flex", height: "100%" }}>
                    {photos.map((p, idx) => (
                      <div key={idx} style={{ flex: "none", width: "100%", height: "100%" }}>
                        <img
                          src={p.src} alt={p.alt}
                          style={{
                            width: "100%", height: "100%",
                            objectFit: "cover", objectPosition: p.pos,
                            display: "block",
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Setas */}
                <div style={{
                  position: "absolute", left: 0, right: 0,
                  top: "50%", transform: "translateY(-50%)",
                  display: "flex", justifyContent: "space-between",
                  padding: "0 0.6rem", pointerEvents: "none", zIndex: 10,
                }}>
                  {([{ fn: prev, Icon: ChevronLeft, label: "Anterior" },
                     { fn: next, Icon: ChevronRight, label: "Próxima" }] as const
                  ).map(({ fn, Icon, label }) => (
                    <button key={label} onClick={fn} aria-label={label} style={{
                      pointerEvents: "auto", width: "2rem", height: "2rem",
                      borderRadius: "50%", border: "none", cursor: "pointer",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      backgroundColor: "rgba(255,255,255,0.90)", color: PRIMARY,
                      boxShadow: "0 2px 8px rgba(28,28,28,0.18)",
                    }}>
                      <Icon size={15} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Dots */}
              <div style={{ display: "flex", gap: "0.4rem", marginTop: "0.6rem" }}>
                {photos.map((_, idx) => (
                  <button key={idx} onClick={() => dot(idx)} aria-label={`Foto ${idx + 1}`} style={{
                    width: selectedIndex === idx ? "1.4rem" : "0.4rem",
                    height: "0.4rem", borderRadius: "999px", border: "none",
                    cursor: "pointer", transition: "all 0.25s",
                    backgroundColor: selectedIndex === idx ? ACCENT : "rgba(28,28,28,0.18)",
                  }} />
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* ── STRIP DE STATS — fixo na base, dentro do 100vh ── */}
      <div style={{ backgroundColor: "#1C1C1C", flexShrink: 0 }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              display: "flex", flexWrap: "wrap",
              justifyContent: "center", alignItems: "center",
            }}
          >
            {stats.map((s, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center" }}>
                <div style={{
                  display: "flex", flexDirection: "column", alignItems: "center",
                  textAlign: "center", padding: "0.85rem 1.5rem", minWidth: "120px",
                }}>
                  <span style={{
                    fontSize: "clamp(1.4rem, 2vw, 1.9rem)",
                    fontFamily: "Lora, Georgia, serif",
                    fontWeight: 700, color: "#FFFFFF", lineHeight: 1.2, marginBottom: "0.2rem",
                  }}>
                    {s.value}
                  </span>
                  <span style={{
                    fontSize: "0.68rem", color: "rgba(255,255,255,0.5)",
                    fontFamily: "Montserrat, sans-serif", maxWidth: "110px", lineHeight: 1.3,
                  }}>
                    {s.label}
                  </span>
                </div>
                {i < stats.length - 1 && (
                  <div style={{
                    width: "1px", height: "2rem", flexShrink: 0,
                    backgroundColor: ACCENT, opacity: 0.35,
                  }} />
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
}
