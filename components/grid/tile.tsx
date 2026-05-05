import clsx from "clsx";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import Label from "../label";

export function GridTileImage({
  isInteractive = true,
  active,
  label,
  imageFit = "cover",
  frame = "fixed",
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
  imageFit?: "cover" | "contain";
  frame?: "fixed" | "natural";
} & React.ComponentProps<typeof Image>) {
  const isNaturalFrame = frame === "natural";

  return (
    <div
      className={clsx("flex flex-col gap-3", {
        "h-full w-full": !isNaturalFrame,
        "w-fit max-w-full": isNaturalFrame,
      })}
    >
      <div
        className={clsx(
          "group hover:border-neutral-70 relative overflow-hidden rounded-lg border bg-white",
          {
            "aspect-square": !isNaturalFrame,
            "w-fit": isNaturalFrame,
          },
          {
            "border-neutral-70 border-2": active,
            "border-neutral-200": !active,
          },
        )}
      >
        {props.src ? (
          <Image
            suppressHydrationWarning
            className={clsx(
              isNaturalFrame
                ? "mx-auto block h-auto max-h-[18rem] w-auto max-w-full"
                : "h-full w-full",
              {
                "object-cover object-top": imageFit === "cover",
                "object-contain object-center p-2":
                  imageFit === "contain" && !isNaturalFrame,
                "object-contain object-center":
                  imageFit === "contain" && isNaturalFrame,
              },
            )}
            {...props}
          />
        ) : null}
        <div className="absolute right-2 bottom-2 flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-md transition-all duration-200 hover:scale-110 sm:right-3 sm:bottom-3 sm:h-9 sm:w-9 dark:bg-neutral-900">
          <ShoppingBag
            suppressHydrationWarning
            className="h-2.5 w-2.5 text-neutral-700 sm:h-4 sm:w-4 dark:text-neutral-300"
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
