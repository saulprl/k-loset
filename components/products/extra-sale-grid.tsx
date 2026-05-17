"use client";

import Price from "@/components/price";
import { Collection, Product } from "@/lib/shopify/types";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

export const ExtraSaleGrid = ({
  products,
  collections,
}: {
  products: Product[];
  collections: Collection[];
}) => {
  const collectionFilters = useMemo(
    () => [
      { label: "All", value: "all" },
      ...collections.slice(0, 6).map((collection) => ({
        label: collection.title,
        value: collection.handle,
      })),
    ],
    [collections],
  );

  const [activeFilter, setActiveFilter] = useState(collectionFilters[0]?.value);

  const featuredProducts = useMemo(() => {
    const filteredProducts =
      activeFilter && activeFilter !== "all"
        ? products.filter((product) =>
            product.collections.some(
              (collection) => collection.handle === activeFilter,
            ),
          )
        : products;

    return filteredProducts.slice(0, 6);
  }, [activeFilter, products]);

  if (!featuredProducts.length) {
    return null;
  }

  return (
    <section className="w-full px-4 pt-6 pb-12 sm:px-6">
      <div className="mx-auto w-full max-w-[96rem]">
        <h2 className="text-text-foreground max-w-[14ch] font-serif text-[clamp(2.5rem,10vw,5rem)] leading-[0.95] tracking-tight">
          Extra Off: Sale + Welcome Code
        </h2>

        <div className="mt-6 overflow-x-auto">
          <ul className="flex w-max items-center gap-3 pb-1">
            {collectionFilters.map((filter) => {
              const isActive = filter.value === activeFilter;

              return (
              <li key={`extra-sale-filter-${filter.label}`}>
                <button
                  type="button"
                  onClick={() => setActiveFilter(filter.value)}
                  aria-pressed={isActive}
                  className={[
                    "rounded-full border px-5 py-2 text-base font-medium tracking-tight whitespace-nowrap transition-colors sm:px-6 sm:py-2.5 sm:text-xl",
                    isActive
                      ? "border-neutral-950 bg-neutral-950 text-white"
                      : "border-neutral-300 bg-white text-neutral-800 hover:border-neutral-500",
                  ].join(" ")}
                >
                  {filter.label}
                </button>
              </li>
              );
            })}
          </ul>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {featuredProducts.map((product) => (
            <article key={`extra-sale-product-${product.id}`}>
              <Link
                href={`/product/${product.handle}`}
                className="block h-full"
                prefetch={true}
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100">
                  {product.featuredImage?.url ? (
                    <Image
                      src={product.featuredImage.url}
                      alt={product.title}
                      fill
                      sizes="(min-width: 1280px) 16vw, (min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                      className="object-cover object-center"
                    />
                  ) : null}
                  <span className="pointer-events-none absolute right-2 bottom-2 rounded-full bg-black/35 p-1 text-white backdrop-blur-sm">
                    <Heart className="size-5 sm:size-6" />
                  </span>
                </div>
                <div className="mt-2.5">
                  <h3 className="line-clamp-2 min-h-[2.6em] text-[clamp(1.05rem,4.4vw,2rem)] leading-[1.25] font-medium text-neutral-900">
                    {product.title}
                  </h3>
                  <Price
                    className="text-discount mt-1 text-[clamp(1.6rem,5.8vw,2.5rem)] leading-none font-semibold"
                    currencyCodeClassName="hidden"
                    amount={product.priceRange.maxVariantPrice.amount}
                    currencyCode={product.priceRange.maxVariantPrice.currencyCode}
                  />
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
