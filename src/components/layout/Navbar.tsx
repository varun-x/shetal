"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Globe, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Industries", path: "/industries" },
  { name: "Case Studies", path: "/case-studies" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/95 backdrop-blur-md border-b border-zinc-800/60 py-4 shadow-md shadow-black"
            : "bg-transparent py-6 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-9 h-9 rounded-lg overflow-hidden bg-white flex items-center justify-center border border-zinc-200 p-0.5 shadow-md">
              <img src="/logo.jpg" alt="Sheetla Exim Logo" className="w-full h-full object-contain" />
            </div>
            <span className="font-display text-lg sm:text-xl font-extrabold tracking-wider text-white">
              SHEETLA <span className="text-yellow-400">EXIM</span>
            </span>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`relative text-sm font-medium transition-colors hover:text-white ${
                    isActive ? "text-white" : "text-zinc-400"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-yellow-400 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/get-quote"
              className="px-5 py-2.5 rounded-lg font-bold text-sm text-black bg-yellow-400 hover:bg-yellow-300 transition-colors flex items-center gap-1 shadow-md cursor-pointer"
            >
              Get Quote
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-zinc-400 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Drawer (Absolute position inside fixed header to align flush with bottom border) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-full left-0 right-0 z-40 lg:hidden px-6 pb-8 pt-4 bg-black/98 backdrop-blur-xl border-t border-b border-zinc-800/80 shadow-2xl shadow-black/50"
            >
              <div className="flex flex-col gap-4">
                {navItems.map((item) => {
                  const isActive = pathname === item.path;
                  return (
                    <Link
                      key={item.name}
                      href={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`text-base font-semibold py-2.5 border-b border-zinc-800/60 transition-colors ${
                        isActive ? "text-yellow-400" : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
                <Link
                  href="/get-quote"
                  onClick={() => setIsOpen(false)}
                  className="mt-4 w-full py-3 bg-yellow-400 hover:bg-yellow-300 text-black rounded-lg font-bold flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  Get Quote
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
