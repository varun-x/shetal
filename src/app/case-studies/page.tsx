"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, TrendingUp, Calendar, Tag } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";

const categories = ["All", "Customs Clearance", "Ocean Freight", "Air Cargo", "Trade Compliance"];

const caseStudies = [
  {
    title: "Clearing High-Value Electronic Parts in Under 10 Hours",
    category: "Customs Clearance",
    challenge: "Severe microprocessor component cargo delays at airport customs threatened to shut down active manufacturing assembly lines.",
    strategy: "Transitioned workflow to a Prior Bill of Entry system, pre-classifying classifications and pre-assessing duty rates with customs appraisers.",
    results: "Cargo dwell clearances reduced from 4 days to under 10 hours. Client met delivery timelines and saved demurrage costs.",
    metric: "40% Faster",
    metricDesc: "Customs Port Clearance Time",
  },
  {
    title: "Unlocking ₹25 Lakhs Duty Savings on Heavy Machinery Importations",
    category: "Trade Compliance",
    challenge: "Incorrect tariff classifications and custom valuation disputes on heavy steam turbine imports created holds and cargo penalties.",
    strategy: "Optimized duty structures under the EPCG (Export Promotion Capital Goods) scheme and filed CEPA FTA benefit certificates.",
    results: "Customs accepted filings cleanly, granting release with zero penalties and substantial direct capital savings.",
    metric: "₹25 Lakhs",
    metricDesc: "Customs Duties Saved",
  },
  {
    title: "Securing 98% Compliance for Cold-Chain Biological Cargo",
    category: "Air Cargo",
    challenge: "Assistant Drug Controller (ADC) clearance delays and documentation audits threatened cold-chain biological cargo integrity.",
    strategy: "Coordinated pre-arrival sample approvals with laboratories and prioritizing transits in custom-bonded cold storage facilities.",
    results: "Clearance approved in under 8 hours with zero temperature log deviations.",
    metric: "98% Accuracy",
    metricDesc: "Compliance Check Pass Rate",
  },
  {
    title: "Optimizing Direct Port Delivery to Cut Automotive Supply Costs by 30%",
    category: "Ocean Freight",
    challenge: "Disrupted JIT (Just-In-Time) assembly supply lines due to port congestion, terminal holds, and inland transport coordinates errors.",
    strategy: "Submitted prior manifest logs and pre-cleared bills to organize direct port delivery transits straight onto factory flatbeds.",
    results: "Eliminated container terminal waiting times, dispatching parts directly to JIT lines.",
    metric: "30% Reduced",
    metricDesc: "Logistics Overhead Cost",
  },
  {
    title: "Navigating Hazardous Cargo Clearances with 98% Compliance Accuracy",
    category: "Trade Compliance",
    challenge: "Complex dangerous goods (HAZMAT) manifest filings, environmental approvals, and quarantine (AQ/PQ) terminal clearance delays.",
    strategy: "Pre-filed hazardous declarations, checked HS codes, and secured prior clearances with Partner Government Agencies (PGAs).",
    results: "Customs released the raw materials manifest cleanly with zero audit inquiries or port CFS delays.",
    metric: "98% Accuracy",
    metricDesc: "PGA Inspection Pass Rate",
  },
  {
    title: "Centralizing Consolidations to Achieve 30% Reduced Logistics Cost",
    category: "Ocean Freight",
    challenge: "High air-ocean freight costs and documentation errors from importing split LCL orders from individual East Asian exporters.",
    strategy: "Established a weekly FCL cargo consolidation hub at Shenzhen Port, filing a single consolidated Bill of Entry.",
    results: "Lowered ocean freight cargo rates by 30% and unified tracking under a single customs declaration file.",
    metric: "30% Reduced",
    metricDesc: "Inbound Freight Logistics Cost",
  },
];

export default function CaseStudies() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredCases = activeTab === "All" 
    ? caseStudies 
    : caseStudies.filter((c) => c.category === activeTab);

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
              <span className="text-xs font-bold uppercase tracking-widest text-accent-gold font-mono">Case Studies</span>
              <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Proven Customs & <span className="text-gradient-accent">Logistics Results</span>
              </h1>
            </div>
            <div className="lg:col-span-5 text-left lg:border-l lg:border-slate-800 lg:pl-8">
              <p className="text-slate-400 text-sm leading-relaxed font-light">
                Real shipping scenarios where our custom appraising brokers and freight operations saved money and accelerated clearances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs / Filters */}
      <section className="py-12 bg-premium-dark border-t border-b border-slate-900 relative z-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-center gap-3">
          {categories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === tab
                  ? "bg-slate-900 text-white shadow-sm border border-accent-gold"
                  : "bg-slate-950/40 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-900/60"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 bg-transparent relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {filteredCases.map((study, idx) => (
              <GlassCard key={idx} glowColor="gold" className="p-8 flex flex-col justify-between gap-8 bg-slate-900/40 border-slate-800 shadow-xl">
                <div>
                  {/* Category & Date */}
                  <div className="flex items-center gap-4 text-xs text-slate-400 mb-4 font-mono">
                    <span className="flex items-center gap-1 text-accent-gold">
                      <Tag className="w-3.5 h-3.5" />
                      {study.category}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      Operational Report
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white leading-tight mb-6">
                    {study.title}
                  </h3>

                  {/* Challenge, Strategy & Results */}
                  <div className="flex flex-col gap-6 text-sm">
                    <div>
                      <h5 className="text-[10px] font-bold uppercase tracking-wider text-rose-500 font-mono">Operations Challenge</h5>
                      <p className="text-slate-400 mt-1.5 leading-relaxed font-light">{study.challenge}</p>
                    </div>
                    <div>
                      <h5 className="text-[10px] font-bold uppercase tracking-wider text-accent-blue font-mono">Custom Broker Solution</h5>
                      <p className="text-slate-400 mt-1.5 leading-relaxed font-light">{study.strategy}</p>
                    </div>
                    <div>
                      <h5 className="text-[10px] font-bold uppercase tracking-wider text-emerald-500 font-mono">Verified Outcomes</h5>
                      <p className="text-slate-400 mt-1.5 leading-relaxed font-light">{study.results}</p>
                    </div>
                  </div>
                </div>

                {/* Metric Summary Box */}
                <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-950/40 border border-emerald-900/30 flex items-center justify-center shrink-0">
                      <TrendingUp className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <p className="font-display text-lg font-bold text-white leading-none">{study.metric}</p>
                      <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider">{study.metricDesc}</p>
                    </div>
                  </div>

                  <Button href="/get-quote" variant="outline" size="sm" className="w-full sm:w-auto !text-white !border-slate-800 hover:!bg-slate-900 hover:!border-slate-700">
                    <span className="flex items-center gap-1.5">
                      Clear Similar Cargo <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Button>
                </div>
              </GlassCard>
            ))}
          </div>

          {filteredCases.length === 0 && (
            <div className="text-center py-20 text-slate-400 text-sm">
              No active case studies found for this category. We are preparing more reports soon.
            </div>
          )}
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-20 bg-slate-950 text-center border-t border-slate-900">
        <div className="max-w-3xl mx-auto px-6 flex flex-col items-center gap-6">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
            Have a custom clearance challenge of your own?
          </h2>
          <p className="text-slate-350 text-sm max-w-md">
            Our appraising brokers will review your supply routes and document structures for compliance gaps.
          </p>
          <Button href="/contact" variant="primary">
            Book Custom Operations Consultation
          </Button>
        </div>
      </section>

      <Footer />
    </>
  );
}
