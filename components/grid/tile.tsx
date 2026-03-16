import clsx from "clsx";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import Label from "../label";

export function GridTileImage({
  isInteractive = true,
  active,
  label,
  ...props
}: {
  isInteractive?: boolean;
  active?: boolean;
  label?: {
    title: string;
    amount: string;
    currencyCode: string;
    position?: "bottom" | "center";
  };
} & React.ComponentProps<typeof Image>) {
  return (
    <div className="flex h-full w-full flex-col gap-3">
      <div
        className={clsx(
          "group hover:border-neutral-70 relative aspect-square w-full overflow-hidden rounded-lg border bg-white dark:bg-black",
          {
            "border-neutral-70 border-2": active,
            "border-neutral-200 dark:border-neutral-800": !active,
          },
        )}
      >
        {props.src ? (
          <Image
            suppressHydrationWarning
            className="h-full w-full object-cover"
            {...props}
          />
        ) : null}
        <div className="absolute right-3 bottom-3 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md transition-all duration-200 hover:scale-110 dark:bg-neutral-900">
          <ShoppingBag
            suppressHydrationWarning
            className="h-4 w-4 text-neutral-700 dark:text-neutral-300"
          />
        </div>
      </div>
      {label ? (
        <Label
          title={label.title}
          amount={label.amount}
          currencyCode={label.currencyCode}
          position={label.position}
        />
      ) : null}
    </div>
  );
}
