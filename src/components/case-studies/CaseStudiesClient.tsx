"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Route } from "lucide-react";

type CaseStudy = {
  title: string;
  category: string;
  route: string;
  challenge: string;
  strategy: string;
  results: string;
  metric: string;
  metricDesc: string;
};

const caseStudies: CaseStudy[] = [
  {
    title: "High-value electronics cleared in under 10 hours",
    category: "Air Cargo",
    route: "Shanghai (CNSHA) → Chennai Air Cargo (MAA)",
    challenge:
      "A microprocessor shipment was sitting at airport customs with production lines about to shut down.",
    strategy:
      "Switched to a Prior Bill of Entry flow — classifications and duty rates pre-assessed with appraisers before the flight landed.",
    results:
      "Cargo dwell time dropped from 4 days to under 10 hours. The client hit every delivery window and skipped demurrage entirely.",
    metric: "40% faster",
    metricDesc: "customs port clearance",
  },
  {
    title: "₹25 lakh duty savings on heavy machinery imports",
    category: "Trade Compliance",
    route: "Frankfurt (FRA) → Nhava Sheva (JNPT)",
    challenge:
      "Wrong tariff classifications and valuation disputes were holding steam turbine imports and stacking up penalty risk.",
    strategy:
      "Restructured duties under the EPCG scheme and filed CEPA FTA benefit certificates to lower the assessed base.",
    results:
      "Customs released the cargo with zero penalties and returned substantial working capital to the importer.",
    metric: "₹25 lakh",
    metricDesc: "duties saved",
  },
  {
    title: "98% compliance across cold-chain biological cargo",
    category: "Air Cargo",
    route: "Rotterdam (NLRTM) → Delhi IGI Airport (DEL)",
    challenge:
      "Health-authority sampling and documentation audits threatened the integrity of temperature-critical product.",
    strategy:
      "Coordinated pre-arrival sample approvals and routed transits through customs-bonded cold storage.",
    results:
      "Clearance in under 8 hours with zero temperature log deviations across the shipment.",
    metric: "98%",
    metricDesc: "compliance check pass rate",
  },
  {
    title: "Direct port delivery cut automotive logistics cost by 30%",
    category: "Ocean Freight",
    route: "Nagoya (NGO) → Nhava Sheva (INNSA)",
    challenge:
      "Port congestion and terminal holds were breaking just-in-time assembly supply lines.",
    strategy:
      "Pre-filed manifests and pre-cleared bills arranged direct port delivery straight onto factory flatbeds.",
    results:
      "Eliminated container terminal waiting, dispatching parts directly to the JIT line.",
    metric: "30% reduced",
    metricDesc: "logistics overhead",
  },
  {
    title: "Hazardous cargo cleared with 98% approval accuracy",
    category: "Customs Clearance",
    route: "Antwerp (ANR) → Mundra (INMUN)",
    challenge:
      "Dangerous-goods manifest filings, environmental approvals, and AQ/PQ terminal delays were stacking up.",
    strategy:
      "Pre-filed hazardous declarations, verified HS codes, and secured prior clearances with partner government agencies.",
    results:
      "A clean release with zero audit inquiries and zero CFS delays.",
    metric: "98%",
    metricDesc: "PGA inspection pass rate",
  },
  {
    title: "Weekly consolidation hub lowered inbound cost by 30%",
    category: "Ocean Freight",
    route: "Shenzhen (CNSZX) → Delhi ICD (TKD)",
    challenge:
      "Split LCL orders from several East Asian exporters were multiplying freight cost and documentation errors.",
    strategy:
      "Built a weekly FCL consolidation hub at Shenzhen, filing one consolidated Bill of Entry per cycle.",
    results:
      "Ocean rates down 30% with the whole import under a single customs file and one tracking view.",
    metric: "30% reduced",
    metricDesc: "inbound freight cost",
  },
];

const categories = [
  "All",
  "Air Cargo",
  "Ocean Freight",
  "Customs Clearance",
  "Trade Compliance",
];

export default function CaseStudiesClient() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? caseStudies
      : caseStudies.filter((c) => c.category === active);

  return (
    <div className="px-4 pb-24 sm:px-6 sm:pb-32">
      <div className="mx-auto max-w-[1140px]">
        <div className="flex flex-wrap items-center gap-2.5">
          {categories.map((cat) => {
            const isActive = cat === active;
            return (
              <motion.button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                whileTap={{ scale: 0.97 }}
                className={`relative rounded-full px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.02em] transition-colors ${
                  isActive ? "text-white" : "text-black/55 hover:text-black"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="case-pill"
                    className="absolute inset-0 rounded-full bg-[#222222]"
                    transition={{ type: "spring", stiffness: 360, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </motion.button>
            );
          })}
        </div>

        <motion.div layout className="mt-10 grid gap-5 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((study) => (
              <motion.article
                layout
                key={study.title}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col rounded-xl border border-black/8 bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(27,54,77,0.1)] sm:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono-ui rounded-full bg-[#edf6fb] px-3 py-1.5 text-[9px] tracking-[0.1em] text-[#6095c2]">
                    {study.category}
                  </span>
                  <span className="rounded-lg bg-[#bfe8ff] px-3 py-2 text-right">
                    <span className="font-display block text-xl font-semibold leading-none tracking-[-0.05em]">
                      {study.metric}
                    </span>
                    <span className="mt-1 block text-[9px] font-medium text-black/55">
                      {study.metricDesc}
                    </span>
                  </span>
                </div>

                <h2 className="font-display mt-6 text-[clamp(1.6rem,2.6vw,2.2rem)] font-semibold leading-[1.02] tracking-[-0.055em]">
                  {study.title}
                </h2>

                <p className="flex items-center gap-2 pt-4 text-xs text-black/50">
                  <Route className="size-3.5 shrink-0 text-[#6095c2]" />
                  <span className="font-mono-ui text-[9px] tracking-[0.08em]">
                    {study.route}
                  </span>
                </p>

                <div className="mt-6 grid gap-4 border-t border-black/8 pt-6 text-sm">
                  <div>
                    <p className="font-mono-ui text-[9px] tracking-[0.12em] text-black/42">CHALLENGE</p>
                    <p className="mt-2 leading-relaxed text-black/62">{study.challenge}</p>
                  </div>
                  <div>
                    <p className="font-mono-ui text-[9px] tracking-[0.12em] text-black/42">PLAN</p>
                    <p className="mt-2 leading-relaxed text-black/62">{study.strategy}</p>
                  </div>
                  <div>
                    <p className="font-mono-ui text-[9px] tracking-[0.12em] text-[#6095c2]">RESULT</p>
                    <p className="mt-2 leading-relaxed text-black/78">{study.results}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}