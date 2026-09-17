export default function SectionTag({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`font-mono-ui inline-flex items-center gap-3 text-[10px] tracking-[0.14em] ${className}`}
    >
      <span className="h-px w-10 bg-current opacity-40" />
      {children}
    </span>
  );
}