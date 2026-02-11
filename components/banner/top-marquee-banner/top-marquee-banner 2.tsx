"use client";

import { cn } from "@/lib/utils";

interface MarqueeItem {
  text: string;
}

interface TopMarqueeBannerProps {
  items?: MarqueeItem[];
  className?: string;
  speed?: "slow" | "normal" | "fast";
}

const defaultItems: MarqueeItem[] = [
  { text: "On orders over $50, get Free Shipping*" },
  { text: "15% OFF your first order" },
  { text: "Buy 1, Get 1 FREE on selected items" },
];

export const TopMarqueeBanner = ({
  items = defaultItems,
  className,
  speed = "normal",
}: TopMarqueeBannerProps) => {
  const getSpeedClass = () => {
    switch (speed) {
      case "slow":
        return "animate-[marquee_40s_linear_infinite]";
      case "fast":
        return "animate-[marquee_15s_linear_infinite]";
      default:
        return "animate-[marquee_25s_linear_infinite]";
    }
  };

  const separator = (
    <span className="mx-8 text-neutral-400" aria-hidden="true">
      •
    </span>
  );

  const content = items.map((item, index) => (
    <span key={`marquee-item-${index}`} className="flex items-center">
      <span className="whitespace-nowrap">{item.text}</span>
      {separator}
    </span>
  ));

  return (
    <div
      className={cn("relative w-full overflow-hidden bg-black py-2", className)}
      aria-label="Promotional announcements"
    >
      <div className="flex">
        <div
          className={cn(
            "flex shrink-0 items-center text-xs font-medium text-white",
            getSpeedClass(),
          )}
        >
          {content}
          {content}
          {content}
        </div>
        <div
          className={cn(
            "flex shrink-0 items-center text-xs font-medium text-white",
            getSpeedClass(),
          )}
          aria-hidden="true"
        >
          {content}
          {content}
          {content}
        </div>
      </div>
    </div>
  );
};
