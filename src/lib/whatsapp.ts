import { barberShop } from "@/config/barberShop";

type GenerateWhatsAppLinkParams = {
  phone?: string;
  message?: string;
};

export function generateWhatsAppLink({
  phone = barberShop.whatsapp,
  message = barberShop.defaultWhatsAppMessage,
}: GenerateWhatsAppLinkParams = {}): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
