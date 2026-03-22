import Grid from "components/grid";
import { GridTileImage } from "components/grid/tile";
import { Product } from "lib/shopify/types";
import Link from "next/link";

const colorMap: Record<string, string> = {
  black: "#111111",
  white: "#F8F8F8",
  red: "#EF4444",
  blue: "#3B82F6",
  green: "#22C55E",
  yellow: "#EAB308",
  purple: "#A855F7",
  pink: "#EC4899",
  orange: "#F97316",
  gray: "#9CA3AF",
  grey: "#9CA3AF",
  navy: "#1E3A8A",
  brown: "#8B5E3C",
  beige: "#D6C3A3",
  silver: "#B8BDC6",
  bronze: "#8C6239",
  ivory: "#F5F0E6",
  almond: "#EFDECD",
  charcoal: "#36454F",
  caqui: "#B8A27A",
  khaki: "#B8A27A",
  "light brown": "#A68A72",
  "dark grey": "#6B7280",
  "dark gray": "#6B7280",
};

function normalize(value: string) {
  return value.trim().toLowerCase();
}

function getProductColorsFromShopify(product: Product): string[] {
  const colorOption = product.options.find((option) => {
    const name = normalize(option.name);
    return name === "color" || name === "colour";
  });

  if (colorOption?.values?.length) {
    return [...new Set(colorOption.values)];
  }

  const colorsFromVariants = product.variants
    .flatMap((variant) =>
      variant.selectedOptions
        .filter((selected) => {
          const name = normalize(selected.name);
          return name === "color" || name === "colour";
        })
        .map((selected) => selected.value),
    )
    .filter(Boolean);

  return [...new Set(colorsFromVariants)];
}

function resolveSwatchColor(color: string): string {
  const normalized = normalize(color);

  if (/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(normalized)) {
    return normalized;
  }

  if (/^(rgb|rgba|hsl|hsla)\(/i.test(normalized)) {
    return color;
  }

  return colorMap[normalized] || "#D1D5DB";
}

export default function ProductGridItems({
  products,
}: {
  products: Product[];
}) {
  return (
    <>
      {products.map((product) => {
        const colors = getProductColorsFromShopify(product);

        return (
          <Grid.Item key={product.handle} className="animate-fadeIn">
            <div className="flex h-full flex-col gap-2">
              <Link
                className="relative block h-full w-full"
                href={`/product/${product.handle}`}
                prefetch={true}
              >
                <GridTileImage
                  alt={product.title}
                  label={{
                    title: product.title,
                    amount: product.priceRange.maxVariantPrice.amount,
                    currencyCode:
                      product.priceRange.maxVariantPrice.currencyCode,
                  }}
                  src={product.featuredImage?.url}
                  imageFit="cover"
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 33vw, 33vw"
                />
              </Link>

              {colors.length ? (
                <div className="flex items-center gap-2 px-0.5">
                  <span className="text-xs font-medium text-neutral-600">
                    Color
                  </span>
                  <div className="flex items-center gap-1.5">
                    {colors.slice(0, 6).map((color, index) => {
                      const swatch = resolveSwatchColor(color);

                      return (
                        <Link
                          key={color}
                          href={`/product/${product.handle}?color=${encodeURIComponent(color)}`}
                          prefetch={true}
                          title={color}
                          aria-label={`Elegir color ${color}`}
                          className="inline-flex"
                        >
                          <span
                            className={[
                              "inline-block h-5 w-5 rounded-full border transition-transform hover:scale-105",
                              index === 0
                                ? "border-neutral-900 ring-1 ring-neutral-900 ring-offset-1"
                                : "border-neutral-300",
                            ].join(" ")}
                            style={{
                              backgroundColor: swatch,
                            }}
                          />
                        </Link>
                      );
                    })}
                    {colors.length > 6 ? (
                      <span className="text-xs text-neutral-500">
                        +{colors.length - 6}
                      </span>
                    ) : null}
                  </div>
                </div>
              ) : null}
            </div>
          </Grid.Item>
        );
      })}
    </>
  );
}
