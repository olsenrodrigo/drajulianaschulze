import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Loader2, MessageCircle } from "lucide-react";

const ACCENT = "#C91D6E";
const PRIMARY = "#1C1C1C";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    whatsapp: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email || !formData.message) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Erro ao enviar");
      setStatus("success");
      setFormData({ name: "", phone: "", whatsapp: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.75rem 1rem",
    border: "1px solid rgba(28,28,28,0.12)",
    borderRadius: "0.5rem",
    fontSize: "0.875rem",
    fontFamily: "Montserrat, sans-serif",
    color: PRIMARY,
    backgroundColor: "#FAFAFA",
    outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <section id="contact" className="py-16 md:py-24" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-5">
            <div style={{ width: "2rem", height: "1px", backgroundColor: ACCENT, flexShrink: 0 }} />
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: ACCENT, fontFamily: "Montserrat, sans-serif" }}
            >
              Agende sua Avaliação
            </span>
          </div>
          <h2
            className="mb-3 leading-tight"
            style={{
              fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
              fontFamily: "Lora, Georgia, serif",
              color: PRIMARY,
            }}
          >
            Dê o primeiro passo para cuidar da sua saúde pélvica.
          </h2>
          <p
            className="text-base max-w-xl"
            style={{ color: "#5A5A5A", fontFamily: "Montserrat, sans-serif" }}
          >
            Preencha seus dados e nossa equipe entrará em contato para agendar seu atendimento.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl">

          {/* Left: CTA text + WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div
              className="rounded-2xl p-7 border"
              style={{
                backgroundColor: "#F9F7F7",
                borderColor: "rgba(28,28,28,0.08)",
              }}
            >
              <h3
                className="text-lg font-bold mb-3"
                style={{ color: PRIMARY, fontFamily: "Lora, Georgia, serif" }}
              >
                Prefere o WhatsApp?
              </h3>
              <p
                className="text-sm leading-relaxed mb-5"
                style={{ color: "#5A5A5A", fontFamily: "Montserrat, sans-serif" }}
              >
                Fale diretamente conosco pelo WhatsApp. Responderemos o mais rápido possível.
              </p>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3.5 text-white rounded-xl font-semibold text-sm transition-all hover:shadow-lg w-full"
                style={{
                  backgroundColor: "#25D366",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                <MessageCircle size={18} />
                Chamar no WhatsApp
              </a>
            </div>

            <div
              className="rounded-2xl p-6 border"
              style={{
                borderColor: "rgba(201,29,110,0.20)",
                backgroundColor: "rgba(201,29,110,0.03)",
              }}
            >
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#5A5A5A", fontFamily: "Montserrat, sans-serif" }}
              >
                Atendimento <strong style={{ color: PRIMARY }}>humanizado e individualizado</strong>.
                Cada avaliação é conduzida com atenção, respeito e sigilo.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div
              className="bg-white rounded-2xl p-8 md:p-10 border"
              style={{ borderColor: "rgba(28,28,28,0.08)", boxShadow: "0 4px 24px rgba(28,28,28,0.06)" }}
            >
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle2 className="w-14 h-14 mb-4" style={{ color: ACCENT }} />
                  <h4
                    className="text-xl font-bold mb-2"
                    style={{ color: PRIMARY, fontFamily: "Lora, Georgia, serif" }}
                  >
                    Mensagem Enviada!
                  </h4>
                  <p
                    className="mb-6 text-sm"
                    style={{ color: "#5A5A5A", fontFamily: "Montserrat, sans-serif" }}
                  >
                    Entraremos em contato em breve para agendar sua avaliação.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="px-6 py-2.5 rounded-md border font-medium text-sm transition-colors cursor-pointer"
                    style={{
                      borderColor: "rgba(28,28,28,0.18)",
                      color: PRIMARY,
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-xs font-semibold mb-1.5 uppercase tracking-wide"
                        style={{ color: PRIMARY, fontFamily: "Montserrat, sans-serif" }}
                      >
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        style={inputStyle}
                        placeholder="Seu nome"
                        onFocus={(e) => (e.target.style.borderColor = ACCENT)}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(28,28,28,0.12)")}
                      />
                    </div>
                    <div>
                      <label
                        className="block text-xs font-semibold mb-1.5 uppercase tracking-wide"
                        style={{ color: PRIMARY, fontFamily: "Montserrat, sans-serif" }}
                      >
                        Telefone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={inputStyle}
                        placeholder="(XX) XXXXX-XXXX"
                        onFocus={(e) => (e.target.style.borderColor = ACCENT)}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(28,28,28,0.12)")}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-xs font-semibold mb-1.5 uppercase tracking-wide"
                        style={{ color: PRIMARY, fontFamily: "Montserrat, sans-serif" }}
                      >
                        WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        style={inputStyle}
                        placeholder="(XX) XXXXX-XXXX"
                        onFocus={(e) => (e.target.style.borderColor = ACCENT)}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(28,28,28,0.12)")}
                      />
                    </div>
                    <div>
                      <label
                        className="block text-xs font-semibold mb-1.5 uppercase tracking-wide"
                        style={{ color: PRIMARY, fontFamily: "Montserrat, sans-serif" }}
                      >
                        E-mail *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={inputStyle}
                        placeholder="seu@email.com"
                        onFocus={(e) => (e.target.style.borderColor = ACCENT)}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(28,28,28,0.12)")}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className="block text-xs font-semibold mb-1.5 uppercase tracking-wide"
                      style={{ color: PRIMARY, fontFamily: "Montserrat, sans-serif" }}
                    >
                      Mensagem *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{ ...inputStyle, resize: "none" }}
                      placeholder="Como podemos ajudá-la?"
                      onFocus={(e) => (e.target.style.borderColor = ACCENT)}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(28,28,28,0.12)")}
                    />
                  </div>

                  {status === "error" && (
                    <p
                      className="text-sm"
                      style={{ color: "#dc2626", fontFamily: "Montserrat, sans-serif" }}
                    >
                      Ocorreu um erro ao enviar. Tente novamente.
                    </p>
                  )}

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full px-8 py-3.5 text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-md transition-all cursor-pointer disabled:opacity-70 text-sm"
                    style={{ backgroundColor: ACCENT, fontFamily: "Montserrat, sans-serif" }}
                  >
                    {status === "loading" ? (
                      <><Loader2 className="w-4 h-4 animate-spin" /> Enviando...</>
                    ) : (
                      <>Enviar Mensagem <Send size={15} /></>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
