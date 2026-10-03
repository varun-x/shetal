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
import Sticker from "@/components/ui/Sticker";
import HandNote from "@/components/ui/HandNote";
import { serviceCategories } from "@/components/services/data";

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
    <main id="top" className="overflow-x-clip bg-[#fbfdff] text-[#212121]">
      <SiteHeader />

      <section className="hero-canvas relative isolate flex min-h-svh flex-col justify-center overflow-hidden px-5 pb-8 pt-24 sm:px-8 sm:pb-10 sm:pt-28 lg:px-12 xl:px-16">
        {/* Vertical beams, with sharp glints travelling down them. */}
        <div className="hero-beams pointer-events-none absolute inset-0" />
        {beamPositions.map((pos, i) => (
          <div
            key={i}
            className="beam-pulse pointer-events-none absolute inset-0"
            style={{ backgroundPositionX: `${pos}px`, animationDelay: `${beamDelays[i]}s` }}
          />
        ))}

        <div className="relative z-10 mx-auto w-full max-w-[1600px]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="mx-auto flex w-full max-w-6xl flex-col items-center text-center"
          >
            <span className="font-mono-ui inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-2 text-[9px] tracking-[0.11em] text-white sm:text-[10px]">
              <span className="size-1.5 rounded-full bg-[#bfe8ff] shadow-[0_0_0_4px_rgba(191,232,255,0.17)]" />
              FREIGHT FORWARDING / INDIA TO THE WORLD
            </span>
            <h1 className="font-display mt-5 text-[clamp(2.2rem,min(5.2vw,8svh),5.4rem)] font-bold leading-[1.05] tracking-[-0.03em] text-white [text-shadow:0_2px_18px_rgba(8,32,56,0.35)] sm:mt-6">
              Move freight across borders
              <span className="mt-2 block">
                with <span className="text-[#bfe8ff]">clarity,</span>{" "}
                <span className="inline-block rounded-lg bg-[#141414] px-[0.22em] pb-[0.1em] pt-[0.04em]">
                  not detours.
                </span>
              </span>
            </h1>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm font-medium text-white">
              {["Air freight", "Ocean freight", "Road transport", "Customs clearance"].map(
                (item) => (
                  <span key={item} className="flex items-center gap-1.5">
                    <Check className="size-3.5 text-[#bfe8ff]" strokeWidth={3} />
                    {item}
                  </span>
                )
              )}
            </div>
            <div className="mt-6 w-full sm:w-auto">
              <SlideToWhatsApp>Slide to plan a shipment</SlideToWhatsApp>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 36, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto mt-6 w-full max-w-[1100px] sm:mt-8"
          >
            <div className="card-shine relative h-[clamp(10rem,min(30svh,40vw),30rem)] overflow-hidden rounded-2xl border border-white/40 bg-[#202020] p-2 shadow-[0_30px_60px_rgba(8,34,58,0.38)] sm:p-2.5">
              <div className="relative h-full overflow-hidden rounded-lg">
                <Image
                  src="/images/trifreight/container-terminal.jpg"
                  alt="Containers and a freight truck at a logistics terminal"
                  fill
                  preload
                  sizes="(max-width: 1100px) 92vw, 1100px"
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
            <div className="hidden lg:contents">
<Sticker
          name="globe"
          size={104}
          tilt={-9}
          bob
          bobDuration={8}
          decorative
          className="absolute -left-14 top-[34%] xl:-left-24"
        />
        <Sticker
          name="mapPins"
          size={96}
          tilt={8}
          bob
          bobDuration={10}
          delay={1.3}
          decorative
          className="absolute -right-12 top-[14%] xl:-right-20"
        />
        <Sticker
          name="boxes"
          size={84}
          tilt={-6}
          bob
          bobDuration={9}
          delay={2.2}
          decorative
          className="absolute -left-10 bottom-[8%] max-xl:invisible xl:-left-20"
        />
        <Sticker
          name="routePin"
          size={78}
          tilt={10}
          bob
          bobDuration={11}
          delay={0.7}
          decorative
          className="absolute -right-8 bottom-[14%] max-xl:invisible xl:-right-16"
        />
            </div>
          </motion.div>
        </div>

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
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-col gap-5 border-b border-black/8 pb-8 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="font-mono-ui text-xs tracking-[0.12em] text-black/45">
                WHAT WE DO
              </span>
              <h2 className="font-display mt-4 max-w-xl text-[clamp(2.3rem,4.4vw,4.4rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-[#222222]">
                Every trade service, one desk.
              </h2>
            </div>
            <HandNote className="shrink-0 pb-1">pick a service</HandNote>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {serviceCategories.map((service) => (
              <Link
                key={service.id}
                href={`/services#${service.id}`}
                className="group relative flex flex-col rounded-xl border border-black/8 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-black/20 hover:shadow-[0_22px_40px_rgba(27,54,77,0.13)]"
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
                <p className="mt-2 text-sm leading-relaxed lg:text-[15px] text-black/55">
                  {service.short}
                </p>
                <div className="mt-auto flex items-center justify-between border-t border-black/8 pt-5">
                  <span className="font-mono-ui text-[9px] tracking-[0.1em] text-[#6095c2]">
                    View details
                  </span>
                  <ArrowUpRight className="size-4 text-black/28 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#212121]" />
                </div>
              </Link>
            ))}
            <Link
              href="/contact"
              className="group flex flex-col justify-between rounded-xl bg-[#bfe8ff] p-6 text-[#212121] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_40px_rgba(27,54,77,0.18)]"
            >
              <span className="font-mono-ui text-[10px] tracking-[0.1em]">MOST AFFORDABLE</span>
              <p className="font-display mt-8 text-xl font-semibold tracking-[-0.04em]">
                Not sure which service fits? Get a fixed-fee quote.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold">
                Talk to us <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Network: copy first, map below it in normal flow so nothing overlaps. */}
      <section
        id="network"
        className="relative isolate overflow-hidden bg-[#fbfdff] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 xl:px-16"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[60%] bg-[radial-gradient(ellipse_60%_70%_at_50%_30%,rgba(191,232,255,0.4),transparent_70%)]" />

        <div className="relative mx-auto max-w-3xl text-center">
          <span className="font-mono-ui text-xs tracking-[0.12em] text-[#4d7fa8]">
            ONE CONNECTED OPERATION
          </span>
          <h2 className="font-display mt-4 text-[clamp(2.3rem,4.4vw,4.4rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-[#222222]">
            A freight plan is more than a booking.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-black/60 lg:text-lg">
            It is the route, the paperwork, the port, the timing, and the person
            accountable when the plan needs to change.
          </p>

          <div className="mt-8 flex justify-center">
            <SlideToWhatsApp>Slide to map your lane</SlideToWhatsApp>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 rounded-3xl border border-black/8 bg-white/80 px-6 py-3.5 sm:rounded-full">
            {[
              ["Mode", "air, ocean, road"],
              ["Border", "customs in the plan"],
              ["Handoff", "a named next move"],
            ].map(([term, detail]) => (
              <span key={term} className="text-sm text-black/60">
                <span className="font-mono-ui text-[11px] tracking-[0.12em] text-[#4d7fa8]">
                  {term}
                </span>
                <span className="ml-2">{detail}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="pointer-events-none relative mx-auto mt-12 w-full max-w-[1400px] sm:mt-16" aria-hidden="true">
          <WorldMap theme="light" showLabels={false} className="h-auto w-full opacity-80" />
        </div>
      </section>

      <section id="approach" className="bg-[#ebeff3] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 xl:px-16">
        <div className="mx-auto max-w-[1600px]">
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
                className="absolute right-3 top-3 hidden sm:block"
              />
            </div>

            <div className="flex flex-col justify-center">
              <span className="font-mono-ui text-xs tracking-[0.12em] text-black/45">
                HOW WE THINK
              </span>
              <h2 className="font-display mt-4 max-w-xl text-[clamp(2.3rem,4.4vw,4.4rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-[#222222]">
                Less noise. More forward motion.
              </h2>
              <p className="mt-4 max-w-lg text-base leading-relaxed lg:text-lg text-black/60">
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
                      <p className="mt-1.5 max-w-md text-sm leading-relaxed lg:text-[15px] text-black/55">
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

      <section id="contact" className="relative overflow-hidden bg-[#bfe8ff] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 xl:px-16">
        <div className="absolute -right-40 top-0 size-[30rem] rounded-full border-[44px] border-white/20" />
        <div className="relative mx-auto grid max-w-[1600px] gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14">
          <div>
            <span className="font-mono-ui text-xs tracking-[0.12em] text-black/50">
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
            <p className="mt-3 text-sm leading-relaxed lg:text-[15px] text-black/60">
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
              <SlideToWhatsApp>Slide to chat now</SlideToWhatsApp>
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
