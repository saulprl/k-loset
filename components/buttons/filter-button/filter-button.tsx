import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FC } from "react";

interface Props extends ButtonProps {
  size?: "filter-sm" | "filter-lg";
  active?: boolean;
}

export const FilterButton: FC<Props> = ({
  className,
  children,
  variant = "filter",
  size = "filter-sm",
  active = false,
  ...props
}) => {
  return (
    <Button
      variant="filter"
      size={size}
      className={cn("", className)}
      {...props}
    >
      {children}
    </Button>
  );
};
