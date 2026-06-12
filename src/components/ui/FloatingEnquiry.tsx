"use client";

import { useState } from "react";
import { MessageSquare, X, Send, HelpCircle, User, Phone, CheckCircle2, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import GlassCard from "./GlassCard";
import Button from "./Button";

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.76.459 3.48 1.332 5.006L2 22l5.176-1.358c1.47.8 3.12 1.22 4.82 1.22h.004c5.502 0 9.988-4.482 9.988-9.988C22 7.482 17.518 2 12.012 2zm6.206 14.154c-.254.71-1.464 1.388-2.022 1.488-.5.09-1.15.166-3.354-.746-2.822-1.168-4.636-4.048-4.778-4.238-.138-.19-1.124-1.492-1.124-2.846 0-1.354.708-2.018.96-2.28.254-.262.556-.328.742-.328.186 0 .372.002.532.01.166.008.388-.064.608.468.22.534.756 1.842.822 1.976.068.134.112.29.02.476-.09.186-.134.304-.266.458-.132.154-.278.344-.396.462-.132.13-.27.272-.116.536.154.264.686 1.13 1.472 1.828.99.88 1.82 1.15 2.078 1.28.258.13.408.108.56-.064.152-.172.656-.762.83-1.02.174-.258.348-.216.586-.128.238.088 1.508.71 1.77.842.262.13.436.196.5.308.064.112.064.65-.19 1.36z" />
  </svg>
);

export default function FloatingEnquiry() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "DGFT & Export-Import Services",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const whatsappNumber = "919810573633"; // Indian country code + 9810573633
  const defaultMessage = "Hello, I’m interested in your DGFT & Export-Import services. Could you please share more details?";

  // Direct WhatsApp click URL
  const directWhatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.phone) {
      // Compile customized message from form data
      const compiledMessage = `Hello, I'm interested in your services.\n\n` +
        `*Name:* ${form.name}\n` +
        `*Phone:* ${form.phone}\n` +
        `*Service:* ${form.service}\n` +
        (form.message ? `*Inquiry Details:* ${form.message}` : `Please share more details.`);

      const formWhatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(compiledMessage)}`;
      
      // Open WhatsApp with compiled form message
      window.open(formWhatsappUrl, "_blank");

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setIsOpen(false);
        setForm({
          name: "",
          phone: "",
          service: "DGFT & Export-Import Services",
          message: "",
        });
      }, 3000);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 font-sans">
      
      {/* Quick Enquiry Modal Popover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="w-[320px] sm:w-[360px] max-w-full"
          >
            <GlassCard glowColor="none" className="p-6 bg-slate-950/95 border-slate-800 shadow-2xl flex flex-col gap-4">
              <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
                  <span className="font-display font-extrabold text-sm text-white uppercase tracking-wider">Quick Trade Enquiry</span>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-slate-400 hover:text-white p-1 rounded-md transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Name */}
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-amber-500" /> Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Enter your name"
                    className="bg-slate-900 border border-slate-800 rounded-lg py-2 px-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-amber-500" /> Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="e.g. +91 99999 88888"
                    className="bg-slate-900 border border-slate-800 rounded-lg py-2 px-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  />
                </div>

                {/* Service Dropdown */}
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                    <HelpCircle className="w-3.5 h-3.5 text-amber-500" /> Inquiry Area
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="bg-slate-900 border border-slate-800 rounded-lg py-2 px-3 text-xs text-white focus:outline-none focus:border-amber-500"
                  >
                    <option>DGFT & Export-Import Services</option>
                    <option>Customs Clearance / CHA Brokerage</option>
                    <option>Ocean/Air Freight Bookings</option>
                    <option>Trade Compliance Consulting</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    Brief Requirements (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Enter goods type, origin port, or custom issue..."
                    className="bg-slate-900 border border-slate-800 rounded-lg py-2 px-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 resize-none font-sans"
                  />
                </div>

                <Button variant="primary" type="submit" size="sm" className="w-full">
                  <span className="flex items-center justify-center gap-1.5 font-bold">
                    Start Chat via WhatsApp <Send className="w-3.5 h-3.5" />
                  </span>
                </Button>

                {submitted && (
                  <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-900/40 text-[10px] text-emerald-400 text-center font-medium flex items-center justify-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" /> Form Compiled! Opening WhatsApp...
                  </div>
                )}
              </form>
            </GlassCard>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Buttons Row */}
      <div className="flex items-center gap-3 relative">
        
        {/* Enquiry form Toggle Pill */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className={`glass-panel border-amber-600/30 text-amber-500 px-4 py-2.5 rounded-full text-xs font-bold font-display shadow-lg shadow-amber-500/5 hover:border-amber-500 hover:text-white transition-all cursor-pointer flex items-center gap-2 ${
            isOpen ? "bg-slate-900" : "bg-slate-950/80"
          }`}
        >
          <MessageSquare className="w-4 h-4" />
          <span>Quick Enquiry</span>
          <ChevronUp className={`w-3 h-3 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
        </motion.button>

        {/* WhatsApp Icon Circle Button */}
        <motion.a
          href={directWhatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-xl shadow-emerald-500/10 hover:shadow-emerald-500/20 cursor-pointer relative group transition-colors"
          aria-label="Chat on WhatsApp"
        >
          {/* Pulsing ring around WhatsApp icon */}
          <span className="absolute inset-0 rounded-full bg-emerald-500/30 animate-ping pointer-events-none scale-105" />
          <WhatsAppIcon className="w-6 h-6" />

          {/* Hover Tooltip */}
          <span className="absolute right-14 top-1/2 -translate-y-1/2 bg-slate-950 border border-slate-800 text-slate-300 font-mono text-[9px] uppercase tracking-widest px-2.5 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-md">
            Direct WhatsApp
          </span>
        </motion.a>

      </div>

    </div>
  );
}
