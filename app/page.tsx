import { PromotionalBanner } from "@/components/banner/promotional-banner/promotional-banner";
import { Hero } from "@/components/hero/hero";

export const metadata = {
  description:
    "High-performance ecommerce store built with Next.js, Vercel, and Shopify.",
  openGraph: {
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <PromotionalBanner
        variant="morado"
        title="Welcome to K-YOBOK"
        message="Discover our exclusive collection of fashion and accessories."
        linkText="Shop Now"
        linkUrl="/shop"
      />
    </>
  );
}
