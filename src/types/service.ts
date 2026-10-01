export type BarberService = {
  id: string;
  slug: string;
  name: string;
  description: string;
  price?: number;
  priceFrom?: boolean;
  image?: string;
  featured?: boolean;
  active: boolean;
};
