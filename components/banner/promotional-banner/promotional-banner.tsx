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
        return "bg-purple-600 text-white";
      case "azul":
        return "bg-blue-600 text-white";
      case "crema":
        return "bg-yellow-100 text-black";
      case "gris":
        return "bg-gray-200 text-black";
      default:
        return "";
    }
  }
  return (
    <div
      className={cn(
        "w-full bg-cover bg-center px-4 py-2 text-center text-sm md:text-base",
        getBackgroundImage(),
        getVariantStyles()
      )}
    >
      <h2 className="font-bold">{title}</h2>
      <p>{message}</p>
      <a href={linkUrl} className="underline">
        {linkText}
      </a>
    </div>
  );
};
