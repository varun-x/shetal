"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  ArrowLeft, ArrowRight, ShieldCheck, Check, Plane,
  Ship, Package, Globe, Calculator, Download, CheckCircle2,
  Building, TrendingUp, Users, FileText, Settings, Award, Clock, ChevronDown
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { servicesCategories, allServicesList } from "@/data/servicesData";

function GetQuoteForm() {
  const searchParams = useSearchParams();
  const initialService = searchParams.get("service") || "";
  const initialCategory = searchParams.get("category") || "logistics";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    category: "logistics",
    requirements: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [refCode, setRefCode] = useState("");
  const [isCatDropdownOpen, setIsCatDropdownOpen] = useState(false);

  // Force scroll to top on mount to bypass Next.js layout scroll-retention issues
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
    }, 80);
    return () => clearTimeout(timer);
  }, []);

  // Load query params on mount
  useEffect(() => {
    const validCats = ["logistics", "dgft-exim", "customs-compliance", "dgft-hq", "scrip-trading", "certifications", "business-services"];
    let updatedCategory = formData.category;
    if (initialCategory && validCats.includes(initialCategory)) {
      updatedCategory = initialCategory;
    }

    let updatedRequirements = "";
    if (initialService) {
      updatedRequirements = `I need a quote for: ${decodeURIComponent(initialService)}`;
    }

    setFormData((prev) => ({
      ...prev,
      category: updatedCategory,
      requirements: updatedRequirements || prev.requirements,
    }));
  }, [initialCategory, initialService]);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.company) {
      alert("Please fill in all required fields.");
      return;
    }

    // Generate reference code
    const newRef = `SLQ-${Math.floor(100000 + Math.random() * 900000)}`;
    setRefCode(newRef);
    setSubmitted(true);

    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#3b82f6", "#06b6d4", "#10b981", "#ffffff"],
    });
  };

  const selectedCategoryObj = servicesCategories.find((cat) => cat.id === formData.category);

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
          >
            <GlassCard glowColor="none" className="p-8 bg-slate-900/40 border-slate-800 shadow-xl">
              <div className="mb-6 border-b border-slate-800/80 pb-4">
                <h4 className="font-display font-bold text-white text-lg">Inquiry Specifications</h4>
                <p className="text-xs text-slate-400 mt-1">Please select the service category and enter your details below. We will handle the rest.</p>
              </div>

              <form onSubmit={handleFormSubmit} className="flex flex-col gap-6">
                {/* Service Category */}
                <div className="flex flex-col gap-2 relative">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Required Service Category</label>

                  <button
                    type="button"
                    onClick={() => setIsCatDropdownOpen(!isCatDropdownOpen)}
                    className="w-full flex items-center justify-between gap-3 p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-white hover:border-accent-gold/45 cursor-pointer transition-all shadow-md text-left"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded-md bg-slate-900 border border-slate-800 flex items-center justify-center text-accent-gold shrink-0">
                        {servicesCategories.find(c => c.id === formData.category)?.icon || servicesCategories[0].icon}
                      </div>
                      <span className="text-xs font-semibold">{servicesCategories.find(c => c.id === formData.category)?.title || servicesCategories[0].title}</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${isCatDropdownOpen ? "rotate-180 text-accent-gold" : ""}`} />
                  </button>

                  {/* Dropdown Options Panel */}
                  <AnimatePresence>
                    {isCatDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 right-0 mt-2 p-2 rounded-xl bg-slate-950/98 border border-slate-800/80 backdrop-blur-2xl shadow-2xl flex flex-col gap-1 z-40 max-h-[250px] overflow-y-auto"
                      >
                        {servicesCategories.map((cat) => (
                          <button
                            key={cat.id}
                            type="button"
                            onClick={() => {
                              handleInputChange("category", cat.id);
                              setIsCatDropdownOpen(false);
                            }}
                            className={`w-full flex items-center gap-3 p-2 rounded-lg text-left cursor-pointer transition-all ${formData.category === cat.id
                                ? "bg-slate-900 border border-slate-800 text-white"
                                : "text-slate-400 hover:text-white hover:bg-slate-900/60"
                              }`}
                          >
                            <div className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 ${formData.category === cat.id ? "bg-slate-950 text-accent-gold" : "bg-slate-900 text-slate-500"
                              }`}>
                              {cat.icon}
                            </div>
                            <span className="text-xs font-semibold">{cat.title}</span>
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <span className="text-[10px] text-slate-500 font-light">Choose the main service bucket matching your requirements.</span>
                </div>

                {/* Grid Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Contact Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="e.g. Anand Mehta"
                      className="bg-slate-950 border border-slate-800 rounded-lg py-3 px-4 text-sm text-white focus:outline-none focus:border-accent-gold transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Corporate Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="e.g. anand@company.com"
                      className="bg-slate-950 border border-slate-800 rounded-lg py-3 px-4 text-sm text-white focus:outline-none focus:border-accent-gold transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="e.g. +91 99999 88888"
                      className="bg-slate-950 border border-slate-800 rounded-lg py-3 px-4 text-sm text-white focus:outline-none focus:border-accent-gold transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Company Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      placeholder="e.g. TechVantage Electronics"
                      className="bg-slate-950 border border-slate-800 rounded-lg py-3 px-4 text-sm text-white focus:outline-none focus:border-accent-gold transition-all"
                    />
                  </div>
                </div>


                {/* Requirements Textarea */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Requirements or Description</label>
                  <textarea
                    rows={4}
                    value={formData.requirements}
                    onChange={(e) => handleInputChange("requirements", e.target.value)}
                    placeholder="Briefly describe the goods type, origin/destination ports, custom issues, or DGFT licenses required..."
                    className="bg-slate-950 border border-slate-800 rounded-lg py-3 px-4 text-sm text-white focus:outline-none focus:border-accent-gold font-sans resize-none"
                  />
                  <span className="text-[10px] text-slate-500 font-light">Add any specific queries or context for the trade specialists.</span>
                </div>

                {/* Submit button */}
                <div className="border-t border-slate-800 pt-6 mt-4 flex justify-end">
                  <Button type="submit" variant="primary" className="w-full sm:w-auto font-bold tracking-wide">
                    <span className="flex items-center justify-center gap-2">
                      Submit Quote Request <Calculator className="w-4 h-4" />
                    </span>
                  </Button>
                </div>
              </form>
            </GlassCard>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            <GlassCard glowColor="none" className="p-8 bg-slate-900/40 border-slate-800 shadow-xl flex flex-col gap-8">
              {/* Success Header */}
              <div className="text-center flex flex-col items-center gap-2 border-b border-slate-800 pb-6">
                <div className="w-12 h-12 rounded-full bg-emerald-950/40 border border-emerald-900/30 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mt-2">Quote Request Submitted</h3>
                <p className="text-xs text-slate-400">Our expert customs and trade desk is now reviewing your case.</p>
                <span className="text-[10px] text-slate-500 font-mono mt-1">Reference: {refCode}</span>
              </div>

              {/* Summary details */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
                <div className="md:col-span-7 flex flex-col gap-5 bg-slate-950/50 border border-slate-800/80 rounded-xl p-6 text-sm">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 font-mono">Case Registration Summary</span>
                  <div className="flex flex-col gap-3.5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400">Selected Category</span>
                      <span className="text-slate-300 font-semibold">{selectedCategoryObj?.title || formData.category}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400">Client Name</span>
                      <span className="text-slate-300 font-semibold">{formData.name}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400">Company Name</span>
                      <span className="text-slate-300 font-semibold">{formData.company}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400">Client Segment</span>
                      <span className="text-slate-300 font-semibold">Corporate Importer</span>
                    </div>
                  </div>
                </div>

                {/* Key indicators */}
                <div className="md:col-span-5 flex flex-col gap-4">
                  <div className="glass-panel p-5 rounded-xl flex items-center gap-4 border border-slate-800 bg-slate-950/40 flex-1">
                    <Clock className="w-8 h-8 text-accent-gold shrink-0" />
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-slate-400 font-mono">Expected Call Time</span>
                      <p className="text-sm font-bold text-white mt-0.5">&lt; 15 Minutes</p>
                    </div>
                  </div>

                  <div className="glass-panel p-5 rounded-xl flex items-center gap-4 border border-slate-800 bg-slate-950/40 flex-1">
                    <Award className="w-8 h-8 text-accent-gold shrink-0" />
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-slate-400 font-mono">Assigned Partner</span>
                      <p className="text-xs font-bold text-white mt-0.5"> Customs clearance / CHA</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action checklist */}
              <div className="flex flex-col gap-4">
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 font-mono">Immediate Documents Needed (Pre-Arrival Checklist)</span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "Commercial Invoice & Packing List (stamped)",
                    "Bill of Lading / Airway Bill copy",
                    "IEC Profile copy linked to ICEGATE",
                    "Product technical specifications / BIS catalog (if applicable)"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg border border-slate-800 bg-slate-950/50 text-xs text-slate-400 font-light">
                      <Check className="w-4 h-4 text-accent-gold shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Next Steps */}
              <div className="p-4 rounded-xl border border-accent-gold/20 bg-slate-900/40 text-xs text-slate-400 flex items-start gap-3 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent-gold/5 rounded-full blur-xl" />
                <Settings className="w-5 h-5 text-accent-gold shrink-0 mt-0.5 animate-spin-slow" />
                <div>
                  <h5 className="font-bold text-white mb-1">What Happens Next?</h5>
                  <p className="leading-relaxed font-light">
                    A Custom clearance and Senior EXIM Consultant from our Delhi/Port desk has been allocated to review your file. We will call your phone number ({formData.phone}) within 15 minutes to run through your operational guidelines.
                  </p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 border-t border-slate-800 pt-6">
                <Button onClick={() => setSubmitted(false)} variant="outline" className="flex-1 !text-white !border-slate-800 hover:!bg-slate-900 hover:!border-slate-700">
                  Submit Another Request
                </Button>
                <Button variant="primary" className="flex-1" href="/contact">
                  <span className="flex items-center gap-1.5 justify-center">
                    Talk to Office <ArrowRight className="w-4 h-4" />
                  </span>
                </Button>
              </div>
            </GlassCard>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function GetQuote() {
  return (
    <>
      <Navbar />

      <section className="relative pt-24 pb-12 md:pt-32 md:pb-24 overflow-hidden bg-[#060913]">
        {/* Background Grid Pattern & Ambient Glows */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:48px_48px] opacity-[0.01]" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-accent-gold/5 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          {/* Unified Page Heading on Top */}
          <div className="flex flex-col gap-3 mb-10 text-left max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-accent-gold font-mono">
              Customs & EXIM Wizard
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Request an Operational Quote
            </h1>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-light mt-1">
              Fill in your trade details to generate a landed customs clearance, licensing, or transit freight estimate.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left Column: Value Prop Info (Order 2 on Mobile, Order 1 on Desktop) */}
            <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-28 order-2 lg:order-1">
              {/* Value Cards/Badges inside left column */}
              <div className="flex flex-col gap-3">
                <div className="p-4 rounded-xl border border-slate-800/80 bg-slate-950/45 flex items-center gap-3.5">
                  <Clock className="w-5 h-5 text-accent-gold shrink-0 animate-pulse" />
                  <div>
                    <h5 className="text-xs font-semibold text-white font-mono uppercase tracking-wider">Fast Turnaround</h5>
                    <p className="text-[11px] text-slate-400 font-light mt-0.5">Average response time is under 15 minutes.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-slate-800/80 bg-slate-950/45 flex items-center gap-3.5">
                  <ShieldCheck className="w-5 h-5 text-accent-gold shrink-0" />
                  <div>
                    <h5 className="text-xs font-semibold text-white font-mono uppercase tracking-wider">Customs Desk</h5>
                    <p className="text-[11px] text-slate-400 font-light mt-0.5">Direct Custom House clearance license filings.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: The Quote Form Component (Order 1 on Mobile, Order 2 on Desktop) */}
            <div className="lg:col-span-7 w-full order-1 lg:order-2">
              <Suspense fallback={<div className="text-center py-20 text-slate-400">Loading wizard form...</div>}>
                <GetQuoteForm />
              </Suspense>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
