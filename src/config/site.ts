import type { SiteConfig } from "./types";

/**
 * ============================================================================
 *  CONTEÚDO DO SITE
 * ============================================================================
 *  Todo texto, número, contato e link do negócio vive aqui.
 *  Para transformar o site em outro negócio (restaurante, pet shop, estúdio…),
 *  edite este arquivo — os componentes não precisam ser alterados.
 *
 *  ⚠️ "Odonto Aurora" é uma clínica FICTÍCIA criada para portfólio.
 *  Telefones, endereço, CROs e depoimentos são inventados.
 * ============================================================================
 */

const whatsapp = "5519999999999";

export const site: SiteConfig = {
  url: "https://odonto-aurora.vercel.app",
  locale: "pt_BR",
  lang: "pt-BR",

  brand: {
    name: "Odonto Aurora",
    shortName: "Aurora",
    slogan: "Seu sorriso merece cuidado de verdade",
    description:
      "Clínica odontológica em Campinas – SP com tratamentos modernos, equipe especializada e atendimento humanizado do primeiro contato ao sorriso final.",
    schemaType: "Dentist",
    priceRange: "$$",
  },

  seo: {
    title: "Odonto Aurora — Clínica Odontológica em Campinas",
    description:
      "Clareamento, implantes, alinhadores, lentes de contato dental e odontopediatria em Campinas – SP. Agende sua avaliação pelo WhatsApp.",
    keywords: [
      "dentista em Campinas",
      "clínica odontológica Campinas",
      "clareamento dental",
      "implante dentário",
      "alinhadores invisíveis",
      "lentes de contato dental",
      "odontopediatria",
    ],
    ogImageAlt: "Odonto Aurora — Seu sorriso merece cuidado de verdade",
  },

  contact: {
    whatsapp,
    whatsappDisplay: "(19) 99999-9999",
    whatsappLabel: "WhatsApp",
    phone: "+55 19 99999-9999",
    email: "contato@odontoaurora.com.br",
    defaultWhatsAppMessage:
      "Olá, Odonto Aurora! Vim pelo site e gostaria de agendar uma avaliação.",
  },

  address: {
    street: "Av. Horizonte Azul, 742 – Sala 12",
    district: "Jardim Aurora",
    city: "Campinas",
    state: "SP",
    postalCode: "13000-000",
    country: "BR",
    full: "Av. Horizonte Azul, 742 – Sala 12, Jardim Aurora, Campinas – SP, 13000-000",
    reference: "Estacionamento conveniado em frente à clínica",
  },

  openingHours: [
    {
      label: "Segunda a sexta",
      hours: "8h às 20h",
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "20:00",
    },
    {
      label: "Sábado",
      hours: "8h às 13h",
      days: ["Saturday"],
      opens: "08:00",
      closes: "13:00",
    },
    {
      label: "Domingo e feriados",
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
      handle: "@odontoaurora.demo",
      href: "https://instagram.com/odontoaurora.demo",
    },
    {
      icon: "whatsapp",
      label: "WhatsApp",
      handle: "(19) 99999-9999",
      href: `https://wa.me/${whatsapp}`,
    },
  ],

  responsible: {
    name: "Dra. Helena Duarte",
    role: "Responsável técnica",
    registry: "CRO-SP 000.001",
  },

  /** Troque pelo seu nome e link (GitHub, LinkedIn, site…). */
  author: {
    name: "Vitor Valentim Silva",
    url: "https://github.com/vitorvalentimsilva",
  },

  nav: [
    { label: "Tratamentos", href: "#tratamentos" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Equipe", href: "#equipe" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Dúvidas", href: "#duvidas" },
    { label: "Contato", href: "#localizacao" },
  ],

  ui: {
    skipToContent: "Pular para o conteúdo",
    headerCta: { label: "Agendar avaliação", href: "#agendar" },
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    menuTitle: "Menu",
    homeLabel: "Odonto Aurora — início",
    mainNavLabel: "Navegação principal",
    whatsappFab: "Conversar no WhatsApp",
    starsLabel: (rating) => `Avaliação: ${rating} de 5 estrelas`,
    externalLinkHint: "(abre em nova aba)",
    pauseAnimation: "Pausar depoimentos",
    notifications: "Notificações",
    closeNotification: "Fechar notificação",
    playAnimation: "Retomar depoimentos",
  },

  hero: {
    badge: "Agenda aberta para novos pacientes",
    title: "Seu sorriso merece",
    highlight: "cuidado de verdade",
    subtitle:
      "Tratamentos odontológicos modernos, sem pressa e sem dor, com uma equipe que explica cada etapa e cuida de você como pessoa — não como número.",
    primaryCta: { label: "Agendar pelo WhatsApp", href: "#agendar" },
    secondaryCta: { label: "Ver tratamentos", href: "#tratamentos" },
    trustBadges: [
      { icon: "smile", label: "+2.000 sorrisos" },
      { icon: "star", label: "Nota 4,9 no Google" },
      { icon: "heartHandshake", label: "Atendimento humanizado" },
    ],
    visual: {
      cardTitle: "Plano de tratamento",
      cardSubtitle: "Clareamento + limpeza",
      chips: ["Sem dor", "Digital", "Personalizado"],
      ratingLabel: "Avaliação média",
      ratingValue: "4,9",
      nextSlotLabel: "Próximo horário",
      nextSlotValue: "Amanhã, 9h30",
    },
    // image: { src: "/images/hero.jpg", alt: "Recepção da clínica", width: 1200, height: 1400 },
  },

  stats: {
    heading: {
      eyebrow: "Em números",
      title: "Confiança construída sorriso a sorriso",
    },
    items: [
      { value: 12, suffix: "anos", label: "de história em Campinas" },
      { value: 2000, prefix: "+", label: "pacientes atendidos" },
      { value: 8, label: "especialistas" },
      { value: 4.9, decimals: 1, suffix: "/5", label: "nota média" },
    ],
  },

  treatments: {
    heading: {
      eyebrow: "Tratamentos",
      title: "Tudo o que seu sorriso precisa, em um só lugar",
      description:
        "Do check-up preventivo à reabilitação completa, com tecnologia digital e planejamento individual.",
    },
    items: [
      {
        icon: "sparkles",
        title: "Clareamento dental",
        description:
          "Dentes até 4 tons mais claros com protocolo seguro, combinando consultório e moldeira caseira.",
        highlights: ["Baixa sensibilidade", "Resultado em 3 semanas"],
      },
      {
        icon: "shieldCheck",
        title: "Implantes",
        description:
          "Reposição de dentes com implantes de titânio e planejamento guiado por tomografia digital.",
        highlights: ["Cirurgia guiada", "Planejamento 3D"],
      },
      {
        icon: "orthodontics",
        title: "Ortodontia e alinhadores",
        description:
          "Aparelhos fixos estéticos ou alinhadores invisíveis, com simulação 3D do resultado antes de começar.",
        highlights: ["Simulação 3D", "Alinhadores invisíveis"],
      },
      {
        icon: "gem",
        title: "Lentes de contato dental",
        description:
          "Facetas ultrafinas de porcelana para corrigir cor, forma e alinhamento com naturalidade.",
        highlights: ["Ensaio estético", "Mínimo desgaste"],
      },
      {
        icon: "smilePlus",
        title: "Limpeza e prevenção",
        description:
          "Profilaxia, aplicação de flúor e check-up completo para manter a saúde bucal em dia.",
        highlights: ["Check-up semestral", "Orientação de higiene"],
      },
      {
        icon: "baby",
        title: "Odontopediatria",
        description:
          "Atendimento lúdico e acolhedor para crianças, criando desde cedo uma relação tranquila com o dentista.",
        highlights: ["Ambiente infantil", "Primeira consulta sem medo"],
      },
    ],
    cta: { label: "Quero uma avaliação", href: "#agendar" },
    cardCta: { label: "Agendar", href: "#agendar" },
  },

  differentials: {
    heading: {
      eyebrow: "Por que a Aurora",
      title: "Detalhes que fazem a diferença na sua experiência",
      description:
        "Unimos técnica, tecnologia e acolhimento para que cada visita seja leve — inclusive para quem tem medo de dentista.",
    },
    items: [
      {
        icon: "heartHandshake",
        title: "Atendimento sem pressa",
        description:
          "Consultas com tempo para ouvir, explicar e tirar todas as dúvidas. Você entende cada etapa antes de decidir.",
        size: "wide",
      },
      {
        icon: "scanLine",
        title: "Tecnologia digital",
        description: "Escaneamento intraoral 3D, sem moldagens desconfortáveis.",
      },
      {
        icon: "clipboardList",
        title: "Orçamento transparente",
        description: "Plano por escrito, com valores e prazos claros. Sem surpresas.",
      },
      {
        icon: "microscope",
        title: "Biossegurança rigorosa",
        description: "Esterilização com rastreio de cada instrumental, ciclo a ciclo.",
      },
      {
        icon: "clock",
        title: "Horários estendidos",
        description:
          "Até as 20h durante a semana e aos sábados pela manhã, para caber na sua rotina.",
      },
    ],
  },

  steps: {
    heading: {
      eyebrow: "Como funciona",
      title: "Do primeiro contato ao sorriso novo",
      description: "Um caminho simples, transparente e no seu ritmo.",
    },
    stepLabel: "Etapa",
    items: [
      {
        icon: "messages",
        title: "Fale com a gente",
        description:
          "Mande uma mensagem pelo WhatsApp ou preencha o formulário. Respondemos em minutos no horário comercial.",
      },
      {
        icon: "stethoscope",
        title: "Avaliação completa",
        description:
          "Exame clínico, fotos e escaneamento digital para entender sua saúde bucal e seus objetivos.",
      },
      {
        icon: "clipboardList",
        title: "Plano personalizado",
        description:
          "Você recebe um plano de tratamento por escrito, com etapas, prazos e opções de pagamento.",
      },
      {
        icon: "smile",
        title: "Tratamento e acompanhamento",
        description:
          "Iniciamos o cuidado com conforto e seguimos com retornos programados para manter o resultado.",
      },
    ],
  },

  team: {
    heading: {
      eyebrow: "Equipe",
      title: "Especialistas que cuidam de você",
      description:
        "Profissionais com formação contínua e um objetivo em comum: tornar o cuidado odontológico leve e eficiente.",
    },
    items: [
      {
        name: "Dra. Helena Duarte",
        initials: "HD",
        role: "Implantodontia e prótese",
        registry: "CRO-SP 000.001",
        bio: "Diretora clínica, especialista em reabilitação oral e cirurgia guiada.",
      },
      {
        name: "Dr. Rafael Nogueira",
        initials: "RN",
        role: "Ortodontia e alinhadores",
        registry: "CRO-SP 000.002",
        bio: "Planeja tratamentos ortodônticos digitais com simulação 3D do resultado.",
      },
      {
        name: "Dra. Marina Okada",
        initials: "MO",
        role: "Odontopediatria e estética",
        registry: "CRO-SP 000.003",
        bio: "Une cuidado infantil acolhedor e odontologia estética minimamente invasiva.",
      },
    ],
  },

  testimonials: {
    heading: {
      eyebrow: "Depoimentos",
      title: "Quem sorri com a Aurora recomenda",
    },
    summary: "Nota média 4,9 com base em avaliações de pacientes",
    items: [
      {
        name: "Camila R.",
        detail: "Clareamento dental",
        quote:
          "Sempre tive vergonha de sorrir em fotos. Em três semanas o resultado ficou natural e não senti sensibilidade nenhuma.",
        rating: 5,
      },
      {
        name: "Eduardo M.",
        detail: "Implante",
        quote:
          "Explicaram cada etapa com calma e o planejamento digital me deixou muito seguro. Cirurgia tranquila, recuperação rápida.",
        rating: 5,
      },
      {
        name: "Patrícia L.",
        detail: "Mãe do Theo, 6 anos",
        quote:
          "Meu filho tinha pavor de dentista. Hoje ele pergunta quando vai voltar! A Dra. Marina tem uma paciência incrível.",
        rating: 5,
      },
      {
        name: "Bruno S.",
        detail: "Alinhadores invisíveis",
        quote:
          "Ver a simulação 3D antes de começar fez toda diferença. Ninguém percebe que estou usando os alinhadores.",
        rating: 5,
      },
      {
        name: "Juliana F.",
        detail: "Lentes de contato dental",
        quote:
          "Fiz o ensaio estético antes e pude aprovar o formato. Ficou exatamente como eu imaginava, muito natural.",
        rating: 5,
      },
      {
        name: "Sérgio A.",
        detail: "Limpeza e prevenção",
        quote:
          "Atendimento pontual, clínica impecável e horário à noite que encaixa na minha rotina. Virei paciente fiel.",
        rating: 4,
      },
    ],
  },

  payment: {
    heading: {
      eyebrow: "Convênios e pagamento",
      title: "Cuidar do sorriso cabe no seu planejamento",
      description: "Trabalhamos com os principais convênios e condições facilitadas para tratamentos particulares.",
    },
    insurancesTitle: "Convênios aceitos",
    insurances: [
      "SorriaMais Saúde",
      "OdontoPrime",
      "Vida Dental",
      "BemEstar Odonto",
      "Plano Sorriso Total",
      "DentalCare Brasil",
      "UniOdonto Campinas",
    ],
    methodsTitle: "Formas de pagamento",
    methods: [
      { icon: "qrCode", label: "Pix" },
      { icon: "creditCard", label: "Cartão de crédito" },
      { icon: "banknote", label: "Débito e dinheiro" },
    ],
    installments: {
      title: "Parcelamos em até 12x",
      description: "no cartão de crédito, para tratamentos particulares.",
    },
    note: "Convênios fictícios, apenas para demonstração. Consulte a cobertura do seu plano.",
  },

  faq: {
    heading: {
      eyebrow: "Dúvidas frequentes",
      title: "Perguntas que sempre recebemos",
    },
    contactPrompt: "Não encontrou sua dúvida?",
    contactCta: { label: "Fale com a gente no WhatsApp", href: "#agendar" },
    items: [
      {
        question: "A primeira avaliação tem custo?",
        answer:
          "A avaliação inicial inclui exame clínico, fotos e orientação sobre as opções de tratamento. Consulte as condições vigentes pelo WhatsApp — para pacientes de convênios aceitos, ela é coberta pelo plano.",
      },
      {
        question: "O clareamento dental deixa os dentes sensíveis?",
        answer:
          "Usamos géis de baixa concentração e dessensibilizantes antes e depois das sessões. A maioria dos pacientes relata sensibilidade leve ou nenhuma.",
      },
      {
        question: "Quanto tempo dura um tratamento com alinhadores?",
        answer:
          "Depende de cada caso, mas a média fica entre 6 e 18 meses. Na avaliação você vê a simulação 3D com o número estimado de etapas.",
      },
      {
        question: "Implante dói?",
        answer:
          "O procedimento é feito com anestesia local e planejamento guiado, o que reduz o tempo de cirurgia. O pós-operatório costuma ser tranquilo, controlado com medicação simples.",
      },
      {
        question: "A partir de que idade a criança deve ir ao dentista?",
        answer:
          "Recomendamos a primeira consulta assim que nasce o primeiro dente, ou até 1 ano de idade. Quanto antes, mais natural fica a relação com o cuidado bucal.",
      },
      {
        question: "Vocês atendem urgências?",
        answer:
          "Sim. Em casos de dor ou acidente, chame no WhatsApp: encaixamos atendimentos de urgência no mesmo dia sempre que possível.",
      },
      {
        question: "Quais formas de pagamento são aceitas?",
        answer:
          "Pix, cartões de débito e crédito (em até 12x) e dinheiro. Também atendemos diversos convênios odontológicos.",
      },
      {
        question: "Tem estacionamento?",
        answer:
          "Sim, temos estacionamento conveniado em frente à clínica e a recepção é totalmente acessível.",
      },
    ],
  },

  booking: {
    heading: {
      eyebrow: "Agendamento",
      title: "Agende sua avaliação em menos de 1 minuto",
      description:
        "Preencha os dados abaixo e continue a conversa direto no WhatsApp com nossa equipe de recepção.",
    },
    benefits: [
      "Resposta rápida no horário comercial",
      "Horários de manhã, tarde e noite",
      "Sem compromisso: tire suas dúvidas primeiro",
    ],
    form: {
      name: { label: "Nome completo", placeholder: "Como podemos te chamar?" },
      phone: { label: "WhatsApp", placeholder: "(19) 99999-9999" },
      treatment: {
        label: "Tratamento de interesse",
        placeholder: "Selecione uma opção",
        options: [
          { value: "avaliacao", label: "Avaliação geral" },
          { value: "clareamento", label: "Clareamento dental" },
          { value: "implantes", label: "Implantes" },
          { value: "ortodontia", label: "Ortodontia / Alinhadores" },
          { value: "lentes", label: "Lentes de contato dental" },
          { value: "limpeza", label: "Limpeza e prevenção" },
          { value: "odontopediatria", label: "Odontopediatria" },
        ],
      },
      period: {
        label: "Melhor período",
        options: [
          { value: "manha", label: "Manhã" },
          { value: "tarde", label: "Tarde" },
          { value: "noite", label: "Noite" },
        ],
      },
      message: {
        label: "Mensagem (opcional)",
        placeholder: "Conte um pouco sobre o que você procura…",
      },
      submit: "Enviar pelo WhatsApp",
      privacy: "Seus dados são usados apenas para o contato sobre o agendamento.",
      errors: {
        nameMin: "Informe seu nome (mínimo de 3 letras).",
        nameMax: "Nome muito longo.",
        phone: "Informe um WhatsApp válido com DDD.",
        treatment: "Selecione o tratamento de interesse.",
        period: "Escolha o melhor período.",
        messageMax: "A mensagem pode ter no máximo 500 caracteres.",
      },
      buildMessage: ({ name, phone, treatment, period, message }) =>
        [
          "Olá, Odonto Aurora! Gostaria de agendar uma avaliação.",
          "",
          `*Nome:* ${name}`,
          `*WhatsApp:* ${phone}`,
          `*Tratamento:* ${treatment}`,
          `*Melhor período:* ${period}`,
          ...(message ? [`*Mensagem:* ${message}`] : []),
        ].join("\n"),
      toast: {
        title: "Tudo certo! Abrindo o WhatsApp…",
        description: "Sua mensagem já está pronta. É só tocar em enviar.",
      },
    },
  },

  location: {
    heading: {
      eyebrow: "Localização",
      title: "Venha nos visitar",
      description: "Fácil acesso, estacionamento conveniado e recepção acessível.",
    },
    addressTitle: "Endereço",
    hoursTitle: "Horário de atendimento",
    contactTitle: "Contato",
    directionsCta: "Como chegar",
    mapCaption: "Campinas – SP",
  },

  footer: {
    about:
      "Odontologia moderna e humanizada em Campinas. Cuidamos do seu sorriso com técnica, tecnologia e acolhimento.",
    linksTitle: "Navegação",
    contactTitle: "Contato",
    socialTitle: "Redes sociais",
    rights: "Todos os direitos reservados.",
    disclaimer:
      "Clínica, profissionais, registros, convênios e depoimentos são fictícios.",
    portfolioPrefix: "Projeto fictício desenvolvido para portfólio por",
    backToTop: "Voltar ao topo",
  },
};
