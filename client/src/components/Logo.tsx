import mark from "../assets/v2/js-mark.png";
import { ACCENT, PRIMARY } from "@/lib/site";

interface LogoProps {
  light?: boolean;
  size?: "md" | "lg";
}

export default function Logo({ light = false, size = "md" }: LogoProps) {
  const lg = size === "lg";
  return (
    <div className="flex items-center gap-2.5 select-none">
      <img src={mark} alt="" aria-hidden className={lg ? "h-14 w-auto" : "h-11 w-auto"} />
      <div className="flex flex-col leading-none">
        <span
          className="font-heading font-bold tracking-tight"
          style={{ fontSize: lg ? "1.5rem" : "1.2rem", color: light ? "#FFFFFF" : PRIMARY }}
        >
          <span style={{ color: ACCENT }}>JS</span> Fisioterapia
        </span>
        <span
          className="uppercase font-medium"
          style={{
            fontSize: lg ? "0.7rem" : "0.6rem",
            letterSpacing: "0.14em",
            marginTop: "0.3rem",
            color: light ? "rgba(255,255,255,0.6)" : "#6A6A6A",
          }}
        >
          Pélvica e Bem-Estar
        </span>
      </div>
    </div>
  );
}
