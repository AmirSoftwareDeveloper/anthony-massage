import NextImage from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import type { TeamMember } from "@/types";

import SOCIAL_LINKS from "@/constants/socialLinks";

const TeamGrid = ({ members }: { members: TeamMember[] }) => (
  <div className="exp-team-grid">
    {members.map((member) => {
      const socials = member.socials ?? SOCIAL_LINKS;

      return (
        <article
          className="exp-team-card"
          key={member.name + member.image}
        >
          <div className="exp-team-photo">
            <NextImage
              src={member.image}
              alt={member.imageAlt ?? member.name}
              fill
              sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 100vw"
              className="object-cover"
            />
          </div>

          <h3 className="exp-team-name">{member.name}</h3>
          <p className="exp-team-role">{member.role}</p>

          {socials.length > 0 && (
            <ul className="exp-team-socials">
              {socials.map((social) => (
                <li key={social.name}>
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on ${social.name}`}
                  >
                    <FontAwesomeIcon
                      icon={social.icon}
                      className="exp-team-social-icon"
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
