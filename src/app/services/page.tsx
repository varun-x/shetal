"use client";

import Link from "next/link";
import { 
  ShieldCheck, Ship, Plane, Warehouse, FileSpreadsheet, 
  ArrowRight, Check, Compass, HelpCircle, Award,
  Truck, Globe2, Calculator, BarChart3
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";

import { servicesCategories } from "@/data/servicesData";

export default function Services() {
  return (
    <>
      <Navbar />

      {/* Header Banner */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-[#060913]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:48px_48px] opacity-[0.01]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-accent-gold/5 blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10 flex flex-col items-center gap-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-gold font-mono">Our Operations</span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            End-To-End Customs & <br className="hidden sm:inline" />
            <span className="text-gradient-accent">
              Logistics Infrastructure
            </span>
          </h1>
          <p className="text-slate-400 max-w-xl text-sm sm:text-base leading-relaxed font-light">
            From customs brokerage to intermodal routes, we coordinate border entries and freight schedules with absolute precision.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-premium-dark relative border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-24">
          {servicesCategories.map((cat, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={cat.id} 
                id={cat.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start border-b border-slate-900 pb-20 last:border-b-0 last:pb-0 scroll-mt-28"
              >
                {/* Category Details Column */}
                <div className={`lg:col-span-4 flex flex-col gap-6 sticky top-28 ${isEven ? "" : "lg:order-2"}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-accent-gold">
                      {cat.icon}
                    </div>
                    <div>
                      <p className="text-[10px] text-accent-gold uppercase tracking-widest font-mono">{cat.subtitle}</p>
                      <h3 className="font-display text-2xl font-bold text-white mt-0.5">{cat.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-slate-400 text-sm leading-relaxed font-light">
                    {cat.description}
                  </p>

                  <div className="pt-4 flex items-center gap-4">
                    <Button href={`/get-quote?category=${cat.id}`} variant="primary">
                      Quote Category
                    </Button>
                    <Link href="/contact" className="text-xs font-semibold text-slate-400 hover:text-white transition-colors flex items-center gap-1 group">
                      Consult Specialist <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>

                {/* Specific Services Grid Column */}
                <div className={`lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4 ${isEven ? "" : "lg:order-1"}`}>
                  {cat.services.map((s, sIdx) => (
                    <GlassCard 
                      key={sIdx} 
                      hoverEffect={true} 
                      glowColor="none" 
                      className="p-6 bg-slate-900/40 border-slate-800 shadow-xl flex flex-col justify-between h-full hover:border-accent-gold/20"
                    >
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-accent-gold shrink-0" />
                          <h4 className="font-display text-sm sm:text-base font-bold text-white">{s.name}</h4>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed font-light pl-6">
                          {s.desc}
                        </p>
                      </div>
                      <div className="mt-6 pt-3 border-t border-slate-800/60 pl-6 flex justify-end">
                        <Link 
                          href={`/get-quote?service=${encodeURIComponent(s.name)}&category=${cat.id}`} 
                          className="text-[10px] font-bold font-mono text-accent-gold uppercase tracking-wider flex items-center gap-1 hover:text-yellow-400 group"
                        >
                          Request Estimate <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </GlassCard>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-[#060913] relative border-t border-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold text-white">Frequently Asked Questions</h2>
            <p className="text-slate-400 mt-3 text-sm font-light">
              Answers to common questions regarding customs entries and transport logistics.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <GlassCard hoverEffect={false} className="p-6 bg-slate-900/40 border-slate-800 shadow-xl">
              <h4 className="font-display font-semibold text-slate-200 text-base flex items-start gap-2.5">
                <HelpCircle className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" />
                What is an Out of Charge (OOC) in customs clearance?
              </h4>
              <p className="text-slate-400 text-xs mt-3 leading-relaxed pl-7 font-light">
                Out of Charge (OOC) is the final authorization issued by customs officers indicating that all custom requirements (documentation checks, physical scanning assessments, and duty payments) have been successfully finalized. Once OOC is issued, the port CFS is authorized to dispatch cargo to the importer.
              </p>
            </GlassCard>

            <GlassCard hoverEffect={false} className="p-6 bg-slate-900/40 border-slate-800 shadow-xl">
              <h4 className="font-display font-semibold text-slate-200 text-base flex items-start gap-2.5">
                <HelpCircle className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" />
                How does a Prior Bill of Entry speed up clearance?
              </h4>
              <p className="text-slate-400 text-xs mt-3 leading-relaxed pl-7 font-light">
                A Prior Bill of Entry is filed electronically with customs up to 30 days before the vessel arrives at the port of destination. This allows customs officers to complete documentation assessments and audit duty rates ahead of time. When the vessel docks, the cargo can skip standard assess waits, undergoing immediate scanning or gate clearance.
              </p>
            </GlassCard>

            <GlassCard hoverEffect={false} className="p-6 bg-slate-900/40 border-slate-800 shadow-xl">
              <h4 className="font-display font-semibold text-slate-200 text-base flex items-start gap-2.5">
                <HelpCircle className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" />
                Can you handle allied government agency (PGA) clearances?
              </h4>
              <p className="text-slate-400 text-xs mt-3 leading-relaxed pl-7 font-light">
                Yes, as a licensed customs broker, we coordinate clearances with Partner Government Agencies (PGAs) including FSSAI (food safety), AQ/PQ (animal/plant quarantine), ADC (drug control), and BIS (standards compliance). We ensure sample drawings and lab test scheduling are done quickly to prevent demurrage charges.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Bottom lead */}
      <section className="py-20 bg-slate-950 text-center border-t border-slate-900">
        <div className="max-w-3xl mx-auto px-6 flex flex-col items-center gap-6">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
            Ready to secure space and clear customs?
          </h2>
          <p className="text-slate-350 text-sm max-w-md font-light">
            Get an instant custom quote estimate using our interactive quoting wizard.
          </p>
          <Button href="/get-quote" variant="primary">
            Start Quoting Wizard
          </Button>
        </div>
      </section>

      <Footer />
    </>
  );
}
