import type { BusinessConfig, NavItem, Testimonial, FaqItem } from "@/types/business";
import type { BarberService } from "@/types/service";
import type { Barber } from "@/types/barber";

export const siteUrl = "https://strombarbearia.com.br";

export const barberShop: BusinessConfig = {
  name: "STROM BARBEARIA",
  slogan: "Seu estilo. Sua identidade.",
  description:
    "Cortes, barba e cuidados masculinos em uma experiência feita para você.",
  category: "Barbearia",
  phone: "(31) 3333-5555",
  phoneE164: "+553133335555",
  whatsapp: "5531988887777",
  whatsappLabel: "(31) 98888-7777",
  email: "contato@strombarbearia.com.br",
  address: {
    street: "Rua dos Ipês, 150",
    neighborhood: "Vianópolis",
    city: "Betim",
    state: "MG",
    zipCode: "32600-000",
    country: "BR",
  },
  social: {
    instagram: "@strombarbearia",
    facebook: "facebook.com/strombarbearia",
  },
  openingHours: [
    { day: "Domingo", dayIndex: 0 },
    { day: "Segunda", dayIndex: 1, open: "09:00", close: "19:00" },
    { day: "Terça", dayIndex: 2, open: "09:00", close: "19:00" },
    { day: "Quarta", dayIndex: 3, open: "09:00", close: "19:00" },
    { day: "Quinta", dayIndex: 4, open: "09:00", close: "19:00" },
    { day: "Sexta", dayIndex: 5, open: "09:00", close: "20:00" },
    { day: "Sábado", dayIndex: 6, open: "08:00", close: "18:00" },
  ],
  defaultWhatsAppMessage: "Olá! Gostaria de agendar um horário na STROM BARBEARIA.",
};

export const navItems: NavItem[] = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Barbeiros", href: "#barbeiros" },
  { label: "Galeria", href: "#galeria" },
  { label: "Localização", href: "#localizacao" },
];

export const services: BarberService[] = [
  {
    id: "s1",
    slug: "corte-masculino",
    name: "Corte Masculino",
    description:
      "Corte personalizado de acordo com seu estilo, formato de rosto e preferência.",
    price: 45,
    active: true,
  },
  {
    id: "s2",
    slug: "corte-barba",
    name: "Corte + Barba",
    description: "Combo completo para renovar o visual.",
    price: 70,
    featured: true,
    active: true,
  },
  {
    id: "s3",
    slug: "barba",
    name: "Barba",
    description: "Modelagem e acabamento profissional.",
    price: 35,
    active: true,
  },
  {
    id: "s4",
    slug: "corte-degrade",
    name: "Corte Degradê",
    description: "Fade personalizado com acabamento detalhado.",
    price: 50,
    active: true,
  },
  {
    id: "s5",
    slug: "sobrancelha",
    name: "Sobrancelha",
    description: "Design e acabamento masculino.",
    price: 20,
    active: true,
  },
  {
    id: "s6",
    slug: "platinado",
    name: "Platinado",
    description: "Descoloração e transformação completa do visual.",
    price: 120,
    priceFrom: true,
    active: true,
  },
  {
    id: "s7",
    slug: "corte-infantil",
    name: "Corte Infantil",
    description: "Cortes personalizados para crianças.",
    price: 40,
    active: true,
  },
  {
    id: "s8",
    slug: "combo-strom",
    name: "Combo STROM",
    description: "Corte + barba + sobrancelha.",
    price: 85,
    featured: true,
    active: true,
  },
];

export const barbers: Barber[] = [
  {
    id: "b1",
    name: "Lucas Almeida",
    role: "Barbeiro · Especialista em Fade",
    bio: "Experiência com cortes modernos, degradês e visuais personalizados.",
  },
  {
    id: "b2",
    name: "Gabriel Santos",
    role: "Barbeiro · Especialista em Barba",
    bio: "Especialista em barba, acabamento e visagismo masculino.",
  },
  {
    id: "b3",
    name: "Matheus Oliveira",
    role: "Barbeiro",
    bio: "Especialista em cortes clássicos e modernos.",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Ambiente muito bom e atendimento excelente. O corte ficou exatamente como eu queria.",
    author: "João M.",
  },
  {
    id: "t2",
    quote:
      "Já cortei em vários lugares, mas gostei muito do atendimento da STROM. Com certeza vou voltar.",
    author: "Rafael S.",
  },
  {
    id: "t3",
    quote: "Lugar organizado, barbeiros muito bons e ótimo acabamento.",
    author: "Lucas R.",
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "Preciso agendar horário?",
    answer:
      "Recomendamos o agendamento para garantir seu horário, mas podemos verificar a disponibilidade para atendimentos sem agendamento.",
  },
  {
    question: "Posso agendar pelo WhatsApp?",
    answer: "Sim. Clique no botão de WhatsApp e fale diretamente com nossa equipe.",
  },
  {
    question: "A STROM atende crianças?",
    answer: "Sim. Oferecemos cortes infantis.",
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer: "Aceitamos dinheiro, cartão e Pix.",
  },
  {
    question: "Posso escolher o barbeiro?",
    answer: "Sim, dependendo da disponibilidade no momento do agendamento.",
  },
  {
    question: "Onde fica a STROM BARBEARIA?",
    answer: `Estamos localizados em ${barberShop.address.neighborhood}, ${barberShop.address.city} - ${barberShop.address.state}.`,
  },
];
