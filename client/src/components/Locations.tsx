import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle, Mail, Clock, Car, Accessibility } from "lucide-react";

const ACCENT = "#C91D6E";
const PRIMARY = "#1C1C1C";

export default function Locations() {
  return (
    <section id="clinic" className="py-14 md:py-18" style={{ backgroundColor: "#F9F7F7" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div style={{ width: "2rem", height: "1px", backgroundColor: ACCENT, flexShrink: 0 }} />
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: ACCENT, fontFamily: "Montserrat, sans-serif" }}
            >
              Nossa Clínica
            </span>
          </div>
          <h2
            className="mb-1 leading-tight"
            style={{
              fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)",
              fontFamily: "Lora, Georgia, serif",
              color: PRIMARY,
            }}
          >
            Um espaço preparado para cuidar de você.
          </h2>
          <p className="text-sm" style={{ color: "#5A5A5A", fontFamily: "Montserrat, sans-serif" }}>
            Conforto, privacidade e acolhimento em cada atendimento.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">

          {/* Left: compact info */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Contact items inline */}
            <div className="space-y-2.5 mb-6">
              {[
                { icon: MapPin, label: "Endereço", value: "(A preencher)" },
                { icon: Phone, label: "Telefone / WhatsApp", value: "(A preencher)" },
                { icon: Mail, label: "E-mail", value: "(A preencher)" },
                { icon: Clock, label: "Horário", value: "(A preencher)" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border"
                  style={{ borderColor: "rgba(28,28,28,0.07)" }}
                >
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: "rgba(201,29,110,0.08)" }}
                  >
                    <item.icon className="w-4 h-4" style={{ color: ACCENT }} />
                  </div>
                  <div className="min-w-0">
                    <span
                      className="text-[11px] font-semibold uppercase tracking-wide block"
                      style={{ color: "#9A9A9A", fontFamily: "Montserrat, sans-serif" }}
                    >
                      {item.label}
                    </span>
                    <span
                      className="text-sm font-medium"
                      style={{ color: PRIMARY, fontFamily: "Montserrat, sans-serif" }}
                    >
                      {item.value}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                { icon: Car, text: "Estacionamento disponível" },
                { icon: Accessibility, text: "Acessibilidade" },
              ].map((f, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium"
                  style={{
                    borderColor: "rgba(201,29,110,0.25)",
                    backgroundColor: "rgba(201,29,110,0.04)",
                    color: PRIMARY,
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  <f.icon className="w-3.5 h-3.5" style={{ color: ACCENT }} />
                  {f.text}
                </div>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.025 }}
              whileTap={{ scale: 0.975 }}
              className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-md font-medium text-sm cursor-pointer hover:shadow-md transition-all"
              style={{ backgroundColor: ACCENT, fontFamily: "Montserrat, sans-serif" }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <MessageCircle size={15} />
              Agendar pelo WhatsApp
            </motion.a>
          </motion.div>

          {/* Right: Google Maps */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative"
          >
            <div
              className="relative overflow-hidden rounded-2xl border"
              style={{
                boxShadow: "0 8px 32px rgba(28,28,28,0.10)",
                borderColor: "rgba(28,28,28,0.08)",
                height: "380px",
              }}
            >
              {/* Pink accent top bar */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px] z-10"
                style={{ backgroundColor: ACCENT }}
              />
              <iframe
                title="Localização da Clínica Dra. Juliana Schulze Burti"
                src="https://maps.google.com/maps?q=Av.+Paulista,+S%C3%A3o+Paulo,+SP,+Brasil&output=embed&z=15&hl=pt-BR"
                width="100%"
                height="100%"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Map caption */}
            <p
              className="text-[11px] text-center mt-2"
              style={{ color: "#9A9A9A", fontFamily: "Montserrat, sans-serif" }}
            >
              Localização a confirmar — endereço completo será atualizado em breve.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
