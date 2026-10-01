import Image from "next/image";
import { barberShop, navItems } from "@/config/barberShop";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { TrackedLink } from "@/components/TrackedLink";

export function Footer() {
  const { address } = barberShop;
  const instagramUrl = `https://instagram.com/${barberShop.social.instagram.replace("@", "")}`;

  return (
    <footer className="bg-[#080808] border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 pt-16 sm:pt-18 pb-24 sm:pb-30 grid grid-cols-2 sm:grid-cols-4 gap-10">
        <div className="col-span-2 sm:col-span-1 min-w-0 flex flex-col gap-4">
          <Image
            src="/images/barbershop/strom-logo.png"
            alt={`Logo ${barberShop.name}`}
            width={64}
            height={64}
          />
          <span className="font-extrabold text-xl tracking-[0.08em]">
            {barberShop.name}
          </span>
          <span className="text-muted text-[15px]">{barberShop.slogan}</span>
        </div>

        <nav aria-label="Rodapé" className="min-w-0 flex flex-col gap-3">
          <span className="font-mono text-[11px] tracking-[0.2em] text-subtle mb-1.5">
            NAVEGAÇÃO
          </span>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-[15px] text-muted-light">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="min-w-0 flex flex-col gap-3">
          <span className="font-mono text-[11px] tracking-[0.2em] text-subtle mb-1.5">
            CONTATO
          </span>
          <TrackedLink
            href={generateWhatsAppLink()}
            target="_blank"
            rel="noopener"
            event="click_whatsapp"
            eventData={{ source: "footer" }}
            className="text-[15px] text-muted-light break-words"
          >
            WhatsApp {barberShop.whatsappLabel}
          </TrackedLink>
          <TrackedLink
            href={`tel:${barberShop.phoneE164}`}
            event="click_phone"
            className="text-[15px] text-muted-light break-words"
          >
            Telefone {barberShop.phone}
          </TrackedLink>
          <TrackedLink
            href={instagramUrl}
            target="_blank"
            rel="noopener"
            event="click_instagram"
            className="text-[15px] text-muted-light break-words"
          >
            Instagram {barberShop.social.instagram}
          </TrackedLink>
          <a
            href={`mailto:${barberShop.email}`}
            className="text-[15px] text-muted-light break-words"
          >
            {barberShop.email}
          </a>
        </div>

        <div className="min-w-0 flex flex-col gap-3">
          <span className="font-mono text-[11px] tracking-[0.2em] text-subtle mb-1.5">
            ENDEREÇO E HORÁRIO
          </span>
          <address className="not-italic text-[15px] leading-relaxed text-muted-light break-words">
            {address.street}
            <br />
            {address.neighborhood}, {address.city} - {address.state}
            <br />
            {address.zipCode}
          </address>
          <span className="text-[15px] leading-relaxed text-muted-light">
            Seg–Qui 09h–19h · Sex 09h–20h
            <br />
            Sáb 08h–18h · Dom fechado
          </span>
        </div>
      </div>
      <div className="border-t border-[#1a1a1a] px-5 sm:px-10 py-5.5 text-center font-mono text-xs text-subtle">
        © {new Date().getFullYear()} {barberShop.name}. Todos os direitos reservados.
      </div>
    </footer>
  );
}
