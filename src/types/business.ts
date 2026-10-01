export type DayHours = {
  day: string;
  dayIndex: number;
  open?: string;
  close?: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export type BusinessConfig = {
  name: string;
  slogan: string;
  description: string;
  category: string;
  phone: string;
  phoneE164: string;
  whatsapp: string;
  whatsappLabel: string;
  email: string;
  address: {
    street: string;
    neighborhood: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  social: {
    instagram: string;
    facebook?: string;
  };
  openingHours: DayHours[];
  defaultWhatsAppMessage: string;
};
