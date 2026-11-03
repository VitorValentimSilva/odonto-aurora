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

const siteUrl = resolveSiteUrl("https://odonto-aurora.vercel.app");

/* ----------------------------------------------------------------------------
 * Português (idioma padrão, sem prefixo na URL)
 * ------------------------------------------------------------------------- */
const pt: SiteConfig = {
  url: siteUrl,
  code: "pt",
  pathPrefix: "",
  languageName: "Português",
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
    backgroundDark: "#1d1511",
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
    starsLabel: "Avaliação: {rating} de 5 estrelas",
    externalLinkHint: "(abre em nova aba)",
    pauseAnimation: "Pausar avaliações",
    notifications: "Notificações",
    closeNotification: "Fechar notificação",
    playAnimation: "Retomar avaliações",
    theme: {
      toggle: "Tema: {mode}. Clique para trocar.",
      light: "claro",
      dark: "escuro",
      system: "do sistema",
    },
    language: { label: "Idioma" },
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
        slug: "costela-fogo-de-chao",
        details: {
          metaDescription:
            "Costela assada 12 horas no fogo de chão, com farofa de manteiga de garrafa e mandioca crocante. Prato para 2 no Alecrim & Brasa, em Campinas.",
          intro:
            "O prato que deu fama à casa: costela bovina temperada só com sal grosso e assada lentamente, por 12 horas, ao lado do fogo de chão.",
          body: [
            "Começamos a acender a brasa às seis da manhã. A costela fica de pé, presa em espetos de ferro, recebendo o calor de lado — nunca a chama direta. O resultado é uma carne que desmancha no garfo, com a gordura derretida e a casca levemente defumada.",
            "Servimos fatiada na mesa, com farofa de manteiga de garrafa, mandioca cozida e depois tostada na chapa e um vinagrete de ervas da nossa horta. A porção serve bem duas pessoas — ou três, se houver entrada e sobremesa.",
          ],
          benefits: [
            "12 horas de cocção lenta no fogo de chão",
            "Corte selecionado de pequenos produtores do interior paulista",
            "Acompanhamentos inclusos: farofa, mandioca e vinagrete",
            "Sem glúten (avise sobre alergias na reserva)",
          ],
          faq: [
            {
              question: "A costela fica disponível todos os dias?",
              answer:
                "Sim, de terça a domingo, enquanto durar a fornada do dia. Nos fins de semana recomendamos reservar e avisar que deseja a costela.",
            },
            {
              question: "Serve quantas pessoas?",
              answer:
                "Duas pessoas com folga. Para grupos maiores, a cozinha prepara porções extras sob pedido na reserva.",
            },
            {
              question: "Qual vinho combina?",
              answer:
                "Um tinto encorpado, como Malbec ou Tannat. A sommelière sugere opções por taça para quem prefere variar.",
            },
          ],
        },
      },
      {
        icon: "pizza",
        title: "Pizza de fermentação natural",
        description: "Massa de 48 horas assada no forno a lenha, com tomate italiano, fior di latte e manjericão.",
        highlights: ["Forno a lenha", "Opção vegana"],
        price: "R$ 68",
        slug: "pizza-fermentacao-natural",
        details: {
          metaDescription:
            "Pizza napolitana com massa de fermentação natural de 48 horas, assada no forno a lenha. Opção vegana disponível no Alecrim & Brasa.",
          intro:
            "Massa leve, de borda alta e salpicada, feita com fermento natural e descanso de 48 horas antes de ir ao forno a lenha.",
          body: [
            "A fermentação longa deixa a massa mais digestiva e cheia de sabor. Ela assa em cerca de 90 segundos a 450 °C, o que cria a borda aerada com pintinhas tostadas típica da pizza napolitana.",
            "A clássica leva molho de tomate italiano, fior di latte, manjericão fresco e azeite. Também temos a versão vegana, com queijo de castanha e legumes assados na brasa.",
          ],
          benefits: [
            "Massa com 48 horas de fermentação natural",
            "Forno a lenha a 450 °C",
            "Versão vegana com queijo de castanha",
            "Tamanho individual, ideal para dividir como entrada",
          ],
          faq: [
            {
              question: "Tem opção sem glúten?",
              answer:
                "Ainda não: a massa é feita com farinha de trigo e preparada no mesmo forno. Para quem não consome glúten, indicamos a costela ou o peixe.",
            },
            {
              question: "Posso pedir meio a meio?",
              answer:
                "Como a pizza é individual, preferimos não dividir sabores, mas você pode pedir duas para compartilhar na mesa.",
            },
            {
              question: "Vocês fazem para viagem?",
              answer:
                "Sim, pelo WhatsApp, para retirada no balcão. A massa é melhor consumida até 15 minutos depois de sair do forno.",
            },
          ],
        },
      },
      {
        icon: "fish",
        title: "Peixe na folha de bananeira",
        description: "Peixe do dia assado na brasa, arroz de coco, banana-da-terra grelhada e molho de maracujá.",
        highlights: ["Sem glúten", "Peixe fresco"],
        price: "R$ 89",
        slug: "peixe-folha-de-bananeira",
        details: {
          metaDescription:
            "Peixe do dia assado na brasa dentro da folha de bananeira, com arroz de coco e banana-da-terra. Prato sem glúten no Alecrim & Brasa.",
          intro:
            "O peixe fresco do dia, temperado com ervas e limão, embrulhado na folha de bananeira e assado sobre a brasa.",
          body: [
            "A folha protege o peixe do fogo direto e cria um vapor perfumado lá dentro: a carne fica suculenta e ganha um leve aroma defumado. Abrimos a folha na mesa para você sentir o perfume.",
            "Acompanham arroz de coco, banana-da-terra grelhada e um molho de maracujá com pimenta-de-cheiro, que dá acidez sem esconder o sabor do peixe.",
          ],
          benefits: [
            "Peixe fresco, comprado no dia",
            "Preparo na brasa, sem fritura",
            "Sem glúten",
            "Molho de maracujá servido à parte",
          ],
          faq: [
            {
              question: "Qual é o peixe?",
              answer:
                "Depende da pesca do dia — geralmente pescada, robalo ou tilápia de criação responsável. A equipe informa na hora do pedido.",
            },
            {
              question: "O prato é picante?",
              answer: "Não. A pimenta-de-cheiro é aromática e não arde; o molho vem à parte.",
            },
            {
              question: "Tem espinhas?",
              answer:
                "Servimos em filé, mas pequenas espinhas podem aparecer. Avise se for servir para crianças que limpamos com mais cuidado.",
            },
          ],
        },
      },
      {
        icon: "cookingPot",
        title: "Risoto de cogumelos e alecrim",
        description: "Arroz arbóreo, cogumelos frescos salteados, parmesão 12 meses e azeite de alecrim da horta.",
        highlights: ["Vegetariano", "Cogumelos da serra"],
        price: "R$ 74",
        slug: "risoto-cogumelos-alecrim",
        details: {
          metaDescription:
            "Risoto cremoso de cogumelos frescos com parmesão 12 meses e azeite de alecrim da horta. Opção vegetariana do Alecrim & Brasa.",
          intro:
            "Nosso prato vegetariano mais pedido: arroz arbóreo cozido no caldo de legumes, com cogumelos da serra salteados na manteiga.",
          body: [
            "O risoto é feito na hora, mexido até ficar cremoso sem precisar de creme de leite. Finalizamos com parmesão curado por 12 meses e um fio de azeite infusionado com alecrim colhido na nossa horta.",
            "Os cogumelos (paris, shimeji e shiitake) vêm de um pequeno produtor da Serra da Mantiqueira e são selados na chapa quente para ganhar cor e sabor.",
          ],
          benefits: [
            "Vegetariano",
            "Cogumelos frescos de pequeno produtor",
            "Feito na hora, cremoso sem creme de leite",
            "Versão vegana sob pedido (sem queijo e manteiga)",
          ],
          faq: [
            {
              question: "Quanto tempo demora?",
              answer:
                "Cerca de 20 minutos, porque é preparado na hora. Se estiver com pressa, avise o garçom ao pedir.",
            },
            {
              question: "Pode ser vegano?",
              answer: "Sim: trocamos manteiga por azeite e o parmesão por farofa de castanhas tostadas.",
            },
            {
              question: "Serve como prato principal?",
              answer: "Sim, a porção é de prato principal. Para dividir como entrada, pedimos meia porção.",
            },
          ],
        },
      },
      {
        icon: "salad",
        title: "Salada da horta na brasa",
        description: "Folhas, abóbora e cebola tostadas no fogo, queijo de cabra, castanhas e vinagrete de mel.",
        highlights: ["Vegetariano", "Da horta à mesa"],
        price: "R$ 46",
        slug: "salada-da-horta-na-brasa",
        details: {
          metaDescription:
            "Salada de folhas com abóbora e cebola tostadas na brasa, queijo de cabra, castanhas e vinagrete de mel. Entrada vegetariana do Alecrim & Brasa.",
          intro:
            "Uma salada que também passa pelo fogo: legumes da estação tostados na brasa sobre folhas frescas da nossa horta.",
          body: [
            "A abóbora cabotiá e a cebola roxa ganham marcas da grelha e ficam adocicadas. Montamos sobre folhas colhidas no dia, com queijo de cabra cremoso, castanhas-do-pará tostadas e vinagrete de mel com mostarda.",
            "Funciona como entrada para dividir ou como prato leve para o almoço. Os legumes mudam conforme a estação, mas a ideia é sempre a mesma: o sabor do fogo em ingredientes simples.",
          ],
          benefits: [
            "Vegetariana",
            "Folhas da horta própria, colhidas no dia",
            "Legumes da estação tostados na brasa",
            "Versão vegana sem queijo",
          ],
          faq: [
            {
              question: "Os ingredientes mudam?",
              answer: "Os legumes acompanham a estação. A base de folhas, queijo de cabra e castanhas é fixa.",
            },
            {
              question: "Posso acrescentar proteína?",
              answer: "Sim: frango na brasa ou fatias de costela, cobrados à parte.",
            },
            {
              question: "Tem castanhas?",
              answer:
                "Sim, castanhas-do-pará. Avise sobre alergia que servimos sem e preparamos em utensílios separados.",
            },
          ],
        },
      },
      {
        icon: "cakeSlice",
        title: "Pudim de doce de leite queimado",
        description: "Pudim cremoso com calda de doce de leite caramelizado no maçarico e flor de sal.",
        highlights: ["Sobremesa da casa", "Para dividir"],
        price: "R$ 29",
        slug: "pudim-doce-de-leite",
        details: {
          metaDescription:
            "Pudim cremoso de doce de leite com calda caramelizada no maçarico e flor de sal. Sobremesa da casa no Alecrim & Brasa.",
          intro:
            "A sobremesa que fecha a noite: pudim de doce de leite, liso e cremoso, com calda queimada na hora no maçarico.",
          body: [
            "O doce de leite é feito na casa, em panela de cobre, e vira a base de um pudim assado em banho-maria por quase duas horas. A textura é firme por fora e cremosa no centro.",
            "Na mesa, queimamos uma camada de açúcar no maçarico — como num crème brûlée — e finalizamos com flor de sal, que equilibra o doce. Em aniversários, vai com vela por nossa conta.",
          ],
          benefits: [
            "Doce de leite artesanal feito na casa",
            "Calda caramelizada na hora",
            "Porção generosa para dividir",
            "Vela de aniversário por conta da casa",
          ],
          faq: [
            {
              question: "Leva glúten?",
              answer: "Não. O pudim é feito com leite, ovos e açúcar. Contém lactose e ovos.",
            },
            {
              question: "Posso encomendar inteiro?",
              answer: "Sim, com 48 horas de antecedência pelo WhatsApp. O pudim inteiro serve de 10 a 12 pessoas.",
            },
            {
              question: "Tem opção sem lactose?",
              answer: "Temos sorbet de frutas da estação, sem lactose e vegano.",
            },
          ],
        },
      },
    ],
    cta: { label: "Reservar uma mesa", href: "#reservas" },
    cardLinkLabel: "Ver detalhes",
    basePath: "cardapio",
    page: {
      breadcrumbHome: "Início",
      breadcrumbLabel: "Cardápio",
      benefitsTitle: "Por que pedir",
      faqTitle: "Perguntas sobre o prato",
      relatedTitle: "Outros pratos da casa",
      cta: {
        title: "Bateu a fome?",
        description: "Reserve sua mesa pelo WhatsApp e avise qual prato não pode faltar.",
        button: {
          label: "Reservar mesa",
          href: "#reservas",
        },
      },
    },
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
      privacy: "Seus dados são usados apenas para confirmar a reserva. Saiba mais na",
      errors: {
        nameMin: "Informe seu nome (mínimo de 3 letras).",
        nameMax: "Nome muito longo.",
        phone: "Informe um WhatsApp válido com DDD.",
        treatment: "Selecione o número de pessoas.",
        period: "Escolha almoço, jantar ou evento.",
        messageMax: "A mensagem pode ter no máximo 500 caracteres.",
      },
      whatsappMessage: {
        intro: "Olá, Alecrim & Brasa! Gostaria de reservar uma mesa.",
        fields: {
          name: "Nome",
          phone: "WhatsApp",
          treatment: "Pessoas",
          period: "Refeição",
          message: "Data e observações",
        },
      },
      toast: {
        title: "Tudo certo! Abrindo o WhatsApp…",
        description: "Sua reserva já está escrita. É só tocar em enviar.",
      },
    },
  },

  privacy: {
    path: "privacidade",
    title: "Política de privacidade",
    description:
      "Como o site do Alecrim & Brasa trata seus dados pessoais, em linguagem simples e de acordo com a LGPD.",
    updatedLabel: "Última atualização",
    updatedAt: "3 de novembro de 2026",
    intro:
      "Esta política explica, de forma direta, quais dados este site usa, para quê e quais são os seus direitos segundo a Lei Geral de Proteção de Dados (Lei nº 13.709/2018). Resumo: o site não tem banco de dados, não usa cookies e não rastreia você.",
    sections: [
      {
        heading: "Quem é o responsável",
        paragraphs: [
          "O controlador dos dados é Alecrim & Brasa Gastronomia Ltda. (CNPJ 00.000.000/0001-00), Rua do Alecrim, 315, Jardim Aurora, Campinas – SP. Empresa e dados fictícios, criados para portfólio.",
        ],
      },
      {
        heading: "Quais dados coletamos",
        paragraphs: [
          "Somente o que você digita no formulário de reserva: nome, WhatsApp, número de pessoas, refeição e, se quiser, uma mensagem com data e observações.",
          "Esses dados não são enviados a nenhum servidor nosso: o próprio navegador monta uma mensagem e abre o WhatsApp. Só recebemos a reserva se você tocar em enviar dentro do aplicativo.",
        ],
      },
      {
        heading: "Para que usamos",
        paragraphs: [
          "Para responder e confirmar a sua reserva (base legal: procedimentos preliminares a pedido do titular, art. 7º, V, da LGPD). Não usamos seus dados para publicidade e não os vendemos ou compartilhamos com terceiros.",
        ],
      },
      {
        heading: "WhatsApp",
        paragraphs: [
          "A conversa acontece no WhatsApp, serviço da Meta, que tem política de privacidade própria. Guardamos o histórico da conversa apenas pelo tempo necessário para atender você e cumprir obrigações legais.",
        ],
      },
      {
        heading: "Cookies e armazenamento no navegador",
        paragraphs: [
          "Este site não usa cookies, ferramentas de análise ou pixels de rastreamento. Por isso não exibimos aviso de cookies.",
          "A única informação guardada no seu navegador é a preferência de tema (claro ou escuro), no armazenamento local do próprio aparelho. Ela não é enviada para nós e pode ser apagada limpando os dados do site.",
        ],
      },
      {
        heading: "Seus direitos",
        paragraphs: [
          "Você pode pedir confirmação de tratamento, acesso, correção, anonimização ou eliminação dos seus dados, além de informações sobre compartilhamento e revogação de consentimento (art. 18 da LGPD).",
          "Para isso, fale com a gente pelo e-mail reservas@alecrimebrasa.com.br ou pelo WhatsApp (19) 98888-7777. Você também pode reclamar à Autoridade Nacional de Proteção de Dados (ANPD).",
        ],
      },
      {
        heading: "Segurança",
        paragraphs: [
          "O site é servido somente por HTTPS, com cabeçalhos de segurança e sem conteúdo de terceiros. Como não armazenamos os dados do formulário, não há base de dados que possa vazar.",
        ],
      },
      {
        heading: "Alterações",
        paragraphs: ["Se esta política mudar, a data de atualização no topo da página será alterada."],
      },
    ],
    linkLabel: "Política de privacidade",
    backLabel: "Voltar ao início",
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

/* ----------------------------------------------------------------------------
 * English (/en)
 * ------------------------------------------------------------------------- */
const en: SiteConfig = {
  // o que não é texto vem do português
  ...pt,
  code: "en",
  pathPrefix: "/en",
  languageName: "English",
  locale: "en_US",
  lang: "en",

  brand: {
    ...pt.brand,
    slogan: "Wood-fire cooking, honest ingredients",
    description:
      "Wood-fire restaurant in Campinas, Brazil: flame-grilled meats, naturally leavened pizzas, produce from small local farms and a wine list designed for every dish.",
    servesCuisine: ["Brazilian", "Wood-fire cooking", "Pizza"],
  },

  seo: {
    title: "Alecrim & Brasa — Wood-fire restaurant in Campinas, Brazil",
    description:
      "Flame-grilled meats, sourdough pizzas and local ingredients in Campinas, Brazil. Book your table on WhatsApp.",
    keywords: [
      "restaurant in Campinas",
      "wood-fire cooking",
      "sourdough pizza",
      "fire-pit beef ribs",
      "pet friendly restaurant Campinas",
      "romantic dinner Campinas",
    ],
    ogImageAlt: "Alecrim & Brasa — Wood-fire cooking, honest ingredients",
    serviceSchemaType: "MenuItem",
  },

  contact: {
    ...pt.contact,
    defaultWhatsAppMessage: "Hi, Alecrim & Brasa! I found you on the website and would like to book a table.",
  },

  address: { ...pt.address, country: "BR", reference: "Valet parking available from 7 pm" },

  openingHours: [
    { ...pt.openingHours[0], label: "Tuesday to Friday", hours: "11:30am–3pm · 7pm–11pm" },
    { ...pt.openingHours[1], label: "Saturday", hours: "12pm–11:30pm" },
    { ...pt.openingHours[2], label: "Sunday", hours: "12pm–5pm" },
    { ...pt.openingHours[3], label: "Monday", hours: "Closed" },
  ],

  responsible: { ...pt.responsible, role: "Company" },

  sections: {
    home: "home",
    treatments: "menu",
    differentials: "the-house",
    steps: "how-to-book",
    team: "team",
    testimonials: "reviews",
    payment: "amenities",
    faq: "faq",
    booking: "reservations",
    location: "location",
  },

  nav: [
    { label: "Menu", href: "#menu" },
    { label: "The house", href: "#the-house" },
    { label: "Team", href: "#team" },
    { label: "Reviews", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#location" },
  ],

  ui: {
    skipToContent: "Skip to content",
    headerCta: { label: "Book a table", href: "#reservations" },
    openMenu: "Open menu",
    closeMenu: "Close menu",
    menuTitle: "Menu",
    homeLabel: "Alecrim & Brasa — home",
    mainNavLabel: "Main navigation",
    whatsappFab: "Book on WhatsApp",
    starsLabel: "Rating: {rating} out of 5 stars",
    externalLinkHint: "(opens in a new tab)",
    pauseAnimation: "Pause reviews",
    notifications: "Notifications",
    closeNotification: "Close notification",
    playAnimation: "Resume reviews",
    theme: {
      toggle: "Theme: {mode}. Click to change.",
      light: "light",
      dark: "dark",
      system: "system",
    },
    language: { label: "Language" },
    notFound: {
      title: "Page not found",
      description: "This page is off the menu. How about going back home and booking your table?",
      cta: { label: "Back to home", href: "/" },
    },
  },

  hero: {
    ...pt.hero,
    badge: "Now taking bookings for this weekend",
    title: "Wood-fire cooking,",
    highlight: "honest ingredients",
    subtitle:
      "Flame-grilled meats, slow-fermented pizzas and vegetables from small local farms — served unhurried, in a dining room made for good company.",
    primaryCta: { label: "Book on WhatsApp", href: "#reservations" },
    secondaryCta: { label: "See the menu", href: "#menu" },
    trustBadges: [
      { icon: "flame", label: "Wood oven and grill" },
      { icon: "star", label: "4.8 rating on Google" },
      { icon: "sprout", label: "Local ingredients" },
    ],
    visual: {
      illustration: "dish",
      cardTitle: "Dish of the week",
      cardSubtitle: "Fire-pit beef ribs",
      chips: ["12h over embers", "Serves 2", "Gluten-free"],
      ratingLabel: "Average rating",
      ratingValue: "4.8",
      nextSlotLabel: "Table available",
      nextSlotValue: "Today, 8:30pm",
    },
  },

  stats: {
    heading: { eyebrow: "By the numbers", title: "A fire that hasn't gone out since 2017" },
    items: [
      { value: 9, suffix: "years", label: "of full tables" },
      { value: 85000, prefix: "+", label: "dishes served" },
      { value: 120, label: "seats" },
      { value: 4.8, decimals: 1, suffix: "/5", label: "average rating" },
    ],
  },

  treatments: {
    heading: {
      eyebrow: "Menu highlights",
      title: "The dishes that made our name",
      description: "A selection from our menu — everything cooked to order, over real fire, with seasonal ingredients.",
    },
    items: [
      {
        icon: "beef",
        title: "Fire-pit beef ribs",
        description: "12 hours over the embers, with clarified-butter farofa, crispy cassava and herb vinaigrette.",
        highlights: ["Serves 2", "House signature"],
        price: "R$ 129",
        slug: "fire-pit-beef-ribs",
        details: {
          metaDescription:
            "Beef ribs slow-roasted for 12 hours by the fire pit, with butter farofa and crispy cassava. A dish for two at Alecrim & Brasa, Campinas.",
          intro:
            "The dish that made us famous: beef ribs seasoned only with coarse salt and slow-roasted for 12 hours beside the fire pit.",
          body: [
            "We light the fire at six in the morning. The ribs stand on iron skewers, taking the heat from the side — never the direct flame. The result is meat that falls off the bone, with rendered fat and a lightly smoky crust.",
            "It is carved at the table and served with clarified-butter farofa, cassava boiled and then crisped on the griddle, and a vinaigrette made with herbs from our garden. One portion comfortably serves two — or three, with a starter and dessert.",
          ],
          benefits: [
            "12 hours of slow cooking by the fire pit",
            "Selected cut from small farms in São Paulo state",
            "Sides included: farofa, cassava and vinaigrette",
            "Gluten-free (let us know about allergies when booking)",
          ],
          faq: [
            {
              question: "Are the ribs available every day?",
              answer:
                "Yes, Tuesday to Sunday, while the day's batch lasts. On weekends we recommend booking and mentioning that you want the ribs.",
            },
            {
              question: "How many people does it serve?",
              answer:
                "Two people with room to spare. For larger groups the kitchen prepares extra portions if you ask when booking.",
            },
            {
              question: "Which wine goes with it?",
              answer:
                "A full-bodied red, such as Malbec or Tannat. Our sommelier suggests options by the glass if you'd like to mix it up.",
            },
          ],
        },
      },
      {
        icon: "pizza",
        title: "Sourdough pizza",
        description: "48-hour dough baked in the wood oven, with Italian tomatoes, fior di latte and basil.",
        highlights: ["Wood oven", "Vegan option"],
        price: "R$ 68",
        slug: "sourdough-pizza",
        details: {
          metaDescription:
            "Neapolitan-style pizza with 48-hour naturally leavened dough, baked in a wood oven. Vegan option available at Alecrim & Brasa.",
          intro:
            "Light dough with a tall, blistered crust, made with natural leaven and rested for 48 hours before it meets the wood oven.",
          body: [
            "The long fermentation makes the dough easier to digest and full of flavour. It bakes in about 90 seconds at 450 °C, creating the airy, leopard-spotted crust of a true Neapolitan pizza.",
            "The classic has Italian tomato sauce, fior di latte, fresh basil and olive oil. There is also a vegan version with cashew cheese and fire-roasted vegetables.",
          ],
          benefits: [
            "Dough with 48 hours of natural fermentation",
            "Wood oven at 450 °C",
            "Vegan version with cashew cheese",
            "Individual size, great to share as a starter",
          ],
          faq: [
            {
              question: "Is there a gluten-free option?",
              answer:
                "Not yet: the dough uses wheat flour and is baked in the same oven. If you avoid gluten, we recommend the ribs or the fish.",
            },
            {
              question: "Can I order half and half?",
              answer:
                "Since the pizza is individual we prefer not to split flavours, but you can order two to share at the table.",
            },
            {
              question: "Do you do takeaway?",
              answer:
                "Yes, through WhatsApp, for pickup at the counter. The dough is best eaten within 15 minutes of leaving the oven.",
            },
          ],
        },
      },
      {
        icon: "fish",
        title: "Fish in banana leaf",
        description: "Catch of the day grilled over embers, coconut rice, grilled plantain and passion fruit sauce.",
        highlights: ["Gluten-free", "Fresh fish"],
        price: "R$ 89",
        slug: "fish-in-banana-leaf",
        details: {
          metaDescription:
            "Catch of the day grilled over embers inside a banana leaf, with coconut rice and plantain. A gluten-free dish at Alecrim & Brasa.",
          intro:
            "Fresh catch of the day, seasoned with herbs and lime, wrapped in banana leaf and roasted over the embers.",
          body: [
            "The leaf shields the fish from direct fire and creates fragrant steam inside: the flesh stays juicy and picks up a gentle smoky aroma. We open the leaf at the table so you get the full scent.",
            "It comes with coconut rice, grilled plantain and a passion fruit sauce with Brazilian 'pimenta-de-cheiro' pepper, adding acidity without hiding the fish.",
          ],
          benefits: [
            "Fresh fish, bought daily",
            "Cooked over embers, never fried",
            "Gluten-free",
            "Passion fruit sauce served on the side",
          ],
          faq: [
            {
              question: "Which fish is it?",
              answer:
                "It depends on the day's catch — usually hake, snook or responsibly farmed tilapia. The team will tell you when you order.",
            },
            {
              question: "Is it spicy?",
              answer: "No. The pepper is aromatic and not hot; the sauce comes on the side.",
            },
            {
              question: "Does it have bones?",
              answer:
                "We serve it filleted, but small bones may appear. Let us know if it's for children and we'll clean it more carefully.",
            },
          ],
        },
      },
      {
        icon: "cookingPot",
        title: "Mushroom and rosemary risotto",
        description: "Arborio rice, fresh sautéed mushrooms, 12-month parmesan and rosemary oil from our garden.",
        highlights: ["Vegetarian", "Mountain-grown mushrooms"],
        price: "R$ 74",
        slug: "mushroom-rosemary-risotto",
        details: {
          metaDescription:
            "Creamy risotto with fresh mushrooms, 12-month parmesan and rosemary oil from the garden. Vegetarian option at Alecrim & Brasa.",
          intro:
            "Our most-ordered vegetarian dish: arborio rice cooked in vegetable stock, with mountain mushrooms sautéed in butter.",
          body: [
            "The risotto is made to order and stirred until creamy — no cream needed. We finish it with parmesan aged for 12 months and a drizzle of olive oil infused with rosemary picked in our garden.",
            "The mushrooms (button, shimeji and shiitake) come from a small grower in the Mantiqueira mountains and are seared on a hot griddle for colour and flavour.",
          ],
          benefits: [
            "Vegetarian",
            "Fresh mushrooms from a small grower",
            "Made to order, creamy without cream",
            "Vegan version on request (no cheese or butter)",
          ],
          faq: [
            {
              question: "How long does it take?",
              answer:
                "About 20 minutes, since it's made to order. If you're in a hurry, let your server know when ordering.",
            },
            {
              question: "Can it be vegan?",
              answer: "Yes: we swap the butter for olive oil and the parmesan for toasted nut crumbs.",
            },
            {
              question: "Is it a main course?",
              answer: "Yes, it's a main-course portion. To share as a starter, ask for a half portion.",
            },
          ],
        },
      },
      {
        icon: "salad",
        title: "Fire-grilled garden salad",
        description: "Greens, fire-charred squash and onion, goat cheese, nuts and honey vinaigrette.",
        highlights: ["Vegetarian", "Garden to table"],
        price: "R$ 46",
        slug: "fire-grilled-garden-salad",
        details: {
          metaDescription:
            "Salad of greens with fire-charred squash and onion, goat cheese, nuts and honey vinaigrette. Vegetarian starter at Alecrim & Brasa.",
          intro:
            "A salad that also meets the fire: seasonal vegetables charred over embers on fresh greens from our garden.",
          body: [
            "Kabocha squash and red onion get grill marks and turn sweet. We build it on greens picked that day, with creamy goat cheese, toasted Brazil nuts and a honey-mustard vinaigrette.",
            "It works as a starter to share or as a light lunch. The vegetables change with the seasons, but the idea stays the same: the taste of fire on simple ingredients.",
          ],
          benefits: [
            "Vegetarian",
            "Greens from our own garden, picked daily",
            "Seasonal vegetables charred over embers",
            "Vegan version without cheese",
          ],
          faq: [
            {
              question: "Do the ingredients change?",
              answer: "The vegetables follow the season. The base of greens, goat cheese and nuts stays the same.",
            },
            {
              question: "Can I add protein?",
              answer: "Yes: grilled chicken or slices of beef rib, charged separately.",
            },
            {
              question: "Does it contain nuts?",
              answer:
                "Yes, Brazil nuts. Tell us about allergies and we'll serve it without them, prepared with separate utensils.",
            },
          ],
        },
      },
      {
        icon: "cakeSlice",
        title: "Burnt dulce de leche flan",
        description: "Creamy flan with a dulce de leche topping caramelised with a torch and finished with sea salt.",
        highlights: ["House dessert", "Great to share"],
        price: "R$ 29",
        slug: "burnt-dulce-de-leche-flan",
        details: {
          metaDescription:
            "Creamy dulce de leche flan with a torch-caramelised top and sea salt. The house dessert at Alecrim & Brasa.",
          intro:
            "The dessert that ends the night: smooth, creamy dulce de leche flan with a topping burnt to order with a torch.",
          body: [
            "Our dulce de leche is made in-house in a copper pan and becomes the base of a flan baked in a water bath for almost two hours. It is firm on the outside and creamy in the middle.",
            "At the table we torch a layer of sugar — like a crème brûlée — and finish with sea salt to balance the sweetness. On birthdays, it comes with a candle on the house.",
          ],
          benefits: [
            "House-made dulce de leche",
            "Topping caramelised to order",
            "Generous portion to share",
            "Birthday candle on the house",
          ],
          faq: [
            {
              question: "Does it contain gluten?",
              answer: "No. The flan is made with milk, eggs and sugar. It contains lactose and eggs.",
            },
            {
              question: "Can I order a whole one?",
              answer: "Yes, with 48 hours' notice on WhatsApp. A whole flan serves 10 to 12 people.",
            },
            {
              question: "Is there a lactose-free option?",
              answer: "We have a seasonal fruit sorbet, lactose-free and vegan.",
            },
          ],
        },
      },
    ],
    cta: { label: "Book a table", href: "#reservations" },
    cardLinkLabel: "See details",
    basePath: "menu",
    page: {
      breadcrumbHome: "Home",
      breadcrumbLabel: "Menu",
      benefitsTitle: "Why order it",
      faqTitle: "Questions about this dish",
      relatedTitle: "More from our kitchen",
      cta: {
        title: "Feeling hungry?",
        description: "Book your table on WhatsApp and tell us which dish you can't miss.",
        button: { label: "Book a table", href: "#reservations" },
      },
    },
  },

  differentials: {
    heading: {
      eyebrow: "The house",
      title: "More than dinner: a night to remember",
      description:
        "Fire, time and good ingredients. The rest is a full room, soft music and conversation that goes on and on.",
    },
    items: [
      {
        icon: "flame",
        title: "Real wood-fire cooking",
        description:
          "Grill, wood oven and fire pit: no shortcuts. Every dish gets the time over the embers it deserves.",
        size: "wide",
      },
      {
        icon: "sprout",
        title: "Garden to table",
        description: "Vegetables and cheeses from small producers less than 100 km away.",
      },
      {
        icon: "wine",
        title: "Wine list",
        description: "Brazilian and imported labels, with pairings suggested by our sommelier.",
      },
      {
        icon: "pawPrint",
        title: "Pet friendly",
        description: "A veranda with fresh water and a treat for your best friend.",
      },
      {
        icon: "partyPopper",
        title: "Events and birthdays",
        description: "Private room for up to 60 guests, with a set menu and house cake.",
      },
    ],
  },

  steps: {
    heading: {
      eyebrow: "How to book",
      title: "Your table confirmed in minutes",
      description: "No app, no sign-up: it all happens on WhatsApp.",
    },
    stepLabel: "Step",
    items: [
      {
        icon: "messages",
        title: "Message us on WhatsApp",
        description: "Fill in the form or send a message with the date, time and number of guests.",
      },
      {
        icon: "calendarCheck",
        title: "We confirm your table",
        description: "Our team replies quickly with your confirmation and the best spot in the room.",
      },
      {
        icon: "partyPopper",
        title: "Tell us the occasion",
        description: "Birthday, proposal, high chair for a baby? We'll get everything ready.",
      },
      {
        icon: "utensils",
        title: "Just enjoy",
        description: "Arrive, sit down and leave the rest to the fire. We hold tables for 15 minutes.",
      },
    ],
  },

  team: {
    heading: {
      eyebrow: "Team",
      title: "The people who light the fire every day",
      description: "A team passionate about fire, great produce and hospitality.",
    },
    items: [
      {
        ...pt.team.items[0],
        role: "Executive chef",
        registry: "20 years in the kitchen",
        bio: "Raised around countryside barbecues, he studied fire cooking in Argentina and Uruguay.",
      },
      {
        ...pt.team.items[1],
        role: "Sommelier",
        registry: "180-label wine list",
        bio: "Builds pairings for every dish and loves introducing wines from small wineries.",
      },
      {
        ...pt.team.items[2],
        role: "Pastry chef",
        registry: "Signature desserts",
        bio: "In charge of desserts and the naturally leavened breads served at the house.",
      },
    ],
  },

  testimonials: {
    heading: { eyebrow: "Reviews", title: "Once you try it, you come back" },
    summary: "4.8 average rating from guest reviews",
    items: [
      {
        name: "Mariana C.",
        detail: "Birthday dinner",
        quote:
          "The ribs melt in your mouth! I mentioned it was my birthday and they brought the flan with a candle. Flawless service from start to finish.",
        rating: 5,
      },
      {
        name: "Rafael T.",
        detail: "Sunday lunch",
        quote:
          "Best pizza in Campinas, no exaggeration. Light dough, perfect crust, and the veranda is great for bringing the dog.",
        rating: 5,
      },
      {
        name: "Beatriz & Paulo",
        detail: "Date night",
        quote: "The sommelier nailed the pairing. Cosy atmosphere, soft music and food on another level.",
        rating: 5,
      },
      {
        name: "Henrique S.",
        detail: "Company event",
        quote: "We booked the room for 40 people. Perfect organisation, delicious set menu and a fair price.",
        rating: 5,
      },
      {
        name: "Carla M.",
        detail: "Vegetarian",
        quote:
          "Finally a grill restaurant with real vegetarian options. The risotto and the fire-grilled salad are amazing.",
        rating: 5,
      },
      {
        name: "Diego F.",
        detail: "Happy hour",
        quote:
          "There was a queue on Saturday, but booking on WhatsApp sorted it out. Worth every minute — order the ribs and the flan.",
        rating: 4,
      },
    ],
  },

  payment: {
    ...pt.payment,
    heading: {
      eyebrow: "Amenities and payment",
      title: "A place for everyone at the table",
      description: "We thought of every detail so your visit is easy — from kids to pets.",
    },
    insurancesTitle: "Amenities",
    insurances: [
      "Pet friendly",
      "Kids' area",
      "Vegan options",
      "Gluten-free on request",
      "Accessible",
      "Wi-Fi",
      "Valet parking",
    ],
    methodsTitle: "Payment methods",
    methods: [
      { icon: "qrCode", label: "Pix" },
      { icon: "creditCard", label: "Credit and debit" },
      { icon: "banknote", label: "Meal vouchers" },
    ],
    installments: {
      title: "Events for up to 60 guests",
      description: "with a set menu, house cake and a private room.",
      icon: "partyPopper",
    },
    note: "Tell us about allergies and dietary needs when booking — we adapt dishes whenever possible.",
  },

  faq: {
    heading: { eyebrow: "FAQ", title: "Before you arrive" },
    contactPrompt: "Still have questions?",
    contactCta: { label: "Talk to us on WhatsApp", href: "#reservations" },
    items: [
      {
        question: "Do I need a reservation?",
        answer:
          "It's not required, but we recommend it for Fridays, Saturdays and Sunday lunch. On WhatsApp, confirmation is quick.",
      },
      {
        question: "Are pets welcome?",
        answer: "Yes! Pets are welcome on the veranda, with a water bowl and a treat on the house.",
      },
      {
        question: "Are there vegetarian, vegan and gluten-free options?",
        answer:
          "Yes. We have fixed vegetarian dishes, a vegan pizza and several gluten-free items. Let us know about allergies when booking.",
      },
      {
        question: "Can I celebrate a birthday?",
        answer:
          "Of course. Tell us when booking and we'll prepare a surprise. For groups over 15 people we have a set menu.",
      },
      {
        question: "Is there parking?",
        answer: "Valet parking from 7 pm and a partner car park on the same street at lunchtime.",
      },
      {
        question: "Do you charge corkage?",
        answer: "Yes, R$ 50 per bottle, waived if you buy a bottle from our list.",
      },
      {
        question: "Which payment methods do you accept?",
        answer: "Pix, credit and debit cards and the main meal-voucher brands.",
      },
    ],
  },

  booking: {
    heading: {
      eyebrow: "Reservations",
      title: "Book your table in under a minute",
      description: "Fill in your details and continue on WhatsApp — we'll confirm your table there.",
    },
    benefits: [
      "Quick confirmation on WhatsApp",
      "Tables in the dining room, on the veranda or at the grill counter",
      "Tell us the occasion and we'll prepare a surprise",
    ],
    form: {
      ...pt.booking.form,
      name: { label: "Full name", placeholder: "Who is the booking for?" },
      phone: { label: "WhatsApp", placeholder: "(19) 99999-9999" },
      treatment: {
        label: "Number of guests",
        placeholder: "Select",
        options: [
          { value: "1-2", label: "1 to 2 guests" },
          { value: "3-4", label: "3 to 4 guests" },
          { value: "5-6", label: "5 to 6 guests" },
          { value: "7-10", label: "7 to 10 guests" },
          { value: "evento", label: "Event (more than 10)" },
        ],
      },
      period: {
        label: "Meal",
        options: [
          { value: "almoco", label: "Lunch" },
          { value: "jantar", label: "Dinner" },
          { value: "evento", label: "Event" },
        ],
      },
      message: { label: "Date, time and notes", placeholder: "e.g. Saturday, 8pm — birthday, high chair for a baby…" },
      submit: "Book on WhatsApp",
      privacy: "Your details are only used to confirm your booking. Learn more in our",
      errors: {
        nameMin: "Please enter your name (at least 3 letters).",
        nameMax: "Name is too long.",
        phone: "Please enter a valid WhatsApp number with area code.",
        treatment: "Please select the number of guests.",
        period: "Choose lunch, dinner or event.",
        messageMax: "The message can have up to 500 characters.",
      },
      whatsappMessage: {
        intro: "Hi, Alecrim & Brasa! I'd like to book a table.",
        fields: { name: "Name", phone: "WhatsApp", treatment: "Guests", period: "Meal", message: "Date and notes" },
      },
      toast: { title: "All set! Opening WhatsApp…", description: "Your booking message is ready. Just tap send." },
    },
  },

  privacy: {
    path: "privacy",
    title: "Privacy policy",
    description:
      "How the Alecrim & Brasa website handles your personal data, in plain language and in line with Brazil's LGPD.",
    updatedLabel: "Last updated",
    updatedAt: "November 3, 2026",
    intro:
      "This policy explains which data this website uses, why, and what your rights are under Brazil's General Data Protection Law (LGPD, Law No. 13,709/2018). In short: the site has no database, uses no cookies and does not track you.",
    sections: [
      {
        heading: "Who is responsible",
        paragraphs: [
          "The data controller is Alecrim & Brasa Gastronomia Ltda. (CNPJ 00.000.000/0001-00), Rua do Alecrim, 315, Jardim Aurora, Campinas – SP, Brazil. Fictitious company and data, created for a portfolio.",
        ],
      },
      {
        heading: "What we collect",
        paragraphs: [
          "Only what you type in the booking form: name, WhatsApp number, number of guests, meal and, optionally, a message with the date and notes.",
          "This data is not sent to any server of ours: your browser builds a message and opens WhatsApp. We only receive the booking if you tap send in the app.",
        ],
      },
      {
        heading: "How we use it",
        paragraphs: [
          "To reply to and confirm your booking (legal basis: steps taken at your request prior to a contract, LGPD art. 7, V). We don't use your data for advertising and we don't sell or share it with third parties.",
        ],
      },
      {
        heading: "WhatsApp",
        paragraphs: [
          "The conversation happens on WhatsApp, a Meta service with its own privacy policy. We keep the chat history only for as long as needed to serve you and meet legal obligations.",
        ],
      },
      {
        heading: "Cookies and browser storage",
        paragraphs: [
          "This website uses no cookies, analytics tools or tracking pixels. That's why there is no cookie banner.",
          "The only information stored in your browser is your theme preference (light or dark), in the device's local storage. It is never sent to us and can be removed by clearing the site's data.",
        ],
      },
      {
        heading: "Your rights",
        paragraphs: [
          "You can request confirmation of processing, access, correction, anonymisation or deletion of your data, as well as information about sharing and withdrawal of consent (LGPD art. 18).",
          "To do so, contact us at reservas@alecrimebrasa.com.br or on WhatsApp +55 19 98888-7777. You may also file a complaint with Brazil's National Data Protection Authority (ANPD).",
        ],
      },
      {
        heading: "Security",
        paragraphs: [
          "The site is served over HTTPS only, with security headers and no third-party content. Since we don't store form data, there is no database that could leak.",
        ],
      },
      {
        heading: "Changes",
        paragraphs: ["If this policy changes, the update date at the top of the page will change too."],
      },
    ],
    linkLabel: "Privacy policy",
    backLabel: "Back to home",
  },

  location: {
    heading: {
      eyebrow: "Location",
      title: "Come visit us",
      description: "Easy to reach, with valet parking at night and a pet-friendly veranda.",
    },
    addressTitle: "Address",
    hoursTitle: "Opening hours",
    contactTitle: "Contact",
    directionsCta: "Get directions",
    mapCaption: "Campinas – SP, Brazil",
  },

  footer: {
    about: "Wood-fire cooking in Campinas: flame-grilled meats, sourdough pizzas and produce from small local farms.",
    linksTitle: "Navigation",
    contactTitle: "Contact",
    socialTitle: "Social media",
    rights: "All rights reserved.",
    disclaimer: "Restaurant, team, prices, company number and reviews are fictitious.",
    portfolioPrefix: "Fictitious project built for a portfolio by",
    backToTop: "Back to top",
  },
};

/** Conteúdo por idioma. O primeiro é o padrão (sem prefixo na URL). */
export const sites = { pt, en } satisfies Record<string, SiteConfig>;

export type Locale = keyof typeof sites;
export const locales = Object.keys(sites) as Locale[];
export const defaultLocale: Locale = "pt";

export function hasLocale(value: string): value is Locale {
  return value in sites;
}
