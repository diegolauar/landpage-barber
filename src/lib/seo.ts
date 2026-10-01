import type { Metadata } from "next";
import { barberShop, siteUrl } from "@/config/barberShop";

const defaultTitle = `${barberShop.name} | Barbearia em ${barberShop.address.city} - ${barberShop.address.state}`;

const defaultDescription = `${barberShop.name} em ${barberShop.address.city}-${barberShop.address.state}. Cortes masculinos, barba, degradê e cuidados masculinos com atendimento personalizado. Agende seu horário.`;

export function buildMetadata(): Metadata {
  return {
    metadataBase: new URL(siteUrl),
    title: defaultTitle,
    description: defaultDescription,
    keywords: [
      `barbearia em ${barberShop.address.city}`,
      `barbeiro em ${barberShop.address.city}`,
      `barbearia ${barberShop.address.neighborhood}`,
      `corte masculino ${barberShop.address.city}`,
      `corte degradê ${barberShop.address.city}`,
      `barba ${barberShop.address.city}`,
    ],
    alternates: {
      canonical: siteUrl,
    },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      url: siteUrl,
      siteName: barberShop.name,
      title: defaultTitle,
      description: defaultDescription,
      images: [
        {
          url: "/images/barbershop/og-image.jpg",
          width: 1200,
          height: 630,
          alt: barberShop.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: defaultTitle,
      description: defaultDescription,
      images: ["/images/barbershop/og-image.jpg"],
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: "/favicon.ico",
    },
  };
}
