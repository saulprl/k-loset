import { Product } from "@/lib/shopify/types";
import Link from "next/link";
import { LinkButton } from "../buttons/link-button/link-button";
import { GridTileImage } from "../grid/tile";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

interface Props {
  products: Product[];
  secondaryProducts?: Product[];
  title?: string;
  koreanTitle?: string;
  href?: string;
  ariaLabel?: string;
}

export const NewProductArrivals = ({
  products,
  secondaryProducts,
  title = "New Arrivals",
  koreanTitle = "신상품",
  href = "/collections/new-arrivals",
  ariaLabel = "See All New Arrivals Products",
}: Props) => {
  const productRows = secondaryProducts?.length
    ? [products, secondaryProducts]
    : [products];

  return (
    <section className="flex w-full flex-col">
      <div className="flex w-full items-center justify-between px-4 py-12">
        <h2 className="text-text-foreground font-sans text-3xl font-medium">
          {title}{" "}
          <span className="text-hangul text-2xl font-semibold">
            {koreanTitle}
          </span>
        </h2>
        <LinkButton
          href={href}
          trailingIcon
          className="md:hidden"
          aria-label={ariaLabel}
        />
        <LinkButton
          href={href}
          trailingIcon
          className="max-md:hidden"
          aria-label={ariaLabel}
        >
          See All
        </LinkButton>
      </div>
      <div className="pb-16">
        <div className="hidden space-y-6 lg:block">
          {productRows.map((rowProducts, index) => (
            <ScrollArea key={`desktop-product-row-${index}`} className="w-full">
              <div className="flex w-max gap-4 px-4 pb-4">
                {rowProducts.map((product) => {
                  return (
                    <div
                      key={`${product.id}-desktop-${index}`}
                      className="w-90"
                    >
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
          ))}
        </div>

        <div className="space-y-6 lg:hidden">
          {productRows.map((rowProducts, index) => (
            <Carousel key={`mobile-product-row-${index}`} className="w-full">
              <CarouselContent className="-ml-4">
                {rowProducts.map((product) => (
                  <CarouselItem
                    key={`${product.id}-mobile-${index}`}
                    className="basis-3/4 md:basis-4/9"
                  >
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
          ))}
        </div>
      </div>
    </section>
  );
};
