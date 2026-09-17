"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

const modes = [
  "Air freight",
  "Ocean freight (FCL)",
  "Ocean freight (LCL)",
  "Road transport",
  "Customs clearance",
  "Not sure yet",
];

const OPS_EMAIL = "ops@trifreight.in";

const fieldClass =
  "w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-black/35 focus:border-[#222222]";

const labelClass = "font-mono-ui block text-[9px] tracking-[0.12em] text-black/50";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    lane: "",
    mode: modes[0],
    message: "",
  });

  const set = (key: keyof typeof form) => (value: string) =>
    setForm((current) => ({ ...current, [key]: value }));

  // No backend yet — the form hands the enquiry to the operations desk by
  // opening a pre-filled email, so nothing a visitor types is silently dropped.
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = `Freight plan request — ${form.lane || form.mode}`;
    const body = [
      `Name: ${form.name}`,
      `Company: ${form.company}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Lane: ${form.lane}`,
      `Mode: ${form.mode}`,
      "",
      "Shipment details:",
      form.message,
    ].join("\n");

    window.location.href = `mailto:${OPS_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-black/8 bg-white p-6 shadow-[0_20px_50px_rgba(27,54,77,0.08)] sm:p-9"
    >
      <p className="font-display text-2xl font-semibold tracking-[-0.045em]">
        Tell us what is moving.
      </p>
      <p className="mt-3 text-sm leading-relaxed text-black/58">
        The lane, the cargo, and the deadline are enough to start. We reply with a
        plan the same working day.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="name">
            Your name
          </label>
          <input
            id="name"
            required
            value={form.name}
            onChange={(e) => set("name")(e.target.value)}
            placeholder="Priya Menon"
            className={fieldClass}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="company">
            Company
          </label>
          <input
            id="company"
            value={form.company}
            onChange={(e) => set("company")(e.target.value)}
            placeholder="Acme Exports Pvt Ltd"
            className={fieldClass}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => set("email")(e.target.value)}
            placeholder="priya@acme.in"
            className={fieldClass}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => set("phone")(e.target.value)}
            placeholder="+91 98105 73633"
            className={fieldClass}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="lane">
            Lane
          </label>
          <input
            id="lane"
            value={form.lane}
            onChange={(e) => set("lane")(e.target.value)}
            placeholder="Nhava Sheva → Rotterdam"
            className={fieldClass}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="mode">
            Mode
          </label>
          <select
            id="mode"
            value={form.mode}
            onChange={(e) => set("mode")(e.target.value)}
            className={fieldClass}
          >
            {modes.map((mode) => (
              <option key={mode}>{mode}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2 sm:col-span-2">
          <label className={labelClass} htmlFor="message">
            Shipment details
          </label>
          <textarea
            id="message"
            rows={5}
            value={form.message}
            onChange={(e) => set("message")(e.target.value)}
            placeholder="Commodity, weight or volume, ready date, and the deadline that actually matters."
            className={`${fieldClass} resize-y`}
          />
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-5">
        <Button type="submit" variant="ink">
          Send to the desk <ArrowRight className="size-4" />
        </Button>
        <p className="font-mono-ui text-[9px] leading-relaxed tracking-[0.1em] text-black/45">
          Opens your mail app,
          <br />
          addressed to {OPS_EMAIL}
        </p>
      </div>
    </form>
  );
}
