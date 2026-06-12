"use client";

import { useState, useEffect } from "react";
import { 
  Search, Ship, Plane, Anchor, CheckCircle2, AlertCircle, 
  Clock, FileText, ArrowRight, Compass, Navigation, Radio, Info 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";

// Types
interface ShipmentData {
  id: string;
  type: "ocean" | "air";
  origin: string;
  destination: string;
  carrier: string;
  vesselName: string;
  eta: string;
  status: "cleared" | "processing" | "transit" | "held";
  statusText: string;
  steps: {
    title: string;
    description: string;
    time: string;
    status: "completed" | "current" | "pending";
  }[];
}

interface VesselData {
  id: string;
  name: string;
  imo: string;
  flag: string;
  origin: string;
  destination: string;
  carrier: string;
  status: "transit" | "docked" | "anchored";
  speedKnots: number;
  latitude: number;
  longitude: number;
  course: number; // heading in degrees
  eta: string;
  cargo: string;
}

interface FlightData {
  id: string;
  flightNo: string;
  airline: string;
  aircraft: string;
  origin: string;
  destination: string;
  status: "en-route" | "scheduled" | "landed" | "descending";
  altitudeFt: number;
  speedMph: number;
  latitude: number;
  longitude: number;
  progressPercent: number;
  eta: string;
  cargoWeight: string;
}

// Mock Database
const mockShipments: Record<string, ShipmentData> = {
  "SH-98302": {
    id: "SH-98302",
    type: "ocean",
    origin: "Shanghai Port (CNSHA), China",
    destination: "Nhava Sheva Port (INNSA), India",
    carrier: "Maersk Line (Vessel: MAERSK MC-KINNEY)",
    vesselName: "Maersk Mc-Kinney Møller (Voyage 26A)",
    eta: "June 18, 2026",
    status: "cleared",
    statusText: "Customs Cleared - Out of Charge (OOC) Issued",
    steps: [
      { title: "Origin Gate-In & Export Filing", description: "Completed export customs clearance at Shanghai", time: "June 02, 2026 - 14:30", status: "completed" },
      { title: "Vessel Departure", description: "Loaded onto vessel, sailed from China", time: "June 05, 2026 - 09:15", status: "completed" },
      { title: "Import Bill of Entry Filed", description: "Prior Bill of Entry filed under HS Code 8471.30.10", time: "June 09, 2026 - 11:00", status: "completed" },
      { title: "Customs Valuation & Assessment", description: "Document evaluation & assessment finalized by Appraising Officer", time: "June 10, 2026 - 16:45", status: "completed" },
      { title: "Out-Of-Charge (OOC) Granted", description: "Duty paid, customs gate pass released for cargo dispatch", time: "June 11, 2026 - 10:20", status: "current" },
      { title: "Last Mile Warehouse Delivery", description: "Dispatched from Port CFS to importer warehouse", time: "June 14, 2026 (Est.)", status: "pending" },
    ],
  },
  "SH-55421": {
    id: "SH-55421",
    type: "air",
    origin: "Frankfurt Cargo Terminal (FRA), Germany",
    destination: "IGI Airport Delhi (DEL), India",
    carrier: "Lufthansa Cargo (Flight LH-8402)",
    vesselName: "Boeing 777-F",
    eta: "June 12, 2026",
    status: "processing",
    statusText: "Under Customs Examination - Duty Assessment",
    steps: [
      { title: "Origin Cargo Handover", description: "Handed over to Lufthansa Cargo at Frankfurt Airport", time: "June 08, 2026 - 19:00", status: "completed" },
      { title: "Flight Departure & Arrival", description: "Flight arrived at Delhi IGI Airport cargo complex", time: "June 09, 2026 - 22:30", status: "completed" },
      { title: "Console Unloading & IGM Filed", description: "Import General Manifest submitted to ICEGATE", time: "June 10, 2026 - 02:15", status: "completed" },
      { title: "Customs Assessment & Duty Verification", description: "Assessed under preferential tariff FTA scheme, verify certificates", time: "June 11, 2026 - 08:30", status: "current" },
      { title: "Customs Examination & OOC", description: "Physical check & scan clearance at cargo terminal", time: "Pending assessment", status: "pending" },
      { title: "Warehouse Delivery", description: "Dispatch from terminal gate", time: "June 12, 2026 (Est.)", status: "pending" },
    ],
  },
  "SH-22019": {
    id: "SH-22019",
    type: "ocean",
    origin: "Rotterdam Port (NLRTM), Netherlands",
    destination: "Mundra Port (INMUN), India",
    carrier: "MSC Shipping (Vessel: MSC OSCAR)",
    vesselName: "MSC Oscar (Voyage 98B)",
    eta: "June 24, 2026",
    status: "transit",
    statusText: "In Ocean Transit - En Route to Destination Port",
    steps: [
      { title: "Export Customs Release", description: "Filing and customs release at Rotterdam", time: "June 01, 2026 - 08:00", status: "completed" },
      { title: "Vessel Departed", description: "Vessel departed Rotterdam Port terminal", time: "June 03, 2026 - 18:20", status: "completed" },
      { title: "Ocean Voyage", description: "Vessel traversing Indian Ocean", time: "In Transit", status: "current" },
      { title: "Prior Bill of Entry Filing", description: "Filing documentation to expedite terminal handling", time: "June 20, 2026 (Scheduled)", status: "pending" },
      { title: "Customs Assessment", description: "Assessment of custom duties", time: "June 22, 2026 (Scheduled)", status: "pending" },
      { title: "Out-Of-Charge release", description: "Final cargo release", time: "June 25, 2026 (Scheduled)", status: "pending" },
    ],
  },
};

const mockVessels: Record<string, VesselData> = {
  "MAERSK MC-KINNEY": {
    id: "VS-MAERSK",
    name: "MAERSK MC-KINNEY MOLLER",
    imo: "9632064",
    flag: "Denmark (DK)",
    origin: "Shanghai Port (CNSHA), China",
    destination: "Nhava Sheva (INNSA), India",
    carrier: "APM-Maersk",
    status: "transit",
    speedKnots: 18.5,
    latitude: 12.4568,
    longitude: 58.9876,
    course: 260,
    eta: "June 18, 2026",
    cargo: "18,270 TEU Containerized Cargo",
  },
  "MSC OSCAR": {
    id: "VS-MSC",
    name: "MSC OSCAR",
    imo: "9703318",
    flag: "Panama (PA)",
    origin: "Rotterdam (NLRTM), Netherlands",
    destination: "Mundra Port (INMUN), India",
    carrier: "MSC Mediterranean Shipping Co.",
    status: "transit",
    speedKnots: 19.1,
    latitude: 21.0345,
    longitude: 67.4289,
    course: 115,
    eta: "June 24, 2026",
    cargo: "19,224 TEU Raw Material Consignments",
  }
};

const mockFlights: Record<string, FlightData> = {
  "LH-8402": {
    id: "FL-LH",
    flightNo: "LH8402",
    airline: "Lufthansa Cargo",
    aircraft: "Boeing 777-F (Freighter)",
    origin: "Frankfurt Airport (FRA), Germany",
    destination: "Delhi IGI Airport (DEL), India",
    status: "en-route",
    altitudeFt: 34000,
    speedMph: 515,
    latitude: 31.4284,
    longitude: 62.1938,
    progressPercent: 65,
    eta: "June 12, 2026 - 22:30",
    cargoWeight: "84,500 KG Microprocessor Chips",
  },
  "EK-9884": {
    id: "FL-EK",
    flightNo: "EK9884",
    airline: "Emirates SkyCargo",
    aircraft: "Boeing 777-F",
    origin: "Dubai Al Maktoum (DWC), UAE",
    destination: "Mumbai Airport (BOM), India",
    status: "descending",
    altitudeFt: 14200,
    speedMph: 320,
    latitude: 19.3491,
    longitude: 72.4382,
    progressPercent: 88,
    eta: "June 12, 2026 - 19:45",
    cargoWeight: "92,100 KG High-Value Medical Equipment",
  }
};

export default function CargoTracker() {
  const [activeTab, setActiveTab] = useState<"customs" | "vessel" | "flight">("customs");
  const [searchQuery, setSearchQuery] = useState("");
  const [searched, setSearched] = useState(false);
  const [error, setError] = useState("");

  // Selected details
  const [activeShipment, setActiveShipment] = useState<ShipmentData | null>(null);
  const [activeVessel, setActiveVessel] = useState<VesselData | null>(null);
  const [activeFlight, setActiveFlight] = useState<FlightData | null>(null);

  // Live GPS Simulator hook
  useEffect(() => {
    const interval = setInterval(() => {
      // Small coordinate adjustments to simulate active tracking updates
      setActiveVessel((prev) => {
        if (!prev || prev.status !== "transit") return prev;
        const latChange = (Math.random() - 0.5) * 0.0008;
        const lonChange = (Math.random() - 0.5) * 0.0008;
        return {
          ...prev,
          latitude: Number((prev.latitude + latChange).toFixed(4)),
          longitude: Number((prev.longitude + lonChange).toFixed(4)),
        };
      });

      setActiveFlight((prev) => {
        if (!prev || prev.status !== "en-route" && prev.status !== "descending") return prev;
        const latChange = (Math.random() - 0.4) * 0.003;
        const lonChange = (Math.random() - 0.4) * 0.003;
        const altChange = prev.status === "descending" ? -100 : (Math.random() - 0.5) * 50;
        return {
          ...prev,
          latitude: Number((prev.latitude + latChange).toFixed(4)),
          longitude: Number((prev.longitude + lonChange).toFixed(4)),
          altitudeFt: Math.max(0, Math.round(prev.altitudeFt + altChange)),
          progressPercent: Math.min(99, prev.progressPercent + 0.05),
        };
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchQuery.trim().toUpperCase();
    if (!query) return;

    setError("");
    setSearched(true);

    if (activeTab === "customs") {
      if (mockShipments[query]) {
        setActiveShipment(mockShipments[query]);
      } else {
        setActiveShipment(null);
        setError(`No customs entry found for "${query}". Try "SH-98302" or "SH-55421".`);
      }
    } else if (activeTab === "vessel") {
      const match = Object.values(mockVessels).find(
        (v) => v.name.includes(query) || v.imo === query
      );
      if (match) {
        setActiveVessel({ ...match });
      } else {
        setActiveVessel(null);
        setError(`No ocean vessel tracked matching "${query}". Try "MAERSK MC-KINNEY" or "MSC OSCAR".`);
      }
    } else if (activeTab === "flight") {
      const match = Object.values(mockFlights).find(
        (f) => f.flightNo.includes(query) || f.id.includes(query)
      );
      if (match) {
        setActiveFlight({ ...match });
      } else {
        setActiveFlight(null);
        setError(`No active flight tracked matching "${query}". Try "LH-8402" or "EK-9884".`);
      }
    }
  };

  const loadDemoCode = (code: string) => {
    setSearchQuery(code);
    setError("");
    setSearched(true);

    if (activeTab === "customs" && mockShipments[code]) {
      setActiveShipment(mockShipments[code]);
    } else if (activeTab === "vessel" && mockVessels[code]) {
      setActiveVessel({ ...mockVessels[code] });
    } else if (activeTab === "flight" && mockFlights[code]) {
      setActiveFlight({ ...mockFlights[code] });
    }
  };

  // Switch tabs cleanly and reset states
  const switchTab = (tab: "customs" | "vessel" | "flight") => {
    setActiveTab(tab);
    setSearchQuery("");
    setSearched(false);
    setError("");
    setActiveShipment(null);
    setActiveVessel(null);
    setActiveFlight(null);
  };
  return (
    <div className="w-full">
      {/* Tab Selector Nav */}
      <div className="flex border-b border-slate-800 mb-6 text-xs font-semibold">
        <button
          type="button"
          onClick={() => switchTab("customs")}
          className={`flex-1 py-3 border-b-2 flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            activeTab === "customs"
              ? "border-accent-gold text-accent-gold"
              : "border-transparent text-slate-500 hover:text-slate-200"
          }`}
        >
          <FileText className="w-3.5 h-3.5" /> Customs Status
        </button>
        <button
          type="button"
          onClick={() => switchTab("vessel")}
          className={`flex-1 py-3 border-b-2 flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            activeTab === "vessel"
              ? "border-accent-gold text-accent-gold"
              : "border-transparent text-slate-500 hover:text-slate-200"
          }`}
        >
          <Ship className="w-3.5 h-3.5" /> Vessel AIS
        </button>
        <button
          type="button"
          onClick={() => switchTab("flight")}
          className={`flex-1 py-3 border-b-2 flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            activeTab === "flight"
              ? "border-accent-gold text-accent-gold"
              : "border-transparent text-slate-500 hover:text-slate-200"
          }`}
        >
          <Plane className="w-3.5 h-3.5" /> Flight ADSB
        </button>
      </div>

      {/* Dynamic Search Input */}
      <form onSubmit={handleTrackSubmit} className="flex gap-2.5">
        <div className="relative flex-1">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              activeTab === "customs" 
                ? "Enter B/L, AWB, or Entry Code (e.g. SH-98302)"
                : activeTab === "vessel"
                ? "Enter Vessel Name or IMO (e.g. MSC OSCAR)"
                : "Enter Flight No or Airline code (e.g. LH-8402)"
            }
            className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3.5 pl-11 pr-4 text-white placeholder-slate-500 focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold/10 transition-all font-sans text-xs sm:text-sm shadow-md"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
        </div>
        <Button variant="primary" type="submit" size="sm" className="whitespace-nowrap px-6 text-xs font-bold font-mono">
          RADAR LOCK
        </Button>
      </form>

      {/* Suggested Demo Buttons */}
      <div className="flex flex-wrap items-center gap-2 mt-3.5 text-[10px] sm:text-xs text-slate-400">
        <span className="font-mono uppercase tracking-wider flex items-center gap-1">
          <Radio className="w-3 h-3 text-accent-gold animate-pulse" /> Demo Streams:
        </span>
        {activeTab === "customs" && ["SH-98302", "SH-55421"].map((code) => (
          <button
            key={code}
            type="button"
            onClick={() => loadDemoCode(code)}
            className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 hover:bg-slate-800 transition-all font-mono text-accent-gold cursor-pointer"
          >
            {code}
          </button>
        ))}
        {activeTab === "vessel" && ["MAERSK MC-KINNEY", "MSC OSCAR"].map((v) => (
          <button
            key={v}
            type="button"
            onClick={() => loadDemoCode(v)}
            className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 hover:bg-slate-800 transition-all font-mono text-accent-gold cursor-pointer"
          >
            {v}
          </button>
        ))}
        {activeTab === "flight" && ["LH-8402", "EK-9884"].map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => loadDemoCode(f)}
            className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 hover:bg-slate-800 transition-all font-mono text-accent-gold cursor-pointer"
          >
            {f}
          </button>
        ))}
      </div>

      {/* Results details */}
      <AnimatePresence mode="wait">
        {error && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-6 p-4 rounded-xl border border-red-500/20 bg-red-950/20 text-xs text-red-400 flex items-start gap-2.5"
          >
            <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
            <p>{error}</p>
          </motion.div>
        )}

        {/* CUSTOMS ENTRY DETAILS */}
        {searched && activeTab === "customs" && activeShipment && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-6 p-5 rounded-xl border border-slate-800 bg-slate-900/40 flex flex-col gap-5"
          >
            <div className="flex justify-between items-start border-b border-slate-800 pb-4">
              <div>
                <span className="text-[10px] text-slate-450 font-mono">ICEGATE Entry Ref</span>
                <h4 className="font-mono text-sm font-bold text-white mt-0.5">{activeShipment.id}</h4>
              </div>
              <span className={`px-2 py-0.5 rounded text-[9px] font-bold font-mono border ${
                activeShipment.status === "cleared" 
                  ? "bg-emerald-950/40 text-emerald-400 border-emerald-900/30"
                  : "bg-accent-blue/15 text-accent-blue border-accent-blue/30"
              }`}>
                {activeShipment.statusText}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs font-mono">
              <div>
                <span className="text-slate-500 block text-[9px] uppercase tracking-wider">Origin</span>
                <span className="text-slate-300 mt-1 block truncate">{activeShipment.origin.split(",")[0]}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[9px] uppercase tracking-wider">Destination</span>
                <span className="text-slate-300 mt-1 block truncate">{activeShipment.destination.split(",")[0]}</span>
              </div>
            </div>

            {/* Milestones */}
            <div className="flex flex-col gap-4 pl-3 border-l border-slate-800 ml-2 mt-2">
              {activeShipment.steps.slice(0, 5).map((step, idx) => {
                const isCompleted = step.status === "completed";
                const isCurrent = step.status === "current";
                return (
                  <div key={idx} className="relative text-xs">
                    <span className={`absolute -left-[18px] top-1 w-2.5 h-2.5 rounded-full border-2 border-slate-905 ${
                      isCompleted ? "bg-accent-gold" : isCurrent ? "bg-cyan-500 animate-ping" : "bg-slate-650"
                    }`} />
                    {isCurrent && (
                      <span className="absolute -left-[18px] top-1 w-2.5 h-2.5 rounded-full border-2 border-slate-905 bg-cyan-500" />
                    )}
                    <div>
                      <div className="flex justify-between font-medium">
                        <span className={isCompleted ? "text-slate-300" : isCurrent ? "text-accent-gold font-bold" : "text-slate-550"}>{step.title}</span>
                        <span className="text-[10px] text-slate-500 font-mono">{step.time.split("-")[0]}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* LIVE VESSEL RADAR AIS */}
        {searched && activeTab === "vessel" && activeVessel && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-6 p-5 rounded-xl border border-slate-800 bg-slate-900/40 grid grid-cols-1 md:grid-cols-12 gap-5"
          >
            {/* Radar Sweep Animated SVG */}
            <div className="md:col-span-5 flex items-center justify-center bg-slate-950 rounded-xl p-4 border border-slate-800 relative overflow-hidden">
              <svg className="w-full max-w-[120px] h-auto" viewBox="0 0 100 100">
                {/* Concentric rings */}
                <circle cx="50" cy="50" r="45" fill="none" stroke="#06b6d4" strokeWidth="0.5" className="opacity-25" />
                <circle cx="50" cy="50" r="30" fill="none" stroke="#06b6d4" strokeWidth="0.5" className="opacity-20" />
                <circle cx="50" cy="50" r="15" fill="none" stroke="#06b6d4" strokeWidth="0.5" className="opacity-15" />
                <line x1="50" y1="5" x2="50" y2="95" stroke="#06b6d4" strokeWidth="0.25" className="opacity-20" />
                <line x1="5" y1="50" x2="95" y2="50" stroke="#06b6d4" strokeWidth="0.25" className="opacity-20" />
                
                {/* Sweep line */}
                <line 
                  x1="50" y1="50" x2="50" y2="5" 
                  stroke="#00ffff" strokeWidth="1" 
                  className="animate-radar-sweep origin-center" 
                />
                
                {/* Active Vessel Blip */}
                <g>
                  <circle cx="42" cy="35" r="4" fill="#00ffff" className="animate-ping opacity-75" />
                  <circle cx="42" cy="35" r="2" fill="#00ffff" />
                </g>
              </svg>
              <div className="absolute bottom-2 left-2 flex items-center gap-1 text-[8px] font-mono text-cyan-400 uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-450 animate-ping shrink-0" />
                Live AIS Stream
              </div>
            </div>

            {/* Vessel Data details */}
            <div className="md:col-span-7 flex flex-col gap-3 font-mono text-xs">
              <div className="flex justify-between items-center border-b border-slate-850 pb-2">
                <span className="font-bold text-white tracking-wide text-xs">{activeVessel.name}</span>
                <span className="text-[10px] text-slate-500 font-mono">IMO: {activeVessel.imo}</span>
              </div>

              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                <div>
                  <span className="text-slate-550 text-[9px] block">POSITION</span>
                  <span className="text-accent-gold font-bold block mt-0.5 truncate">
                    {activeVessel.latitude}° N, {activeVessel.longitude}° E
                  </span>
                </div>
                <div>
                  <span className="text-slate-550 text-[9px] block">SPEED</span>
                  <span className="text-slate-300 block mt-0.5">{activeVessel.speedKnots} Knots</span>
                </div>
                <div>
                  <span className="text-slate-550 text-[9px] block">CARRIER</span>
                  <span className="text-slate-300 block mt-0.5 truncate">{activeVessel.carrier}</span>
                </div>
                <div>
                  <span className="text-slate-550 text-[9px] block">ETA PORT</span>
                  <span className="text-slate-300 block mt-0.5 truncate">{activeVessel.eta}</span>
                </div>
              </div>

              <div className="mt-2 p-2 rounded bg-slate-950 border border-slate-850 flex items-start gap-2">
                <Info className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                <span className="text-[9px] text-slate-400 font-light font-sans leading-relaxed">
                  Vessel AIS is broadcasting coordinates securely to customs EDI. Landing bills pre-filed.
                </span>
              </div>
            </div>
          </motion.div>
        )}

        {/* LIVE FLIGHT RADAR ADSB */}
        {searched && activeTab === "flight" && activeFlight && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-6 p-5 rounded-xl border border-slate-800 bg-slate-900/40 flex flex-col gap-4 font-mono text-xs"
          >
            {/* Header info */}
            <div className="flex justify-between items-center border-b border-slate-850 pb-2">
              <div className="flex items-center gap-2">
                <Plane className="w-4 h-4 text-accent-gold" />
                <span className="font-bold text-white text-xs">{activeFlight.flightNo} ({activeFlight.airline})</span>
              </div>
              <span className={`px-2 py-0.5 rounded text-[8px] uppercase tracking-wider font-bold ${
                activeFlight.status === "en-route" 
                  ? "bg-accent-blue/15 text-accent-blue border border-accent-blue/30"
                  : "bg-accent-gold/15 text-accent-gold border border-accent-gold/30"
              }`}>
                {activeFlight.status}
              </span>
            </div>

            {/* Flight Metrics row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-2 border-b border-slate-850">
              <div>
                <span className="text-slate-550 text-[9px] block">ALTITUDE</span>
                <span className="text-slate-350 font-bold block mt-0.5">{activeFlight.altitudeFt.toLocaleString()} FT</span>
              </div>
              <div>
                <span className="text-slate-550 text-[9px] block">AIRSPEED</span>
                <span className="text-slate-350 block mt-0.5">{activeFlight.speedMph} MPH</span>
              </div>
              <div>
                <span className="text-slate-550 text-[9px] block">LATITUDE</span>
                <span className="text-accent-gold block mt-0.5 truncate">{activeFlight.latitude}° N</span>
              </div>
              <div>
                <span className="text-slate-550 text-[9px] block">LONGITUDE</span>
                <span className="text-accent-gold block mt-0.5 truncate">{activeFlight.longitude}° E</span>
              </div>
            </div>

            {/* Flight Progress bar */}
            <div className="flex flex-col gap-1.5 mt-2">
              <div className="flex justify-between text-[9px] text-slate-500">
                <span>{activeFlight.origin.split(" ")[0]}</span>
                <span>{activeFlight.progressPercent.toFixed(1)}% COMPLETE</span>
                <span>{activeFlight.destination.split(" ")[0]}</span>
              </div>
              <div className="h-1.5 w-full bg-slate-950 rounded-full overflow-hidden relative">
                <motion.div 
                  className="h-full bg-accent-gold rounded-full"
                  style={{ width: `${activeFlight.progressPercent}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>
            </div>

            <div className="flex justify-between text-[9px] text-slate-500 mt-1">
              <span>AIRCRAFT: {activeFlight.aircraft}</span>
              <span>CARGO WEIGHT: {activeFlight.cargoWeight.split(" ")[0]} KG</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
