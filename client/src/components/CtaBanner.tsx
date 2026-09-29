import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { ACCENT, whatsappLink } from "@/lib/site";

interface CtaBannerProps {
  id?: string;
  title: string;
  text: string;
  buttonLabel: string;
  microtext?: string;
}

export default function CtaBanner({ id, title, text, buttonLabel, microtext }: CtaBannerProps) {
  return (
    <section id={id} className="py-16 md:py-20 relative overflow-hidden" style={{ backgroundColor: ACCENT }}>
      <div
        className="absolute -right-24 -top-24 w-72 h-72 rounded-full"
        style={{ border: "1px solid rgba(255,255,255,0.15)" }}
        aria-hidden
      />
      <div
        className="absolute -left-16 -bottom-28 w-64 h-64 rounded-full"
        style={{ border: "1px solid rgba(255,255,255,0.12)" }}
        aria-hidden
      />
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl"
      >
        <h2 className="text-balance leading-tight" style={{ fontSize: "clamp(1.7rem, 3vw, 2.5rem)", color: "#FFFFFF" }}>
          {title}
        </h2>
        <p className="mt-5 text-base md:text-lg" style={{ color: "rgba(255,255,255,0.88)" }}>
          {text}
        </p>
        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-md font-semibold text-[0.95rem] bg-white"
          style={{ color: ACCENT, boxShadow: "0 8px 24px rgba(0,0,0,0.15)" }}
        >
          <MessageCircle size={18} />
          {buttonLabel}
        </motion.a>
        {microtext && (
          <p className="mt-4 text-xs tracking-wide" style={{ color: "rgba(255,255,255,0.75)" }}>
            {microtext}
          </p>
        )}
      </motion.div>
    </section>
  );
}
