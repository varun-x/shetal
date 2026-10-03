"use client";

import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { Check, Container, MapPin } from "lucide-react";

export const WHATSAPP_NUMBER = "919457737292";
export const PREFILL =
  "Hi Trifreight — I'd like a freight plan. Lane: ___ , cargo: ___ , ready by: ___";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(PREFILL)}`;

const KNOB = 44; // px — matches size-11
const PAD = 6; // px — matches p-1.5
const COMPLETE_AT = 0.9;

/**
 * Slide the shipping container to the destination marker at the end of the track to open a WhatsApp chat with the
 * operations desk. A plain tap or Enter/Space also completes it, so the control
 * still works for keyboard and assistive-tech users.
 */
export default function SlideToWhatsApp({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const start = useRef({ x: 0, progress: 0, moved: false });
  const [travel, setTravel] = useState(0);
  const [progress, setProgress] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [done, setDone] = useState(false);

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
      className={`relative flex h-14 w-[22rem] max-w-full items-center overflow-hidden rounded-full bg-[#141414] p-1.5 shadow-[0_14px_30px_rgba(16,16,16,0.22)] ring-1 ring-white/15 ${className}`}
    >
      {/* Route trailing the container. */}
      <span
        className={`absolute inset-y-0 left-0 rounded-full bg-[#bfe8ff]/25 ${
          dragging ? "" : "transition-[width] duration-300 ease-out"
        }`}
        style={{ width: `${offset + KNOB + PAD * 2}px` }}
        aria-hidden="true"
      />

      {/* Destination marker. */}
      <span
        className="pointer-events-none absolute right-1.5 top-1/2 z-10 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-dashed border-[#bfe8ff]/60 text-[#bfe8ff]"
        aria-hidden="true"
      >
        <MapPin className="size-5" />
      </span>

      <span
        className="pointer-events-none absolute inset-y-0 left-[3.5rem] right-[3.5rem] z-10 flex items-center justify-center truncate text-center text-[14px] font-semibold leading-none tracking-[-0.01em] text-white transition-opacity duration-200"
        style={{ opacity: done ? 0 : Math.max(0, 1 - progress * 1.6) }}
        aria-hidden="true"
      >
        <span className="truncate">{children}</span>
      </span>

      {done && (
        <span
          className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center text-[14px] font-semibold text-white"
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
        className={`relative z-20 grid size-11 shrink-0 cursor-grab touch-none place-items-center rounded-full bg-[#bfe8ff] text-[#141414] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:cursor-grabbing ${
          dragging ? "" : "transition-transform duration-300 ease-out"
        }`}
        style={{ transform: `translateX(${offset}px)` }}
      >
        {done ? <Check className="size-5" /> : <Container className="size-5" strokeWidth={2.2} />}
      </button>
    </div>
  );
}
