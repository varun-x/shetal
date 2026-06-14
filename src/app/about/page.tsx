"use client";

import Link from "next/link";
import { Award, ShieldCheck, Globe2, Sparkles, Building, Landmark, Users } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";

const values = [
  {
    icon: <ShieldCheck className="w-5 h-5 text-accent-gold" />,
    title: "Uncompromising Compliance",
    desc: "In an industry where a single documentation error can hold cargo for weeks, we operate with a zero-tolerance compliance policy. Our filings align exactly with customs guidelines and local tariff rules.",
  },
  {
    icon: <Sparkles className="w-5 h-5 text-accent-gold" />,
    title: "Operational Innovation",
    desc: "We combine traditional broker expertise with modern client portals. Track ICEGATE statuses, custom bills, and gate passes with high efficiency and absolute transparency.",
  },
  {
    icon: <Globe2 className="w-5 h-5 text-accent-gold" />,
    title: "Global Intermodal Solutions",
    desc: "Through sea lanes, airways, and inland routes, we provide door-to-door transit services, managing border customs entries across continents seamlessly.",
  },
];


export default function About() {
  return (
    <>
      <Navbar />

      {/* Header Banner */}
      <section className="relative pt-24 pb-8 md:pt-32 md:pb-16 overflow-hidden bg-[#060913] border-b border-slate-900">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:48px_48px] opacity-[0.01]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-accent-gold/5 blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 flex flex-col gap-3 text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-accent-gold font-mono">Our Heritage</span>
              <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Driving Global Trade with <span className="text-gradient-accent">Regulatory Precision</span>
              </h1>
            </div>
            <div className="lg:col-span-5 text-left lg:border-l lg:border-slate-800 lg:pl-8">
              <p className="text-slate-400 text-sm leading-relaxed font-light">
                Since 2016, Sheetla Exim has served as a trusted trade corridor specialist, managing complex customs brokerage and freight shipments for importers and manufacturers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview / Mission */}
      <section className="py-24 bg-transparent relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6">
            <h2 className="font-display text-3xl font-bold text-white">
              Trusted Customs Brokerage Meets Modern Supply Chain Tech
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              Global supply chains require split-second timing. Yet customs policies, duty schedules, and border compliance rules grow more detailed by the day. 
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              At Sheetla Exim, we close this gap. We operate not just as an external forwarder, but as a strategic compliance partner. By pre-assessing tariffs, verifying classifications, and preparing early files, we keep your cargo moving without customs delays.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-2">
              <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl text-slate-300">
                <Landmark className="w-6 h-6 text-accent-gold mb-2" />
                <p className="font-semibold text-white text-sm">Govt. Certified CHA</p>
                <p className="text-xs text-slate-400 mt-1">Direct filing authorizations across major sea & air customs ports.</p>
              </div>
              <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl text-slate-300">
                <Building className="w-6 h-6 text-accent-gold mb-2" />
                <p className="font-semibold text-white text-sm">Bonded Terminals</p>
                <p className="text-xs text-slate-400 mt-1">In-house warehousing and custom-bonded cargo storage.</p>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Visual card represent core achievements */}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-[#060913] relative border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl font-bold text-white">Our Core Commitments</h2>
            <p className="text-slate-400 mt-4 text-sm font-light">
              We govern our operations around key principles to ensure your shipping runs smoothly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <GlassCard key={i} className="flex flex-col gap-4 bg-slate-900/40 border-slate-800 shadow-xl" glowColor="gold">
                <div className="w-10 h-10 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center">
                  {v.icon}
                </div>
                <h4 className="font-display font-bold text-white text-base">{v.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed font-light">{v.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>


      {/* Global network Call */}
      <section className="py-20 bg-slate-950 text-center border-t border-slate-900">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-6">
          <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-accent-gold">
            <Globe2 className="w-6 h-6 text-accent-gold" />
          </div>
          <h2 className="font-display text-3xl font-bold text-white">
            Need customs clearance at a specific port?
          </h2>
          <p className="text-slate-350 text-sm max-w-lg leading-relaxed font-light">
            We operate in all major Sea Customs Ports, Air Cargo complexes, and Inland Container Depots (ICDs) across the subcontinent.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <Button href="/contact" variant="primary">
              Contact Our Operations Desk
            </Button>
            <Button href="/get-quote" variant="outline" className="!text-white !border-slate-800 hover:!bg-slate-900 hover:!border-slate-700">
              Request Customs Quote
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
