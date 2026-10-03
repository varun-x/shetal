import Image from "next/image";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import type { Metadata } from "next";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import PageHero from "@/components/ui/PageHero";
import SectionTag from "@/components/ui/SectionTag";
import Reveal from "@/components/ui/Reveal";
import Sticker from "@/components/ui/Sticker";
import { serviceCategories, logisticsModes } from "@/components/services/data";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Trade, Customs & Freight Services",
  description:
    "DGFT and EXIM consulting, customs compliance, certifications, freight forwarding, scrip trading and business registrations at transparent, affordable fixed fees.",
};

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
    <main className="bg-[#fbfdff] text-[#212121]">
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

      <nav
        aria-label="Service categories"
        className="border-y border-black/8 bg-white/90 px-4 backdrop-blur-md sm:px-8 lg:px-12"
      >
        <ul className="flex gap-2 overflow-x-auto py-3 [scrollbar-width:none]">
          {serviceCategories.map((c) => (
            <li key={c.id} className="shrink-0">
              <a
                href={`#${c.id}`}
                className="block rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold text-[#212121] transition-colors hover:border-[#bfe8ff] hover:bg-[#bfe8ff]"
              >
                {c.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <section className="px-4 sm:px-8 lg:px-12">
        <div className="divide-y divide-black/10">
          {serviceCategories.map((cat, index) => (
            <Reveal key={cat.id} delay={index * 0.03}>
              <article
                id={cat.id}
                className="grid scroll-mt-24 gap-8 py-14 sm:py-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16 lg:py-20"
              >
                <div className="lg:sticky lg:top-24 lg:self-start">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono-ui text-[10px] tracking-[0.12em] text-black/45">
                      CATEGORY / {cat.number}
                    </span>
                    <Sticker name={cat.sticker} size={56} tilt={-4} decorative />
                  </div>

                  <h2 className="font-display mt-4 text-[clamp(2.2rem,4.2vw,4rem)] font-semibold leading-[1.02] tracking-[-0.04em]">
                    {cat.title}
                  </h2>
                  <p className="mt-5 max-w-xl text-base leading-relaxed text-black/62 lg:text-[17px]">
                    {cat.description}
                  </p>

                  <div className="mt-6 flex items-start gap-3 rounded-lg bg-[#bfe8ff]/45 px-4 py-3.5">
                    <BadgeCheck className="mt-0.5 size-5 shrink-0 text-[#212121]" />
                    <p className="text-[13px] leading-relaxed text-[#212121]">
                      <span className="font-semibold">Best value, in writing. </span>
                      {cat.pricing}
                    </p>
                  </div>

                  <div className="mt-6">
                    <Button href="/contact" variant="ink">
                      Get a quote for this service <ArrowUpRight className="size-4" />
                    </Button>
                  </div>
                </div>

                <div>
                  <ul className="grid gap-2.5 sm:grid-cols-2">
                    {cat.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 rounded-lg border border-black/8 bg-white px-4 py-3.5 text-[13px] leading-snug text-black/75 transition-colors hover:border-[#6095c2]/50"
                      >
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#6095c2]" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {cat.id === "logistics" && (
                    <div className="mt-2.5 grid gap-2.5 sm:grid-cols-3">
                      {logisticsModes.map((m) => (
                        <div
                          key={m.title}
                          className="group relative aspect-[4/3] overflow-hidden rounded-lg"
                        >
                          <Image
                            src={m.image}
                            alt={m.alt}
                            fill
                            sizes="(max-width: 640px) 92vw, 30vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                          <div className="absolute inset-x-4 bottom-4 text-white">
                            <p className="font-display text-lg font-semibold tracking-[-0.03em]">
                              {m.title}
                            </p>
                            <p className="mt-1 text-xs leading-snug text-white/75">{m.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#222222] px-4 py-20 text-white sm:px-8 sm:py-28 lg:px-12">
        <div className="grid-fade absolute inset-0 opacity-60" />
        <div className="relative">
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

      <section className="relative overflow-hidden bg-[#bfe8ff] px-4 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="absolute -left-40 top-0 size-[30rem] rounded-full border-[44px] border-white/20" />
        <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
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