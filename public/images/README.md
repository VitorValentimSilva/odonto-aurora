# Imagens do site

O site foi desenhado para funcionar **sem nenhuma foto**: o hero usa uma composição em SVG/gradientes
e a equipe usa avatares com iniciais. Quando tiver fotos reais, coloque-as nesta pasta e aponte o
caminho no `src/config/site.ts` — os componentes já usam `next/image` (otimização, lazy-load e
formatos modernos automáticos).

## Onde cada foto entra

| Foto | Campo no `site.ts` | Tamanho sugerido | Observações |
| --- | --- | --- | --- |
| Destaque do hero (recepção, consultório, sorriso) | `hero.image` | 1200 × 1400 px (vertical) | Substitui a ilustração do dente dentro do cartão azul. |
| Foto de cada profissional | `team.items[n].photo` | 600 × 600 px (quadrada) | Substitui o avatar com iniciais. |

## Exemplo

```ts
// src/config/site.ts
hero: {
  // ...
  image: {
    src: "/images/hero.jpg",
    alt: "Recepção iluminada da clínica Odonto Aurora",
    width: 1200,
    height: 1400,
  },
},

team: {
  items: [
    {
      name: "Dra. Helena Duarte",
      // ...
      photo: { src: "/images/equipe-helena.jpg", alt: "Dra. Helena Duarte sorrindo no consultório", width: 600, height: 600 },
    },
  ],
},
```

## Dicas

- Prefira **JPG/WebP** com até ~300 KB; o `next/image` gera versões menores automaticamente.
- Escreva um `alt` descritivo (acessibilidade e SEO).
- Use apenas fotos com direito de uso (próprias, contratadas ou de bancos com licença adequada).
