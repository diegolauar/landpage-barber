import { barberShop } from "@/config/barberShop";
import { OpeningHours } from "@/components/OpeningHours/OpeningHours";
import { TrackedLink } from "@/components/TrackedLink";

export function Location() {
  const { address } = barberShop;
  const fullAddress = `${address.street}, ${address.neighborhood}, ${address.city} - ${address.state}`;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;
  const mapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(fullAddress)}&z=15&output=embed`;

  return (
    <section id="localizacao" className="max-w-7xl mx-auto px-5 sm:px-10 py-20 sm:py-35">
      <p className="mb-5 font-mono text-xs tracking-[0.3em] text-accent">
        08 — LOCALIZAÇÃO
      </p>
      <h2 className="mb-14 font-extrabold leading-[0.98] tracking-[-0.02em] text-[38px] sm:text-[clamp(38px,4.8vw,68px)]">
        Venha conhecer a STROM.
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="flex flex-col gap-6">
          <div className="min-h-[340px] flex-1 border border-border-strong overflow-hidden bg-[#141414]">
            <iframe
              title={`Mapa — ${barberShop.name} em ${address.neighborhood}, ${address.city}`}
              src={mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[340px] border-0 block grayscale invert-[0.9] contrast-[0.9]"
            />
          </div>
          <div className="flex flex-wrap justify-between items-end gap-5">
            <address className="not-italic text-[22px] font-bold leading-snug">
              {address.street}
              <br />
              <span className="text-muted font-medium">
                {address.neighborhood} — {address.city}/{address.state} ·{" "}
                {address.zipCode}
              </span>
            </address>
            <TrackedLink
              href={mapsUrl}
              target="_blank"
              rel="noopener"
              event="click_maps"
              className="border border-foreground px-5.5 py-4 font-bold text-[13px] tracking-[0.08em] uppercase hover:bg-foreground hover:text-background transition-colors"
            >
              Ver no Google Maps
            </TrackedLink>
          </div>
        </div>
        <OpeningHours />
      </div>
    </section>
  );
}
