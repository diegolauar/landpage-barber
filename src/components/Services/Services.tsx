import { barberShop, services } from "@/config/barberShop";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { TrackedLink } from "@/components/TrackedLink";

export function Services() {
  const activeServices = services.filter((s) => s.active);

  return (
    <section
      id="servicos"
      className="bg-surface border-t border-border"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-10 py-20 sm:py-35">
        <div className="flex flex-wrap justify-between items-end gap-6 mb-14">
          <div>
            <p className="mb-5 font-mono text-xs tracking-[0.3em] text-accent">
              02 — SERVIÇOS
            </p>
            <h2 className="font-extrabold leading-[0.98] tracking-[-0.02em] text-[38px] sm:text-[clamp(38px,4.8vw,68px)]">
              Cortes, barba e acabamento.
            </h2>
          </div>
          <p className="max-w-[26em] text-muted text-base leading-relaxed">
            Corte masculino, degradê e barba em {barberShop.address.city} —
            escolha o serviço e agende direto pelo WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border-strong border border-border-strong">
          {activeServices.map((service, i) => {
            const link = generateWhatsAppLink({
              message: `Olá! Gostaria de agendar ${service.name} na ${barberShop.name}.`,
            });
            const num = String(i + 1).padStart(2, "0");
            const priceLabel = service.price ? `R$ ${service.price}` : undefined;

            return (
              <article
                key={service.id}
                className="bg-surface hover:bg-[#161616] transition-colors px-6.5 pt-7.5 pb-6.5 flex flex-col gap-3.5 min-h-[250px]"
              >
                <div className="flex justify-between items-center gap-3">
                  <span className="font-mono text-xs text-subtle">{num}</span>
                  {service.featured && (
                    <span className="font-mono text-[10px] tracking-[0.16em] uppercase bg-accent text-accent-foreground px-2 py-1">
                      Mais pedido
                    </span>
                  )}
                </div>
                <h3 className="mt-2 font-extrabold text-2xl tracking-[-0.01em]">
                  {service.name}
                </h3>
                <p className="text-[15px] leading-relaxed text-muted flex-1">
                  {service.description}
                </p>
                <div className="flex justify-between items-end gap-3 border-t border-border pt-4">
                  {priceLabel && (
                    <span className="flex flex-col gap-0.5">
                      <span className="font-mono text-[10px] tracking-[0.14em] text-subtle uppercase">
                        {service.priceFrom ? "A partir de" : "Valor"}
                      </span>
                      <span className="font-extrabold text-[26px] text-accent">
                        {priceLabel}
                      </span>
                    </span>
                  )}
                  <TrackedLink
                    href={link}
                    target="_blank"
                    rel="noopener"
                    event="click_service"
                    eventData={{ service: service.slug }}
                    aria-label={`Agendar ${service.name} pelo WhatsApp`}
                    className="font-bold text-[13px] tracking-[0.08em] uppercase py-3 ml-auto hover:text-accent transition-colors"
                  >
                    Agendar →
                  </TrackedLink>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
