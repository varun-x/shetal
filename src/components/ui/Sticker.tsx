import Image from "next/image";

export const stickers = {
  plane: { src: "/images/stickers/plane.webp", alt: "Air freight" },
  ship: { src: "/images/stickers/ship.webp", alt: "Ocean freight" },
  truck: { src: "/images/stickers/truck.webp", alt: "Road transport" },
  customs: { src: "/images/stickers/customs.webp", alt: "Customs clearance" },
  globe: { src: "/images/stickers/globe.webp", alt: "Global coverage" },
  mapPins: { src: "/images/stickers/map-pins.webp", alt: "Route planning" },
  boxes: { src: "/images/stickers/boxes.webp", alt: "Palletised cargo" },
  routePin: { src: "/images/stickers/route-pin.webp", alt: "Tracked route" },
  container: { src: "/images/stickers/container.webp", alt: "Container" },
  warehouse: { src: "/images/stickers/warehouse.webp", alt: "Warehousing" },
  handshake: { src: "/images/stickers/handshake.webp", alt: "One accountable desk" },
  tracking: { src: "/images/stickers/tracking.webp", alt: "Shipment tracking" },
  crane: { src: "/images/stickers/crane.webp", alt: "Port handling" },
  customsOfficer: { src: "/images/stickers/customs-officer.webp", alt: "Customs inspection" },
} as const;

export type StickerName = keyof typeof stickers;

/**
 * A cut-out sticker. `tilt` rotates it; `bob` adds the idle float used by the
 * ones pinned around the hero.
 */
export default function Sticker({
  name,
  size = 96,
  tilt = 0,
  bob = false,
  bobDuration = 7,
  delay = 0,
  className = "",
  decorative = false,
}: {
  name: StickerName;
  size?: number;
  tilt?: number;
  bob?: boolean;
  /** Seconds for one bob cycle — vary it to keep a group of stickers out of sync. */
  bobDuration?: number;
  delay?: number;
  className?: string;
  /** Purely ornamental instances are hidden from screen readers. */
  decorative?: boolean;
}) {
  const sticker = stickers[name];
  return (
    <span
      className={`inline-block ${bob ? "sticker-bob" : ""} ${className}`}
      style={{
        // `--tilt` keeps the rotation inside the bob keyframes so the two
        // transforms don't fight each other.
        ...(bob
          ? {
              ["--tilt" as string]: `${tilt}deg`,
              animationDelay: `${delay}s`,
              animationDuration: `${bobDuration}s`,
            }
          : { transform: `rotate(${tilt}deg)` }),
      }}
    >
      <Image
        src={sticker.src}
        alt={decorative ? "" : sticker.alt}
        width={size}
        height={size}
        aria-hidden={decorative || undefined}
        className="h-auto w-full select-none drop-shadow-[0_10px_18px_rgba(12,40,66,0.22)]"
        style={{ width: size }}
      />
    </span>
  );
}
