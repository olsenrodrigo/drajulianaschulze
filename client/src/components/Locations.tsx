import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Navigation } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { ACCENT, PRIMARY, ADDRESS_LINES, ADDRESS_QUERY, PHONE_DISPLAY, EMAIL, whatsappLink } from "@/lib/site";

const mapQuery = encodeURIComponent(ADDRESS_QUERY);

export default function Locations() {
  const items = [
    {
      icon: MapPin,
      label: "Consultório",
      content: ADDRESS_LINES.map((l) => <span key={l} className="block">{l}</span>),
      href: `https://www.google.com/maps/search/?api=1&query=${mapQuery}`,
    },
    { icon: Phone, label: "Telefone e WhatsApp", content: PHONE_DISPLAY, href: whatsappLink() },
    { icon: Mail, label: "E-mail", content: EMAIL, href: `mailto:${EMAIL}` },
  ];

  return (
    <section id="contato" className="py-16 md:py-24" style={{ backgroundColor: "#F9F7F7" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Local e contato" title="Onde nos encontrar." />

        <div className="grid lg:grid-cols-[380px_1fr] gap-6 lg:gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-6 md:p-8 flex flex-col gap-6"
            style={{ border: "1px solid rgba(28,28,28,0.08)" }}
          >
            {items.map(({ icon: Icon, label, content, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex gap-4 group"
              >
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "rgba(201,29,110,0.08)" }}
                >
                  <Icon size={19} strokeWidth={1.7} style={{ color: ACCENT }} />
                </div>
                <div>
                  <p className="text-[0.7rem] font-semibold uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                    {label}
                  </p>
                  <p className="text-sm font-medium group-hover:underline" style={{ color: PRIMARY, lineHeight: 1.6 }}>
                    {content}
                  </p>
                </div>
              </a>
            ))}

            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md text-sm font-semibold transition-colors hover:bg-black/[0.03]"
              style={{ color: PRIMARY, border: "1px solid rgba(28,28,28,0.18)" }}
            >
              <Navigation size={16} />
              Como chegar
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl overflow-hidden min-h-[320px]"
            style={{ border: "1px solid rgba(28,28,28,0.08)" }}
          >
            <iframe
              title="Mapa do consultório"
              src={`https://maps.google.com/maps?q=${mapQuery}&output=embed&z=16&hl=pt-BR`}
              className="w-full h-full min-h-[320px]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
