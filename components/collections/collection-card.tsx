import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const overlayVariants = cva(
  "flex flex-col items-center justify-end py-10 px-8 absolute inset-0 bg-linear-to-b from-transparent to-black/60 from-50% to-85%",
  {
    variants: {
      color: {
        black: "from-black/10 to-black/40 from-50% to-100%",
        brownRed: "from-brown-red/10 to-brown-red/40 from-50% to-100%",
        royalGold: "from-royal-gold/10 to-royal-gold/40 from-50% to-100%",
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
  "text-white font-sans font-extrabold text-3xl",
  {
    variants: {
      orientation: {
        vertical: "[text-orientation:upright] [writing-mode:vertical-rl]",
        horizontal: "",
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

export const CollectionCard = () => {
  return (
    <div className="relative h-114 w-full overflow-hidden rounded-3xl">
      <Image
        src="/img/back-2-school.jpg"
        alt="Back to School"
        fill
        sizes="(min-width: 1024px) 40vw, 90vw"
        className="object-cover"
      />
      <div
        className={cn(overlayVariants({ color: "black", direction: "left" }))}
      >
        <h3 className="text-center font-sans text-3xl leading-normal font-bold text-white">
          Back 2 School Styles
        </h3>
        <span className="inline-flex items-center gap-1 text-xs font-medium text-white">
          New items <ArrowRight size={10} />
        </span>
        <p
          className={cn(
            koreanTitleVariants({
              orientation: "vertical",
              position: "top-left",
            }),
            "tracking-widest"
          )}
        >
          학교로돌아가기
        </p>
      </div>
    </div>
  );
};
