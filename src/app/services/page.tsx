import Image from "next/image";
import {
  ArrowUpRight,
  FileCheck2,
  Plane,
  Ship,
  Truck,
} from "lucide-react";
import type { Metadata } from "next";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import PageHero from "@/components/ui/PageHero";
import SectionTag from "@/components/ui/SectionTag";
import Reveal from "@/components/ui/Reveal";
import ArrowLink from "@/components/ui/ArrowLink";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Freight Forwarding Services",
  description:
    "Air freight, ocean freight, road transport, and customs clearance — one connected freight operation for cargo that cannot wait.",
};

const modes = [
  {
    number: "01",
    title: "Air freight",
    eyebrow: "For time-critical cargo",
    description:
      "A clear airside plan for urgent, high-value, and carefully timed shipments — space secured, priority uplift arranged, and the paperwork flown ahead of the cargo.",
    image: "/images/trifreight/air-freight.jpg",
    alt: "Aircraft on a runway for air freight",
    Icon: Plane,
    tone: "text-[#6095c2] bg-[#edf6fb] border-black/8",
    services: [
      "Space booking & rate negotiation",
      "Export / import documentation",
      "Consolidation & priority uplift",
      "Gateway handling & transshipment",
      "Cold-chain & temp-controlled uplift",
      "Door-to-door express",
    ],
  },
  {
    number: "02",
    title: "Ocean freight",
    eyebrow: "For global scale",
    description:
      "FCL and LCL movements planned around the right sailing, the right port, and the right delivery window — one consolidated plan instead of a stack of quotes.",
    image: "/images/trifreight/ocean-freight.jpg",
    alt: "Cargo ship moving through open water",
    Icon: Ship,
    tone: "text-[#222222] bg-[#bfe8ff] border-black/8",
    services: [
      "FCL & LCL movements",
      "Weekly consolidation & CFS deconsolidation",
      "Sailing planning & re-routing",
      "Port & terminal coordination",
      "Reefer, ODC & project containers",
      "Duty-refund sync on shipment close",
    ],
  },
  {
    number: "03",
    title: "Road transport",
    eyebrow: "For the miles in between",
    description:
      "Reliable first-mile, last-mile, and cross-border road coordination for freight that cannot stall between the port and the factory floor.",
    image: "/images/trifreight/road-freight.jpg",
    alt: "Freight truck on an open road",
    Icon: Truck,
    tone: "text-[#222222] bg-[#ebeff3] border-black/8",
    services: [
      "First-mile & last-mile",
      "Cross-border haulage (SAARC lanes)",
      "Bonded trucking & ICD coordination",
      "Over-dimensional cargo (ODC) escorts",
      "Live tracking & POD custody",
    ],
  },
  {
    number: "04",
    title: "Customs clearance",
    eyebrow: "For confident border crossings",
    description:
      "Documentation, classification, and customs coordination that keeps the route moving — and keeps duty, refunds, and compliance from becoming surprises.",
    image: "/images/trifreight/container-terminal.jpg",
    alt: "Shipping containers at a freight terminal",
    Icon: FileCheck2,
    tone: "text-[#212121] bg-[#bfe8ff] border-black/8",
    services: [
      "Bill of Entry & shipping bill filing",
      "IEC, EPCG, Advance Authorisation, DFIA",
      "FTA / CEPA / SAFTA duty structuring",
      "Duty drawback & IGST refunds",
      "Notices, appeals & audit representation",
      "Bonded warehousing & HAZMAT approvals",
    ],
  },
];

const process = [
  {
    number: "01",
    title: "Read the shipment",
    description:
      "Cargo, origin, destination, timing, and the details that can quietly change a route.",
  },
  {
    number: "02",
    title: "Build the movement",
    description:
      "Mode, handoffs, customs preparation, and delivery planned as one connected operation.",
  },
  {
    number: "03",
    title: "Keep it clear",
    description:
      "A straightforward view of what is moving, what is next, and who owns each handoff.",
  },
];

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-[1280px] bg-[#fbfdff] text-[#212121] shadow-[0_0_80px_rgba(8,34,58,0.08)]">
      <SiteHeader />

      <PageHero
        eyebrow="Services"
        title={
          <>
            Everything freight touches,{" "}
            <span className="inline-block rounded-lg bg-[#bfe8ff] px-[0.12em] pb-[0.06em] pt-[0.02em]">
              in one plan.
            </span>
          </>
        }
        lead="We run air, ocean, road, and customs as a single movement — not four separate quotes stacked on top of each other."
      />

      <section className="px-4 pb-24 sm:px-6 sm:pb-32">
        <div className="mx-auto flex max-w-[1140px] flex-col gap-8 lg:gap-10">
          {modes.map((mode, index) => {
            const Icon = mode.Icon;
            return (
              <Reveal key={mode.number} delay={index * 0.05}>
                <article className="grid overflow-hidden rounded-xl border border-black/8 bg-white shadow-[0_20px_50px_rgba(27,54,77,0.08)] lg:grid-cols-[0.58fr_0.42fr]">
                  <div className="flex flex-col p-6 sm:p-10 lg:p-12">
                    <div className="flex items-start justify-between">
                      <span className="font-mono-ui text-[10px] tracking-[0.12em] text-black/42">
                        MODE / {mode.number}
                      </span>
                      <span className={`grid size-11 place-items-center rounded-lg border ${mode.tone}`}>
                        <Icon className="size-5" />
                      </span>
                    </div>

                    <div className="mt-auto pt-10">
                      <p className="text-xs font-semibold tracking-[-0.01em] text-black/48">
                        {mode.eyebrow}
                      </p>
                      <h2 className="font-display mt-2 text-[clamp(2.1rem,3.8vw,3.5rem)] font-semibold leading-[1.02] tracking-[-0.035em]">
                        {mode.title}
                      </h2>
                      <p className="mt-5 max-w-lg text-sm leading-relaxed text-black/62 sm:text-base">
                        {mode.description}
                      </p>

                      <ul className="mt-8 grid gap-2.5 sm:grid-cols-2">
                        {mode.services.map((item) => (
                          <li
                            key={item}
                            className="font-mono-ui flex items-center gap-2.5 rounded-lg border border-black/8 bg-white px-3 py-2.5 text-[10px] tracking-[0.06em] text-black/62"
                          >
                            <span className="size-1.5 shrink-0 rounded-full bg-[#6095c2]" />
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-9">
                        <ArrowLink href="/contact">
                          Discuss this movement
                        </ArrowLink>
                      </div>
                    </div>
                  </div>

                  <div className="relative min-h-[300px] lg:min-h-full">
                    <Image
                      src={mode.image}
                      alt={mode.alt}
                      fill
                      sizes="(max-width: 1024px) 92vw, 520px"
                      className="object-cover transition-transform duration-700 lg:hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/38 via-transparent to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-lg border border-white/20 bg-white/12 px-4 py-3 text-white backdrop-blur-md">
                      <span className="font-display text-lg font-semibold tracking-[-0.05em]">
                        Mode {mode.number}
                      </span>
                      <ArrowUpRight className="size-4 text-[#bfe8ff]" />
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#222222] px-4 py-24 text-white sm:px-6 sm:py-32">
        <div className="grid-fade absolute inset-0 opacity-60" />
        <div className="relative mx-auto max-w-[1140px]">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
            <div>
              <SectionTag className="text-[#bfe8ff]">How a shipment moves</SectionTag>
              <h2 className="font-display mt-5 max-w-xl text-[clamp(2.2rem,4vw,3.6rem)] font-semibold leading-[1.02] tracking-[-0.04em]">
                Three decisions stand between cargo and chaos.
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-white/62">
                Everything else is procedure. Get these three right and the shipment mostly moves itself.
              </p>
              <div className="mt-9">
                <Button href="/contact" variant="powder">
                  Start with a plan
                </Button>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="divide-y divide-white/10 border-y border-white/10">
                {process.map((step) => (
                  <article
                    key={step.number}
                    className="grid gap-4 py-7 sm:grid-cols-[52px_1fr] sm:items-center sm:gap-8"
                  >
                    <span className="font-mono-ui text-[10px] tracking-[0.12em] text-[#bfe8ff]">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl font-semibold tracking-[-0.055em]">
                        {step.title}
                      </h3>
                      <p className="mt-2 max-w-md text-sm leading-relaxed text-white/54">
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

      <section className="relative overflow-hidden bg-[#bfe8ff] px-4 py-24 sm:px-6 sm:py-28">
        <div className="absolute -left-40 top-0 size-[30rem] rounded-full border-[44px] border-white/20" />
        <div className="relative mx-auto flex max-w-[1140px] flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <SectionTag className="text-black/50">One operator, end to end</SectionTag>
            <h2 className="font-display mt-5 max-w-3xl text-[clamp(2.3rem,4.6vw,4.4rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-[#212121]">
              Fewer handoffs than your freight has to make.
            </h2>
          </div>
          <Button href="/contact" variant="ink" className="shrink-0">
            Plan a shipment <ArrowUpRight className="size-4" />
          </Button>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}