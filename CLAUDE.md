# Briefing — Landing Page STROM BARBEARIA

## 1. Visão geral do projeto

Criar uma landing page profissional, moderna e responsiva para a **STROM BARBEARIA**, uma barbearia voltada para homens que buscam qualidade, estilo, atendimento personalizado e uma boa experiência.

> **Importante:** neste momento, somente o nome **STROM BARBEARIA** é uma informação real. Todos os demais dados abaixo são fictícios e devem ser facilmente substituíveis antes da publicação.

O objetivo principal da página é:

* Apresentar a STROM BARBEARIA de forma profissional.
* Mostrar os principais serviços.
* Apresentar o ambiente e a experiência da barbearia.
* Facilitar o agendamento pelo WhatsApp.
* Mostrar localização e horário de funcionamento.
* Criar presença profissional no Google.
* Ser otimizada para SEO local.
* Funcionar perfeitamente em celulares.
* Ter uma estrutura reutilizável para futuros clientes.

---

# 2. Identidade da empresa

### Nome

**STROM BARBEARIA**

### Slogan

> **"Seu estilo. Sua identidade."**

### Descrição

> A STROM BARBEARIA oferece cortes masculinos, barba e cuidados personalizados para quem valoriza estilo, qualidade e uma experiência diferenciada.

### Categoria

**Barbearia**

### Telefone fictício

**(31) 3333-5555**

### WhatsApp fictício

**+55 31 98888-7777**

### E-mail fictício

**[contato@strombarbearia.com.br](mailto:contato@strombarbearia.com.br)**

### Endereço fictício

**Rua dos Ipês, 150, Vianópolis, Betim - MG, 32600-000, Brasil**

### Instagram fictício

**@strombarbearia**

### Facebook fictício

**facebook.com/strombarbearia**

---

# 3. Direção visual

A identidade visual deve transmitir:

* Masculinidade
* Estilo
* Modernidade
* Confiança
* Exclusividade
* Personalidade
* Qualidade
* Experiência premium

A página não deve parecer uma clínica ou um site corporativo tradicional.

A sensação desejada é de uma **barbearia moderna e sofisticada**, com estética urbana.

## Paleta sugerida

Utilizar principalmente:

* Preto
* Grafite
* Cinza escuro
* Branco/off-white
* Tons metálicos
* Um tom de destaque para CTAs

Evitar excesso de cores.

A interface deve ter bastante contraste e aparência premium.

---

# 4. Stack

Utilizar:

* Next.js
* TypeScript
* React
* Tailwind CSS
* ESLint
* Prettier
* Git
* GitHub
* Vercel

Utilizar **Next.js App Router**.

Priorizar Server Components sempre que possível.

---

# 5. Estrutura da página

A landing page deverá conter:

1. Header
2. Hero
3. Barra de diferenciais
4. Sobre a barbearia
5. Serviços
6. Experiência STROM
7. Galeria
8. Barbeiros
9. Depoimentos
10. FAQ
11. Localização
12. Horário de funcionamento
13. CTA para agendamento
14. Footer
15. Botão flutuante do WhatsApp

---

# 6. Header

Criar um header moderno e minimalista.

Logo:

**STROM BARBEARIA**

Menu:

* Início
* Sobre
* Serviços
* Barbeiros
* Galeria
* Localização

CTA:

**Agendar horário**

No mobile:

* Menu hamburger
* CTA de agendamento visível
* Logo centralizada ou alinhada à esquerda

O header pode possuir efeito de transparência/blur inicialmente e assumir fundo sólido durante o scroll.

---

# 7. Hero

O Hero deve ser a primeira impressão da barbearia.

Utilizar uma imagem forte de um ambiente de barbearia ou barbeiro realizando um corte.

### Headline

> **Seu estilo. Sua identidade.**

### Subheadline

> Cortes, barba e cuidados masculinos em uma experiência feita para você.

### CTA principal

**Agendar meu horário**

Ao clicar:

Abrir WhatsApp com mensagem pré-preenchida:

> Olá! Gostaria de agendar um horário na STROM BARBEARIA.

### CTA secundário

**Conhecer nossos serviços**

Scroll para a seção de serviços.

---

# 8. Elementos de confiança

Logo abaixo do Hero, apresentar pequenos diferenciais.

Exemplo:

### +5 anos

De experiência

### +3.000

Clientes atendidos

### Atendimento

Personalizado

### Ambiente

Moderno e confortável

Todos esses números são fictícios e devem ser substituídos antes da publicação.

---

# 9. Sobre a STROM BARBEARIA

Criar uma seção contando a história da empresa.

### Título

> **Mais do que um corte. Uma experiência.**

### Texto fictício

> A STROM BARBEARIA nasceu com o propósito de transformar o tradicional cuidado masculino em uma experiência completa. Nosso espaço combina estilo, técnica e atendimento personalizado para que cada cliente saia daqui se sentindo ainda melhor.
>
> Aqui, cada detalhe importa: do atendimento ao acabamento final.

Adicionar imagens da:

* Fachada
* Recepção
* Cadeiras
* Área de atendimento
* Barbeiros trabalhando

CTA:

**Conheça nossa barbearia**

---

# 10. Serviços

Criar uma seção visual apresentando os principais serviços.

## Serviços fictícios

### Corte Masculino

Corte personalizado de acordo com seu estilo, formato de rosto e preferência.

Preço fictício:

**R$ 45**

---

### Corte + Barba

Combo completo para renovar o visual.

Preço fictício:

**R$ 70**

---

### Barba

Modelagem e acabamento profissional.

Preço fictício:

**R$ 35**

---

### Corte Degradê

Fade personalizado com acabamento detalhado.

Preço fictício:

**R$ 50**

---

### Sobrancelha

Design e acabamento masculino.

Preço fictício:

**R$ 20**

---

### Platinado

Descoloração e transformação completa do visual.

Preço fictício:

**A partir de R$ 120**

---

### Corte Infantil

Cortes personalizados para crianças.

Preço fictício:

**R$ 40**

---

### Combo STROM

Corte + barba + sobrancelha.

Preço fictício:

**R$ 85**

---

## Estrutura TypeScript

Criar estrutura reutilizável:

```ts
type BarberService = {
  id: string;
  name: string;
  description: string;
  price?: number;
  image?: string;
  slug: string;
  featured?: boolean;
  active: boolean;
};
```

Os serviços devem ficar centralizados em uma configuração para facilitar alterações futuras.

---

# 11. Experiência STROM

Criar uma seção diferenciando a barbearia de um simples salão de corte.

### Título

> **Aqui, cada detalhe faz parte da experiência.**

Criar cards:

### Ambiente

Espaço moderno, confortável e pensado para você.

### Profissionais

Barbeiros preparados para diferentes estilos e técnicas.

### Atendimento

Atendimento personalizado do início ao fim.

### Qualidade

Produtos e ferramentas selecionados para entregar um excelente acabamento.

### Estilo

Seu corte deve combinar com sua personalidade.

---

# 12. Galeria

Criar uma galeria visual grande.

Imagens fictícias:

* Fachada da barbearia
* Recepção
* Cadeira de barbeiro
* Corte masculino
* Barba
* Degradê
* Barbeiro trabalhando
* Produtos
* Ambiente
* Cliente sendo atendido

Utilizar:

```tsx
next/image
```

Todas as imagens devem possuir:

* `alt`
* `width`
* `height`
* carregamento otimizado
* lazy loading quando apropriado

A galeria pode utilizar um layout assimétrico para deixar o site mais moderno.

---

# 13. Barbeiros

Criar uma seção apresentando os profissionais.

## Dados fictícios

### Lucas Almeida

**Barbeiro / Especialista em Fade**

Experiência com cortes modernos, degradês e visuais personalizados.

---

### Gabriel Santos

**Barbeiro / Especialista em Barba**

Especialista em barba, acabamento e visagismo masculino.

---

### Matheus Oliveira

**Barbeiro**

Especialista em cortes clássicos e modernos.

---

> **ATENÇÃO:** os nomes acima são fictícios. Devem ser substituídos pelos profissionais reais antes da publicação.

Não criar informações profissionais falsas para uso público.

---

# 14. Depoimentos

Criar seção de avaliações/depoimentos.

Exemplos fictícios:

> "Ambiente muito bom e atendimento excelente. O corte ficou exatamente como eu queria."

**— João M.**

---

> "Já cortei em vários lugares, mas gostei muito do atendimento da STROM. Com certeza vou voltar."

**— Rafael S.**

---

> "Lugar organizado, barbeiros muito bons e ótimo acabamento."

**— Lucas R.**

---

> **IMPORTANTE:** esses depoimentos são apenas exemplos para desenvolvimento.

Antes da publicação, utilizar somente avaliações reais e autorizadas.

---

# 15. FAQ

Criar seção de perguntas frequentes.

### Preciso agendar horário?

Recomendamos o agendamento para garantir seu horário, mas podemos verificar a disponibilidade para atendimentos sem agendamento.

---

### Posso agendar pelo WhatsApp?

Sim. Clique no botão de WhatsApp e fale diretamente com nossa equipe.

---

### A STROM atende crianças?

Sim. Oferecemos cortes infantis.

---

### Quais formas de pagamento são aceitas?

Aceitamos dinheiro, cartão e Pix.

> Informação fictícia e configurável.

---

### Posso escolher o barbeiro?

Sim, dependendo da disponibilidade no momento do agendamento.

---

### Onde fica a STROM BARBEARIA?

Estamos localizados em Vianópolis, Betim - MG.

> Endereço fictício. Substituir pelo endereço real.

---

# 16. Agendamento pelo WhatsApp

O WhatsApp deve ser uma das principais conversões da página.

Criar função:

```ts
generateWhatsAppLink({
  phone,
  message,
});
```

Exemplo:

```ts
const message =
  "Olá! Gostaria de agendar um horário na STROM BARBEARIA.";
```

Gerar link:

```text
https://wa.me/...
```

Não deixar o número diretamente espalhado pelos componentes.

Centralizar na configuração da empresa.

---

# 17. Botão flutuante do WhatsApp

Adicionar botão fixo no canto inferior direito.

Exemplo:

**💬 Agendar pelo WhatsApp**

No mobile:

Botão suficientemente grande para facilitar o toque.

Registrar evento:

```text
click_whatsapp
```

---

# 18. Localização

Criar seção:

### Título

> **Venha conhecer a STROM**

Mostrar:

* Endereço
* Bairro
* Cidade
* Google Maps
* Botão "Como chegar"

Exemplo:

**Rua dos Ipês, 150
Vianópolis — Betim/MG**

CTA:

**Ver no Google Maps**

O endereço deve posteriormente ser substituído pelo endereço real.

---

# 19. Horário de funcionamento

Criar componente reutilizável:

```tsx
<OpeningHours />
```

Horário fictício:

| Dia     | Horário       |
| ------- | ------------- |
| Segunda | 09:00 – 19:00 |
| Terça   | 09:00 – 19:00 |
| Quarta  | 09:00 – 19:00 |
| Quinta  | 09:00 – 19:00 |
| Sexta   | 09:00 – 20:00 |
| Sábado  | 08:00 – 18:00 |
| Domingo | Fechado       |

---

# 20. CTA final

Criar uma seção visual forte antes do Footer.

### Título

> **Seu próximo corte começa aqui.**

### Texto

> Escolha seu horário e venha viver a experiência STROM.

Botão:

**Agendar meu horário**

Abrir WhatsApp.

---

# 21. Footer

O Footer deve conter:

**STROM BARBEARIA**

* Início
* Sobre
* Serviços
* Barbeiros
* Galeria
* Localização

Contato:

* WhatsApp
* Telefone
* Instagram
* E-mail

Endereço.

Horário de funcionamento.

Adicionar:

> © 2026 STROM BARBEARIA. Todos os direitos reservados.

---

# 22. SEO

A página deverá ser preparada para SEO local.

## Title

```text
STROM BARBEARIA | Barbearia em Betim - MG
```

## Meta description

```text
STROM BARBEARIA em Betim-MG. Cortes masculinos, barba, degradê e cuidados masculinos com atendimento personalizado. Agende seu horário.
```

---

# 23. Palavras-chave locais

Utilizar naturalmente termos como:

* barbearia em Betim
* barbeiro em Betim
* barbearia Vianópolis
* corte masculino Betim
* corte degradê Betim
* barba Betim
* barbeiro Vianópolis
* barbearia masculina em Betim
* corte masculino Vianópolis

Não fazer keyword stuffing.

O conteúdo deve ser natural.

---

# 24. Next.js Metadata

Utilizar a Metadata API do Next.js.

Exemplo:

```ts
export const metadata: Metadata = {
  title: "STROM BARBEARIA | Barbearia em Betim - MG",
  description:
    "Cortes masculinos, barba e cuidados masculinos na STROM BARBEARIA. Agende seu horário.",
};
```

Adicionar também:

* Open Graph
* Twitter metadata
* canonical
* favicon
* robots

---

# 25. Open Graph

Configurar imagem de compartilhamento.

Quando alguém enviar o site pelo:

* WhatsApp
* Instagram
* Facebook
* LinkedIn

deve aparecer:

**STROM BARBEARIA**

* imagem profissional

* descrição.

---

# 26. Schema.org / JSON-LD

Implementar dados estruturados para negócio local.

Utilizar:

```text
BarberShop
```

ou o tipo apropriado dentro de `LocalBusiness`.

Exemplo conceitual:

```json
{
  "@context": "https://schema.org",
  "@type": "BarberShop",
  "name": "STROM BARBEARIA",
  "telephone": "+55 31 98888-7777",
  "url": "https://strombarbearia.com.br",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua dos Ipês, 150",
    "addressLocality": "Betim",
    "addressRegion": "MG",
    "postalCode": "32600-000",
    "addressCountry": "BR"
  }
}
```

Os dados devem ser gerados a partir de uma configuração central.

---

# 27. Google Business Profile

A empresa deverá ter um perfil no Google Business Profile.

O cadastro deverá ser feito utilizando a conta Google do proprietário da barbearia.

Configurar:

* Nome
* Categoria
* Endereço
* Telefone
* WhatsApp, quando aplicável
* Horário
* Site
* Instagram
* Fotos
* Serviços
* Descrição

Adicionar fotos reais da:

* Fachada
* Interior
* Barbeiros
* Cortes
* Ambiente
* Logo

---

# 28. Google Search Console

Depois do deploy:

1. Criar propriedade.
2. Verificar domínio.
3. Enviar sitemap.
4. Solicitar indexação da página principal.
5. Verificar páginas indexadas.
6. Monitorar consultas.
7. Monitorar impressões.
8. Monitorar cliques.
9. Monitorar CTR.
10. Monitorar posição média.

Criar:

```text
/sitemap.xml
```

e:

```text
/robots.txt
```

---

# 29. Analytics

Preparar estrutura para Google Analytics ou Google Tag Manager.

Eventos importantes:

```text
click_whatsapp
click_phone
click_maps
click_instagram
click_schedule
click_service
```

Isso permitirá entender como os visitantes interagem com o site.

---

# 30. Performance

Priorizar:

* Server Components
* `next/image`
* imagens otimizadas
* lazy loading
* fontes otimizadas
* pouco JavaScript no cliente
* componentes leves
* animações moderadas
* evitar bibliotecas desnecessárias

Monitorar:

* LCP
* INP
* CLS
* Lighthouse
* PageSpeed Insights

O site deve carregar rapidamente principalmente em dispositivos móveis.

---

# 31. Responsividade

Desenvolver pensando primeiro no mobile.

Testar pelo menos:

```text
375px
390px
768px
1024px
1440px
```

Verificar:

* Menu
* Hero
* Botões
* Cards
* Galeria
* WhatsApp
* Formulários
* FAQ
* Footer

O botão de agendamento deve ser extremamente fácil de encontrar no celular.

---

# 32. Acessibilidade

Implementar:

* HTML semântico
* hierarquia correta de headings
* `alt` nas imagens
* contraste adequado
* navegação por teclado
* estados de foco
* labels em formulários
* botões reais em vez de divs clicáveis
* links com textos descritivos

---

# 33. Estrutura do projeto

Sugestão:

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── robots.ts
│   └── sitemap.ts
│
├── components/
│   ├── Header/
│   ├── Hero/
│   ├── TrustBar/
│   ├── About/
│   ├── Services/
│   ├── Experience/
│   ├── Gallery/
│   ├── Barbers/
│   ├── Testimonials/
│   ├── FAQ/
│   ├── Location/
│   ├── OpeningHours/
│   ├── CTA/
│   ├── WhatsAppButton/
│   └── Footer/
│
├── config/
│   └── barberShop.ts
│
├── lib/
│   ├── whatsapp.ts
│   ├── seo.ts
│   ├── schema.ts
│   └── analytics.ts
│
├── types/
│   ├── barber.ts
│   └── service.ts
│
└── styles/
```

---

# 34. Configuração central

Criar:

```text
src/config/barberShop.ts
```

Exemplo:

```ts
export const barberShop = {
  name: "STROM BARBEARIA",

  slogan: "Seu estilo. Sua identidade.",

  description:
    "Cortes, barba e cuidados masculinos em uma experiência feita para você.",

  phone: "(31) 3333-5555",

  whatsapp: "5531988887777",

  email: "contato@strombarbearia.com.br",

  address: {
    street: "Rua dos Ipês, 150",
    neighborhood: "Vianópolis",
    city: "Betim",
    state: "MG",
    zipCode: "32600-000",
    country: "Brasil",
  },

  social: {
    instagram: "@strombarbearia",
    facebook: "facebook.com/strombarbearia",
  },
};
```

A ideia é que os componentes não precisem conhecer diretamente os dados da empresa.

---

# 35. Imagens

Para o MVP, utilizar:

```text
public/
└── images/
    ├── barbershop/
    ├── barbers/
    ├── services/
    └── gallery/
```

Exemplo:

```text
/public/images/barbershop/hero.jpg
/public/images/barbershop/reception.jpg
/public/images/barbers/services.jpg
/public/images/barbers/lucas.jpg
```

Utilizar `next/image`.

Posteriormente, caso a barbearia tenha um painel para enviar fotos, considerar:

* Cloudinary
* AWS S3
* outro storage/CDN

Para uma landing page simples, não é necessário criar um sistema de upload.

---

# 36. Domínio

Sugestão:

```text
strombarbearia.com.br
```

O domínio real deve ser comprado e ficar preferencialmente no nome/conta do proprietário da barbearia.

Depois:

```text
Domínio
   ↓
DNS
   ↓
Vercel
   ↓
Next.js
   ↓
HTTPS
```

---

# 37. Deploy

Fluxo:

```text
Código
   ↓
GitHub
   ↓
Vercel
   ↓
Deploy automático
   ↓
Domínio personalizado
   ↓
HTTPS
```

Cada push na branch principal pode gerar um novo deploy automaticamente.

---

# 38. Segurança

Nunca colocar:

* API keys
* tokens
* senhas
* credenciais
* secrets

diretamente no código.

Utilizar:

```text
.env.local
```

e configurar as variáveis de ambiente na Vercel.

Nunca versionar:

```text
.env.local
```

---

# 39. Checklist antes de publicar

## Interface

* [ ] Desktop funcionando
* [ ] Mobile funcionando
* [ ] Tablet funcionando
* [ ] Header funcionando
* [ ] Menu mobile funcionando
* [ ] CTA funcionando
* [ ] WhatsApp funcionando
* [ ] Galeria funcionando
* [ ] FAQ funcionando
* [ ] Google Maps funcionando
* [ ] Instagram funcionando

## Conteúdo

* [ ] Nome correto
* [ ] Logo correta
* [ ] Telefone correto
* [ ] WhatsApp correto
* [ ] Endereço correto
* [ ] Horários corretos
* [ ] Serviços corretos
* [ ] Preços corretos
* [ ] Fotos reais
* [ ] Barbeiros reais
* [ ] Depoimentos reais/autorizados

## SEO

* [ ] Title
* [ ] Description
* [ ] H1
* [ ] H2
* [ ] Open Graph
* [ ] Favicon
* [ ] Sitemap
* [ ] Robots
* [ ] Canonical
* [ ] Schema.org
* [ ] Alt das imagens

## Google

* [ ] Google Business Profile
* [ ] Google Search Console
* [ ] Sitemap enviado
* [ ] Site indexado
* [ ] Endereço correto
* [ ] Telefone correto
* [ ] Fotos adicionadas

## Deploy

* [ ] GitHub
* [ ] Vercel
* [ ] Domínio
* [ ] DNS
* [ ] HTTPS
* [ ] Variáveis de ambiente
* [ ] Teste em produção

---

# 40. Arquitetura pensando em reutilização

A landing page deve ser construída de maneira que posteriormente seja possível transformá-la em um template para outras barbearias.

Por exemplo:

```text
STROM BARBEARIA
        ↓
Template
        ↓
Outra Barbearia
        ↓
Outra Barbearia
        ↓
Outra Barbearia
```

A maior parte dos componentes deve ser reutilizável.

Alterando:

```text
nome
logo
cores
serviços
preços
fotos
barbeiros
endereço
WhatsApp
Instagram
horários
```

é possível criar uma nova landing page rapidamente.

---

# 41. Evolução futura

Não implementar agora, mas deixar a arquitetura preparada para futuramente adicionar:

### Sistema de agendamento

Cliente escolhe:

```text
Serviço
↓
Barbeiro
↓
Data
↓
Horário
↓
WhatsApp / confirmação
```

### Dashboard

A barbearia poderia futuramente alterar:

* Serviços
* Preços
* Fotos
* Horários
* Barbeiros
* Depoimentos
* Informações de contato

### Banco de dados

Futuramente:

```text
PostgreSQL
```

com entidades:

```text
Barbershop
Barber
Service
Appointment
Customer
BusinessHours
Testimonial
GalleryImage
```

### SaaS

A arquitetura poderia evoluir para:

```text
                    Plataforma
                        |
        ┌───────────────┼───────────────┐
        ↓               ↓               ↓
     STROM          Barbearia A     Barbearia B
        ↓               ↓               ↓
     Site            Site            Site
        ↓               ↓               ↓
   Dashboard       Dashboard       Dashboard
```

Mas **não implementar autenticação, dashboard, banco de dados ou pagamentos neste primeiro MVP**.

---

# 42. Prioridade de implementação

Seguir esta ordem:

### Fase 1 — Setup

* Next.js
* TypeScript
* Tailwind
* ESLint
* Git
* GitHub

### Fase 2 — Design

* Layout
* Tipografia
* Cores
* Header
* Hero

### Fase 3 — Componentes

* About
* Services
* Experience
* Gallery
* Barbers
* Testimonials
* FAQ
* Location
* CTA
* Footer

### Fase 4 — Conversão

* WhatsApp
* Agendamento
* Google Maps
* Telefone
* Instagram

### Fase 5 — SEO

* Metadata
* Sitemap
* Robots
* Open Graph
* Schema.org
* SEO local

### Fase 6 — Performance

* Imagens
* Fonts
* Lighthouse
* Core Web Vitals
* Mobile

### Fase 7 — Deploy

```text
GitHub
   ↓
Vercel
   ↓
Domínio
   ↓
HTTPS
```

### Fase 8 — Google

```text
Google Business Profile
        +
Google Search Console
```

---

# 43. Objetivo final da experiência

Quando alguém entrar no site da **STROM BARBEARIA**, deve entender rapidamente:

**O que é?**

> Uma barbearia moderna.

**Onde fica?**

> Localização claramente apresentada.

**O que oferece?**

> Cortes, barba e serviços masculinos.

**Por que escolher?**

> Profissionais, ambiente e experiência.

**Quanto custa?**

> Serviços e preços apresentados.

**Como agendar?**

> Botão de WhatsApp sempre acessível.

O principal objetivo da landing page é transformar visitantes em **agendamentos**.

---

# 44. Regra importante para o desenvolvimento

Não criar uma aplicação complexa desnecessariamente.

Neste primeiro momento, o projeto é uma **landing page profissional para uma barbearia**.

Priorizar:

```text
Design
+
Performance
+
SEO
+
Conversão
+
Responsividade
```

Não implementar inicialmente:

* Login
* Dashboard
* Banco de dados
* Sistema de pagamentos
* Sistema complexo de agendamento
* Painel administrativo
* Multi-tenancy

Esses recursos podem ser adicionados posteriormente.

---

# 45. Resultado esperado

O resultado final deve parecer um site profissional de uma barbearia real, e não um template genérico.

A página deve transmitir:

> **STROM BARBEARIA**
>
> Seu estilo. Sua identidade.

Com estética moderna, masculina, sofisticada e urbana.

O visitante deve conseguir sair da página e realizar um agendamento pelo WhatsApp em poucos cliques.

**Prioridade máxima: experiência visual + confiança + agendamento.**

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
