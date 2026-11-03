# CLAUDE.md — Odonto Aurora

@AGENTS.md

Landing page de portfólio. Nesta branch (`restaurante`), o template da clínica Odonto Aurora (`main`) foi
trocado para um restaurante **fictício** (Alecrim & Brasa) só via `site.ts`, paleta e ilustração. Site estático, sem backend, sem banco,
sem variáveis de ambiente. Deploy na Vercel sem configuração.

## Stack

- Next.js 16 (App Router, `src/`, Cache Components ligado em `next.config.ts`), TypeScript estrito
- Tailwind CSS 4 (config em CSS: `src/app/globals.css`) + shadcn/ui estilo new-york (Radix) em `src/components/ui`
- Motion: importe `m` de `motion/react-m` (há `LazyMotion` + `domAnimation` com `strict` em `providers.tsx`;
  **não use `motion.div`**, quebra o strict). Hooks (`useInView`, `useScroll`…) vêm de `motion/react`.
- lucide-react (ícones de marca ficam em `src/components/icons/brand-icons.tsx`)
- react-hook-form + zod 4 no formulário; sonner para toasts
- npm (não usar bun), Node 22

## Regra principal: conteúdo só no `site.ts`

- Todo texto/número/link do negócio vive em `src/config/site.ts`, tipado por `src/config/types.ts`.
- **Componentes não podem ter texto do negócio no JSX** (nem aria-labels): adicione um campo no tipo + `site.ts`
  (rótulos de interface ficam em `site.ui`).
- Ícones são referenciados por nome (`IconName`) e resolvidos por `getIcon()` em `src/lib/icons.ts`.
- Links: `buildWhatsAppUrl()` e `buildMapsUrl()` em `src/lib/links.ts`.
- Âncoras das seções: `site.sections` (ids na URL); hrefs do `nav`/CTAs devem usar os mesmos ids.
- URL pública: `resolveSiteUrl()` (`src/lib/site-url.ts`) usa o domínio de produção da Vercel automaticamente.
- Segurança: CSP e cabeçalhos em `next.config.ts`. Nada de scripts/fontes/imagens de terceiros (a CSP bloqueia).
- Fotos são opcionais (`hero.image`, `team.items[n].photo`) e renderizadas com `next/image`.
- Ilustração do hero: `hero.visual.illustration` (mapa em `src/components/illustrations`); logo: `brand.logo`;
  cores em hex para OG/favicon/manifest: `site.theme`. Ícone vindo do config fora de `.map()`: use `<Icon name=…/>`.

## Comandos

```bash
npm run dev          # desenvolvimento
npm run lint         # precisa passar sem erros/avisos
npm run build        # precisa passar sem erros de TypeScript
npm run start        # produção (porta 3000)
npm run screenshots  # com o start rodando: docs/screenshots + checagem de overflow em 360/375/768/1024/1440
npm run test:form    # com o start rodando: valida erros do zod e o link wa.me
```

`CHROME_PATH` aponta para o Chrome usado pelo puppeteer-core.

## Estrutura e convenções

- Server Components por padrão. `"use client"` só em: header (scroll/Sheet), animações (`components/motion/*`,
  `timeline`, `counter`), marquee, formulário e providers.
- Uma seção por arquivo em `src/components/sections`, com `id` de âncora em português (`#tratamentos`,
  `#agendar`…) e `aria-labelledby` apontando para o `h2`.
- Títulos de seção usam `<SectionHeading>`; largura via `<Container>`.
- Revelar ao rolar: `<Reveal>` ou `<Stagger>`/`<StaggerItem>`; hover de card: `<HoverCard>`.
- O hero anima com classes CSS (`tw-animate-css`) e o título/subtítulo **não** começam com opacidade 0 (LCP).
- O formulário é carregado sob demanda (`booking-form-lazy.tsx`) para manter o JS inicial pequeno.
- Grids de 1 coluna no mobile precisam de `grid-cols-1` (evita item estourar a largura).

## Regras de design

- Paleta em tokens CSS (oklch) em `globals.css` (aqui: terracota, creme e açafrão; na `main`: azul-petróleo, pêssego
  e coral). `--warm` só para detalhes gráficos. Nada de cor fixa nos componentes: use/crie tokens. Contraste WCAG AA.
- Títulos: Plus Jakarta Sans (`font-heading`); texto: Inter (`font-sans`).
- Cantos bem arredondados (`rounded-3xl` nos cards), sombras `shadow-soft` / `shadow-lift`, espaçamento generoso
  (`py-20 sm:py-24` por seção).
- Animações sutis e rápidas (≈0,5 s, ease-out), sempre respeitando "reduzir movimento".
- Mobile-first; sem rolagem horizontal em 360, 768, 1024 e 1440 px.
- Sem imagens externas/URLs de terceiros: visual com SVG, gradientes, ícones e formas.

## Antes de concluir uma mudança

1. `npm run lint` e `npm run build` limpos.
2. `npm run start` + `npm run screenshots` (olhar os prints e o relatório de overflow) e `npm run test:form`.
3. Commits pequenos, mensagens em português (`feat: …`, `fix: …`, `docs: …`).
