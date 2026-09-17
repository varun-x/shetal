import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import PageHero from "@/components/ui/PageHero";
import SectionTag from "@/components/ui/SectionTag";
import Button from "@/components/ui/Button";
import CaseStudiesClient from "@/components/case-studies/CaseStudiesClient";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real freight scenarios where clearances, routing, and consolidation saved money and days — with receipts, not promises.",
};

export default function CaseStudiesPage() {
  return (
    <main className="mx-auto max-w-[1280px] bg-[#fbfdff] text-[#212121] shadow-[0_0_80px_rgba(8,34,58,0.08)]">
      <SiteHeader />

      <PageHero
        eyebrow="Case studies"
        title={
          <>
            Receipts,{" "}
            <span className="inline-block rounded-lg bg-[#bfe8ff] px-[0.12em] pb-[0.06em] pt-[0.02em]">
              not promises.
            </span>
          </>
        }
        lead="Six real movements where the border, the booking, and the timing stopped fighting each other — and started working for the cargo."
      />

      <CaseStudiesClient />

      <section className="relative overflow-hidden bg-[#bfe8ff] px-4 py-24 sm:px-6 sm:py-28">
        <div className="absolute -right-40 top-0 size-[30rem] rounded-full border-[44px] border-white/20" />
        <div className="relative mx-auto flex max-w-[1140px] flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <SectionTag className="text-black/50">Yours could be the seventh</SectionTag>
            <h2 className="font-display mt-5 max-w-3xl text-[clamp(2.3rem,4.6vw,4.4rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-[#212121]">
              Every plan starts the same way.
            </h2>
          </div>
          <Button href="/contact" variant="ink" className="shrink-0">
            Start yours <ArrowUpRight className="size-4" />
          </Button>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}