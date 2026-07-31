import { faArrowRight, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

import { Routes } from "@/constants/routes";

import { Service } from "@/types";

const ServiceCard = ({ item }: { item: Service }) => {
  return (
    <Link
      href={`${Routes.SERVICES}/${item.slug}`}
      className="group flex flex-col h-full rounded-lg overflow-hidden shadow-feature"
    >
      <div className="relative h-[260px] lg:h-[300px] w-full overflow-hidden">
        <Image
          src={item.imgSrc}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute right-6 top-full -translate-y-1/2 flex items-center justify-center rounded w-16 lg:w-20 h-16 lg:h-20 bg-primary-dark transition-colors duration-300 group-hover:bg-secondary">
          <Image
            src={item.icon}
            alt={item.title}
            width={48}
            height={48}
            className="w-10 lg:w-12 h-10 lg:h-12 object-contain invert"
          />
        </div>
      </div>

      <div className="px-6 pb-6 flex flex-col flex-1">
        <h3 className="mt-10 mb-3 font-semibold text-primary-dark">{item.title}</h3>

        <p className="mb-4 text-sm text-gray-700">{item.description}</p>

        <ul className="border-b border-gray-200 pb-5 mb-5 space-y-2">
          {item.bulletPoints.map((point: string) => (
            <li
              key={point}
              className="flex gap-2 items-start"
            >
              <FontAwesomeIcon
                icon={faCheck}
                className="w-3 text-primary mt-1"
              />
              <span className="text-sm text-primary-dark">{point}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary-dark group-hover:text-primary transition-colors duration-300 relative w-fit">
          Explore More
          <FontAwesomeIcon
            icon={faArrowRight}
            className="-rotate-45 w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-0"
          />
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
