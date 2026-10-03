"use client";

import Link from "next/link";
import { WHATSAPP_URL } from "./SlideToWhatsApp";

export default function WhatsAppFab() {
  return (
    <Link
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] px-3.5 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(37,211,102,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#20bd5a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#128C7E] sm:h-12 sm:px-5 md:bottom-8 md:right-8"
    >
      {/* WhatsApp Logo SVG */}
      <svg
        viewBox="0 0 24 24"
        className="size-6 shrink-0 fill-white"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-1.536.946-2.504 2.404-2.652 4.04-.079 1.022.165 2.088.562 3.086.081.16.162.319.242.474l.996 1.697a.72.72 0 01.054.77c-.335.981-.893 2.231-1.673 3.994 1.487-.369 2.905-.967 4.035-1.9.057-.052.112-.105.165-.157a9.9 9.9 0 002.928-.493 10.007 10.007 0 004.708-3.162 9.937 9.937 0 001.765-3.264c.202-.557.379-1.128.52-1.706A9.936 9.936 0 0011.52 3.748c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10c0-.896-.117-1.772-.348-2.615a9.9 9.9 0 00-1.652-3.157 9.936 9.936 0 00-3.908-2.743c-.578-.227-1.181-.413-1.799-.554z" />
      </svg>
    <span className="hidden min-[400px]:inline">Connect</span>
    </Link>
  );
}
