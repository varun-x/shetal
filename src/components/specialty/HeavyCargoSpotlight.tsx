"use client";

import Link from "next/link";
import { ArrowUpRight, Ruler, Tractor, Weight } from "lucide-react";
import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import SlideToWhatsApp from "@/components/ui/SlideToWhatsApp";
import SectionTag from "@/components/ui/SectionTag";
import HandNote from "@/components/ui/HandNote";
import Reveal from "@/components/ui/Reveal";

const specialties = [
  {
    icon: Weight,
    tag: "01",
    title: "Heavy & lengthy material",
    text: "Steel pipes, beams, structural sections and machinery that are too long or too heavy for a standard container.",
    chips: ["Steel & pipes", "Machinery", "Project cargo"],
  },
  {
    icon: Tractor,
    tag: "02",
    title: "Agriculture work",
    text: "Tractors, implements and farm produce, moved on a schedule that respects the harvest calendar.",
    chips: ["Tractors", "Implements", "Farm produce"],
  },
  {
    icon: Ruler,
    tag: "03",
    title: "40 ft to 50 ft open trailers",
    text: "Open trailers for over-length, over-height and top-loaded cargo. Load it from the side or from above.",
    chips: ["40 ft", "50 ft", "Open / flatbed"],
    featured: true,
  },
];

// Trailer geometry, in SVG units. At 50 ft the bed starts at BED_50; at 40 ft
// it is 20% shorter, so the rear starts further right.
const BED_FRONT = 800;
const BED_50 = 60;
const BED_40 = BED_FRONT - (BED_FRONT - BED_50) * 0.8;
const EXTEND = BED_40 - BED_50;

const TRANSITION = { duration: 1.6, delay: 0.4, ease: [0.65, 0, 0.35, 1] } as const;

function TrailerIllustration() {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });
  const reduce = useReducedMotion();
  const [counted, setCounted] = useState(40);
  const feet = reduce ? 50 : counted;
  const extended = inView || !!reduce;

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(40, 50, {
      ...TRANSITION,
      onUpdate: (v) => setCounted(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduce]);

  // A rect whose front edge stays put while its rear edge slides back from the
  // 40 ft position to the 50 ft one. `inset` trims both ends for the load.
  const stretch = (inset: number) => ({
    initial: reduce ? false : { x: BED_40 + inset, width: BED_FRONT - BED_40 - inset * 2 },
    animate: extended
      ? { x: BED_50 + inset, width: BED_FRONT - BED_50 - inset * 2 }
      : undefined,
    transition: TRANSITION,
  });

  return (
    <div className="relative">
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <p className="font-mono-ui text-[10px] tracking-[0.14em] text-white/45">
            Open trailer length
          </p>
          <p className="font-display mt-1 text-[clamp(2.6rem,6vw,4.5rem)] font-bold leading-none tracking-[-0.04em] text-powder tabular-nums">
            {feet}
            <span className="ml-2 text-[0.45em] font-semibold text-white">FT</span>
          </p>
        </div>
        <div className="flex gap-2 pb-1.5">
          {[40, 50].map((len) => (
            <span
              key={len}
              className={`rounded-full border px-3 py-1.5 font-mono-ui text-[10px] tracking-[0.1em] transition-colors duration-500 ${
                feet >= len
                  ? "border-powder bg-powder text-ink"
                  : "border-white/20 text-white/50"
              }`}
            >
              {len} ft
            </span>
          ))}
        </div>
      </div>

      <svg
        ref={ref}
        viewBox="0 0 1000 250"
        className="h-auto w-full"
        role="img"
        aria-label="Truck pulling an open trailer loaded with long steel pipes, extending from 40 feet to 50 feet"
      >
        {/* Road */}
        <line x1="0" y1="206" x2="1000" y2="206" className="stroke-white/15" strokeWidth="2" />
        <line x1="0" y1="206" x2="1000" y2="206" className="stroke-white/30" strokeWidth="2" strokeDasharray="26 22" />

        {/* Long load: pipes and beams, strapped down. */}
        <motion.rect y="96" height="14" rx="7" className="fill-sky" {...stretch(12)} />
        <motion.rect y="112" height="14" rx="7" className="fill-powder" {...stretch(4)} />
        <motion.rect y="128" height="14" rx="7" className="fill-sky" {...stretch(12)} />
        {[300, 520, 720].map((x) => (
          <line key={x} x1={x} y1="92" x2={x} y2="146" className="stroke-ink" strokeWidth="5" />
        ))}

        {/* Flatbed deck */}
        <motion.rect y="146" height="14" rx="3" className="fill-white" {...stretch(0)} />

        {/* Rear axle group moves back as the trailer extends. */}
        <motion.g
          initial={reduce ? false : { x: EXTEND }}
          animate={extended ? { x: 0 } : undefined}
          transition={TRANSITION}
        >
          <rect x={BED_50} y="140" width="6" height="26" className="fill-white" />
          {[120, 172, 224].map((cx) => (
            <g key={cx}>
              <circle cx={cx} cy="184" r="22" className="fill-ink stroke-white/70" strokeWidth="3" />
              <circle cx={cx} cy="184" r="7" className="fill-white/70" />
            </g>
          ))}
        </motion.g>

        {/* Landing gear */}
        <rect x="690" y="160" width="6" height="40" className="fill-white/60" />
        <rect x="682" y="198" width="22" height="5" rx="2" className="fill-white/60" />

        {/* Tractor unit */}
        <rect x="790" y="160" width="175" height="12" rx="3" className="fill-white/80" />
        <path d="M818 160 V74 a10 10 0 0 1 10-10 h74 l46 46 v50 Z" className="fill-powder" />
        <path d="M900 74 l38 38 h-38 Z" className="fill-ink/80" />
        <rect x="834" y="80" width="54" height="32" rx="4" className="fill-ink/80" />
        <rect x="938" y="132" width="12" height="10" rx="2" className="fill-white" />
        {[858, 930].map((cx) => (
          <g key={cx}>
            <circle cx={cx} cy="184" r="22" className="fill-ink stroke-white/70" strokeWidth="3" />
            <circle cx={cx} cy="184" r="7" className="fill-white/70" />
          </g>
        ))}

        {/* Dimension line */}
        <motion.line
          y1="232"
          y2="232"
          x2={BED_FRONT}
          className="stroke-powder"
          strokeWidth="2"
          initial={reduce ? false : { x1: BED_40 }}
          animate={extended ? { x1: BED_50 } : undefined}
          transition={TRANSITION}
        />
        <motion.line
          y1="222"
          y2="242"
          className="stroke-powder"
          strokeWidth="2"
          initial={reduce ? false : { x1: BED_40, x2: BED_40 }}
          animate={extended ? { x1: BED_50, x2: BED_50 } : undefined}
          transition={TRANSITION}
        />
        <line x1={BED_FRONT} y1="222" x2={BED_FRONT} y2="242" className="stroke-powder" strokeWidth="2" />
      </svg>
    </div>
  );
}

/** Full-width feature band for Trifreight's speciality: heavy, long and agri cargo on 40–50 ft open trailers. */
export default function HeavyCargoSpotlight() {
  return (
    <section
      id="speciality"
      className="relative isolate overflow-hidden bg-ink px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-12 xl:px-16"
    >
      <div className="grid-fade pointer-events-none absolute inset-0 opacity-70" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[28rem] w-[60rem] -translate-x-1/2 rounded-full bg-sky/25 blur-3xl" />

      <div className="relative mx-auto max-w-[1600px]">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-powder px-3.5 py-2 font-mono-ui text-[10px] tracking-[0.14em] text-ink">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-sky opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-ink" />
              </span>
              Our speciality
            </span>
            <h2 className="font-display mt-6 text-[clamp(2.4rem,5vw,4.8rem)] font-bold leading-[1.02] tracking-[-0.04em]">
              Heavy, long, oversized?{" "}
              <span className="inline-block rounded-lg bg-powder px-[0.2em] pb-[0.08em] pt-[0.03em] text-ink">
                That&apos;s our lane.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-lg text-base leading-relaxed text-white/70 lg:text-lg">
              When cargo won&apos;t fit in a box, it comes to us. We specialise in heavy and
              lengthy material, agriculture work, and 40 ft to 50 ft open trailers, planned,
              loaded and moved by one desk.
            </p>
            <HandNote color="#bfe8ff" className="mt-5">
              what we do best
            </HandNote>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-8 lg:mt-16">
            <TrailerIllustration />
          </div>
        </Reveal>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {specialties.map(({ icon: Icon, tag, title, text, chips, featured }, i) => (
            <Reveal key={title} delay={0.08 * i} className="h-full">
              <article
                className={`group flex h-full flex-col rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1.5 sm:p-7 ${
                  featured
                    ? "border-powder bg-powder text-ink shadow-[0_24px_50px_rgba(191,232,255,0.18)]"
                    : "border-white/10 bg-white/[0.04] hover:border-powder/50 hover:bg-white/[0.07]"
                }`}
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`grid size-12 place-items-center rounded-full transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 ${
                      featured ? "bg-ink text-powder" : "bg-powder text-ink"
                    }`}
                  >
                    <Icon className="size-6" />
                  </span>
                  <span
                    className={`font-mono-ui text-[10px] tracking-[0.1em] ${
                      featured ? "text-ink/50" : "text-white/40"
                    }`}
                  >
                    {tag}
                  </span>
                </div>
                <h3 className="font-display mt-6 text-2xl font-semibold leading-tight tracking-[-0.04em]">
                  {title}
                </h3>
                <p
                  className={`mt-2.5 text-sm leading-relaxed lg:text-[15px] ${
                    featured ? "text-ink/70" : "text-white/60"
                  }`}
                >
                  {text}
                </p>
                <ul className="mt-auto flex flex-wrap gap-2 pt-6">
                  {chips.map((chip) => (
                    <li
                      key={chip}
                      className={`rounded-full border px-3 py-1 text-xs font-medium ${
                        featured ? "border-ink/20 bg-white/50" : "border-white/15 text-white/80"
                      }`}
                    >
                      {chip}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
          <SlideToWhatsApp>Slide to book a trailer</SlideToWhatsApp>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-powder"
          >
            <span className="underline decoration-powder/30 underline-offset-4 transition-colors group-hover:decoration-powder">
              or request a heavy-cargo quote
            </span>
            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/** Slim callout that points other pages at the speciality section on the home page. */
export function HeavyCargoBanner() {
  return (
    <Link
      href="/#speciality"
      className="group relative mx-auto flex max-w-[1600px] flex-col gap-4 overflow-hidden rounded-xl bg-ink p-5 text-white transition-transform duration-300 hover:-translate-y-0.5 sm:flex-row sm:items-center sm:justify-between sm:p-6"
    >
      <div className="grid-fade pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative flex items-center gap-4">
        <span className="grid size-12 shrink-0 place-items-center rounded-full bg-powder text-ink">
          <Ruler className="size-6" />
        </span>
        <div>
          <SectionTag className="text-powder">Our speciality</SectionTag>
          <p className="font-display mt-1.5 text-lg font-semibold leading-snug tracking-[-0.03em] sm:text-xl">
            Heavy & lengthy material, agriculture work, and 40–50 ft open trailers.
          </p>
        </div>
      </div>
      <span className="relative inline-flex shrink-0 items-center gap-2 self-start rounded-lg bg-powder px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.02em] text-ink sm:self-auto">
        See how we move it
        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:rotate-45" />
      </span>
    </Link>
  );
}
