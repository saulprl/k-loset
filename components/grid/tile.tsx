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
          "group hover:border-neutral-70 relative aspect-[4/5] w-full overflow-hidden rounded-lg border bg-white sm:aspect-square dark:bg-black",
          {
            "border-neutral-70 border-2": active,
            "border-neutral-200 dark:border-neutral-800": !active,
          },
        )}
      >
        {props.src ? (
          <Image
            suppressHydrationWarning
            className="h-full w-full object-cover object-center"
            {...props}
          />
        ) : null}
        <div className="absolute right-2 bottom-2 flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-md transition-all duration-200 hover:scale-110 sm:right-3 sm:bottom-3 sm:h-9 sm:w-9 dark:bg-neutral-900">
          <ShoppingBag
            suppressHydrationWarning
            className="h-3.5 w-3.5 text-neutral-700 sm:h-4 sm:w-4 dark:text-neutral-300"
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
