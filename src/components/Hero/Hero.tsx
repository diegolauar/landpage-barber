import Image from "next/image";
import { barberShop } from "@/config/barberShop";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { TrackedLink } from "@/components/TrackedLink";

export function Hero() {
  const waLink = generateWhatsAppLink();

  return (
    <section
      id="inicio"
      className="relative flex items-center overflow-hidden min-h-[70vh] sm:min-h-[min(100vh,900px)] pt-18 sm:pt-0"
    >
      <Image
        src="/images/gallery/barba-close.jpg"
        alt={`Barba masculina modelada na ${barberShop.name} em ${barberShop.address.city}`}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[50%_40%] grayscale-[0.15] brightness-[0.62]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#0b0b0b_0%,rgba(11,11,11,0.85)_38%,rgba(11,11,11,0.15)_75%),linear-gradient(0deg,#0b0b0b_0%,transparent_30%)]" />
      <div className="hidden sm:block absolute top-28 right-5 sm:right-10 w-16 h-16 border-t-2 border-r-2 border-accent" />
      <div className="hidden sm:block absolute bottom-10 left-5 sm:left-10 w-16 h-16 border-b-2 border-l-2 border-accent" />

      <div className="relative max-w-7xl w-full mx-auto px-5 sm:px-10 py-16 sm:py-35">
        <p className="mb-5 sm:mb-7 font-mono text-[11px] sm:text-xs tracking-[0.3em] text-accent">
          BARBEARIA EM {barberShop.address.city.toUpperCase()} — {barberShop.address.state}
        </p>
        <h1 className="font-black leading-[0.92] tracking-[-0.025em] text-[46px] sm:text-[clamp(52px,8.2vw,124px)] max-w-[11ch] text-balance">
          Seu estilo. <span className="text-accent">Sua identidade.</span>
        </h1>
        <p className="mt-6 sm:mt-8 text-lg sm:text-xl leading-relaxed text-muted-light max-w-[30em] text-pretty">
          {barberShop.description}
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-3.5 mt-8 sm:mt-10">
          <TrackedLink
            href={waLink}
            target="_blank"
            rel="noopener"
            event="click_schedule"
            eventData={{ source: "hero" }}
            className="text-center bg-accent text-accent-foreground font-extrabold text-sm tracking-[0.06em] uppercase px-7.5 py-5 hover:bg-foreground transition-colors"
          >
            Agendar meu horário
          </TrackedLink>
          <a
            href="#servicos"
            className="text-center border border-[#4a4a4a] text-foreground font-semibold text-sm tracking-[0.06em] uppercase px-7.5 py-5 hover:border-foreground transition-colors"
          >
            Conhecer nossos serviços
          </a>
        </div>
      </div>
    </section>
  );
}
