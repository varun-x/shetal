import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import PageHero from "@/components/ui/PageHero";
import SectionTag from "@/components/ui/SectionTag";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact & Freight Plans",
  description:
    "Tell us the lane, the cargo, and the deadline. Trifreight's operations desk replies with a freight plan the same working day.",
};

const desks = [
  {
    title: "Customs & clearance",
    detail: "Bill of Entry, shipping bills, classification, refunds, and notices.",
  },
  {
    title: "Air & ocean booking",
    detail: "Space, sailings, consolidation, and the transshipment in between.",
  },
  {
    title: "Road & last mile",
    detail: "Bonded trucking, ICD coordination, ODC escorts, and POD custody.",
  },
];

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-[1280px] bg-[#fbfdff] text-[#212121] shadow-[0_0_80px_rgba(8,34,58,0.08)]">
      <SiteHeader />

      <PageHero
        eyebrow="Contact"
        title={
          <>
            Start with the lane,{" "}
            <span className="inline-block rounded-lg bg-[#bfe8ff] px-[0.14em] pb-[0.06em] pt-[0.02em]">
              not the form.
            </span>
          </>
        }
        lead="One desk handles the booking, the border, and the handoff — so you are not forwarded between four teams to move one shipment."
      />

      <section className="px-4 pb-24 sm:px-6 sm:pb-32">
        <div className="mx-auto grid max-w-[1140px] gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          <ContactForm />

          <div className="flex flex-col gap-4">
            <div className="rounded-xl border border-white/10 bg-[#141414] p-6 text-white sm:p-8">
              <SectionTag className="text-[#bfe8ff]">Operations desk</SectionTag>
              <div className="mt-7 flex flex-col gap-5 text-sm">
                <p className="flex items-start gap-3 text-white/70">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-[#bfe8ff]" />
                  <span>
                    B-459, 1st Floor, Nehru Ground N.I.T.
                    <br />
                    Faridabad-121001, Haryana, India
                  </span>
                </p>
                <a
                  href="tel:+919810573633"
                  className="flex items-center gap-3 text-white/70 transition-colors hover:text-white"
                >
                  <Phone className="size-4 shrink-0 text-[#bfe8ff]" />
                  <span className="font-mono text-[13px]">+91 98105 73633</span>
                </a>
                <a
                  href="mailto:ops@trifreight.in"
                  className="flex items-center gap-3 text-white/70 transition-colors hover:text-white"
                >
                  <Mail className="size-4 shrink-0 text-[#bfe8ff]" />
                  <span className="font-mono text-[13px]">ops@trifreight.in</span>
                </a>
                <p className="flex items-center gap-3 text-white/70">
                  <Clock className="size-4 shrink-0 text-[#bfe8ff]" />
                  <span>Mon – Sat, 09:30 – 19:00 IST</span>
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-black/8 bg-[#ebeff3] p-6 sm:p-8">
              <SectionTag className="text-black/50">Who picks it up</SectionTag>
              <div className="mt-6 divide-y divide-black/8">
                {desks.map((desk) => (
                  <div key={desk.title} className="py-4 first:pt-0 last:pb-0">
                    <p className="font-display text-lg font-semibold tracking-[-0.04em]">
                      {desk.title}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-black/58">
                      {desk.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
