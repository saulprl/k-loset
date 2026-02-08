import { PromotionalBanner } from "@/components/banner/promotional-banner/promotional-banner";
import { NewCollectionArrivals } from "@/components/collections/new-collection-arrivals";
import { Hero } from "@/components/hero/hero";
import { NewProductArrivals } from "@/components/products/new-product-arrivals";
import {
  getFeaturedCollections,
  getLatestCollections,
  getLatestProducts,
} from "@/lib/shopify";

// export const metadata: Metadata = {
//   description:
//     "High-performance ecommerce store built with Next.js, Vercel, and Shopify.",
//   openGraph: {
//     type: "website",
//   },
// };

export default async function HomePage() {
  const featuredCollections = await getFeaturedCollections();
  const latestCollections = await getLatestCollections();
  const latestProducts = await getLatestProducts();

  const heroCollection = featuredCollections[0]!;

  return null;

  return (
    <>
      <Hero collection={heroCollection} />
      <NewCollectionArrivals collections={latestCollections} />
      <NewProductArrivals products={latestProducts} />
      <section className="w-full p-0">
        <PromotionalBanner
          variant="morado"
          title="Welcome to K-YOBOK"
          message="Discover our exclusive collection of fashion and accessories."
          linkText="Shop Now"
          linkUrl="/shop"
        />
      </section>
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
