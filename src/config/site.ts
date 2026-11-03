import { resolveSiteUrl } from "@/lib/site-url";

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
  url: resolveSiteUrl("https://odonto-aurora.vercel.app"),
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
    logo: {
      glyph: "M13.4 12.6c1.9-1.5 4.2-1.2 6.6-.2 2.4-1 4.7-1.3 6.6.2 2 1.6 2 4.6 1.2 7.4-.6 2-1 3.9-1.5 6-.4 1.6-2.2 1.9-2.9.4l-1.6-3.8c-.5-1.1-1.1-1.4-1.8-1.4s-1.3.3-1.8 1.4l-1.6 3.8c-.7 1.5-2.5 1.2-2.9-.4-.5-2.1-.9-4-1.5-6-.8-2.8-.8-5.8 1.2-7.4Z",
      accent: "M7 27a13 13 0 0 1 26 0",
    },
  },

  theme: {
    primary: "#0f6f7c",
    primaryDark: "#134b5c",
    warm: "#f2a27c",
    warmLight: "#fde3d3",
    background: "#f7fbfb",
    backgroundTint: "#e6f3f3",
    backgroundDark: "#0f1a1e",
    foreground: "#14313d",
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
    serviceSchemaType: "MedicalProcedure",
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

  sections: {
    home: "inicio",
    treatments: "tratamentos",
    differentials: "diferenciais",
    steps: "como-funciona",
    team: "equipe",
    testimonials: "depoimentos",
    payment: "convenios",
    faq: "duvidas",
    booking: "agendar",
    location: "localizacao",
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
    theme: {
      toggle: (current) => `Tema: ${current}. Clique para trocar.`,
      light: "claro",
      dark: "escuro",
      system: "do sistema",
    },
    notFound: {
      title: "Página não encontrada",
      description: "Não encontramos essa página. Que tal voltar ao início e agendar a sua avaliação?",
      cta: { label: "Voltar ao início", href: "/" },
    },
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
      illustration: "tooth",
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
        slug: "clareamento-dental",
        details: {
          metaDescription: "Clareamento dental em Campinas com protocolo combinado (consultório + caseiro), baixa sensibilidade e resultado em cerca de 3 semanas.",
          intro: "Dentes até 4 tons mais claros com um protocolo que combina sessões no consultório e moldeira caseira, sempre com acompanhamento.",
          body: [
            "Antes de clarear, fazemos uma avaliação para verificar cáries, gengiva e restaurações — o gel não altera a cor de resinas e coroas, então planejamos tudo para o resultado ficar uniforme.",
            "O protocolo combinado usa géis de concentração controlada e dessensibilizantes antes e depois de cada etapa. Na maioria dos casos, o resultado final aparece em cerca de três semanas e se mantém por anos com boa higiene e retoques ocasionais.",
          ],
          benefits: [
            "Avaliação prévia de cáries, gengiva e restaurações",
            "Protocolo combinado: consultório + moldeira caseira",
            "Dessensibilizante em todas as etapas",
            "Moldeira digital feita por escaneamento 3D",
          ],
          faq: [
            {
              question: "O clareamento estraga o esmalte?",
              answer: "Não, quando feito com acompanhamento profissional e géis adequados. O esmalte não é desgastado; o gel age nos pigmentos internos do dente.",
            },
            {
              question: "Quanto tempo dura o resultado?",
              answer: "De 2 a 4 anos em média, dependendo de hábitos como café, vinho e cigarro. Retoques curtos com a moldeira mantêm a cor.",
            },
            {
              question: "Grávidas podem clarear?",
              answer: "Recomendamos adiar o clareamento durante a gestação e a amamentação, por precaução.",
            },
          ],
        },
      },
      {
        icon: "shieldCheck",
        title: "Implantes",
        description:
          "Reposição de dentes com implantes de titânio e planejamento guiado por tomografia digital.",
        highlights: ["Cirurgia guiada", "Planejamento 3D"],
        slug: "implantes",
        details: {
          metaDescription: "Implantes dentários em Campinas com planejamento por tomografia, cirurgia guiada e acompanhamento completo na Odonto Aurora.",
          intro: "Reposição de dentes perdidos com implantes de titânio, planejados digitalmente para uma cirurgia mais rápida, precisa e confortável.",
          body: [
            "O planejamento começa com tomografia e escaneamento intraoral. Com esses dados, posicionamos o implante virtualmente e imprimimos um guia cirúrgico que leva a broca exatamente ao lugar planejado.",
            "A cirurgia guiada costuma ser mais curta e com pós-operatório mais tranquilo. Depois do período de integração ao osso, instalamos a coroa definitiva em cerâmica, com cor e formato pensados para o seu sorriso.",
          ],
          benefits: [
            "Planejamento digital com tomografia",
            "Cirurgia guiada, menos invasiva",
            "Coroa em cerâmica com cor personalizada",
            "Retornos programados após a instalação",
          ],
          faq: [
            {
              question: "Qualquer pessoa pode fazer implante?",
              answer: "A maioria dos adultos sim. Avaliamos osso, gengiva e condições de saúde como diabetes e tabagismo, que podem exigir cuidados extras.",
            },
            {
              question: "Quanto tempo leva o tratamento?",
              answer: "Em geral de 3 a 6 meses entre a cirurgia e a coroa definitiva. Em alguns casos é possível instalar uma coroa provisória no mesmo dia.",
            },
            {
              question: "Dói?",
              answer: "A cirurgia é feita com anestesia local. O pós-operatório costuma ser controlado com analgésicos simples.",
            },
          ],
        },
      },
      {
        icon: "orthodontics",
        title: "Ortodontia e alinhadores",
        description:
          "Aparelhos fixos estéticos ou alinhadores invisíveis, com simulação 3D do resultado antes de começar.",
        highlights: ["Simulação 3D", "Alinhadores invisíveis"],
        slug: "ortodontia-alinhadores",
        details: {
          metaDescription: "Aparelhos estéticos e alinhadores invisíveis em Campinas, com simulação 3D do resultado antes de começar o tratamento.",
          intro: "Dentes alinhados com aparelhos fixos estéticos ou alinhadores invisíveis — e você vê a simulação 3D do resultado antes de começar.",
          body: [
            "Na avaliação, escaneamos os dentes em 3D e planejamos cada movimento. A simulação mostra como o sorriso vai ficar e quantas etapas o tratamento deve ter.",
            "Os alinhadores são placas transparentes trocadas a cada uma ou duas semanas e podem ser removidos para comer. Para casos mais complexos, indicamos aparelhos fixos com bráquetes estéticos, quase imperceptíveis.",
          ],
          benefits: [
            "Simulação 3D antes de começar",
            "Alinhadores transparentes e removíveis",
            "Bráquetes estéticos para casos complexos",
            "Contenção inclusa ao final do tratamento",
          ],
          faq: [
            {
              question: "Adulto pode usar aparelho?",
              answer: "Sim, não há idade limite. Muitos adultos escolhem os alinhadores pela discrição.",
            },
            {
              question: "Quantas horas por dia uso o alinhador?",
              answer: "Cerca de 22 horas por dia, tirando só para comer e escovar os dentes.",
            },
            {
              question: "O tratamento dói?",
              answer: "Pode haver leve pressão nos primeiros dias de cada troca, sinal de que os dentes estão se movendo. Passa rápido.",
            },
          ],
        },
      },
      {
        icon: "gem",
        title: "Lentes de contato dental",
        description:
          "Facetas ultrafinas de porcelana para corrigir cor, forma e alinhamento com naturalidade.",
        highlights: ["Ensaio estético", "Mínimo desgaste"],
        slug: "lentes-de-contato-dental",
        details: {
          metaDescription: "Lentes de contato dental em porcelana com ensaio estético e mínimo desgaste, na Odonto Aurora em Campinas.",
          intro: "Facetas ultrafinas de porcelana para corrigir cor, formato e pequenos desalinhamentos com aparência natural.",
          body: [
            "Antes de qualquer preparo, fazemos um ensaio estético: aplicamos uma resina provisória sobre os dentes para você ver e aprovar o novo formato do sorriso no espelho e em fotos.",
            "Com o planejamento aprovado, as lentes são produzidas em cerâmica e cimentadas com mínimo ou nenhum desgaste. A porcelana não mancha e reflete a luz como o esmalte natural.",
          ],
          benefits: [
            "Ensaio estético antes de começar",
            "Porcelana que não mancha",
            "Mínimo ou nenhum desgaste do dente",
            "Formato planejado com fotos e vídeo",
          ],
          faq: [
            {
              question: "Quanto tempo duram?",
              answer: "Com cuidados de higiene e consultas regulares, mais de 10 anos.",
            },
            {
              question: "Preciso desgastar os dentes?",
              answer: "Muitas vezes o desgaste é mínimo ou nenhum. Isso é definido no planejamento, caso a caso.",
            },
            {
              question: "Fica com aparência artificial?",
              answer: "Não, quando bem planejada. O ensaio estético existe justamente para ajustar cor e formato ao seu rosto antes da versão final.",
            },
          ],
        },
      },
      {
        icon: "smilePlus",
        title: "Limpeza e prevenção",
        description:
          "Profilaxia, aplicação de flúor e check-up completo para manter a saúde bucal em dia.",
        highlights: ["Check-up semestral", "Orientação de higiene"],
        slug: "limpeza-e-prevencao",
        details: {
          metaDescription: "Limpeza dental, flúor e check-up completo em Campinas. Prevenção para manter a saúde bucal em dia na Odonto Aurora.",
          intro: "Profilaxia, aplicação de flúor e um check-up completo para encontrar pequenos problemas antes que virem tratamentos maiores.",
          body: [
            "A consulta inclui remoção de tártaro e placa, polimento, avaliação da gengiva e, quando necessário, radiografias. Também revisamos restaurações antigas e sinais de bruxismo.",
            "Saímos da consulta com orientações de escovação e uso de fio adaptadas a você — e com o próximo retorno já agendado, normalmente a cada seis meses.",
          ],
          benefits: [
            "Remoção de tártaro e polimento",
            "Avaliação de gengiva e restaurações",
            "Aplicação de flúor quando indicado",
            "Orientação personalizada de higiene",
          ],
          faq: [
            {
              question: "De quanto em quanto tempo devo fazer limpeza?",
              answer: "Para a maioria das pessoas, a cada seis meses. Quem tem doença gengival ou usa aparelho pode precisar de intervalos menores.",
            },
            {
              question: "A limpeza dói?",
              answer: "Normalmente não. Em casos de muito tártaro ou gengiva sensível, usamos anestésico tópico.",
            },
            {
              question: "O convênio cobre?",
              answer: "A maioria dos planos odontológicos cobre limpeza e check-up. Confirme pelo WhatsApp com os dados do seu plano.",
            },
          ],
        },
      },
      {
        icon: "baby",
        title: "Odontopediatria",
        description:
          "Atendimento lúdico e acolhedor para crianças, criando desde cedo uma relação tranquila com o dentista.",
        highlights: ["Ambiente infantil", "Primeira consulta sem medo"],
        slug: "odontopediatria",
        details: {
          metaDescription: "Dentista infantil em Campinas: atendimento lúdico e acolhedor para bebês e crianças na Odonto Aurora.",
          intro: "Atendimento pensado para crianças, com tempo, brincadeira e muita conversa — para que a ida ao dentista seja tranquila desde cedo.",
          body: [
            "A primeira consulta é de adaptação: a criança conhece a sala, a cadeira e os instrumentos, sem pressa. Explicamos tudo com linguagem simples e respeitamos o tempo de cada um.",
            "Também orientamos os pais sobre escovação, alimentação, chupeta e hábitos que afetam o desenvolvimento dos dentes e da mordida.",
          ],
          benefits: [
            "Consulta de adaptação sem procedimentos",
            "Ambiente lúdico e acolhedor",
            "Orientação aos pais sobre hábitos e alimentação",
            "Prevenção com flúor e selantes",
          ],
          faq: [
            {
              question: "Com que idade levar ao dentista?",
              answer: "Quando nasce o primeiro dente, ou até 1 ano de idade.",
            },
            {
              question: "E se a criança chorar?",
              answer: "É normal no começo. Por isso fazemos consultas de adaptação e nunca forçamos procedimentos que não sejam urgentes.",
            },
            {
              question: "Os pais podem acompanhar?",
              answer: "Sim, os pais ou responsáveis ficam na sala durante todo o atendimento.",
            },
          ],
        },
      },
    ],
    cta: { label: "Quero uma avaliação", href: "#agendar" },
    cardLinkLabel: "Saiba mais",
    basePath: "tratamentos",
    page: {
      breadcrumbHome: "Início",
      breadcrumbLabel: "Tratamentos",
      benefitsTitle: "O que está incluso",
      faqTitle: "Dúvidas sobre o tratamento",
      relatedTitle: "Outros tratamentos",
      cta: {
        title: "Quer saber se é indicado para você?",
        description: "Agende uma avaliação pelo WhatsApp e tire suas dúvidas com a equipe.",
        button: {
          label: "Agendar avaliação",
          href: "#agendar",
        },
      },
    },
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
      privacy: "Seus dados são usados apenas para o contato sobre o agendamento. Saiba mais na",
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

  privacy: {
    title: "Política de privacidade",
    description: "Como o site da Odonto Aurora trata seus dados pessoais, em linguagem simples e de acordo com a LGPD.",
    updatedLabel: "Última atualização",
    updatedAt: "3 de novembro de 2026",
    intro:
      "Esta política explica, de forma direta, quais dados este site usa, para quê e quais são os seus direitos segundo a Lei Geral de Proteção de Dados (Lei nº 13.709/2018). Resumo: o site não tem banco de dados, não usa cookies e não rastreia você.",
    sections: [
      {
        heading: "Quem é o responsável",
        paragraphs: [
          "O controlador dos dados é a Odonto Aurora, Av. Horizonte Azul, 742 – Sala 12, Jardim Aurora, Campinas – SP, sob responsabilidade técnica da Dra. Helena Duarte (CRO-SP 000.001). Clínica e dados fictícios, criados para portfólio.",
        ],
      },
      {
        heading: "Quais dados coletamos",
        paragraphs: [
          "Somente o que você digita no formulário de agendamento: nome, WhatsApp, tratamento de interesse, melhor período e, se quiser, uma mensagem.",
          "Esses dados não são enviados a nenhum servidor nosso: o próprio navegador monta uma mensagem e abre o WhatsApp. Só recebemos o pedido se você tocar em enviar dentro do aplicativo.",
        ],
      },
      {
        heading: "Dados de saúde",
        paragraphs: [
          "O tratamento de interesse e a mensagem podem revelar informações sobre a sua saúde bucal, que a LGPD considera dado sensível (art. 11). Por isso pedimos apenas o mínimo para o agendamento — evite enviar exames ou detalhes clínicos por aqui.",
          "Na clínica, o prontuário odontológico é tratado para a tutela da saúde, com sigilo profissional e pelo prazo exigido pelas normas do Conselho Federal de Odontologia.",
        ],
      },
      {
        heading: "Para que usamos",
        paragraphs: [
          "Para responder e agendar a sua avaliação (base legal: procedimentos preliminares a pedido do titular, art. 7º, V, e tutela da saúde, art. 11, II, f, da LGPD). Não usamos seus dados para publicidade e não os vendemos ou compartilhamos com terceiros.",
        ],
      },
      {
        heading: "WhatsApp",
        paragraphs: [
          "A conversa acontece no WhatsApp, serviço da Meta, que tem política de privacidade própria. Guardamos o histórico apenas pelo tempo necessário para atender você e cumprir obrigações legais.",
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
          "Para isso, fale com a gente pelo e-mail contato@odontoaurora.com.br ou pelo WhatsApp (19) 99999-9999. Você também pode reclamar à Autoridade Nacional de Proteção de Dados (ANPD).",
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
