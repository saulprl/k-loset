import clsx from "clsx";
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
          <Image className="h-full w-full object-cover" {...props} />
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
