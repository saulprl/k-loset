import { Product } from "@/lib/shopify/types";
import Link from "next/link";
import { LinkButton } from "../buttons/link-button/link-button";
import { GridTileImage } from "../grid/tile";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

interface Props {
  products: Product[];
}

export const NewProductArrivals = ({ products }: Props) => {
  return (
    <section className="flex w-full flex-col">
      <div className="flex w-full items-center justify-between px-4 py-12">
        <h2 className="text-text-foreground font-sans text-3xl font-medium">
          New Arrivals{" "}
          <span className="text-hangul text-2xl font-semibold">신상품</span>
        </h2>
        <LinkButton
          href="/collections/new-arrivals"
          trailingIcon
          className="md:hidden"
          aria-label="See All New Arrivals Products"
        />
        <LinkButton
          href="/collections/new-arrivals"
          trailingIcon
          className="max-md:hidden"
          aria-label="See All New Arrivals Products"
        >
          See All
        </LinkButton>
      </div>
      <div className="pb-16">
        <ScrollArea className="w-full max-lg:hidden">
          <div className="flex w-max gap-4 px-4 pb-4">
            {products.map((product) => {
              console.log("Rendering product in NewProductArrivals:", product);

              return (
                <div key={product.id} className="w-90">
                  <Link
                    href={`/product/${product.handle}`}
                    className="relative block size-full"
                  >
                    <GridTileImage
                      src={product.featuredImage?.url ?? ""}
                      alt={product.title}
                      label={{
                        title: product.title,
                        amount: product.priceRange.maxVariantPrice.amount,
                        currencyCode:
                          product.priceRange.maxVariantPrice.currencyCode,
                      }}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                  </Link>
                </div>
              );
            })}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        <Carousel className="w-full lg:hidden">
          <CarouselContent className="-ml-4">
            {products.map((product) => (
              <CarouselItem key={product.id} className="basis-3/4 md:basis-4/9">
                <Link
                  href={`/product/${product.handle}`}
                  className="relative block h-full w-full"
                >
                  <GridTileImage
                    src={product.featuredImage?.url ?? ""}
                    alt={product.title}
                    label={{
                      title: product.title,
                      amount: product.priceRange.maxVariantPrice.amount,
                      currencyCode:
                        product.priceRange.maxVariantPrice.currencyCode,
                    }}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};
