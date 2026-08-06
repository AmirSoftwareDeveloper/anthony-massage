"use client";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import { Routes } from "@/constants/routes";
import services from "@/constants/services";

import Motion from "@/components/motion";
import Title from "@/components/title";

import ServiceCard from "./ServiceCard";

const ServicesList = () => {
  return (
    <section className="padding-y pt-10">
      <div className="container">
        <div className="flex justify-between flex-wrap items-center gap-4 mb-6">
          <Title
            subTitle="Our Services"
            title="Reliable Solutions Tailored to Your Needs With Speed, Quality, and Care."
            className="max-sm:mb-0!"
          />
        </div>

        <Motion className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item) => (
            <ServiceCard
              key={item.slug}
              item={item}
            />
          ))}
        </Motion>

        <p className="mx-auto max-w-3xl text-center mt-10 text-gray-700">
          <Link
            href={Routes.CONTACT}
            className="inline-flex items-center gap-1 font-medium text-primary hover:text-secondary transition-colors duration-300"
          >
            Request a quote
            <FontAwesomeIcon
              icon={faArrowRight}
              className="-rotate-45 w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-0"
            />
          </Link>
        </p>
      </div>
    </section>
  );
};

export default ServicesList;
