"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { 
  ArrowRight, ShieldCheck, ChevronRight, Award, 
  Users, PhoneCall, Ship, 
  Plane, Anchor, TrendingUp, CheckCircle2,
  ChevronUp, ChevronDown
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import GlassCard from "@/components/ui/GlassCard";
import { servicesCategories } from "@/data/servicesData";

// Services data is imported from src/data/servicesData.tsx



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
  // Dropdown Service Explorer States
  const [selectedCategory, setSelectedCategory] = useState("dgft-exim");
  const [selectedService, setSelectedService] = useState("IEC and IEC Modification");
  const [isCatDropdownOpen, setIsCatDropdownOpen] = useState(false);
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);

  // Case study state
  const [activeCaseIdx, setActiveCaseIdx] = useState(0);
  const activeCase = caseStudiesList[activeCaseIdx];

  return (
    <>
      <Navbar />

      {/* Extraordinary Hero Section - Responsive height for mobile to prevent clipping */}
      <section className="relative min-h-screen lg:h-screen w-full flex flex-col justify-between overflow-hidden lg:overflow-hidden bg-navy-dark">
        
        {/* Dynamic Canvas-like Animated SVG Background */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none opacity-30">
          <svg
            className="w-full h-full"
            viewBox="0 0 1440 900"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            {/* Soft Ambient Glows */}
            <circle cx="200" cy="200" r="300" fill="url(#indigoGlow)" opacity="0.1" />
            <circle cx="1200" cy="700" r="400" fill="url(#cyanGlow)" opacity="0.1" />
            <circle cx="720" cy="450" r="250" fill="url(#royalGlow)" opacity="0.08" />

            {/* Dotted Global Grid Background */}
            <defs>
              <radialGradient id="indigoGlow" cx="0.5" cy="0.5" r="0.5">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#070a13" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="cyanGlow" cx="0.5" cy="0.5" r="0.5">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#070a13" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="royalGlow" cx="0.5" cy="0.5" r="0.5">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#070a13" stopOpacity="0" />
              </radialGradient>

              {/* Grid pattern */}
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.015)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="1440" height="900" fill="url(#grid)" />

            {/* Dotted Floating World Map Silhouette */}
            <g opacity="0.1" stroke="#f8fafc" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="3 6">
              <path d="M 100,200 C 120,180 180,180 200,220 C 220,260 280,240 300,280 C 310,300 290,320 280,340 C 250,370 200,350 180,390 C 170,410 150,450 130,440" />
              <path d="M 280,450 C 300,470 330,520 320,580 C 310,640 290,700 270,740 C 260,760 240,780 230,800 C 215,770 230,700 240,650 C 250,600 260,550 250,500 C 240,460 260,440 280,450 Z" />
              <path d="M 480,220 C 530,160 600,140 700,160 C 800,180 900,120 1000,150 C 1100,180 1200,200 1250,250 C 1300,300 1280,350 1220,380 C 1150,410 1100,380 1050,400 C 1000,420 950,480 880,500 C 830,520 780,450 720,430 C 650,400 580,380 540,320 C 500,260 460,240 480,220 Z" />
              <path d="M 520,380 C 560,370 620,390 650,430 C 680,470 700,520 690,570 C 680,620 630,680 600,720 C 580,740 560,760 550,750 C 540,730 535,690 540,650 C 545,610 520,570 510,530 C 500,490 495,450 520,380 Z" />
              <path d="M 1100,600 C 1150,580 1200,610 1220,650 C 1240,690 1210,740 1180,750 C 1140,760 1100,720 1080,680 C 1070,640 1080,610 1100,600 Z" />
            </g>

            {/* Global Trade Routes - Curved Paths */}
            <path id="route-asia-europe" d="M 1150,300 Q 800,100 520,240" fill="none" stroke="url(#routeGradient1)" strokeWidth="1.5" strokeDasharray="5 5" className="animate-dash" />
            <path id="route-us-india" d="M 180,260 C 450,150 650,180 820,320" fill="none" stroke="url(#routeGradient2)" strokeWidth="1.5" strokeDasharray="5 5" className="animate-dash" />
            <path id="route-ocean-eu-india" d="M 480,250 C 420,350 490,580 610,700 C 700,780 730,680 810,480" fill="none" stroke="url(#routeGradient3)" strokeWidth="1.2" strokeDasharray="8 4" className="animate-dash" />
            <path id="route-ocean-china-india" d="M 1200,360 C 1150,480 1000,550 900,560 C 850,565 820,530 805,485" fill="none" stroke="url(#routeGradient4)" strokeWidth="1.2" strokeDasharray="8 4" className="animate-dash" />

            {/* Gradients for Routes */}
            <defs>
              <linearGradient id="routeGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="routeGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="routeGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="routeGradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.3" />
              </linearGradient>
            </defs>

            {/* Moving Cargo Ships & Airplanes using animateMotion */}
            <g fill="#f59e0b">
              <path d="M-6,-4 L6,0 L-6,4 L-3,0 Z" />
              <circle r="2" fill="#ffffff" />
              <animateMotion dur="18s" repeatCount="indefinite" rotate="auto">
                <mpath href="#route-asia-europe" />
              </animateMotion>
            </g>

            <g fill="#3b82f6">
              <path d="M-6,-4 L6,0 L-6,4 L-3,0 Z" />
              <circle r="2" fill="#ffffff" />
              <animateMotion dur="24s" repeatCount="indefinite" rotate="auto">
                <mpath href="#route-us-india" />
              </animateMotion>
            </g>

            <g fill="#06b6d4">
              <path d="M-8,-2 L4,-2 L7,1 L5,3 L-7,3 L-9,1 Z" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
              <rect x="-4" y="-4" width="4" height="2" fill="#f59e0b" />
              <animateMotion dur="45s" repeatCount="indefinite" rotate="auto">
                <mpath href="#route-ocean-eu-india" />
              </animateMotion>
            </g>

            <g fill="#10b981">
              <path d="M-8,-2 L4,-2 L7,1 L5,3 L-7,3 L-9,1 Z" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
              <rect x="-3" y="-4" width="4" height="2" fill="#3b82f6" />
              <animateMotion dur="35s" repeatCount="indefinite" rotate="auto">
                <mpath href="#route-ocean-china-india" />
              </animateMotion>
            </g>
          </svg>
        </div>

        {/* Floating Abstract Map Glow (Mesh Background) */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-amber-500/5 to-cyan-500/2 blur-[120px] animate-pulse-slow" />
        </div>

        {/* Spacer for Sticky Nav */}
        <div className="h-[88px] shrink-0" />

        {/* Center: Main Hero Presentation Content */}
        <div className="max-w-7xl mx-auto px-6 w-full flex-1 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 py-6">
          {/* Asymmetric Left Text details */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 }
              }
            }}
            className="lg:col-span-7 flex flex-col gap-6 text-left"
          >
            {/* Top Subheading label */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
              }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 w-fit shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-accent-gold animate-ping" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] text-slate-300 font-mono">
                Licensed Customs Broker & 3PL Carrier
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]"
            >
              Customs Clearance & <br />
              Global Logistics <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500">
                Without Delays
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="text-slate-400 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl font-light"
            >
              Helping businesses import and export goods seamlessly across international borders with expert customs clearance, freight forwarding, and compliance management.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              className="flex flex-col sm:flex-row items-center gap-4 mt-2"
            >
              <Button href="/get-quote" variant="primary" size="lg" className="w-full sm:w-auto text-sm tracking-wide">
                <span className="flex items-center gap-2">
                  Get Instant Quote <ArrowRight className="w-4 h-4" />
                </span>
              </Button>
              <Button href="/contact" variant="secondary" size="lg" className="w-full sm:w-auto text-sm tracking-wide">
                <span className="flex items-center gap-2">
                  Talk to an Expert <PhoneCall className="w-4 h-4 text-accent-gold" />
                </span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column: Clean Ports Status Visual with Company Logo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="lg:col-span-5 w-full hidden lg:block font-mono"
          >
            <GlassCard glowColor="emerald" className="w-full p-8 bg-slate-900/40 border-slate-800 shadow-xl flex flex-col gap-6 items-center text-center relative overflow-hidden group">
              {/* Gold glow in the card */}
              <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-amber-500/10 blur-[80px]" />
              
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden bg-white p-2.5 shadow-lg border border-slate-700 transition-transform duration-500 group-hover:scale-105">
                <img src="/logo.jpg" alt="Sheetla Exim Logo" className="w-full h-full object-contain" />
              </div>
              
              <div>
                <h3 className="font-display font-extrabold text-xl text-white tracking-wide">SHEETLA EXIM</h3>
                <p className="text-[10px] text-accent-gold font-mono mt-1 font-semibold tracking-widest uppercase">SINCE 2016</p>
              </div>

              <div className="w-full border-t border-slate-800/80 pt-5">
                <div className="flex items-center justify-between text-[11px] font-mono mb-3 text-slate-400">
                  <span className="flex items-center gap-1.5 text-slate-300 font-sans">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Customs Clearance Queue
                  </span>
                  <span className="text-emerald-400 font-bold bg-emerald-950/40 px-2 py-0.5 rounded text-[9px]">ONLINE</span>
                </div>
                <div className="grid grid-cols-2 gap-2.5 text-left text-[10px] text-slate-400">
                  <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                    <span className="text-slate-500 block text-[9px]">Delhi Air Cargo</span>
                    <span className="text-slate-200 font-mono font-semibold">Cleared &lt; 6 hrs</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                    <span className="text-slate-500 block text-[9px]">Nhava Sheva Sea</span>
                    <span className="text-slate-200 font-mono font-semibold">Cleared &lt; 12 hrs</span>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>

        {/* Bottom: Glassmorphic Trust indicators strip */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full z-10 bg-gradient-to-t from-premium-dark to-transparent pt-8 pb-8"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="glass-panel rounded-2xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-0 text-center">
              {/* Stat 1 */}
              <div className="flex flex-col justify-center items-center p-4 border-r border-b border-slate-800/50 md:border-b-0 md:pb-0 md:pr-4">
                <p className="font-display text-2xl sm:text-3xl font-extrabold text-white text-gradient">5000+</p>
                <p className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-400 font-mono mt-1.5 font-medium">Shipments Cleared</p>
              </div>
              {/* Stat 2 */}
              <div className="flex flex-col justify-center items-center p-4 border-b border-slate-800/50 md:border-b-0 md:border-r md:pb-0 md:px-4">
                <p className="font-display text-2xl sm:text-3xl font-extrabold text-white text-gradient">100+</p>
                <p className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-400 font-mono mt-1.5 font-medium">Global Trade Partners</p>
              </div>
              {/* Stat 3 */}
              <div className="flex flex-col justify-center items-center p-4 border-r border-slate-800/50 md:border-r md:border-b-0 md:pt-0 md:px-4">
                <p className="font-display text-2xl sm:text-3xl font-extrabold text-white text-gradient">Monday-Saturday</p>
                <p className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-400 font-mono mt-1.5 font-medium"> 9am - 7pm</p>
              </div>
              {/* Stat 4 */}
              <div className="flex flex-col justify-center items-center p-4 md:pt-0 md:pl-4">
                <p className="font-display text-2xl sm:text-3xl font-extrabold text-white text-gradient">98%</p>
                <p className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-400 font-mono mt-1.5 font-medium">On-Time Clearance</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Interactive Services Section */}
      <section className="py-24 bg-[#060913] relative border-t border-slate-900 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-accent-gold/5 blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-gold font-mono">Service Explorer</span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mt-3">
              Explore Our Capabilities
            </h2>
            <p className="text-slate-400 mt-4 text-sm font-light">
              Select a service category and specific service below to view detailed compliance info and request an immediate estimate.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {/* Dropdowns Console */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 rounded-2xl bg-slate-950/40 border border-slate-800/80 backdrop-blur-md relative z-30">
              
              {/* Category Select */}
              <div className="flex flex-col gap-2 relative">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">Service Category</label>
                
                <button
                  onClick={() => {
                    setIsCatDropdownOpen(!isCatDropdownOpen);
                    setIsServiceDropdownOpen(false);
                  }}
                  className="w-full flex items-center justify-between gap-3 p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-white hover:border-accent-gold/40 cursor-pointer transition-all shadow-md group text-left"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-md bg-slate-950 border border-slate-800 flex items-center justify-center text-accent-gold shrink-0">
                      {servicesCategories.find(c => c.id === selectedCategory)?.icon || servicesCategories[0].icon}
                    </div>
                    <span className="text-xs font-bold">{servicesCategories.find(c => c.id === selectedCategory)?.title || servicesCategories[0].title}</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${isCatDropdownOpen ? "rotate-180 text-accent-gold" : ""}`} />
                </button>

                {/* Category Dropdown List */}
                <AnimatePresence>
                  {isCatDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 right-0 mt-2 p-2 rounded-xl bg-slate-950/95 border border-slate-800/80 backdrop-blur-xl shadow-2xl flex flex-col gap-1 z-40 max-h-[250px] overflow-y-auto"
                    >
                      {servicesCategories.map((cat) => (
                        <button
                          key={cat.id}
                          onClick={() => {
                            setSelectedCategory(cat.id);
                            setIsCatDropdownOpen(false);
                            if (cat.services.length > 0) {
                              setSelectedService(cat.services[0].name);
                            }
                          }}
                          className={`w-full flex items-center gap-3 p-2 rounded-lg text-left cursor-pointer transition-all ${
                            selectedCategory === cat.id
                              ? "bg-slate-900 border border-slate-800 text-white"
                              : "text-slate-400 hover:text-white hover:bg-slate-900/60"
                          }`}
                        >
                          <div className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 ${
                            selectedCategory === cat.id ? "bg-slate-950 text-accent-gold" : "bg-slate-900 text-slate-500"
                          }`}>
                            {cat.icon}
                          </div>
                          <span className="text-xs font-semibold">{cat.title}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Service Select */}
              <div className="flex flex-col gap-2 relative">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">Specific Service</label>
                
                <button
                  onClick={() => {
                    setIsServiceDropdownOpen(!isServiceDropdownOpen);
                    setIsCatDropdownOpen(false);
                  }}
                  className="w-full flex items-center justify-between gap-3 p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-white hover:border-accent-gold/40 cursor-pointer transition-all shadow-md group text-left"
                >
                  <span className="text-xs font-bold truncate">{selectedService}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${isServiceDropdownOpen ? "rotate-180 text-accent-gold" : ""}`} />
                </button>

                {/* Service Dropdown List */}
                <AnimatePresence>
                  {isServiceDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 right-0 mt-2 p-2 rounded-xl bg-slate-950/95 border border-slate-800/80 backdrop-blur-xl shadow-2xl flex flex-col gap-1 z-40 max-h-[250px] overflow-y-auto"
                    >
                      {(servicesCategories.find(c => c.id === selectedCategory)?.services || []).map((s, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setSelectedService(s.name);
                            setIsServiceDropdownOpen(false);
                          }}
                          className={`w-full p-2.5 rounded-lg text-left cursor-pointer transition-all text-xs font-semibold ${
                            selectedService === s.name
                              ? "bg-slate-900 border border-slate-800 text-white"
                              : "text-slate-400 hover:text-white hover:bg-slate-900/60"
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

            {/* Selected Service Detail Card */}
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
                    transition={{ duration: 0.2 }}
                  >
                    <GlassCard glowColor="gold" className="p-8 bg-slate-900/40 border-slate-800 shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                      <div className="flex-1 flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-accent-gold shadow-sm shrink-0">
                            {activeCategoryObj?.icon}
                          </div>
                          <div>
                            <span className="text-[10px] text-accent-gold font-mono uppercase tracking-widest">{activeCategoryObj?.subtitle}</span>
                            <h4 className="font-display text-lg sm:text-xl font-bold text-white mt-0.5">{activeServiceObj.name}</h4>
                          </div>
                        </div>
                        <p className="text-slate-300 text-sm leading-relaxed font-light pl-1">
                          {activeServiceObj.desc}
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0 w-full md:w-auto">
                        <Button
                          href={`/get-quote?service=${encodeURIComponent(activeServiceObj.name)}&category=${selectedCategory}`}
                          variant="primary"
                          className="w-full text-center py-3 px-6 text-sm font-bold tracking-wide"
                        >
                          <span className="flex items-center justify-center gap-2">
                            Get Instant Estimate <ArrowRight className="w-4 h-4" />
                          </span>
                        </Button>
                        <Button
                          href="/services"
                          variant="outline"
                          className="w-full text-center py-3 px-6 text-sm !text-white !border-slate-800 hover:!bg-slate-900 hover:!border-slate-700"
                        >
                          View Guide
                        </Button>
                      </div>
                    </GlassCard>
                  </motion.div>
                );
              })()}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Premium Case Studies Section - Stateful Enterprise Operations Dashboard */}
      <section className="py-28 bg-[#05070d] relative border-t border-slate-900 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-accent-gold/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-accent-blue/5 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-gold font-mono">Performance Audits</span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mt-3">
              Clearance Operations Console
            </h2>
            <p className="text-slate-400 mt-4 text-sm sm:text-base font-light">
              Inspect verified case studies, routes, and duty reduction audit metrics across six global industries.
            </p>
          </div>

          {/* Grid Layout: Left selector, Right Display console */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left selector panel: 6 case studies tabs */}
            <div className="lg:col-span-4 flex flex-col gap-3 h-full justify-start">
              <span className="text-[10px] font-bold font-mono text-slate-400 uppercase tracking-widest px-2 mb-1">
                Select Case Log
              </span>
              
              <div className="flex flex-col gap-2.5">
                {caseStudiesList.map((cs, idx) => {
                  const isActive = activeCaseIdx === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveCaseIdx(idx)}
                      className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                        isActive
                          ? "bg-slate-900 border-accent-gold text-white shadow-sm"
                          : "bg-slate-950/40 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-900/60"
                      }`}
                    >
                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                          {cs.industry} Client
                        </span>
                        <span className="text-xs font-bold font-display">{cs.clientName}</span>
                      </div>
                      <div className={`px-2 py-1 rounded text-[9px] font-bold font-mono ${
                        isActive ? "bg-accent-gold/20 text-accent-gold" : "bg-slate-900 text-slate-500"
                      }`}>
                        {cs.metric.split(" ")[0]}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Display panel: active dashboard details */}
            <div className="lg:col-span-8 h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCaseIdx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="h-full"
                >
                  <GlassCard hoverEffect={false} glowColor="gold" className="p-8 h-full flex flex-col justify-between bg-slate-900/40 border-slate-800 shadow-xl">
                    
                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-800 pb-6 mb-6">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] font-bold font-mono text-accent-gold uppercase tracking-widest bg-accent-gold/15 border border-accent-gold/30 px-2 py-0.5 rounded">
                            {activeCase.industry}
                          </span>
                          <span className="text-slate-600 text-xs font-mono">•</span>
                          <span className="text-xs font-bold text-slate-200 font-display">{activeCase.clientName}</span>
                        </div>
                        <p className="text-xs text-slate-400 mt-2 font-mono flex items-center gap-1.5">
                          <Anchor className="w-3.5 h-3.5 text-accent-gold" />
                          Route: {activeCase.route}
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
                        <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-950/40 px-2 py-0.5 rounded">
                          AUDIT CLEAR
                        </span>
                      </div>
                    </div>

                    {/* Operational widgets */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-sm">
                      <div className="p-5 rounded-xl border border-slate-800/80 bg-slate-950/50">
                        <h5 className="text-[10px] font-bold uppercase tracking-wider text-rose-500 font-mono mb-2">Operations Challenge</h5>
                        <p className="text-slate-400 text-xs leading-relaxed font-light">{activeCase.challenge}</p>
                      </div>
                      <div className="p-5 rounded-xl border border-slate-800/80 bg-slate-950/50">
                        <h5 className="text-[10px] font-bold uppercase tracking-wider text-accent-blue font-mono mb-2">Custom Broker Solution</h5>
                        <p className="text-slate-400 text-xs leading-relaxed font-light">{activeCase.solution}</p>
                      </div>
                      <div className="p-5 rounded-xl border border-slate-800/80 bg-slate-950/50">
                        <h5 className="text-[10px] font-bold uppercase tracking-wider text-emerald-500 font-mono mb-2">Verified Outcomes</h5>
                        <p className="text-slate-400 text-xs leading-relaxed font-light">{activeCase.results}</p>
                      </div>
                    </div>

                    {/* Analytics metric badge */}
                    <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-accent-gold/10 border border-accent-gold/20 flex items-center justify-center text-accent-gold shrink-0">
                          <TrendingUp className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-2xl font-extrabold text-white font-display text-gradient-accent leading-none">
                            {activeCase.metric}
                          </p>
                          <p className="text-[9px] uppercase tracking-wider text-slate-400 font-mono mt-1.5">
                            {activeCase.metricLabel}
                          </p>
                        </div>
                      </div>

                      <Button href="/get-quote" variant="outline" size="sm" className="w-full sm:w-auto text-xs !text-white !border-slate-800 hover:!bg-slate-900 hover:!border-slate-700">
                        <span className="flex items-center gap-1.5">
                          Simulate Customs Plan <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </Button>
                    </div>

                  </GlassCard>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>


      {/* CTA section */}
      <section className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900">
        <div className="absolute top-0 right-0 w-[40%] h-[40%] rounded-full bg-accent-gold/5 blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center flex flex-col items-center gap-6">
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white max-w-2xl leading-tight">
            Ready to Optimize Your Global Custom Operations?
          </h2>
          <p className="text-slate-350 text-sm sm:text-base max-w-xl leading-relaxed font-light">
            Get in touch with a licensed customs broker and shipping specialist to set up pre-filings, coordinate rates, or run a duty compliance assessment.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto justify-center">
            <Button href="/get-quote" variant="primary" size="lg" className="w-full sm:w-auto">
              <span className="flex items-center gap-2">
                Calculate Official Quote <ArrowRight className="w-4 h-4" />
              </span>
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="w-full sm:w-auto !text-white !border-slate-800 hover:!bg-slate-900 hover:!border-slate-700">
              Talk to a Customs Specialist
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
