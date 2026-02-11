"use client";

import clsx from "clsx";
import { useProduct, useUpdateURL } from "components/product/product-context";
import { ProductOption, ProductVariant } from "lib/shopify/types";

type Combination = {
  id: string;
  availableForSale: boolean;
  [key: string]: string | boolean;
};

// Color mapping for common color names
const colorMap: Record<string, string> = {
  black: "#000000",
  white: "#FFFFFF",
  red: "#EF4444",
  blue: "#3B82F6",
  green: "#22C55E",
  yellow: "#EAB308",
  purple: "#A855F7",
  pink: "#EC4899",
  orange: "#F97316",
  gray: "#6B7280",
  grey: "#6B7280",
  navy: "#1E3A5A",
  brown: "#92400E",
  beige: "#D4C4B0",
  cream: "#FFFDD0",
  tan: "#D2B48C",
  olive: "#808000",
  maroon: "#800000",
  coral: "#FF7F50",
  teal: "#008080",
  mint: "#98FF98",
  lavender: "#E6E6FA",
  almond: "#EFDECD",
  "almond dream": "#EFDECD",
  sage: "#9DC183",
  "dusty rose": "#DCAE96",
  charcoal: "#36454F",
};

function getColorValue(colorName: string): string | null {
  const normalized = colorName.toLowerCase().trim();
  return colorMap[normalized] || null;
}

export function VariantSelector({
  options,
  variants,
}: {
  options: ProductOption[];
  variants: ProductVariant[];
}) {
  const { state, updateOption } = useProduct();
  const updateURL = useUpdateURL();
  const hasNoOptionsOrJustOneOption =
    !options.length ||
    (options.length === 1 && options[0]?.values.length === 1);

  if (hasNoOptionsOrJustOneOption) {
    return null;
  }

  const combinations: Combination[] = variants.map((variant) => ({
    id: variant.id,
    availableForSale: variant.availableForSale,
    ...variant.selectedOptions.reduce(
      (accumulator, option) => ({
        ...accumulator,
        [option.name.toLowerCase()]: option.value,
      }),
      {},
    ),
  }));

  return options.map((option) => {
    const optionNameLowerCase = option.name.toLowerCase();
    const isColorOption =
      optionNameLowerCase === "color" || optionNameLowerCase === "colour";
    const isSizeOption = optionNameLowerCase === "size";

    return (
      <form key={option.id} className="mb-6">
        <dl>
          <dt className="mb-3 text-sm text-neutral-600 dark:text-neutral-400">
            {option.name}:{" "}
            <span className="font-medium text-neutral-900 dark:text-white">
              {state[optionNameLowerCase] || option.values[0]}
            </span>
          </dt>
          <dd className="flex flex-wrap gap-2">
            {option.values.map((value) => {
              const optionParams = { ...state, [optionNameLowerCase]: value };
              const filtered = Object.entries(optionParams).filter(
                ([key, value]) =>
                  options.find(
                    (option) =>
                      option.name.toLowerCase() === key &&
                      option.values.includes(value),
                  ),
              );
              const isAvailableForSale = combinations.find((combination) =>
                filtered.every(
                  ([key, value]) =>
                    combination[key] === value && combination.availableForSale,
                ),
              );
              const isActive = state[optionNameLowerCase] === value;
              const colorValue = isColorOption ? getColorValue(value) : null;

              if (isColorOption && colorValue) {
                // Render color swatch
                return (
                  <button
                    formAction={() => {
                      const newState = updateOption(optionNameLowerCase, value);
                      updateURL(newState);
                    }}
                    key={value}
                    aria-disabled={!isAvailableForSale}
                    disabled={!isAvailableForSale}
                    title={`${option.name}: ${value}${!isAvailableForSale ? " (Out of Stock)" : ""}`}
                    className={clsx(
                      "relative h-8 w-8 rounded-full transition-all duration-200",
                      {
                        "ring-2 ring-neutral-900 ring-offset-2 dark:ring-white":
                          isActive,
                        "hover:ring-2 hover:ring-neutral-400 hover:ring-offset-2":
                          !isActive && isAvailableForSale,
                        "cursor-not-allowed opacity-40": !isAvailableForSale,
                      },
                    )}
                    style={{ backgroundColor: colorValue }}
                  >
                    {!isAvailableForSale && (
                      <span className="absolute inset-0 flex items-center justify-center">
                        <span className="h-px w-full rotate-45 bg-neutral-500" />
                      </span>
                    )}
                  </button>
                );
              }

              // Render size or other options as boxed buttons
              return (
                <button
                  formAction={() => {
                    const newState = updateOption(optionNameLowerCase, value);
                    updateURL(newState);
                  }}
                  key={value}
                  aria-disabled={!isAvailableForSale}
                  disabled={!isAvailableForSale}
                  title={`${option.name} ${value}${!isAvailableForSale ? " (Out of Stock)" : ""}`}
                  className={clsx(
                    "flex h-10 min-w-[40px] items-center justify-center border px-3 text-sm transition-all duration-200",
                    {
                      "border-neutral-900 bg-neutral-900 text-white dark:border-white dark:bg-white dark:text-neutral-900":
                        isActive,
                      "border-neutral-200 bg-white text-neutral-900 hover:border-neutral-900 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:hover:border-white":
                        !isActive && isAvailableForSale,
                      "cursor-not-allowed border-neutral-200 bg-neutral-50 text-neutral-300 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-600":
                        !isAvailableForSale,
                    },
                  )}
                >
                  {value}
                </button>
              );
            })}
          </dd>
        </dl>
      </form>
    );
  });
}
