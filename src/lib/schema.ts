import { barberShop, siteUrl } from "@/config/barberShop";

export function buildBarberShopSchema() {
  const { address } = barberShop;

  return {
    "@context": "https://schema.org",
    "@type": "BarberShop",
    name: barberShop.name,
    description: barberShop.description,
    image: `${siteUrl}/images/barbershop/strom-logo.png`,
    logo: `${siteUrl}/images/barbershop/strom-logo.png`,
    telephone: barberShop.phoneE164,
    email: barberShop.email,
    url: siteUrl,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.state,
      postalCode: address.zipCode,
      addressCountry: address.country,
    },
    sameAs: [
      barberShop.social.instagram
        ? `https://instagram.com/${barberShop.social.instagram.replace("@", "")}`
        : undefined,
      barberShop.social.facebook ? `https://${barberShop.social.facebook}` : undefined,
    ].filter(Boolean),
    openingHoursSpecification: barberShop.openingHours
      .filter((h) => h.open && h.close)
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: dayOfWeekSchema(h.dayIndex),
        opens: h.open,
        closes: h.close,
      })),
  };
}

function dayOfWeekSchema(dayIndex: number): string {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return `https://schema.org/${days[dayIndex]}`;
}
