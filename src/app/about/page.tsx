import Image from "next/image";
import { Check, Globe2, FileCheck2, Network } from "lucide-react";
import type { Metadata } from "next";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import PageHero from "@/components/ui/PageHero";
import SectionTag from "@/components/ui/SectionTag";
import Reveal from "@/components/ui/Reveal";
import Stat from "@/components/ui/Stat";
import Button from "@/components/ui/Button";
import ArrowLink from "@/components/ui/ArrowLink";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Trifreight Trade Solutions runs air, ocean, road, and customs as one connected freight operation — built on a decade of border-clearance expertise.",
};

const values = [
  {
    Icon: Globe2,
    title: "Clarity of handoffs",
    description:
      "You always know what is moving, what is next, and who owns it. No black-box freight, no calls that end in 'we will check'.",
  },
  {
    Icon: FileCheck2,
    title: "Compliance you can trust",
    description:
      "A single documentation slip can hold cargo for weeks. Our filings are built on real customs experience — checked, classified, and filed before they borrow trouble.",
  },
  {
    Icon: Network,
    title: "A network that shows up",
    description:
      "Lanes, agents, and terminals we actually work with — not a logo wall. The network exists to move your cargo, not to decorate the website.",
  },
];

const heritage = [
  "Border clearance you can set a watch to",
  "Documentation filed right the first time",
  "One operator accountable from booking to delivery",
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-[1280px] bg-[#fbfdff] text-[#212121] shadow-[0_0_80px_rgba(8,34,58,0.08)]">
      <SiteHeader />

      <PageHero
        eyebrow="About Trifreight"
        title={
          <>
            Cargo first.{" "}
            <span className="inline-block rounded-lg bg-[#bfe8ff] px-[0.12em] pb-[0.06em] pt-[0.02em]">
              Paperwork follows.
            </span>
          </>
        }
        lead="Trifreight Trade Solutions is a freight-forwarding company built on a decade of customs and border expertise — now running air, ocean, and road as one movement."
      />

      <section className="px-4 pb-24 sm:px-6 sm:pb-32">
        <div className="mx-auto max-w-[1140px]">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div>
                <SectionTag className="text-[#6095c2]">What we are</SectionTag>
                <h2 className="font-display mt-5 max-w-xl text-[clamp(2.1rem,3.8vw,3.5rem)] font-semibold leading-[1.02] tracking-[-0.035em]">
                  One plan from pickup to delivery — no matter how many borders are in between.
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex flex-col gap-6 text-base leading-relaxed text-black/66 sm:text-lg">
                <p>
                  Most supply chains are stitched together from separate vendors: one booking for air, another for a truck, a customs broker somewhere in the middle. When something changes — and it always changes — the thread is lost.
                </p>
                <p>
                  Trifreight holds that thread. Air, ocean, road, and customs are planned as one connected operation, with one operator accountable from the first quote to the final proof of delivery.
                </p>
                <ul className="mt-4 flex flex-col gap-3">
                  {heritage.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-medium">
                      <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[#bfe8ff] text-[#212121]">
                        <Check className="size-3.5" strokeWidth={3} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#222222] px-4 py-24 text-white sm:px-6 sm:py-32">
        <div className="grid-fade absolute inset-0 opacity-50" />
        <div className="relative mx-auto max-w-[1140px]">
          <SectionTag className="text-[#bfe8ff]">By the numbers</SectionTag>
          <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <Stat value={5000} suffix="+" label="Shipments coordinated" />
            <Stat value={100} suffix="+" label="Global partners" />
            <Stat value={98} suffix="%" label="On-time clearances" />
            <Stat value={4} label="Freight modes, one plan" />
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 sm:py-32">
        <div className="mx-auto max-w-[1140px]">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div className="relative min-h-[360px] overflow-hidden rounded-xl sm:min-h-[520px]">
              <Image
                src="/images/trifreight/container-terminal.jpg"
                alt="Containers lined up at a freight terminal"
                fill
                sizes="(max-width: 1024px) 92vw, 470px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#132b3e]/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-lg border border-white/20 bg-white/12 p-4 text-white backdrop-blur-md">
                <p className="font-mono-ui text-[9px] tracking-[0.12em] text-[#bfe8ff]">THE WALLOF ORIGIN</p>
                <p className="font-display mt-3 text-2xl font-semibold leading-[0.93] tracking-[-0.055em]">
                  Every shipment is somebody&apos;s product, deadline, and livelihood.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <SectionTag className="text-[#6095c2]">Where we come from</SectionTag>
              <h2 className="font-display mt-5 max-w-2xl text-[clamp(2.1rem,3.8vw,3.5rem)] font-semibold leading-[1.02] tracking-[-0.035em]">
                Built on controls work, reframed for a forwarder.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-black/64 sm:text-lg">
                Our founding team spent years inside customs and trade-compliance operations — IEC and EPCG licences, duty drawback, IGST refunds, notices, appeals, and the day-to-day of keeping cargo unstuck at the border.
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-black/64 sm:text-lg">
                Trifreight Trade Solutions Private Limited turns that control-room experience into a full freight-forwarding operation. The mode can be air, ocean, or road. The standard is the same: the border is part of the plan, not apart from it.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  ["01", "Customs", "Filing & duty strength"],
                  ["02", "Freight", "Air / ocean / road"],
                  ["03", "Clarity", "One accountable plan"],
                ].map(([number, title, detail]) => (
                  <div key={number} className="rounded-lg border border-black/8 bg-white p-4">
                    <p className="font-mono-ui text-[9px] tracking-[0.12em] text-[#6095c2]">{number}</p>
                    <p className="font-display mt-5 text-xl font-semibold tracking-[-0.05em]">{title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-black/52">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 sm:pb-32">
        <div className="mx-auto max-w-[1140px]">
          <div className="text-center">
            <SectionTag className="justify-center text-[#6095c2]">Our core commitments</SectionTag>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.Icon;
              return (
                <Reveal key={value.title} delay={index * 0.08}>
                  <article className="flex h-full flex-col gap-5 rounded-xl border border-black/8 bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(27,54,77,0.1)]">
                    <span className="grid size-11 place-items-center rounded-lg bg-[#edf6fb] text-[#6095c2]">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="font-display text-2xl font-semibold tracking-[-0.055em]">
                      {value.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-black/60">
                      {value.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#bfe8ff] px-4 py-24 sm:px-6 sm:py-28">
        <div className="absolute -right-40 top-0 size-[30rem] rounded-full border-[44px] border-white/20" />
        <div className="relative mx-auto flex max-w-[1140px] flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <SectionTag className="text-black/50">The next shipment</SectionTag>
            <h2 className="font-display mt-5 max-w-3xl text-[clamp(2.3rem,4.6vw,4.4rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-[#212121]">
              Bring us a route. We will bring the plan.
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <Button href="/contact" variant="ink">
              Get a freight plan
            </Button>
            <ArrowLink href="/contact" className="text-[#212121]">
              Talk to operations
            </ArrowLink>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}