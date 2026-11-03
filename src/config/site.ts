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
    name: "Odonto Aurora",
    shortName: "Aurora",
    slogan: "Seu sorriso merece cuidado de verdade",
    description:
      "Clínica odontológica em Campinas – SP com tratamentos modernos, equipe especializada e atendimento humanizado do primeiro contato ao sorriso final.",
    schemaType: "Dentist",
    priceRange: "$$",
    logo: {
      glyph:
        "M13.4 12.6c1.9-1.5 4.2-1.2 6.6-.2 2.4-1 4.7-1.3 6.6.2 2 1.6 2 4.6 1.2 7.4-.6 2-1 3.9-1.5 6-.4 1.6-2.2 1.9-2.9.4l-1.6-3.8c-.5-1.1-1.1-1.4-1.8-1.4s-1.3.3-1.8 1.4l-1.6 3.8c-.7 1.5-2.5 1.2-2.9-.4-.5-2.1-.9-4-1.5-6-.8-2.8-.8-5.8 1.2-7.4Z",
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
    defaultWhatsAppMessage: "Olá, Odonto Aurora! Vim pelo site e gostaria de agendar uma avaliação.",
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
    starsLabel: "Avaliação: {rating} de 5 estrelas",
    externalLinkHint: "(abre em nova aba)",
    pauseAnimation: "Pausar depoimentos",
    notifications: "Notificações",
    closeNotification: "Fechar notificação",
    playAnimation: "Retomar depoimentos",
    theme: {
      toggle: "Tema: {mode}. Clique para trocar.",
      light: "claro",
      dark: "escuro",
      system: "do sistema",
    },
    language: { label: "Idioma" },
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
      description: "Do check-up preventivo à reabilitação completa, com tecnologia digital e planejamento individual.",
    },
    items: [
      {
        icon: "sparkles",
        title: "Clareamento dental",
        description: "Dentes até 4 tons mais claros com protocolo seguro, combinando consultório e moldeira caseira.",
        highlights: ["Baixa sensibilidade", "Resultado em 3 semanas"],
        slug: "clareamento-dental",
        details: {
          metaDescription:
            "Clareamento dental em Campinas com protocolo combinado (consultório + caseiro), baixa sensibilidade e resultado em cerca de 3 semanas.",
          intro:
            "Dentes até 4 tons mais claros com um protocolo que combina sessões no consultório e moldeira caseira, sempre com acompanhamento.",
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
              answer:
                "Não, quando feito com acompanhamento profissional e géis adequados. O esmalte não é desgastado; o gel age nos pigmentos internos do dente.",
            },
            {
              question: "Quanto tempo dura o resultado?",
              answer:
                "De 2 a 4 anos em média, dependendo de hábitos como café, vinho e cigarro. Retoques curtos com a moldeira mantêm a cor.",
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
        description: "Reposição de dentes com implantes de titânio e planejamento guiado por tomografia digital.",
        highlights: ["Cirurgia guiada", "Planejamento 3D"],
        slug: "implantes",
        details: {
          metaDescription:
            "Implantes dentários em Campinas com planejamento por tomografia, cirurgia guiada e acompanhamento completo na Odonto Aurora.",
          intro:
            "Reposição de dentes perdidos com implantes de titânio, planejados digitalmente para uma cirurgia mais rápida, precisa e confortável.",
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
              answer:
                "A maioria dos adultos sim. Avaliamos osso, gengiva e condições de saúde como diabetes e tabagismo, que podem exigir cuidados extras.",
            },
            {
              question: "Quanto tempo leva o tratamento?",
              answer:
                "Em geral de 3 a 6 meses entre a cirurgia e a coroa definitiva. Em alguns casos é possível instalar uma coroa provisória no mesmo dia.",
            },
            {
              question: "Dói?",
              answer:
                "A cirurgia é feita com anestesia local. O pós-operatório costuma ser controlado com analgésicos simples.",
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
          metaDescription:
            "Aparelhos estéticos e alinhadores invisíveis em Campinas, com simulação 3D do resultado antes de começar o tratamento.",
          intro:
            "Dentes alinhados com aparelhos fixos estéticos ou alinhadores invisíveis — e você vê a simulação 3D do resultado antes de começar.",
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
              answer:
                "Pode haver leve pressão nos primeiros dias de cada troca, sinal de que os dentes estão se movendo. Passa rápido.",
            },
          ],
        },
      },
      {
        icon: "gem",
        title: "Lentes de contato dental",
        description: "Facetas ultrafinas de porcelana para corrigir cor, forma e alinhamento com naturalidade.",
        highlights: ["Ensaio estético", "Mínimo desgaste"],
        slug: "lentes-de-contato-dental",
        details: {
          metaDescription:
            "Lentes de contato dental em porcelana com ensaio estético e mínimo desgaste, na Odonto Aurora em Campinas.",
          intro:
            "Facetas ultrafinas de porcelana para corrigir cor, formato e pequenos desalinhamentos com aparência natural.",
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
              answer:
                "Não, quando bem planejada. O ensaio estético existe justamente para ajustar cor e formato ao seu rosto antes da versão final.",
            },
          ],
        },
      },
      {
        icon: "smilePlus",
        title: "Limpeza e prevenção",
        description: "Profilaxia, aplicação de flúor e check-up completo para manter a saúde bucal em dia.",
        highlights: ["Check-up semestral", "Orientação de higiene"],
        slug: "limpeza-e-prevencao",
        details: {
          metaDescription:
            "Limpeza dental, flúor e check-up completo em Campinas. Prevenção para manter a saúde bucal em dia na Odonto Aurora.",
          intro:
            "Profilaxia, aplicação de flúor e um check-up completo para encontrar pequenos problemas antes que virem tratamentos maiores.",
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
              answer:
                "Para a maioria das pessoas, a cada seis meses. Quem tem doença gengival ou usa aparelho pode precisar de intervalos menores.",
            },
            {
              question: "A limpeza dói?",
              answer: "Normalmente não. Em casos de muito tártaro ou gengiva sensível, usamos anestésico tópico.",
            },
            {
              question: "O convênio cobre?",
              answer:
                "A maioria dos planos odontológicos cobre limpeza e check-up. Confirme pelo WhatsApp com os dados do seu plano.",
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
          metaDescription:
            "Dentista infantil em Campinas: atendimento lúdico e acolhedor para bebês e crianças na Odonto Aurora.",
          intro:
            "Atendimento pensado para crianças, com tempo, brincadeira e muita conversa — para que a ida ao dentista seja tranquila desde cedo.",
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
              answer:
                "É normal no começo. Por isso fazemos consultas de adaptação e nunca forçamos procedimentos que não sejam urgentes.",
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
        description: "Até as 20h durante a semana e aos sábados pela manhã, para caber na sua rotina.",
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
        description: "Exame clínico, fotos e escaneamento digital para entender sua saúde bucal e seus objetivos.",
      },
      {
        icon: "clipboardList",
        title: "Plano personalizado",
        description: "Você recebe um plano de tratamento por escrito, com etapas, prazos e opções de pagamento.",
      },
      {
        icon: "smile",
        title: "Tratamento e acompanhamento",
        description: "Iniciamos o cuidado com conforto e seguimos com retornos programados para manter o resultado.",
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
        answer: "Sim, temos estacionamento conveniado em frente à clínica e a recepção é totalmente acessível.",
      },
    ],
  },

  booking: {
    heading: {
      eyebrow: "Agendamento",
      title: "Agende sua avaliação em menos de 1 minuto",
      description: "Preencha os dados abaixo e continue a conversa direto no WhatsApp com nossa equipe de recepção.",
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
      whatsappMessage: {
        intro: "Olá, Odonto Aurora! Gostaria de agendar uma avaliação.",
        fields: {
          name: "Nome",
          phone: "WhatsApp",
          treatment: "Tratamento",
          period: "Melhor período",
          message: "Mensagem",
        },
      },
      toast: {
        title: "Tudo certo! Abrindo o WhatsApp…",
        description: "Sua mensagem já está pronta. É só tocar em enviar.",
      },
    },
  },

  privacy: {
    path: "privacidade",
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
    disclaimer: "Clínica, profissionais, registros, convênios e depoimentos são fictícios.",
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
    slogan: "Your smile deserves real care",
    description:
      "Dental clinic in Campinas, Brazil, with modern treatments, a specialist team and caring service from the first message to your final smile.",
  },

  seo: {
    title: "Odonto Aurora — Dental clinic in Campinas, Brazil",
    description:
      "Teeth whitening, implants, clear aligners, porcelain veneers and pediatric dentistry in Campinas, Brazil. Book your check-up on WhatsApp.",
    keywords: [
      "dentist in Campinas",
      "dental clinic Campinas",
      "teeth whitening",
      "dental implants",
      "clear aligners",
      "porcelain veneers",
      "pediatric dentistry",
    ],
    ogImageAlt: "Odonto Aurora — Your smile deserves real care",
    serviceSchemaType: "MedicalProcedure",
  },

  contact: {
    ...pt.contact,
    defaultWhatsAppMessage: "Hi, Odonto Aurora! I found you on the website and would like to book a check-up.",
  },

  address: { ...pt.address, reference: "Partner parking right across the street" },

  openingHours: [
    { ...pt.openingHours[0], label: "Monday to Friday", hours: "8am–8pm" },
    { ...pt.openingHours[1], label: "Saturday", hours: "8am–1pm" },
    { ...pt.openingHours[2], label: "Sundays and holidays", hours: "Closed" },
  ],

  responsible: { ...pt.responsible, role: "Clinical director" },

  sections: {
    home: "home",
    treatments: "treatments",
    differentials: "why-us",
    steps: "how-it-works",
    team: "team",
    testimonials: "reviews",
    payment: "insurance",
    faq: "faq",
    booking: "book",
    location: "location",
  },

  nav: [
    { label: "Treatments", href: "#treatments" },
    { label: "Why us", href: "#why-us" },
    { label: "Team", href: "#team" },
    { label: "Reviews", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#location" },
  ],

  ui: {
    skipToContent: "Skip to content",
    headerCta: { label: "Book a check-up", href: "#book" },
    openMenu: "Open menu",
    closeMenu: "Close menu",
    menuTitle: "Menu",
    homeLabel: "Odonto Aurora — home",
    mainNavLabel: "Main navigation",
    whatsappFab: "Chat on WhatsApp",
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
      description: "We couldn't find this page. How about going back home and booking your check-up?",
      cta: { label: "Back to home", href: "/" },
    },
  },

  hero: {
    ...pt.hero,
    badge: "Now accepting new patients",
    title: "Your smile deserves",
    highlight: "real care",
    subtitle:
      "Modern, gentle and unhurried dental care, with a team that explains every step and treats you as a person — not a number.",
    primaryCta: { label: "Book on WhatsApp", href: "#book" },
    secondaryCta: { label: "See treatments", href: "#treatments" },
    trustBadges: [
      { icon: "smile", label: "2,000+ smiles" },
      { icon: "star", label: "4.9 rating on Google" },
      { icon: "heartHandshake", label: "Caring service" },
    ],
    visual: {
      illustration: "tooth",
      cardTitle: "Treatment plan",
      cardSubtitle: "Whitening + cleaning",
      chips: ["Pain-free", "Digital", "Personalised"],
      ratingLabel: "Average rating",
      ratingValue: "4.9",
      nextSlotLabel: "Next available",
      nextSlotValue: "Tomorrow, 9:30am",
    },
  },

  stats: {
    heading: { eyebrow: "By the numbers", title: "Trust built one smile at a time" },
    items: [
      { value: 12, suffix: "years", label: "caring for Campinas" },
      { value: 2000, prefix: "+", label: "patients treated" },
      { value: 8, label: "specialists" },
      { value: 4.9, decimals: 1, suffix: "/5", label: "average rating" },
    ],
  },

  treatments: {
    heading: {
      eyebrow: "Treatments",
      title: "Everything your smile needs, in one place",
      description: "From preventive check-ups to full rehabilitation, with digital technology and an individual plan.",
    },
    items: [
      {
        icon: "sparkles",
        title: "Teeth whitening",
        description:
          "Up to 4 shades whiter with a safe protocol that combines in-office sessions and a take-home tray.",
        highlights: ["Low sensitivity", "Results in 3 weeks"],
        slug: "teeth-whitening",
        details: {
          metaDescription:
            "Teeth whitening in Campinas with a combined protocol (in-office + take-home), low sensitivity and results in about 3 weeks.",
          intro:
            "Teeth up to 4 shades whiter with a protocol that combines in-office sessions and a take-home tray, always with professional follow-up.",
          body: [
            "Before whitening, we check for cavities, gum health and existing fillings — the gel does not change the colour of resins or crowns, so we plan everything for an even result.",
            "The combined protocol uses controlled-concentration gels and desensitisers before and after each stage. In most cases the final result shows in about three weeks and lasts for years with good hygiene and occasional touch-ups.",
          ],
          benefits: [
            "Prior check of cavities, gums and fillings",
            "Combined protocol: in-office + take-home tray",
            "Desensitiser at every stage",
            "Digital tray made from a 3D scan",
          ],
          faq: [
            {
              question: "Does whitening damage the enamel?",
              answer:
                "No, when done with professional supervision and proper gels. The enamel is not worn away; the gel acts on the pigments inside the tooth.",
            },
            {
              question: "How long do the results last?",
              answer:
                "Two to four years on average, depending on habits like coffee, wine and smoking. Short touch-ups with the tray keep the shade.",
            },
            {
              question: "Can pregnant women whiten their teeth?",
              answer: "We recommend postponing whitening during pregnancy and breastfeeding, as a precaution.",
            },
          ],
        },
      },
      {
        icon: "shieldCheck",
        title: "Dental implants",
        description: "Titanium implants to replace missing teeth, planned with digital CT scans.",
        highlights: ["Guided surgery", "3D planning"],
        slug: "dental-implants",
        details: {
          metaDescription:
            "Dental implants in Campinas with CT-based planning, guided surgery and complete follow-up at Odonto Aurora.",
          intro:
            "Replacing missing teeth with titanium implants, digitally planned for a faster, more precise and more comfortable surgery.",
          body: [
            "Planning starts with a CT scan and an intraoral scan. With this data we position the implant virtually and 3D-print a surgical guide that takes the drill exactly where planned.",
            "Guided surgery is usually shorter, with a smoother recovery. Once the implant has bonded to the bone, we fit the final ceramic crown, with a shade and shape designed for your smile.",
          ],
          benefits: [
            "Digital planning with CT scan",
            "Guided, less invasive surgery",
            "Ceramic crown with custom shade",
            "Scheduled follow-ups after placement",
          ],
          faq: [
            {
              question: "Can anyone get an implant?",
              answer:
                "Most adults can. We assess bone, gums and conditions such as diabetes and smoking, which may require extra care.",
            },
            {
              question: "How long does treatment take?",
              answer:
                "Usually 3 to 6 months between surgery and the final crown. In some cases a temporary crown can be fitted on the same day.",
            },
            {
              question: "Does it hurt?",
              answer: "Surgery is done under local anaesthesia. Recovery is usually managed with simple painkillers.",
            },
          ],
        },
      },
      {
        icon: "orthodontics",
        title: "Braces and aligners",
        description: "Aesthetic fixed braces or clear aligners, with a 3D simulation of the result before you start.",
        highlights: ["3D simulation", "Clear aligners"],
        slug: "braces-and-aligners",
        details: {
          metaDescription:
            "Aesthetic braces and clear aligners in Campinas, with a 3D simulation of the result before treatment starts.",
          intro:
            "Straight teeth with aesthetic fixed braces or clear aligners — and you see a 3D simulation of the result before you begin.",
          body: [
            "At your assessment we scan your teeth in 3D and plan every movement. The simulation shows how your smile will look and how many stages the treatment should take.",
            "Aligners are clear trays changed every one or two weeks that you can remove to eat. For more complex cases we recommend fixed braces with aesthetic, nearly invisible brackets.",
          ],
          benefits: [
            "3D simulation before starting",
            "Clear, removable aligners",
            "Aesthetic brackets for complex cases",
            "Retainer included at the end",
          ],
          faq: [
            {
              question: "Can adults wear braces?",
              answer: "Yes, there is no age limit. Many adults choose aligners because they are discreet.",
            },
            {
              question: "How many hours a day do I wear aligners?",
              answer: "About 22 hours a day, taking them out only to eat and brush your teeth.",
            },
            {
              question: "Does it hurt?",
              answer:
                "You may feel slight pressure in the first days of each new tray, a sign your teeth are moving. It passes quickly.",
            },
          ],
        },
      },
      {
        icon: "gem",
        title: "Porcelain veneers",
        description: "Ultra-thin porcelain veneers to correct colour, shape and alignment with a natural look.",
        highlights: ["Smile preview", "Minimal preparation"],
        slug: "porcelain-veneers",
        details: {
          metaDescription: "Porcelain veneers with a smile preview and minimal preparation at Odonto Aurora, Campinas.",
          intro:
            "Ultra-thin porcelain veneers to correct colour, shape and small misalignments with a natural appearance.",
          body: [
            "Before any preparation we do a smile preview: we apply temporary resin over your teeth so you can see and approve the new smile in the mirror and in photos.",
            "Once the plan is approved, the veneers are made in ceramic and bonded with minimal or no preparation. Porcelain doesn't stain and reflects light like natural enamel.",
          ],
          benefits: [
            "Smile preview before starting",
            "Stain-resistant porcelain",
            "Minimal or no tooth reduction",
            "Shape planned with photos and video",
          ],
          faq: [
            {
              question: "How long do they last?",
              answer: "With good hygiene and regular check-ups, more than 10 years.",
            },
            {
              question: "Do my teeth need to be reduced?",
              answer: "Often reduction is minimal or none at all. This is decided during planning, case by case.",
            },
            {
              question: "Will they look artificial?",
              answer:
                "Not when well planned. The smile preview exists precisely to adjust shade and shape to your face before the final version.",
            },
          ],
        },
      },
      {
        icon: "smilePlus",
        title: "Cleaning and prevention",
        description: "Professional cleaning, fluoride and a full check-up to keep your oral health on track.",
        highlights: ["Six-monthly check-up", "Hygiene coaching"],
        slug: "cleaning-and-prevention",
        details: {
          metaDescription:
            "Dental cleaning, fluoride and a full check-up in Campinas. Prevention to keep your oral health on track at Odonto Aurora.",
          intro:
            "Professional cleaning, fluoride and a full check-up to catch small problems before they become bigger treatments.",
          body: [
            "The visit includes tartar and plaque removal, polishing, a gum assessment and, when needed, X-rays. We also review old fillings and signs of teeth grinding.",
            "You leave with brushing and flossing tips tailored to you — and your next visit already booked, usually every six months.",
          ],
          benefits: [
            "Tartar removal and polishing",
            "Gum and filling assessment",
            "Fluoride when indicated",
            "Personalised hygiene coaching",
          ],
          faq: [
            {
              question: "How often should I have a cleaning?",
              answer:
                "For most people, every six months. People with gum disease or braces may need shorter intervals.",
            },
            {
              question: "Does cleaning hurt?",
              answer: "Usually not. With a lot of tartar or sensitive gums, we use a topical anaesthetic.",
            },
            {
              question: "Does my dental plan cover it?",
              answer: "Most dental plans cover cleanings and check-ups. Confirm on WhatsApp with your plan details.",
            },
          ],
        },
      },
      {
        icon: "baby",
        title: "Pediatric dentistry",
        description:
          "Playful, welcoming care for children, building a calm relationship with the dentist from an early age.",
        highlights: ["Child-friendly room", "Fear-free first visit"],
        slug: "pediatric-dentistry",
        details: {
          metaDescription:
            "Children's dentist in Campinas: playful and welcoming care for babies and kids at Odonto Aurora.",
          intro:
            "Care designed for children, with time, play and lots of conversation — so visiting the dentist feels calm from early on.",
          body: [
            "The first visit is for getting used to things: your child meets the room, the chair and the instruments, without rushing. We explain everything in simple words and respect each child's pace.",
            "We also guide parents on brushing, diet, pacifiers and habits that affect the development of teeth and bite.",
          ],
          benefits: [
            "Get-to-know-us visit with no procedures",
            "Playful, welcoming environment",
            "Guidance for parents on habits and diet",
            "Prevention with fluoride and sealants",
          ],
          faq: [
            {
              question: "At what age should my child see a dentist?",
              answer: "When the first tooth appears, or by 1 year of age.",
            },
            {
              question: "What if my child cries?",
              answer:
                "That's normal at first. That's why we do get-to-know-us visits and never force procedures that aren't urgent.",
            },
            {
              question: "Can parents stay in the room?",
              answer: "Yes, parents or guardians stay in the room for the whole visit.",
            },
          ],
        },
      },
    ],
    cta: { label: "I want a check-up", href: "#book" },
    cardLinkLabel: "Learn more",
    basePath: "treatments",
    page: {
      breadcrumbHome: "Home",
      breadcrumbLabel: "Treatments",
      benefitsTitle: "What's included",
      faqTitle: "Questions about this treatment",
      relatedTitle: "Other treatments",
      cta: {
        title: "Want to know if it's right for you?",
        description: "Book a check-up on WhatsApp and ask our team anything.",
        button: { label: "Book a check-up", href: "#book" },
      },
    },
  },

  differentials: {
    heading: {
      eyebrow: "Why Aurora",
      title: "Details that make a difference to your experience",
      description:
        "We combine skill, technology and warmth so every visit feels easy — even for people afraid of the dentist.",
    },
    items: [
      {
        icon: "heartHandshake",
        title: "Unhurried appointments",
        description: "Time to listen, explain and answer every question. You understand each step before you decide.",
        size: "wide",
      },
      {
        icon: "scanLine",
        title: "Digital technology",
        description: "3D intraoral scanning, no uncomfortable impressions.",
      },
      {
        icon: "clipboardList",
        title: "Transparent quotes",
        description: "A written plan with clear prices and timelines. No surprises.",
      },
      {
        icon: "microscope",
        title: "Strict biosafety",
        description: "Sterilisation with every instrument tracked, cycle by cycle.",
      },
      {
        icon: "clock",
        title: "Extended hours",
        description: "Open until 8pm on weekdays and on Saturday mornings, to fit your routine.",
      },
    ],
  },

  steps: {
    heading: {
      eyebrow: "How it works",
      title: "From first message to new smile",
      description: "A simple, transparent path at your own pace.",
    },
    stepLabel: "Step",
    items: [
      {
        icon: "messages",
        title: "Get in touch",
        description: "Send us a WhatsApp message or fill in the form. We reply within minutes during business hours.",
      },
      {
        icon: "stethoscope",
        title: "Full assessment",
        description: "Clinical exam, photos and a digital scan to understand your oral health and your goals.",
      },
      {
        icon: "clipboardList",
        title: "Personalised plan",
        description: "You get a written treatment plan with stages, timelines and payment options.",
      },
      {
        icon: "smile",
        title: "Treatment and follow-up",
        description: "We start your care comfortably and follow up with scheduled visits to keep the results.",
      },
    ],
  },

  team: {
    heading: {
      eyebrow: "Team",
      title: "Specialists who look after you",
      description: "Professionals in continuous training with one shared goal: making dental care easy and effective.",
    },
    items: [
      {
        ...pt.team.items[0],
        role: "Implants and prosthodontics",
        bio: "Clinical director, specialist in oral rehabilitation and guided surgery.",
      },
      {
        ...pt.team.items[1],
        role: "Orthodontics and aligners",
        bio: "Plans digital orthodontic treatments with a 3D simulation of the result.",
      },
      {
        ...pt.team.items[2],
        role: "Pediatric and cosmetic dentistry",
        bio: "Combines caring pediatric dentistry with minimally invasive cosmetic work.",
      },
    ],
  },

  testimonials: {
    heading: { eyebrow: "Reviews", title: "Patients who smile with Aurora recommend it" },
    summary: "4.9 average rating from patient reviews",
    items: [
      {
        name: "Camila R.",
        detail: "Teeth whitening",
        quote:
          "I was always shy about smiling in photos. In three weeks the result looked natural and I felt no sensitivity at all.",
        rating: 5,
      },
      {
        name: "Eduardo M.",
        detail: "Implant",
        quote:
          "They explained every step calmly and the digital planning made me feel very confident. Smooth surgery, quick recovery.",
        rating: 5,
      },
      {
        name: "Patrícia L.",
        detail: "Theo's mom, 6 years old",
        quote: "My son was terrified of dentists. Now he asks when he's going back! Dr. Marina is incredibly patient.",
        rating: 5,
      },
      {
        name: "Bruno S.",
        detail: "Clear aligners",
        quote: "Seeing the 3D simulation before starting made all the difference. Nobody notices I'm wearing aligners.",
        rating: 5,
      },
      {
        name: "Juliana F.",
        detail: "Porcelain veneers",
        quote:
          "I did the smile preview first and approved the shape. It turned out exactly as I imagined, very natural.",
        rating: 5,
      },
      {
        name: "Sérgio A.",
        detail: "Cleaning and prevention",
        quote: "Punctual, spotless clinic and evening hours that fit my routine. I'm a loyal patient now.",
        rating: 4,
      },
    ],
  },

  payment: {
    ...pt.payment,
    heading: {
      eyebrow: "Insurance and payment",
      title: "Caring for your smile fits your budget",
      description: "We accept the main dental plans and offer easy payment terms for private treatments.",
    },
    insurancesTitle: "Accepted dental plans",
    methodsTitle: "Payment methods",
    methods: [
      { icon: "qrCode", label: "Pix" },
      { icon: "creditCard", label: "Credit card" },
      { icon: "banknote", label: "Debit and cash" },
    ],
    installments: {
      title: "Up to 12 interest-free instalments",
      description: "on credit card, for private treatments.",
    },
    note: "Fictitious dental plans, for demonstration only. Check your plan's coverage.",
  },

  faq: {
    heading: { eyebrow: "FAQ", title: "Questions we hear all the time" },
    contactPrompt: "Didn't find your question?",
    contactCta: { label: "Talk to us on WhatsApp", href: "#book" },
    items: [
      {
        question: "Is the first assessment free?",
        answer:
          "The first assessment includes a clinical exam, photos and guidance on treatment options. Ask about current conditions on WhatsApp — for patients with an accepted dental plan, it's covered by the plan.",
      },
      {
        question: "Does whitening make teeth sensitive?",
        answer:
          "We use low-concentration gels and desensitisers before and after each session. Most patients report mild or no sensitivity.",
      },
      {
        question: "How long does aligner treatment take?",
        answer:
          "It depends on the case, but usually between 6 and 18 months. At your assessment you'll see the 3D simulation with the estimated number of stages.",
      },
      {
        question: "Does an implant hurt?",
        answer:
          "The procedure is done under local anaesthesia with guided planning, which shortens surgery time. Recovery is usually smooth and managed with simple medication.",
      },
      {
        question: "When should children first see a dentist?",
        answer:
          "We recommend the first visit when the first tooth appears, or by age 1. The earlier, the more natural the relationship with oral care.",
      },
      {
        question: "Do you handle emergencies?",
        answer:
          "Yes. If you're in pain or had an accident, message us on WhatsApp: we fit in same-day emergency visits whenever possible.",
      },
      {
        question: "Which payment methods do you accept?",
        answer: "Pix, debit and credit cards (up to 12 instalments) and cash. We also accept several dental plans.",
      },
      {
        question: "Is there parking?",
        answer: "Yes, there is partner parking across the street and the reception is fully accessible.",
      },
    ],
  },

  booking: {
    heading: {
      eyebrow: "Booking",
      title: "Book your check-up in under a minute",
      description: "Fill in your details and continue the conversation on WhatsApp with our reception team.",
    },
    benefits: [
      "Quick reply during business hours",
      "Morning, afternoon and evening slots",
      "No commitment: ask your questions first",
    ],
    form: {
      ...pt.booking.form,
      name: { label: "Full name", placeholder: "What should we call you?" },
      phone: { label: "WhatsApp", placeholder: "(19) 99999-9999" },
      treatment: {
        label: "Treatment of interest",
        placeholder: "Select an option",
        options: [
          { value: "avaliacao", label: "General check-up" },
          { value: "clareamento", label: "Teeth whitening" },
          { value: "implantes", label: "Dental implants" },
          { value: "ortodontia", label: "Braces / aligners" },
          { value: "lentes", label: "Porcelain veneers" },
          { value: "limpeza", label: "Cleaning and prevention" },
          { value: "odontopediatria", label: "Pediatric dentistry" },
        ],
      },
      period: {
        label: "Best time",
        options: [
          { value: "manha", label: "Morning" },
          { value: "tarde", label: "Afternoon" },
          { value: "noite", label: "Evening" },
        ],
      },
      message: { label: "Message (optional)", placeholder: "Tell us a little about what you're looking for…" },
      submit: "Send on WhatsApp",
      privacy: "Your details are only used to contact you about your appointment. Learn more in our",
      errors: {
        nameMin: "Please enter your name (at least 3 letters).",
        nameMax: "Name is too long.",
        phone: "Please enter a valid WhatsApp number with area code.",
        treatment: "Please select a treatment.",
        period: "Please choose the best time.",
        messageMax: "The message can have up to 500 characters.",
      },
      whatsappMessage: {
        intro: "Hi, Odonto Aurora! I'd like to book a check-up.",
        fields: { name: "Name", phone: "WhatsApp", treatment: "Treatment", period: "Best time", message: "Message" },
      },
      toast: { title: "All set! Opening WhatsApp…", description: "Your message is ready. Just tap send." },
    },
  },

  privacy: {
    path: "privacy",
    title: "Privacy policy",
    description:
      "How the Odonto Aurora website handles your personal data, in plain language and in line with Brazil's LGPD.",
    updatedLabel: "Last updated",
    updatedAt: "November 3, 2026",
    intro:
      "This policy explains which data this website uses, why, and what your rights are under Brazil's General Data Protection Law (LGPD, Law No. 13,709/2018). In short: the site has no database, uses no cookies and does not track you.",
    sections: [
      {
        heading: "Who is responsible",
        paragraphs: [
          "The data controller is Odonto Aurora, Av. Horizonte Azul, 742 – Room 12, Jardim Aurora, Campinas – SP, Brazil, under the clinical responsibility of Dr. Helena Duarte (CRO-SP 000.001). Fictitious clinic and data, created for a portfolio.",
        ],
      },
      {
        heading: "What we collect",
        paragraphs: [
          "Only what you type in the booking form: name, WhatsApp number, treatment of interest, best time and, optionally, a message.",
          "This data is not sent to any server of ours: your browser builds a message and opens WhatsApp. We only receive the request if you tap send in the app.",
        ],
      },
      {
        heading: "Health data",
        paragraphs: [
          "The treatment of interest and your message may reveal information about your oral health, which the LGPD treats as sensitive data (art. 11). That's why we ask only for the minimum needed to book — please don't send exams or clinical details here.",
          "At the clinic, dental records are processed for health care purposes, under professional confidentiality and for the period required by the Brazilian Federal Council of Dentistry.",
        ],
      },
      {
        heading: "How we use it",
        paragraphs: [
          "To reply to you and book your assessment (legal basis: steps taken at your request prior to a contract, LGPD art. 7, V, and health protection, art. 11, II, f). We don't use your data for advertising and we don't sell or share it with third parties.",
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
          "To do so, contact us at contato@odontoaurora.com.br or on WhatsApp +55 19 99999-9999. You may also file a complaint with Brazil's National Data Protection Authority (ANPD).",
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
      description: "Easy access, partner parking and an accessible reception.",
    },
    addressTitle: "Address",
    hoursTitle: "Opening hours",
    contactTitle: "Contact",
    directionsCta: "Get directions",
    mapCaption: "Campinas – SP, Brazil",
  },

  footer: {
    about: "Modern, caring dentistry in Campinas. We look after your smile with skill, technology and warmth.",
    linksTitle: "Navigation",
    contactTitle: "Contact",
    socialTitle: "Social media",
    rights: "All rights reserved.",
    disclaimer: "Clinic, professionals, registrations, dental plans and reviews are fictitious.",
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
