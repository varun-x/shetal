/**
 * A handwritten margin note with a drawn arrow, in the spirit of the Courso
 * reference. The arrow strokes itself in when the note scrolls into view.
 */
export default function HandNote({
  children,
  className = "",
  flip = false,
  color = "#6095c2",
}: {
  children: React.ReactNode;
  className?: string;
  /** Mirror the arrow to point the other way. */
  flip?: boolean;
  color?: string;
}) {
  return (
    <span className={`inline-flex items-end gap-1 ${className}`} aria-hidden="true">
      <span
        className="font-hand whitespace-nowrap text-xl leading-none sm:text-2xl"
        style={{ color }}
      >
        {children}
      </span>
      <svg
        viewBox="0 0 118 58"
        className="h-9 w-[74px] shrink-0 sm:h-11 sm:w-[92px]"
        fill="none"
        style={flip ? { transform: "scaleX(-1)" } : undefined}
      >
        <path
          className="stroke-draw"
          pathLength={1}
          d="M5 12C29 2 72 4 95 26"
          stroke={color}
          strokeWidth={2.2}
          strokeLinecap="round"
        />
        <path
          className="stroke-draw"
          pathLength={1}
          d="M95 26L80 24M95 26L93 11"
          stroke={color}
          strokeWidth={2.2}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ animationDelay: "1.1s" }}
        />
      </svg>
    </span>
  );
}
