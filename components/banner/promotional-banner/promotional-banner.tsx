import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MoveRight } from "lucide-react";
import Link from "next/link";

interface PromotionalBannerProps {
  variant?: "morado" | "azul" | "crema" | "gris";
  title: string;
  message: string;
  linkText: string;
  linkUrl: string;
}
export const PromotionalBanner = ({
  variant = "morado",
  title,
  message,
  linkText,
  linkUrl,
}: PromotionalBannerProps) => {
  const getBackgroundImage = () => {
    switch (variant) {
      case "morado":
        return "bg-[url('/img/morado-banner.jpg')]";
      case "azul":
        return "bg-[url('/img/azul-banner.png')]";
      case "crema":
        return "bg-[url('/img/crema-banner.png')]";
      case "gris":
        return "bg-[url('/img/gris-banner.png')]";
      default:
        return "";
    }
  };
  const getVariantStyles = () => {
    switch (variant) {
      case "morado":
        return "bg-[#282532] text-white";
      case "azul":
        return "bg-[#1E3240] text-white";
      case "crema":
        return "bg-[#B2856D] text-white";
      case "gris":
        return "bg-[#585858] text-white";
      default:
        return "";
    }
  };
  return (
    <div
      className={cn(
        "w-full bg-cover bg-center p-4 pt-18 text-center text-sm md:text-base lg:px-10 lg:pt-12 lg:pb-0",
        getBackgroundImage(),
      )}
    >
      <div
        className={cn(
          "mx-auto w-full px-8 py-6",
          getVariantStyles(),
        )}
      >
        <h3 className="mb-2 text-4xl font-bold">{title}</h3>
        <p className="mb-4">{message}</p>
        <Link
          href={linkUrl}
          className={cn(
            buttonVariants({ variant: "default", size: "sm" }),
            "has-[>svg]:gap-2 has-[>svg]:px-6",
          )}
        >
          {linkText}
          <MoveRight />
        </Link>
      </div>
    </div>
  );
};
