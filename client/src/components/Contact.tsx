import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, MessageCircle, Lock } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { ACCENT, PRIMARY, whatsappLink } from "@/lib/site";

const reasons = [
  "Gestação / pós-parto",
  "Menopausa",
  "Disfunção sexual / vaginismo",
  "Pós-prostatectomia",
  "Constipação",
  "Ginástica pélvica",
  "Outro motivo",
];

const emptyForm = { name: "", whatsapp: "", email: "", reason: "", message: "" };

function formatPhone(value: string) {
  const d = value.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d ? `(${d}` : "";
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

export default function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [sending, setSending] = useState(false);

  const set = (field: keyof typeof emptyForm) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => setForm({ ...form, [field]: field === "whatsapp" ? formatPhone(e.target.value) : e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    const message = `Motivo: ${form.reason}${form.message ? `\n\n${form.message}` : ""}`;

    // Registra o lead (e-mail + banco) sem bloquear o redirecionamento para o WhatsApp.
    try {
      await Promise.race([
        fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: form.name, phone: form.whatsapp, email: form.email, message }),
          keepalive: true,
        }),
        new Promise((resolve) => setTimeout(resolve, 2500)),
      ]);
    } catch {
      // O atendimento segue pelo WhatsApp mesmo se o registro falhar.
    }

    const text =
      `Olá! Meu nome é ${form.name} e vim pelo site da JS Fisioterapia Pélvica e Bem-Estar. ` +
      `Gostaria de agendar uma avaliação.\n\nO que me trouxe até aqui: ${form.reason}` +
      (form.message ? `\n\n${form.message}` : "");

    window.location.href = whatsappLink(text);
    setSending(false);
    setForm(emptyForm);
  };

  const fieldClass =
    "w-full px-4 py-3.5 rounded-lg text-[0.95rem] bg-[#FAFAFA] border border-[rgba(28,28,28,0.14)] outline-none transition-colors focus:border-[#C91D6E] focus:bg-white";
  const labelClass = "block text-xs font-semibold mb-1.5 uppercase tracking-wide";

  return (
    <section id="agendar" className="py-16 md:py-24" style={{ backgroundColor: "#F9F7F7" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
        <SectionHeader
          eyebrow="Formulário"
          title="Agende sua avaliação"
          subtitle="Preencha os campos abaixo. Ao enviar, o atendimento continua no nosso WhatsApp, já sabendo o motivo da sua busca."
        />

        <motion.form
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl p-6 md:p-10 space-y-5"
          style={{ border: "1px solid rgba(28,28,28,0.08)", boxShadow: "0 4px 24px rgba(28,28,28,0.06)" }}
        >
          <div>
            <label htmlFor="f-name" className={labelClass} style={{ color: PRIMARY }}>Nome *</label>
            <input id="f-name" type="text" required autoComplete="name" value={form.name} onChange={set("name")}
              className={fieldClass} placeholder="Seu nome" />
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="f-whatsapp" className={labelClass} style={{ color: PRIMARY }}>WhatsApp *</label>
              <input id="f-whatsapp" type="tel" inputMode="tel" required autoComplete="tel" minLength={14}
                value={form.whatsapp} onChange={set("whatsapp")} className={fieldClass} placeholder="(11) 99999-9999" />
            </div>
            <div>
              <label htmlFor="f-email" className={labelClass} style={{ color: PRIMARY }}>E-mail *</label>
              <input id="f-email" type="email" required autoComplete="email" value={form.email} onChange={set("email")}
                className={fieldClass} placeholder="seu@email.com" />
            </div>
          </div>

          <div>
            <label htmlFor="f-reason" className={labelClass} style={{ color: PRIMARY }}>O que te trouxe até aqui *</label>
            <select id="f-reason" required value={form.reason} onChange={set("reason")}
              className={`${fieldClass} cursor-pointer ${form.reason ? "" : "text-[#8A8A8A]"}`}>
              <option value="" disabled>Selecione uma opção</option>
              {reasons.map((r) => <option key={r} value={r} className="text-[#1C1C1C]">{r}</option>)}
            </select>
          </div>

          <div>
            <label htmlFor="f-message" className={labelClass} style={{ color: PRIMARY }}>Mensagem</label>
            <textarea id="f-message" rows={4} value={form.message} onChange={set("message")}
              className={`${fieldClass} resize-none`} placeholder="Conte um pouco sobre o que você está sentindo (opcional)" />
          </div>

          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            type="submit"
            disabled={sending}
            className="w-full px-8 py-4 text-white rounded-lg font-semibold flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-70 text-[0.95rem]"
            style={{ backgroundColor: ACCENT }}
          >
            {sending ? (
              <><Loader2 className="w-4 h-4 animate-spin" /> Abrindo o WhatsApp...</>
            ) : (
              <><MessageCircle size={18} /> Continuar no WhatsApp</>
            )}
          </motion.button>

          <p className="flex items-center justify-center gap-1.5 text-xs text-center" style={{ color: "#8A8A8A" }}>
            <Lock size={12} /> Seus dados são tratados com sigilo e usados apenas para o seu atendimento.
          </p>
        </motion.form>
      </div>
    </section>
  );
}
