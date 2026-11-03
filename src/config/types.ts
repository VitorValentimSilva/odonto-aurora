import type { IllustrationName } from "@/components/illustrations";
import type { IconName } from "@/lib/icons";

/** Foto opcional (coloque o arquivo em /public/images e aponte o caminho aqui). */
export type OptionalImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type NavItem = { label: string; href: string };

export type CTA = { label: string; href: string };

export type SectionHeading = {
  /** Texto pequeno acima do título (eyebrow). */
  eyebrow: string;
  title: string;
  description?: string;
};

export type Stat = {
  value: number;
  /** Casas decimais exibidas (ex.: 4,9 → 1). */
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

export type Treatment = {
  icon: IconName;
  title: string;
  description: string;
  highlights: string[];
  /** Preço opcional exibido no card (ex.: cardápio). */
  price?: string;
};

export type Differential = {
  icon: IconName;
  title: string;
  description: string;
  /** "wide" ocupa duas colunas no bento grid (desktop). */
  size?: "default" | "wide";
};

export type Step = { icon: IconName; title: string; description: string };

export type TeamMember = {
  name: string;
  initials: string;
  role: string;
  registry: string;
  bio: string;
  photo?: OptionalImage;
};

export type Testimonial = {
  name: string;
  detail: string;
  quote: string;
  rating: number;
};

export type FaqItem = { question: string; answer: string };

export type OpeningHours = {
  label: string;
  hours: string;
  /** schema.org: dias da semana (ex.: ["Monday", "Tuesday"]). */
  days: string[];
  opens: string;
  closes: string;
};

export type SocialLink = {
  icon: IconName;
  label: string;
  href: string;
  handle: string;
};

export type FormOption = { value: string; label: string };

export type SiteConfig = {
  /** URL de produção (usada em SEO, sitemap e Open Graph). */
  url: string;
  locale: string;
  lang: string;

  brand: {
    name: string;
    shortName: string;
    slogan: string;
    description: string;
    /** Tipo schema.org do negócio (ex.: "Dentist", "Restaurant", "PetStore"). */
    schemaType: string;
    priceRange: string;
    /** schema.org `servesCuisine` (restaurantes). */
    servesCuisine?: string[];
    /** Logo: glifo branco (path SVG em viewBox 0 0 40 40) + traço de destaque opcional. */
    logo: { glyph: string; accent?: string };
  };

  /** Cores em hex para o que não lê CSS: imagem Open Graph, ícones gerados e manifest. */
  theme: {
    primary: string;
    primaryDark: string;
    warm: string;
    warmLight: string;
    background: string;
    backgroundTint: string;
    foreground: string;
  };

  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogImageAlt: string;
    /** Tipo schema.org de cada item de `treatments` (ex.: "MedicalProcedure", "MenuItem"). */
    serviceSchemaType: string;
  };

  contact: {
    /** Somente dígitos, com DDI + DDD (ex.: 5519999999999). */
    whatsapp: string;
    whatsappDisplay: string;
    whatsappLabel: string;
    phone: string;
    email: string;
    defaultWhatsAppMessage: string;
  };

  address: {
    street: string;
    district: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    full: string;
    reference?: string;
  };

  openingHours: OpeningHours[];
  social: SocialLink[];

  responsible: { name: string; role: string; registry: string };

  author: { name: string; url: string };

  nav: NavItem[];

  ui: {
    skipToContent: string;
    headerCta: CTA;
    openMenu: string;
    closeMenu: string;
    menuTitle: string;
    homeLabel: string;
    mainNavLabel: string;
    whatsappFab: string;
    starsLabel: (rating: number) => string;
    externalLinkHint: string;
    pauseAnimation: string;
    notifications: string;
    closeNotification: string;
    playAnimation: string;
  };

  hero: {
    badge: string;
    title: string;
    highlight: string;
    titleAfter?: string;
    subtitle: string;
    primaryCta: CTA;
    secondaryCta: CTA;
    trustBadges: { icon: IconName; label: string }[];
    visual: {
      /** Ilustração SVG do hero (ver `src/components/illustrations`). */
      illustration: IllustrationName;
      cardTitle: string;
      cardSubtitle: string;
      chips: string[];
      ratingLabel: string;
      ratingValue: string;
      nextSlotLabel: string;
      nextSlotValue: string;
    };
    image?: OptionalImage;
  };

  stats: { heading: SectionHeading; items: Stat[] };
  treatments: { heading: SectionHeading; items: Treatment[]; cta: CTA; cardCta: CTA };
  differentials: { heading: SectionHeading; items: Differential[] };
  steps: { heading: SectionHeading; items: Step[]; stepLabel: string };
  team: { heading: SectionHeading; items: TeamMember[] };
  testimonials: {
    heading: SectionHeading;
    items: Testimonial[];
    summary: string;
  };
  payment: {
    heading: SectionHeading;
    insurancesTitle: string;
    /** Ícone do card da lista (padrão: shieldCheck). */
    insurancesIcon?: IconName;
    insurances: string[];
    methodsTitle: string;
    methods: { icon: IconName; label: string }[];
    /** Card de destaque (padrão de ícone: creditCard). */
    installments: { title: string; description: string; icon?: IconName };
    note: string;
  };
  faq: { heading: SectionHeading; items: FaqItem[]; contactPrompt: string; contactCta: CTA };

  booking: {
    heading: SectionHeading;
    benefits: string[];
    form: {
      name: { label: string; placeholder: string };
      phone: { label: string; placeholder: string };
      treatment: { label: string; placeholder: string; options: FormOption[] };
      period: { label: string; options: FormOption[] };
      message: { label: string; placeholder: string };
      submit: string;
      privacy: string;
      errors: {
        nameMin: string;
        nameMax: string;
        phone: string;
        treatment: string;
        period: string;
        messageMax: string;
      };
      /** Monta a mensagem enviada ao WhatsApp. */
      buildMessage: (data: {
        name: string;
        phone: string;
        treatment: string;
        period: string;
        message?: string;
      }) => string;
      toast: { title: string; description: string };
    };
  };

  location: {
    heading: SectionHeading;
    addressTitle: string;
    hoursTitle: string;
    contactTitle: string;
    directionsCta: string;
    mapCaption: string;
  };

  footer: {
    about: string;
    linksTitle: string;
    contactTitle: string;
    socialTitle: string;
    rights: string;
    disclaimer: string;
    portfolioPrefix: string;
    backToTop: string;
  };
};
