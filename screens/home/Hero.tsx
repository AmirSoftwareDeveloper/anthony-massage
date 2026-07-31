import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

import formatPhone from "@/utils/formatPhone";

import { INFO } from "@/constants";
import { Routes } from "@/constants/routes";

import Title from "@/components/title";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="flex flex-col min-h-[calc(100dvh-138px)] sm:min-h-[calc(100dvh-150px)] lg:min-h-[calc(100dvh-145px)] relative">
      <section className="relative flex flex-col overflow-hidden flex-1 min-h-0">
        <div className="absolute inset-0 z-0">
          <Image
            src={"/images/hero/1.jpg"}
            alt=""
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-linear-to-r from-primary-dark/90 sm:from-primary-dark to-primary-dark/70 sm:via-primary-dark/50 sm:to-primary-dark/30 " />
        </div>

        <div className="relative z-10 flex flex-col justify-center flex-1 container py-14 overflow-y-auto">
          <div className="w-full md:max-w-[80%] lg:max-w-[60%] xl:max-w-[55%]">
            <Title
              subTitle=""
              white
              className="mb-3!"
            />

            <h1 className="font-heading text-white font-bold leading-tight mb-3"></h1>

            <p className="text-white/90 text-sm sm:text-base max-w-2xl mb-5 md:mb-7"></p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6">
              <Link href={Routes.CONTACT}>
                <Button>Request a Quote</Button>
              </Link>

              <Link
                href={`tel:${formatPhone(INFO.PHONE_NUMBER)}`}
                className="flex items-center gap-3 group"
              >
                <div className="w-12 h-12 rounded-lg bg-white group-hover:bg-primary-soft border border-primary/30 flex items-center justify-center shrink-0 transition-colors duration-300">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="w-4 h-4 text-primary transition-colors duration-300 group-hover:text-white"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-instrument text-gray-300">Call Us Now</span>
                  <span className="font-heading font-bold text-white text-base group-hover:text-primary-soft transition-colors duration-300">
                    {INFO.PHONE_NUMBER}
                  </span>
                </div>
              </Link>
            </div>

            <div className="flex items-center gap-y-3 gap-x-6 flex-wrap mt-6 pt-6 border-t border-gray-100/20">
              <p className="text-white max-w-sm"></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
