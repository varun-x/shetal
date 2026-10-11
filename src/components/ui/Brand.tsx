import Image from "next/image";

/** The Trifreight "T" mark (blue on transparent — reads on both light and dark grounds). */
export function BrandMark({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <Image
      src="/images/brand/trifreight-mark.webp"
      alt=""
      aria-hidden="true"
      width={480}
      height={290}
      loading="eager"
      className={`shrink-0 select-none ${className}`}
    />
  );
}

export function BrandWordmark({ dark = false }: { dark?: boolean }) {
  return (
    <span className="inline-flex flex-col leading-none">
      <span
        className={`font-display block text-[1.1rem] font-bold tracking-[-0.06em] ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        Trifreight
      </span>
      <span
        className={`font-mono-ui mt-0.5 block text-[8px] tracking-[0.13em] sm:text-[9px] ${
          dark ? "text-white/48" : "text-black/48"
        }`}
      >
        Trade Solutions
      </span>
    </span>
  );
}