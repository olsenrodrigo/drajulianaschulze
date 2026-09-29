import { motion } from "framer-motion";
import { ACCENT, PRIMARY, MUTED_TEXT } from "@/lib/site";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
}

export default function SectionHeader({ eyebrow, title, subtitle, align = "center", light = false }: SectionHeaderProps) {
  const centered = align === "center";
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={centered ? "text-center mb-12 md:mb-14 max-w-2xl mx-auto" : "mb-10 md:mb-12 max-w-2xl"}
    >
      <div className={`flex items-center gap-4 mb-5 ${centered ? "justify-center" : ""}`}>
        <div style={{ height: "1px", width: "2.5rem", backgroundColor: ACCENT, opacity: 0.6 }} />
        <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: ACCENT }}>
          {eyebrow}
        </span>
        {centered && <div style={{ height: "1px", width: "2.5rem", backgroundColor: ACCENT, opacity: 0.6 }} />}
      </div>
      <h2
        className="leading-tight text-balance"
        style={{ fontSize: "clamp(1.75rem, 3vw, 2.6rem)", color: light ? "#FFFFFF" : PRIMARY }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base" style={{ color: light ? "rgba(255,255,255,0.7)" : MUTED_TEXT }}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
