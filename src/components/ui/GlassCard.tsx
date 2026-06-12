"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glowColor?: "blue" | "cyan" | "none";
}

export default function GlassCard({
  children,
  className = "",
  hoverEffect = true,
  glowColor = "none",
}: GlassCardProps) {
  const glowClasses = {
    blue: "hover:shadow-3xl hover:shadow-accent-blue/10",
    cyan: "hover:shadow-3xl hover:shadow-accent-cyan/10",
    none: "",
  };

  return (
    <motion.div
      whileHover={hoverEffect ? { y: -5, transition: { duration: 0.2 } } : {}}
      className={`glass-panel rounded-2xl p-6 relative overflow-hidden transition-all duration-300 ${
        glowClasses[glowColor]
      } ${className}`}
    >
      {/* Decorative gradient light sweep */}
      <div className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 transition-all duration-1000 group-hover:left-[150%]" />
      
      {/* Subtle Border highlight */}
      <div className="absolute inset-0 rounded-2xl border border-white/5 pointer-events-none" />
      
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
