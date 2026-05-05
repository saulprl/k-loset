import { Collection } from "@/lib/shopify/types";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const overlayVariants = cva(
  "flex flex-col items-center justify-end py-10 px-12 absolute inset-0 bg-linear-to-b from-transparent to-black/60 from-50% to-85%",
  {
    variants: {
      color: {
        black: "from-black/10 to-black/50 from-50% to-100%",
        "brown-red": "from-brown-red/10 to-brown-red/40 from-50% to-100%",
        "royal-gold": "from-royal-gold/5 to-royal-gold/30 from-50% to-100%",
      },
      direction: {
        up: "bg-linear-to-t",
        down: "bg-linear-to-b",
        left: "bg-linear-to-l",
        right: "bg-linear-to-r",
      },
    },
    defaultVariants: {
      color: "black",
      direction: "down",
    },
  },
);

const koreanTitleVariants = cva(
  "text-white font-sans font-extrabold text-3xl lg:text-4xl",
  {
    variants: {
      orientation: {
        vertical:
          "[text-orientation:upright] [writing-mode:vertical-rl] tracking-[0.25em]",
        horizontal: "tracking-widest",
      },
      position: {
        "top-right": "absolute top-6 right-5",
        "bottom-left": "absolute bottom-6 left-5",
        "bottom-right": "absolute bottom-6 right-5",
        "top-left": "absolute top-6 left-5",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
      position: "top-left",
    },
  },
);

interface Props {
  collection: Collection;
}

export const CollectionCard = ({ collection }: Props) => {
  return (
    <Link
      href={collection.path}
      className="group relative block h-114 w-full overflow-hidden rounded-3xl transition-all duration-300 ease-in-out hover:brightness-105 lg:h-full"
    >
      <Image
        src={collection.image?.url ?? "/img/timeless-style.jpg"}
        alt={collection.image?.altText || collection.title}
        fill
        sizes="(min-width: 1024px) 40vw, 90vw"
        className="object-cover"
      />
      <div
        className={cn(
          overlayVariants({
            color: collection.cardOverlay?.reference?.color?.value ?? "black",
            direction:
              collection.cardOverlay?.reference?.direction?.value ?? "down",
          }),
        )}
      >
        <h3 className="text-center font-sans text-3xl leading-normal font-bold text-white uppercase lg:text-5xl">
          {collection.title}
        </h3>
        {collection.subtitle ? (
          <span className="inline-flex items-center gap-1 text-xs font-medium text-white lg:text-xl">
            {collection.subtitle.value}{" "}
            <ArrowRight className="size-2.5 transition-all duration-300 ease-in-out group-hover:translate-x-1 lg:size-6" />
          </span>
        ) : null}
        {collection.koreanTitle?.reference?.title?.value ? (
          <p
            className={cn(
              koreanTitleVariants({
                orientation:
                  collection.koreanTitle?.reference?.orientation?.value ??
                  "horizontal",
                position:
                  collection.koreanTitle?.reference?.position?.value ??
                  "top-left",
              }),
            )}
          >
            {collection.koreanTitle?.reference?.title?.value}
          </p>
        ) : null}
      </div>
    </Link>
  );
};
