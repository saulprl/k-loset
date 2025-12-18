import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

interface Props extends ButtonProps {
  trailingIcon?: boolean;
  href: string;
}

export const LinkButton: FC<Props> = ({
  trailingIcon = false,
  variant,
  children,
  className,
  href,
  ...props
}) => {
  return (
    <Button
      asChild
      variant="link"
      className={cn("cursor-pointer", className)}
      {...props}
    >
      <Link href={href}>
        {children}
        {trailingIcon && <MoveRight />}
      </Link>
    </Button>
  );
};
