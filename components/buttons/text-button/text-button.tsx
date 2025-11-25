import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { FC } from "react";

interface Props extends ButtonProps {
  trailingIcon?: boolean;
}

export const TextButton: FC<Props> = ({
  trailingIcon = false,
  variant,
  children,
  className,
  ...props
}) => {
  return (
    <Button
      variant="ghost"
      className={cn("cursor-pointer", className)}
      {...props}
    >
      {children}
      {trailingIcon && <ArrowRight />}
    </Button>
  );
};
