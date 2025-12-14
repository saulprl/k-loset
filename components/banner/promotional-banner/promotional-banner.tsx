import { CTAButton } from "@/components/buttons/cta-button/cta-button";
import { cn } from "@/lib/utils";

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
  }
  return (
    <div
      className={cn(
        "w-full bg-cover bg-center px-4 py-16 text-center text-sm md:text-base",
        getBackgroundImage()
      )}
    >
      <div
        className={cn(
          "mx-auto w-[80%] rounded-lg px-8 py-6",
          getVariantStyles()
        )}
      >
        <h2 className="text-4xl font-bold mb-2">{title}</h2>
        <p className="mb-4">{message}</p>
        <a href={linkUrl}>
          <CTAButton trailingIcon dark>
            {linkText}
          </CTAButton>
        </a>
      </div>
    </div>
  );
};
