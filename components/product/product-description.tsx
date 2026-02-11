import { HeartIcon, TruckIcon } from "@heroicons/react/24/outline";
import { AddToCart } from "components/cart/add-to-cart";
import Price from "components/price";
import Prose from "components/prose";
import { Product } from "lib/shopify/types";
import { VariantSelector } from "./variant-selector";

export function ProductDescription({ product }: { product: Product }) {
  return (
    <div className="flex flex-col">
      {/* Product Title */}
      <h1 className="text-2xl font-medium text-neutral-900 dark:text-white">
        {product.title}
      </h1>

      {/* Price */}
      <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">
        <Price
          amount={product.priceRange.maxVariantPrice.amount}
          currencyCode={product.priceRange.maxVariantPrice.currencyCode}
        />
      </p>

      {/* Divider */}
      <div className="my-6 h-px bg-neutral-200 dark:bg-neutral-700" />

      {/* Variant Selector */}
      <VariantSelector options={product.options} variants={product.variants} />

      {/* Stock Availability */}
      <p className="mb-6 text-sm text-neutral-500 dark:text-neutral-400">
        {product.availableForSale ? (
          <span className="text-green-600">In stock and ready to ship</span>
        ) : (
          <span className="text-red-500">Out of stock</span>
        )}
      </p>

      {/* Add to Cart with Wishlist */}
      <div className="flex items-center gap-3">
        <button
          aria-label="Add to wishlist"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-200 transition-colors hover:border-neutral-400 dark:border-neutral-700 dark:hover:border-neutral-500"
        >
          <HeartIcon className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />
        </button>
        <div className="flex-1">
          <AddToCart product={product} />
        </div>
      </div>

      {/* Shipping Info */}
      <div className="mt-6 flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
        <TruckIcon className="h-5 w-5" />
        <span>Free shipping on orders over $99</span>
      </div>

      {/* Contact Link */}
      <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
        Can't complete your purchase?{" "}
        <a
          href="/pages/about-us"
          className="underline hover:text-neutral-900 dark:hover:text-white"
        >
          Contact us
        </a>
      </p>

      {/* Description */}
      {product.descriptionHtml ? (
        <div className="mt-6 border-t border-neutral-200 pt-6 dark:border-neutral-700">
          <Prose
            className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400"
            html={product.descriptionHtml}
          />
        </div>
      ) : null}
    </div>
  );
}
