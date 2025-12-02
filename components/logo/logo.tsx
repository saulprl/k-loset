import { FC } from "react";

import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const Logo: FC<Props> = ({ className }) => {
  return (
    <h1
      className={cn(
        "font-serif text-xl whitespace-nowrap text-neutral-100 uppercase select-none xl:text-4xl",
        className,
      )}
    >
      K-YOBOK
    </h1>
  );
};
