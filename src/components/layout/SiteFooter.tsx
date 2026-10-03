import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { BrandMark } from "@/components/ui/Brand";
import SlideToWhatsApp from "@/components/ui/SlideToWhatsApp";
import CloudBlend from "@/components/ui/CloudBlend";

const companyLinks = [
  { label: "About", path: "/about" },
  { label: "Industries", path: "/industries" },
  { label: "Case Studies", path: "/case-studies" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

const modeLinks = [
  { label: "Air freight", path: "/services" },
  { label: "Ocean freight", path: "/services" },
  { label: "Road transport", path: "/services" },
  { label: "Customs clearance", path: "/services" },
];

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#141414] text-white">
      {/* Static clouds crown the dark footer the way they carry the hero sky —
          the shared band on the one component every page renders. */}
      <CloudBlend className="top-0 h-[8rem] sm:h-[12rem]" />
      <div className="relative mx-auto max-w-[1600px] px-5 pb-10 pt-16 sm:px-8 lg:px-12 xl:px-16 sm:pt-20">
        {/* Closing card — the wordmark sits behind the line, clipped by the card. */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#1d1d1d] px-6 pt-9 sm:px-10 sm:pt-12">
          <div className="grid-fade absolute inset-0 opacity-40" />
          <div className="relative z-10 flex items-start justify-between gap-6">
            <div>
              <p className="font-mono-ui text-[10px] tracking-[0.14em] text-[#bfe8ff]">
                India to the world
              </p>
              <h2 className="font-display mt-4 max-w-lg text-[clamp(1.75rem,3.1vw,2.7rem)] font-semibold leading-[1.05] tracking-[-0.04em]">
                Freight that keeps the promise you made downstream.
              </h2>
            </div>
            <Link
              href="/contact"
              aria-label="Start a freight plan"
              className="group grid size-12 shrink-0 place-items-center rounded-full border border-white/25 bg-white/5 transition-colors hover:border-white hover:bg-white sm:size-14"
            >
              <ArrowRight className="size-5 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-[#141414]" />
            </Link>
          </div>

          <p
            className="font-display pointer-events-none relative z-0 -mt-2 translate-y-[30%] select-none whitespace-nowrap text-center text-[clamp(3.6rem,15vw,12rem)] font-bold leading-none tracking-[-0.07em] text-white/[0.07]"
            aria-hidden="true"
          >
            TRIFREIGHT
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.25fr_0.75fr_0.85fr_1fr] sm:mt-20">
          <div className="flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-2.5" aria-label="Trifreight home">
              <BrandMark dark />
              <span className="inline-flex flex-col leading-none">
                <span className="font-display text-xl font-semibold tracking-[-0.05em]">
                  Trifreight
                </span>
                <span className="font-mono-ui mt-1 text-[8px] text-white/48">
                  Trade Solutions
                </span>
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-white/58">
              Freight forwarding for the cargo that cannot wait. Air, ocean, road —
              and the customs coordination that keeps borders from slowing you down.
            </p>
            <div className="mt-1">
              <SlideToWhatsApp>Slide to chat with us</SlideToWhatsApp>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-mono-ui text-[10px] tracking-[0.14em] text-[#bfe8ff]">
              Company
            </p>
            <ul className="flex flex-col gap-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.path}
                    className="text-sm text-white/62 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-mono-ui text-[10px] tracking-[0.14em] text-[#bfe8ff]">
              Freight modes
            </p>
            <ul className="flex flex-col gap-2.5">
              {modeLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.path}
                    className="text-sm text-white/62 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-mono-ui text-[10px] tracking-[0.14em] text-[#bfe8ff]">
              Operations desk
            </p>
            <div className="flex flex-col gap-5 text-sm text-white/62">
              <div>
                <p className="font-mono text-[10px] tracking-[0.1em] text-[#bfe8ff] mb-2">
                  FARIDABAD
                </p>
                <p className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-[#bfe8ff]" />
                  <span>
                    B-459, 1st Floor, Nehru Ground N.I.T.
                    <br />
                    Faridabad-121001, Haryana, India
                  </span>
                </p>
                <a
                  href="tel:+919810573633"
                  className="mt-2.5 flex items-center gap-2.5 transition-colors hover:text-white"
                >
                  <Phone className="size-4 shrink-0 text-[#bfe8ff]" />
                  <span className="font-mono text-[12px]">+91 98105 73633</span>
                </a>
                <a
                  href="mailto:ops@trifreight.in"
                  className="mt-2.5 flex items-center gap-2.5 transition-colors hover:text-white"
                >
                  <Mail className="size-4 shrink-0 text-[#bfe8ff]" />
                  <span className="font-mono text-[12px]">ops@trifreight.in</span>
                </a>
              </div>
              <div className="border-t border-white/10 pt-3">
                <p className="font-mono text-[10px] tracking-[0.1em] text-[#bfe8ff] mb-2">
                  LUDHIANA BRANCH
                </p>
                <p className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-[#bfe8ff]" />
                  <span>
                    Cabin 6, First Floor, Deepak Complex,
                    <br />
                    New Grain Market, Ludhiana, Punjab
                  </span>
                </p>
                <a
                  href="tel:+919667108950"
                  className="mt-2.5 flex items-center gap-2.5 transition-colors hover:text-white"
                >
                  <Phone className="size-4 shrink-0 text-[#bfe8ff]" />
                  <span className="font-mono text-[12px]">+91 96671 08950</span>
                </a>
                <a
                  href="tel:+917889108950"
                  className="mt-2.5 flex items-center gap-2.5 transition-colors hover:text-white"
                >
                  <Phone className="size-4 shrink-0 text-[#bfe8ff]" />
                  <span className="font-mono text-[12px]">+91 78891 08950</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="font-mono-ui text-[9px] tracking-[0.1em] text-white/48">
            © 2026 TRIFREIGHT TRADE SOLUTIONS PRIVATE LIMITED
          </p>
          <p className="font-mono-ui text-[9px] tracking-[0.1em] text-white/48">
            AIR / OCEAN / ROAD / CUSTOMS — INDIA TO THE WORLD
          </p>
        </div>
      </div>
    </footer>
  );
}
