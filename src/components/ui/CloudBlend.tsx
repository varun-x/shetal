import Image from "next/image";

/**
 * A static, opaque band of photographic clouds used to carry the sky into a
 * neighbouring section. No fade, no pan — the clouds sit solid inside the site
 * width so nothing bleeds past the edge.
 */
export default function CloudBlend({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-x-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <Image
        src="/images/atmosphere/clouds.webp"
        alt=""
        fill
        sizes="100vw"
        className="select-none object-cover object-bottom"
      />
    </div>
  );
}