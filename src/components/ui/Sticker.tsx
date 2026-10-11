import Image from "next/image";

export const stickers = {
  plane: { src: "/images/stickers/plane.webp", alt: "Air freight", w: 340, h: 160 },
  ship: { src: "/images/stickers/ship.webp", alt: "Ocean freight", w: 285, h: 223 },
  truck: { src: "/images/stickers/truck.webp", alt: "Road transport", w: 340, h: 174 },
  customs: { src: "/images/stickers/customs.webp", alt: "Customs clearance", w: 191, h: 213 },
  globe: { src: "/images/stickers/globe.webp", alt: "Global coverage", w: 251, h: 216 },
  mapPins: { src: "/images/stickers/map-pins.webp", alt: "Route planning", w: 239, h: 160 },
  boxes: { src: "/images/stickers/boxes.webp", alt: "Palletised cargo", w: 216, h: 183 },
  routePin: { src: "/images/stickers/route-pin.webp", alt: "Tracked route", w: 187, h: 169 },
  container: { src: "/images/stickers/container.webp", alt: "Container", w: 243, h: 208 },
  warehouse: { src: "/images/stickers/warehouse.webp", alt: "Warehousing", w: 287, h: 180 },
  handshake: { src: "/images/stickers/handshake.webp", alt: "One accountable desk", w: 272, h: 125 },
  tracking: { src: "/images/stickers/tracking.webp", alt: "Shipment tracking", w: 229, h: 165 },
  crane: { src: "/images/stickers/crane.webp", alt: "Port handling", w: 239, h: 165 },
  customsOfficer: { src: "/images/stickers/customs-officer.webp", alt: "Customs inspection", w: 239, h: 198 },
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
  const height = Math.round((size * sticker.h) / sticker.w);
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
        height={height}
        aria-hidden={decorative || undefined}
        className="select-none drop-shadow-[0_10px_18px_rgba(12,40,66,0.22)]"
        style={{ width: size, height }}
      />
    </span>
  );
}
