import { ComponentPropsWithoutRef, ElementType } from "react";

import { cn } from "@/lib/utils";

type LogoProps<T extends ElementType = 'h1'> = {
  as?: T;
  className?: string;
} & ComponentPropsWithoutRef<T>;

export const Logo = <T extends ElementType = 'h1'>({
  as,
  className,
  ...props
}: LogoProps<T>) => {
  const Component = as || 'h1';
  return (
    <Component
      className={cn(
        "font-serif text-xl whitespace-nowrap text-neutral-100 uppercase select-none xl:text-4xl",
        className,
      )}
      {...props}
    >
      K-YOBOK
    </Component>
  );
};
