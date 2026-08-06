import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NextImage from "next/image";
import Link from "next/link";

import SOCIAL_LINKS from "@/constants/socialLinks";

import type { TeamMember } from "@/types";

const TeamGrid = ({ members }: { members: TeamMember[] }) => (
  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-8">
    {members.map((member) => {
      const socials = member.socials ?? SOCIAL_LINKS;

      return (
        <article key={member.name + member.image}>
          <div className="relative mb-4 aspect-[4/5] overflow-hidden rounded-xl border border-exp-tan/18 bg-exp-tan/7">
            <NextImage
              src={member.image}
              alt={member.imageAlt ?? member.name}
              fill
              sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 100vw"
              className="object-cover"
            />
          </div>

          <h3 className="mb-1 font-display text-xl font-medium italic leading-snug text-exp-cream">{member.name}</h3>
          <p className="mb-3.5 text-sm font-light text-exp-muted">{member.role}</p>

          {socials.length > 0 && (
            <ul className="m-0 flex list-none gap-3.5 p-0">
              {socials.map((social) => (
                <li key={social.name}>
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on ${social.name}`}
                    className="inline-flex size-8 items-center justify-center rounded-full border border-exp-tan/22 text-exp-tan transition-colors duration-250 hover:border-exp-glow hover:bg-exp-glow hover:text-exp-dusk focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-exp-gold"
                  >
                    <FontAwesomeIcon
                      icon={social.icon}
                      className="size-3.5"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </article>
      );
    })}
  </div>
);

export default TeamGrid;
