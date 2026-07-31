import Image from "next/image";
import Link from "next/link";

import { Routes } from "@/constants/routes";

import Motion from "@/components/motion";
import { Button } from "@/components/ui/button";

import { Service } from "@/types";

import ServiceContent from "./ServiceContent";
import ServiceSidebar from "./ServiceSidebar";

const ServiceDetails = ({ service }: { service: Service }) => {
  const { title, imgSrc, descriptions = [], bulletPoints = [] } = service;

  return (
    <section className="padding-y bg-white">
      <div className="container">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-x-10 gap-y-8">
          <aside className="xl:col-span-4 order-2 xl:order-1">
            <ServiceSidebar service={service} />
          </aside>

          <article className="xl:col-span-8 order-1 xl:order-2">
            <div
              id="content"
              className="absolute -top-28 lg:-top-32"
            />

            {imgSrc && (
              <Image
                src={imgSrc}
                alt={title}
                width={1920}
                height={1080}
                className="w-full h-56 sm:h-80 lg:h-112 object-cover rounded-lg border border-gray-100"
              />
            )}

            <h2 className="mt-8 text-3xl lg:text-4xl font-bold">{title}</h2>

            <div className="mt-4 space-y-6 text-gray-text2 text-base">
              <ServiceContent {...{ bulletPoints, descriptions }} />
            </div>

            <Motion className="flex flex-wrap gap-4 mt-10">
              <Link href={Routes.CONTACT}>
                <Button variant="secondary">Contact Us</Button>
              </Link>
            </Motion>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
