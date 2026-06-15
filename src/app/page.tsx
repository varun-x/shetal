"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, ShieldCheck, ChevronRight, Award, 
  Users, PhoneCall, Ship, 
  Plane, Anchor, TrendingUp, CheckCircle2,
  ChevronUp, ChevronDown, Check
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import GlassCard from "@/components/ui/GlassCard";
import { servicesCategories } from "@/data/servicesData";

// 6 Case Studies Data
interface CaseStudyData {
  clientName: string;
  industry: string;
  route: string;
  challenge: string;
  solution: string;
  results: string;
  metric: string;
  metricLabel: string;
}

const caseStudiesList: CaseStudyData[] = [
  {
    clientName: "TechVantage Systems",
    industry: "Electronics",
    route: "Shanghai (CNSHA) to Chennai Air Cargo (MAA)",
    challenge: "Severe microprocessor component cargo delays at airport customs threatened to shut down active manufacturing assembly lines.",
    solution: "Transitioned workflow to a Prior Bill of Entry system, pre-classifying classifications and pre-assessing duty rates with customs appraisers.",
    results: "Cargo dwell clearances reduced from 4 days to under 10 hours. Client met delivery timelines and saved demurrage costs.",
    metric: "40% Faster",
    metricLabel: "Customs Port Clearance",
  },
  {
    clientName: "Bharat Heavy Forge",
    industry: "Machinery",
    route: "Frankfurt (FRA) to Mumbai Sea Port (JNPT)",
    challenge: "Incorrect tariff classifications and custom valuation disputes on heavy steam turbine imports created holds and cargo penalties.",
    solution: "Optimized duty structures under the EPCG (Export Promotion Capital Goods) scheme and filed CEPA FTA benefit certificates.",
    results: "Customs accepted filings cleanly, granting release with zero penalties and substantial direct capital savings.",
    metric: "₹25 Lakhs",
    metricLabel: "Customs Duties Saved",
  },
  {
    clientName: "Vivant Biotech",
    industry: "Pharmaceuticals",
    route: "Rotterdam (NLRTM) to Delhi IGI Airport (DEL)",
    challenge: "Assistant Drug Controller (ADC) clearance delays and documentation audits threatened cold-chain biological cargo integrity.",
    solution: "Coordinated pre-arrival sample approvals with laboratories and prioritizing transits in custom-bonded cold storage facilities.",
    results: "Clearance approved in under 8 hours with zero temperature log deviations.",
    metric: "98% Accuracy",
    metricLabel: "Compliance Check Pass Rate",
  },
  {
    clientName: "Nexa Motors Corp",
    industry: "Automotive",
    route: "Nagoya (NGO) to Nhava Sheva (INNSA)",
    challenge: "Disrupted JIT (Just-In-Time) assembly supply lines due to port congestion, terminal holds, and inland transport coordinates errors.",
    solution: "Submited prior manifest logs and pre-cleared bills to organize direct port delivery transits straight onto factory flatbeds.",
    results: "Eliminated container terminal waiting times, dispatching parts directly to JIT lines.",
    metric: "30% Reduced",
    metricLabel: "Logistics Overhead Cost",
  },
  {
    clientName: "Aegis Chemical Labs",
    industry: "Chemicals",
    route: "Antwerp (ANR) to Mundra Sea Port (INMUN)",
    challenge: "Complex dangerous goods (HAZMAT) manifest filings, environmental approvals, and quarantine (AQ/PQ) terminal clearance delays.",
    solution: "Pre-filed hazardous declarations, checked HS codes, and secured prior clearances with Partner Government Agencies (PGAs).",
    results: "Customs released the raw materials manifest cleanly with zero audit inquiries or port CFS delays.",
    metric: "98% Accuracy",
    metricLabel: "PGA Inspection Pass Rate",
  },
  {
    clientName: "Loom & Linen Textiles",
    industry: "Textiles",
    route: "Shenzhen Port (CNSZX) to Delhi ICD (TKD)",
    challenge: "High air-ocean freight costs and documentation errors from importing split LCL orders from individual East Asian exporters.",
    solution: "Established a weekly FCL cargo consolidation hub at Shenzhen Port, filing a single consolidated Bill of Entry.",
    results: "Lowered ocean freight cargo rates by 30% and unified tracking under a single customs declaration file.",
    metric: "30% Reduced",
    metricLabel: "Inbound Freight Logistics Cost",
  },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("dgft-exim");
  const [selectedService, setSelectedService] = useState("IEC and IEC Modification");
  const [isCatDropdownOpen, setIsCatDropdownOpen] = useState(false);
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const [activeCaseIdx, setActiveCaseIdx] = useState(0);
  const activeCase = caseStudiesList[activeCaseIdx];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen lg:h-screen w-full flex flex-col justify-center overflow-hidden bg-black pt-20">
        
        {/* Minimal Grid Background */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" strokeWidth="0.5" strokeOpacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          
          {/* Left Content */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
            className="flex flex-col gap-8 text-left"
          >
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/5 w-fit"
            >
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-yellow-500">
                Licensed Customs Broker
              </span>
            </motion.div>

            <motion.h1 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight"
            >
              Clear Customs <br />
              <span className="text-yellow-400">Without Delays.</span>
            </motion.h1>

            <motion.p 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              className="text-zinc-400 text-lg sm:text-xl leading-relaxed max-w-xl font-light"
            >
              We simplify international trade. Expert customs clearance, freight forwarding, and trade compliance for enterprise supply chains.
            </motion.p>

            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="flex flex-col sm:flex-row items-center gap-4 pt-4"
            >
              <Link href="/get-quote" className="w-full sm:w-auto px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-none text-center transition-colors flex items-center justify-center gap-2">
                Get Instant Quote <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/contact" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white hover:bg-white hover:text-black text-white font-bold rounded-none text-center transition-colors flex items-center justify-center gap-2">
                Talk to an Expert
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Abstract Tech Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full hidden lg:flex justify-end"
          >
            <div className="relative w-full max-w-md aspect-square border border-zinc-800 bg-black p-8 flex flex-col justify-between">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-yellow-500/20 blur-[100px] pointer-events-none rounded-full" />
              
              <div className="flex justify-between items-start">
                <h3 className="font-display font-extrabold text-2xl text-white tracking-widest uppercase">Sheetla</h3>
                <span className="text-yellow-400 font-mono text-sm border border-yellow-400/30 px-2 py-1">ONLINE</span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 text-zinc-400 font-mono text-sm border-b border-zinc-800 pb-4">
                  <CheckCircle2 className="text-yellow-400 w-5 h-5" /> Air Cargo Clearance
                </div>
                <div className="flex items-center gap-4 text-zinc-400 font-mono text-sm border-b border-zinc-800 pb-4">
                  <CheckCircle2 className="text-yellow-400 w-5 h-5" /> Ocean Freight Transit
                </div>
                <div className="flex items-center gap-4 text-zinc-400 font-mono text-sm">
                  <CheckCircle2 className="text-yellow-400 w-5 h-5" /> DGFT Trade Compliance
                </div>
              </div>

              <div className="mt-8 p-4 bg-zinc-900 border border-zinc-800">
                <p className="text-xs text-zinc-500 font-mono uppercase mb-1">Clearance Rate</p>
                <p className="text-3xl text-white font-display font-bold">98.4% <span className="text-yellow-400 text-lg">↑</span></p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-black border-y border-zinc-900 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-zinc-900">
          <div>
            <p className="font-display text-4xl font-extrabold text-white">5000+</p>
            <p className="text-xs uppercase tracking-widest text-zinc-500 font-mono mt-2">Shipments Cleared</p>
          </div>
          <div>
            <p className="font-display text-4xl font-extrabold text-white">100+</p>
            <p className="text-xs uppercase tracking-widest text-zinc-500 font-mono mt-2">Global Partners</p>
          </div>
          <div>
            <p className="font-display text-4xl font-extrabold text-white">6 Days</p>
            <p className="text-xs uppercase tracking-widest text-zinc-500 font-mono mt-2">Operations Weekly</p>
          </div>
          <div>
            <p className="font-display text-4xl font-extrabold text-white">98%</p>
            <p className="text-xs uppercase tracking-widest text-zinc-500 font-mono mt-2">On-Time Clearance</p>
          </div>
        </div>
      </section>

      {/* Interactive Services Section */}
      <section className="py-24 bg-black relative">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-400 font-mono">Capabilities</span>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white mt-4">
              Service Explorer
            </h2>
          </div>

          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 border border-zinc-800 bg-[#0a0a0a]">
              
              {/* Category Select */}
              <div className="flex flex-col gap-3 relative">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest font-mono">Category</label>
                <button
                  onClick={() => {
                    setIsCatDropdownOpen(!isCatDropdownOpen);
                    setIsServiceDropdownOpen(false);
                  }}
                  className="w-full flex items-center justify-between p-4 bg-black border border-zinc-800 text-white hover:border-yellow-400 transition-colors"
                >
                  <span className="font-bold">{servicesCategories.find(c => c.id === selectedCategory)?.title || servicesCategories[0].title}</span>
                  <ChevronDown className={`w-5 h-5 text-zinc-500 ${isCatDropdownOpen ? "rotate-180 text-yellow-400" : ""}`} />
                </button>
                <AnimatePresence>
                  {isCatDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      className="absolute top-full left-0 right-0 mt-2 bg-black border border-zinc-800 z-40 max-h-[250px] overflow-y-auto"
                    >
                      {servicesCategories.map((cat) => (
                        <button
                          key={cat.id}
                          onClick={() => {
                            setSelectedCategory(cat.id);
                            setIsCatDropdownOpen(false);
                            if (cat.services.length > 0) setSelectedService(cat.services[0].name);
                          }}
                          className={`w-full p-4 text-left font-bold transition-colors border-b border-zinc-900 last:border-none ${
                            selectedCategory === cat.id ? "bg-zinc-900 text-yellow-400" : "text-zinc-400 hover:text-white hover:bg-zinc-900"
                          }`}
                        >
                          {cat.title}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Service Select */}
              <div className="flex flex-col gap-3 relative">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest font-mono">Service</label>
                <button
                  onClick={() => {
                    setIsServiceDropdownOpen(!isServiceDropdownOpen);
                    setIsCatDropdownOpen(false);
                  }}
                  className="w-full flex items-center justify-between p-4 bg-black border border-zinc-800 text-white hover:border-yellow-400 transition-colors"
                >
                  <span className="font-bold truncate">{selectedService}</span>
                  <ChevronDown className={`w-5 h-5 text-zinc-500 ${isServiceDropdownOpen ? "rotate-180 text-yellow-400" : ""}`} />
                </button>
                <AnimatePresence>
                  {isServiceDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      className="absolute top-full left-0 right-0 mt-2 bg-black border border-zinc-800 z-40 max-h-[250px] overflow-y-auto"
                    >
                      {(servicesCategories.find(c => c.id === selectedCategory)?.services || []).map((s, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setSelectedService(s.name);
                            setIsServiceDropdownOpen(false);
                          }}
                          className={`w-full p-4 text-left font-bold transition-colors border-b border-zinc-900 last:border-none ${
                            selectedService === s.name ? "bg-zinc-900 text-yellow-400" : "text-zinc-400 hover:text-white hover:bg-zinc-900"
                          }`}
                        >
                          {s.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Selected Service Detail */}
            <AnimatePresence mode="wait">
              {(() => {
                const activeCategoryObj = servicesCategories.find(cat => cat.id === selectedCategory);
                const activeServiceObj = activeCategoryObj?.services.find(s => s.name === selectedService) || activeCategoryObj?.services[0];
                if (!activeServiceObj) return null;
                return (
                  <motion.div
                    key={`${selectedCategory}-${selectedService}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="border border-zinc-800 p-8 md:p-12 bg-black"
                  >
                    <div className="flex flex-col md:flex-row justify-between gap-8">
                      <div className="flex-1 max-w-2xl">
                        <span className="text-yellow-400 font-mono text-sm uppercase tracking-widest">{activeCategoryObj?.subtitle}</span>
                        <h4 className="font-display text-2xl md:text-3xl font-bold text-white mt-2 mb-4">{activeServiceObj.name}</h4>
                        <p className="text-zinc-400 text-lg font-light leading-relaxed">
                          {activeServiceObj.desc}
                        </p>
                      </div>
                      <div className="flex flex-col gap-4 shrink-0">
                        <Link href={`/get-quote?service=${encodeURIComponent(activeServiceObj.name)}&category=${selectedCategory}`} className="w-full text-center py-4 px-8 bg-yellow-400 hover:bg-yellow-300 text-black font-bold transition-colors">
                          Get Estimate
                        </Link>
                        <Link href="/services" className="w-full text-center py-4 px-8 border border-white text-white hover:bg-white hover:text-black font-bold transition-colors">
                          View Guide
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                );
              })()}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-[#0a0a0a] border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-400 font-mono">Performance Audits</span>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white mt-4">
              Operations Console
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4 flex flex-col gap-2">
              {caseStudiesList.map((cs, idx) => {
                const isActive = activeCaseIdx === idx;
                return (
                  <div key={idx} className="flex flex-col">
                    <button
                      onClick={() => setActiveCaseIdx(idx)}
                      className={`w-full text-left p-5 border transition-colors flex items-center justify-between ${
                        isActive ? "bg-yellow-400 border-yellow-400 text-black" : "bg-black border-zinc-800 text-zinc-400 hover:border-zinc-600"
                      }`}
                    >
                      <div>
                        <span className={`text-[10px] font-mono uppercase tracking-widest ${isActive ? 'text-black/60' : 'text-zinc-600'}`}>
                          {cs.industry}
                        </span>
                        <p className={`font-bold mt-1 ${isActive ? 'text-black' : 'text-white'}`}>{cs.clientName}</p>
                      </div>
                      <ChevronRight className={`w-5 h-5 ${isActive ? 'text-black rotate-90 lg:rotate-0' : 'text-zinc-600'} transition-transform`} />
                    </button>
                    
                    {/* Mobile Details Panel (Accordion) */}
                    <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isActive ? 'max-h-[1000px] border border-t-0 border-yellow-400 opacity-100' : 'max-h-0 opacity-0 border-x-0 border-b-0 border-transparent'}`}>
                      <div className="p-6 bg-zinc-950">
                        <div className="flex flex-col gap-6 mb-6">
                          <div>
                            <h4 className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest mb-2">Challenge</h4>
                            <p className="text-zinc-300 font-light text-sm">{cs.challenge}</p>
                          </div>
                          <div>
                            <h4 className="text-yellow-400 font-mono text-[10px] uppercase tracking-widest mb-2">Solution</h4>
                            <p className="text-zinc-300 font-light text-sm">{cs.solution}</p>
                          </div>
                        </div>
                        <div className="border-t border-zinc-800 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                          <div>
                            <p className="text-3xl font-display font-extrabold text-white mb-1">{cs.metric}</p>
                            <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest">{cs.metricLabel}</p>
                          </div>
                          <Link href="/get-quote" className="w-full sm:w-auto px-6 py-3 border border-white text-white hover:bg-white hover:text-black font-bold text-center transition-colors text-sm">
                            Simulate Customs Plan
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="hidden lg:block lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCaseIdx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="h-full border border-zinc-800 bg-black p-8 md:p-12 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-4 mb-8">
                      <span className="px-3 py-1 border border-yellow-400 text-yellow-400 font-mono text-xs uppercase tracking-widest">
                        {activeCase.industry}
                      </span>
                      <h3 className="text-2xl font-bold text-white">{activeCase.clientName}</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                      <div>
                        <h4 className="text-zinc-500 font-mono text-sm uppercase tracking-widest mb-3">Challenge</h4>
                        <p className="text-zinc-300 font-light leading-relaxed">{activeCase.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-yellow-400 font-mono text-sm uppercase tracking-widest mb-3">Solution</h4>
                        <p className="text-zinc-300 font-light leading-relaxed">{activeCase.solution}</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-zinc-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-6">
                    <div>
                      <p className="text-4xl font-display font-extrabold text-white mb-2">{activeCase.metric}</p>
                      <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">{activeCase.metricLabel}</p>
                    </div>
                    <Link href="/get-quote" className="px-6 py-3 border border-white text-white hover:bg-white hover:text-black font-bold transition-colors">
                      Simulate Customs Plan
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-32 bg-yellow-400 text-black text-center">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
          <h2 className="font-display text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight mb-6">
            Optimize Your Global Custom Operations
          </h2>
          <p className="text-xl font-light max-w-2xl mb-10">
            Get in touch with a licensed customs broker to set up pre-filings, coordinate rates, or run a duty compliance assessment.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link href="/get-quote" className="w-full sm:w-auto px-10 py-5 bg-black hover:bg-zinc-900 text-white font-bold text-lg transition-colors flex items-center justify-center gap-2">
              Calculate Official Quote <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/contact" className="w-full sm:w-auto px-10 py-5 bg-transparent border-2 border-black hover:bg-black hover:text-white font-bold text-lg transition-colors flex items-center justify-center">
              Talk to a Specialist
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
