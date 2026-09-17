import Image from "next/image";
import { Cog, Cpu, Factory, Activity, ShoppingBag, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import PageHero from "@/components/ui/PageHero";
import SectionTag from "@/components/ui/SectionTag";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Freight operations tuned for electronics, pharma, automotive, e-commerce, and project cargo — built around how each sector actually ships.",
};

const sectors = [
  {
    number: "01",
    title: "Technology & Electronics",
    subtitle: "High-value components & finished goods",
    image: "/images/trifreight/air-freight.jpg",
    alt: "Freight aircraft on the tarmac",
    Icon: Cpu,
    challenge:
      "Tight classification audits, high declared values, and production lines that cannot survive a two-week customs hold.",
    solution:
      "Pre-filed Bills of Entry and priority air uplift keep components moving from gate to production floor in hours, not weeks.",
    benefits: [
      "99.8% classification audit pass rate",
      "High-security handling for components",
      "Gate-to-port priority clearances",
    ],
  },
  {
    number: "02",
    title: "Pharmaceuticals & Healthcare",
    subtitle: "Cold-chain logistics & life science assets",
    image: "/images/trifreight/container-terminal.jpg",
    alt: "Shipping containers at a terminal",
    Icon: Activity,
    challenge:
      "Temperature deviations, health-authority approvals, and expiry-date windows that make a day of delay feel like a loss.",
    solution:
      "Temperature-controlled bonded zones and fast-track approvals so samples, inspections, and releases stay inside the cold chain.",
    benefits: [
      "Active cold-chain logistics monitoring",
      "Priority CFS unloading and clearance",
      "Authorisation coordination kept in the plan",
    ],
  },
  {
    number: "03",
    title: "Automotive & Engineering",
    subtitle: "Just-in-time part shipments",
    image: "/images/trifreight/road-freight.jpg",
    alt: "Freight truck moving along a road",
    Icon: Factory,
    challenge:
      "JIT assembly lines that stop the moment a container misses its slot, plus thousands of micro HS codes to keep straight.",
    solution:
      "Bonded warehousing and manifest monitoring so releases sync exactly with line-side delivery — not a day after.",
    benefits: [
      "Multi-item tariff assessment",
      "Bonded, line-side delivery timing",
      "24/7 operations coordination",
    ],
  },
  {
    number: "04",
    title: "E-commerce & Retail",
    subtitle: "High-volume B2C & B2B dispatch",
    image: "/images/trifreight/ocean-freight.jpg",
    alt: "Container vessel crossing open water",
    Icon: ShoppingBag,
    challenge:
      "Peak-season rate swings, split entries across multiple ports, and returns that consume the margin of every good sale.",
    solution:
      "Weekly LCL consolidation and bonded deconsolidation hubs turn fragmented orders into one predictable plan.",
    benefits: [
      "Consolidated LCL/FCL structures",
      "Multi-destination clearances",
      "Bonded de-consolidation hubs",
    ],
  },
  {
    number: "05",
    title: "Industrial Machinery & Metals",
    subtitle: "Over-dimensional cargo & project logistics",
    image: "/images/trifreight/ocean-freight.jpg",
    alt: "Heavy cargo vessel on the water",
    Icon: Cog,
    challenge:
      "Oversized turbines and machinery need special containers, escorts, and heavy-lift appraisals nobody quotes up front.",
    solution:
      "End-to-end project planning: flat-rack and open-top allocations, heavy-axle haulage, and multi-modal routing as one job.",
    benefits: [
      "ODC & flat-rack / open-top space",
      "Heavy-lift appraisal coordination",
      "End-to-end multi-modal routing",
    ],
  },
];

export default function IndustriesPage() {
  return (
    <main className="mx-auto max-w-[1280px] bg-[#fbfdff] text-[#212121] shadow-[0_0_80px_rgba(8,34,58,0.08)]">
      <SiteHeader />

      <PageHero
        eyebrow="Industries"
        title={
          <>
            Built for how{" "}
            <span className="inline-block rounded-lg bg-[#bfe8ff] px-[0.12em] pb-[0.06em] pt-[0.02em]">
              your sector moves.
            </span>
          </>
        }
        lead="Every sector has its own tariff schedules, regulators, and rhythms. We build the freight plan around those — not the other way around."
      />

      <section className="px-4 pb-24 sm:px-6 sm:pb-32">
        <div className="mx-auto flex max-w-[1140px] flex-col gap-20 lg:gap-28">
          {sectors.map((sector, index) => {
            const Icon = sector.Icon;
            const reversed = index % 2 === 1;
            return (
              <Reveal key={sector.number}>
                <div className="grid gap-8 lg:grid-cols-[0.55fr_0.45fr] lg:items-center lg:gap-16">
                  <div
                    className={`relative min-h-[300px] overflow-hidden rounded-xl sm:min-h-[480px] ${
                      reversed ? "lg:order-2" : ""
                    }`}
                  >
                    <Image
                      src={sector.image}
                      alt={sector.alt}
                      fill
                      sizes="(max-width: 1024px) 92vw, 620px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#132b3e]/70 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                      <div>
                        <p className="font-mono-ui text-[9px] tracking-[0.12em] text-[#bfe8ff]">
                          SECTOR / {sector.number}
                        </p>
                        <p className="font-display mt-2 max-w-xs text-2xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-3xl">
                          {sector.title}
                        </p>
                      </div>
                      <span className="grid size-12 shrink-0 place-items-center rounded-lg border border-white/20 bg-white/12 text-[#bfe8ff] backdrop-blur">
                        <Icon className="size-5" />
                      </span>
                    </div>
                  </div>

                  <div className={reversed ? "lg:order-1" : ""}>
                    <p className="font-mono-ui text-[10px] tracking-[0.12em] text-[#6095c2]">
                      {sector.subtitle}
                    </p>
                    <h2 className="font-display mt-3 text-[clamp(2.1rem,3.8vw,3.5rem)] font-semibold leading-[1.02] tracking-[-0.035em]">
                      {sector.title}
                    </h2>

                    <div className="mt-7 grid gap-6 sm:grid-cols-2">
                      <div>
                        <p className="font-mono-ui text-[9px] tracking-[0.12em] text-black/42">CHALLENGE</p>
                        <p className="mt-3 text-sm leading-relaxed text-black/62">
                          {sector.challenge}
                        </p>
                      </div>
                      <div>
                        <p className="font-mono-ui text-[9px] tracking-[0.12em] text-black/42">TRIFREIGHT PLAN</p>
                        <p className="mt-3 text-sm leading-relaxed text-black/62">
                          {sector.solution}
                        </p>
                      </div>
                    </div>

                    <ul className="mt-7 flex flex-col gap-2.5 border-t border-black/8 pt-6">
                      {sector.benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="flex items-center gap-3 text-sm font-medium"
                        >
                          <ArrowUpRight className="size-4 shrink-0 text-[#6095c2]" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#bfe8ff] px-4 py-24 sm:px-6 sm:py-28">
        <div className="absolute -right-40 top-0 size-[30rem] rounded-full border-[44px] border-white/20" />
        <div className="relative mx-auto flex max-w-[1140px] flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <SectionTag className="text-black/50">Not on the list?</SectionTag>
            <h2 className="font-display mt-5 max-w-3xl text-[clamp(2.3rem,4.6vw,4.4rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-[#212121]">
              Strange cargo is our favourite kind.
            </h2>
          </div>
          <Button href="/contact" variant="ink" className="shrink-0">
            Plan an unusual shipment <ArrowUpRight className="size-4" />
          </Button>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}