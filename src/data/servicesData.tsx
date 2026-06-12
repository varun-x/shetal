import React from "react";
import { 
  FileSpreadsheet, ShieldCheck, Building, Award, 
  Ship, TrendingUp, Users, FileCheck, CheckCircle2, 
  HelpCircle, Scale, ClipboardCheck, Anchor, Compass 
} from "lucide-react";

export interface ServiceItem {
  name: string;
  desc: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  description: string;
  icon: React.ReactNode;
  iconName: string;
  services: ServiceItem[];
}

export const servicesCategories: ServiceCategory[] = [
  {
    id: "dgft-exim",
    title: "DGFT / EXIM Consulting",
    subtitle: "Import-Export Licensing & Regulatory Affairs",
    shortDesc: "End-to-end licensing, updates, registrations, and schemes under Foreign Trade Policy.",
    description: "Navigate the complex landscape of Director General of Foreign Trade (DGFT) regulations. We secure permissions, setup registrations, handle abeyance cases, and maximize your export incentive benefits.",
    iconName: "FileSpreadsheet",
    icon: <FileSpreadsheet className="w-6 h-6 text-accent-cyan" />,
    services: [
      { name: "IEC and IEC Modification", desc: "Fast-track Import Export Code profile registrations, modifications, yearly updates, surrender, revocation, suspension, cancellation, merger, and demerger." },
      { name: "Advance Authorisation / Advance License", desc: "Setup, issuance, and redemption of duty-free raw material import authorizations with rigorous tracking." },
      { name: "EPCG License Support", desc: "Export Promotion Capital Goods license issuance and redemption to import capital goods at zero customs duty." },
      { name: "DFIA (Duty Free Import Authorisation)", desc: "Facilitation of post-export duty-free imports of raw materials." },
      { name: "RoDTEP Benefits", desc: "Calculation and processing of Remission of Duties and Taxes on Exported Products." },
      { name: "TMA (Transport and Marketing Assistance)", desc: "Subsidy processing for transport and marketing assistance of specified agricultural export products." },
      { name: "Certificate of Origin (CoO)", desc: "Processing preferential and non-preferential Certificates of Origin with export chambers." },
      { name: "Import Monitoring System Cases", desc: "Expert representation for CHIMS (Coal), SIMS (Steel), NFMIMS (Non-Ferrous Metals), and other monitoring systems." },
      { name: "Deemed Export Benefits", desc: "Complete support for TED (Terminal Excise Duty) refunds, DBK (Drawback), and Brand Rate Fixation." },
      { name: "Star Export House Certificate", desc: "Applying for and securing 1 to 5-Star status based on export performance thresholds." },
      { name: "Free Sale & End User Certificates", desc: "Securing certifications for medical/general goods and coordinating End User Certificate declarations." },
      { name: "E-RCMC / RCMC Registration", desc: "Registration-cum-Membership Certificate setup across EPCs (Export Promotion Councils)." },
      { name: "Gems & Jewelry Schemes", desc: "Liaison for replenishment licenses, gold metal loans, and jewelry export schemes." },
      { name: "Interest Equalization Scheme", desc: "Availing pre and post-shipment rupee export credit subsidies." },
      { name: "REX Registration", desc: "Registered Exporter System registration for exporting to European Union countries." },
      { name: "IEC Abeyance Cases", desc: "Legal representation and resolution of Import Export Code abeyance and suspension issues." }
    ]
  },
  {
    id: "customs-compliance",
    title: "Customs & Trade Compliance",
    subtitle: "Custom House Brokerage & Dispute Resolution",
    shortDesc: "Registration, bond cancellations, refunds, SVB/SIIB audits, and representation.",
    description: "Mitigate trade compliance risks and recover custom duty refunds. Our experienced customs specialists handle notices, appeals, customs audits, and registrations across major Indian ports.",
    iconName: "ShieldCheck",
    icon: <ShieldCheck className="w-6 h-6 text-accent-blue" />,
    services: [
      { name: "AA / EPCG / DFIA License Registration", desc: "Registering licenses with customs ports (EDI system) for smooth duty-free import clearances." },
      { name: "Bond & Bank Guarantee Cancellation", desc: "Filing closure reports and getting bonds/BGs cancelled for EPCG or Advance Licenses." },
      { name: "ICEGATE Registration", desc: "Setting up secure credentials on the Indian Customs Electronic Gateway for digital filing." },
      { name: "Section 74 Duty Drawback", desc: "Claiming 98% refund of import duty paid on goods re-exported within specified timelines." },
      { name: "Duty Drawback Support (Section 75)", desc: "Assisting exporters in claiming standard drawback rates or fixing special brand rates." },
      { name: "Factory Stuffing & Self-Sealing", desc: "Securing permissions for container stuffing at factories with digital self-sealing locks." },
      { name: "IGST Refund Support", desc: "Resolving customs transmission errors (SB005, SB006) to clear pending IGST export refunds." },
      { name: "Removal of IEC from Customs Alert List", desc: "Representing importers to clear suspensions or holds placed on IECs by Customs/DRI." },
      { name: "FTP Appeals and Legal Matters", desc: "Drafting appeals, replies, and representing clients before Commissioner (Appeals) or Appellate Committees." },
      { name: "GST Refund for ITC & Service Exporters", desc: "Processing Input Tax Credit refunds for exporters and GST refunds on service exports under LUT." },
      { name: "AEO Certification (T1, T2, T3)", desc: "Securing Authorized Economic Operator status to enjoy priority customs clearance and reduced bank guarantees." },
      { name: "Customs Notices Reply & Follow-up", desc: "Drafting professional defenses for show-cause notices (SCN), valuation disputes, and classification audits." },
      { name: "AD Code & IFSC Registration", desc: "Registering Authorized Dealer (AD) codes and bank IFSCs with ICEGATE ports for export payout clearances." },
      { name: "SIIB & SVB Matters", desc: "Liaison and representation in Special Valuation Branch (SVB) transfer pricing cases and SIIB investigations." },
      { name: "First-time Importer/Exporter Registration", desc: "Setup, onboarding, and baseline custom compliance mapping for first-time traders." }
    ]
  },
  {
    id: "dgft-hq",
    title: "DGFT HQ, New Delhi Representation",
    subtitle: "Central Ministry Approvals & Policy Liaison",
    shortDesc: "Norms fixation, Policy Relaxation Committee approvals, and restricted licenses.",
    description: "Get direct representation at DGFT headquarters (Udyog Bhawan, New Delhi) for complex matters requiring Policy Relaxation Committee (PRC) decisions, custom norms fixation, and restricted list licenses.",
    iconName: "Building",
    icon: <Building className="w-6 h-6 text-indigo-400" />,
    services: [
      { name: "Norms Fixation (ALC)", desc: "Representing cases before the Norms Committee to fix input-output norms (SION) where standard norms do not exist." },
      { name: "Policy Relaxation Committee (PRC) Cases", desc: "Liaison for relaxation of Foreign Trade Policy provisions, extension of export obligations, or delay condonation." },
      { name: "EPCG Committee Approvals", desc: "Securing permissions from the central committee for capital goods deviations or special imports." },
      { name: "Restricted / Negative List Licenses", desc: "Applying for import/export licenses of restricted items under the ITC (HS) schedule." },
      { name: "Registration Certificates (RC)", desc: "Securing mandatory central registrations for specific export and import commodity groups." },
      { name: "SCOMET Licenses", desc: "Procuring authorizations for export of Special Chemicals, Organisms, Materials, Equipment, and Technologies." },
      { name: "TRQ (Tariff Rate Quotas) Allocations", desc: "Securing duty-free import quotas for specific food products, oils, and industrial items." }
    ]
  },
  {
    id: "logistics",
    title: "Logistics & Freight Forwarding",
    subtitle: "Global Cargo Routing & Terminal Clearing",
    shortDesc: "End-to-end international ocean, air, and land freight forwarding and 3PL.",
    description: "Seamless global supply chain coordination. We leverage carrier contracts, consolidated cargo hubs, custom-bonded trucking, and premium warehousing to deliver door-to-door.",
    iconName: "Ship",
    icon: <Ship className="w-6 h-6 text-emerald-400" />,
    services: [
      { name: "Sea Cargo Consolidation & Forwarding", desc: "Global shipping networks for full container loads (FCL) and consolidated less-than-container loads (LCL)." },
      { name: "Air Freight Forwarding", desc: "Securing priority cargo space and direct airline contracts across major trade lanes." },
      { name: "Land Freight & Bonded Trucking", desc: "Custom-bonded transits from port terminals (CFS) to domestic distribution hubs." },
      { name: "Customs Clearance (CHA)", desc: "Licensed Custom House Agent clearance for air, ocean, and ICD cargo." },
      { name: "Transit & Cargo Insurance", desc: "Securing comprehensive cargo insurance against transport damage or shipping losses." },
      { name: "International Shipping Coordination", desc: "End-to-end multimodal logistics linking origin factory pick-ups with final destination ports." },
      { name: "Warehousing & 3PL Solutions", desc: "Custom-bonded storage, inventory tracking, picking, packing, and distribution." },
      { name: "Supply Chain Management Advisory", desc: "Audit and consulting to optimize shipping routes, minimize demurrage, and reduce transit lead times." }
    ]
  },
  {
    id: "scrip-trading",
    title: "Scrip Trading",
    subtitle: "Maximize Value of Duty Incentives",
    shortDesc: "Secure buying and selling of RoDTEP, RoSCTL, and DFIA duty credit scrips.",
    description: "Turn duty credits into cash. We facilitate secure, compliant transactions for buying and selling RoDTEP, RoSCTL, and DFIA scrips at competitive premium and discount rates.",
    iconName: "TrendingUp",
    icon: <TrendingUp className="w-6 h-6 text-amber-500" />,
    services: [
      { name: "Buying Duty Credit Scrips", desc: "Save on customs duties by purchasing RoDTEP, RoSCTL, or DFIA scrips at discounted market rates to pay import duties." },
      { name: "Selling Export Incentive Scrips", desc: "Liquidate your RoDTEP, RoSCTL, or DFIA scrips quickly at best market premiums with secure payouts." },
      { name: "Scrip Compliance & Transfer Audits", desc: "Verifying scrip authenticity and documenting transfers securely on custom portals (ICEGATE)." }
    ]
  },
  {
    id: "business-services",
    title: "Business & Startup Services",
    subtitle: "Corporate Inception & Basic Registrations",
    shortDesc: "Company registrations, GST filings, MSME setup, and APEDA licensing.",
    description: "Launch your trading business with proper legal licensing. We manage all initial company setups, tax registrations, and trade organization memberships.",
    iconName: "Users",
    icon: <Users className="w-6 h-6 text-rose-400" />,
    services: [
      { name: "Company Registrations", desc: "Incorporation services for Private Limited companies, LLPs, OPCs, and partnership structures." },
      { name: "GST Registration & Filings", desc: "Procuring Goods and Services Tax numbers and handling monthly return compliance (GSTR-1, 3B)." },
      { name: "Import Export Code (IEC) Services", desc: "Complete initial set-up of the essential DGFT trader profile file." },
      { name: "MSME / Udyam Registration", desc: "Registering businesses under MSME to avail government loans, interest subsidies, and protections." },
      { name: "APEDA Registration", desc: "Membership registration with the Agricultural and Processed Food Products Export Development Authority." }
    ]
  },
  {
    id: "certifications",
    title: "Other Certifications",
    subtitle: "Technical & Quality Clearances",
    shortDesc: "Extended Producer Responsibility (EPR), BIS quality control, Health, and DSC.",
    description: "Secure mandatory technical, quality, and environmental clearances required for specific import and export commodities before they land at custom terminals.",
    iconName: "FileCheck",
    icon: <FileCheck className="w-6 h-6 text-teal-400" />,
    services: [
      { name: "Digital Signature Certificates (DSC)", desc: "Class 3 DSCs required for safe digital signing on customs, GST, and DGFT portals." },
      { name: "Health Certificate for Exports", desc: "Securing quality health certificates for animal products, food, and agricultural exports." },
      { name: "EPR Certification (Producer, Importer, Brand Owner)", desc: "extended Producer Responsibility registration for plastic, e-waste, battery, and tyre imports." },
      { name: "BIS Certification Support", desc: "Bureau of Indian Standards approval liaison for electronics, toys, steel products, and chemicals." }
    ]
  }
];

export const allServicesList = servicesCategories.flatMap(category => 
  category.services.map(service => ({
    ...service,
    categoryId: category.id,
    categoryName: category.title
  }))
);
