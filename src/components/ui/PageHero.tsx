import type { ReactNode } from "react";
import SectionTag from "./SectionTag";

export default function PageHero({
  eyebrow,
  title,
  lead,
  children,
  className = "",
  dark = false,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  children?: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <section
      className={`relative overflow-hidden px-4 pb-16 pt-32 sm:px-6 sm:pb-24 sm:pt-44 ${className} ${
        dark ? "text-white" : "text-[#212121]"
      }`}
    >
      <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-[#bfe8ff]/20 to-transparent" />
      <div className="absolute left-1/2 top-20 h-72 w-[54rem] -translate-x-1/2 rounded-full bg-[#bfe8ff]/20 blur-3xl" />

      <div className="relative mx-auto max-w-[1140px]">
        <SectionTag className={dark ? "text-[#bfe8ff]" : "text-[#6095c2]"}>
          {eyebrow}
        </SectionTag>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.42fr_0.58fr] lg:items-end lg:gap-20">
          <h1 className="font-display text-[clamp(2.4rem,5.2vw,4.8rem)] font-semibold leading-[0.94] tracking-[-0.055em]">
            {title}
          </h1>
          {lead && (
            <p className="text-base leading-relaxed opacity-65 sm:text-lg lg:border-l lg:border-current/10 lg:pl-8">
              {lead}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}