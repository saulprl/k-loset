import clsx from "clsx";
import { ShoppingBag } from "lucide-react";

export default function OpenCart({
  className,
  quantity,
}: {
  className?: string;
  quantity?: number;
}) {
  return (
    <>
      <ShoppingBag
        className={clsx(
          "transition-all ease-in-out hover:scale-110",
          className,
        )}
      />

      {quantity ? (
        <div className="absolute top-0 right-0 -mt-2 -mr-2 h-4 w-4 rounded-sm bg-blue-600 text-[11px] font-medium text-white">
          {quantity}
        </div>
      ) : null}
    </>
  );
}
