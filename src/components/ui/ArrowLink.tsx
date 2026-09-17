import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

export default function ArrowLink({
  href,
  children,
  className = "",
  iconClassName = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
  iconClassName?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 text-xs font-semibold ${className}`}
    >
      <span className="underline decoration-current/25 underline-offset-4 transition-colors group-hover:decoration-current/70">
        {children}
      </span>
      <ArrowUpRight
        className={`size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${iconClassName}`}
      />
    </Link>
  );
}