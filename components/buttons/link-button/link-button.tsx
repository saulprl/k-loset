import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MoveRight } from "lucide-react";
import { FC } from "react";

interface Props extends ButtonProps {
  trailingIcon?: boolean;
}

export const LinkButton: FC<Props> = ({
  trailingIcon = false,
  variant,
  children,
  className,
  ...props
}) => {
  return (
    <Button variant="link" className={cn("cursor-pointer", className)} {...props}>
      {children}
      {trailingIcon && <MoveRight />}
    </Button>
  );
};
