export function BrandMark({ dark = false }: { dark?: boolean }) {
  return (
    <span
      className={`relative grid size-9 shrink-0 place-items-center rounded-full ${
        dark ? "bg-white" : "bg-[#222222]"
      }`}
      aria-hidden="true"
    >
      <span
        className={`absolute h-[3px] w-5 -rotate-[35deg] rounded-full ${
          dark ? "bg-[#222222]" : "bg-white"
        }`}
      />
      <span
        className={`absolute h-[3px] w-5 rotate-[35deg] rounded-full ${
          dark ? "bg-[#222222]" : "bg-white"
        }`}
      />
      <span
        className={`absolute size-2.5 rounded-full ${dark ? "bg-white" : "bg-[#222222]"}`}
      />
    </span>
  );
}

export function BrandWordmark({ dark = false }: { dark?: boolean }) {
  return (
    <span className="inline-flex flex-col leading-none">
      <span
        className={`font-display block text-[1.1rem] font-bold tracking-[-0.06em] ${
          dark ? "text-white" : "text-[#212121]"
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