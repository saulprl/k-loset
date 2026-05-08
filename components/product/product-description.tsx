import {
    ChevronDownIcon,
    HeartIcon,
    TruckIcon,
} from "@heroicons/react/24/outline";
import { AddToCart } from "components/cart/add-to-cart";
import Price from "components/price";
import Prose from "components/prose";
import { Product } from "lib/shopify/types";
import { VariantSelector } from "./variant-selector";

function InfoPanel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <details className="group border-t border-neutral-200 py-4 dark:border-neutral-700">
      <summary className="flex cursor-pointer list-none items-center justify-between text-xl font-bold text-neutral-900 marker:content-none dark:text-white">
        {title}
        <span className="flex h-6 w-6 items-center justify-center rounded-full border border-neutral-300 text-neutral-500 transition-transform group-open:rotate-180 dark:border-neutral-600 dark:text-neutral-300">
          <ChevronDownIcon className="h-4 w-4" />
        </span>
      </summary>
      <div className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
        {children}
      </div>
    </details>
  );
}

export function ProductDescription({ product }: { product: Product }) {
  return (
    <div className="flex flex-col">
      {/* Category Breadcrumb */}
      {product.collections.length > 0 && (
        <nav className="mb-3 flex flex-wrap gap-2" aria-label="Category">
          {product.collections.map((collection) => (
            <a
              key={collection.handle}
              href={`/search/${collection.handle}`}
              className="inline-block rounded-full border border-neutral-200 px-3 py-1 text-xs font-medium tracking-wide text-neutral-500 uppercase transition-colors hover:border-neutral-400 hover:text-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-white"
            >
              {collection.title}
            </a>
          ))}
        </nav>
      )}

      {/* Product Title */}
      <h1 className="text-xl font-medium text-neutral-900 dark:text-white">
        {product.title}
      </h1>

      {/* Price */}
      <Price
        className="mt-2 text-lg font-bold text-black dark:text-white"
        amount={product.priceRange.maxVariantPrice.amount}
        currencyCode={product.priceRange.maxVariantPrice.currencyCode}
      />

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

      <div className="mt-6">
        <InfoPanel title="Size guide">
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
              <div className="rounded-md border border-neutral-200 bg-white p-3 dark:border-neutral-700 dark:bg-neutral-900">
                <p className="text-xs font-semibold tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
                  Fit
                </p>
                <p className="mt-1 font-medium text-neutral-800 dark:text-neutral-100">
                  Regular fit
                </p>
              </div>
              <div className="rounded-md border border-neutral-200 bg-white p-3 dark:border-neutral-700 dark:bg-neutral-900">
                <p className="text-xs font-semibold tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
                  Stretch
                </p>
                <p className="mt-1 font-medium text-neutral-800 dark:text-neutral-100">
                  Low stretch
                </p>
              </div>
              <div className="rounded-md border border-neutral-200 bg-white p-3 dark:border-neutral-700 dark:bg-neutral-900">
                <p className="text-xs font-semibold tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
                  Recommendation
                </p>
                <p className="mt-1 font-medium text-neutral-800 dark:text-neutral-100">
                  One size fits most
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-md border border-neutral-200 dark:border-neutral-700">
              <div className="grid grid-cols-4 bg-neutral-50 text-xs font-semibold tracking-wide text-neutral-500 uppercase dark:bg-neutral-900 dark:text-neutral-400">
                <div className="px-3 py-2">Size</div>
                <div className="px-3 py-2">Waist</div>
                <div className="px-3 py-2">Hip</div>
                <div className="px-3 py-2">Length</div>
              </div>
              <div className="grid grid-cols-4 border-t border-neutral-200 text-sm dark:border-neutral-700">
                <div className="px-3 py-2 font-medium">One Size</div>
                <div className="px-3 py-2">64-78 cm</div>
                <div className="px-3 py-2">88-102 cm</div>
                <div className="px-3 py-2">40 cm</div>
              </div>
            </div>

            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              This style is one size. Measure your waist at the narrowest point
              and compare with the range above for the best fit.
            </p>
          </div>
        </InfoPanel>

        <InfoPanel title="Shipping and returns">
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
              <div className="rounded-md border border-neutral-200 bg-white p-3 dark:border-neutral-700 dark:bg-neutral-900">
                <p className="text-xs font-semibold tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
                  Processing
                </p>
                <p className="mt-1 font-medium text-neutral-800 dark:text-neutral-100">
                  1-2 business days
                </p>
              </div>
              <div className="rounded-md border border-neutral-200 bg-white p-3 dark:border-neutral-700 dark:bg-neutral-900">
                <p className="text-xs font-semibold tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
                  Delivery
                </p>
                <p className="mt-1 font-medium text-neutral-800 dark:text-neutral-100">
                  3-7 business days
                </p>
              </div>
              <div className="rounded-md border border-neutral-200 bg-white p-3 dark:border-neutral-700 dark:bg-neutral-900">
                <p className="text-xs font-semibold tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
                  Returns window
                </p>
                <p className="mt-1 font-medium text-neutral-800 dark:text-neutral-100">
                  14 days after delivery
                </p>
              </div>
            </div>

            <ul className="list-disc space-y-1 pl-4 text-sm">
              <li>Items must be unworn, unwashed, and with original tags.</li>
              <li>Final sale and personalized items are non-returnable.</li>
              <li>Refunds are issued to the original payment method.</li>
            </ul>
          </div>
        </InfoPanel>
      </div>

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
