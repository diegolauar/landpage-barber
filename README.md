# STROM BARBEARIA — Landing Page

Landing page profissional para a STROM BARBEARIA, construída com Next.js (App Router), TypeScript e Tailwind CSS v4.

> Nota: todos os dados (endereço, telefone, preços, barbeiros, depoimentos) são **fictícios** e devem ser substituídos pelos dados reais antes da publicação. Veja [CLAUDE.md](./CLAUDE.md) para o briefing completo.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

Os scripts `dev` e `build` usam `--webpack` porque o Turbopack (padrão no Next.js 16) ainda falha ao carregar `next/font/google` com múltiplos pesos de fonte.

## Estrutura

```text
src/
├── app/            # App Router: layout, page, robots, sitemap
├── components/     # Um componente por seção da landing page
├── config/         # Dados centrais do negócio (nome, endereço, serviços, barbeiros...)
├── lib/            # WhatsApp, SEO, Schema.org, Analytics, horário de funcionamento
└── types/          # Tipos TypeScript compartilhados
```

`design-reference/` guarda o design original (protótipo HTML/CSS) usado como base visual — não faz parte do app.

## Antes de publicar

Ver checklist completo em [CLAUDE.md](./CLAUDE.md), seção 39. Principais pontos:

- Substituir dados fictícios (endereço, telefone, preços, barbeiros, depoimentos) pelos reais
- Adicionar fotos reais em `public/images/` (fachada, barbeiros, cortes, ambiente)
- Gerar uma imagem Open Graph real em `public/images/barbershop/og-image.jpg`
- Configurar domínio + Vercel + Google Search Console + Google Business Profile
