import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MoveRight } from "lucide-react";
import { FC } from "react";

interface Props extends ButtonProps {
  trailingIcon?: boolean;
  dark?: boolean;
}

export const CTAButton: FC<Props> = ({
  trailingIcon = false,
  dark = false,
  children,
  className,
  ...props
}) => {
  return (
    <Button
      variant={dark ? "inverseDefault" : "default"}
      className={cn("cursor-pointer", className)}
      {...props}
    >
      <>
        {children}
        {trailingIcon && <MoveRight />}
      </>
    </Button>
  );
};
