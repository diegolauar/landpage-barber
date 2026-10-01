import Image from "next/image";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { TrackedLink } from "@/components/TrackedLink";

export function CTA() {
  const waLink = generateWhatsAppLink();

  return (
    <section className="relative overflow-hidden bg-accent text-accent-foreground">
      <Image
        src="/images/barbershop/strom-logo.png"
        alt=""
        aria-hidden="true"
        width={520}
        height={520}
        className="absolute -right-15 top-1/2 -translate-y-1/2 w-[min(60vw,520px)] h-auto opacity-[0.18] mix-blend-multiply pointer-events-none"
      />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-10 py-20 sm:py-32">
        <h2 className="font-black leading-[0.92] tracking-[-0.03em] text-[44px] sm:text-[clamp(44px,7vw,108px)] max-w-[12ch] text-balance">
          Seu próximo corte começa aqui.
        </h2>
        <p className="mt-7 text-lg sm:text-xl font-medium max-w-[28em]">
          Escolha seu horário e venha viver a experiência STROM.
        </p>
        <TrackedLink
          href={waLink}
          target="_blank"
          rel="noopener"
          event="click_schedule"
          eventData={{ source: "cta_final" }}
          className="inline-block mt-10 bg-background text-foreground font-extrabold text-sm tracking-[0.06em] uppercase px-8.5 py-5.5 hover:bg-foreground hover:text-background transition-colors"
        >
          Agendar meu horário
        </TrackedLink>
      </div>
    </section>
  );
}
