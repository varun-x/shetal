import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "ink" | "powder" | "outline" | "outlineLight" | "ghost";

const variants: Record<Variant, string> = {
  ink: "bg-[#222222] text-white hover:-translate-y-0.5 shadow-[0_12px_26px_rgba(33,33,33,0.16)]",
  powder:
    "bg-[#bfe8ff] text-[#212121] hover:-translate-y-0.5 shadow-[0_12px_26px_rgba(96,149,194,0.24)]",
  outline:
    "border border-black/14 text-[#212121] hover:border-black/40 hover:-translate-y-0.5",
  outlineLight:
    "border border-white/25 text-white hover:bg-white/10 hover:-translate-y-0.5",
  ghost: "text-[#212121] hover:bg-black/5",
};

export default function Button({
  href,
  onClick,
  type = "button",
  variant = "ink",
  className = "",
  children,
  ariaLabel,
}: {
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: Variant;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
}) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3.5 text-[11px] font-semibold uppercase tracking-[0.02em] transition-all ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cls} aria-label={ariaLabel}>
      {children}
    </button>
  );
}