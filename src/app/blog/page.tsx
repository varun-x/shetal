"use client";

import { useState } from "react";
import { Search, BookOpen, Clock, ArrowRight, Calendar, User } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";

const initialArticles = [
  {
    title: "Understanding ICEGATE 2.0: The Future of Customs Filing",
    excerpt: "An in-depth breakdown of the government's digitized customs portal updates, automated assessments, and common clearance errors.",
    category: "Customs Compliance",
    date: "June 08, 2026",
    readTime: "7 Min Read",
    author: "Rakesh Sharma (Compliance Officer)",
  },
  {
    title: "The Ultimate Guide to HS Code Classification Rules",
    excerpt: "Avoid expensive penalties and audits. Learn the principles of General Rules of Interpretation (GRI) to classify your goods correctly.",
    category: "Tariff Consulting",
    date: "June 02, 2026",
    readTime: "10 Min Read",
    author: "Ananya Iyer (Senior Customs Attorney)",
  },
  {
    title: "How to Save on Custom Duties Under Free Trade Agreements",
    excerpt: "A practical guide for importers to utilize CEPA, FTA, and SAFTA agreements to claim duty-free status or preferential tariffs.",
    category: "Trade Advisory",
    date: "May 28, 2026",
    readTime: "8 Min Read",
    author: "Devendra Patil (Global Logistics Consultant)",
  },
  {
    title: "Preparing for Custom Audits: Key Checklist for Importers",
    excerpt: "State departments are increasing post-clearance custom audits. Ensure your documentation, valuation filings, and declarations are ready.",
    category: "Customs Compliance",
    date: "May 20, 2026",
    readTime: "6 Min Read",
    author: "Rakesh Sharma (Compliance Officer)",
  },
  {
    title: "Ocean Freight Outlook: Navigating Shipping Container Volatility",
    excerpt: "Analyzing global container capacity indexes, peak shipping lanes, and contracting strategies for the upcoming quarters.",
    category: "Logistics Insights",
    date: "May 15, 2026",
    readTime: "5 Min Read",
    author: "Marcus Vance (Head of Sea Cargo Operations)",
  },
];

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCat, setSelectedCat] = useState("All");

  const categories = ["All", "Customs Compliance", "Tariff Consulting", "Trade Advisory", "Logistics Insights"];

  const filteredArticles = initialArticles.filter((art) => {
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = selectedCat === "All" || art.category === selectedCat;
    return matchesSearch && matchesCat;
  });

  return (
    <>
      <Navbar />

      {/* Header Banner */}
      <section className="relative pt-24 pb-8 md:pt-32 md:pb-16 overflow-hidden bg-black border-b border-zinc-900">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-yellow-500/5 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 flex flex-col gap-3 text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-yellow-400 font-mono">Resource Center</span>
              <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Trade Intelligence & <span className="text-yellow-400">Regulatory Policy Updates</span>
              </h1>
            </div>
            <div className="lg:col-span-5 text-left lg:border-l lg:border-zinc-800 lg:pl-8">
              <p className="text-zinc-400 text-sm leading-relaxed font-light">
                Stay informed on customs tariff updates, trade policies, and global freight strategies compiled by our expert custom clearances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className="py-8 bg-black border-t border-b border-zinc-900 relative z-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-6 justify-between items-center">
          {/* Search bar */}
          <div className="relative w-full md:max-w-md">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles, policies, HS guides..."
              className="w-full bg-zinc-950 border border-zinc-800 rounded-lg py-2.5 pl-10 pr-4 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-yellow-400 transition-all"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 w-4.5 h-4.5" />
          </div>

          {/* Category Scroller */}
          <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${selectedCat === cat
                    ? "bg-yellow-400 text-black"
                    : "bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-900"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((art, idx) => (
              <GlassCard key={idx} glowColor="yellow" className="p-6 flex flex-col justify-between min-h-[350px] bg-zinc-900/40 border-zinc-800/80 shadow-md">
                <div>
                  {/* Meta */}
                  <div className="flex items-center justify-between text-[10px] text-zinc-400 font-mono mb-4 uppercase">
                    <span className="text-yellow-400 font-bold">{art.category}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {art.readTime}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-white text-base leading-snug hover:text-yellow-400 transition-colors mb-3">
                    {art.title}
                  </h3>

                  <p className="text-zinc-400 text-xs leading-relaxed line-clamp-3 font-light font-mono">
                    {art.excerpt}
                  </p>
                </div>

                {/* Author & CTA */}
                <div className="pt-6 border-t border-zinc-800 mt-6 flex flex-col gap-4">
                  <div className="flex items-center gap-2 text-[10px] text-zinc-400 font-mono">
                    <User className="w-3.5 h-3.5 text-yellow-400" />
                    <span>{art.author}</span>
                  </div>

                  <button className="text-xs font-semibold text-yellow-400 flex items-center gap-1 hover:underline group w-fit cursor-pointer">
                    Read Intelligence Report <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </GlassCard>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-20 text-zinc-500 text-sm">
              No articles match your search parameters. Try another term or category.
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-[#0a0a0a] text-center border-t border-zinc-900">
        <div className="max-w-2xl mx-auto px-6 flex flex-col items-center gap-6">
          <div className="w-12 h-12 rounded-xl bg-yellow-400/10 flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-yellow-400" />
          </div>
          <h2 className="font-display text-2xl font-bold text-white">
            Receive Custom Regulation Alerts
          </h2>
          <p className="text-zinc-400 text-sm max-w-sm font-light">
            Sign up to receive immediate notifications of changes in ICEGATE tariffs or PGA guidelines.
          </p>
          <div className="w-full max-w-md flex items-center bg-zinc-950 border border-zinc-800 rounded-lg p-1">
            <input
              type="email"
              placeholder="Enter corporate email"
              className="w-full bg-transparent border-0 focus:outline-none focus:ring-0 text-xs text-white px-3 placeholder-zinc-500"
            />
            <Button variant="primary" size="sm" className="whitespace-nowrap">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
