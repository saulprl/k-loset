import { PromotionalBanner } from "@/components/banner/promotional-banner/promotional-banner";
import { Hero } from "@/components/hero/hero";
import { getFeaturedCollections } from "@/lib/shopify";

export const metadata = {
  description:
    "High-performance ecommerce store built with Next.js, Vercel, and Shopify.",
  openGraph: {
    type: "website",
  },
};

export default async function HomePage() {
  const featuredCollections = await getFeaturedCollections();

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
      {/* <div className="relative overflow-hidden p-4 md:h-[80svh]">
        <Image
          src="/img/home-hero.jpg"
          alt="K-loset cover image"
          height={750}
          width={1600}
          className="size-full rounded-lg"
        />
      </div> */}
      {/* <ThreeItemGrid />
      <Carousel /> */}
    </>
  );
}
