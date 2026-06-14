"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, HelpCircle, ShieldAlert, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    route: "Customs Clearance",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isDeskDropdownOpen, setIsDeskDropdownOpen] = useState(false);

  const desks = [
    "Customs Clearance & Brokerage",
    "Air Cargo Freight Desk",
    "Ocean Cargo (FCL/LCL) Desk",
    "Bonded Warehousing / 3PL",
    "Trade Compliance Consulting"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setSubmitted(true);
      setForm({
        name: "",
        email: "",
        company: "",
        phone: "",
        route: "Customs Clearance",
        message: "",
      });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <>
      <Navbar />

      {/* Header Banner */}
      <section className="relative pt-24 pb-8 md:pt-32 md:pb-16 overflow-hidden bg-[#060913] border-b border-slate-850">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:48px_48px] opacity-[0.015]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-amber-500/5 blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 flex flex-col gap-3 text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-500 font-mono">Get in Touch</span>
              <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Connect With Our <span className="text-gradient-accent">Operations Desks</span>
              </h1>
            </div>
            <div className="lg:col-span-5 text-left lg:border-l lg:border-slate-800 lg:pl-8">
              <p className="text-slate-400 text-sm leading-relaxed font-light">
                Contact our licensed brokers or freight managers directly to resolve import hold issues, book space, or set up compliance reviews.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-[#060913] relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Office details */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div>
              <h3 className="font-display text-xl font-bold text-white mb-2">Direct Contact Channels</h3>
              <p className="text-slate-450 text-xs leading-relaxed font-light">
                Skip general helplines. Reach out directly to the specialized desk handling your logistics lane.
              </p>
            </div>

            <div className="flex flex-col gap-6 text-sm">
              <div className="flex gap-4 p-4 rounded-xl bg-slate-900/20 border border-slate-800/60 shadow-sm">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-semibold text-white">Central Operations Desk</h5>
                  <p className="text-xs text-slate-400 mt-1 font-light font-mono">B-459, 1st Floor, Nehru Ground N.I.T. Faridabad-121001, Haryana, India</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-xl bg-slate-900/20 border border-slate-800/60 shadow-sm">
                <Phone className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-semibold text-white">Brokerage Support Hotline</h5>
                  <p className="text-xs text-slate-400 mt-1 font-light font-mono">0129-4073633 / 9810573633</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-xl bg-slate-900/20 border border-slate-800/60 shadow-sm">
                <Mail className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-semibold text-white">General Inquiries & Bookings</h5>
                  <p className="text-xs text-slate-400 mt-1 font-light font-mono">info@sheetlaexim.com / eximconsultants03@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Port Operations Strip */}
            <div className="p-5 rounded-2xl border border-rose-950/80 bg-rose-950/20 flex items-start gap-3.5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-rose-900/10 rounded-full blur-xl" />
              <ShieldAlert className="w-5 h-5 text-rose-500 shrink-0 mt-0.5 animate-pulse" />
              <div className="relative z-10">
                <h5 className="text-xs font-bold uppercase tracking-wider text-rose-500 font-mono">Cargo Stuck in Customs?</h5>
                <p className="text-xs text-slate-300 mt-1.5 leading-relaxed font-light">
                  Call our custom audit emergency desk immediately at <span className="font-bold text-white font-mono">+91 98105 73633</span>. We handle ICEGATE assessment overrides, classification appeals, and terminal releases.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <GlassCard glowColor="gold" className="p-8 bg-slate-900/30 border-slate-850/80 shadow-md">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Full Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Anand Mehta"
                      className="bg-slate-950 border border-slate-850 rounded-lg py-3 px-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Corporate Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="anand@company.com"
                      className="bg-slate-950 border border-slate-850 rounded-lg py-3 px-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  {/* Company */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Company Name</label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      placeholder="TechVantage Corp"
                      className="bg-slate-950 border border-slate-850 rounded-lg py-3 px-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Phone Number</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91 99999 88888"
                      className="bg-slate-950 border border-slate-850 rounded-lg py-3 px-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  {/* Inquiry Desk Route */}
                  <div className="flex flex-col gap-2 md:col-span-2 relative">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Routing Desk</label>
                    
                    <button
                      type="button"
                      onClick={() => setIsDeskDropdownOpen(!isDeskDropdownOpen)}
                      className="w-full flex items-center justify-between gap-3 p-3.5 rounded-xl bg-slate-950 border border-slate-850 text-white hover:border-amber-500/40 cursor-pointer transition-all shadow-md text-left"
                    >
                      <span className="text-xs font-semibold">{form.route}</span>
                      <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${isDeskDropdownOpen ? "rotate-180 text-accent-gold" : ""}`} />
                    </button>

                    {/* Dropdown options */}
                    <AnimatePresence>
                      {isDeskDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 5 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 right-0 mt-2 p-2 rounded-xl bg-slate-950/98 border border-slate-850 backdrop-blur-2xl shadow-2xl flex flex-col gap-1 z-40 max-h-[220px] overflow-y-auto"
                        >
                          {desks.map((desk) => (
                            <button
                              key={desk}
                              type="button"
                              onClick={() => {
                                setForm({ ...form, route: desk });
                                setIsDeskDropdownOpen(false);
                              }}
                              className={`w-full p-2.5 rounded-lg text-left text-xs font-semibold cursor-pointer transition-all ${
                                form.route === desk
                                  ? "bg-slate-900 border border-slate-800 text-white"
                                  : "text-slate-400 hover:text-white hover:bg-slate-900/60"
                              }`}
                            >
                              {desk}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Detailed Message</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Provide shipment specifics (origin/destination, product type, or custom issues) to help our appraisers prepare."
                      className="bg-slate-950 border border-slate-850 rounded-lg py-3 px-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 resize-none"
                    />
                  </div>
                </div>

                <Button variant="primary" type="submit" fullWidth={true}>
                  <span className="flex items-center justify-center gap-1.5">
                    Submit Operational Request <Send className="w-4 h-4" />
                  </span>
                </Button>

                {submitted && (
                  <div className="p-4 rounded-lg bg-emerald-950/35 border border-emerald-900/60 text-xs text-emerald-400 text-center font-medium">
                    Request submitted successfully! Our customs appraiser or operational specialist will contact you in under 2 hours.
                  </div>
                )}
              </form>
            </GlassCard>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
