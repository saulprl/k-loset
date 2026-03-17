import clsx from "clsx";
import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import { Badge } from "../ui/badge";

export default function OpenCart({
  className,
  quantity,
}: {
  className?: string;
  quantity?: number;
}) {
  const [stableQuantity, setStableQuantity] = useState<number | undefined>(
    quantity,
  );

  useEffect(() => {
    if (typeof quantity === "number") {
      setStableQuantity(quantity);
    }
  }, [quantity]);

  const displayQuantity =
    typeof quantity === "number" ? quantity : stableQuantity;

  return (
    <span className={clsx("relative inline-block", className)}>
      <ShoppingBag
        className={clsx(
          "transition-all ease-in-out hover:scale-110",
          className,
        )}
      />

      {displayQuantity && displayQuantity > 0 ? (
        <Badge
          variant="default"
          className="absolute -top-1/3 -right-1/3 size-4"
        >
          {displayQuantity}
        </Badge>
      ) : null}
    </span>
  );
}
