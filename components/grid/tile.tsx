import clsx from "clsx";
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
          "group relative overflow-hidden border border-neutral-200 bg-white transition-colors duration-200 hover:border-neutral-300",
          {
            "aspect-square": !isNaturalFrame,
            "w-fit": isNaturalFrame,
          },
          {
            "border-neutral-700": active,
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
                "object-contain object-center":
                  imageFit === "contain" && !isNaturalFrame,
              },
            )}
            {...props}
          />
        ) : null}
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
