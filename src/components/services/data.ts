import type { StickerName } from "@/components/ui/Sticker";

export type ServiceCategory = {
  id: string;
  number: string;
  title: string;
  short: string;
  sticker: StickerName;
  description: string;
  items: string[];
  pricing: string;
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "dgft-exim",
    number: "01",
    title: "DGFT / EXIM consulting",
    short: "IEC, licences, schemes and certificates, handled end to end.",
    sticker: "handshake",
    description:
      "From your first IEC to advanced export incentive schemes, we manage the full DGFT lifecycle for you: applications, modifications, redemptions and follow-ups. One accountable desk keeps every licence valid and every benefit claimed.",
    items: [
      "IEC and IEC modification",
      "Yearly update, surrender, revocation, suspension, cancellation",
      "IEC merger and demerger",
      "IEC abeyance cases",
      "Advance Authorisation / Advance License issuance and redemption",
      "EPCG license issuance and redemption",
      "DFIA",
      "RoDTEP",
      "TMA",
      "Certificate of Origin",
      "Import Monitoring System cases",
      "Deemed export benefits incl. TED, DBK, brand rate fixation",
      "Star Export House Certificate",
      "Free Sale Certificate",
      "End User Certificate",
      "E-RCMC / RCMC registration",
      "Gems & Jewelry schemes",
      "Interest Equalization Scheme",
      "REX registration",
    ],
    pricing:
      "Transparent fixed fees per filing, agreed before we start. No hidden charges, no surprise add-ons.",
  },
  {
    id: "customs-compliance",
    number: "02",
    title: "Customs & trade compliance",
    short: "Registrations, refunds, notices, bonds and clearance support.",
    sticker: "customs",
    description:
      "Documentation, classification and customs coordination that keeps your cargo moving and keeps duty, refunds and compliance from becoming surprises. We represent you in notices, appeals and audits, and recover what you are owed.",
    items: [
      "AA / EPCG / DFIA license registration",
      "Bond and bank guarantee cancellation for EPCG / Advance License",
      "ICEGATE registration",
      "Section 74 refund",
      "Duty drawback support",
      "Factory stuffing and self-sealing permission",
      "IGST refund support",
      "Removal of IEC from customs alert list",
      "Appeal matters under FTP",
      "GST refund for ITC",
      "AEO certification (T1, T2, T3)",
      "Customs notices reply and follow-up",
      "GST refund for service exporters",
      "AD code / IFSC registration",
      "SIIB matters",
      "SVB matters",
      "First-time importer / exporter registration",
      "Bill of Entry and shipping bill filing",
      "FTA / CEPA / SAFTA duty structuring",
    ],
    pricing:
      "Clear, fixed pricing with no hidden charges. Found a lower written quote for the same scope? Show us and we will work to match it.",
  },
  {
    id: "dgft-hq",
    number: "03",
    title: "DGFT HQ, New Delhi",
    short: "Policy, committee and permission matters at headquarters.",
    sticker: "mapPins",
    description:
      "Some matters can only be settled at DGFT headquarters. We prepare the representation, track it through the committee process and follow up in New Delhi so your case does not sit in a queue.",
    items: [
      "Norms fixation",
      "Policy Relaxation Committee matters",
      "EPCG Committee approvals",
      "Permission for restricted / negative-list import and export items",
      "Registration Certificates for export and import items",
      "DFIA",
      "SCOMET licenses",
      "TRQ / Tariff Rate Quotas",
      "Appeal matters under FTP",
    ],
    pricing:
      "Honest, upfront fees for headquarters work. Best value in the market, with no hidden charges and no padding.",
  },
  {
    id: "certifications",
    number: "04",
    title: "Other certifications",
    short: "DSC, health certificates, EPR and BIS certification.",
    sticker: "customsOfficer",
    description:
      "The certificates that quietly block shipments when they are missing. We get them issued correctly the first time so products can be exported, imported and sold without delay.",
    items: [
      "Digital Signature Certificates",
      "Health Certificate for export products",
      "EPR certification for producers, importers, brand owners",
      "BIS certification",
    ],
    pricing:
      "Fixed, affordable fees with every government charge itemised. What we quote is what you pay.",
  },
  {
    id: "logistics",
    number: "05",
    title: "Logistics & freight",
    short: "Sea, air and land freight with customs, insurance and warehousing.",
    sticker: "ship",
    description:
      "Air, ocean and road run as one connected movement instead of separate quotes stacked on top of each other. We plan the route, the paperwork and the handoffs, then keep you informed until delivery.",
    items: [
      "Sea cargo consolidation import / export",
      "Sea freight forwarding import / export",
      "Air freight import / export",
      "Land freight",
      "Customs clearance",
      "Insurance",
      "International shipping",
      "Freight forwarding",
      "Warehousing",
      "Supply chain management",
    ],
    pricing:
      "Competitive freight rates through consolidation, quoted as one itemised price. No hidden charges, and we are happy to price-match a comparable quote.",
  },
  {
    id: "scrip-trading",
    number: "06",
    title: "Scrip trading",
    short: "Buy and sell RoDTEP, RoSCTL and DFIA scrips.",
    sticker: "tracking",
    description:
      "Turn duty credit scrips into working capital or lower your duty bill. We buy and sell RoDTEP, RoSCTL and DFIA scrips and handle the transfer paperwork cleanly.",
    items: [
      "Buying RoDTEP scrips",
      "Buying RoSCTL scrips",
      "Buying DFIA scrips",
      "Selling RoDTEP scrips",
      "Selling RoSCTL scrips",
      "Selling DFIA scrips",
    ],
    pricing:
      "Fair, transparent rates with no hidden deductions. We aim to give you the best value on both sides of the trade.",
  },
  {
    id: "business-startup",
    number: "07",
    title: "Business & startup services",
    short: "Company, GST, IEC, MSME and APEDA registrations.",
    sticker: "boxes",
    description:
      "Starting a trading or export business? We take you from incorporation to your first shipment with every registration in place, so you can focus on customers rather than paperwork.",
    items: [
      "Company registrations",
      "GST registration and filings",
      "Import Export Code services",
      "MSME registration",
      "APEDA registration",
    ],
    pricing:
      "Startup-friendly fixed packages. Among the most affordable in the market, with no hidden charges.",
  },
];

export const logisticsModes = [
  {
    title: "Air freight",
    image: "/images/trifreight/air-freight.jpg",
    alt: "Aircraft on a runway for air freight",
    text: "Space booking, priority uplift and cold-chain for time-critical cargo.",
  },
  {
    title: "Ocean freight",
    image: "/images/trifreight/ocean-freight.jpg",
    alt: "Cargo ship moving through open water",
    text: "FCL and LCL, weekly consolidation, reefer, ODC and project containers.",
  },
  {
    title: "Road transport",
    image: "/images/trifreight/road-freight.jpg",
    alt: "Freight truck on an open road",
    text: "First and last mile, SAARC cross-border haulage, bonded trucking, live tracking.",
  },
];
