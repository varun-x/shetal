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
    <footer className="relative bg-black border-t border-zinc-900 pt-20 pb-10 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-yellow-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 translate-y-1/2 w-96 h-96 rounded-full bg-yellow-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Brand & Bio */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 group w-fit">
              <div className="relative w-9 h-9 rounded-lg overflow-hidden bg-black flex items-center justify-center border border-zinc-800 p-0.5 shadow-md">
                <img src="/logo.jpg" alt="Sheetla Exim Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-display text-xl font-extrabold tracking-wider text-white">
                SHEETLA <span className="text-yellow-400">EXIM</span>
              </span>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm font-light">
              Empowering global trade through high-precision customs clearance, frictionless freight forwarding, and next-generation supply chain consulting. 
            </p>
          
           
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col gap-5">
            <h4 className="font-display font-semibold text-white text-sm tracking-wider uppercase">Services</h4>
            <ul className="flex flex-col gap-3 text-sm text-zinc-400 font-light">
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
            <ul className="flex flex-col gap-3 text-sm text-zinc-400 font-light font-mono">
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
            <p className="text-zinc-400 text-sm leading-relaxed font-light">
              Subscribe to our weekly trade intelligence report.
            </p>
            <form onSubmit={handleSubscribe} className="relative flex items-center mt-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Corporate Email"
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg py-2.5 pl-4 pr-12 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all"
              />
              <button
                type="submit"
                className="absolute right-1 p-2 text-black hover:text-black bg-yellow-400 hover:bg-yellow-300 rounded-md transition-colors cursor-pointer"
                aria-label="Subscribe"
              >
                {subscribed ? (
                  <span className="text-xs font-bold text-black px-1 font-mono">Done</span>
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Global Offices & Quick Contacts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-t border-b border-zinc-900 mb-8 text-sm text-zinc-400 font-light">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-white font-medium font-mono">Headquarters</p>
              <p className="text-xs mt-1 font-mono">B-459, 1st Floor, Nehru Ground N.I.T. Faridabad-121001</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-white font-medium font-mono">Brokerage Helpline</p>
              <p className="text-xs mt-1 font-mono">0129-4073633 / 9810573633</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-white font-medium font-mono">Operations Email</p>
              <p className="text-xs mt-1 font-mono">info@sheetlaexim.com / eximconsultants03@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Sheetla Exim. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-zinc-300 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-zinc-300 transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-zinc-300 transition-colors">Standard Trading Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
