"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BrandMark, BrandWordmark } from "@/components/ui/Brand";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
  { label: "Industries", path: "/industries" },
  { label: "Case Studies", path: "/case-studies" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

const headerVariants = {
  hidden: { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const navContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.3 },
  },
};

const navItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const mobileMenuContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04, delayChildren: 0.08 } },
  exit: { transition: { staggerChildren: 0.02, staggerDirection: -1 } },
};

const mobileMenuItemVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] as const },
  },
  exit: {
    opacity: 0,
    x: -8,
    transition: { duration: 0.15 },
  },
};

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (path: string) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-3 sm:px-6">
      <motion.div
        variants={headerVariants}
        initial="hidden"
        animate="visible"
        className={`relative mx-auto flex max-w-[1140px] items-center justify-between rounded-xl border px-3 py-2.5 backdrop-blur-md transition-all duration-300 sm:px-4 ${
          scrolled
            ? "border-black/8 bg-white/92 shadow-[0_16px_40px_rgba(27,54,77,0.14)]"
            : "border-black/8 bg-white/88 shadow-[0_12px_30px_rgba(27,54,77,0.08)]"
        }`}
      >
        <Link href="/" className="flex items-center gap-2.5" aria-label="Trifreight home">
          <BrandMark />
          <BrandWordmark />
        </Link>

        <motion.nav
          variants={navContainerVariants}
          initial="hidden"
          animate="visible"
          className="hidden items-center gap-6 lg:flex"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <motion.div key={item.path} variants={navItemVariants}>
              <Link
                href={item.path}
                className={`group relative text-xs font-semibold tracking-[-0.02em] transition-colors duration-200 ${
                  isActive(item.path) ? "text-black" : "text-black/62 hover:text-black"
                }`}
              >
                {item.label}
                {isActive(item.path) ? (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full bg-[#222222]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                ) : (
                  <span className="absolute -bottom-1.5 left-1/2 h-0.5 w-0 rounded-full bg-[#222222]/30 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:left-0 group-hover:w-full" />
                )}
              </Link>
            </motion.div>
          ))}
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-lg bg-[#222222] px-4 py-3 text-[11px] font-semibold uppercase tracking-[-0.01em] text-white transition-transform hover:-translate-y-0.5 lg:flex"
          >
            Get Quote <ArrowUpRight className="size-3.5" />
          </Link>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="grid size-10 place-items-center rounded-lg text-[#222222] transition-colors hover:bg-black/5 lg:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          <AnimatePresence mode="wait" initial={false}>
            {menuOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="grid place-items-center"
              >
                <X className="size-5" />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="grid place-items-center"
              >
                <Menu className="size-5" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
              className="absolute inset-x-0 top-[calc(100%+8px)] overflow-hidden rounded-xl border border-black/8 bg-white p-2 shadow-2xl lg:hidden"
            >
              <motion.nav
                variants={mobileMenuContainerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex flex-col"
                aria-label="Mobile navigation"
              >
                {navItems.map((item) => (
                  <motion.div key={item.path} variants={mobileMenuItemVariants}>
                    <Link
                      href={item.path}
                      onClick={() => setMenuOpen(false)}
                      className={`flex items-center justify-between rounded-lg px-4 py-3.5 text-sm font-semibold transition-colors ${
                        isActive(item.path)
                          ? "bg-[#eef7fc] text-black"
                          : "text-black/78 hover:bg-[#eef7fc] hover:text-black"
                      }`}
                    >
                      {item.label}
                      <ChevronRight className="size-4" />
                    </Link>
                  </motion.div>
                ))}
                <motion.div variants={mobileMenuItemVariants}>
                  <Link
                    href="/contact"
                    onClick={() => setMenuOpen(false)}
                    className="mt-1 flex items-center justify-center gap-2 rounded-lg bg-[#222222] px-4 py-3.5 text-xs font-semibold text-white"
                  >
                    Get Quote <ArrowUpRight className="size-4" />
                  </Link>
                </motion.div>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}