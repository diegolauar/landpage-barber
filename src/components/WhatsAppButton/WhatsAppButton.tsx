import { generateWhatsAppLink } from "@/lib/whatsapp";
import { TrackedLink } from "@/components/TrackedLink";

export function WhatsAppButton() {
  return (
    <TrackedLink
      href={generateWhatsAppLink()}
      target="_blank"
      rel="noopener"
      event="click_whatsapp"
      eventData={{ source: "floating" }}
      aria-label="Agendar pelo WhatsApp"
      className="fixed right-3.5 sm:right-7 bottom-3.5 sm:bottom-7 z-60 flex items-center gap-3 bg-foreground text-background pl-4.5 pr-5.5 py-4 min-h-14 font-extrabold text-sm tracking-[0.04em] uppercase shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:bg-accent transition-colors"
    >
      <span
        className="w-2.5 h-2.5 rounded-full"
        style={{
          background: "oklch(0.62 0.17 150)",
          boxShadow: "0 0 0 4px oklch(0.62 0.17 150 / 0.25)",
        }}
      />
      Agendar pelo WhatsApp
    </TrackedLink>
  );
}
