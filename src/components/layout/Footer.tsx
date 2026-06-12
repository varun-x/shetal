"use client";

import { useState } from "react";
import Link from "next/link";
import { Globe, Mail, Phone, MapPin, Send, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="relative bg-[#05070d] border-t border-slate-800 pt-20 pb-10 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-amber-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 translate-y-1/2 w-96 h-96 rounded-full bg-amber-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Brand & Bio */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 group w-fit">
              <div className="relative w-9 h-9 rounded-lg overflow-hidden bg-[#05070d] flex items-center justify-center border border-slate-800 p-0.5 shadow-md">
                <img src="/logo.jpg" alt="Sheetla Exim Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-display text-xl font-extrabold tracking-wider text-white">
                SHEETLA <span className="text-accent-gold">EXIM</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-light">
              Empowering global trade through high-precision customs clearance, frictionless freight forwarding, and next-generation supply chain consulting. Licensed Custom House Agent (CHA) and international logistics provider.
            </p>
            {/* Badges */}
            <div className="flex items-center gap-4 mt-2">
              <div className="px-3 py-1.5 rounded bg-slate-950 border border-slate-800 flex items-center gap-1.5">
                <span className="text-[10px] uppercase font-bold text-accent-gold tracking-widest">Licensed CHA</span>
              </div>
              <div className="px-3 py-1.5 rounded bg-slate-950 border border-slate-800 flex items-center gap-1.5">
                <span className="text-[10px] uppercase font-bold text-accent-gold tracking-widest">IATA Certified</span>
              </div>
              <div className="px-3 py-1.5 rounded bg-slate-950 border border-slate-800 flex items-center gap-1.5">
                <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-widest">AEO Tier-2</span>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col gap-5">
            <h4 className="font-display font-semibold text-white text-sm tracking-wider uppercase">Services</h4>
            <ul className="flex flex-col gap-3 text-sm text-slate-400 font-light">
              <li>
                <Link href="/services" className="hover:text-white transition-colors flex items-center gap-1">
                  Customs Clearance <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100" />
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">Air Freight Forwarding</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">Ocean Cargo (FCL & LCL)</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">Bonded Warehousing</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">Trade Advisory & Compliance</Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="flex flex-col gap-5">
            <h4 className="font-display font-semibold text-white text-sm tracking-wider uppercase">Company</h4>
            <ul className="flex flex-col gap-3 text-sm text-slate-400 font-light font-mono">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-white transition-colors">Industries Served</Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">Resource Center & Blog</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Contact Office</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter / Form Column */}
          <div className="flex flex-col gap-5 lg:col-span-1">
            <h4 className="font-display font-semibold text-white text-sm tracking-wider uppercase">Stay Updated</h4>
            <p className="text-slate-400 text-sm leading-relaxed font-light">
              Subscribe to our weekly trade intelligence report.
            </p>
            <form onSubmit={handleSubscribe} className="relative flex items-center mt-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Corporate Email"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg py-2.5 pl-4 pr-12 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
              />
              <button
                type="submit"
                className="absolute right-1 p-2 text-slate-950 hover:text-black bg-amber-500 hover:bg-amber-600 rounded-md transition-colors cursor-pointer"
                aria-label="Subscribe"
              >
                {subscribed ? (
                  <span className="text-xs font-bold text-slate-950 px-1 font-mono">Done</span>
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Global Offices & Quick Contacts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-t border-b border-slate-800 mb-8 text-sm text-slate-400 font-light">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-white font-medium font-mono">Headquarters</p>
              <p className="text-xs mt-1 font-mono">B-459, 1st Floor, Nehru Ground N.I.T. Faridabad-121001</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-white font-medium font-mono">Brokerage Helpline</p>
              <p className="text-xs mt-1 font-mono">0129-4073633 / 9810573633</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-white font-medium font-mono">Operations Email</p>
              <p className="text-xs mt-1 font-mono">info@sheetlaexim.com / eximconsultants03@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Sheetla Exim. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-slate-350 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-slate-350 transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-slate-350 transition-colors">Standard Trading Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
