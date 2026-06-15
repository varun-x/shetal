"use client";

import { motion } from "framer-motion";
import { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

interface ButtonProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "onAnimationStart" | "onDrag" | "onDragStart" | "onDragEnd" | "onDragOver" | "style"
> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "cyan";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  href?: string;
}

const MotionLink = motion(Link);

export default function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  href,
  className = "",
  ...props
}: ButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-xs rounded-lg",
    md: "px-6 py-3 text-sm rounded-xl",
    lg: "px-8 py-4 text-base rounded-2xl",
  };

  const variantClasses = {
    primary:
      "relative overflow-hidden text-black bg-yellow-400 font-bold border border-yellow-500 shadow-md shadow-yellow-400/10 hover:bg-yellow-300 hover:shadow-lg hover:shadow-yellow-400/20",
    cyan:
      "relative overflow-hidden text-white bg-blue-600 font-bold border border-blue-500 shadow-md shadow-blue-600/15 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30",
    secondary:
      "bg-zinc-900/80 border border-zinc-800 text-zinc-200 hover:bg-zinc-800 hover:border-zinc-700 shadow-sm",
    outline:
      "bg-transparent border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 hover:bg-zinc-900/40",
    ghost:
      "bg-transparent text-zinc-400 hover:text-white hover:bg-zinc-900/30",
  };

  const combinedClasses = `font-semibold inline-flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 active:scale-[0.98] ${
    fullWidth ? "w-full" : "w-fit"
  } ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <MotionLink
        href={href}
        whileHover={{ y: -1, scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        className={combinedClasses}
      >
        {variant === "primary" && (
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/15 to-white/0 -translate-x-full hover:animate-[shimmer_1.5s_infinite]" />
        )}
        {children}
      </MotionLink>
    );
  }

  return (
    <motion.button
      whileHover={{ y: -1, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className={combinedClasses}
      {...props}
    >
      {variant === "primary" && (
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/15 to-white/0 -translate-x-full hover:animate-[shimmer_1.5s_infinite]" />
      )}
      {children}
    </motion.button>
  );
}
