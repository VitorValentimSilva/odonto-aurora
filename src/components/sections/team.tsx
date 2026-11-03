import { BadgeCheck } from "lucide-react";
import Image from "next/image";

import { Container } from "@/components/container";
import { HoverCard } from "@/components/motion/hover-card";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { getSite } from "@/lib/i18n";
import type { TeamMember } from "@/config/types";

const gradients = [
  "from-[var(--avatar-1a)] to-[var(--avatar-1b)]",
  "from-[var(--avatar-2a)] to-[var(--avatar-2b)]",
  "from-[var(--avatar-3a)] to-[var(--avatar-3b)]",
];

function Avatar({ member, index }: { member: TeamMember; index: number }) {
  if (member.photo) {
    return (
      <Image
        src={member.photo.src}
        alt={member.photo.alt}
        width={member.photo.width}
        height={member.photo.height}
        sizes="96px"
        className="size-24 rounded-[1.75rem] object-cover shadow-lift"
      />
    );
  }
  return (
    <div
      role="img"
      aria-label={member.name}
      className={`relative grid size-24 place-items-center overflow-hidden rounded-[1.75rem] bg-gradient-to-br ${gradients[index % gradients.length]} shadow-lift`}
    >
      <svg aria-hidden="true" viewBox="0 0 96 96" className="absolute inset-0 size-full">
        <circle cx="80" cy="14" r="26" fill="white" fillOpacity="0.14" />
        <path d="M-4 80a52 52 0 0 1 104 0" fill="none" stroke="white" strokeOpacity="0.22" strokeWidth="2" />
      </svg>
      <span aria-hidden="true" className="relative font-heading text-3xl font-extrabold tracking-tight text-white">
        {member.initials}
      </span>
    </div>
  );
}

export async function Team() {
  const site = await getSite();
  const { team } = site;
  return (
    <section id={site.sections.team} aria-labelledby={`${site.sections.team}-title`} className="bg-secondary/50 py-20 sm:py-24">
      <Container>
        <SectionHeading id={`${site.sections.team}-title`} {...team.heading} />
        <Stagger as="ul" className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {team.items.map((member, i) => (
            <StaggerItem as="li" key={member.name} className="h-full sm:last:col-span-2 sm:last:mx-auto sm:last:w-1/2 lg:last:col-span-1 lg:last:w-full">
              <HoverCard className="flex h-full flex-col items-center rounded-3xl border bg-card p-7 text-center shadow-soft">
                <Avatar member={member} index={i} />
                <h3 className="mt-5 text-xl font-bold">{member.name}</h3>
                <p className="mt-1 font-medium text-primary">{member.role}</p>
                <p className="mt-3 text-sm text-muted-foreground">{member.bio}</p>
                <p className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-semibold text-foreground/75">
                  <BadgeCheck className="size-3.5 text-primary" aria-hidden="true" />
                  {member.registry}
                </p>
              </HoverCard>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
