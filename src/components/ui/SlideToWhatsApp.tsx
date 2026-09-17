"use client";

import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { ArrowRight, Check } from "lucide-react";

const WHATSAPP_NUMBER = "919457737292";
const PREFILL =
  "Hi Trifreight — I'd like a freight plan. Lane: ___ , cargo: ___ , ready by: ___";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(PREFILL)}`;

const KNOB = 40; // px — matches size-10
const PAD = 6; // px — matches p-1.5
const COMPLETE_AT = 0.9;

type Variant = "ink" | "paper";

const styles: Record<
  Variant,
  { track: string; fill: string; knob: string; label: string; hint: string }
> = {
  ink: {
    track: "bg-[#1a1a1a] shadow-[0_14px_30px_rgba(16,16,16,0.22)]",
    fill: "bg-[#bfe8ff]",
    knob: "bg-[#bfe8ff] text-[#1a1a1a]",
    label: "text-white",
    hint: "text-white/45",
  },
  paper: {
    track: "bg-white shadow-[0_14px_30px_rgba(27,54,77,0.18)]",
    fill: "bg-[#bfe8ff]",
    knob: "bg-[#1a1a1a] text-[#bfe8ff]",
    label: "text-[#1a1a1a]",
    hint: "text-black/40",
  },
};

function GridGlyph() {
  return (
    <svg viewBox="0 0 16 16" className="size-[15px]" aria-hidden="true">
      {[3, 8, 13].map((y) =>
        [3, 8, 13].map((x) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r={1.35} fill="currentColor" />
        ))
      )}
    </svg>
  );
}

/**
 * Slide the grid box to the end of the track to open a WhatsApp chat with the
 * operations desk. A plain tap or Enter/Space also completes it, so the control
 * still works for keyboard and assistive-tech users.
 */
export default function SlideToWhatsApp({
  children,
  variant = "ink",
  className = "",
}: {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const start = useRef({ x: 0, progress: 0, moved: false });
  const [travel, setTravel] = useState(0);
  const [progress, setProgress] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [done, setDone] = useState(false);
  const s = styles[variant];

  // The knob's travel distance follows the track's rendered width. Measured in
  // an effect (refs must not be read during render) and kept in sync on resize.
  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const update = () =>
      setTravel(Math.max(track.clientWidth - KNOB - PAD * 2, 1));
    update();
    const observer = new ResizeObserver(update);
    observer.observe(track);
    return () => observer.disconnect();
  }, []);

  const complete = useCallback(() => {
    if (done) return;
    setDone(true);
    setProgress(1);
    // Let the knob finish its run before the tab opens.
    window.setTimeout(() => {
      const opened = window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
      if (!opened) window.location.href = WHATSAPP_URL;
      // Reset so the control is usable again when the user comes back.
      window.setTimeout(() => {
        setDone(false);
        setProgress(0);
      }, 900);
    }, 260);
  }, [done]);

  const onPointerDown = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (done) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    start.current = { x: e.clientX, progress, moved: false };
    setDragging(true);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (!dragging || done) return;
    const dx = e.clientX - start.current.x;
    if (Math.abs(dx) > 3) start.current.moved = true;
    const next = Math.min(Math.max(start.current.progress + dx / travel, 0), 1);
    setProgress(next);
    if (next >= 1) {
      setDragging(false);
      complete();
    }
  };

  const onPointerUp = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (!dragging || done) return;
    e.currentTarget.releasePointerCapture(e.pointerId);
    setDragging(false);
    // A tap that never moved counts as an activation.
    if (progress >= COMPLETE_AT || !start.current.moved) complete();
    else setProgress(0);
  };

  const offset = progress * travel;

  return (
    <div
      ref={trackRef}
      className={`relative inline-flex w-[19rem] max-w-full items-center overflow-hidden rounded-lg p-1.5 ${s.track} ${className}`}
    >
      {/* Fill trailing the knob. */}
      <span
        className={`absolute inset-y-0 left-0 ${s.fill} ${
          dragging ? "" : "transition-[width] duration-300 ease-out"
        }`}
        style={{ width: `${offset + KNOB + PAD * 2}px` }}
        aria-hidden="true"
      />

      <span
        className={`pointer-events-none absolute inset-y-0 left-0 z-10 flex items-center justify-center gap-2 pl-14 pr-4 text-[13px] font-semibold tracking-[-0.01em] transition-opacity duration-200 ${s.label}`}
        style={{ right: 0, opacity: done ? 0 : 1 - progress * 1.4 }}
        aria-hidden="true"
      >
        {children}
        <ArrowRight className={`size-4 ${s.hint}`} />
      </span>

      {done && (
        <span
          className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center text-[13px] font-semibold text-[#1a1a1a]"
          aria-hidden="true"
        >
          Opening WhatsApp…
        </span>
      )}

      <button
        type="button"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            complete();
          }
        }}
        aria-label={`${typeof children === "string" ? children : "Chat with the operations desk"} — slide, tap, or press Enter to open WhatsApp`}
        className={`relative z-20 grid size-10 shrink-0 cursor-grab touch-none place-items-center rounded-md active:cursor-grabbing ${s.knob} ${
          dragging ? "" : "transition-transform duration-300 ease-out"
        }`}
        style={{ transform: `translateX(${offset}px)` }}
      >
        {done ? <Check className="size-[18px]" /> : <GridGlyph />}
      </button>
    </div>
  );
}
