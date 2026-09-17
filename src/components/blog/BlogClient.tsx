"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Search, Clock, CalendarDays } from "lucide-react";

type Article = {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
};

const articles: Article[] = [
  {
    title: "How to read a consolidated Bill of Entry (before customs does)",
    excerpt:
      "Consolidation is where cost leaks and classification errors hide. A practical walkthrough of the fields that actually matter, and the three errors we see most at the CFS.",
    category: "Customs Compliance",
    date: "Sept 04, 2026",
    readTime: "8 min read",
    author: "Operations Desk",
  },
  {
    title: "The complete guide to HS code classification rules",
    excerpt:
      "One wrong digit can double your duty or stall a container. Learn the General Rules of Interpretation well enough to challenge an assessment with confidence.",
    category: "Tariff Consulting",
    date: "Aug 27, 2026",
    readTime: "10 min read",
    author: "Trade Desk",
  },
  {
    title: "FTA, CEPA, SAFTA: actually claiming the duty savings",
    excerpt:
      "Most importers leave FTA benefits on the table because the paperwork chain breaks somewhere. Here is how a Certificate of Origin survives from exporter to appraiser.",
    category: "Trade Advisory",
    date: "Aug 20, 2026",
    readTime: "7 min read",
    author: "Trade Desk",
  },
  {
    title: "The importer's pre-audit checklist",
    excerpt:
      "Post-clearance audits are climbing. A 12-point checklist that returns your export incentives, duty refunds, and documentation to something you are glad to show an auditor.",
    category: "Customs Compliance",
    date: "Aug 13, 2026",
    readTime: "6 min read",
    author: "Operations Desk",
  },
  {
    title: "Ocean freight outlook: navigating container volatility",
    excerpt:
      "Sailing reliability, peak-lane pricing, and why contracting a lane is smarter than booking a box. What we are telling shippers for the next two quarters.",
    category: "Logistics Insights",
    date: "Aug 06, 2026",
    readTime: "5 min read",
    author: "Ocean Desk",
  },
];

const categories = ["All", ...Array.from(new Set(articles.map((a) => a.category)))];

export default function BlogClient() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("All");

  const filtered = articles.filter((article) => {
    const matchesQuery =
      article.title.toLowerCase().includes(query.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(query.toLowerCase());
    const matchesCat = cat === "All" || article.category === cat;
    return matchesQuery && matchesCat;
  });

  const [featured, ...rest] = filtered;

  return (
    <div className="pb-24">
      <div className="sticky top-24 z-30 bg-paper/85 px-4 py-5 backdrop-blur-md sm:px-6">
        <div className="mx-auto flex max-w-[1140px] flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:max-w-xs">
            <Search className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-black/40" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles, policies, HS guides..."
              className="w-full rounded-lg border border-black/10 bg-white py-2.5 pl-10 pr-4 text-sm outline-none transition-colors placeholder:text-black/38 focus:border-[#222222]"
            />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((c) => {
              const isActive = c === cat;
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCat(c)}
                  className={`relative rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.02em] transition-colors ${
                    isActive ? "text-white" : "text-black/55 hover:text-black"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="blog-pill"
                      className="absolute inset-0 rounded-full bg-[#222222]"
                      transition={{ type: "spring", stiffness: 360, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{c}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-[1140px] flex-col gap-8 px-4 sm:px-6">
        {featured && (
          <article className="group grid overflow-hidden rounded-xl border border-black/8 bg-[#222222] text-white lg:grid-cols-[1.1fr_0.9fr]">
            <div className="flex flex-col justify-center p-7 sm:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono-ui rounded-full bg-white/10 px-3 py-1.5 text-[9px] tracking-[0.1em] text-[#bfe8ff]">
                  FEATURED / {featured.category}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-white/50">
                  <Clock className="size-3.5" /> {featured.readTime}
                </span>
              </div>
              <h2 className="font-display mt-6 text-[clamp(1.9rem,3.6vw,3.4rem)] font-semibold leading-[0.94] tracking-[-0.06em]">
                {featured.title}
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/64">
                {featured.excerpt}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4 text-xs text-white/50">
                <span>{featured.author}</span>
                <span className="flex items-center gap-1.5">
                  <CalendarDays className="size-3.5" /> {featured.date}
                </span>
              </div>
            </div>
            <div className="relative flex min-h-[220px] items-end bg-[#6095c2] p-7 sm:p-10 lg:min-h-full">
              <div className="absolute inset-0 opacity-20" />
              <p className="font-display relative text-[clamp(2.6rem,6vw,6rem)] font-semibold leading-[0.85] tracking-[-0.08em] opacity-90">
                Tread the <br /> tariff carefully.
              </p>
              <ArrowUpRight className="absolute right-7 top-7 size-6 opacity-60 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </article>
        )}

        {rest.length > 0 && (
          <div className="grid gap-5 md:grid-cols-2">
            {rest.map((article) => (
              <article
                key={article.title}
                className="group flex flex-col rounded-xl border border-black/8 bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(27,54,77,0.1)] sm:p-8"
              >
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="font-mono-ui rounded-full bg-[#edf6fb] px-3 py-1.5 text-[9px] tracking-[0.1em] text-[#6095c2]">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-black/45">
                    <Clock className="size-3.5" /> {article.readTime}
                  </span>
                </div>
                <h3 className="font-display mt-6 text-[clamp(1.5rem,2.4vw,2rem)] font-semibold leading-[1.03] tracking-[-0.05em]">
                  {article.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-black/58">
                  {article.excerpt}
                </p>
                <div className="mt-auto flex items-center justify-between border-t border-black/8 pt-6 text-xs text-black/45">
                  <span>{article.author}</span>
                  <span className="flex items-center gap-1.5">
                    <CalendarDays className="size-3.5" /> {article.date}
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}

        {!featured && (
          <p className="py-16 text-center font-mono-ui text-[10px] tracking-[0.14em] text-black/45">
            NO ARTICLES MATCH &quot;{query}&quot; — TRY A BROADER SEARCH.
          </p>
        )}
      </div>
    </div>
  );
}