"use client";

import Link from "next/link";
import { 
  Cpu, Truck, Activity, ShoppingBag, HardHat, 
  ArrowRight, ShieldCheck, Zap 
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";

const industries = [
  {
    icon: <Cpu className="w-8 h-8 text-yellow-400" />,
    title: "Technology & Electronics",
    subtitle: "High-Value Components & Finished Goods",
    challenge: "Complex regulatory compliance including BIS registration, WPC license verification, and strict customs valuations.",
    solution: "Dedicated electronics custom clearance desk. Pre-filing Bill of Entry allows rapid delivery for parts to keep production lines active.",
    benefits: ["99.8% classification audit pass rate", "Coordination of BIS and WPC clearance filings", "High-security handling for components"],
  },
  {
    icon: <Activity className="w-8 h-8 text-yellow-400" />,
    title: "Pharmaceuticals & Healthcare",
    subtitle: "Cold-Chain Logistics & Life Science Assets",
    challenge: "Temperature deviations during inspections, drug controller permissions (ADC), and strict expiry-date regulations.",
    solution: "Temperature-controlled customs-bonded zones and fast-track clearance protocols ensuring sample drawing and approvals under 8 hours.",
    benefits: ["Active cold-chain logistics monitoring", "Licensed ADC custom brokers", "Priority CFS unloading and clearance"],
  },
  {
    icon: <Truck className="w-8 h-8 text-yellow-400" />,
    title: "Automotive & Engineering",
    subtitle: "Just-In-Time (JIT) Part Shipments",
    challenge: "Supply chain stoppages from port CFS delays, managing thousands of micro HS-codes, and duty assessment rules.",
    solution: "Automated custom manifest monitoring and bonded warehousing allowing manufacturers to coordinate releases in exact sync with JIT lines.",
    benefits: ["Dedicated multi-item tariff assessment", "24/7 customs clearance operations", "Just-In-Time intermodal logistics"],
  },
  {
    icon: <ShoppingBag className="w-8 h-8 text-yellow-400" />,
    title: "E-commerce & Retail",
    subtitle: "High-Volume B2C & B2B Inventory Dispatch",
    challenge: "Peak season freight rates volatility, complex returns handling, and managing split customs entries across multiple ports.",
    solution: "Consolidated freight shipping options (LCL/Air) paired with integrated bonded distribution centers to dispatch cargo dynamically.",
    benefits: ["Multi-destination clearance structures", "Automated cargo status updates", "Bonded de-consolidation hubs"],
  },
  {
    icon: <HardHat className="w-8 h-8 text-yellow-400" />,
    title: "Industrial Machinery & Metals",
    subtitle: "Over-Dimensional Cargo (ODC) & Project Logistics",
    challenge: "Moving oversized turbines or machinery requires specialized flat-rack containers, escorts, and customized heavy-lift clearances.",
    solution: "Complete Project Cargo management, overseeing structural customs appraisal, heavy-axle haulage, and structural site placements.",
    benefits: ["Specialized ODC custom broker assessments", "Flat-rack and open-top space allocations", "End-to-end multi-modal routing"],
  },
];

export default function Industries() {
  return (
    <>
      <Navbar />

      {/* Header Banner */}
      <section className="relative pt-24 pb-8 md:pt-32 md:pb-16 overflow-hidden bg-black border-b border-zinc-900">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-yellow-500/5 blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 flex flex-col gap-3 text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-yellow-400 font-mono">Specialized Sector Focus</span>
              <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Tailored Industry Customs & <span className="text-yellow-400">Freight Infrastructure</span>
              </h1>
            </div>
            <div className="lg:col-span-5 text-left lg:border-l lg:border-zinc-800 lg:pl-8">
              <p className="text-zinc-400 text-sm leading-relaxed font-light">
                Every sector has unique tariff schedules, regulatory agencies, and supply chains. We build customized clearance operations for each.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Cards Section */}
      <section className="py-24 bg-transparent relative">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-16">
          {industries.map((ind, idx) => (
            <div 
              key={idx}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start border-b border-zinc-900 pb-16 last:border-b-0 last:pb-0"
            >
              {/* Left Title Column */}
              <div className="lg:col-span-4 flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-black border border-zinc-800 flex items-center justify-center">
                  {ind.icon}
                </div>
                <div>
                  <span className="text-xs text-yellow-400 uppercase tracking-widest font-mono">{ind.subtitle}</span>
                  <h3 className="font-display text-2xl font-bold text-white mt-1">{ind.title}</h3>
                </div>
                <p className="text-zinc-400 text-xs mt-2 leading-relaxed font-light font-mono">
                  We maintain dedicated custom specialists who handle only your sector classifications, ensuring deep knowledge of BIS, FDA, or JIT logistics.
                </p>
              </div>

              {/* Right Detail Column */}
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-4">
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-yellow-400 font-mono">Industry Challenge</h5>
                    <p className="text-sm text-zinc-400 mt-2 leading-relaxed font-light font-mono">{ind.challenge}</p>
                  </div>
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-yellow-400 font-mono">Sheetla Exim Solution</h5>
                    <p className="text-sm text-zinc-400 mt-2 leading-relaxed font-light font-mono">{ind.solution}</p>
                  </div>
                </div>

                <div className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-xl flex flex-col justify-between shadow-sm">
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-white font-mono mb-4">Key Operational Benefits</h5>
                    <ul className="flex flex-col gap-3">
                      {ind.benefits.map((benefit, bIdx) => (
                        <li key={bIdx} className="flex items-center gap-2 text-xs text-zinc-400 font-light">
                          <ShieldCheck className="w-4.5 h-4.5 text-yellow-400 shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href="/get-quote" className="text-xs font-semibold text-yellow-400 hover:text-yellow-300 mt-6 inline-flex items-center gap-1 group transition-colors">
                    Request Sector Customs Plan <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-20 bg-black text-center border-t border-zinc-900">
        <div className="max-w-3xl mx-auto px-6 flex flex-col items-center gap-6">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
            Need to clear high-risk customs entries?
          </h2>
          <p className="text-zinc-400 text-sm max-w-md font-light">
            Consult our sector specialists to check your HS classifications and duty assessment structures.
          </p>
          <div className="flex items-center gap-4">
            <Button href="/contact" variant="primary">
              Talk to a Sector Specialist
            </Button>
            <Button href="/get-quote" variant="outline" className="!border-zinc-800 !text-white hover:!bg-zinc-900 hover:!border-zinc-700">
              Calculate Freight Estimate
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
