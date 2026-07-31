import { ReactNode } from "react";

import { cn } from "@/utils";

type Props = {
  title: string;
  children: ReactNode;
  className?: string;
  titleClassName?: string;
};

const SidebarCard = ({ title, children, className, titleClassName }: Props) => {
  return (
    <div className={cn("w-full rounded-xl overflow-hidden bg-[#F7F7F7]", className)}>
      <h3 className={cn("text-xl font-bold border-b border-gray-200 bg-primary text-white px-6 py-5", titleClassName)}>
        {title}
      </h3>

      <div className="px-6 py-6">{children}</div>
    </div>
  );
};

export default SidebarCard;
