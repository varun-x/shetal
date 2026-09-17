export default function Ticker({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) {
  const doubled = [...items, ...items];
  return (
    <div
      className={`overflow-hidden border-y border-black/8 bg-[#fbfdff] py-4 ${className}`}
      aria-hidden="true"
    >
      <div className="ticker-track flex w-max items-center gap-10">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="font-mono-ui flex items-center gap-10 whitespace-nowrap text-[10px] tracking-[0.16em] opacity-60"
          >
            {item}
            <span className="size-1.5 rounded-full bg-[#6095c2]/70" />
          </span>
        ))}
      </div>
    </div>
  );
}