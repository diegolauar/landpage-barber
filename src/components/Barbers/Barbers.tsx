import { barberShop, barbers } from "@/config/barberShop";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { PlaceholderTile } from "@/components/PlaceholderTile";
import { TrackedLink } from "@/components/TrackedLink";

export function Barbers() {
  return (
    <section id="barbeiros" className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 py-20 sm:py-35">
        <p className="mb-5 font-mono text-xs tracking-[0.3em] text-accent">
          05 — BARBEIROS
        </p>
        <h2 className="mb-14 font-extrabold leading-[0.98] tracking-[-0.02em] text-[38px] sm:text-[clamp(38px,4.8vw,68px)]">
          Quem cuida do seu visual.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {barbers.map((barber) => {
            const firstName = barber.name.split(" ")[0];
            const link = generateWhatsAppLink({
              message: `Olá! Gostaria de agendar um horário com ${barber.name} na ${barberShop.name}.`,
            });

            return (
              <article key={barber.id} className="flex flex-col gap-4.5">
                <PlaceholderTile
                  label={`retrato — ${barber.name}`}
                  className="aspect-4/5"
                />
                <div>
                  <h3 className="font-extrabold text-2xl">{barber.name}</h3>
                  <p className="mt-1.5 font-mono text-xs tracking-[0.12em] uppercase text-accent">
                    {barber.role}
                  </p>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">
                    {barber.bio}
                  </p>
                </div>
                <TrackedLink
                  href={link}
                  target="_blank"
                  rel="noopener"
                  event="click_whatsapp"
                  eventData={{ source: "barber" }}
                  className="self-start border border-[#3a3a3a] px-4.5 py-3.5 font-bold text-[13px] tracking-[0.08em] uppercase hover:border-accent hover:text-accent transition-colors"
                >
                  Agendar com {firstName}
                </TrackedLink>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
