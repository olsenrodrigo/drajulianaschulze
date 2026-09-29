import { MapPin, Phone, Mail } from "lucide-react";
import Logo from "./Logo";
import { ACCENT, BRAND, NAV_ITEMS, ADDRESS_LINES, PHONE_DISPLAY, EMAIL, whatsappLink, scrollToId } from "@/lib/site";

export default function Footer() {
  const muted = "rgba(255,255,255,0.6)";

  return (
    <footer style={{ backgroundColor: "#1C1C1C" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <Logo light />
            <p className="text-sm mt-5 max-w-xs" style={{ color: muted }}>
              Fisioterapia pélvica com ciência, acolhimento e elegância. Fundada por Juliana Schulze Burti, fisioterapeuta,
              mestre e doutora.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: ACCENT }}>Navegação</p>
            <ul className="grid grid-cols-2 gap-y-2.5 gap-x-6">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToId(item.id)}
                    className="text-sm transition-colors hover:text-white cursor-pointer"
                    style={{ color: muted }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: ACCENT }}>Contato</p>
            <ul className="space-y-4 text-sm" style={{ color: muted }}>
              <li className="flex gap-3">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />
                <span>{ADDRESS_LINES.join(", ")}</span>
              </li>
              <li>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex gap-3 hover:text-white">
                  <Phone size={16} className="mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="flex gap-3 hover:text-white">
                  <Mail size={16} className="mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between gap-2 text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
          <span>© {new Date().getFullYear()} {BRAND}. Todos os direitos reservados.</span>
          <span>Atendimento particular · São Paulo, SP</span>
        </div>
      </div>
    </footer>
  );
}
