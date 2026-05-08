"use client";

import { ArrowRightIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { addItem } from "components/cart/actions";
import { useProduct } from "components/product/product-context";
import { Product, ProductVariant } from "lib/shopify/types";
import { useRouter } from "next/navigation";
import { useActionState, useState } from "react";
import { useCart } from "./cart-context";

function SubmitButton({
  availableForSale,
  selectedVariantId,
}: {
  availableForSale: boolean;
  selectedVariantId: string | undefined;
}) {
  const buttonClasses =
    "relative flex w-full items-center justify-center rounded-full bg-neutral-900 dark:bg-white py-3 px-6 text-sm font-medium tracking-wide text-white dark:text-neutral-900 transition-all duration-200";
  const disabledClasses = "cursor-not-allowed opacity-60 hover:opacity-60";

  if (!availableForSale) {
    return (
      <button disabled className={clsx(buttonClasses, disabledClasses)}>
        Out Of Stock
      </button>
    );
  }

  if (!selectedVariantId) {
    return (
      <button
        type="submit"
        aria-label="Please select an option"
        disabled
        className={clsx(buttonClasses, disabledClasses)}
      >
        Add to bag
        <ArrowRightIcon className="ml-2 h-4 w-4" />
      </button>
    );
  }

  return (
    <button
      type="submit"
      aria-label="Add to cart"
      className={clsx(buttonClasses, "hover:opacity-80")}
    >
      Add to bag
      <ArrowRightIcon className="ml-2 h-4 w-4" />
    </button>
  );
}

export function AddToCart({ product }: { product: Product }) {
  const { variants, availableForSale } = product;
  const { addCartItem } = useCart();
  const { state } = useProduct();
  const router = useRouter();
  const [message, formAction] = useActionState(addItem, null);
  const [quantity, setQuantity] = useState(1);

  const variant = variants.find((variant: ProductVariant) =>
    variant.selectedOptions.every(
      (option) => option.value === state[option.name.toLowerCase()],
    ),
  );
  const defaultVariantId = variants.length === 1 ? variants[0]?.id : undefined;
  const selectedVariantId = variant?.id || defaultVariantId;
  const addItemAction = formAction.bind(null, selectedVariantId, quantity);
  const finalVariant = variants.find(
    (variant) => variant.id === selectedVariantId,
  )!;
  const isAvailableForSale = finalVariant
    ? finalVariant.availableForSale
    : availableForSale;

  return (
    <div className="flex flex-col gap-3">
      {/* Quantity selector */}
      <div className="flex items-center gap-3">
        <span className="text-sm text-neutral-600 dark:text-neutral-400">Quantity</span>
        <div className="flex items-center rounded-full border border-neutral-200 dark:border-neutral-700">
          <button
            type="button"
            aria-label="Decrease quantity"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="flex h-9 w-9 items-center justify-center rounded-full text-neutral-600 transition-colors hover:text-neutral-900 disabled:opacity-40 dark:text-neutral-400 dark:hover:text-white"
            disabled={quantity <= 1}
          >
            <MinusIcon className="h-3.5 w-3.5" />
          </button>
          <span className="w-8 text-center text-sm font-medium tabular-nums text-neutral-900 dark:text-white">
            {quantity}
          </span>
          <button
            type="button"
            aria-label="Increase quantity"
            onClick={() => setQuantity((q) => q + 1)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
          >
            <PlusIcon className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      <form
        action={async () => {
          if (finalVariant) {
            addCartItem(finalVariant, product, quantity);
          }

          await addItemAction();
          router.refresh();
        }}
      >
        <SubmitButton
          availableForSale={isAvailableForSale}
          selectedVariantId={selectedVariantId}
        />
        <p aria-live="polite" className="sr-only" role="status">
          {message}
        </p>
      </form>
    </div>
  );
}
