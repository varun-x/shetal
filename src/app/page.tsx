"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Ticker from "@/components/ui/Ticker";
import WorldMap from "@/components/ui/WorldMap";
import SlideToWhatsApp from "@/components/ui/SlideToWhatsApp";
import CloudBlend from "@/components/ui/CloudBlend";
import Sticker, { type StickerName } from "@/components/ui/Sticker";
import HandNote from "@/components/ui/HandNote";

const services: {
  number: string;
  title: string;
  eyebrow: string;
  sticker: StickerName;
  meta: string;
}[] = [
  {
    number: "01",
    title: "Air freight",
    eyebrow: "Urgent, high-value cargo, with the paperwork flown ahead of it.",
    sticker: "plane",
    meta: "1–4 days",
  },
  {
    number: "02",
    title: "Ocean freight",
    eyebrow: "FCL and LCL planned around the right sailing and the right port.",
    sticker: "ship",
    meta: "18–35 days",
  },
  {
    number: "03",
    title: "Road transport",
    eyebrow: "First mile, last mile, and the cross-border haul in between.",
    sticker: "truck",
    meta: "1–6 days",
  },
  {
    number: "04",
    title: "Customs clearance",
    eyebrow: "Filing, classification, and refunds handled inside the plan.",
    sticker: "customs",
    meta: "Same-day filing",
  },
];

const approachSteps = [
  {
    number: "01",
    title: "Read the shipment",
    description:
      "Cargo, origin, destination, timing, and the details that quietly change a route.",
  },
  {
    number: "02",
    title: "Build the movement",
    description:
      "Mode, handoffs, customs prep, and delivery planned as one connected operation.",
  },
  {
    number: "03",
    title: "Keep it clear",
    description:
      "A straight view of what is moving, what is next, and who owns each handoff.",
  },
];

export default function Home() {
  // Beam glints travel on a slow, irregular rhythm so the hero never loops in
  // sync. The three positions stagger across the width; the delays are random
  // per load (lazily in state, so the randomness is stable across renders).
  const beamPositions = [0, 116, 232];
  const [beamDelays] = useState(() =>
    beamPositions.map(() => +(Math.random() * 9).toFixed(2))
  );

  return (
    <main id="top" className="mx-auto max-w-[1280px] bg-[#fbfdff] text-[#212121] shadow-[0_0_80px_rgba(8,34,58,0.08)]">
      <SiteHeader />

      <section className="hero-canvas relative isolate overflow-hidden px-4 pb-44 pt-32 sm:px-6 sm:pb-60 sm:pt-40">
        {/* Vertical beams, with sharp glints travelling down them. */}
        <div className="hero-beams pointer-events-none absolute inset-0" />
        {beamPositions.map((pos, i) => (
          <div
            key={i}
            className="beam-pulse pointer-events-none absolute inset-0"
            style={{ backgroundPositionX: `${pos}px`, animationDelay: `${beamDelays[i]}s` }}
          />
        ))}

        <div className="relative z-10 mx-auto max-w-[1140px]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="mx-auto flex max-w-2xl flex-col items-center text-center"
          >
            <span className="font-mono-ui inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-2 text-[9px] tracking-[0.11em] text-white sm:text-[10px]">
              <span className="size-1.5 rounded-full bg-[#bfe8ff] shadow-[0_0_0_4px_rgba(191,232,255,0.17)]" />
              FREIGHT FORWARDING / INDIA TO THE WORLD
            </span>
            <h1 className="font-display mt-7 text-[clamp(2.6rem,5.6vw,5.1rem)] font-bold leading-[1.02] tracking-[-0.03em] text-white [text-shadow:0_2px_18px_rgba(8,32,56,0.35)] sm:mt-8">
              Move freight across borders
              <span className="mt-2 block">
                with <span className="text-[#bfe8ff]">clarity,</span>{" "}
                <span className="inline-block rounded-lg bg-[#141414] px-[0.22em] pb-[0.1em] pt-[0.04em]">
                  not detours.
                </span>
              </span>
            </h1>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2.5 text-xs font-medium text-white sm:text-[13px]">
              {["Air freight", "Ocean freight", "Road transport", "Customs clearance"].map(
                (item) => (
                  <span key={item} className="flex items-center gap-1.5">
                    <Check className="size-3.5 text-[#bfe8ff]" strokeWidth={3} />
                    {item}
                  </span>
                )
              )}
            </div>
            <div className="mt-8">
              <SlideToWhatsApp variant="paper">Slide to plan a shipment</SlideToWhatsApp>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 36, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto mt-14 max-w-[820px] sm:mt-16"
          >
            <div className="card-shine relative aspect-[1.55] overflow-hidden rounded-2xl border border-white/40 bg-[#202020] p-2 shadow-[0_30px_60px_rgba(8,34,58,0.38)] sm:p-2.5">
              <div className="relative h-full overflow-hidden rounded-lg">
                <Image
                  src="/images/trifreight/container-terminal.jpg"
                  alt="Containers and a freight truck at a logistics terminal"
                  fill
                  preload
                  sizes="(max-width: 768px) 92vw, 820px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1c2c]/80 via-transparent to-transparent" />
                <div className="absolute inset-x-4 bottom-4 text-white sm:inset-x-5 sm:bottom-5">
                  <p className="font-mono-ui text-[9px] tracking-[0.12em] text-[#bfe8ff]">
                    FREIGHT LANE VIEW
                  </p>
                  <p className="font-display mt-1.5 text-lg font-semibold tracking-[-0.04em] sm:text-xl">
                    Every handoff, in view.
                  </p>
                </div>
              </div>
            </div>

            {/* Cut-out stickers instead of floating info boxes. */}
<Sticker
          name="globe"
          size={104}
          tilt={-9}
          bob
          bobDuration={8}
          decorative
          className="absolute -left-14 top-[34%] hidden lg:block xl:-left-24"
        />
        <Sticker
          name="mapPins"
          size={96}
          tilt={8}
          bob
          bobDuration={10}
          delay={1.3}
          decorative
          className="absolute -right-12 top-[14%] hidden lg:block xl:-right-20"
        />
        <Sticker
          name="boxes"
          size={84}
          tilt={-6}
          bob
          bobDuration={9}
          delay={2.2}
          decorative
          className="absolute -left-10 bottom-[8%] hidden xl:block xl:-left-20"
        />
        <Sticker
          name="routePin"
          size={78}
          tilt={10}
          bob
          bobDuration={11}
          delay={0.7}
          decorative
          className="absolute -right-8 bottom-[14%] hidden xl:block xl:-right-16"
        />
          </motion.div>
        </div>

        {/* Real clouds carrying the sky into the section below. */}
        <CloudBlend className="bottom-0 z-0 h-[13rem] sm:h-[20rem]" />
      </section>

      <Ticker
        items={[
          "AIR FREIGHT",
          "OCEAN FREIGHT",
          "ROAD TRANSPORT",
          "CUSTOMS CLEARANCE",
          "FCL & LCL",
          "CONSOLIDATION",
          "DOOR-TO-DOOR",
          "MUMBAI → DUBAI → ROTTERDAM → LONDON",
        ]}
      />

      <section className="bg-[#fbfdff] px-4 pb-20 pt-14 sm:px-6 sm:pb-28 sm:pt-20" id="services">
        <div className="mx-auto max-w-[1140px]">
          <div className="flex flex-col gap-5 border-b border-black/8 pb-8 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="font-mono-ui text-[10px] tracking-[0.12em] text-black/45">
                WHAT WE MOVE
              </span>
              <h2 className="font-display mt-4 max-w-xl text-[clamp(2.1rem,3.8vw,3.5rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-[#222222]">
                Freight is never one-size-fits-all.
              </h2>
            </div>
            <HandNote className="shrink-0 pb-1">pick your mode</HandNote>
          </div>

          <div className="mt-8 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.number}
                href="/services"
                className="group relative flex flex-col rounded-xl border border-black/8 bg-white p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-black/20 hover:shadow-[0_22px_40px_rgba(27,54,77,0.13)]"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-[68px] items-center">
                    <Sticker
                      name={service.sticker}
                      size={68}
                      tilt={-4}
                      decorative
                      className="transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110"
                    />
                  </span>
                  <span className="font-mono-ui text-[10px] tracking-[0.1em] text-black/32">
                    {service.number}
                  </span>
                </div>
                <h3 className="font-display mt-5 text-xl font-semibold tracking-[-0.04em] text-[#222222]">
                  {service.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-black/55">
                  {service.eyebrow}
                </p>
                <div className="mt-auto flex items-center justify-between border-t border-black/8 pt-5">
                  <span className="font-mono-ui text-[9px] tracking-[0.1em] text-[#6095c2]">
                    {service.meta}
                  </span>
                  <ArrowUpRight className="size-4 text-black/28 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#212121]" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Network — white, atmospheric, with the map itself as the background. */}
      <section
        id="network"
        className="relative isolate overflow-hidden bg-[#fbfdff] px-4 pb-32 pt-20 sm:px-6 sm:pb-44 sm:pt-28"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[70%] bg-[radial-gradient(ellipse_60%_70%_at_50%_30%,rgba(191,232,255,0.4),transparent_70%)]" />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <WorldMap
            theme="light"
            showLabels={false}
            className="w-[150%] max-w-none opacity-70 sm:w-full sm:max-w-[1400px]"
          />
        </div>

        <div className="relative mx-auto max-w-[760px] text-center">
          <span className="font-mono-ui text-[10px] tracking-[0.12em] text-[#4d7fa8]">
            ONE CONNECTED OPERATION
          </span>
          <h2 className="font-display mt-4 text-[clamp(2.1rem,3.8vw,3.5rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-[#222222]">
            A freight plan is more than a booking.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-black/60">
            It is the route, the paperwork, the port, the timing, and the person
            accountable when the plan needs to change.
          </p>

          <div className="mt-8 flex justify-center">
            <SlideToWhatsApp variant="ink">Slide to map your lane</SlideToWhatsApp>
          </div>

          {/* Was three big boxes — now a quiet line under the CTA. */}
          <div className="mt-10 inline-flex flex-wrap items-center justify-center gap-x-5 gap-y-2 rounded-full border border-black/8 bg-white/75 px-6 py-3 backdrop-blur-sm">
            {[
              ["Mode", "air, ocean, road"],
              ["Border", "customs in the plan"],
              ["Handoff", "a named next move"],
            ].map(([term, detail], i) => (
              <span key={term} className="flex items-center gap-5">
                {i > 0 && <span className="hidden h-3 w-px bg-black/12 sm:block" />}
                <span className="whitespace-nowrap text-[11px] text-black/55">
                  <span className="font-mono-ui text-[9px] tracking-[0.12em] text-[#4d7fa8]">
                    {term}
                  </span>
                  <span className="ml-1.5">{detail}</span>
                </span>
              </span>
            ))}
          </div>
        </div>

      </section>

      <section id="approach" className="bg-[#ebeff3] px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-[1140px]">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div className="relative min-h-[340px] overflow-hidden rounded-xl bg-[#6095c2] lg:min-h-[480px]">
              <Image
                src="/images/trifreight/road-freight.jpg"
                alt="Freight truck travelling along a road"
                fill
                sizes="(max-width: 1024px) 92vw, 430px"
                className="object-cover object-[32%_center]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d2233]/80 via-transparent to-transparent" />
              <div className="absolute inset-x-5 bottom-5">
                <p className="font-display max-w-[15ch] text-xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-2xl">
                  The movement matters more than the mode.
                </p>
              </div>
              <Sticker
                name="crane"
                size={92}
                tilt={-7}
                decorative
                className="absolute -right-4 -top-4 hidden sm:block"
              />
            </div>

            <div className="flex flex-col justify-center">
              <span className="font-mono-ui text-[10px] tracking-[0.12em] text-black/45">
                HOW WE THINK
              </span>
              <h2 className="font-display mt-4 max-w-xl text-[clamp(2.1rem,3.8vw,3.5rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-[#222222]">
                Less noise. More forward motion.
              </h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-black/60">
                Freight is full of moving parts. Our job is to turn those parts into a
                clear plan your team can follow.
              </p>

              <div className="mt-8 divide-y divide-black/8 border-y border-black/8">
                {approachSteps.map((step) => (
                  <article
                    key={step.number}
                    className="grid gap-2 py-5 sm:grid-cols-[44px_1fr] sm:gap-5"
                  >
                    <span className="font-mono-ui pt-1 text-[10px] tracking-[0.1em] text-[#6095c2]">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold tracking-[-0.04em] text-[#222222]">
                        {step.title}
                      </h3>
                      <p className="mt-1.5 max-w-md text-[13px] leading-relaxed text-black/55">
                        {step.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden bg-[#bfe8ff] px-4 py-20 sm:px-6 sm:py-28">
        <div className="absolute -right-40 top-0 size-[30rem] rounded-full border-[44px] border-white/20" />
        <div className="relative mx-auto grid max-w-[1140px] gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14">
          <div>
            <span className="font-mono-ui text-[10px] tracking-[0.12em] text-black/50">
              TRIFREIGHT TRADE SOLUTIONS PRIVATE LIMITED
            </span>
            <h2 className="font-display mt-4 text-[clamp(2.3rem,4.6vw,4.4rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-[#222222]">
              Move the next one{" "}
              <span className="inline-block rounded-lg bg-white px-[0.2em] pb-[0.08em] pt-[0.03em]">
                with us.
              </span>
            </h2>
            <div className="mt-6 flex items-center gap-4">
              <Sticker name="handshake" size={86} tilt={-5} decorative />
              <HandNote color="#1f5f93" flip className="pb-2">
                one desk, start to finish
              </HandNote>
            </div>
          </div>
          <div className="rounded-xl border border-black/8 bg-white/75 p-6 backdrop-blur-sm sm:p-7">
            <p className="font-display text-xl font-semibold leading-tight tracking-[-0.04em]">
              Your route starts with a conversation.
            </p>
            <p className="mt-3 text-[13px] leading-relaxed text-black/60">
              Tell us the lane, the cargo, and the deadline. We come back with a plan —
              not a quote-shaped question mark.
            </p>
            <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-black/8 pt-5">
              {[
                ["Reply window", "Same working day"],
                ["Covers", "Air, ocean, road, customs"],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="font-mono-ui text-[9px] tracking-[0.12em] text-black/45">
                    {label}
                  </dt>
                  <dd className="mt-1.5 text-[13px] font-semibold leading-snug text-[#222222]">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <SlideToWhatsApp variant="ink">Slide to chat now</SlideToWhatsApp>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-1.5 text-xs font-semibold text-[#1f5f93]"
              >
                <span className="underline decoration-[#1f5f93]/30 underline-offset-4 transition-colors group-hover:decoration-[#1f5f93]">
                  or send the details
                </span>
                <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
