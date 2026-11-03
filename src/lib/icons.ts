import {
  Accessibility,
  Award,
  Baby,
  BadgeCheck,
  Banknote,
  CalendarCheck,
  CalendarClock,
  ClipboardList,
  Clock,
  Coffee,
  CreditCard,
  Gem,
  HeartHandshake,
  HeartPulse,
  Mail,
  MapPin,
  MessagesSquare,
  Microscope,
  Phone,
  QrCode,
  ScanLine,
  ShieldCheck,
  Smile,
  SmilePlus,
  Sparkles,
  Star,
  Stethoscope,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";

import { GitHubIcon, InstagramIcon, OrthodonticsIcon, WhatsAppIcon } from "@/components/icons/brand-icons";

type IconComponent = LucideIcon | ComponentType<SVGProps<SVGSVGElement>>;

/**
 * Mapa de ícones disponíveis para o `site.ts`.
 * O conteúdo referencia ícones por nome (string), assim o arquivo de
 * configuração continua sendo dados puros e fácil de trocar.
 */
export const icons = {
  accessibility: Accessibility,
  award: Award,
  baby: Baby,
  badgeCheck: BadgeCheck,
  banknote: Banknote,
  calendarCheck: CalendarCheck,
  calendarClock: CalendarClock,
  clipboardList: ClipboardList,
  clock: Clock,
  coffee: Coffee,
  creditCard: CreditCard,
  gem: Gem,
  github: GitHubIcon,
  heartHandshake: HeartHandshake,
  heartPulse: HeartPulse,
  instagram: InstagramIcon,
  mail: Mail,
  mapPin: MapPin,
  orthodontics: OrthodonticsIcon,
  messages: MessagesSquare,
  microscope: Microscope,
  phone: Phone,
  qrCode: QrCode,
  scanLine: ScanLine,
  shieldCheck: ShieldCheck,
  smile: Smile,
  smilePlus: SmilePlus,
  sparkles: Sparkles,
  star: Star,
  stethoscope: Stethoscope,
  users: Users,
  whatsapp: WhatsAppIcon,
} satisfies Record<string, IconComponent>;

export type IconName = keyof typeof icons;

export function getIcon(name: IconName): IconComponent {
  return icons[name];
}
