import NextImage, { ImageProps as NextImageProps } from "next/image";

import { cn } from "@/utils";

interface ImageProps extends Omit<NextImageProps, "fill"> {
  containerClassName?: string;
  className?: string;
  fill?: boolean;
}

const Image = ({ containerClassName, className, fill = true, alt, ...props }: ImageProps) => {
  return (
    <div className={cn(fill && "relative overflow-hidden", containerClassName)}>
      <NextImage
        alt={alt}
        fill={fill}
        className={cn("object-cover", className)}
        {...props}
      />
    </div>
  );
};

export default Image;
