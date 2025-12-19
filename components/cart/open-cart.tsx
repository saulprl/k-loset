import clsx from "clsx";
import { ShoppingBag } from "lucide-react";
import { Badge } from "../ui/badge";

export default function OpenCart({
  className,
  quantity,
}: {
  className?: string;
  quantity?: number;
}) {
  return (
    <span className={clsx("relative inline-block", className)}>
      <ShoppingBag
        className={clsx(
          "transition-all ease-in-out hover:scale-110",
          className,
        )}
      />

      {quantity ? (
        <Badge
          variant="default"
          className="absolute -top-1/3 -right-1/3 size-4"
        >
          {quantity}
        </Badge>
      ) : null}
    </span>
  );
}
