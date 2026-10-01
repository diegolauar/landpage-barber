import Image from "next/image";
import { barberShop } from "@/config/barberShop";
import { PlaceholderTile } from "@/components/PlaceholderTile";
import { TrackedLink } from "@/components/TrackedLink";

export function Gallery() {
  const instagramHandle = barberShop.social.instagram;
  const instagramUrl = `https://instagram.com/${instagramHandle.replace("@", "")}`;

  return (
    <section id="galeria" className="border-t border-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 py-20 sm:py-35">
        <div className="flex flex-wrap justify-between items-end gap-6 mb-12">
          <div>
            <p className="mb-5 font-mono text-xs tracking-[0.3em] text-accent">
              04 — GALERIA
            </p>
            <h2 className="font-extrabold leading-[0.98] tracking-[-0.02em] text-[38px] sm:text-[clamp(38px,4.8vw,68px)]">
              Por dentro da STORM.
            </h2>
          </div>
          <TrackedLink
            href={instagramUrl}
            target="_blank"
            rel="noopener"
            event="click_instagram"
            className="font-mono text-[13px] tracking-[0.1em] border-b border-[#4a4a4a] pb-1.5"
          >
            {instagramHandle} no Instagram →
          </TrackedLink>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 auto-rows-[150px] sm:auto-rows-[190px] grid-flow-dense gap-2.5">
          <div className="col-span-2 row-span-2 relative overflow-hidden">
            <Image
              src="/images/gallery/corte-barba.jpg"
              alt={`Cliente sendo atendido na barbearia em ${barberShop.address.city}`}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover object-[5%_50%]"
            />
          </div>
          <PlaceholderTile label="fachada" />
          <PlaceholderTile label="cadeira de barbeiro" className="row-span-2" />
          <PlaceholderTile label="recepção" />
          <div className="col-span-2 relative overflow-hidden">
            <Image
              src="/images/gallery/barba-close.jpg"
              alt="Barba modelada com acabamento profissional"
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover object-[50%_42%]"
            />
          </div>
          <PlaceholderTile label="degradê" />
          <PlaceholderTile label="corte masculino" />
          <PlaceholderTile label="barbeiro trabalhando" className="col-span-2" />
          <PlaceholderTile label="produtos" />
          <PlaceholderTile label="ambiente" />
        </div>
      </div>
    </section>
  );
}
