"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { 
  ArrowLeft, ArrowRight, ShieldCheck, Check, Plane, 
  Ship, Package, Globe, Calculator, Download, CheckCircle2,
  Building, TrendingUp, Users, FileText, Settings, Award, Clock
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { servicesCategories, allServicesList } from "@/data/servicesData";

// Steps indicators
const steps = [
  { id: 1, title: "Quote Type" },
  { id: 2, title: "Specifications" },
  { id: 3, title: "Service Needs" },
  { id: 4, title: "Contact Details" },
];

function GetQuoteForm() {
  const searchParams = useSearchParams();
  const initialService = searchParams.get("service") || "";
  const initialCategory = searchParams.get("category") || "logistics";

  const [currentStep, setCurrentStep] = useState(1);
  const [quoteType, setQuoteType] = useState("logistics"); // logistics, dgft-exim, customs-compliance, dgft-hq, scrip-trading, certifications, business-services
  
  const [formData, setFormData] = useState({
    // Step 1: Quote Type (stored in quoteType state)

    // Step 2: Logistics / Freight Specs
    origin: "Shanghai (CNSHA)",
    destination: "Nhava Sheva (INNSA)",
    mode: "ocean",
    cargoCategory: "Electronics & Computers",
    weight: "1500",
    volume: "5.5",
    value: "85000",

    // Step 2: License / Custom / DGFT HQ Consulting Specs
    selectedService: "",
    iecStatus: "exists", // exists, modify, none
    annualTradeVolume: "₹1 Crore - ₹5 Crores",
    requirementsDescription: "",

    // Step 2: Scrip Trading Specs
    scripAction: "buy", // buy, sell
    scripType: "RoDTEP", // RoDTEP, RoSCTL, DFIA
    scripFaceValue: "1000000", // in INR
    expectedRate: "98.5", // percentage of face value

    // Step 2: Business / Startup Specs
    registrationType: "Company Registration",
    businessSector: "Import-Export Trading",
    entitySize: "SME",

    // Step 3: Service Priorities & Timelines
    priority: "standard", // standard, expedited, urgent-audit
    needBrokerage: true,
    needWarehousing: false,
    needDelivery: true,
    expectedTimeline: "Flexible",

    // Step 4: Contact details
    name: "",
    email: "",
    phone: "",
    company: "",
    iecNumber: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [quoteResult, setQuoteResult] = useState({
    title: "",
    subtitle: "",
    reference: "",
    timeframe: "",
    costEstimate: "",
    breakdown: [] as { label: string; value: string }[],
    checklists: [] as string[],
    actionGuide: "",
  });

  // Load query params on mount
  useEffect(() => {
    if (initialCategory) {
      // Check if it's one of the valid categories
      const validCats = ["logistics", "dgft-exim", "customs-compliance", "dgft-hq", "scrip-trading", "certifications", "business-services"];
      if (validCats.includes(initialCategory)) {
        setQuoteType(initialCategory);
      }
    }
    if (initialService) {
      setFormData((prev) => ({ ...prev, selectedService: decodeURIComponent(initialService) }));
    }
  }, [initialCategory, initialService]);

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in all contact information.");
      return;
    }

    // Reference Code
    const refCode = `SLQ-${Math.floor(100000 + Math.random() * 900000)}`;
    let title = "";
    let subtitle = "";
    let timeframe = "";
    let costEstimate = "";
    let breakdown: { label: string; value: string }[] = [];
    let checklists: string[] = [];
    let actionGuide = "";

    // Generate response data based on selected category
    if (quoteType === "logistics") {
      const CIFValue = Number(formData.value) || 10000;
      const grossWeight = Number(formData.weight) || 100;
      
      let rate = 7.5;
      if (formData.cargoCategory.includes("Electronics")) rate = 7.5;
      else if (formData.cargoCategory.includes("Medical")) rate = 5.0;
      else if (formData.cargoCategory.includes("Automotive")) rate = 10.0;
      else if (formData.cargoCategory.includes("Chemicals")) rate = 12.5;
      else rate = 15.0;

      const duty = (CIFValue * rate) / 100;
      const modeMultiplier = formData.mode === "air" ? 4.8 : formData.mode === "land" ? 1.5 : 0.95;
      const freight = grossWeight * modeMultiplier;
      const handling = (formData.needBrokerage ? 350 : 0) + (formData.needWarehousing ? 450 : 0) + (formData.needDelivery ? 200 : 0) + 150;
      const total = duty + freight + handling;

      title = "Freight & Landing Estimate Ready";
      subtitle = `Ocean/Air Transit from ${formData.origin} to ${formData.destination}`;
      timeframe = formData.mode === "air" ? "3 - 5 Business Days" : formData.mode === "land" ? "5 - 8 Days" : "14 - 20 Days";
      costEstimate = `$${total.toLocaleString(undefined, { maximumFractionDigits: 0 })} USD`;
      breakdown = [
        { label: "Cargo CIF Value", value: `$${CIFValue.toLocaleString()} USD` },
        { label: `Customs Duty (${rate}%)`, value: `$${duty.toLocaleString(undefined, { maximumFractionDigits: 0 })} USD` },
        { label: "Transit Freight Cost", value: `$${freight.toLocaleString(undefined, { maximumFractionDigits: 0 })} USD` },
        { label: "Allied Clearance & Handling", value: `$${handling.toLocaleString()} USD` }
      ];
      checklists = [
        "Commercial Invoice & Packing List (stamped)",
        "Bill of Lading / Airway Bill copy",
        "IEC Profile copy linked to ICEGATE",
        "Product technical specifications / BIS catalog (if applicable)"
      ];
      actionGuide = "Our operations desk will send the carrier allocation options and verify documentation pre-filing on ICEGATE within 2 hours.";

    } else if (quoteType === "scrip-trading") {
      const value = Number(formData.scripFaceValue) || 100000;
      const rate = Number(formData.expectedRate) || 98.5;
      const amount = (value * rate) / 100;
      
      const isBuy = formData.scripAction === "buy";
      title = `${formData.scripType} Scrip Trade Calculation`;
      subtitle = `${isBuy ? "Purchase Quote" : "Sale Valuation"} for ${formData.scripType} Scrips`;
      timeframe = "24 - 48 Hours Transfer";
      costEstimate = `₹${amount.toLocaleString(undefined, { maximumFractionDigits: 0 })} INR`;
      breakdown = [
        { label: "Scrip Face Value", value: `₹${value.toLocaleString()} INR` },
        { label: isBuy ? "Expected Premium Rate" : "Expected Discount Rate", value: `${rate}%` },
        { label: isBuy ? "Total Landing Cost" : "Total Cash Payout", value: `₹${amount.toLocaleString(undefined, { maximumFractionDigits: 0 })} INR` },
        { label: "Transaction Fees", value: "₹0 (Zero broker fees on transfer)" }
      ];
      checklists = [
        "Export Shipping Bill details copy (to verify ledger credits)",
        "ICEGATE Scrip Ledger Statement (PDF)",
        "Transfer request form (signed digitally on ICEGATE)",
        "Corporate PAN & Bank detail copy (for payout clearance)"
      ];
      actionGuide = isBuy 
        ? "We will match your order with high-volume exporter sellers and provide transfer codes on ICEGATE. Payout escrow details will follow." 
        : "We will verify your credit ledger and coordinate direct escrow remittance to your account immediately after scrip transfer.";

    } else {
      // Consulting, Customs dispute, DGFT HQ, Startup Services
      const selected = formData.selectedService || "General Consultancy";
      let baseFee = "₹15,000 - ₹25,000";
      let days = "5 - 7 Days";
      
      if (selected.includes("AEO")) {
        baseFee = "₹1,50,000 - ₹2,50,000 (End-to-End Audit)";
        days = "30 - 45 Days";
      } else if (selected.includes("SCOMET") || selected.includes("Norms")) {
        baseFee = "₹75,000 - ₹1,20,000";
        days = "15 - 20 Days";
      } else if (selected.includes("Advance") || selected.includes("EPCG")) {
        baseFee = "₹35,000 - ₹60,000";
        days = "10 - 15 Days";
      } else if (selected.includes("Company Registration") || selected.includes("GST")) {
        baseFee = "₹5,000 - ₹12,000 (Incl. govt fee)";
        days = "3 - 5 Days";
      } else if (selected.includes("Section 74") || selected.includes("IGST Refund")) {
        baseFee = "10% to 15% of Refund Value (Performance-based)";
        days = "30 - 60 Days (Govt process)";
      }

      const urgencyMult = formData.priority === "urgent-audit" ? "Urgent Compliance" : formData.priority === "expedited" ? "Expedited Support" : "Standard Advisory";
      
      title = `Customs & EXIM Service Estimate`;
      subtitle = `${selected} (${urgencyMult})`;
      timeframe = days;
      costEstimate = baseFee;
      breakdown = [
        { label: "Service Name", value: selected },
        { label: "Corporate Size Segment", value: formData.entitySize || "SME" },
        { label: "IEC Status Verified", value: formData.iecStatus === "exists" ? "Linked & Active" : formData.iecStatus === "modify" ? "Needs update" : "None - Needs creation" },
        { label: "Priority Escalation SLA", value: formData.priority === "urgent-audit" ? "Immediate reply / 24-hr draft" : "Standard 48-hr SLA" }
      ];
      checklists = [
        "Company PAN card and Registration Certificate (COI)",
        "Import Export Code (IEC) profile copy & link details",
        "Previous custom notices or transaction invoice copies (if audit/dispute)",
        "Product catalogs, technical drawings, or material datasheets (if SCOMET/BIS)"
      ];
      actionGuide = "A licensed Custom Broker and Senior EXIM Consultant from our Delhi/Port desk has been allocated to review your file. We will schedule a direct consultation call within 30 minutes.";
    }

    setQuoteResult({
      title,
      subtitle,
      reference: refCode,
      timeframe,
      costEstimate,
      breakdown,
      checklists,
      actionGuide,
    });

    setSubmitted(true);
    triggerConfetti();
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#3b82f6", "#06b6d4", "#10b981", "#ffffff"],
    });
  };

  // Helper to filter services by active quote type category
  const filteredServices = allServicesList.filter(s => s.categoryId === quoteType);

  return (
    <div className="max-w-3xl mx-auto px-6">
      {/* Step Indicator Progress Bar */}
      {!submitted && (
        <div className="mb-10">
          <div className="flex justify-between items-center relative">
            {/* Background Progress bar line */}
            <div className="absolute left-0 right-0 h-0.5 bg-slate-800 -z-10" />
            <div 
              className="absolute left-0 h-0.5 bg-accent-gold -z-10 transition-all duration-300" 
              style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
            />
            
            {steps.map((s) => {
              const isActive = currentStep === s.id;
              const isCompleted = currentStep > s.id;
              return (
                <div key={s.id} className="flex flex-col items-center gap-2">
                  <div 
                    className={`w-9 h-9 rounded-full flex items-center justify-center font-semibold text-xs transition-all duration-200 border-2 ${
                      isCompleted
                        ? "bg-accent-gold border-accent-gold text-slate-950"
                        : isActive
                        ? "bg-slate-900 border-accent-gold text-accent-gold shadow-md"
                        : "bg-slate-950 border-slate-800 text-slate-500"
                    }`}
                  >
                    {isCompleted ? <Check className="w-4 h-4" /> : s.id}
                  </div>
                  <span className={`text-[10px] uppercase font-bold tracking-wider font-mono ${
                    isActive ? "text-white" : "text-slate-500"
                  }`}>
                    {s.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Form / Success Cards */}
      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            <GlassCard glowColor="none" className="p-8 bg-slate-900/40 border-slate-800 shadow-xl">
              {/* STEP 1: CHOOSE QUOTE CATEGORY */}
              {currentStep === 1 && (
                <div className="flex flex-col gap-6">
                  <div>
                    <h4 className="font-display font-bold text-white text-base">Select Your Required Service</h4>
                    <p className="text-xs text-slate-400 mt-1">What kind of quote or regulatory clearance evaluation do you need today?</p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {servicesCategories.map((cat) => {
                      const isSelected = quoteType === cat.id;
                      return (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => {
                            setQuoteType(cat.id);
                            // Pre-fill selected service with first in list
                            if (cat.services.length > 0) {
                              handleInputChange("selectedService", cat.services[0].name);
                            }
                          }}
                          className={`p-5 rounded-xl border flex items-start gap-4 text-left transition-all cursor-pointer ${
                            isSelected
                              ? "bg-slate-900 border-accent-gold text-white shadow-md"
                              : "bg-slate-950/40 border border-slate-800 text-slate-400 hover:border-slate-700 hover:bg-slate-900/40"
                          }`}
                        >
                          <div className={`p-2 rounded-lg bg-slate-950 border mt-0.5 ${isSelected ? "text-accent-gold border-accent-gold/20" : "text-slate-400 border-slate-800"}`}>
                            {cat.icon}
                          </div>
                          <div>
                            <p className="font-semibold text-sm text-white">{cat.title}</p>
                            <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">{cat.shortDesc}</p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 2: SPECIFICATIONS (DYNAMIC based on quoteType) */}
              {currentStep === 2 && (
                <div className="flex flex-col gap-6">
                  <div>
                    <h4 className="font-display font-bold text-white text-base border-b border-slate-800 pb-3">Service Specifications</h4>
                    <p className="text-xs text-slate-400 mt-1">Provide specific parameters to calculate your landed customs obligations or advisory scope.</p>
                  </div>

                  {/* DYNAMIC FORM FIELDS */}
                  {quoteType === "logistics" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Origin City / Port</label>
                        <input
                          type="text"
                          value={formData.origin}
                          onChange={(e) => handleInputChange("origin", e.target.value)}
                          placeholder="e.g. Shanghai Port (CNSHA)"
                          className="bg-slate-950 border border-slate-800 rounded-lg py-3 px-4 text-sm text-white focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold/10 transition-all"
                        />
                        <span className="text-[10px] text-slate-500 font-light">Loading terminal or supplier city.</span>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Destination City / Port</label>
                        <input
                          type="text"
                          value={formData.destination}
                          onChange={(e) => handleInputChange("destination", e.target.value)}
                          placeholder="e.g. Nhava Sheva (INNSA)"
                          className="bg-slate-950 border border-slate-800 rounded-lg py-3 px-4 text-sm text-white focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold/10 transition-all"
                        />
                        <span className="text-[10px] text-slate-500 font-light">Customs discharge port of entry.</span>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Cargo Category</label>
                        <select
                          value={formData.cargoCategory}
                          onChange={(e) => handleInputChange("cargoCategory", e.target.value)}
                          className="bg-slate-955 border border-slate-800 rounded-lg py-3.5 px-4 text-sm text-white focus:outline-none focus:border-accent-gold"
                        >
                          <option>Electronics & Computers</option>
                          <option>Medical Devices</option>
                          <option>Automotive Parts</option>
                          <option>Chemicals & Raw Materials</option>
                          <option>Retail Goods & Textiles</option>
                          <option>Machinery & Heavy Equipment</option>
                        </select>
                        <span className="text-[10px] text-slate-500 font-light">Determines the custom duty classification.</span>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">CIF Value (USD)</label>
                        <input
                          type="number"
                          value={formData.value}
                          onChange={(e) => handleInputChange("value", e.target.value)}
                          className="bg-slate-950 border border-slate-800 rounded-lg py-3 px-4 text-sm text-white focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold/10 transition-all"
                        />
                        <span className="text-[10px] text-slate-500 font-light">Cost of goods + marine insurance + sea/air freight.</span>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Gross Weight (KG)</label>
                        <input
                          type="number"
                          value={formData.weight}
                          onChange={(e) => handleInputChange("weight", e.target.value)}
                          className="bg-slate-955 border border-slate-800 rounded-lg py-3 px-4 text-sm text-white focus:outline-none focus:border-accent-gold"
                        />
                        <span className="text-[10px] text-slate-500 font-light">Total weight including pallets & packing materials.</span>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Gross Volume (CBM)</label>
                        <input
                          type="number"
                          step="0.1"
                          value={formData.volume}
                          onChange={(e) => handleInputChange("volume", e.target.value)}
                          className="bg-slate-955 border border-slate-800 rounded-lg py-3 px-4 text-sm text-white focus:outline-none focus:border-accent-gold"
                        />
                        <span className="text-[10px] text-slate-500 font-light">Total volume in cubic meters (L x W x H).</span>
                      </div>

                      <div className="flex flex-col gap-3 md:col-span-2">
                        <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Transportation Mode</label>
                        <div className="grid grid-cols-3 gap-3">
                          {["ocean", "air", "land"].map((m) => (
                            <button
                              key={m}
                              type="button"
                              onClick={() => handleInputChange("mode", m)}
                              className={`py-3.5 rounded-lg border font-semibold text-xs sm:text-sm capitalize transition-all cursor-pointer ${
                                formData.mode === m
                                  ? "bg-slate-900 text-white border-accent-gold"
                                  : "bg-slate-955 border border-slate-800 text-slate-400 hover:border-slate-700 hover:bg-slate-900/40"
                              }`}
                            >
                              {m} Cargo
                            </button>
                          ))}
                        </div>
                        <span className="text-[10px] text-slate-500 font-light">Select Air for urgent/light items, Ocean for heavy bulk container orders.</span>
                      </div>
                    </div>
                  )}

                  {quoteType === "scrip-trading" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Action</label>
                        <div className="grid grid-cols-2 gap-2">
                          {["buy", "sell"].map((action) => (
                            <button
                              key={action}
                              type="button"
                              onClick={() => handleInputChange("scripAction", action)}
                              className={`py-3 rounded-lg border font-semibold text-xs sm:text-sm capitalize transition-all cursor-pointer ${
                                formData.scripAction === action
                                  ? "bg-slate-900 text-white border-accent-gold"
                                  : "bg-slate-955 border border-slate-800 text-slate-400 hover:border-slate-700 hover:bg-slate-900/40"
                              }`}
                            >
                              {action === "buy" ? "Buy Scrips" : "Sell Scrips"}
                            </button>
                          ))}
                        </div>
                        <span className="text-[10px] text-slate-500 font-light">Buy scrips to save customs duty; Sell to liquidate credits.</span>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Scrip Scheme Type</label>
                        <select
                          value={formData.scripType}
                          onChange={(e) => handleInputChange("scripType", e.target.value)}
                          className="bg-slate-950 border border-slate-800 rounded-lg py-3.5 px-4 text-sm text-white focus:outline-none focus:border-accent-gold"
                        >
                          <option>RoDTEP</option>
                          <option>RoSCTL</option>
                          <option>DFIA</option>
                        </select>
                        <span className="text-[10px] text-slate-500 font-light">Select scheme backing the credit transfer.</span>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Total Scrip Face Value (INR)</label>
                        <input
                          type="number"
                          value={formData.scripFaceValue}
                          onChange={(e) => handleInputChange("scripFaceValue", e.target.value)}
                          placeholder="e.g. 1,000,000"
                          className="bg-slate-955 border border-slate-800 rounded-lg py-3 px-4 text-sm text-white focus:outline-none focus:border-accent-gold"
                        />
                        <span className="text-[10px] text-slate-500 font-light">Total value listed on the scrips credit ledger.</span>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Expected Rate (%)</label>
                        <input
                          type="number"
                          step="0.05"
                          value={formData.expectedRate}
                          onChange={(e) => handleInputChange("expectedRate", e.target.value)}
                          placeholder="e.g. 98.5"
                          className="bg-slate-955 border border-slate-800 rounded-lg py-3 px-4 text-sm text-white focus:outline-none focus:border-accent-gold"
                        />
                        <span className="text-[10px] text-slate-500 font-light">Expected market rate (e.g. 98.5 means 1.5% discount).</span>
                      </div>
                    </div>
                  )}

                  {quoteType === "business-services" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Required Registration / Filing</label>
                        <select
                          value={formData.registrationType}
                          onChange={(e) => handleInputChange("registrationType", e.target.value)}
                          className="bg-slate-955 border border-slate-805 rounded-lg py-3.5 px-4 text-sm text-white focus:outline-none focus:border-accent-gold"
                        >
                          <option>Company Registration (Pvt Ltd / LLP)</option>
                          <option>GST Registration & Monthly Filings</option>
                          <option>MSME / Udyam Certificate</option>
                          <option>APEDA registration</option>
                        </select>
                        <span className="text-[10px] text-slate-500 font-light">Choose the baseline license structure.</span>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Business Sector</label>
                        <input
                          type="text"
                          value={formData.businessSector}
                          onChange={(e) => handleInputChange("businessSector", e.target.value)}
                          className="bg-slate-955 border border-slate-800 rounded-lg py-3 px-4 text-sm text-white focus:outline-none focus:border-accent-gold"
                        />
                        <span className="text-[10px] text-slate-500 font-light">Primary trading commodity or activity.</span>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Corporate Size Segment</label>
                        <select
                          value={formData.entitySize}
                          onChange={(e) => handleInputChange("entitySize", e.target.value)}
                          className="bg-slate-955 border border-slate-805 rounded-lg py-3.5 px-4 text-sm text-white focus:outline-none focus:border-accent-gold"
                        >
                          <option value="Startup">Early Startup</option>
                          <option value="SME">SME / Medium Enterprise</option>
                          <option value="Large">Large Corporate Group</option>
                        </select>
                        <span className="text-[10px] text-slate-500 font-light">Select sector scaling bracket for concessions.</span>
                      </div>
                    </div>
                  )}

                  {/* EXIM / Customs / DGFT HQ / Certifications Consulting specs */}
                  {["dgft-exim", "customs-compliance", "dgft-hq", "certifications"].includes(quoteType) && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2 md:col-span-2">
                        <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Select Target Service / License</label>
                        <select
                          value={formData.selectedService}
                          onChange={(e) => handleInputChange("selectedService", e.target.value)}
                          className="bg-slate-955 border border-slate-805 rounded-lg py-3.5 px-4 text-sm text-white focus:outline-none focus:border-accent-gold"
                        >
                          <option value="">-- Select Service --</option>
                          {filteredServices.map((s, idx) => (
                            <option key={idx} value={s.name}>{s.name}</option>
                          ))}
                          <option value="Other Custom Advisory">Other Compliance Advisory...</option>
                        </select>
                        <span className="text-[10px] text-slate-500 font-light">Select the specific item from the list.</span>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">IEC (Import Export Code) Status</label>
                        <select
                          value={formData.iecStatus}
                          onChange={(e) => handleInputChange("iecStatus", e.target.value)}
                          className="bg-slate-955 border border-slate-805 rounded-lg py-3.5 px-4 text-sm text-white focus:outline-none focus:border-accent-gold"
                        >
                          <option value="exists">Active IEC Profile exists</option>
                          <option value="modify">IEC Profile exists, needs modification</option>
                          <option value="none">No IEC profile exists (New Importer)</option>
                        </select>
                        <span className="text-[10px] text-slate-500 font-light">DGFT registration status.</span>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Annual Import/Export Volume</label>
                        <select
                          value={formData.annualTradeVolume}
                          onChange={(e) => handleInputChange("annualTradeVolume", e.target.value)}
                          className="bg-slate-950 border border-slate-800 rounded-lg py-3.5 px-4 text-sm text-white focus:outline-none focus:border-accent-gold"
                        >
                          <option>Under ₹1 Crore</option>
                          <option>₹1 Crore - ₹5 Crores</option>
                          <option>₹5 Crores - ₹25 Crores</option>
                          <option>Above ₹25 Crores</option>
                        </select>
                        <span className="text-[10px] text-slate-500 font-light">Used to identify tax/duty discount schemes.</span>
                      </div>

                      <div className="flex flex-col gap-2 md:col-span-2">
                        <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Requirements or Notice Summary (Optional)</label>
                        <textarea
                          rows={3}
                          value={formData.requirementsDescription}
                          onChange={(e) => handleInputChange("requirementsDescription", e.target.value)}
                          placeholder="Briefly describe the specific items, HS codes, or custom notices details..."
                          className="bg-slate-950 border border-slate-800 rounded-lg py-3 px-4 text-sm text-white focus:outline-none focus:border-accent-gold font-sans resize-none"
                        />
                        <span className="text-[10px] text-slate-500 font-light">Add any specific queries or context for the appraisers.</span>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* STEP 3: CUSTOMS SERVICES / PRIORITIES */}
              {currentStep === 3 && (
                <div className="flex flex-col gap-6">
                  <div>
                    <h4 className="font-display font-bold text-white text-base border-b border-slate-800 pb-3">Service Priorities & Add-ons</h4>
                    <p className="text-xs text-slate-400 mt-1">Specify timeline urgency and allied processing details for your quote request.</p>
                  </div>

                  {quoteType === "logistics" ? (
                    <div className="flex flex-col gap-4">
                      {/* Service Option 1 */}
                      <div 
                        onClick={() => handleInputChange("needBrokerage", !formData.needBrokerage)}
                        className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                          formData.needBrokerage ? "bg-slate-900 border-accent-gold" : "bg-slate-955 border border-slate-800 hover:border-slate-700"
                        }`}
                      >
                        <div className="flex items-start gap-3.5">
                          <ShieldCheck className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm font-semibold text-white">Custom House Agent (CHA) Brokerage</p>
                            <p className="text-xs text-slate-400 mt-1">Prior Bill filing, appraising assessment coordination, and OOC releases.</p>
                          </div>
                        </div>
                        <div className={`w-5 h-5 rounded border flex items-center justify-center transition-all ${
                          formData.needBrokerage ? "bg-accent-gold border-accent-gold text-slate-950" : "border-slate-800 text-transparent"
                        }`}>
                          {formData.needBrokerage && <Check className="w-3.5 h-3.5" />}
                        </div>
                      </div>

                      {/* Service Option 2 */}
                      <div 
                        onClick={() => handleInputChange("needWarehousing", !formData.needWarehousing)}
                        className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                          formData.needWarehousing ? "bg-slate-900 border-accent-gold" : "bg-slate-955 border border-slate-800 hover:border-slate-700"
                        }`}
                      >
                        <div className="flex items-start gap-3.5">
                          <Package className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm font-semibold text-white">Custom-Bonded Warehousing (Storage)</p>
                            <p className="text-xs text-slate-400 mt-1">Defer customs duties and store cargo under custom control until dispatch.</p>
                          </div>
                        </div>
                        <div className={`w-5 h-5 rounded border flex items-center justify-center transition-all ${
                          formData.needWarehousing ? "bg-accent-gold border-accent-gold text-slate-950" : "border-slate-800 text-transparent"
                        }`}>
                          {formData.needWarehousing && <Check className="w-3.5 h-3.5" />}
                        </div>
                      </div>

                      {/* Service Option 3 */}
                      <div 
                        onClick={() => handleInputChange("needDelivery", !formData.needDelivery)}
                        className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                          formData.needDelivery ? "bg-slate-900 border-accent-gold" : "bg-slate-955 border border-slate-800 hover:border-slate-700"
                        }`}
                      >
                        <div className="flex items-start gap-3.5">
                          <Globe className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm font-semibold text-white">CFS-to-Warehouse Last Mile Transport</p>
                            <p className="text-xs text-slate-400 mt-1">Container haulage from customs ports directly to importer warehouse.</p>
                          </div>
                        </div>
                        <div className={`w-5 h-5 rounded border flex items-center justify-center transition-all ${
                          formData.needDelivery ? "bg-accent-gold border-accent-gold text-slate-950" : "border-slate-800 text-transparent"
                        }`}>
                          {formData.needDelivery && <Check className="w-3.5 h-3.5" />}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 gap-6">
                      <div className="flex flex-col gap-3">
                        <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Advisory Urgency Priority</label>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          {[
                            { id: "standard", title: "Standard Review", desc: "For planning and baseline filing structures. 48-hour SLA." },
                            { id: "expedited", title: "Expedited Service", desc: "For active cargo arriving at terminals soon. 12-hour SLA." },
                            { id: "urgent-audit", title: "Urgent Custom Hold / SCN", desc: "For active holds, DRI notices, or audit defenses. 4-hour SLA." }
                          ].map((p) => {
                            const isSel = formData.priority === p.id;
                            return (
                              <button
                                key={p.id}
                                type="button"
                                onClick={() => handleInputChange("priority", p.id)}
                                className={`p-4 rounded-xl border text-left flex flex-col gap-1 transition-all cursor-pointer ${
                                  isSel
                                    ? "bg-slate-900 border-accent-gold text-white"
                                    : "bg-slate-955 border border-slate-800 text-slate-400 hover:border-slate-750"
                                }`}
                              >
                                <span className="text-xs font-bold text-white">{p.title}</span>
                                <span className="text-[10px] text-slate-400 mt-1 leading-relaxed">{p.desc}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Expected Resolution Timeline</label>
                        <select
                          value={formData.expectedTimeline}
                          onChange={(e) => handleInputChange("expectedTimeline", e.target.value)}
                          className="bg-slate-955 border border-slate-800 rounded-lg py-3.5 px-4 text-sm text-white focus:outline-none focus:border-accent-gold"
                        >
                          <option>Immediate / Next 24 Hours</option>
                          <option>Under 7 Business Days</option>
                          <option>Under 30 Days (Project plan)</option>
                          <option>Flexible / Policy updates basis</option>
                        </select>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* STEP 4: CONTACT INFO */}
              {currentStep === 4 && (
                <div className="flex flex-col gap-6">
                  <div>
                    <h4 className="font-display font-bold text-white text-base border-b border-slate-800 pb-3">Corporate Contact Verification</h4>
                    <p className="text-xs text-slate-400 mt-1">Please provide verified corporate information to schedule your operational clearance consult.</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Contact Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Anand Mehta"
                        className="bg-slate-955 border border-slate-800 rounded-lg py-3 px-4 text-sm text-white focus:outline-none focus:border-accent-gold"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Corporate Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="anand@company.com"
                        className="bg-slate-955 border border-slate-800 rounded-lg py-3 px-4 text-sm text-white focus:outline-none focus:border-accent-gold"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Company Name</label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        placeholder="TechVantage Electronics"
                        className="bg-slate-955 border border-slate-800 rounded-lg py-3 px-4 text-sm text-white focus:outline-none focus:border-accent-gold"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+91 99999 88888"
                        className="bg-slate-950 border border-slate-800 rounded-lg py-3 px-4 text-sm text-white focus:outline-none focus:border-accent-gold"
                      />
                    </div>

                    {["dgft-exim", "customs-compliance", "dgft-hq"].includes(quoteType) && (
                      <div className="flex flex-col gap-2 md:col-span-2">
                        <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Import Export Code (IEC) Number (Optional)</label>
                        <input
                          type="text"
                          value={formData.iecNumber}
                          onChange={(e) => handleInputChange("iecNumber", e.target.value)}
                          placeholder="e.g. 0512345678"
                          className="bg-slate-950 border border-slate-800 rounded-lg py-3 px-4 text-sm text-white focus:outline-none focus:border-accent-gold font-mono"
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Navigation Buttons inside card */}
              <div className="flex justify-between items-center border-t border-slate-800 pt-6 mt-8">
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className={`text-xs font-bold uppercase tracking-wider flex items-center gap-1 transition-colors ${
                    currentStep === 1 ? "text-slate-650 cursor-not-allowed" : "text-slate-400 hover:text-white"
                  }`}
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>

                {currentStep < 4 ? (
                  <Button type="button" onClick={nextStep} variant="primary">
                    <span className="flex items-center gap-1">
                      Continue Step <ArrowRight className="w-4 h-4" />
                    </span>
                  </Button>
                ) : (
                  <Button type="button" onClick={handleFormSubmit} variant="primary">
                    <span className="flex items-center gap-1.5 font-bold">
                      Calculate land custom estimate <Calculator className="w-4 h-4" />
                    </span>
                  </Button>
                )}
              </div>
            </GlassCard>
          </motion.div>
        ) : (
          // SUBMITTED DETAILED RESULTS CARD
          <motion.div
            key="results"
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
                <h3 className="font-display text-xl font-bold text-white mt-2">{quoteResult.title}</h3>
                <p className="text-xs text-slate-400">{quoteResult.subtitle}</p>
                <span className="text-[10px] text-slate-500 font-mono mt-1">Reference: {quoteResult.reference}</span>
              </div>

              {/* Estimate Details */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
                {/* Breakdown details */}
                <div className="md:col-span-7 flex flex-col gap-5 bg-slate-950/50 border border-slate-800/80 rounded-xl p-6 text-sm">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 font-mono">Cost & Specifications Breakdown</span>
                  <div className="flex flex-col gap-3.5">
                    {quoteResult.breakdown.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center text-xs">
                        <span className="text-slate-400">{item.label}</span>
                        <span className="text-slate-300 font-semibold font-mono">{item.value}</span>
                      </div>
                    ))}
                    <div className="flex justify-between items-center border-t border-slate-800 pt-3 text-sm font-semibold">
                      <span className="text-slate-200">Total Estimate</span>
                      <span className="text-accent-gold font-mono font-bold text-base">{quoteResult.costEstimate}</span>
                    </div>
                  </div>
                </div>

                {/* Key indicators */}
                <div className="md:col-span-5 flex flex-col gap-4">
                  <div className="glass-panel p-5 rounded-xl flex items-center gap-4 border border-slate-800 bg-slate-950/40 flex-1">
                    <Clock className="w-8 h-8 text-accent-gold shrink-0" />
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-slate-400 font-mono">Resolution SLA</span>
                      <p className="text-sm font-bold text-white mt-0.5">{quoteResult.timeframe}</p>
                    </div>
                  </div>

                  <div className="glass-panel p-5 rounded-xl flex items-center gap-4 border border-slate-800 bg-slate-950/40 flex-1">
                    <Award className="w-8 h-8 text-accent-gold shrink-0" />
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-slate-400 font-mono">Assigned Partner</span>
                      <p className="text-xs font-bold text-white mt-0.5">Licensed Customs Agent & CHA Attorney</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action checklist */}
              <div className="flex flex-col gap-4">
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 font-mono">Immediate Documents Needed (Pre-Arrival checklist)</span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {quoteResult.checklists.map((item, idx) => (
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
                  <p className="leading-relaxed font-light">{quoteResult.actionGuide}</p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 border-t border-slate-800 pt-6">
                <Button onClick={() => setSubmitted(false)} variant="outline" className="flex-1 !text-white !border-slate-800 hover:!bg-slate-900 hover:!border-slate-700">
                  Quote Another Service
                </Button>
                <Button variant="primary" className="flex-1" href="/contact">
                  <span className="flex items-center gap-1.5 justify-center">
                    Initiate Case Review <ArrowRight className="w-4 h-4" />
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

      {/* Header Banner */}
      <section className="relative pt-36 pb-12 overflow-hidden bg-[#060913]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:48px_48px] opacity-[0.01]" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10 flex flex-col items-center gap-4">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-gold font-mono">Customs & EXIM Wizard</span>
          <h1 className="font-display text-4xl font-extrabold text-white leading-tight">
            Request an Operational Quote
          </h1>
          <p className="text-slate-400 max-w-lg text-sm leading-relaxed font-light">
            Fill in your trade details below to generate a landed customs, licensing, or transit freight estimation.
          </p>
        </div>
      </section>

      {/* Multi-Step Wizard Section */}
      <section className="pb-32 pt-12 bg-premium-dark relative">
        <Suspense fallback={<div className="text-center py-20 text-slate-400">Loading wizard form...</div>}>
          <GetQuoteForm />
        </Suspense>
      </section>

      <Footer />
    </>
  );
}
