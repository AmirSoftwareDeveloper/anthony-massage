import Link from "next/link";

import { INFO } from "@/constants";
import { Routes } from "@/constants/routes";

import Title from "../title";
import { Button } from "../ui/button";

const ComingSoon = () => {
  return (
    <section className="padding-y container">
      <div>
        <Title
          title="Coming Soon"
          subTitle="Coming Soon"
          description="We are working on something great. Stay tuned!"
          center
        />

        <div className="flex gap-4 flex-wrap items-center justify-center mx-auto">
          <Link href={Routes.HOME}>
            <Button>Back To Home</Button>
          </Link>

          <Link href={`mailto:${INFO.EMAIL_ADDRESS}`}>
            <Button variant="secondary">Contact Us</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
