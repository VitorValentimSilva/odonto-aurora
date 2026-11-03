import { resolveSiteUrl } from "@/lib/site-url";

import type { SiteConfig } from "./types";

/**
 * ============================================================================
 *  CONTEÚDO DO SITE
 * ============================================================================
 *  Todo texto, número, contato e link do negócio vive aqui.
 *  Para transformar o site em outro negócio, edite este arquivo (e a paleta
 *  em src/app/globals.css) — os componentes não precisam ser alterados.
 *
 *  ⚠️ "Alecrim & Brasa" é um restaurante FICTÍCIO criado para portfólio.
 *  Telefones, endereço, CNPJ, equipe, preços e avaliações são inventados.
 *  Este é o mesmo template da landing page "Odonto Aurora" (branch main).
 * ============================================================================
 */

const whatsapp = "5519988887777";

export const site: SiteConfig = {
  url: resolveSiteUrl("https://odonto-aurora.vercel.app"),
  locale: "pt_BR",
  lang: "pt-BR",

  brand: {
    name: "Alecrim & Brasa",
    shortName: "Alecrim",
    slogan: "Comida de fogo, ingredientes de verdade",
    description:
      "Restaurante de cozinha de fogo em Campinas – SP: carnes na brasa, pizzas de fermentação natural, ingredientes de pequenos produtores e uma carta de vinhos pensada para cada prato.",
    schemaType: "Restaurant",
    priceRange: "$$",
    servesCuisine: ["Brasileira", "Cozinha de fogo", "Pizza"],
    logo: {
      // chama sobre a linha de um prato
      glyph:
        "M20.6 7.5c1.7 4.6 7.4 7.3 7.4 14.2a8 8 0 0 1-16 0c0-3.6 2-5.7 3.6-7.5.4 2.3 1.5 3.6 3 4-.3-3.9-.6-7.4 2-10.7Z",
      accent: "M8 31.5h24",
    },
  },

  theme: {
    primary: "#a2422a",
    primaryDark: "#6b2a1b",
    warm: "#e2a43c",
    warmLight: "#fbe8c6",
    background: "#fcf8f2",
    backgroundTint: "#f5eadb",
    foreground: "#2d1d15",
  },

  seo: {
    title: "Alecrim & Brasa — Restaurante de cozinha de fogo em Campinas",
    description:
      "Carnes na brasa, pizzas de fermentação natural e ingredientes locais em Campinas – SP. Reserve sua mesa pelo WhatsApp.",
    keywords: [
      "restaurante em Campinas",
      "cozinha de fogo",
      "pizza de fermentação natural",
      "costela no fogo de chão",
      "restaurante pet friendly Campinas",
      "jantar romântico Campinas",
    ],
    ogImageAlt: "Alecrim & Brasa — Comida de fogo, ingredientes de verdade",
    serviceSchemaType: "MenuItem",
  },

  contact: {
    whatsapp,
    whatsappDisplay: "(19) 98888-7777",
    whatsappLabel: "WhatsApp",
    phone: "+55 19 98888-7777",
    email: "reservas@alecrimebrasa.com.br",
    defaultWhatsAppMessage: "Olá, Alecrim & Brasa! Vim pelo site e gostaria de reservar uma mesa.",
  },

  address: {
    street: "Rua do Alecrim, 315",
    district: "Jardim Aurora",
    city: "Campinas",
    state: "SP",
    postalCode: "13000-000",
    country: "BR",
    full: "Rua do Alecrim, 315, Jardim Aurora, Campinas – SP, 13000-000",
    reference: "Manobrista no local a partir das 19h",
  },

  openingHours: [
    {
      label: "Terça a sexta",
      hours: "11h30–15h · 19h–23h",
      days: ["Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "11:30",
      closes: "23:00",
      slots: [
        { opens: "11:30", closes: "15:00" },
        { opens: "19:00", closes: "23:00" },
      ],
    },
    {
      label: "Sábado",
      hours: "12h às 23h30",
      days: ["Saturday"],
      opens: "12:00",
      closes: "23:30",
    },
    {
      label: "Domingo",
      hours: "12h às 17h",
      days: ["Sunday"],
      opens: "12:00",
      closes: "17:00",
    },
    {
      label: "Segunda",
      hours: "Fechado",
      days: [],
      opens: "",
      closes: "",
    },
  ],

  social: [
    {
      icon: "instagram",
      label: "Instagram",
      handle: "@alecrimebrasa.demo",
      href: "https://instagram.com/alecrimebrasa.demo",
    },
    {
      icon: "whatsapp",
      label: "WhatsApp",
      handle: "(19) 98888-7777",
      href: `https://wa.me/${whatsapp}`,
    },
  ],

  responsible: {
    name: "Alecrim & Brasa Gastronomia Ltda.",
    role: "Razão social",
    registry: "CNPJ 00.000.000/0001-00",
  },

  /** Troque pelo seu nome e link (GitHub, LinkedIn, site…). */
  author: {
    name: "Vitor Valentim Silva",
    url: "https://github.com/vitorvalentimsilva",
  },

  sections: {
    home: "inicio",
    treatments: "cardapio",
    differentials: "a-casa",
    steps: "como-reservar",
    team: "equipe",
    testimonials: "avaliacoes",
    payment: "ambiente",
    faq: "duvidas",
    booking: "reservas",
    location: "localizacao",
  },

  nav: [
    { label: "Cardápio", href: "#cardapio" },
    { label: "A casa", href: "#a-casa" },
    { label: "Equipe", href: "#equipe" },
    { label: "Avaliações", href: "#avaliacoes" },
    { label: "Dúvidas", href: "#duvidas" },
    { label: "Contato", href: "#localizacao" },
  ],

  ui: {
    skipToContent: "Pular para o conteúdo",
    headerCta: { label: "Reservar mesa", href: "#reservas" },
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    menuTitle: "Menu",
    homeLabel: "Alecrim & Brasa — início",
    mainNavLabel: "Navegação principal",
    whatsappFab: "Reservar pelo WhatsApp",
    starsLabel: (rating) => `Avaliação: ${rating} de 5 estrelas`,
    externalLinkHint: "(abre em nova aba)",
    pauseAnimation: "Pausar avaliações",
    notifications: "Notificações",
    closeNotification: "Fechar notificação",
    playAnimation: "Retomar avaliações",
    notFound: {
      title: "Página não encontrada",
      description: "Essa página saiu do cardápio. Que tal voltar ao início e reservar a sua mesa?",
      cta: { label: "Voltar ao início", href: "/" },
    },
  },

  hero: {
    badge: "Reservas abertas para este fim de semana",
    title: "Comida de fogo,",
    highlight: "ingredientes de verdade",
    subtitle:
      "Carnes na brasa, pizzas de fermentação lenta e vegetais de pequenos produtores da região — servidos sem pressa, num salão feito para encontros.",
    primaryCta: { label: "Reservar pelo WhatsApp", href: "#reservas" },
    secondaryCta: { label: "Ver cardápio", href: "#cardapio" },
    trustBadges: [
      { icon: "flame", label: "Forno a lenha e parrilla" },
      { icon: "star", label: "Nota 4,8 no Google" },
      { icon: "sprout", label: "Ingredientes locais" },
    ],
    visual: {
      illustration: "dish",
      cardTitle: "Prato da semana",
      cardSubtitle: "Costela de fogo de chão",
      chips: ["12h na brasa", "Serve 2", "Sem glúten"],
      ratingLabel: "Avaliação média",
      ratingValue: "4,8",
      nextSlotLabel: "Mesa disponível",
      nextSlotValue: "Hoje, 20h30",
    },
    // image: { src: "/images/hero.jpg", alt: "Prato servido no salão do restaurante", width: 1200, height: 1400 },
  },

  stats: {
    heading: {
      eyebrow: "Em números",
      title: "Uma brasa que não apaga desde 2017",
    },
    items: [
      { value: 9, suffix: "anos", label: "de casa cheia" },
      { value: 85000, prefix: "+", label: "pratos servidos" },
      { value: 120, label: "lugares no salão" },
      { value: 4.8, decimals: 1, suffix: "/5", label: "nota média" },
    ],
  },

  treatments: {
    heading: {
      eyebrow: "Cardápio em destaque",
      title: "Os pratos que fazem a fama da casa",
      description: "Uma seleção do nosso cardápio — tudo feito na hora, com fogo de verdade e ingredientes da estação.",
    },
    items: [
      {
        icon: "beef",
        title: "Costela de fogo de chão",
        description: "12 horas na brasa, com farofa de manteiga de garrafa, mandioca crocante e vinagrete de ervas.",
        highlights: ["Serve 2 pessoas", "Assinatura da casa"],
        price: "R$ 129",
      },
      {
        icon: "pizza",
        title: "Pizza de fermentação natural",
        description: "Massa de 48 horas assada no forno a lenha, com tomate italiano, fior di latte e manjericão.",
        highlights: ["Forno a lenha", "Opção vegana"],
        price: "R$ 68",
      },
      {
        icon: "fish",
        title: "Peixe na folha de bananeira",
        description: "Peixe do dia assado na brasa, arroz de coco, banana-da-terra grelhada e molho de maracujá.",
        highlights: ["Sem glúten", "Peixe fresco"],
        price: "R$ 89",
      },
      {
        icon: "cookingPot",
        title: "Risoto de cogumelos e alecrim",
        description: "Arroz arbóreo, cogumelos frescos salteados, parmesão 12 meses e azeite de alecrim da horta.",
        highlights: ["Vegetariano", "Cogumelos da serra"],
        price: "R$ 74",
      },
      {
        icon: "salad",
        title: "Salada da horta na brasa",
        description: "Folhas, abóbora e cebola tostadas no fogo, queijo de cabra, castanhas e vinagrete de mel.",
        highlights: ["Vegetariano", "Da horta à mesa"],
        price: "R$ 46",
      },
      {
        icon: "cakeSlice",
        title: "Pudim de doce de leite queimado",
        description: "Pudim cremoso com calda de doce de leite caramelizado no maçarico e flor de sal.",
        highlights: ["Sobremesa da casa", "Para dividir"],
        price: "R$ 29",
      },
    ],
    cta: { label: "Reservar uma mesa", href: "#reservas" },
    cardCta: { label: "Reservar", href: "#reservas" },
  },

  differentials: {
    heading: {
      eyebrow: "A casa",
      title: "Mais que um jantar: uma noite para lembrar",
      description:
        "Fogo, tempo e bons ingredientes. O resto é o salão cheio, a música baixa e a conversa que vai longe.",
    },
    items: [
      {
        icon: "flame",
        title: "Cozinha de fogo de verdade",
        description:
          "Parrilla, forno a lenha e fogo de chão: nada de atalhos. Cada prato tem o tempo de brasa que merece.",
        size: "wide",
      },
      {
        icon: "sprout",
        title: "Da horta à mesa",
        description: "Vegetais e queijos de pequenos produtores a menos de 100 km.",
      },
      {
        icon: "wine",
        title: "Carta de vinhos",
        description: "Rótulos nacionais e importados, com harmonização sugerida pela sommelière.",
      },
      {
        icon: "pawPrint",
        title: "Pet friendly",
        description: "Varanda com água fresca e petisco para o seu melhor amigo.",
      },
      {
        icon: "partyPopper",
        title: "Eventos e aniversários",
        description: "Salão reservado para até 60 pessoas, com menu fechado e bolo da casa.",
      },
    ],
  },

  steps: {
    heading: {
      eyebrow: "Como reservar",
      title: "Sua mesa garantida em poucos minutos",
      description: "Sem aplicativo, sem cadastro: é tudo pelo WhatsApp.",
    },
    stepLabel: "Passo",
    items: [
      {
        icon: "messages",
        title: "Chame no WhatsApp",
        description: "Preencha o formulário ou mande uma mensagem com data, horário e número de pessoas.",
      },
      {
        icon: "calendarCheck",
        title: "Confirmamos a mesa",
        description: "Nossa equipe responde rapidamente com a confirmação e o melhor lugar do salão para você.",
      },
      {
        icon: "partyPopper",
        title: "Conte a ocasião",
        description: "Aniversário, pedido de casamento, cadeirinha para bebê? A gente prepara tudo.",
      },
      {
        icon: "utensils",
        title: "É só aproveitar",
        description: "Chegue, sente e deixe o resto com a brasa. Tolerância de 15 minutos para atrasos.",
      },
    ],
  },

  team: {
    heading: {
      eyebrow: "Equipe",
      title: "Quem acende a brasa todos os dias",
      description: "Uma equipe apaixonada por fogo, produto e por receber bem.",
    },
    items: [
      {
        name: "Lucas Ferraz",
        initials: "LF",
        role: "Chef executivo",
        registry: "20 anos de cozinha",
        bio: "Criado entre churrasqueiras do interior, estudou cozinha de fogo na Argentina e no Uruguai.",
      },
      {
        name: "Ana Ribeiro",
        initials: "AR",
        role: "Sommelière",
        registry: "Carta com 180 rótulos",
        bio: "Monta harmonizações para cada prato e adora apresentar vinhos de pequenas vinícolas.",
      },
      {
        name: "Júlia Tanaka",
        initials: "JT",
        role: "Confeiteira",
        registry: "Sobremesas autorais",
        bio: "Responsável pelas sobremesas e pelos pães de fermentação natural servidos na casa.",
      },
    ],
  },

  testimonials: {
    heading: {
      eyebrow: "Avaliações",
      title: "Quem prova, volta",
    },
    summary: "Nota média 4,8 com base em avaliações de clientes",
    items: [
      {
        name: "Mariana C.",
        detail: "Jantar de aniversário",
        quote:
          "A costela desmancha! Avisei que era aniversário e trouxeram o pudim com vela. Atendimento impecável do começo ao fim.",
        rating: 5,
      },
      {
        name: "Rafael T.",
        detail: "Almoço de domingo",
        quote:
          "Melhor pizza de Campinas, sem exagero. Massa leve, borda perfeita e a varanda é ótima para ir com o cachorro.",
        rating: 5,
      },
      {
        name: "Beatriz e Paulo",
        detail: "Noite a dois",
        quote:
          "A sommelière acertou em cheio na harmonização. Ambiente aconchegante, música baixa e comida de outro nível.",
        rating: 5,
      },
      {
        name: "Henrique S.",
        detail: "Evento da empresa",
        quote: "Fechamos o salão para 40 pessoas. Organização perfeita, menu fechado delicioso e preço justo.",
        rating: 5,
      },
      {
        name: "Carla M.",
        detail: "Vegetariana",
        quote:
          "Finalmente um restaurante de brasa com opções vegetarianas de verdade. O risoto e a salada na brasa são incríveis.",
        rating: 5,
      },
      {
        name: "Diego F.",
        detail: "Happy hour",
        quote: "Fila no sábado, mas a reserva pelo WhatsApp resolveu. Vale cada minuto — peça a costela e o pudim.",
        rating: 4,
      },
    ],
  },

  payment: {
    heading: {
      eyebrow: "Ambiente e pagamento",
      title: "Um lugar para todo mundo à mesa",
      description: "Pensamos em cada detalhe para que a sua visita seja tranquila — de crianças a pets.",
    },
    insurancesTitle: "Comodidades",
    insurancesIcon: "heartHandshake",
    insurances: [
      "Pet friendly",
      "Área kids",
      "Opções veganas",
      "Sem glúten sob pedido",
      "Acessível",
      "Wi-Fi",
      "Manobrista",
    ],
    methodsTitle: "Formas de pagamento",
    methods: [
      { icon: "qrCode", label: "Pix" },
      { icon: "creditCard", label: "Crédito e débito" },
      { icon: "banknote", label: "Vale-refeição" },
    ],
    installments: {
      title: "Eventos para até 60 pessoas",
      description: "com menu fechado, bolo da casa e salão reservado.",
      icon: "partyPopper",
    },
    note: "Informe alergias e restrições na reserva — adaptamos o preparo sempre que possível.",
  },

  faq: {
    heading: {
      eyebrow: "Dúvidas frequentes",
      title: "Antes de você chegar",
    },
    contactPrompt: "Ficou alguma dúvida?",
    contactCta: { label: "Fale com a gente no WhatsApp", href: "#reservas" },
    items: [
      {
        question: "Preciso de reserva?",
        answer:
          "Não é obrigatório, mas recomendamos para sextas, sábados e almoço de domingo. Pelo WhatsApp a confirmação é rápida.",
      },
      {
        question: "Vocês aceitam pets?",
        answer: "Sim! Pets são bem-vindos na varanda, com pote de água e petisco por conta da casa.",
      },
      {
        question: "Há opções vegetarianas, veganas e sem glúten?",
        answer:
          "Sim. Temos pratos vegetarianos fixos, pizza vegana e vários itens sem glúten. Avise sobre alergias na reserva.",
      },
      {
        question: "Posso comemorar aniversário?",
        answer:
          "Claro. Conte na reserva e preparamos uma surpresa. Para grupos acima de 15 pessoas, temos menu fechado.",
      },
      {
        question: "Tem estacionamento?",
        answer: "Temos manobrista a partir das 19h e estacionamento conveniado na mesma rua durante o almoço.",
      },
      {
        question: "Cobram taxa de rolha?",
        answer: "Sim, R$ 50 por garrafa, isenta na compra de um rótulo da nossa carta.",
      },
      {
        question: "Quais formas de pagamento são aceitas?",
        answer: "Pix, cartões de crédito e débito e as principais bandeiras de vale-refeição.",
      },
    ],
  },

  booking: {
    heading: {
      eyebrow: "Reservas",
      title: "Reserve sua mesa em menos de 1 minuto",
      description: "Preencha os dados e continue a conversa no WhatsApp — confirmamos a sua mesa por lá.",
    },
    benefits: [
      "Confirmação rápida pelo WhatsApp",
      "Mesas no salão, varanda ou balcão da parrilla",
      "Avise a ocasião e preparamos uma surpresa",
    ],
    form: {
      name: { label: "Nome completo", placeholder: "Em nome de quem fica a reserva?" },
      phone: { label: "WhatsApp", placeholder: "(19) 99999-9999" },
      treatment: {
        label: "Número de pessoas",
        placeholder: "Selecione",
        options: [
          { value: "1-2", label: "1 a 2 pessoas" },
          { value: "3-4", label: "3 a 4 pessoas" },
          { value: "5-6", label: "5 a 6 pessoas" },
          { value: "7-10", label: "7 a 10 pessoas" },
          { value: "evento", label: "Evento (mais de 10)" },
        ],
      },
      period: {
        label: "Refeição",
        options: [
          { value: "almoco", label: "Almoço" },
          { value: "jantar", label: "Jantar" },
          { value: "evento", label: "Evento" },
        ],
      },
      message: {
        label: "Data, horário e observações",
        placeholder: "Ex.: sábado, 20h — aniversário, cadeirinha para bebê…",
      },
      submit: "Reservar pelo WhatsApp",
      privacy: "Seus dados são usados apenas para confirmar a reserva.",
      errors: {
        nameMin: "Informe seu nome (mínimo de 3 letras).",
        nameMax: "Nome muito longo.",
        phone: "Informe um WhatsApp válido com DDD.",
        treatment: "Selecione o número de pessoas.",
        period: "Escolha almoço, jantar ou evento.",
        messageMax: "A mensagem pode ter no máximo 500 caracteres.",
      },
      buildMessage: ({ name, phone, treatment, period, message }) =>
        [
          "Olá, Alecrim & Brasa! Gostaria de reservar uma mesa.",
          "",
          `*Nome:* ${name}`,
          `*WhatsApp:* ${phone}`,
          `*Pessoas:* ${treatment}`,
          `*Refeição:* ${period}`,
          ...(message ? [`*Data e observações:* ${message}`] : []),
        ].join("\n"),
      toast: {
        title: "Tudo certo! Abrindo o WhatsApp…",
        description: "Sua reserva já está escrita. É só tocar em enviar.",
      },
    },
  },

  location: {
    heading: {
      eyebrow: "Localização",
      title: "Venha nos visitar",
      description: "Fácil de chegar, com manobrista à noite e varanda pet friendly.",
    },
    addressTitle: "Endereço",
    hoursTitle: "Horário de funcionamento",
    contactTitle: "Contato",
    directionsCta: "Como chegar",
    mapCaption: "Campinas – SP",
  },

  footer: {
    about:
      "Cozinha de fogo em Campinas: carnes na brasa, pizzas de fermentação natural e ingredientes de pequenos produtores.",
    linksTitle: "Navegação",
    contactTitle: "Contato",
    socialTitle: "Redes sociais",
    rights: "Todos os direitos reservados.",
    disclaimer: "Restaurante, equipe, preços, CNPJ e avaliações são fictícios.",
    portfolioPrefix: "Projeto fictício desenvolvido para portfólio por",
    backToTop: "Voltar ao topo",
  },
};
