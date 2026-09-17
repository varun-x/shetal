import type { Metadata } from "next";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import PageHero from "@/components/ui/PageHero";
import BlogClient from "@/components/blog/BlogClient";

export const metadata: Metadata = {
  title: "Freight & Customs Notes",
  description:
    "Practical notes on customs filing, HS classification, FTA duty savings, and the freight decisions that quietly set your landed cost.",
};

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-[1280px] bg-[#fbfdff] text-[#212121] shadow-[0_0_80px_rgba(8,34,58,0.08)]">
      <SiteHeader />

      <PageHero
        eyebrow="Notes"
        title={
          <>
            The paperwork,{" "}
            <span className="inline-block rounded-lg bg-[#bfe8ff] px-[0.14em] pb-[0.06em] pt-[0.02em]">
              explained plainly.
            </span>
          </>
        }
        lead="Customs filing, classification, and routing — written by the desk that files them, for the people who have to sign them off."
      />

      <BlogClient />

      <SiteFooter />
    </main>
  );
}
